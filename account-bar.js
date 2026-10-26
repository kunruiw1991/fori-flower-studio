(()=>{
 const bar=document.createElement('div');bar.className='site-account-bar';bar.setAttribute('aria-label','帳戶狀態');
 const status=document.createElement('span');status.setAttribute('role','status');status.textContent='確認登入狀態…';
 const action=document.createElement('a');action.hidden=true;action.target='_top';bar.append(status,action);document.body.prepend(bar);document.body.classList.add('has-account-bar');
 let busy=false;
 async function refresh(){
  if(busy)return;busy=true;
  try{
   let d={loggedIn:true,name:localStorage.getItem('fori-room-name')||''};
   if(window.ForiLocalApi){const r=await window.ForiLocalApi.handleApi('/api/flower-room/session');d=await r.json();}
   status.replaceChildren();
   const state=document.createElement('span');state.textContent=d.loggedIn?'● 已啟用本地花室':'尚未登入';status.append(state);
   if(d.loggedIn&&d.name){const name=document.createElement('span');name.translate=false;name.textContent=' · '+d.name;status.append(name);}
   const onRoom=/my-flower-room(?:\.html)?$/.test(location.pathname);
   action.textContent=onRoom?'回到創作':'我的花室';
   action.href=onRoom?'index.html':'my-flower-room.html';
   action.hidden=false;
  }catch{
   status.textContent='● 已啟用本地花室';
   action.textContent='我的花室';
   action.href='my-flower-room.html';
   action.hidden=false;
  }finally{busy=false;}
 }
 refresh();window.addEventListener('pageshow',refresh);window.addEventListener('focus',refresh);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
})();
