window.ForiRoomStamps={create(award){
 const journeys={'sunward':{title:'Salt & Light',label:'COAST'},'space':{title:'Midnight Observatory',label:'NIGHT'},'red-study':{title:'Orchard Picnic',label:'ORCHARD'}};award={...award,...journeys[award.id]};
 const shapes={sun:'<path d="M5 21V11a7 7 0 0 1 14 0v10M8 17h8M9 13a3 3 0 0 1 6 0M12 8V6M7 10l-1-1m11 1 1-1"/>',space:'<path d="M5 21V3h14v18M9 21V8l6-2v15M11 14h1"/>',red:'<path d="m12 2 9 10-9 10L3 12ZM3 12h18M12 2l-4 10 4 10 4-10Z"/>'};
 const stamp=document.createElement('span');stamp.className='art-stamp room-stamp';stamp.dataset.roomStamp=award.id;stamp.title='參展印章 · '+award.title;stamp.setAttribute('aria-label',stamp.title);
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.8');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('aria-hidden','true');svg.innerHTML=shapes[award.theme]||shapes.space;if(award.theme==='red'){stamp.classList.add('color-study-stamp');svg.innerHTML='<circle cx="9" cy="12" r="7" fill="#91394c" stroke="none"/><circle cx="16" cy="12" r="5" fill="#d29799" stroke="none"/>';}
 if(award.id==='red-study')svg.innerHTML='<circle cx="9" cy="12" r="7" fill="#b75a39" stroke="none"/><circle cx="16" cy="12" r="5" fill="#e8b67b" stroke="none"/>';
 const label=document.createElement('span');label.textContent=award.label||'ROOM';stamp.append(svg,label);return stamp;
}};
