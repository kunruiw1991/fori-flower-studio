(()=>{
 const readJSON=(key,fallback)=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback;}catch{return fallback;}};
 const writeJSON=(key,val)=>{try{localStorage.setItem(key,JSON.stringify(val));return true;}catch{return false;}};
 async function blobToDataUrl(blob){
  if(!blob)return '';
  if(typeof blob==='string')return blob;
  try{
   const url=URL.createObjectURL(blob);
   try{
    const img=new Image();
    await new Promise((res,rej)=>{img.onload=res;img.onerror=rej;img.src=url;});
    const maxDim=960,scale=Math.min(1,maxDim/Math.max(img.naturalWidth||1,img.naturalHeight||1));
    const c=document.createElement('canvas');
    c.width=Math.max(1,Math.round((img.naturalWidth||660)*scale));
    c.height=Math.max(1,Math.round((img.naturalHeight||720)*scale));
    const ctx=c.getContext('2d');
    ctx.drawImage(img,0,0,c.width,c.height);
    const webp=c.toDataURL('image/webp',0.86);
    if(webp&&webp.startsWith('data:image/'))return webp;
   }finally{URL.revokeObjectURL(url);}
  }catch{}
  return new Promise(resolve=>{const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=()=>resolve('');r.readAsDataURL(blob);});
 }
 function saveWorksList(works){
  if(writeJSON('fori-local-works-v1',works))return;
  while(works.length>1){works.pop();if(writeJSON('fori-local-works-v1',works))return;}
 }
 const defaultExhibitions=[{
  id:'sunward',title:'向陽',english:'SUNWARD',
  description:'以黃色為起點。看花朵、葉片與花器，如何承接一束光。',
  theme:'sun',published:true,
  stamp:{id:'sunward',title:'SUNWARD',theme:'sun',label:'SUNWARD'},
  items:[{id:'hana-07',image:'gallery/Hana-07.png',creator:'Hana',instagram:'hana5hana_',collection:'Hana',vessel:'novelty'}]
 }];

 async function handleApi(rawUrl,options={}){
  const u=new URL(rawUrl,location.href);
  const apiIdx=u.pathname.indexOf('/api/');
  const path=apiIdx>=0?u.pathname.slice(apiIdx):u.pathname;
  const method=(options.method||'GET').toUpperCase();
  const jsonResp=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json'}});
  let bodyObj=null;
  if(typeof options.body==='string'){try{bodyObj=JSON.parse(options.body);}catch{}}

  if(path==='/api/analytics'){
   const list=readJSON('fori-local-analytics-v1',[]);
   if(bodyObj){list.push({...bodyObj,ts:Date.now()});if(list.length>100)list.splice(0,list.length-100);writeJSON('fori-local-analytics-v1',list);}
   return jsonResp({ok:true});
  }
  if(path==='/api/flower-room/session'){
   const name=localStorage.getItem('fori-room-name')||'';
   return jsonResp({loggedIn:true,name});
  }
  if(path==='/api/flower-room/me'){
   const name=localStorage.getItem('fori-room-name')||'';
   return jsonResp({user:{id:'local-studio',name},legacyCount:0});
  }
  if(path==='/api/flower-room/consent'){
   writeJSON('fori-local-consent-v1',{...(bodyObj||{}),updatedAt:Date.now()});
   return jsonResp({ok:true});
  }
  if(path==='/api/flower-room/updates'){
   if(method==='GET')return jsonResp({registration:readJSON('fori-local-updates-v1',null)});
   if(method==='DELETE'){try{localStorage.removeItem('fori-local-updates-v1');}catch{}return jsonResp({ok:true});}
   const reg={email:String(bodyObj?.email||'').trim(),consent:!!bodyObj?.consent,updatedAt:Date.now()};
   writeJSON('fori-local-updates-v1',reg);
   return jsonResp({registration:reg});
  }
  if(path==='/api/flower-room/works'){
   const works=readJSON('fori-local-works-v1',[]);
   if(method==='GET'){
    const offset=Number(u.searchParams.get('offset')||0);
    const sorted=[...works].sort((a,b)=>Number(!!b.starred)-Number(!!a.starred)||(b.createdAt||0)-(a.createdAt||0));
    return jsonResp({works:sorted.slice(offset),next:null});
   }
   if(method==='POST'){
    const form=options.body instanceof FormData?options.body:null;
    const id=(form?form.get('id'):bodyObj?.id)||crypto.randomUUID();
    const title=String((form?form.get('title'):bodyObj?.title)||'我的花').trim()||'我的花';
    const rawState=form?form.get('state'):bodyObj?.state;
    const state=typeof rawState==='string'?JSON.parse(rawState):(rawState||null);
    const imgInput=form?form.get('image'):bodyObj?.image;
    const image=await blobToDataUrl(imgInput);
    const idx=works.findIndex(w=>w.id===id);
    const existing=idx>=0?works[idx]:null;
    const work={
     id,title,state,editable:!!state,
     image:image||existing?.image||'fori-logo.png',
     starred:existing?.starred||false,
     createdAt:existing?.createdAt||Date.now()
    };
    if(idx>=0)works[idx]=work;else works.unshift(work);
    saveWorksList(works);
    return jsonResp({ok:true,id,work});
   }
  }
  let m;
  if((m=path.match(/^\/api\/flower-room\/works\/([^/]+)\/star$/))){
   const id=decodeURIComponent(m[1]),works=readJSON('fori-local-works-v1',[]),w=works.find(x=>x.id===id);
   if(!w)return jsonResp({error:'找不到這件作品。'},404);
   w.starred=!!bodyObj?.starred;
   saveWorksList(works);
   return jsonResp({ok:true,starred:w.starred});
  }
  if((m=path.match(/^\/api\/flower-room\/works\/([^/]+)\/publication$/))){
   const id=decodeURIComponent(m[1]),pubs=readJSON('fori-local-publications-v1',{});
   if(method==='GET')return jsonResp({publication:pubs[id]||null});
   if(method==='POST'){
    const works=readJSON('fori-local-works-v1',[]),w=works.find(x=>x.id===id);
    const pub={id,status:'approved',creator:String(bodyObj?.creator||'花友').trim()||'花友',instagram:String(bodyObj?.instagram||'').trim(),collectionCount:1,updatedAt:Date.now()};
    pubs[id]=pub;writeJSON('fori-local-publications-v1',pubs);
    if(w){
     const subs=readJSON('fori-local-submissions-v1',[]);
     if(!subs.some(s=>s.id===id)){
      subs.unshift({id,title:w.title,creator:pub.creator,instagram:pub.instagram,image:w.image,vessel:w.state?.vase||'classic',published:true,submission_number:417+subs.length,collectionCount:1});
      writeJSON('fori-local-submissions-v1',subs);
     }
    }
    return jsonResp({publication:pub});
   }
  }
  if((m=path.match(/^\/api\/flower-room\/works\/([^/]+)$/))){
   const id=decodeURIComponent(m[1]),works=readJSON('fori-local-works-v1',[]),w=works.find(x=>x.id===id);
   if(!w)return jsonResp({error:'找不到這件作品。'},404);
   return jsonResp({work:w});
  }
  if(path==='/api/flower-room/albums'){
   const albums=readJSON('fori-local-albums-v1',[]);
   if(method==='GET')return jsonResp({albums});
   if(method==='POST'){
    const album={id:crypto.randomUUID(),name:String(bodyObj?.name||'作品集').trim()||'作品集',cover:bodyObj?.cover||'stone',works:Array.isArray(bodyObj?.works)?bodyObj.works:[],revision:1};
    albums.push(album);writeJSON('fori-local-albums-v1',albums);
    return jsonResp({id:album.id,album});
   }
  }
  if((m=path.match(/^\/api\/flower-room\/albums\/([^/]+)\/share$/))){
   const id=decodeURIComponent(m[1]),albums=readJSON('fori-local-albums-v1',[]),album=albums.find(a=>a.id===id);
   if(!album)return jsonResp({error:'找不到作品集。'},404);
   if(method==='GET')return jsonResp({share:album.share||null});
   if(method==='DELETE'){delete album.share;writeJSON('fori-local-albums-v1',albums);return jsonResp({ok:true});}
   if(method==='POST'){
    album.share={url:'my-flower-room.html?album='+encodeURIComponent(id),instagram:String(bodyObj?.instagram||'').trim().replace(/^@/,''),needsUpdate:false,revision:album.revision||1};
    writeJSON('fori-local-albums-v1',albums);
    return jsonResp({share:album.share});
   }
  }
  if((m=path.match(/^\/api\/flower-room\/albums\/([^/]+)$/))){
   const id=decodeURIComponent(m[1]),albums=readJSON('fori-local-albums-v1',[]),album=albums.find(a=>a.id===id);
   if(!album)return jsonResp({error:'找不到作品集。'},404);
   if(method==='PUT'){
    album.name=String(bodyObj?.name||album.name).trim()||album.name;
    album.cover=bodyObj?.cover||album.cover;
    album.works=Array.isArray(bodyObj?.works)?bodyObj.works:album.works;
    album.revision=(album.revision||1)+1;
    if(album.share)album.share.needsUpdate=true;
    writeJSON('fori-local-albums-v1',albums);
    return jsonResp({id:album.id,album});
   }
   return jsonResp({album});
  }
  if(path==='/api/flower-room/references'){
   const refs=readJSON('fori-local-collections-v1',[]);
   return jsonResp({works:refs,next:null});
  }
  if(path==='/api/exhibitions'){
   return jsonResp({exhibitions:defaultExhibitions});
  }
  if(path==='/api/works'){
   const vessel=u.searchParams.get('vessel')||'all';
   const offset=Number(u.searchParams.get('offset')||0);
   const subs=readJSON('fori-local-submissions-v1',[]);
   const filtered=vessel==='all'?subs:subs.filter(w=>w.vessel===vessel);
   return jsonResp({works:filtered.slice(offset),next:null});
  }
  if(path==='/api/submissions'&&method==='POST'){
   const form=options.body instanceof FormData?options.body:null;
   const id=(form?form.get('id'):bodyObj?.id)||crypto.randomUUID();
   const creator=String((form?form.get('creator'):bodyObj?.creator)||'花友').trim()||'花友';
   const instagram=String((form?form.get('instagram'):bodyObj?.instagram)||'').trim();
   const imgInput=form?form.get('image'):bodyObj?.image;
   const image=await blobToDataUrl(imgInput);
   const subs=readJSON('fori-local-submissions-v1',[]);
   const work={id,creator,instagram,image:image||'gallery/Hana-01.jpg',vessel:'classic',published:true,submission_number:417+subs.length,collectionCount:1};
   subs.unshift(work);writeJSON('fori-local-submissions-v1',subs);
   return jsonResp({ok:true,id,work});
  }
  if((m=path.match(/^\/api\/works\/([^/]+)\/collection$/))){
   const id=decodeURIComponent(m[1]),refs=readJSON('fori-local-collections-v1',[]);
   const idx=refs.findIndex(r=>r.id===id);
   if(method==='GET')return jsonResp({collected:idx>=0,count:idx>=0?1:0,loggedIn:true});
   if(method==='PUT'){
    if(idx<0){
     const subs=readJSON('fori-local-submissions-v1',[]),works=readJSON('fori-local-works-v1',[]);
     const found=subs.find(w=>w.id===id)||works.find(w=>w.id===id);
     refs.unshift({id,creator:found?.creator||found?.title||'花友',image:found?.image||'gallery/Hana-01.jpg',available:true});
     writeJSON('fori-local-collections-v1',refs);
    }
    return jsonResp({collected:true,count:1,loggedIn:true});
   }
   if(method==='DELETE'){
    if(idx>=0){refs.splice(idx,1);writeJSON('fori-local-collections-v1',refs);}
    return jsonResp({collected:false,count:0,loggedIn:true});
   }
  }
  if((m=path.match(/^\/api\/works\/([^/]+)$/))){
   const id=decodeURIComponent(m[1]);
   const subs=readJSON('fori-local-submissions-v1',[]),works=readJSON('fori-local-works-v1',[]);
   const work=subs.find(w=>w.id===id)||works.find(w=>w.id===id);
   if(!work)return jsonResp({error:'找不到作品。'},404);
   return jsonResp({work});
  }
  return jsonResp({ok:true});
 }

 if(!window.__foriFetchWrapped){
  window.__foriFetchWrapped=true;
  const nativeFetch=window.fetch.bind(window);
  window.fetch=function(input,init){
   const url=typeof input==='string'?input:(input?.url||'');
   if(url.startsWith('/api/')||url.startsWith('api/')||url.includes('/api/')){
    return handleApi(url,init);
   }
   return nativeFetch(input,init);
  };
 }
 window.ForiLocalApi={handleApi};

 const page=(location.pathname.split('/').pop()||'index').replace(/\.html$/,'')||'index';
 let visitor;try{visitor=localStorage.getItem('fori-visitor-v1');if(!visitor){visitor=crypto.randomUUID();localStorage.setItem('fori-visitor-v1',visitor);}}catch{visitor=crypto.randomUUID();}
 let source='直接／未知';try{if(document.referrer){const ref=new URL(document.referrer);source=ref.origin===location.origin?'站內':ref.hostname;}}catch{}
 const sent=new Set();
 window.ForiAnalytics={track(kind,key){if(key&&sent.has(kind+key))return;if(key)sent.add(kind+key);handleApi('/api/analytics',{method:'POST',body:JSON.stringify({id:crypto.randomUUID(),visitor,kind,path:page,source})}).catch(()=>{});}};
 let viewed=false;function view(){if(!viewed&&document.visibilityState==='visible'){viewed=true;window.ForiAnalytics.track('view');}}document.addEventListener('visibilitychange',view);view();
})();
