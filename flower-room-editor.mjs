import {normalizeRoomState} from './flower-room-state.mjs';
const button=document.getElementById('room-save'),message=document.getElementById('room-save-status'),titleInput=document.getElementById('room-save-title');
const draftKey='fori-flower-room-draft-v1';let busy=false,lastFingerprint='',saveId=null;
export function capture(){return normalizeRoomState({...JSON.parse(snapshot()),version:1,text:{to:$('card-to').value,message:$('card-message').value,from:$('card-from').value}});}
export function restore(raw){const s=normalizeRoomState(raw);if(!Object.hasOwn(vaseSizes,s.vase)||!Object.hasOwn(vaseColors,s.vaseColor)||!Object.hasOwn(backgroundColors,s.backgroundColor)||s.items.some(i=>{const d=data.find(d=>d.id===i.type);return !d||!d.colors[i.color];}))throw Error('這份作品包含目前無法使用的花材，原作品仍保存在花室。');remember();items=s.items;selected=items.at(-1)?.id??null;nextId=items.length+1;vase=s.vase;vaseColor=s.vaseColor;backgroundColor=s.backgroundColor;sunflowerNext=s.sunflowerNext;kingproteaNext=s.kingproteaNext;birdofparadiseNext=s.birdofparadiseNext;lilyNext=s.lilyNext;poppyNext=s.poppyNext;irisNext=s.irisNext;doubleLisianthusNext=s.doubleLisianthusNext;orchidNext=s.orchidNext;cosmosNext=s.cosmosNext;acaciaNext=s.acaciaNext;for(const key of ['to','message','from'])$('card-'+key).value=s.text[key];render();cardTextChanged();announce('已開啟花室作品，可繼續編輯。');}
function notice(text){let box=document.querySelector('.flower-room-notice');if(!box){box=document.createElement('div');box.className='flower-room-notice';box.setAttribute('role','status');document.body.append(box);}box.replaceChildren(document.createTextNode(text));const close=document.createElement('button');close.textContent='×';close.setAttribute('aria-label','關閉提示');close.onclick=()=>box.remove();box.append(close);}
async function api(path,options){const r=await (window.ForiLocalApi?window.ForiLocalApi.handleApi(path,options):fetch(path,{cache:'no-store',...options})),d=await r.json();if(!r.ok)throw Error(d.error||'暫時無法保存，請稍後重試。');return d;}
button.onclick=async()=>{
 if(busy)return;if(!document.getElementById('room-management-consent').checked){message.textContent='請先確認作品管理說明。';return;}if(!items.length){message.textContent='先加入花材，再保存作品。';return;}if(!greetingValid()){message.textContent='請先將祝福文字縮短至三行，再保存。';return;}
 busy=true;button.disabled=true;titleInput.disabled=true;message.textContent='正在確認花室狀態…';
 try{
  const state=capture(),title=titleInput.value.trim()||'我的花 · '+new Date().toLocaleDateString('zh-TW'),account=await api('/api/flower-room/me');
  if(!account.user){try{sessionStorage.setItem(draftKey,JSON.stringify({state,title,time:Date.now()}));}catch{throw Error('瀏覽器無法暫存作品。請先下載圖片，再到「我的花室」上傳。');}location.assign('my-flower-room.html');return;}
  message.textContent='正在保存圖片與花材設定…';
  const canvas=await renderCardCanvas(CARD_EXPORT_SCALE,state.text),blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));canvas.width=0;canvas.height=0;
  if(!blob||blob.size>10*1024*1024)throw Error('圖片暫時無法保存，請重試或下載後上傳。');
  if(JSON.stringify(capture())!==JSON.stringify(state))throw Error('作品剛剛有變動，請再按一次保存。');
  const fingerprint=JSON.stringify(state)+title;if(fingerprint!==lastFingerprint){saveId=crypto.randomUUID();lastFingerprint=fingerprint;}
  const form=new FormData();form.set('id',saveId);form.set('title',title);form.set('state',JSON.stringify(state));form.set('managementConsent','management-2026-10-18');form.set('image',blob,'artwork.png');
  await api('/api/flower-room/works',{method:'POST',body:form});window.ForiAnalytics?.track('save',saveId);sessionStorage.removeItem(draftKey);message.textContent='已存入我的花室，不會公開展示。';button.textContent='已保存至我的花室';
 }catch(e){message.textContent=e.message;}finally{busy=false;button.disabled=false;titleInput.disabled=false;}
};
$('finish').addEventListener('click',()=>{button.textContent='存入我的花室';});
$('card-dialog').addEventListener('cancel',e=>{if(busy)e.preventDefault();});
const params=new URLSearchParams(location.search),workId=params.get('flower-room');
if(params.has('flower-room-draft')){
 try{const draft=JSON.parse(sessionStorage.getItem(draftKey)||'null');if(!draft||Date.now()-draft.time>86400000)throw Error('暫存已過期，請回到我的花室或重新創作。');await window.ForiRose.ready;restore(draft.state);titleInput.value=draft.title;$('finish').click();message.textContent='作品已還原。請按「存入我的花室」完成保存。';}catch(e){notice(e.message);}finally{const u=new URL(location.href);u.searchParams.delete('flower-room-draft');window.history.replaceState(null,'',u.pathname+u.search+u.hash);}
}else if(workId){
 try{if(!/^[a-f0-9-]{36}$/i.test(workId))throw Error('作品連結無效。');notice('正在開啟你的作品…');const {work}=await api('/api/flower-room/works/'+encodeURIComponent(workId));if(!work.state)throw Error('這件作品是圖片收藏，請在我的花室查看。');await window.ForiRose.ready;if(items.length&&!confirm('開啟花室作品並取代目前畫面？目前創作可按上一步復原。'))throw Error('已保留目前畫面。');restore(work.state);titleInput.value=work.title;notice('已開啟「'+work.title+'」，再次保存會新增一個版本。');}catch(e){notice(e.message);}
}
