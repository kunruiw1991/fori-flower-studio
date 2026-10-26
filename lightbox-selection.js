// Weighted sampling without replacement; level 1/2/3 has 6/3/1 tickets.
const lightboxWeight=w=>w.lightboxLevel===1?6:w.lightboxLevel===2?3:w.lightboxLevel===3?1:w.lightboxPriority===true?6:1;
globalThis.ForiLightbox={weight:lightboxWeight,choose(works,random=Math.random,count=2){
 const pool=[...new Map(works.map(w=>[w.image,w])).values()],chosen=[];
 while(chosen.length<count&&pool.length){const total=pool.reduce((sum,w)=>sum+lightboxWeight(w),0);let ticket=random()*total,index=pool.length-1;for(let i=0;i<pool.length;i++){ticket-=lightboxWeight(pool[i]);if(ticket<0){index=i;break;}}chosen.push(pool.splice(index,1)[0]);}
 return chosen;
}};
