import {normalizeRoomState} from './flower-room-state.mjs';
try{
 const id=new URLSearchParams(location.search).get('work');
 if(!/^[a-f0-9-]{36}$/i.test(id||''))throw Error('Invalid work');
 let work=null;
 try{
  const works=JSON.parse(localStorage.getItem('fori-local-works-v1')||'[]');
  work=works.find(w=>w.id===id)||null;
 }catch{}
 if(!work&&window.ForiLocalApi){
  const response=await window.ForiLocalApi.handleApi('/api/flower-room/works/'+encodeURIComponent(id));
  if(response.ok){const d=await response.json();work=d.work;}
 }
 if(!work)throw Error('Unavailable work');
 const state=normalizeRoomState(work.state);
 await window.ForiRose.ready;
 items=state.items;vase=state.vase;vaseColor=state.vaseColor;selected=null;render();
 const drawing=document.getElementById('scene').cloneNode(true);
 const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
 document.querySelectorAll('body>svg defs').forEach(d=>{for(const child of d.children)defs.append(child.cloneNode(true));});
 drawing.prepend(defs);drawing.querySelectorAll('.selection-ring').forEach(e=>e.remove());
 drawing.querySelectorAll('[tabindex]').forEach(e=>{e.removeAttribute('tabindex');e.removeAttribute('role');});
 drawing.setAttribute('role','img');drawing.setAttribute('aria-label',work.title);
 document.body.replaceChildren(drawing);document.body.classList.add('room-art-ready');
}catch(error){console.error("Room artwork render failed",error);document.body.replaceChildren();window.parent.postMessage({type:'room-art-error'},location.origin);}
