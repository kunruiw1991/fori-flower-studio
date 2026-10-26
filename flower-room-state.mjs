const token=v=>typeof v==='string'&&/^[a-z][a-z0-9-]{0,39}$/.test(v);
const num=(v,min,max)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
export function normalizeRoomState(input){
 if(!input||input.version!==1||!Array.isArray(input.items)||input.items.length>50||!input.items.length||!token(input.vase)||!token(input.vaseColor)||!token(input.backgroundColor))throw Error('作品設定無效');
 const items=input.items.map((v,i)=>{if(!v||!token(v.type)||!Number.isInteger(v.color)||v.color<0||v.color>30||!Number.isInteger(v.variant)||v.variant<0||v.variant>20)throw Error('花材設定無效');const out={id:i+1,type:v.type,color:v.color,variant:v.variant};for(const [key,min,max]of [['h',10,1000],['a',-180,180],['x',-1000,1500],['scale',.2,3],['tone',-.5,.5],['bend',-3,3],['knee',-2,2]]){if(!num(v[key],min,max))throw Error('花材位置無效');out[key]=v[key];}return out;});
 const text={};for(const key of ['to','message','from']){const value=input.text?.[key]??'';if(typeof value!=='string'||value.length>1000)throw Error('文字過長');text[key]=value;}
 const counters={};for(const key of ['sunflowerNext','kingproteaNext','birdofparadiseNext','lilyNext','poppyNext','irisNext','doubleLisianthusNext','orchidNext','cosmosNext','acaciaNext'])counters[key]=Number.isInteger(input[key])&&input[key]>=0&&input[key]<6?input[key]:0;
 return {version:1,items,vase:input.vase,vaseColor:input.vaseColor,backgroundColor:input.backgroundColor,...counters,text};
}
