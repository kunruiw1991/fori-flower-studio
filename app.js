const naturalColorIds=new Set(['pincushion','celosia','astilbe','stock','waxflower','delphinium','lavender','gypsophila','bluestar','birdofparadise']);
const vectorJoinCache=new Map();
const NS='http://www.w3.org/2000/svg';
const data=[
 {id:'amaranthus',name:'垂穗莧',en:'Love-lies-bleeding',defaultColor:1,previewColor:1,size:30,extra:true,vectorSpray:true,artSize:[115,150],stemWidth:2,colors:[['酒紅','#9c465d'],['嫩綠','#a9b975']]},
 {id:'gloriosa',name:'火焰百合',en:'Gloriosa lily',size:30,extra:true,vectorSpray:true,artSize:[115,150],stemWidth:1.7,colors:[['紅色','#c55343'],['黃色','#e1c75f']]},
 {id:'alstroemeria',name:'水仙百合',en:'Alstroemeria',size:30,extra:true,vectorSpray:true,artSize:[115,150],stemWidth:1.8,colors:[['粉色','#deb0c2'],['白色','#eee9dd'],['黃色','#e3cc7a'],['橘色','#dc9472'],['紫色','#b293bd']]},

 {id:'fiddlehead',name:'蕨類捲芽',en:'Fern fiddlehead',size:28,extra:true,vectorSpray:true,artSize:[95,150],stemWidth:2,stemColor:'#7f9069',colors:[['苔綠','#8b9c72'],['深綠','#627e64'],['青褐','#a59d79']]},
 {id:'snapdragon',name:'金魚草',en:'Snapdragon',size:30,extra:true,vectorSpray:true,artSize:[100,150],stemWidth:1.8,colors:[['奶白','#eee9de'],['柔粉','#dfb4c5'],['淡黃','#e5d69b'],['珊瑚','#cf8b78']]},
 {id:'marguerite',name:'法國小菊',en:'Marguerite daisy',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,colors:[['奶白','#f4f0e5'],['淡粉','#e5c5d0'],['淡黃','#e8dca5']]},

 {id:'fanpalm',name:'蒲葵葉',en:'Chinese fan palm',size:32,extra:true,vectorSpray:true,fanPalm:true,artSize:[200,160],stemWidth:1.8,stemColor:'#7c8968',colors:[['葉綠','#8b9c72'],['深綠','#627f60'],['嫩綠','#a5af7a']]},
 {id:'silverfanpalm',name:'銀藍棕櫚葉',en:'Silver blue palm',size:32,extra:true,vectorSpray:true,fanPalm:true,artSize:[200,160],stemWidth:1.8,stemColor:'#899b97',colors:[['銀藍','#a5b9bb'],['銀灰','#b8c1b8'],['灰綠','#97aaa0']]},
 {id:'driedfanpalm',retired:true,name:'乾燥棕櫚葉',en:'Dried fan palm',size:32,extra:true,vectorSpray:true,fanPalm:true,artSize:[200,160],stemWidth:1.6,stemColor:'#a08d70',colors:[['麥褐','#c6b28d'],['米白','#ddd0b4'],['煙褐','#a7967c']]},
 {id:'curlywillow',name:'雲龍柳',en:'Curly willow',size:29,extra:true,vectorSpray:true,artSize:[112,170],stemWidth:1.7,stemColor:'#97856e',colors:[['枝褐','#9c866b'],['灰褐','#9d978b'],['青褐','#899275']]},
 {id:'pulsatilla',name:'白頭翁',en:'Pulsatilla',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#8c997c',colors:[['銀白','#e1dfd3'],['米白','#e6ddc8'],['灰綠','#c0c7ae']]},
 {id:'gladiolus',name:'劍蘭',en:'Gladiolus',size:30,extra:true,vectorSpray:true,artSize:[112,180],stemWidth:2,stemColor:'#8b9878',colors:[['奶白','#eee7db'],['淡粉','#dfb1bc'],['珊瑚','#cf8b78'],['紫色','#ac95ba']]},
 {id:'horsetail',name:'木賊',en:'Horsetail',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:2.2,stemColor:'#7d8c65',colors:[['苔綠','#829371'],['深綠','#617b62']]},
 {id:'barebranch',name:'枯枝',en:'Bare branch',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.8,stemColor:'#948575',colors:[['木褐','#95816e'],['灰褐','#a19a8e'],['深褐','#75685c']]},
 {id:'ivy',name:'常春藤',en:'Ivy',size:28,extra:true,vectorSpray:true,artSize:[120,180],stemWidth:1.4,stemColor:'#859071',colors:[['葉綠','#839775'],['深綠','#627e64'],['斑葉','#a8b58a']]},
 {id:'ginkgobranch',name:'銀杏枝',en:'Ginkgo',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#998b6b',colors:[['秋黃','#d3bd65'],['嫩綠','#a2ad76']]},
 {id:'camellia',name:'山茶花',en:'Camellia',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#829071',colors:[['柔紅','#c4767f'],['白色','#eee8dc'],['淡粉','#dfb4bb']]},
 {id:'tallowbranch',name:'烏桕',en:'Chinese tallow',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#8b7968',colors:[['米白','#e9e4d2'],['暖白','#eee6d7']]},
 {id:'leucadendron',name:'非洲鬱金香',en:'Leucadendron',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#796b59',colors:[['酒紅','#795254'],['檸檬黃','#c9c780'],['銅粉','#c49580']]},
 {id:'acacia',name:'金合歡',en:'Acacia',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#849173',colors:[['金黃','#dbc169'],['奶黃','#e4d397']]},
 {id:'caspia',name:'卡斯比雅',en:'Caspia',size:30,defaultColor:1,previewColor:1,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#92977e',colors:[['淡紫','#b8a2c4'],['霧白','#dedbd5'],['紫色','#9483b2']]},
 {id:'solidago',name:'麒麟草',en:'Solidago',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#8c9970',colors:[['金黃','#d9c46c'],['淡黃','#e5d69b']]},
 {id:'echinops',name:'山防風',en:'Echinops',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.4,stemColor:'#8e9a80',colors:[['灰藍','#96aab7'],['灰綠','#a7b19a'],['霧紫','#aaa0b9']]},
 {id:'lunaria',name:'銀扇草',en:'Lunaria',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.3,stemColor:'#a2997d',colors:[['銀白','#e6e2d3'],['米金','#d5c6a3']]},
 {id:'cosmos',name:'大波斯菊',en:'Cosmos',size:31,defaultColor:1,previewColor:1,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.3,colors:[['柔粉','#dca4b7'],['白色','#f3efe5'],['深粉','#b9698e']]},
 {id:'clematis',name:'鐵線蓮',en:'Clematis',size:32,extra:true,vectorSpray:true,artSize:[112,150],stemWidth:1.25,colors:[['淡紫','#b1a0cb'],['紫紅','#a7759a'],['奶白','#e8e3d7']]},
 {id:'muscari',name:'葡萄風信子',en:'Grape hyacinth',size:25,extra:true,vectorSpray:true,artSize:[90,150],stemWidth:1.5,colors:[['霧藍','#899ac5'],['深藍','#727eae'],['奶白','#e7e5da']]},
 {id:'campanula',name:'風鈴草',en:'Bellflower',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.5,colors:[['淡紫','#b6a5ce'],['柔粉','#ddb4c5'],['奶白','#eee9de']]},
 {id:'pussywillow',name:'銀柳',en:'Pussy willow',size:28,extra:true,vectorSpray:true,artSize:[104,150],stemWidth:1.7,stemColor:'#918171',colors:[['銀白','#e4dfd4'],['暖灰','#c9bdad']]},
 {id:'lotuspod',name:'蓮蓬',en:'Lotus pod',size:32,extra:true,vectorSpray:true,artSize:[100,150],stemWidth:2,colors:[['青綠','#98a17a'],['乾褐','#a29476']]},
 {id:'wheat',name:'麥穗',en:'Wheat',size:27,extra:true,vectorSpray:true,artSize:[100,150],stemWidth:1.3,stemColor:'#b2a077',colors:[['麥金','#cfba83'],['青麥','#b0b58a']]},
 {id:'maplebranch',name:'楓葉枝',en:'Maple branch',size:30,extra:true,vectorSpray:true,artSize:[112,150],stemWidth:1.6,stemColor:'#937963',colors:[['秋橘','#c98960'],['深紅','#a65d5a'],['嫩綠','#9ca777']]},
 {id:'hollyleaf',name:'冬青葉',en:'Holly leaves',size:29,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.6,colors:[['深綠','#667e68'],['灰綠','#91a18c']]},
 {id:'hypericum',name:'龍珠果',en:'Hypericum berries',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.7,colors:[['果紅','#c35e69'],['柔粉','#d6a0a0'],['奶綠','#c4c698']]},
 {id:'lanternfruit',name:'燈籠果',en:'Chinese lantern',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.7,colors:[['暖橘','#d59059'],['陶紅','#bd7160'],['淡杏','#dec39a']]},
 {id:'crabapple',name:'小蘋果',en:'Crabapple',size:30,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.7,colors:[['奶白','#e7e6bb'],['青綠','#b7bd83'],['柔紅','#b96861']]},
 {id:'eucalyptuspod',name:'桉樹果',en:'Eucalyptus pods',size:28,extra:true,vectorSpray:true,artSize:[108,150],stemWidth:1.8,stemColor:'#8d8070',colors:[['橄欖綠','#b3ae79'],['灰綠','#9ba694'],['木褐','#a2937e']]},
 {id:'freesia',name:'小蒼蘭',en:'Freesia',size:29,extra:true,vectorSpray:true,artSize:[104,150],stemWidth:1.6,colors:[['奶白','#f7f0dc'],['淡黃','#ead186'],['淡紫','#baa1cf'],['柔粉','#e4b1c0']]},
 {id:'nigella',name:'黑種草',en:'Love-in-a-mist',size:27,extra:true,vectorSpray:true,artSize:[112,150],stemWidth:1.3,colors:[['霧藍','#9aafce'],['奶白','#f1eee3'],['淡粉','#dec0ce']]},
 {id:'smilax',name:'山歸來',en:'Smilax berries',size:28,extra:true,vectorSpray:true,artSize:[112,150],stemWidth:1.6,stemColor:'#82775f',colors:[['果紅','#bf5350'],['橘紅','#cd7750']]},
 {id:'snowberry',name:'銀果',en:'Snowberry',size:29,extra:true,vectorSpray:true,artSize:[104,150],stemWidth:1.7,colors:[['乳白','#f0eddf'],['淡粉','#e2bbc9']]},
 {id:'callalily',name:'海芋',en:'Calla lily',size:35,vectorHead:true,stemWidth:2.2,colors:[['奶白','#f6f1df'],['淡黃','#ead58e'],['霧粉','#e4b9bf'],['深紫','#76536f']]},
 {id:'phalaenopsis',name:'蝴蝶蘭',en:'Phalaenopsis',size:35,extra:true,vectorSpray:true,artSize:[112,157],stemWidth:2,colors:[['白色','#f7f2e9'],['霧粉','#e6b7ce'],['淡紫','#bea3cf'],['金黃','#e0c563'],['青綠','#c1c58a'],['深紫','#9b579a'],['白底紫邊','#f0e9e4'],['黃底紅斑','#dfd28c'],['白底紫斑','#f1e9e6'],['紫色脈紋','#dfcadd']]},
 {id:'treepeony',name:'牡丹',en:'Tree peony',size:43,vectorHead:true,stemWidth:2.5,colors:[['柔粉','#e6afbe'],['奶白','#f5ecdd'],['珊瑚','#df948d'],['酒紅','#9d4c62']]},
 {id:'doublelisianthus',name:'洋桔梗',en:'Double lisianthus',size:33,vectorHead:true,colors:[['白紫邊','#7951b4'],['奶白','#fcfaf2'],['淡粉','#e5b8c8'],['紫色','#b5a0cc'],['淺綠','#cbd4ab']]},
 {id:'minirose',name:'迷你玫瑰',en:'Mini rose',size:29,vectorHead:true,stemWidth:1.5,colors:[['柔粉','#e6b3b0'],['奶白','#fcfaf2'],['杏橘','#edb082'],['黃色','#e8c65b'],['經典紅','#c52e36']]},
{"id": "spidermum", "name": "煙火菊", "en": "Spider chrysanthemum", "size": 43, "vectorHead": true, "stemWidth": 2.2, "colors": [["橘金", "#b96b35"], ["黃色", "#e3cd83"], ["白色", "#eeeade"], ["粉色", "#ddb3c7"]]},
{"id": "feathergerbera", "name": "羽毛太陽", "en": "Spider gerbera", "size": 40, "vectorHead": true, "stemWidth": 2.1, "colors": [["粉色", "#e6b1c3"], ["白色", "#fcfaf3"], ["黃色", "#e7c965"], ["橘色", "#e79a56"], ["紅色", "#c94c53"]]},
{"id": "poppy", "name": "罌粟", "en": "Poppy", "size": 35, "vectorHead": true, "stemWidth": 1.7, "colors": [["紅色", "#ce5149"], ["橘色", "#e49b62"], ["黃色", "#ebce72"], ["白色", "#fcfaf1"]]},
{"id": "laceflower", "name": "蕾絲花", "en": "Lace flower", "size": 33, "artSize": [110, 125], "colors": [["白色", "#f5f3e8"]], "extra": true, "vectorSpray": true, "stemWidth": 1.5},
{"id": "sweetpea", "name": "香豌豆", "en": "Sweet pea", "size": 31, "artSize": [95, 130], "colors": [["粉色", "#e6b6ca"], ["白色", "#fffaf5"], ["紫色", "#a28cb9"]], "extra": true, "vectorSpray": true, "stemWidth": 1.5},
{"id": "gomphrena", "name": "千日紅", "en": "Globe amaranth", "size": 23.4, "artSize": [85.5, 117], "colors": [["紅色", "#b94d64"], ["粉色", "#dfa7c2"], ["漸層橘紅", "#dc8955"], ["白色", "#fbf7ec"]], "extra": true, "vectorSpray": true, "stemWidth": 1.35},
{"id": "lilyofthevalley", "name": "鈴蘭", "en": "Lily of the valley", "size": 30.8, "artSize": [93.5, 148.5], "colors": [["白色", "#fffdf5"],["淡粉", "#e5c6d6"]], "extra": true, "vectorSpray": true, "stemWidth": 1.5},
 {id:'rose',name:'玫瑰',en:'Rose',size:27,colors:[['經典紅','#c52e36'],['柔粉','#e6b3b0'],['奶白','#fcfaf2'],['酒紅','#9d344c'],['杏橘','#edb082'],['黃色','#e8c65b'],['深藍色','#344b83'],['紫色','#9773b1'],['漸層紅色','#d86572']]},
 {id:'sunflower',name:'向日葵',en:'Sunflower',size:44,newHead:true,naturalColor:true,neutralKey:true,stemWidth:2.8,colors:[['金黃','#e4b949'],["奶白", "#eee8d2"],["淡黃", "#e9d888"],["銅紅", "#ae5938"],["酒紅", "#813b40"]]},
 {id:'carnation',name:'康乃馨',en:'Carnation',size:28,colors:[['淺粉','#f5dddc'],['白色','#fcfaf2'],['桃紅','#e5a6bf'],['珊瑚','#efbeb1'],['經典紅','#cf303b']]},
 {id:'tulip',name:'鬱金香',en:'Tulip',size:30.03,colors:[['黃色','#e9cd71'],['奶白','#fcfaf2'],['粉色','#e2a9b3'],['紫色','#b6a0c2']]},
 {id:'gerbera',name:'非洲菊',en:'Gerbera',size:32.3,colors:[['杏橘','#e3a27f'],['黃色','#e6c775'],['粉色','#d99aaa'],['白色','#fcfaf2'],['橘色','#ed913d'],['桃紅','#c64c91'],['紅色','#bf3047']]},
 {id:'lisianthus',name:'單瓣桔梗',en:'Single lisianthus',previewColor:2,size:28,colors:[['奶白','#fcfaf2'],['淡粉','#e5b8c8'],['紫色','#b5a0cc'],['淺綠','#cbd4ab']]},
 {id:'pompon',previewColor:1,name:'乒乓菊',en:'Pompon mum',size:32,colors:[['奶白','#fcfaf2'],['黃色','#e2cc78'],['淺綠','#c4d2a0'],['淡粉','#e4b8c2']]},
 {id:'ranunculus',name:'陸蓮',en:'Ranunculus',size:30,newHead:true,colors:[['柔粉','#ecc2c5'],['奶白','#fcfaf2'],['橘色','#eeb18b'],['酒紅','#a3445e']]},
 {id:'peonymum',name:'牡丹菊',en:'Peony mum',size:48.75,newHead:true,colors:[['粉紫','#d4b1cf'],['奶白','#fcfaf2'],['黃色','#e9d27c']]},
 {id:'pincushion',name:'針墊花',en:'Pincushion protea',size:39,extra:true,newAtlas:true,keepAspect:true,artSize:[92,92],stemWidth:2.5,colors:[['橘色','#d58b3d'],["黃色", "#dfbf53"],["紅色", "#ba4c40"]]},
 {"id":"peony","name":"芍藥","en":"Peony","size":39,"artSize":[88,86],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"recolorPetals":true,"stemWidth":2.4,"colors":[["柔粉","#edbccd"],["白色","#fffdfa"],["珊瑚","#e79a87"],["酒紅","#983d53"]]},
 {"id":"dahlia","name":"大理花","en":"Dahlia","size":34.2,"artSize":[75.6,75.6],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"recolorPetals":true,"stemWidth":2.4,"colors":[["杏橘","#e9b491"],["奶白","#f4efdf"],["柔粉","#e9adc6"],["黃色","#edcd70"],["酒紅","#873548"]]},
 {"id":"lily","name":"百合花","en":"Lily","size":48.3,"artSize":[117.3,108.1],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"recolorPetals":true,"stemWidth":2.4,"colors":[["白色","#fffdfa"],["柔粉","#e8abc5"],["黃色","#edcd73"],["橘色","#e99a59"],["紅色","#ba4b55"]]},
 {id:'kingprotea',name:'帝王花',en:'King protea',size:49.98,extra:true,newAtlas:true,keepAspect:true,artSize:[112.2,114.24],stemWidth:3,colors:[['霧粉','#c18c98'],['白色紅邊','#f3efeb']]},
 {id:'thistle',name:'薊花',en:'Thistle',size:23,extra:true,newAtlas:true,keepAspect:true,spray:true,recolorPetals:true,artSize:[48,62],stemWidth:1.9,colors:[['藍紫','#8d98bf'],['淡紫','#b3a0c2']]},
 {id:'cotton',name:'棉花',en:'Cotton',stemColor:'#84694c',stemWidth:2.4,size:35.2,extra:true,newAtlas:true,keepAspect:true,spray:true,blueKey:true,artAnchorX:0.5140664961636828,artSize:[99,132],colors:[['棉白','#fcfaf2']]},
 {id:'butterflyranunculus',name:'蝴蝶陸蓮',en:'Butterfly ranunculus',size:25.5,extra:true,newAtlas:true,keepAspect:true,spray:true,artAnchorX:0.4847457627118644,recolorPetals:true,artSize:[80.75,123.25],colors:[['柔粉','#efbec7'],['奶白','#fcfaf2'],['淡黃','#ecd88d']]},
 {id:'silverdollareucalyptus',name:'大圓葉尤加利',en:'Silver dollar eucalyptus',size:34,foliage:true,colors:[['銀綠','#8b9e8d']]},
 {id:'gypsophila',name:'滿天星',keepAspect:true,artAnchorX:0.535473,en:'Baby’s breath',size:33,extra:true,newAtlas:true,artSize:[94,126],colors:[['白色','#fcfaf2'],["淡粉", "#ead0da"]]},
 {id:'oncidium',name:'文心蘭',keepAspect:true,artAnchorX:0.401141,en:'Oncidium',size:32,extra:true,newAtlas:true,artSize:[70.4,120],colors:[['黃色','#ebcb62']]},
 {id:'buttonmum',name:'鈕扣菊',en:'Button mum',size:15,extra:true,colors:[['黃綠','#cad88c'],['黃色','#e8ca69'],['奶白','#fcfaf2']]},
 {id:'dianthus',name:'深山櫻',en:'Japanese dianthus',size:35,extra:true,colors:[['淡粉','#efc5cf'],['白色','#fcfaf2'],['淡紫','#c3a3c7']]},
 {id:'delphinium',name:'飛燕草',en:'Delphinium',size:28,extra:true,colors:[['藍紫','#9299d5'],["白色", "#eeeade"],["粉色", "#ddb7cd"]]},
 {id:'fountaingrass',name:'狼尾',en:'Fountain grass',size:26,extra:true,newAtlas:true,keepAspect:true,spray:true,artAnchorX:0.488,artSize:[40,180],colors:[['原色','#ccb67d'],['霧粉','#e7d6dc']]},
{"id": "birdnestfern", "name": "山蘇", "en": "Bird’s nest fern", "size": 38, "artSize": [65, 170], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "fishtailfern", "name": "魚尾山蘇", "en": "Fishtail fern", "size": 38, "artSize": [88, 155], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "fiddlephilodendron", "name": "琴葉蔓綠絨", "en": "Fiddle-leaf philodendron", "size": 38, "artSize": [96, 150], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "irisleaf", "name": "龍文蘭", "en": "Variegated strap leaves", "size": 38, "artSize": [80, 205], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "asparagusfern", "name": "文竹", "en": "Asparagus fern", "size": 38, "artSize": [120, 156], "colors": [["葉綠", "#6f8759"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "dustymiller", "name": "銀葉菊", "en": "Dusty miller", "size": 38, "artSize": [100, 145], "colors": [["銀綠", "#b7c0b3"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.8},
{"id": "birch", "name": "樺木", "en": "Birch", "size": 38, "artSize": [110, 180], "colors": [["葉綠", "#567849"]], "leafMaterial": true, "stemWidth": 1.8, "foliage": true},
{"id": "angelphilodendron", "name": "天使蔓綠絨", "en": "Lacy tree philodendron", "size": 43, "artSize": [110, 140], "colors": [["葉綠", "#6b8458"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 2},
{"id": "silveroak", "name": "銀樺木", "en": "Silky oak foliage", "size": 38, "artSize": [98, 175], "colors": [["葉綠", "#b6b9a4"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 1.5},
{"id": "fatsia", "name": "八角金盤葉", "en": "Fatsia", "size": 43, "artSize": [120, 128], "colors": [["葉綠", "#45613b"]], "extra": true, "vectorLeaf": true, "leafMaterial": true, "stemWidth": 2},
 {id:'fern',name:'羊齒',en:'Fern',size:38,extra:true,newAtlas:true,keepAspect:true,spray:true,leafMaterial:true,artAnchorX:0.4701298701298701,artSize:[85,160],colors:[['葉綠','#82936e']]},
 {id:'foxtail',name:'狗尾草',en:'Foxtail grass',size:16,extra:true,colors:[['草綠','#a2ae72']]},
 {id:'chamomile',name:'洋甘菊',en:'Chamomile',size:17,extra:true,newAtlas:true,artSize:[76,80],colors:[['白黃','#eee8cd']]},
 {id:'bluestar',name:'藍星花',en:'Blue star',size:20,extra:true,newAtlas:true,artSize:[78,85],colors:[['淡藍','#9bbfda'],['白色','#eeeade'],['淡粉','#deb9cb']]},
 {id:'lavender',name:'薰衣草',en:'Lavender',size:18,extra:true,newAtlas:true,artSize:[38,140],colors:[['紫色','#a597c4'],["白色", "#eeeade"],["淡粉", "#d9b8c6"]]},
 {id:'hydrangea',name:'繡球花',en:'Hydrangea',size:48,extra:true,newAtlas:true,artSize:[112,100],colors:[['藍紫','#a9afd7'],['粉色','#e4b3c7'],['奶白','#fcfaf2'],['淺綠','#c6d7ae']]},
 {id:'anthurium',name:'火鶴',en:'Anthurium',size:34,extra:true,newAtlas:true,artSize:[80,94],colors:[['經典紅','#c83642'],['白色','#fcfaf2'],['紫色','#9867ae']]},
 {id:'pointedeucalyptus',name:'尖葉尤加利',en:'Willow eucalyptus',size:30,foliage:true,colors:[['灰綠','#829c8d']]},
 {id:'monstera',name:'龜背芋',en:'Monstera',size:54,extra:true,leafAtlas:true,artSize:[125,145],colors:[['深綠','#537b58']]},
 {id:'cedar',name:'雪松',en:'Cedar',size:35,foliage:true,colors:[['松綠','#829682']]},
 {id:'eucalyptus',name:'小圓葉尤加利',en:'Eucalyptus',size:25,foliage:true,colors:[['灰綠','#8b9e8d']]},
 {id:'birdofparadise',artAnchorX:0.3800666317715875,name:'天堂鳥',en:'Bird of paradise',size:55.2,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[129.6,173.98],stemWidth:4,colors:[['橘藍','#e7a146'],['金黃','#e3c45a']]},
 {id:'celosia',artAnchorX:0.49727800155084345,name:'雞冠花',en:'Cockscomb',size:34,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[86,78],stemWidth:2.3,colors:[['酒紅','#a3445e'],["黃色", "#dfc45c"],["橘色", "#d88b4b"],["粉色", "#d58cab"]]},
 {id:'waxflower',artAnchorX:0.5395832374390508,name:'臘梅',en:'Waxflower',size:30,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[86,142],stemColor:'#8b8064',stemWidth:1.6,recolorPetals:true,colors:[['淡粉','#f2d9e2'],["白色", "#eeeade"],["紫色", "#b084b5"]]},
 {id:'astilbe',artAnchorX:0.44077907197702554,name:'泡盛',en:'Astilbe',size:30,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[80,145],stemWidth:1.6,colors:[['淡粉','#e5c6cf'],["白色", "#eeeade"],["深紅", "#a54c65"]]},
 {id:'greendianthus',artKey:'greendianthus-simple',artAnchorX:0.4927478580808048,name:'綠石竹',en:'Green dianthus',size:28,extra:true,newAtlas:true,keepAspect:true,spray:true,artSize:[72,72],stemWidth:2,colors:[['全綠','#9bae60'],['有小花','#e7d9df']]},
 {"id":"stock","name":"紫羅蘭","en":"Stock","size":28,"artSize":[78,140],"stemWidth":2,"colors":[["淡紫","#ab97bf"],["白色", "#eeeade"],["粉色", "#deb0c5"],["深紫", "#78588f"]],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"blueKey":true,"recolorPetals":true,"artAnchorX":0.506919924729277},
 {"id":"statice","name":"星辰","en":"Statice","size":29,"artSize":[95,115],"stemWidth":1.7,"colors":[["深紫","#705693"],["淺紫","#b7a2cb"],["白色","#fcfaf2"]],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"blueKey":true,"recolorPetals":true,"artAnchorX":0.5219477260346437},
 {"id":"scabiosa","name":"松蟲草","en":"Scabiosa","size":30,"artSize":[76,70],"stemWidth":1.7,"colors":[["淺紫","#b9accf"],["粉色","#d4a0ba"],["深紅","#8b3548"],["深紫","#68517e"]],"extra":true,"newAtlas":true,"keepAspect":true,"spray":true,"blueKey":true,"recolorPetals":true,"artAnchorX":0.4937194116570234}
];
const $=id=>document.getElementById(id);let items=[],selected=null,nextId=1;let vase='classic',vaseColor='ivory',backgroundColor='default';let sunflowerNext=0,kingproteaNext=0,birdofparadiseNext=0,lilyNext=0,poppyNext=0,irisNext=0,doubleLisianthusNext=0,orchidNext=0,cosmosNext=0,acaciaNext=0;
const vaseSizes={ghost:[27,74,642,'17'],pumpkin:[40,92,626,'16'],dogskull:[29,99,621,'15'],ring:[42,84,650,'20'],pitcher:[25,68,650,'26'],sphere:[26,70,650,'22'],footbowl:[82,82,620,'14'],urnlow:[55,61,650,'20'],urnhigh:[55,61,685,'26'],classic:[58,66,650,'18'],petite:[22,66,650,'18'],slim:[42,48,600,'13'],bud:[14,48,600,'13'],columnlow:[23,29,650,'18'],columnhigh:[23,46,700,'27'],paper:[82,86,666,'28'],mug:[48,48,600,'10'],bowl:[80,80,565,'7'],canvaswrap:[82,86,712,'28'],naked:[18,40,655,'18'],television:[84,151,636,'25'],poodle:[27,70,640,'24'],typewriter:[42,130,645,'20'],swing:[65,203,598,'10']};
const vaseColors={ivory:{name:'米白色',body:'#e1dbcf',edge:'#c7beaf',rim:'#c9c0b2',inside:'#818975'},gray:{name:'淺灰色',body:'#c1c1bf',edge:'#a6a7a5',rim:'#aeafac',inside:'#6f746c'},black:{name:'黑色',body:'#343633',edge:'#252724',rim:'#50534e',inside:'#20251f'}};
const backgroundColors={default:{color:'#d8d8d8',dark:false},charcoal:{color:'#292929',dark:true}};
function updateBackground(){const theme=backgroundColors[backgroundColor];document.body.dataset.background=backgroundColor;for(const key of Object.keys(backgroundColors))$('background-'+key).setAttribute('aria-pressed',String(key===backgroundColor));}
function stemBase(){if(specialVessels[vase])return specialVessels[vase].base;if(vase==='paper')return 543;if(vase==='bowl')return 494;if(vase==='columnhigh')return 456;if(vase==='columnlow')return 486;return vase==='petite'||vase==='bud'?492:500}
function vaseSurface(id,p){return `<defs><linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0" stop-color="${shade(p.body,-10)}"/><stop offset=".28" stop-color="${shade(p.body,6)}"/><stop offset=".55" stop-color="${p.body}"/><stop offset=".8" stop-color="${shade(p.body,-5)}"/><stop offset="1" stop-color="${shade(p.body,-16)}"/></linearGradient></defs>`}
function paperWrap(p,id){
 const transform='translate(330 568) scale(1.71925 1.495) translate(-330 -568)';
 const left='M245 300 C251 394 265 490 288 542 C302 563 319 577 330 584 C341 578 362 556 374 535 Q330 529 301 487 C271 448 254 368 245 300 Z';
 const right='M415 300 C409 394 395 490 372 542 C355 563 338 577 328 584 Q321 587 320 578 C322 560 349 517 364 480 Q393 385 415 300 Z';
 return {back:`<g transform="${transform}"><path d="M245 300 Q330 328 415 300 C409 394 395 490 372 542 Q351 574 330 588 Q306 567 288 542 C265 490 251 394 245 300 Z" fill="${shade(p.body,-16)}" stroke="${p.edge}" stroke-width=".6"/></g>`,front:`<g transform="${transform}">${vaseSurface(id,p)}<path d="M322 577 Q330 573 338 577 C353 583 357 598 358 616 L359 651 Q330 657 301 651 L302 616 C303 598 307 583 322 577 Z" fill="url(#${id})" stroke="${p.edge}" stroke-width=".6"/><path d="${right}" fill="${shade(p.body,-7)}" stroke="${p.edge}" stroke-width=".6"/><path d="${left}" fill="url(#${id})" stroke="${p.edge}" stroke-width=".6"/><path d="M314 562 Q324 574 330 580 M347 565 Q338 575 334 581 M328 587 Q326 598 323 606 M333 588 Q335 598 337 603" fill="none" stroke="${p.edge}" stroke-width=".7" stroke-linecap="round" opacity=".3"/></g>`};}

function everydayVessel(key,p,id){
 const bowl=key==='bowl',rx=bowl?80:48,ry=bowl?14:10,left=330-rx,right=330+rx;
 const handle=bowl?'':`<path d="M373 508 C437 489 439 579 374 576 L374 567 C425 569 423 507 374 517 Z" fill="${shade(p.body,-5)}" stroke="${p.edge}" stroke-width="1"/>`;
 const back=`${handle}<ellipse cx="330" cy="486" rx="${rx}" ry="${ry}" fill="${p.rim}"/><ellipse cx="330" cy="485" rx="${rx-4}" ry="${ry-3}" fill="${p.inside}"/>`;
 const body=bowl?'M250 486 A80 14 0 0 0 410 486 C405 526 382 548 350 559 L350 564 Q330 570 310 564 L310 559 C278 548 255 526 250 486 Z':'M282 486 A48 10 0 0 0 378 486 L376 575 Q375 599 355 600 L305 600 Q285 599 284 575 Z';
 const front=`${vaseSurface(id,p)}<path d="${body}" fill="url(#${id})" stroke="${p.edge}" stroke-width="1"/><path d="M${left} 486 A${rx} ${ry} 0 0 0 ${right} 486 L${right-4} 486 A${rx-4} ${ry-3} 0 0 1 ${left+4} 486 Z" fill="${p.rim}"/>`;
 return {back,front};
}
const vesselNames={ghost:'Ghost',pumpkin:'Pumpkin',dogskull:'Dog Skull',ring:'Ring',pitcher:'Round Pitcher',sphere:'Round Neck',footbowl:'Footed Bowl',urnlow:'Goblet Low',urnhigh:'Goblet Tall',classic:'Classic',petite:'Slim Neck',slim:'Mini',bud:'Mini Neck',columnlow:'Slender Low',columnhigh:'Slender Tall',paper:'Paper',canvaswrap:'Canvas',naked:'Naked',mug:'Mug',bowl:'Bowl',television:'Vintage TV',poodle:'Poodle',typewriter:'Typewriter',swing:'Swing'};
const specialVessels={ghost:{base:478,bottom:642,frame:'240 459 180 195'},pumpkin:{base:484,bottom:629,frame:'225 457 210 183'},dogskull:{base:493,bottom:624,frame:'238 472 227 163'},ring:{base:486,bottom:653,frame:'230 460 200 205'},pitcher:{base:438,bottom:653,frame:'240 418 220 247'},sphere:{base:462,bottom:653,frame:'245 442 170 223'},footbowl:{base:486,bottom:623,frame:'235 463 190 172'},urnlow:{base:486,bottom:655,frame:'245 456 170 214'},urnhigh:{base:446,bottom:690,frame:'240 414 180 285'},canvaswrap:{base:543,bottom:697,frame:'130 140 400 600'},naked:{base:515,bottom:640,frame:'230 400 200 290'},television:{base:506,bottom:644,frame:'133 225 370 430'},poodle:{base:401,bottom:643,frame:'235 370 190 285'},typewriter:{base:493,bottom:651,frame:'185 420 290 245'},swing:{base:465.68,bottom:605,frame:'100 180 460 480'}};
function wrappedVessel(key=vase){return key==='paper'||key==='canvaswrap'}
function vesselCategory(key){return ['pumpkin','dogskull','ghost'].includes(key)?'halloween':['paper','canvaswrap','naked'].includes(key)?'bouquet':['mug','television','poodle','typewriter','swing'].includes(key)?'imagination':'vessel'}
let vesselGroup='vessel',lastVessel='classic';
function refreshVesselGroups(){if(lastVessel!==vase){vesselGroup=vesselCategory(vase);lastVessel=vase;}for(const group of ['vessel','bouquet','imagination','halloween'])$('vessel-category-'+group).setAttribute('aria-pressed',String(group===vesselGroup));for(const key of Object.keys(vaseSizes))$('vase-card-'+key).hidden=['swing','dogskull'].includes(key)||vesselCategory(key)!==vesselGroup||(window.ForiStoryAccess&&!window.ForiStoryAccess.vase(key));}
function specialVessel(key,p,id){
 if(['pumpkin','dogskull','ghost'].includes(key))return halloweenVessel(key,p,id);
 const edge=p.edge,body=p.body,low=shade(body,-17),light=shade(body,7),surface=vaseSurface(id,p),fill=`url(#${id})`;let back='',front='';
 if(['ring','pitcher','sphere','footbowl'].includes(key)){
  const mouth={ring:486,pitcher:438,sphere:462,footbowl:486}[key],rx={ring:43,pitcher:25,sphere:26,footbowl:82}[key],ry=key==='footbowl'?12:5;
  const grain=`${id}-grain`,texture=`<pattern id="${grain}" width="7" height="9" patternUnits="userSpaceOnUse"><circle cx="1" cy="2" r=".45" fill="${edge}" opacity=".32"/><circle cx="5" cy="7" r=".6" fill="${light}" opacity=".45"/><circle cx="3" cy="5" r=".3" fill="${low}" opacity=".22"/></pattern>`;
  const ceramic=path=>`<path d="${path}" fill="${fill}" fill-rule="evenodd" stroke="${edge}" stroke-width=".7"/><path d="${path}" fill="url(#${grain})" fill-rule="evenodd"/>`;
  back=`<ellipse cx="330" cy="${mouth}" rx="${rx}" ry="${ry}" fill="${p.rim}"/><ellipse cx="330" cy="${mouth}" rx="${rx-4}" ry="${ry-1.7}" fill="${p.inside}"/>`;
  front=surface+`<defs>${texture}</defs>`;
  if(key==='ring'){
   // The centre is an actual opening, not an opaque patch matching one background.
   const outline='M287 486A43 5 0 0 0 373 486C397 500 414 529 414 565C414 603 395 642 373 650H287C264 643 246 604 246 565C246 528 263 499 287 486Z M330 518C308 518 291 539 291 566C291 593 308 612 330 612C352 612 369 593 369 566C369 539 352 518 330 518Z';
   front+=ceramic(outline)+`<path d="M330 518C307 518 291 539 291 566C291 592 307 612 330 612" fill="none" stroke="${low}" stroke-width="2" opacity=".5"/>`;
  }else if(key==='pitcher'||key==='sphere'){
   const tall=key==='pitcher',neckBottom=tall?531:517;
   if(tall)front+=`<path d="M354 444C414 430 436 460 418 495L382 548L372 540L406 490C421 462 405 446 354 455Z" fill="${fill}" stroke="${edge}"/>`;
   const outline=`M${330-rx} ${mouth}A${rx} ${ry} 0 0 0 ${330+rx} ${mouth}V${neckBottom}C386 ${neckBottom+10} 404 552 400 590C397 627 372 649 347 650H313C287 649 264 628 260 590C256 554 273 ${neckBottom+10} ${330-rx} ${neckBottom}Z`;
   front+=ceramic(outline);
   if(tall)front+=ceramic('M305 440L282 440L305 484Z');
   front+=`<path d="M309 645Q330 651 351 645" fill="none" stroke="${edge}" opacity=".5"/>`;
  }else{
   front+=ceramic('M310 552H350L360 613Q330 627 300 613Z');
   front+=ceramic('M248 486A82 12 0 0 0 412 486C406 537 373 563 330 564C287 563 254 537 248 486Z');
  }
  front+=`<path d="M${330-rx} ${mouth}A${rx} ${ry} 0 0 0 ${330+rx} ${mouth}" fill="none" stroke="${light}" stroke-width="1.4"/>`;
  return {back,front};
 }
 if(key==='urnlow'||key==='urnhigh'){
  const y=key==='urnhigh'?446:486,foot=key==='urnhigh'?685:650;
  back=`<ellipse cx="330" cy="${y}" rx="59" ry="12" fill="${p.rim}"/><ellipse cx="330" cy="${y-1}" rx="49" ry="8" fill="${p.inside}"/>`;
  front=`${surface}<path d="M281 ${foot-13}H379V${foot}H281Z" fill="${fill}" stroke="${edge}"/><path d="M304 ${foot-13}Q320 ${foot-30} 322 ${y+106}H338Q340 ${foot-30} 356 ${foot-13}Z" fill="${fill}" stroke="${edge}"/><path d="M281 ${y}Q287 ${y+21} 291 ${y+58}Q294 ${y+90} 318 ${y+98}L319 ${y+110}Q330 ${y+117} 341 ${y+110}L342 ${y+98}Q366 ${y+90} 369 ${y+58}Q373 ${y+21} 379 ${y}A49 8 0 0 1 281 ${y}Z" fill="${fill}" stroke="${edge}"/>`;
  for(const x of [-35,-21,-7,7,21,35])front+=`<path d="M${330+x} ${y+10}Q${330+x*.8} ${y+53} ${330+x*.6} ${y+78}Q${330+x*.35} ${y+94} 330 ${y+98}" fill="none" stroke="${shade(body,x%2?-15:8)}" stroke-width="3" opacity=".5"/>`;
  for(const x of [-12,0,12])front+=`<path d="M${330+x*.35} ${y+121}Q${330+x*.6} ${foot-37} ${330+x} ${foot-18}" fill="none" stroke="${edge}" opacity=".65"/>`;
  front+=`<path d="M271 ${y}A59 12 0 0 0 389 ${y}L379 ${y}A49 8 0 0 1 281 ${y}Z" fill="${light}" stroke="${edge}"/><path d="M294 ${y+63}Q330 ${y+77} 366 ${y+63}" fill="none" stroke="${edge}"/>`;
  return {back,front};
 }
 if(key==='canvaswrap'){
  const tr='translate(330 568) scale(1.9771375 1.495) translate(-330 -568)';
  back=`<g transform="${tr}"><path d="M245 300 Q286 325 330 319 Q379 325 415 300 C409 410 392 502 372 542 Q350 577 330 588 Q306 567 288 542 C267 490 251 394 245 300Z" fill="${low}" stroke="${edge}" stroke-width=".6"/></g>`;
  front=`<g transform="${tr}">${surface}<path d="M322 577Q330 573 338 577C354 584 359 610 359 650Q344 657 331 653Q315 658 301 651C302 616 304 587 322 577Z" fill="${fill}"/><path d="M415 300C409 399 395 492 372 542Q352 568 330 584Q318 588 320 578C324 553 352 511 364 480Q392 389 415 300Z" fill="${shade(body,-6)}"/><path d="M245 300C254 395 268 493 289 541Q309 566 330 584Q353 569 374 535C341 534 318 516 301 487Q264 437 245 300Z" fill="${fill}"/><path d="M250 329Q260 441 295 526M407 331Q397 443 369 524" fill="none" stroke="${edge}" stroke-width=".6" stroke-dasharray="1.2 2" opacity=".55"/><path d="M301 552Q320 572 330 581M360 550Q340 574 332 582M322 592Q312 618 311 638M338 593Q349 618 349 639" fill="none" stroke="${edge}" stroke-width="1.2" opacity=".32" stroke-linecap="round"/>
  <g transform="translate(330 584) scale(1.914956516 2.2022) translate(-330 -584)" fill="#faf9f4" stroke="#d9d6cf" stroke-width=".7"><path d="M328 583C316 576 306 562 303 571C298 584 317 588 328 585Z M332 583C344 576 354 562 357 571C362 584 343 588 332 585Z"/><path d="M326 585Q321 596 310 607L310 600L304 601Q317 589 325 583Z M334 585Q339 596 350 607L350 600L356 601Q343 589 335 583Z"/><ellipse cx="330" cy="584" rx="5" ry="3.5"/></g></g>`;
  // Fine loose fibres follow the actual cloth edge without opening gaps in its surface.
  let fibres='';
  for(let n=0;n<85;n++){const t=(n%43)/42,u=1-t,right=n>42,x=right?u*u*330+2*u*t*379+t*t*415:u*u*245+2*u*t*286+t*t*330,y=right?u*u*319+2*u*t*325+t*t*300:u*u*300+2*u*t*325+t*t*319,dy=2.2+(n%5)*.8;fibres+=`<path d="M${x} ${y+.4}l${(n%3-1)*.7} -${dy}"/>`;}
  front+=`<g transform="${tr}" fill="none" stroke="${edge}" stroke-width=".5" opacity=".8">${fibres}</g>`;
 }else if(key==='naked'){
  for(const [x,y,a,k] of [[-49,486,-45,1],[49,486,45,1],[-26,462,-22,.9],[28,457,25,.86],[-64,514,-67,.8],[66,515,68,.82]])back+=`<g transform="translate(330 540) rotate(${a})"><path d="M0 0Q-32 -32 0 -91Q30 -31 0 0Z" fill="${a<0?'#7f8c70':'#929d7e'}" transform="scale(${k*1.4})"/><path d="M0 -3V-${119*k}" stroke="#b1b8a1" stroke-width=".8"/></g>`;
  for(let j=0;j<13;j++){const x=319+j*1.8,end=307+j*3.7;front+=`<path d="M${x} 532Q${x+(j-6)*.3} 590 ${end} ${647+(j%3)*5}" fill="none" stroke="${['#79866a','#909c7a','#a0a88a'][j%3]}" stroke-width="3.2" stroke-linecap="round"/>`;}
  front+='<path d="M317 537Q330 542 343 537L344 547Q330 552 316 547Z" fill="#b6a58b"/><path d="M317 540Q330 545 343 540M317 544Q330 549 343 544" fill="none" stroke="#95856f" stroke-width=".8"/>';
 }else if(key==='television'){
  back=`${surface}<rect x="252" y="402" width="207" height="211" rx="15" fill="${fill}" stroke="${edge}"/><rect x="264" y="417" width="132" height="132" rx="5" fill="${low}"/><path d="M270 423H390V543H270Z" fill="#41463d"/>`;
  front=`<g fill="#9eaaa3" fill-opacity=".48" stroke="#c0c9bd" stroke-width=".8"><path d="M270 423H299L288 437L293 454L278 446L270 468Z"/><path d="M344 423H390V469L374 454L380 439L359 447Z"/><path d="M270 490L283 503L278 519L299 536L290 543H270Z"/><path d="M390 489L379 501L386 516L369 527L375 543H390Z"/><path d="M311 543L319 531L328 543Z"/></g><path d="M270 423 279 423 273 441 286 450 272 462M390 428 381 445 389 459M270 514 282 530 278 543M390 509 377 526 385 543" fill="none" stroke="#aeb5a7" stroke-width="1.3"/><path d="M285 401 266 367M355 401 377 355" stroke="#76786f" stroke-width="2" stroke-linecap="round"/><ellipse cx="324" cy="401" rx="27" ry="5" fill="${low}"/><circle cx="428" cy="447" r="12" fill="${low}" stroke="${edge}"/><path d="M422 453 434 441" stroke="${light}" stroke-width="2"/><circle cx="428" cy="483" r="8" fill="${low}"/>${Array.from({length:7},(_,j)=>`<path d="M415 ${514+j*5}h26" stroke="${low}" stroke-width="1.3"/>`).join('')}<path d="M270 613 264 633h14l8-20M422 613l7 20h13l-4-20" fill="${low}"/><path d="M269 588h30" stroke="${edge}"/>`;
 }else if(key==='poodle'){
  const torso='M297 472Q281 496 277 533Q261 559 263 593Q257 610 266 622Q279 636 299 625H361Q384 637 395 621Q402 607 395 590Q400 563 382 535Q380 497 363 472Z';
  const head='M284 424Q279 413 288 409Q283 397 296 394Q296 381 310 384Q319 373 330 381Q343 374 351 385Q367 381 368 395Q381 398 375 410Q385 420 375 431Q380 450 366 463Q353 480 330 480Q305 480 291 463Q278 448 284 424Z';
  back=`${surface}<path d="${torso}" fill="${fill}" stroke="${edge}"/>
  <path d="M291 414Q273 410 268 431Q257 454 267 474Q266 488 279 492Q290 500 299 485L307 431Z M369 414Q387 410 392 431Q403 454 393 474Q394 488 381 492Q370 500 361 485L353 431Z" fill="${shade(body,-14)}" stroke="${edge}"/>
  <path d="${head}" fill="${body}" stroke="${edge}"/>
  <path d="M305 537Q298 552 300 568L294 614Q281 634 304 638Q323 642 324 626L330 553L336 626Q337 642 356 638Q379 634 366 614L360 568Q362 552 355 537" fill="${body}" stroke="${edge}" stroke-width="1"/>
  <ellipse cx="314" cy="437" rx="3.5" ry="3" fill="${parseInt(body.slice(1,3),16)<90?'#f3f1e9':'#343730'}"/><ellipse cx="346" cy="437" rx="3.5" ry="3" fill="${parseInt(body.slice(1,3),16)<90?'#f3f1e9':'#343730'}"/>
  <path d="M330 450Q316 442 306 452Q297 463 307 471Q318 480 330 474Q342 480 353 471Q363 463 354 452Q344 442 330 450Z" fill="${light}"/>
  <path d="M321 451Q330 447 339 451Q341 457 330 462Q319 457 321 451Z" fill="#43463e"/><path d="M330 462v5m0 0q-5 5-10 1m10-1q5 5 10 1" fill="none" stroke="${low}" stroke-width="1.1" stroke-linecap="round"/>
  <defs><clipPath id="${id}-coat"><path d="${torso}"/><path d="${head}"/></clipPath></defs>`;
  let curls='';const locks=[[302,401,1],[320,412,.8],[340,412,.9],[355,402,1],[291,422,.8],[366,424,.8],[301,449,.7],[358,451,.8],[312,481,1],[333,485,.9],[350,484,.85],[297,507,1],[320,509,1],[343,510,.9],[366,510,.9],[285,539,1],[373,541,1],[278,571,1],[382,573,1],[310,560,.8],[350,559,.8],[307,590,.9],[353,591,.9],[280,607,.8],[379,608,.8]];
  for(const [x,y,k] of locks)curls+=`<path transform="translate(${x} ${y}) scale(${k})" d="M-5 0Q-9 -7-3 -8Q3 -9 2 -3Q1 1 6 2Q11 3 9 8"/>`;
  back+=`<g clip-path="url(#${id}-coat)" fill="none" stroke="${edge}" opacity=".55" stroke-width=".8" stroke-linecap="round">${curls}</g><path d="M277 436q-6 9-3 18m5-2q-6 11-1 21m106-37q6 9 3 18m-5-2q6 11 1 21" fill="none" stroke="${edge}" stroke-width="1" opacity=".6"/><ellipse cx="330" cy="397" rx="18" ry="5" fill="${p.rim}"/><ellipse cx="330" cy="397" rx="15" ry="3.2" fill="${p.inside}"/>`;
  front=`<path d="M312 397A18 5 0 0 0 348 397L347 402Q330 408 313 402Z" fill="${body}" stroke="${edge}" stroke-width=".7"/>`;
 }else if(key==='typewriter'){
  back=`${surface}<path d="M242 480h176v47H242Z" fill="${low}"/><rect x="250" y="470" width="160" height="18" rx="8" fill="#565a52"/><path d="M258 477h144" stroke="#969b8c"/><path d="M252 489H408L428 580H232Z" fill="${fill}" stroke="${edge}"/><path d="M296 488Q330 474 364 488L360 512H300Z" fill="${p.inside}"/>`;
  front=`<path d="M250 511H410L439 595Q440 609 425 612H234Q220 610 221 596Z" fill="${fill}" stroke="${edge}"/><path d="M264 523H396L414 582H246Z" fill="${low}"/>${Array.from({length:4},(_,row)=>Array.from({length:10-row%2},(_,j)=>`<ellipse cx="${330+(j-(9-row%2)/2)*(13+row*.5)}" cy="${537+row*12}" rx="5.2" ry="3.8" fill="${light}" stroke="${edge}" stroke-width=".7"/>`).join('')).join('')}<rect x="282" y="586" width="95" height="6" rx="2" fill="${low}"/><path d="M238 612v7h22v-7M402 612v7h22v-7" fill="#666b61"/><path d="M251 506 259 500M416 594l10-4" stroke="${edge}"/>`;
 }else if(key==='swing'){
  back=`<path d="M275 -30V552M385 -30V552" stroke="#9d917b" stroke-width="3"/><path d="M274 -30V550M384 -30V550" stroke="#c8bda7" stroke-width=".6" stroke-dasharray="2 3"/>${surface}<g transform="translate(330 551) scale(.5) translate(-330 -551)"><path d="M283 484H377L380 493H280Z" fill="${p.rim}"/><path d="M289 488H371L369 500H291Z" fill="${p.inside}"/></g>`;
  front=`<g transform="translate(330 551) scale(.5) translate(-330 -551)"><path d="M280 493H380L375 551H285Z" fill="${fill}" stroke="${edge}"/><path d="M286 506H374M288 534H372" stroke="${edge}" stroke-width=".6"/></g><path d="M265 551H395V560Q330 567 265 560Z" fill="${low}" stroke="${edge}"/><path d="M274 537q7 4 0 8q-6 4 0 7M386 537q-7 4 0 8q6 4 0 7" fill="none" stroke="#a89a81" stroke-width="2.5"/>`;
  if(key==='swing')front+=`<g fill="none" stroke="${edge}" stroke-width=".3" opacity=".55"><path d="M270 555Q307 553 340 556T389 555M276 559Q309 556 342 559T388 558M310 537Q325 535 346 538M312 543Q330 540 350 544"/></g>`;
 }
 if(['television','swing','typewriter'].includes(key)){const k={television:1.4,swing:3.12,typewriter:1.2}[key],anchor=key==='television'?526:key==='swing'?498:specialVessels[key].base,tr=`translate(${key==='television'?-48:0} ${key==='television'?-40:key==='swing'?-115:0}) translate(330 ${anchor}) scale(${k}) translate(-330 -${anchor})`;back=`<g transform="${tr}">${back}</g>`;front=`<g transform="${tr}">${front}</g>`;}
 return {back,front};
}

function vaseThumbnail(key){if(specialVessels[key]){const parts=specialVessel(key,vaseColors[vaseColor],'special-thumb-'+key);return `<svg viewBox="${specialVessels[key].frame}" aria-hidden="true">${parts.back}${parts.front}</svg>`;}if(key==='mug'||key==='bowl'){const parts=everydayVessel(key,vaseColors[vaseColor],'everyday-thumb-'+key);return `<svg viewBox="${key==='mug'?'240 450 210 180':'230 428 200 175'}" aria-hidden="true">${parts.back}${parts.front}</svg>`}if(key==='paper'){const p=paperWrap(vaseColors[vaseColor],'paper-thumb');return `<svg viewBox="130 140 400 600" aria-hidden="true">${p.back}${p.front}</svg>`}const [neck,body,bottom]=vaseSizes[key],narrow=key==='petite'||key==='bud',lip=narrow?5:8,shoulder=narrow?528:505,left=330-neck,right=330+neck,p=vaseColors[vaseColor],mouth=key==='columnhigh'?456:486,frame=key==='columnhigh'?280:key.startsWith('column')?250:210;return `<svg viewBox="230 ${(mouth-lip+bottom)/2-frame/2} 200 ${frame}" aria-hidden="true">${vaseSurface('vase-surface-thumb-'+key,p)}<ellipse cx="330" cy="${mouth}" rx="${neck}" ry="${lip}" fill="${p.rim}"/><ellipse cx="330" cy="${mouth}" rx="${neck-4}" ry="${lip-2}" fill="${p.inside}"/><path d="${key==='columnhigh'?'M307 456 A23 8 0 0 0 353 456 L376 664 C379 686 362 700 330 700 C298 700 281 686 284 664 Z':`M${left} ${mouth} A${neck} ${lip} 0 0 0 ${right} ${mouth} L${right} ${narrow?508:490} C${right} ${shoulder} ${330+body} ${shoulder} ${330+body} ${bottom-43} Q${330+body} ${bottom} ${330+body-22} ${bottom} L${330-body+22} ${bottom} Q${330-body} ${bottom} ${330-body} ${bottom-43} C${330-body} ${shoulder} ${left} ${shoulder} ${left} ${narrow?508:490} Z`}" fill="url(#vase-surface-thumb-${key})" stroke="${p.edge}"/></svg>`}
function updateVase(){document.body.dataset.vessel=vase;refreshVesselGroups();for(const id of ['stems','flowers','front-flowers']){if(wrappedVessel())$(id).setAttribute('clip-path','url(#paper-flower-clip)');else $(id).removeAttribute?.('clip-path');}for(const key of Object.keys(vaseSizes)){const card=$('vase-card-'+key);card.setAttribute('aria-pressed',String(key===vase));card.innerHTML=vaseThumbnail(key)+'<span translate="no" lang="en">'+vesselNames[key]+'</span>';}const palette=vaseColors[vaseColor];for(const key of Object.keys(vaseColors)){const chip=$('vase-color-'+key),pumpkin=vase==='pumpkin',label=pumpkin?({ivory:'南瓜橘',gray:'霜白色',black:'黑色'}[key]):({ivory:'米白色',gray:'淺灰色',black:'黑色'}[key]);chip.setAttribute('aria-label',label);chip.setAttribute('title',label);chip.style?.setProperty('--vase-chip',pumpkin?({ivory:'#be793f',gray:'#ded9c9',black:'#343633'}[key]):vaseColors[key].body);}for(const key of Object.keys(vaseColors))$('vase-color-'+key).setAttribute('aria-pressed',String(key===vaseColor));const [neck,body,bottom,cm]=vaseSizes[vase],narrow=vase==='petite'||vase==='bud',lip=narrow?5:8,inner=neck-4,mouth=vase==='columnhigh'?456:486,shoulder=narrow?528:505,left=330-neck,right=330+neck;
 for(const id of ['vase-back','vase-front','vase-shadow'])$(id).removeAttribute?.('transform');
 if(specialVessels[vase]&&vase!=='canvaswrap'){const spec=specialVessels[vase],parts=specialVessel(vase,palette,'special-scene');if(vase==='naked'){parts.back=`<g transform="translate(0 -25)">${parts.back}</g>`;parts.front=`<g transform="translate(0 -25)">${parts.front}</g>`;}$('vase-back').innerHTML=parts.back;$('vase-front').innerHTML=parts.front;$('vase-shadow').setAttribute('cy',spec.bottom);$('vase-shadow').setAttribute('rx',vase==='swing'?0:body*1.2);$('vase-shadow').setAttribute('ry',10);$('vase-select').value=vase;$('vase-scale').textContent=vesselNames[vase];return;}
 if(vase==='mug'||vase==='bowl'){const parts=everydayVessel(vase,palette,'everyday-scene');$('vase-back').innerHTML=parts.back;$('vase-front').innerHTML=parts.front;$('vase-shadow').setAttribute('cy',bottom+5);$('vase-shadow').setAttribute('rx',vase==='bowl'?62:64);$('vase-shadow').setAttribute('ry',9);$('vase-select').value=vase;$('vase-scale').textContent=`花器高約 ${cm} cm`;return}
 if(wrappedVessel()){const paper=vase==='canvaswrap'?specialVessel(vase,palette,'canvas-scene'):paperWrap(palette,'paper-scene');paper.back=`<g transform="translate(0 -25)">${paper.back}</g>`;paper.front=`<g transform="translate(0 -25)">${paper.front}</g>`;const wrapScale=vase==='canvaswrap'?1.9771375:1.71925;const outline=vase==='canvaswrap'?'M248 278 Q330 306 412 278 L412 300 C406 399 392 492 369 530 L292 530 C271 493 257 395 248 300 Z':'M245 278 Q330 306 415 278 L415 300 C409 394 395 490 372 542 Q351 574 330 588 Q306 567 288 542 C265 490 251 394 245 300 Z';$('vase-back').innerHTML='<defs><clipPath id="paper-flower-clip" clipPathUnits="userSpaceOnUse"><path transform="translate(0 -25) translate(330 568) scale('+wrapScale+' 1.495) translate(-330 -568)" d="'+outline+'"/></clipPath></defs>'+paper.back;$('vase-front').innerHTML=paper.front;$('vase-shadow').setAttribute('cy',687);$('vase-shadow').setAttribute('rx',103.155);$('vase-shadow').setAttribute('ry',10);$('vase-select').value=vase;$('vase-scale').textContent=vesselNames[vase];return}
 $('vase-back').innerHTML=`<ellipse cx="330" cy="${mouth}" rx="${neck}" ry="${lip}" fill="${palette.rim}"/><ellipse cx="330" cy="${mouth}" rx="${inner}" ry="${lip-2}" fill="${palette.inside}"/>`;
 $('vase-front').innerHTML=`${vaseSurface('vase-surface-scene',palette)}<path d="${vase==='columnhigh'?'M307 456 A23 8 0 0 0 353 456 L376 664 C379 686 362 700 330 700 C298 700 281 686 284 664 Z':`M${left} ${mouth} A${neck} ${lip} 0 0 0 ${right} ${mouth} L${right} ${narrow?508:490} C${right} ${shoulder} ${330+body} ${shoulder} ${330+body} ${bottom-43} Q${330+body} ${bottom} ${330+body-22} ${bottom} L${330-body+22} ${bottom} Q${330-body} ${bottom} ${330-body} ${bottom-43} C${330-body} ${shoulder} ${left} ${shoulder} ${left} ${narrow?508:490} Z`}" fill="url(#vase-surface-scene)" stroke="${palette.edge}" stroke-width="1"/><path d="M${left} ${mouth} A${neck} ${lip} 0 0 0 ${right} ${mouth} L${330+inner} ${mouth} A${inner} ${lip-2} 0 0 1 ${330-inner} ${mouth} Z" fill="${palette.rim}"/>`;
 $('vase-shadow').setAttribute('cy',bottom+5);$('vase-shadow').setAttribute('rx',body*1.5);$('vase-shadow').setAttribute('ry','14');$('vase-select').value=vase;$('vase-scale').textContent=`花器高約 ${cm} cm`}
const history=[];let sliderSnapshot=null;
function snapshot(){return JSON.stringify({items,selected,nextId,vase,vaseColor,backgroundColor,sunflowerNext,kingproteaNext,birdofparadiseNext,lilyNext,poppyNext,irisNext,doubleLisianthusNext,orchidNext,cosmosNext,acaciaNext})}
function remember(before=snapshot()){history.push(before);if(history.length>100)history.shift()}
function undo(){sliderSnapshot=null;if(!history.length)return;const state=JSON.parse(history.pop());items=state.items;selected=state.selected;nextId=state.nextId;vase=state.vase??'classic';vaseColor=state.vaseColor??'ivory';backgroundColor=state.backgroundColor??'default';sunflowerNext=state.sunflowerNext??0;kingproteaNext=state.kingproteaNext??0;birdofparadiseNext=state.birdofparadiseNext??0;lilyNext=state.lilyNext??0;poppyNext=state.poppyNext??0;irisNext=state.irisNext??0;doubleLisianthusNext=state.doubleLisianthusNext??0;orchidNext=state.orchidNext??0;cosmosNext=state.cosmosNext??0;acaciaNext=state.acaciaNext??0;render();announce("已返回上一步")}
function variation(type){const delta=()=> (Math.random()<.5?-1:1)*(.05+Math.random()*.05);return {variant:Math.floor(Math.random()*(type==='fishtailfern'?6:['poppy','laceflower'].includes(type)?3:4)),scale:1+(Math.random()<.5?-1:1)*((type==='fern'?.22:['rose','oncidium'].includes(type)?.05:.10)+Math.random()*(type==='fern'?.18:['rose','oncidium'].includes(type)?.03:.05)),tone:delta(),bend:(Math.random()<.5?-1:1)*(.75+Math.random()*.5),knee:(Math.random()-.5)*.8}}
function tint(hex,tone){if(Math.min(...hex.slice(1).match(/../g).map(v=>parseInt(v,16)))>210)tone=Math.max(-.025,tone);return "#"+hex.slice(1).match(/../g).map(x=>{const v=parseInt(x,16);return Math.round(tone>0?v+(255-v)*tone:v*(1+tone)).toString(16).padStart(2,"0")}).join("")}
const el=(tag,a={},children='')=>`<${tag} ${Object.entries(a).map(([k,v])=>`${k}="${v}"`).join(' ')}>${children}</${tag}>`;
function shade(hex,n){return '#'+hex.slice(1).match(/../g).map(x=>Math.max(0,Math.min(255,parseInt(x,16)+n)).toString(16).padStart(2,'0')).join('')}
// Individual motif bounds preserve the hand-painted silhouettes without adjacent cells.
const atlasCells={"sunflower-open":[0, 0, 760, 724],"sunflower-near":[760, 0, 750, 724],"sunflower-half":[1510, 0, 662, 724],ranunculus:[30,677,570,535],peonymum:[665,675,575,550],rose:[35,65,340,325],carnation:[399,70,342,320],tulip:[779,72,279,310],gerbera:[1080,65,359,332],lisianthus:[52,415,329,305],pompon:[397,429,340,290]};
// Each motif downloads independently while retaining its original atlas coordinates.
const assetCrops={"lily-half":[75, 60, 1105, 1118],"peony":[17, 84, 1229, 1085],"dahlia":[23, 48, 1208, 1149],"lily":[28, 53, 1212, 1074],"waxflower-alt":[160,53,886,1148],"astilbe-alt":[359,109,804,1072],"stock":[363,27,527,1182],"statice":[244,80,757,1092],"scabiosa":[159,177,938,938],"greendianthus-bloom-simple":[124,66,1017,1132],"greendianthus-simple":[139,111,1013,1056],"celosia":[30,138,1196,982],"waxflower":[323,49,601,1166],"astilbe":[317,24,626,1202],"greendianthus":[139,118,994,1045],"greendianthus-bloom":[168,86,925,1085],"birdofparadise":[99, 67, 973, 1286],"kingprotea-white-half":[215, 110, 833, 1043],"kingprotea-white":[93, 115, 1074, 1025],"kingprotea-half":[210, 110, 840, 1045],"kingprotea":[94, 120, 1067, 1021],"thistle":[341, 214, 596, 829],"pincushion":[77, 144, 1100, 965],"fountaingrass":[250, 10, 250, 705],"fern":[1620, 10, 385, 705],"fountaingrass-curved":[760, 10, 750, 705],"sunflower-open":[0, 0, 760, 724],"sunflower-near":[760, 0, 750, 724],"sunflower-half":[1510, 0, 662, 724],"silver-dollar-single":[40,745,288,420],"cotton":[0,0,1173,1341],"butterflyranunculus":[645, 20, 590, 600],"silver-dollar":[40, 745, 565, 420],"silver-dollar-tip":[725, 725, 440, 440],"gypsophila":[99, 0, 592, 1024],"oncidium":[916, 0, 526, 1024],"ranunculus":[30, 677, 570, 535],"peonymum":[665, 675, 575, 550],"rose":[35,65,340,325],"carnation":[399,70,342,320],"tulip":[779,72,279,310],"gerbera":[1080,65,359,332],"lisianthus":[52,415,329,305],"pompon":[397,429,340,290],"eucalyptus":[47,810,335,180],"eucalyptus-tip":[420,743,317,276],"cedar":[780,723,306,320],"cedar-tip":[1180,723,208,327],"bud":[824,431,173,287],"half-open":[1111,421,287,302],"pointed":[64,87,412,400],"pointed-tip":[648,72,247,415],"monstera":[1048,73,442,445],"chamomile":[79,82,389,378],"bluestar":[576,61,414,402],"lavender":[1206,45,147,443],"hydrangea":[66,564,423,393],"anthurium":[105,45,1105,1040],"buttonmum":[145,145,345,325],"delphinium":[205,620,240,625],"foxtail":[855,650,175,585],"dianthus":[670,43,520,580]};
function paintedImage(key,filter=''){if(key==='birdofparadise')filter='bird-stem-key';if(['peony','dahlia','lily','lily-half'].includes(key))filter=(key==='peony'||key==='dahlia')?'clean-botanical-key':'flower-sprite-key';if(/^(sunflower-|anthurium$|foxtail$|cedar|eucalyptus)/.test(key))filter='clean-botanical-key';const [x,y,w,h]=assetCrops[key];const markup=`<image href="assets/${key}.webp${key==='birdofparadise'?'?v=79':key==='cotton'?'?v=36':key.startsWith('sunflower-')?'?v=42':key.startsWith('fountaingrass')?'?v=52':''}" x="${x}" y="${y}" width="${w}" height="${h}" ${filter?`filter="url(#${filter})"`:''}/>`;return /^(peony$|dahlia$|lily|sunflower-|anthurium$|foxtail$|cedar|eucalyptus)/.test(key)?`<g filter="url(#clean-cutout-edge)">${markup}</g>`:markup}
function sprite(type,x,y,width,height,color,gradient=false){if(type==='rose'){const src=window.ForiRose.image(color,gradient);return src?`<image class="rose-front" href="${src}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/>`:'';}const crop=atlasCells[type];if(data.find(d=>d.id===type).newHead)return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${crop.join(' ')}">${coloredPetals(paintedImage(type,data.find(d=>d.id===type).neutralKey?'botanical-key':''),color,!data.find(d=>d.id===type).naturalColor)}</svg>`;const whiteGerbera=type==='gerbera'&&Math.min(...color.slice(1).match(/../g).map(v=>parseInt(v,16)))>185;return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${crop.join(' ')}" overflow="hidden" aria-hidden="true">${whiteGerbera?'<defs><filter id="white-petal-edge" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB"><feMorphology in="SourceAlpha" operator="dilate" radius="2.2" result="expanded"/><feComposite in="expanded" in2="SourceAlpha" operator="out" result="edge"/><feFlood flood-color="#a6a39b" flood-opacity=".65"/><feComposite in2="edge" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>':''}<g ${whiteGerbera?'filter="url(#white-petal-edge)"':''}><g filter="url(#tone-${color.slice(1)})">${paintedImage(type,'botanical-key')}</g></g>${gradient?`<defs><radialGradient id="rose-red-gradient" cx="50%" cy="45%" r="58%"><stop stop-color="#73182e"/><stop offset=".45" stop-color="#b73249"/><stop offset="1" stop-color="#e87d85"/></radialGradient><filter id="rose-alpha-white" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/></filter><mask id="rose-gradient-mask" maskUnits="userSpaceOnUse" x="35" y="65" width="340" height="325"><g filter="url(#rose-alpha-white)">${paintedImage('rose','botanical-key')}</g></mask></defs><rect x="35" y="65" width="340" height="325" fill="url(#rose-red-gradient)" mask="url(#rose-gradient-mask)" opacity=".42"/>`:''}${whiteGerbera?`<defs><clipPath id="gerbera-yellow-disc"><ellipse cx="1254" cy="236" rx="46" ry="47"/></clipPath></defs><g clip-path="url(#gerbera-yellow-disc)">${paintedImage('gerbera','botanical-key')}</g>`:''}</svg>`}
function updatePalette(){const colors=new Set(data.flatMap(d=>d.colors.map(c=>c[1])));items.forEach(i=>colors.add(tint(data.find(d=>d.id===i.type).colors[i.color][1],i.tone)));$('palette').innerHTML=[...colors].map(color=>{const [r,g,b]=color.slice(1).match(/../g).map(v=>parseInt(v,16)/255);const pale=Math.min(r,g,b)>.68,slope=pale?.16:.8,base=pale?.84:.2;return `<filter id="tone-${color.slice(1)}" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope="${slope}" intercept="${base}"/><feFuncG type="linear" slope="${slope}" intercept="${base}"/><feFuncB type="linear" slope="${slope}" intercept="${base}"/></feComponentTransfer><feColorMatrix type="matrix" values="${r} 0 0 0 0 0 ${g} 0 0 0 0 0 ${b} 0 0 0 0 0 1 0"/></filter>`}).join('')}
// Recolor only warm petals, preserving the painted green stems and flower column.
function petalFilter(color,texture=false){const [r,g,b]=color.slice(1).match(/../g).map(v=>parseInt(v,16)/255);return `<filter id="petal-${color.slice(1)}${texture?'-texture':''}" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 12 -12 0 0 0" result="warm"/><feComposite in="warm" in2="SourceAlpha" operator="in" result="mask"/><feColorMatrix in="SourceGraphic" type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope="${texture?.8:.2}" intercept="${texture?.2:.8}"/><feFuncG type="linear" slope="${texture?.8:.2}" intercept="${texture?.2:.8}"/><feFuncB type="linear" slope="${texture?.8:.2}" intercept="${texture?.2:.8}"/></feComponentTransfer><feColorMatrix type="matrix" values="${r} 0 0 0 0 0 ${g} 0 0 0 0 0 ${b} 0 0 0 0 0 1 0"/><feComposite in2="mask" operator="in" result="petals"/><feComposite in="SourceGraphic" in2="mask" operator="out"/><feComposite in2="petals" operator="arithmetic" k2="1" k3="1"/></filter>`}
function coloredPetals(markup,color,enabled,texture=false){return enabled?`${petalFilter(color,texture)}<g filter="url(#petal-${color.slice(1)}${texture?'-texture':''})">${markup}</g>`:markup}
function flower(type,color,variant=0,gradient=false){if(data.find(d=>d.id===type)?.vectorHead)return newBotanicalHead(type,color,variant);if(type==='sunflower'){const stage=variant%3,key=['sunflower-open','sunflower-near','sunflower-half'][stage],w=[44,42,36][stage]*2.15;return `<svg class="botanical-cell" style="overflow:hidden" x="${-w/2}" y="${-w/2}" width="${w}" height="${w}" viewBox="${atlasCells[key].join(' ')}">${naturalPetals(paintedImage(key,'botanical-key'),color,'sunflower')}</svg>`;}const d=data.find(d=>d.id===type),w=d.size*2.15,tilt=[0,-7,5,-3][variant],sx=[1,.97,1.04,.98][variant],sy=[1,1.03,.96,1.02][variant];if(type==='rose'&&variant%2)return roseSideBloom(color,gradient);if(type==='tulip'){const joint=w*.44;return `<g transform="rotate(${tilt} 0 ${joint})"><path d="M-2 ${joint-3} Q0 ${joint+3} 0 ${joint+8} Q0 ${joint+3} 2 ${joint-3} Z" fill="#7e8d70"/>${sprite(type,-w/2,-w/2,w,w,color,gradient)}</g>`}return `<g opacity="1" transform="rotate(${tilt}) scale(${sx} ${sy})">${sprite(type,-w/2,-w/2,w,w,color,gradient)}</g>`}
// Leaf petiole and bud base anchors align each painted module to the continuous stem.
const referenceCrops={eucalyptus:[47,810,335,180,208,904],'eucalyptus-tip':[420,743,317,276,568,1004],cedar:[780,723,306,320,886,1030],'cedar-tip':[1180,723,208,327,1290,1035],bud:[824,431,173,287,910,704],'half-open':[1111,421,287,302,1255,708]};
function referencePiece(kind,anchorX,anchorY,width,color){const [cx,cy,cw,ch,ax,ay]=referenceCrops[kind],height=width*ch/cw,x=anchorX-(ax-cx)*width/cw,y=anchorY-(ay-cy)*width/cw;return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${cx} ${cy} ${cw} ${ch}" preserveAspectRatio="none" overflow="hidden" aria-hidden="true"><g ${kind==='half-open'?`filter="url(#tone-${color.slice(1)})"`:''}>${paintedImage(kind,'botanical-key')}</g></svg>`}

const leafCrops={'silver-dollar-single':[40,745,288,420,319,1135],'silver-dollar':[40,745,565,420,319,1135],'silver-dollar-tip':[725,725,440,440,939,1134],pointed:[64,87,412,400,278,479],'pointed-tip':[648,72,247,415,779,480],monstera:[1048,73,442,445,1285,508]};
function leafModule(kind,x,y,width){const [cx,cy,cw,ch,ax,ay]=leafCrops[kind],height=width*ch/cw;return `<svg class="botanical-cell" style="overflow:hidden" x="${x-(ax-cx)*width/cw}" y="${y-(ay-cy)*width/cw}" width="${width}" height="${height}" viewBox="${cx} ${cy} ${cw} ${ch}">${paintedImage(kind)}</svg>`}
function foliagePiece(type,tip,anchorX,anchorY,width){if(type==='silverdollareucalyptus')return leafModule(tip?'silver-dollar-tip':'silver-dollar',anchorX,anchorY,width);if(type==='pointedeucalyptus')return leafModule(tip?'pointed-tip':'pointed',anchorX,anchorY,width);return referencePiece(type+(tip?'-tip':''),anchorX,anchorY,width)}

// A continuous organic centerline; all joints use the same sampled curve.
function stemGeometry(item,endY=-item.h+8){const amplitude=Math.min(7,item.h*.028)*(item.bend??[1,-1,.8,-.75][item.variant]),knee=Math.min(4,item.h*.016)*(item.knee??.2),x=t=>amplitude*Math.sin(Math.PI*t)+knee*Math.sin(2*Math.PI*t),dx=t=>amplitude*Math.PI*Math.cos(Math.PI*t)+2*Math.PI*knee*Math.cos(2*Math.PI*t);let path='M0 0';for(let n=0;n<5;n++){const a=n/5,b=(n+1)/5,dt=(b-a)/3;path+=` C${x(a)+dx(a)*dt} ${endY*(a+dt)} ${x(b)-dx(b)*dt} ${endY*(b-dt)} ${x(b)} ${endY*b}`}return {path,xAt:y=>x(Math.max(0,Math.min(1,y/endY))),angleAt:y=>-Math.atan(dx(Math.max(0,Math.min(1,y/endY)))/endY)*180/Math.PI}}
function largeRoundFoliageMarkup(item){
 const tipY=-item.h+18,curve=stemGeometry(item,tipY);
 let out=`<path class="foliage-trunk" d="${curve.path}" fill="none" stroke="#7f8065" stroke-width="1.5" stroke-linecap="round"/>`;
 const gaps=[35,29,41,32],sizes=[44,38,46,40],sides=[1,-1,1,1,-1],angles=[-12,17,-4,22,7];
 let n=0;
 for(let y=-38;y>tipY+24;){
  const k=n+item.variant,width=sizes[k%sizes.length]*item.scale*(1-.18*Math.min(1,-y/item.h));
  out+=`<g class="foliage-node" transform="translate(${curve.xAt(y)} ${y}) rotate(${curve.angleAt(y)+angles[k%angles.length]}) scale(${sides[k%sides.length]} 1)">${leafModule('silver-dollar-single',0,0,width)}</g>`;
  y-=gaps[(n+item.variant)%gaps.length];n++;
 }
 out+=`<g class="foliage-tip" transform="translate(${curve.xAt(tipY)} ${tipY}) rotate(${26+item.variant*3})">${leafModule('silver-dollar-single',0,0,27*item.scale)}</g>`;
 return out;
}
function foliageMarkup(item,color){if(item.type==='birch')return ruscusBranch(item,color);if(item.type==='silverdollareucalyptus')return largeRoundFoliageMarkup(item);const h=item.h,tipY=-h+18,curve=stemGeometry(item,tipY);let out=`<path class="foliage-trunk" d="${curve.path}" fill="none" stroke="${shade(color,-25)}" stroke-width="${item.type==='cedar'?1.8:1.4}" stroke-linecap="round"/>`;let n=0;
 for(let y=-48;y>tipY+10;y-=(item.type==='eucalyptus'?24:item.type==='pointedeucalyptus'?32:item.type==='silverdollareucalyptus'?44:40)){const fraction=Math.max(0,Math.min(1,(-y)/h)),taper=1-.42*fraction,angle=curve.angleAt(y);if(item.type==='cedar'){for(const side of [-1,1]){const width=(48+Math.sin(n*2+item.variant)*5)*item.scale*taper,spread=side*(35+((n+item.variant)%3)*8);out+=`<g class="foliage-node" data-length-cm="5" transform="translate(${curve.xAt(y+side*4)} ${y+side*4}) rotate(${angle+spread})" opacity="${1-Math.max(0,item.tone)*.45}">${foliagePiece(item.type,false,0,0,width)}</g>`}}else{const width=((item.type==='silverdollareucalyptus'?70:item.type==='pointedeucalyptus'?56:38)+Math.sin(n+item.variant)*3)*item.scale*taper;out+=`<g class="foliage-node" data-length-cm="3" transform="translate(${curve.xAt(y)} ${y}) rotate(${angle}) scale(${n%2?-1:1} ${item.type==='silverdollareucalyptus'?1:.78+(n%3)*.08})">${foliagePiece(item.type,false,0,0,width)}</g>`}n++}
 const topWidth=(item.type==='cedar'?24:item.type==='silverdollareucalyptus'?36:item.type==='pointedeucalyptus'?28:19)*item.scale;out+=`<g class="foliage-tip" transform="translate(${curve.xAt(tipY)} ${tipY}) rotate(${curve.angleAt(tipY)})">${foliagePiece(item.type,true,0,0,topWidth)}</g>`;return out}
function lisianthusSpray(item,color){const v=item.variant,s=item.scale*1.1;const buds=[[v%2?-29:26,[-6,-32,12,-18][v],11,v%2?-15:12]];let out='';const branch=(x,y)=>`<path d="M0 44 C0 26 ${x*.35} ${y+19} ${x} ${y+8}" fill="none" stroke="#7f9271" stroke-width="1.4"/>`;
 const blossoms=[[-21,15,.76,-9],[19,-15,.62,10]];for(const [x,y,scale,angle]of blossoms){out+=branch(x,y)+`<g class="lisianthus-bloom" transform="translate(${x} ${y}) rotate(${angle+v*2}) scale(${scale})">${flower('lisianthus',color,v)}</g>`}
 out+=branch(34,27)+`<g class="lisianthus-half-open" transform="translate(34 27) rotate(16)">${referencePiece('half-open',0,12,29,color)}</g>`;
 for(const [x,y,w,angle]of buds)out+=branch(x,y)+`<g class="lisianthus-bud" transform="translate(${x} ${y}) rotate(${angle})">${referencePiece('bud',0,8,w,color)}</g>`;
 return `<g transform="scale(${s})">${out}</g>`}

const gardenCrops={"lily-half":[75, 60, 1105, 1118],"peony":[17, 84, 1229, 1085],"dahlia":[23, 48, 1208, 1149],"lily":[28, 53, 1212, 1074],"waxflower-alt":[160,53,886,1148],"astilbe-alt":[359,109,804,1072],"stock":[363,27,527,1182],"statice":[244,80,757,1092],"scabiosa":[159,177,938,938],"greendianthus-bloom-simple":[124,66,1017,1132],"greendianthus-simple":[139,111,1013,1056],"celosia":[30,138,1196,982],"waxflower":[323,49,601,1166],"astilbe":[317,24,626,1202],"greendianthus":[139,118,994,1045],"greendianthus-bloom":[168,86,925,1085],"birdofparadise":[99, 67, 973, 1286],"kingprotea-white-half":[215, 110, 833, 1043],"kingprotea-white":[93, 115, 1074, 1025],"kingprotea-half":[210, 110, 840, 1045],"kingprotea":[94, 120, 1067, 1021],"thistle":[341, 214, 596, 829],"pincushion":[77, 144, 1100, 965],"fountaingrass":[250, 10, 250, 705],"fern":[1620, 10, 385, 705],"fountaingrass-curved":[760, 10, 750, 705],cotton:[0,0,1173,1341],butterflyranunculus:[645,20,590,600],gypsophila:[99,0,592,1024],oncidium:[916,0,526,1024],chamomile:[79,82,389,378],bluestar:[576,61,414,402],lavender:[1206,45,147,443],hydrangea:[66,564,423,393],anthurium:[587,551,389,413]};
function whiteBlushSprite(key){const [x,y,w,h]=gardenCrops[key],id='white-blush-'+key,markup=paintedImage(key);return `${coloredPetals(markup,'#fffefd',true,false)}<defs><filter id="${id}-petals" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 12 -12 0 0 0"/><feComposite in2="SourceAlpha" operator="in"/></filter><mask id="${id}-mask" maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="${w}" height="${h}"><g filter="url(#${id}-petals)">${markup}</g></mask><radialGradient id="${id}-color" gradientUnits="userSpaceOnUse" cx="${x+w*.5}" cy="${y+h*.75}" r="${w*.43}"><stop stop-color="#eab7cb" stop-opacity=".42"/><stop offset=".5" stop-color="#f2cbd9" stop-opacity=".2"/><stop offset="1" stop-color="#f2cbd9" stop-opacity="0"/></radialGradient></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-color)" mask="url(#${id}-mask)"/>`}
function gardenSprite(d,x,y,w,h,color){const key=d.artKey??d.id;if(naturalColorIds.has(d.id)&&color!==d.colors[0][1]){const crop=gardenCrops[key];return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${crop.join(' ')}" preserveAspectRatio="xMidYMid meet">${naturalPetals(paintedImage(key,d.blueKey?'blue-screen-key':d.id==='gypsophila'?'gypsophila-neutral':''),color,d.id)}</svg>`;}if(d.spray)return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${gardenCrops[key].join(' ')}" preserveAspectRatio="xMidYMid meet">${d.whiteBlush?whiteBlushSprite(key):coloredPetals(paintedImage(key,d.blueKey?'blue-screen-key':d.neutralKey?'grass-key':''),color,d.recolorPetals,['stock','statice','scabiosa','peony','dahlia','lily'].includes(d.id))}</svg>`;if(d.id==='anthurium')return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="105 45 1105 1040" preserveAspectRatio="none">${coloredPetals(paintedImage('anthurium','botanical-key'),color,parseInt(color.slice(5,7),16)>parseInt(color.slice(1,3),16)*.8)}</svg>`;return `<svg class="botanical-cell" style="overflow:hidden" x="${x}" y="${y}" width="${w}" height="${h}" viewBox="${gardenCrops[key].join(' ')}" preserveAspectRatio="${d.keepAspect?'xMidYMid meet':'none'}"><g ${d.id==='hydrangea'?`filter="url(#tone-${color.slice(1)})"`:''}>${paintedImage(key,d.id==='gypsophila'?'gypsophila-neutral':'')}</g></svg>`}
function variedSpray(d,item){if(d.id==='lilyofthevalley'&&item?.variant%2)return {...d,artSize:[93.5,187]};if(d.id==='lily'&&item?.variant%2)return {...d,artKey:'lily-half',artSize:[87.4,98.9]};if((d.id==='waxflower'||d.id==='astilbe')&&item?.variant%2){const key=d.id+'-alt';return {...d,artKey:key,blueKey:true,artAnchorX:{"waxflower-alt":0.5614588860461045,"astilbe-alt":0.29539543508692034,"stock":0.506919924729277,"statice":0.5219477260346437,"scabiosa":0.4937194116570234}[key]}}return d}
function gardenMarkup(d,item,color){d=variedSpray(d,item);if(d.id==='lily'||d.id==='peony')d={...d,whiteBlush:item.color===(d.id==='lily'?0:1)};if(d.id==='birdofparadise'&&item.variant%2)return `<g transform="scale(-1 1)">${gardenMarkup(d,{...item,variant:0},color)}</g>`;if(d.id==='greendianthus')d={...d,blueKey:item.color===1,artKey:item.color===1?'greendianthus-bloom-simple':'greendianthus-simple',artAnchorX:item.color===1?0.5095348996338699:d.artAnchorX};if(d.id==='kingprotea')d={...d,spray:true,blueKey:item.color===1,neutralKey:item.color===0&&!!(item.variant%2),artKey:item.color===1?(item.variant%2?'kingprotea-white-half':'kingprotea-white'):(item.variant%2?'kingprotea-half':'kingprotea')};if(d.id==='fountaingrass')d={...d,artKey:item.variant%2?'fountaingrass-curved':'fountaingrass',neutralKey:true,artAnchorX:item.variant%2?40/750:d.artAnchorX,recolorPetals:item.color===1};const [w,h]=extraDimensions(d,item.h),factor=Math.max(.8,Math.min(1,item.h/160)),angle=[0,-3,3,-1][item.variant];let out='';if(d.id==='chamomile'||d.id==='bluestar'){const diameter=d.id==='chamomile'?23:29;const blooms=[[-22,23,.85],[5,4,1],[24,42,.8]];if(d.id==='chamomile'){if(item.variant>=1)blooms.push([-27,53,.72]);if(item.variant>=2)blooms.push([29,13,.76]);if(item.variant===3)blooms.push([2,35,.8]);}for(const [x,y,k]of blooms){const size=diameter*k;out+=`<path d="M0 ${d.artSize[1]*.96} C0 ${y+37} ${x*.65} ${y+size} ${x} ${y+size*.76}" stroke="#849272" stroke-width="1.4" fill="none"/>${gardenSprite(d,x-size/2,y,size,size,color)}`}return `<g transform="translate(0 ${-item.h}) scale(${item.scale*factor}) rotate(${angle} 0 ${d.artSize[1]*.96})">${out}</g>`}return `<g transform="translate(0 ${-item.h}) scale(${item.scale}) rotate(${angle} 0 ${h*.96})">${gardenSprite(d,-w*(d.artAnchorX??.5),0,w,h,color)}</g>`}
const extraCrops={buttonmum:[145,145,345,325],dianthus:[670,43,520,580],delphinium:[205,620,240,625],foxtail:[855,650,175,585]};
function extraDimensions(d,h=300){if(d.vectorSpray||d.vectorLeaf)return d.artSize.map(n=>n*Math.max(.8,Math.min(1,h/160)));const factor=Math.max(.8,Math.min(1,h/160));if(d.keepAspect){const crop=gardenCrops[d.artKey??d.id],height=d.artSize[1]*factor;return [height*crop[2]/crop[3],height]}if(d.newAtlas||d.leafAtlas)return d.artSize.map(n=>n*factor);return d.id==='foxtail'?[32.4*factor,97.2*factor]:d.id==='buttonmum'?[68*factor,75*factor]:d.id==='dianthus'?[100*factor,112*factor]:d.id==='delphinium'?[64*factor,170*factor]:[36*factor,108*factor]}
function extraMarkup(d,item,color){if(d.vectorLeaf)return newLeafMarkup(d,item,color);if(d.vectorSpray)return newBotanicalSpray(d,item,color);if(d.leafAtlas){const [w,h]=extraDimensions(d,item.h);return `<g transform="translate(0 ${-item.h}) scale(${item.scale})">${leafModule('monstera',0,h*.96,w)}</g>`}if(d.newAtlas)return gardenMarkup(d,item,color);const [w,h]=extraDimensions(d,item.h),crop=extraCrops[d.id],x=d.id==='foxtail'?-w*(94/175):-w/2,y=-item.h;if(d.id==='buttonmum'){let clusters='';for(const [px,py,diam]of [[-20,25,25],[12,10,27],[25,43,23]])clusters+=`<path d="M0 72 Q${px*.2} ${py+25} ${px} ${py+diam*.7}" fill="none" stroke="#849272" stroke-width="1.5"/><svg class="botanical-cell" style="overflow:hidden" x="${px-diam/2}" y="${py}" width="${diam}" height="${diam}" viewBox="${crop.join(' ')}"><g filter="url(#tone-${color.slice(1)})">${paintedImage(d.id)}</g></svg>`;return `<g transform="translate(0 ${y}) scale(${item.scale*Math.max(.8,Math.min(1,item.h/160))})">${clusters}</g>`}return `${d.id==='dianthus'?petalFilter(color):''}<g transform="translate(0 ${y}) scale(${item.scale})"><svg class="botanical-cell" style="overflow:hidden" x="${x}" y="0" width="${w}" height="${h}" viewBox="${crop.join(' ')}" preserveAspectRatio="none"><g ${d.id==='dianthus'&&Math.abs(parseInt(color.slice(1,3),16)-parseInt(color.slice(3,5),16))<15?`filter="url(#petal-${color.slice(1)})"`:''}>${(d.id==='delphinium'||(d.id==='dianthus'&&color===d.colors[2][1]))&&color!==d.colors[0][1]?naturalPetals(paintedImage(d.id,d.id==='dianthus'?'botanical-key':''),color,d.id):paintedImage(d.id,d.id==='dianthus'||d.id==='foxtail'?'botanical-key':'')}</g></svg></g>`}
function featuredBotanicalPreview(d,item,color){
 if(d.id==='phalaenopsis'){
  const sample={type:d.id,h:155,scale:1,variant:item?.variant??1,color:item?.color??0};
  const ink=(!item||item.color===0)?'#e5ded2':color;
  return `<svg viewBox="-48 -150 110 165" aria-hidden="true"><path d="M0 11 Q1 0 0 -3" stroke="#849272" stroke-width="1.7" fill="none"/>${newBotanicalSpray(d,sample,ink)}</svg>`;
 }
 const light=shade(color,7),shadow=shade(color,-19),mid=shade(color,-8);
 return `<svg viewBox="-36 -43 74 125" aria-hidden="true"><path d="M3 78 C2 56 7 39 4 24" stroke="#849272" stroke-width="2" fill="none"/><path d="M-15 -26 C-19 -12 -9 1 -4 13 Q0 23 4 30 Q10 18 10 7 C11 -5 22 -20 16 -30 Q5 -41 -15 -26Z" fill="${mid}"/><path d="M-15 -26 Q-5 -39 10 -35 Q23 -33 19 -23 C16 -9 -1 -3 -7 7 Q-16 -7 -15 -26Z" fill="${light}"/><path d="M-13 -24 Q-2 -33 10 -30 Q19 -27 13 -18 Q6 -8 -5 -5 C-10 -10 -14 -17 -13 -24Z" fill="${shadow}"/><path d="M-1 -7 L3 -20" stroke="#d5bd78" stroke-width="2.5" stroke-linecap="round"/><path d="M19 -24 C19 -10 5 -5 -6 1 Q-3 15 4 27 Q8 14 10 5 C12 -9 19 -16 19 -24Z" fill="${color}"/><path d="M-5 8 Q0 19 4 27 Q8 20 8 14 Q7 29 4 33 Q-1 24 -5 8Z" fill="#a6b18a"/></svg>`;
}
function specimen(d,item){d=variedSpray(d,item);const color=item?tint(d.colors[item.color][1],item.tone):d.colors[d.previewColor??0][1],sample={type:d.id,color:d.previewColor??0,h:135,variant:0,scale:1,tone:0,bend:.8,knee:.15,...item,h:135,a:0};if(d.fanPalm){const preview={...sample,h:155,scale:1},[,h]=extraDimensions(d,155);return `<svg viewBox="-110 -175 220 220" aria-hidden="true"><path d="M0 35 L0 ${-155+h*.98}" fill="none" stroke="${d.stemColor}" stroke-width="${d.stemWidth}"/>${newBotanicalSpray(d,preview,color)}</svg>`;}if(d.id==='horsetail')return `<svg viewBox="-65 -175 130 220" aria-hidden="true">${newBotanicalSpray(d,{...sample,h:155,scale:1},color)}</svg>`;if(d.id==='callalily'||d.id==='phalaenopsis')return featuredBotanicalPreview(d,item,color);if(d.extra){const preview={...sample,h:155,scale:1},[w,h]=extraDimensions(d,155),junction=vectorStemJoin(d,preview,color);return `<svg viewBox="${d.id==='fountaingrass'&&item?.variant%2?'-30 -175 235 220':d.id==='astilbe'&&item?.variant%2?'-65 -175 160 220':d.id==='barebranch'?'-75 -175 185 220':d.id==='birdofparadise'?'-95 -175 190 220':(d.id==='kingprotea'||d.id==='fatsia')?'-80 -175 160 220':'-65 -175 130 220'}" aria-hidden="true"><path d="${junction?connectedStemPath(preview,junction,35):`M0 35 Q0 ${-155+h*(d.id==='fatsia'?.96:(d.vectorSpray||d.vectorLeaf)?.98:.88)+18} 0 ${-155+h*(d.id==='fatsia'?.96:(d.vectorSpray||d.vectorLeaf)?.98:.88)}`}" fill="none" stroke="${junction?.ink??d.stemColor??'#849272'}" stroke-width="${junction?.width??(d.stemWidth?d.stemWidth*1.8/2.1:1.8)}"/>${extraMarkup(d,preview,color)}</svg>`}if(d.foliage)return `<svg viewBox="-65 -155 130 190" aria-hidden="true">${foliageMarkup(sample,color)}</svg>`;if(d.id==='lisianthus')return `<svg viewBox="-70 -78 140 165" aria-hidden="true"><path d="M0 84Q3 64 0 41.14" stroke="#849272" stroke-width="1.8" fill="none"/>${lisianthusSpray({...sample,scale:.85},color)}</svg>`;return `<svg viewBox="-55 -65 110 150" aria-hidden="true"><path d="M0 78 C3 54 -2 35 0 ${(d.id==='carnation'?d.size*.9:d.id==='doublelisianthus'?34:d.id==='minirose'?28:d.id==='tulip'?d.size*2.15*.44:d.id==='rose'&&item?.variant%2?34:8)*(item?.scale??1)}" stroke="#849272" stroke-width="${d.stemWidth?d.stemWidth*1.8/2.1:1.8}" fill="none"/><g transform="scale(${item?.scale??1})">${flower(d.id,color,item?.variant??0,d.id==='rose'&&item?.color===8)}</g></svg>`}

function setPanel(panel){document.body.dataset.panel=panel;$('materials-tab').setAttribute('aria-selected',String(panel==='materials'));$('adjust-tab').setAttribute('aria-selected',String(panel==='adjust'));$('vase-tab').setAttribute('aria-selected',String(panel==='vase'))}

function announce(s){$('status').textContent=s}
function add(type){if(window.ForiStoryAccess&&!window.ForiStoryAccess.flower(type)){announce('這份花材還沒解鎖，完成故事就能收到新材料。');return;}if(items.length>=50){announce('最多可使用 50 枝花材 · Maximum 50 stems');return}let d=data.find(d=>d.id===type);if(!d||d.retired)throw Error('未知花材');remember();let i={...variation(type),id:nextId++,type,color:d.defaultColor??0,h:270+(items.length%3)*27,a:items.length?((items.length%5)-2)*12:0,x:330};if(['amaranthus','gloriosa','alstroemeria','fanpalm','silverfanpalm','driedfanpalm','maplebranch','hollyleaf','horsetail','barebranch','ivy','curlywillow','pulsatilla','gladiolus'].includes(type))i.variant=items.filter(item=>item.type===type).length%(type==='amaranthus'?6:type==='barebranch'?5:type==='curlywillow'?2:3);if(type==='caspia')i.variant=[0,5,4][items.filter(item=>item.type===type).length%3];if(type==='acacia'){i.variant=acaciaNext;acaciaNext=(acaciaNext+1)%3;}if(type==='cosmos'){i.variant=cosmosNext;cosmosNext=(cosmosNext+1)%3;}if(type==='phalaenopsis'){i.variant=orchidNext;orchidNext=(orchidNext+1)%3;}if(type==='doublelisianthus'){i.variant=doubleLisianthusNext;doubleLisianthusNext=1-doubleLisianthusNext;}if(type==='irisleaf'){i.variant=irisNext;irisNext=1-irisNext;}if(type==='poppy'){i.variant=poppyNext;poppyNext=(poppyNext+1)%3;}if(type==='birdofparadise'){i.variant=birdofparadiseNext;birdofparadiseNext=1-birdofparadiseNext;}if(type==='sunflower'){i.variant=sunflowerNext;sunflowerNext=(sunflowerNext+1)%3;}if(type==='lily'){i.variant=lilyNext;lilyNext=1-lilyNext;}if(type==='kingprotea'){i.variant=kingproteaNext;kingproteaNext=(kingproteaNext+1)%2;}items.push(i);selected=i.id;render();globalThis.ForiSound?.added();announce(`已加入${d.name}`);return i.id}
// Stop at the size floor and keep the painted base above the vase opening.
function minimumHeight(item){const d=variedSpray(data.find(d=>d.id===item.type),item);if(d.id==='horsetail')return 40;if(d.fanPalm||d.id==='ivy')return Math.ceil(Math.max(40,extraDimensions(d,80)[1]*item.scale*(d.fanPalm?.625:.62)+6));if(d.id==='greendianthus')return Math.ceil(Math.max(24,extraDimensions(d,80)[1]*item.scale*.88));if(vase==='bowl'){if(d.extra)return Math.ceil(Math.max(24,extraDimensions(d,80)[1]*item.scale*.9));if(d.foliage)return 24;return Math.ceil(Math.max(18,d.size*.62*item.scale));}if(d.extra)return Math.ceil(Math.max(128,extraDimensions(d,160)[1]*item.scale*.96+20));if(d.foliage)return 40;return Math.ceil(Math.max(40,(d.id==='lisianthus'?48.4:d.size*1.075)*item.scale+20))}
function active(){return items.find(x=>x.id===selected)}
// Geometry helper for mouth overlap; artwork order itself always follows the item list.
function flowerAtMouth(d,i){if(wrappedVessel())return false;
 let left,right,top,bottom;
 if(d.foliage){left=-65*i.scale;right=65*i.scale;top=-i.h-20;bottom=-12;}
 else if(d.extra){const [w,h]=extraDimensions(d,i.h),anchor=d.artAnchorX??.5;left=-w*anchor*i.scale;right=w*(1-anchor)*i.scale;top=-i.h;bottom=top+h*i.scale;}
 else if(d.id==='doublelisianthus'){left=-33*i.scale;right=46*i.scale;top=-i.h-55*i.scale;bottom=-i.h+36*i.scale;}
 else {const r=d.size*1.15*i.scale;left=-r;right=r;top=-i.h-r;bottom=-i.h+(d.id==='lisianthus'?49*i.scale:r);}
 if(d.id==='birdofparadise'&&i.variant%2)[left,right]=[-right,-left];
 const a=i.a*Math.PI/180,ys=[left,right].flatMap(x=>[top,bottom].map(y=>stemBase()+x*Math.sin(a)+y*Math.cos(a)));
 return Math.max(...ys)>=(vase==='paper'?520:vase==='columnhigh'?448:478);
}
function render(){updateBackground();updateVase();updatePalette();let stems='',tops='',fronts='';for(const i of items){const d=variedSpray(data.find(d=>d.id===i.type),i),t=`translate(${i.x-(vase==='television'?48:0)} ${stemBase()}) rotate(${i.a})`,color=tint(d.colors[i.color][1],i.tone);const tip=d.extra?i.h-extraDimensions(d,i.h)[1]*i.scale*.96:d.foliage?i.h-35:i.type==='tulip'?i.h-d.size*2.15*.44*i.scale:i.type==='carnation'?i.h-d.size*.9*i.scale:i.h-8;
 const junction=vectorStemJoin(d,i,color);let plantStem='';if(!d.foliage&&d.id!=='horsetail')plantStem+=`<path d="${junction?connectedStemPath(i,junction):stemGeometry(i,i.type==='lisianthus'?-i.h+48.4*i.scale:i.type==='doublelisianthus'?-i.h+33*i.scale:i.type==='callalily'?-i.h+40*i.scale:-tip).path}" stroke="${junction?.ink??d.stemColor??'#7e8d70'}" stroke-width="${junction?.width??d.stemWidth??2.1}" stroke-linecap="round" fill="none"/>`;
 const splitPetiole=d.fanPalm||d.id==='ivy';
 let art=d.extra?extraMarkup(d,splitPetiole?{...i,hidePetiole:true}:i,color):d.foliage?foliageMarkup(i,color):i.type==='lisianthus'?`<g transform="translate(0 ${-i.h})">${lisianthusSpray(i,color)}</g>`:`<g transform="translate(0 ${-i.h}) scale(${i.scale})">${flower(i.type,color,i.variant,i.type==='rose'&&i.color===8)}</g>`;
 if(splitPetiole){
  plantStem+=extraMarkup(d,{...i,stemOnly:true},color);
  const id=`petiole-limit-${i.id}`;
  plantStem=`<defs><clipPath id="${id}"><path d="M-2000 -2000H2000V0H-2000Z"/></clipPath></defs><g clip-path="url(#${id})">${plantStem}</g>`;
 }
 // The fern bitmap includes a bare petiole. Keep it behind the vessel while leaves follow item order.
 if(d.id==='fern'&&!wrappedVessel()){
  const cut=-i.h+extraDimensions(d,i.h)[1]*i.scale*.89,leafId=`fern-leaves-${i.id}`,stemId=`fern-petiole-${i.id}`;
  const defs=`<defs><clipPath id="${leafId}" clipPathUnits="userSpaceOnUse"><path d="M-1000 -2000H1000V${cut}H-1000Z"/></clipPath><clipPath id="${stemId}" clipPathUnits="userSpaceOnUse"><path d="M-1000 ${cut}H1000V2000H-1000Z"/></clipPath></defs>`;
  plantStem+=defs+`<g clip-path="url(#${stemId})">${art}</g>`;art=`<g clip-path="url(#${leafId})">${art}</g>`;
 }
 if(!wrappedVessel()&&vase!=='naked'){
  // A shortened plant may extend past its insertion point. Separate basal
  // stems from flowers so the vessel hides them without cutting hanging blooms.
  if(junction&&!splitPetiole){const parts=separateBasalStems(art,junction);plantStem+=parts.stems;art=parts.art;}
  else if(d.extra&&!d.vectorSpray&&!d.vectorLeaf){const id=`art-base-${i.id}`;art=`<defs><clipPath id="${id}"><path d="M-2000 -2000H2000V0H-2000Z"/></clipPath></defs><g clip-path="url(#${id})">${art}</g>`;}
 }
 if(d.id==='horsetail'){plantStem+=art;art='';}
 if(d.foliage){art=art.replace(/<path class="foliage-trunk"[^>]*\/>/g,path=>{plantStem+=path;return '';});}
 if(!wrappedVessel()&&vase!=='naked'){const id=`stem-base-${i.id}`;plantStem=`<defs><clipPath id="${id}" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2000V0H-2000Z"/></clipPath></defs><g clip-path="url(#${id})">${plantStem}</g>`;}
 const inFront=!wrappedVessel(),open=`<g class="stem-item" data-id="${i.id}" tabindex="0" role="button" aria-label="${d.name}，第 ${items.indexOf(i)+1} 枝，方向鍵移動" transform="${t}">`,decor=`<circle cy="${-i.h+(d.foliage?35:0)}" r="${Math.max(36,d.size*i.scale+15)}" fill="transparent"/>${art}${selected===i.id?`<circle class="selection-ring" cy="${-i.h+(d.foliage?35:0)}" r="${d.size*i.scale+15}"/>`:''}`;
 if(inFront){tops+=`<g data-replay-id="${i.id}" transform="${t}">${plantStem}</g>`;fronts+=open+decor+'</g>';}
 else tops+=open+plantStem+decor+'</g>';
 }
 if(['pumpkin','dogskull','ghost'].includes(vase)){
  const y=stemBase(),rx=vase==='pumpkin'?36:25;
  tops=`<defs><clipPath id="halloween-opening" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2660V${y}H-2000Z"/><ellipse cx="330" cy="${y}" rx="${rx}" ry="5"/></clipPath></defs><g clip-path="url(#halloween-opening)">${tops}</g>`;
 }
 if(['ring','pitcher','sphere','footbowl'].includes(vase)){
  const y=stemBase(),rx={ring:39,pitcher:21,sphere:22,footbowl:78}[vase],id='ceramic-opening';
  tops=`<defs><clipPath id="${id}" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2660V${y}H-2000Z"/><ellipse cx="330" cy="${y}" rx="${rx}" ry="${vase==='footbowl'?9:3}"/></clipPath></defs><g clip-path="url(#${id})">${tops}</g>`;
 }
 if(vase==='columnlow'||vase==='columnhigh'){const mouth=stemBase();tops=`<defs><clipPath id="slender-stem-opening" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2660V${mouth}H-2000Z"/><ellipse cx="330" cy="${mouth}" rx="18" ry="5"/></clipPath></defs><g clip-path="url(#slender-stem-opening)">${tops}</g>`;}
 if(['television','poodle','typewriter','swing'].includes(vase)){const base=stemBase(),half={television:84,poodle:16,typewriter:36,swing:65.52}[vase],cx=vase==='television'?282:330,top=vase==='television'?342:base-(vase==='swing'?12.48:vase==='typewriter'?9.6:8);const clip=`<defs><clipPath id="special-opening" clipPathUnits="userSpaceOnUse"><path d="M-2000 -2000H2660V${top}H${cx+half}V${base+2}H${cx-half}V${top}H-2000Z"/></clipPath></defs>`;tops=clip+`<g clip-path="url(#special-opening)">${tops}</g>`;if(!['television','poodle'].includes(vase))fronts=`<g clip-path="url(#special-opening)">${fronts}</g>`;}
 $('stems').innerHTML=stems;$('flowers').innerHTML=tops;$('front-flowers').innerHTML=fronts;$('empty').hidden=items.length>0;$('undo').disabled=!history.length;$('delete-selected').disabled=!active();$('count').textContent=String(items.length).padStart(2,'0')+' 枝 / stems';updateControls();globalThis.ForiReplay?.changed();}

function orchidSwatch(c,n){
 if(n===6)return 'radial-gradient(#f0e9e4 45%,#9973ad 75%)';
 if(n===7||n===8)return `radial-gradient(circle,#a45681 0 1px,transparent 1.5px) 0 0 / 5px 5px,${c[1]}`;
 if(n===9)return 'repeating-linear-gradient(65deg,#b183b6 0 1px,#dfcadd 1px 4px)';
 return c[1];
}
function updateControls(){let i=active();$('controls').hidden=!i;$('no-selection').hidden=!!i;$('selection-number').innerHTML=items.length?items.map((item,n)=>`<option value="${item.id}" ${item.id===selected?'selected':''}>${String(n+1).padStart(2,'0')} · ${data.find(d=>d.id===item.type).name}</option>`).join(''):'<option value="">尚未選取 / Select a stem</option>' ;if(!i)return;const d=data.find(d=>d.id===i.type);$('selected-name').textContent=d.name;$('selected-en').setAttribute('data-opening',String(d.id==='sunflower'||d.id==='kingprotea'));$('selected-en').textContent=d.fanPalm?['正面展開 · OPEN FAN','側面收窄 · SIDE FAN','斜向伸展 · ANGLED FAN'][i.variant%3]:d.id==='sunflower'?['全開 · FULL BLOOM','幾乎全開 · NEARLY OPEN','半開 · HALF OPEN'][i.variant]:d.id==='kingprotea'?['全開 · FULL BLOOM','半開 · HALF OPEN'][i.variant]:d.id==='horsetail'?['單枝直立 · SINGLE','高低雙枝 · PAIRED','錯落三枝 · THREE STEMS'][i.variant%3]:d.id==='barebranch'?['高挑分岔 · UPRIGHT','橫向開展 · SPREADING','雙叉疏枝 · FORKED','單側斜展 · ANGLED','細密枝梢 · TWIGGY'][i.variant%5]:d.id==='curlywillow'?['修長蜿蜒 · TALL','側向舒展 · OPEN'][i.variant%2]:d.id==='pulsatilla'?['直立絨球 · UPRIGHT','側傾絨球 · LEANING','輕盈散絨 · AIRY'][i.variant%3]:d.id==='gladiolus'?['修長花序 · SLENDER','舒展花序 · OPEN','含苞花序 · BUDDING'][i.variant%3]:d.id==='ivy'?['向右垂墜 · RIGHT TRAIL','向左垂墜 · LEFT TRAIL','舒展藤枝 · OPEN VINE'][i.variant%3]:d.id==='acacia'?['直立修長 · UPRIGHT','側向舒展 · OPEN BRANCH','彎垂蓬鬆 · ARCHING'][i.variant%3]:d.id==='cosmos'?['正面盛開 · OPEN','側向花朵 · SIDE','微彎花朵與花苞 · BUD'][i.variant%3]:d.id==='phalaenopsis'?['雙花 · TWO BLOOMS','三花 · THREE BLOOMS','四花 · FOUR BLOOMS'][i.variant%3]:d.en.toUpperCase();$('selected-preview').innerHTML=specimen(d,i);$('color-name').textContent=d.colors[i.color][0];$('swatches').innerHTML=d.colors.map((c,n)=>`<button class="swatch" style="background:${d.id==='phalaenopsis'?orchidSwatch(c,n):d.id==='gomphrena'&&n===2?'linear-gradient(#edb568,#cc5748)':d.id==='greendianthus'&&n===1?'linear-gradient(90deg,#9bae60 0 50%,#e7d9df 50% 100%)':d.id==='rose'&&n===8?'radial-gradient(#73182e,#b73249 45%,#e87d85)':c[1]}" aria-label="${c[0]}" aria-pressed="${n===i.color}" data-color="${n}" title="${c[0]}"></button>`).join('');$('height').min=minimumHeight(i);$('height').value=i.h;$('height-value').value=Math.round(i.h/8)+' cm';$('angle').value=i.a;$('angle-value').value=i.a+'°';}
 $('materials-tab').onclick=()=>setPanel('materials');$('adjust-tab').onclick=()=>setPanel('adjust');
 const foliageTypes=new Set(['fiddlehead','fanpalm','silverfanpalm','driedfanpalm','curlywillow','horsetail','barebranch','ivy','ginkgobranch','maplebranch','hollyleaf','cedar','eucalyptus','pointedeucalyptus','silverdollareucalyptus','monstera','fern','birdnestfern','fishtailfern','fiddlephilodendron','irisleaf','asparagusfern','dustymiller','birch','angelphilodendron','fatsia','silveroak']);
 const fillerTypes=new Set(['alstroemeria','amaranthus','marguerite','pulsatilla','tallowbranch','acacia','caspia','solidago','echinops','lunaria','muscari','campanula','pussywillow','lotuspod','wheat','hypericum','lanternfruit','crabapple','eucalyptuspod','freesia','nigella','smilax','snowberry','minirose','laceflower','sweetpea','gomphrena','lilyofthevalley','stock','statice','scabiosa','celosia','waxflower','astilbe','greendianthus','thistle','buttonmum','dianthus','chamomile','bluestar','lavender','delphinium','foxtail','gypsophila','oncidium','butterflyranunculus','fountaingrass']);
 function materialCategory(d){return foliageTypes.has(d.id)?'foliage':fillerTypes.has(d.id)?'filler':'main'}
 let category='main';
 const previewObserver=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;entry.target.querySelectorAll('image[data-src]').forEach(img=>{img.setAttribute('href',img.getAttribute('data-src'));img.removeAttribute('data-src')});previewObserver.unobserve(entry.target)}},{root:$('catalog'),rootMargin:'120px'});
 function catalogSpecimen(d){const markup=specimen(d);return previewObserver?markup.replace(/href="/g,'data-src="'):markup}
 window.refreshFlowerCatalog=()=>renderCatalog();
 function renderCatalog(){previewObserver?.disconnect();$('catalog').innerHTML=data.filter(d=>!d.retired&&materialCategory(d)===category&&(!window.ForiStoryAccess||window.ForiStoryAccess.flower(d.id))).sort((a,b)=>{const priority=d=>d.id==='rose'?-10:category==='foliage'?({'silverdollareucalyptus':-3,'eucalyptus':-2,'pointedeucalyptus':-1}[d.id]??0):0;return priority(a)-priority(b)}).map(d=>`<button class="flower-card" data-type="${d.id}" aria-label="加入${d.name}">${catalogSpecimen(d)}<strong>${d.id==='eucalyptus'?'小圓葉<br>尤加利':d.id==='silverdollareucalyptus'?'大圓葉<br>尤加利':d.name}</strong><small>${d.en}</small><span class="add">＋</span></button>`).join('');if(previewObserver)$('catalog').querySelectorAll('.flower-card').forEach(card=>previewObserver.observe(card));$('catalog').scrollTop=0;$('catalog').scrollLeft=0;for(const name of ['main','filler','foliage'])$('category-'+name).setAttribute('aria-pressed',String(category===name));}
 for(const name of ['main','filler','foliage'])$('category-'+name).onclick=()=>{category=name;renderCatalog()};
 renderCatalog();
 $('catalog').onclick=e=>{let b=e.target.closest('[data-type]');if(b)add(b.dataset.type)};
 $('swatches').onclick=e=>{let b=e.target.closest('[data-color]');if(b&&active()){if(active().color===+b.dataset.color)return;remember();active().color=+b.dataset.color;render()}};
 for(let [id,key] of [['height','h'],['angle','a']]){const control=$(id);control.oninput=e=>{if(active()){sliderSnapshot??=snapshot();active()[key]=key==='h'?Math.max(minimumHeight(active()),Math.min(390,+e.target.value)):Math.max(-75,Math.min(75,+e.target.value));render()}};control.onchange=()=>{if(sliderSnapshot&&sliderSnapshot!==snapshot())remember(sliderSnapshot);sliderSnapshot=null;render()}}
 function removeSelected(){if(!active())return;remember();items=items.filter(i=>i.id!==selected);selected=items.at(-1)?.id??null;render();announce('已移除花材，可按上一步復原')}
 $('remove').onclick=$('delete-selected').onclick=removeSelected;
 $('undo').onclick=undo;
 $('selection-number').onchange=e=>{selected=Number(e.target.value);render()};
 document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='z'&&!e.shiftKey){e.preventDefault();undo()}});
 $('reset').onclick=()=>{if(!items.length)return;if(!confirm(globalThis.ForiLocale?.translate('確定清空全部花材，重新開始？')||'確定清空全部花材，重新開始？'))return;remember();items=[];selected=null;sunflowerNext=0;kingproteaNext=0;birdofparadiseNext=0;lilyNext=0;poppyNext=0;irisNext=0;doubleLisianthusNext=0;orchidNext=0;cosmosNext=0;acaciaNext=0;render();announce('已清空花器，可按上一步復原')};
 for(const id of ['back','front'])$(id).onclick=()=>{const n=items.findIndex(i=>i.id===selected),dest=id==='front'?items.length-1:0;if(n<0||n===dest)return;remember();const [item]=items.splice(n,1);items.splice(dest,0,item);render();announce(id==='front'?'已移到最前':'已移到最後')};
 $('zoom-canvas').onclick=()=>{const board=scene.parentElement,zoomed=board.classList.toggle('is-zoomed');$('zoom-canvas').setAttribute('aria-pressed',String(zoomed));$('zoom-canvas').setAttribute('aria-label',zoomed?'還原大小':'放大畫布');$('zoom-canvas').title=zoomed?'還原大小':'放大畫布';$('zoom-help').textContent=zoomed?'在空白處滑動查看 · Pan to explore':'';if(zoomed){const item=active(),rad=(item?.a??0)*Math.PI/180,focusX=item?item.x+Math.sin(rad)*item.h:330,focusY=item?stemBase()-Math.cos(rad)*item.h:350;board.scrollLeft=focusX/660*scene.clientWidth-board.clientWidth/2;board.scrollTop=focusY/720*scene.clientHeight-board.clientHeight*.35;}else{board.scrollLeft=0;board.scrollTop=0;}};
 let drag=null;const scene=$('scene');function point(e){let p=scene.createSVGPoint();p.x=e.clientX;p.y=e.clientY;return p.matrixTransform(scene.getScreenCTM().inverse())}
 scene.onpointerdown=e=>{let g=e.target.closest('[data-id]');if(!g)return;selected=+g.dataset.id;setPanel('adjust');let p=point(e),i=active();drag={id:i.id,p,a:i.a,h:i.h,x:i.x,before:snapshot()};scene.setPointerCapture(e.pointerId);render()};
 scene.onpointermove=e=>{if(!drag)return;let i=active(),p=point(e);let rad=drag.a*Math.PI/180,headX=drag.x+Math.sin(rad)*drag.h+p.x-drag.p.x,headY=stemBase()-Math.cos(rad)*drag.h+p.y-drag.p.y;let dx=headX-i.x,dy=stemBase()-headY;i.a=Math.round(Math.max(-75,Math.min(75,Math.atan2(dx,dy)*180/Math.PI)));i.h=Math.round(Math.max(minimumHeight(i),Math.min(390,Math.hypot(dx,Math.max(0,dy)))));render()};
 scene.onpointerup=scene.onpointercancel=()=>{if(drag&&drag.before!==snapshot())remember(drag.before);drag=null;render()};
 scene.onkeydown=e=>{let g=e.target.closest('[data-id]');if(!g)return;selected=+g.dataset.id;let i=active();if(e.key==='Enter'||e.key===' '){e.preventDefault();render()}else if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();const before=snapshot();if(e.key==='ArrowLeft')i.a=Math.max(-75,i.a-2);if(e.key==='ArrowRight')i.a=Math.min(75,i.a+2);if(e.key==='ArrowUp')i.h=Math.min(390,i.h+5);if(e.key==='ArrowDown')i.h=Math.max(minimumHeight(i),i.h-5);if(before!==snapshot())remember(before);render();scene.querySelector(`[data-id="${selected}"]`).focus()}else if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();$('remove').click()}};
 render();
 if(document.modelContext?.registerTool){try{Promise.resolve(document.modelContext.registerTool({name:'add_flower',title:'加入花材',description:'在花器中加入一枝指定的花材並選取它。',inputSchema:{type:'object',properties:{type:{type:'string',enum:data.filter(d=>!d.retired).map(d=>d.id)}},required:['type'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||!data.some(d=>!d.retired&&d.id===input.type)||Object.keys(input).some(k=>k!=='type'))throw Error('請選擇有效花材');if(items.length>=50)throw Error('花器最多可容納 50 枝 · Maximum 50 stems');const id=add(input.type);return{id,count:items.length}}})).catch(()=>{})}catch{}}

$('vase-select').onchange=e=>{if(window.ForiStoryAccess&&!window.ForiStoryAccess.vase(e.target.value))return;remember();vase=e.target.value;render()};

for(const key of Object.keys(vaseColors))$('vase-color-'+key).onclick=()=>{if(vaseColor===key)return;remember();vaseColor=key;render();};

function setBackgroundMenu(open){$('background-options').hidden=!open;$('background-toggle').setAttribute('aria-expanded',String(open));}
$('background-toggle').onclick=()=>setBackgroundMenu($('background-options').hidden);
for(const key of Object.keys(backgroundColors))$('background-'+key).onclick=()=>{if(backgroundColor!==key){remember();backgroundColor=key;render();}setBackgroundMenu(false);$('background-toggle').focus({preventScroll:true});};
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.background-tools'))setBackgroundMenu(false);},true);
document.querySelector('.background-tools').addEventListener('keydown',event=>{if(event.key==='Escape'){setBackgroundMenu(false);$('background-toggle').focus({preventScroll:true});}});

$('vase-tab').onclick=()=>setPanel('vase');for(const key of Object.keys(vaseSizes))$('vase-card-'+key).onclick=()=>{if(window.ForiStoryAccess&&!window.ForiStoryAccess.vase(key))return;if(vase===key)return;remember();vase=key;render();};

// Quiet, transparent vector flowers: broad color planes and a few botanical details.
function looseFlowerCenter(color,seed=0,poppy=false){
 const red=parseInt(color.slice(3,5),16)<125,base=poppy?(red?'#51443b':'#bfaa62'):'#817344';
 let out=`<path d="M-10 -3Q-12 -9 -5 -10Q0 -14 6 -9Q13 -7 10 0Q13 7 5 9Q-2 13 -7 8Q-13 5 -10 -3Z" fill="${base}"/>`;
 for(let j=0;j<29;j++){const a=j*2.39996+seed*.7,r=2+Math.sqrt(j/29)*8.5,x=Math.cos(a)*r,y=Math.sin(a)*r*.85;
 out+=`<ellipse cx="${x}" cy="${y}" rx="${.55+(j%4)*.2}" ry="${.75+(j%3)*.2}" transform="rotate(${j*37} ${x} ${y})" fill="${poppy?(red?['#afa284','#6f6250','#bdb295'][j%3]:['#e1c574','#d5b65e','#a39458'][j%3]):['#aa985f','#918052','#b09e65'][j%3]}"/>`;}
 if(poppy)out+='<path d="M-4 -2Q-3 -6 1 -5Q5 -5 5 -1Q7 2 2 4Q-3 5 -5 1Z" fill="#89906b"/><path d="M-2 -2Q0 -3 3 -1M-2 1Q1 0 2 2" fill="none" stroke="#bbc09b" stroke-width=".8"/>';
 return out;
}
function newBotanicalHead(type,color,variant=0){
 let out='';const light=shade(color,15),dark=shade(color,-18);
 if(type==='callalily'){
  // Soft asymmetric rolled spathe, pivoting exactly at the stem junction.
  const tilt=[-10,7,-5,11][variant%4];
  return `<g transform="rotate(${tilt} 0 40)">
   <path d="M-11 -4 C-10 11 -7 24 -2 34 L-1.5 44 L1.5 44 L3 34 C7 23 9 9 11 -8Z" fill="#84956b"/>
   <path d="M-16 -12 C-13 3 -9 20 -2 30 Q1 34 4 27 C9 12 11 -2 13 -15Z" fill="${shade(color,-10)}"/>
   <path d="M-21 -25 C-28 -36 -29 -44 -26 -48 C-22 -43 -18 -44 -12 -47 C0 -54 12 -53 17 -45 C23 -39 23 -30 17 -21 C11 -12 3 -8 -5 -11 C-13 -13 -18 -19 -21 -25Z" fill="${shade(color,12)}"/>
   <path d="M-23 -39 C-15 -39 -7 -48 5 -48 C15 -48 20 -40 19 -32 C18 -22 8 -14 -2 -12 C-12 -15 -21 -29 -23 -39Z" fill="${shade(color,-8)}"/>
   <path d="M-23 -39 C-23 -29 -14 -18 -4 -14 C-12 -22 -17 -31 -23 -39Z" fill="${shade(color,-15)}"/>
   <path d="M-2 -12 Q-4 -18 -1 -19 Q2 -19 2 -14 L2 -9Z" fill="#d9c47b"/>
   <path d="M-16 -14 C-5 -7 8 -18 18 -23 C20 -13 14 -4 9 5 C5 13 5 24 2 30 C-7 26 -13 7 -16 -14Z" fill="${color}"/>
   <path d="M-16 -14 C-5 -7 8 -18 18 -23 C14 -17 2 -9 -6 -9 Q-12 -8 -16 -14Z" fill="${shade(color,13)}"/>
   <path d="M-10 6 C-5 15 0 18 5 13 Q4 25 1 31 C-3 28 -7 18 -10 6Z" fill="${shade(color,-4)}"/>
   <path d="M-4 26 Q0 30 4 26 L2 36 L-2 36Z" fill="#a9b68a" opacity=".6"/>
  </g>`;
 }
 if(type==='treepeony'){
  // Broad, irregular petals rather than a dense radial rosette.
  out+='<path d="M0 19 Q-20 12 -29 20 Q-20 31 -1 27 Q16 34 29 22 Q13 13 0 19Z" fill="#839273"/>';
  const petal='M0 10 C-12 7 -29 -1 -31 -15 Q-36 -24 -28 -27 Q-25 -34 -18 -31 Q-11 -37 -5 -31 Q3 -33 8 -26 C18 -12 12 4 0 10Z';
  for(let j=0;j<8;j++)out+=`<path transform="rotate(${j*45+variant*5})" d="${petal}" fill="${[color,light,shade(color,-8),shade(color,6)][j%4]}"/>`;
  for(let j=0;j<6;j++)out+=`<path transform="rotate(${j*60+24+variant*5}) scale(.7)" d="${petal}" fill="${[shade(color,10),color,shade(color,-5)][j%3]}"/>`;
  out+='<path d="M-7 1 Q-7 -7 0 -6 Q8 -8 9 -1 Q10 6 2 8 Q-7 7 -7 1Z" fill="#bba363"/>';
  for(let j=0;j<15;j++){const a=j*2.4,r=3+Math.sqrt(j/15)*5;out+=`<path d="M0 3 L${Math.cos(a)*r} ${Math.sin(a)*r}" stroke="#d8bf75" stroke-width="1.2" stroke-linecap="round"/>`;}
  out+=`<path d="M-4 5 Q-7 -2 -2 -3 Q1 -5 3 -1 Q6 -3 7 1 L3 6Z" fill="${dark}"/>`;
  return `<g transform="rotate(${[0,-8,10,-3][variant%4]})">${out}</g>`;
 }
 if(type==='doublelisianthus'){
  const rgb=color.slice(1).match(/../g).map(v=>parseInt(v,16)),picotee=rgb[0]<160&&rgb[1]<125&&rgb[2]>130;
  const petal=picotee?'#f4f0e8':color,edge=picotee?shade(color,30):shade(color,-7);
  // A quiet cup of three broad petals, with soft folds instead of stacked ruffles.
  let bloom=`<path d="M-24 -16 C-27 -28 -14 -29 -7 -25 C0 -32 13 -29 16 -22 C27 -25 29 -17 24 -10 C22 7 11 24 1 29 C-10 24 -22 7 -24 -16Z" fill="${shade(petal,-8)}"/>
   <path d="M-24 -16 C-27 -25 -16 -28 -7 -23 C1 -18 7 -9 8 2 C9 13 5 24 1 29 C-12 22 -22 3 -24 -16Z" fill="${shade(petal,5)}"/>
   <path d="M24 -17 C21 -24 15 -25 8 -21 C0 -16 -5 -8 -5 3 C-5 15 -1 24 1 29 C13 23 22 3 24 -17Z" fill="${petal}"/>
   <path d="M-15 -9 C-13 -17 -5 -18 1 -13 C8 -19 17 -16 18 -9 C16 8 8 22 1 29 C-8 23 -14 7 -15 -9Z" fill="${shade(petal,9)}"/>
   <path d="M-24 -16 C-27 -25 -16 -28 -7 -23 M8 -21 C15 -25 21 -24 24 -17 M-15 -9 C-13 -17 -5 -18 1 -13 C8 -19 17 -16 18 -9" fill="none" stroke="${edge}" stroke-width="${picotee?1.6:.65}" stroke-linecap="round" opacity=".8"/>
   <path d="M0 33 Q-6 29 -8 22 Q-3 25 1 29 Q5 25 9 21 Q7 29 2 34Z" fill="#87996e"/>`;
  let branch='';if(variant%2)branch=`<path d="M0 32 Q26 18 31 -21" fill="none" stroke="#7e8d70" stroke-width="1.4"/><g transform="translate(32 -29) rotate(17) scale(.78)"><path d="M0 15 C-12 5 -9 -12 0 -20 C10 -13 12 4 0 15Z" fill="#c5cf86"/><path d="M0 14 Q-2 0 2 -17 M0 14 Q-10 4 -9 -4 M0 14 Q9 5 9 -3" fill="none" stroke="#8a9b59" stroke-width=".8"/><path d="M-4 -14 Q-2 -21 0 -18 Q3 -23 5 -16" fill="#e3e6ae"/></g>`;
  return `<g class="double-lisianthus-spray">${branch}<g class="double-lisianthus-bloom" transform="rotate(${variant%2?-9:6} 0 30) scale(.88 1)">${bloom}</g><path d="M0 33 Q-20 16 -22 25 Q-17 34 0 36" fill="#81956d"/></g>`;
 }
 if(type==='minirose'){
  for(const [x,y,scale] of [[-17,8,.4],[13,-13,.46],[22,18,.3]])out+=`<path d="M0 28Q${x*.4} ${y+15} ${x} ${y}" fill="none" stroke="#7e8d70" stroke-width="1.2"/><g transform="translate(${x} ${y}) scale(${scale})">${roseSideBloom(color,false)}</g>`;
  out+='<path d="M-2 19Q-22 4 -25 14Q-19 25 -2 22M4 7Q15 -2 24 2Q20 13 4 11" fill="#7e8d70"/>';
  return out;
 }
 if(type==='spidermum'){
  const rgb=color.slice(1).match(/../g).map(n=>parseInt(n,16)),warm=rgb[0]>rgb[1]*1.3&&rgb[2]<rgb[1]*.8,tip=warm?'#d9b54c':shade(color,20),root=warm?shade(color,-25):shade(color,-28);
  // Slender straight tubular petals, orange-red bases and golden pointed tips.
  for(let row=0;row<3;row++)for(let j=0;j<39;j++){
   const a=j*360/39+row*4.7+Math.sin(j*2.1)*1.7,len=48-row*13+Math.sin(j*2.7+row)*5,bend=Math.sin(j*1.8+row)*3,width=1.05-row*.12,base=row?2:5;
   out+=`<g transform="rotate(${a})"><path d="M${-width} -${base} Q${bend-width} -${len*.65} ${bend-.35} -${len} Q${bend+1} -${len+2} ${bend+1.2} -${len-.2} Q${bend+width} -${len*.62} ${width} -${base}Z" fill="${[color,shade(color,7),root][(j+row)%3]}"/><path d="M${bend-.3} -${len} Q${bend+.8} -${len+1.5} ${bend+1.1} -${len-.2} L${bend+.8} -${len-8-row*1.5} L${bend-.5} -${len-7-row*1.5}Z" fill="${j%4?tip:shade(tip,-17)}"/></g>`;
  }
  for(let j=0;j<12;j++){const a=j*2.4,r=Math.sqrt(j)*1.6;out+=`<ellipse cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" rx=".8" ry="2.5" transform="rotate(${j*47})" fill="${j%3?tip:root}"/>`;}
 }else if(type==='feathergerbera'){
  for(let row=0;row<2;row++)for(let j=0;j<34;j++){
   const a=j*360/34+row*5.3,len=41-row*10+Math.sin(j*2.3)*3;
   out+=`<path transform="rotate(${a})" d="M-2 -8 Q-5 -23 -2 -${len-5} Q0 -${len+3} 3 -${len} Q1 -${len-8} 3 -23 L2 -8Z" fill="${[color,light,dark][(j+row)%3]}"/>`;
  }
  out+=looseFlowerCenter(color,variant);

 }else if(type==='irisleaf'){i.variant=irisNext;irisNext=1-irisNext;}if(type==='poppy'){
  const stage=variant%3;
  if(stage===0){
   for(let j=0;j<5;j++)out+=`<path transform="rotate(${j*72+variant*4})" d="M0 6 C-12 5 -34 -6 -35 -23 Q-36 -31 -28 -32 Q-22 -39 -16 -35 Q-8 -39 -1 -33 Q8 -36 12 -29 C20 -13 11 1 0 6Z" fill="${[color,light,dark,color,light][j]}"/>`;
   out+=looseFlowerCenter(color,variant,true);
  }else{
   // A cupped three-quarter bloom and a deeper side-facing bloom.
   const mirror=stage===2?-1:1;
   out+=`<g transform="scale(${mirror} 1)"><path d="M-30 -3Q-42 -23 -27 -32Q-21 -39 -14 -32Q-4 -40 5 -31Q13 -38 22 -26Q35 -25 34 -7L17 15Q-11 18 -30 -3Z" fill="${light}"/><path d="M-31 -5Q-35 -22 -23 -28Q-14 -16 -5 5L6 18Q-20 20 -31 -5" fill="${color}"/><g transform="translate(8 ${stage===2?-4:1}) scale(1 .58)">${looseFlowerCenter(color,variant,true)}</g><path d="M-33 -5Q-19 -3 -5 10Q11 15 24 -3Q30 -14 37 -14Q42 4 25 20Q7 32 -9 22Q-28 18 -33 -5Z" fill="${color}"/><path d="M-12 20Q11 27 29 13Q18 29 4 28Q-6 28 -12 20" fill="${dark}"/></g>`;
  }
 }
 return `<g transform="rotate(${[0,-12,14,-3][variant%4]})">${out}</g>`;
}
// Each fan is drawn around a shared petiole junction; only uniform scaling is used.
function fanPalmSpray(d,item,color){
 const form=(item.variant??0)%3,dry=d.id==='driedfanpalm',silver=d.id==='silverfanpalm';
 const k=(item.scale??1)*extraDimensions(d,item.h)[0]/d.artSize[0];
 const hub=[form===2?15:form===1?-8:0,100],count=dry?19:silver?17:21;
 const span=form===1?1.03:dry?1.47:1.56,lean=form===2?.26:form===1?-.21:0;
 const point=(a,r)=>[hub[0]+Math.sin(a+lean)*r*(form===1?.62:1),hub[1]-Math.cos(a+lean)*r];
 const xy=p=>p.map(n=>n.toFixed(2)).join(' '),ink=shade(color,-23),pale=shade(color,18);
 const petiole=`<path d="M0 160 Q${hub[0]*.24} 127 ${xy(hub)}" fill="none" stroke="${d.stemColor}" stroke-width="${d.stemWidth}" stroke-linecap="round"/><path d="M-.35 158 Q${hub[0]*.24-.35} 127 ${hub[0]-.35} ${hub[1]}" fill="none" stroke="${pale}" stroke-opacity=".5" stroke-width=".45"/>`;
 const wrap=art=>`<g class="fan-palm-art" transform="translate(0 ${-item.h}) scale(${k})">${art}</g>`;
 if(item.stemOnly)return wrap(petiole);
 let art=item.hidePetiole?'':petiole;
 // A continuous folded base joins all rays; deeper incisions are reserved for the tips.
 const rim=[];for(let j=0;j<=count;j++)rim.push(point(-span+2*span*j/count,(dry?73:40)+(silver?5:0)+2*Math.sin(j*.8)));
 art+=`<path d="M${xy(hub)} L${rim.map(xy).join(' L')} Z" fill="${color}"/>`;
 for(let j=0;j<count;j++){
  const a=-span+2*span*(j+.5)/count,step=span/count;
  const r=(dry?81:silver?86:83)+Math.sin(j*1.73+form)*3;
  const left=point(a-step*.97,dry?73:43),right=point(a+step*.97,dry?73:43),tip=point(a,r);
  const shoulderL=point(a-step*.51,r*(dry?.98:.84)),shoulderR=point(a+step*.55,r*(dry?.98:.85));
  // Livistona's soft split tips droop; Bismarckia stays broad and pointed.
  if(!dry&&!silver){tip[0]+=Math.sign(a)*3;tip[1]+=Math.abs(a)*7;}
  const fill=shade(color,Math.round(Math.sin(j*1.9)*7));
  art+=`<path d="M${xy(hub)} L${xy(left)} Q${xy(shoulderL)} ${xy(tip)} Q${xy(shoulderR)} ${xy(right)} Z" fill="${fill}"/><path d="M${xy(hub)} L${xy(left)} Q${xy(shoulderL)} ${xy(tip)} Z" fill="${pale}" opacity="${dry?.24:.16}"/><path d="M${xy(hub)} Q${xy(point(a,52))} ${xy(tip)}" fill="none" stroke="${ink}" stroke-width=".48" stroke-opacity=".48"/>`;
  // Fine, low-contrast fibres provide the existing illustration's engraved texture.
  for(let f=0;f<3;f++){
   const fa=a+(f-1)*step*.19,from=point(fa,24+f*6),to=point(fa,r*(.72+f*.055));
   art+=`<path d="M${xy(from)} L${xy(to)}" stroke="${f%2?ink:pale}" stroke-width=".3" opacity=".28"/>`;
  }
  if(dry&&j%3===0){const nick=point(a+step*.35,r*.94);art+=`<path d="M${xy(nick)} l-1.2 2.4" stroke="${ink}" stroke-width=".5" opacity=".35"/>`;}
 }
 art+=`<path d="M${hub[0]-3} ${hub[1]-5} Q${hub[0]} ${hub[1]-2} ${hub[0]+3} ${hub[1]-5} L${hub[0]+1} ${hub[1]+2} L${hub[0]-1} ${hub[1]+2}Z" fill="${d.stemColor}"/>`;
 return `<g class="fan-palm-art" transform="translate(0 ${-item.h}) scale(${k})">${art}</g>`;
}
// All branches share a continuous base at (0, 150); preview and canvas use the same artwork.
function newGardenSpray(d,item,color){
 const [w]=extraDimensions(d,item.h),scale=item.scale*w/d.artSize[0],v=item.variant%3;
 const green=d.stemColor||'#829174',light=shade(color,14),dark=shade(color,-16);
 const line=(path,width=1.4,ink=green)=>`<path d="${path}" fill="none" stroke="${ink}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
 let art='';
 if(d.id==='fiddlehead'){
  const x=[12,-15,3][v],y=[26,35,22][v],r=[18,16,21][v];
  const curve=`M0 150 C-5 112 ${x-r} 85 ${x-r} ${y+6} C${x-r} ${y-r} ${x+r} ${y-r} ${x+r} ${y+3} C${x+r} ${y+r} ${x-7} ${y+r+3} ${x-7} ${y+3} C${x-7} ${y-6} ${x+8} ${y-7} ${x+8} ${y+3} Q${x+8} ${y+9} ${x+2} ${y+6}`;
  art+=line(curve,4.5,dark)+line(curve,2.6,color)+line(curve,.7,light);
  for(let j=0;j<15;j++){const a=-Math.PI+j*.23,px=x+Math.cos(a)*r,py=y+Math.sin(a)*r;art+=line(`M${px} ${py}l${Math.cos(a)*3} ${Math.sin(a)*3}`, .55,'#a8a282');}
  for(const t of [.24,.43,.6]){const u=1-t,px=3*u*u*t*-5+3*u*t*t*(x-r)+t*t*t*(x-r),py=u*u*u*150+3*u*u*t*112+3*u*t*t*85+t*t*t*(y+6);art+=`<path transform="translate(${px} ${py})" d="M0 0Q-7 -3 -9 -11Q-1 -8 0 0Q3 -8 9 -9Q8 -2 0 0" fill="${color}" opacity=".88"/>`;}
 }else if(d.id==='snapdragon'){
  const lean=[0,10,-9][v],axis=y=>{let lo=0,hi=1;for(let n=0;n<22;n++){const t=(lo+hi)/2,u=1-t;if(u*u*150+2*u*t*76+t*t*9>y)lo=t;else hi=t;}const t=(lo+hi)/2;return 2*(1-t)*t*lean*.7+t*t*lean;};
  art+=line(`M0 150 Q${lean*.7} 76 ${lean} 9`,1.8);
  for(let j=0;j<9;j++){
   const y=102-j*9.5,x=axis(y),side=j%2?-1:1,k=1-j*.055;
   art+=line(`M${x} ${y+5}Q${x+side*7} ${y} ${x+side*10} ${y-3}`,1);
   art+=`<g transform="translate(${x+side*9} ${y-3}) scale(${side*k} ${k})"><path d="M-4 7Q-7 -1 -1 -3Q0 -11 8 -10Q16 -15 19 -6Q25 -1 17 3Q25 11 15 14Q7 18 1 11Z" fill="${color}"/><path d="M1 -2Q7 -10 15 -7Q17 -4 10 -1Q6 2 2 1" fill="${light}"/><path d="M1 5Q8 3 17 5Q12 10 5 9" fill="${dark}" opacity=".6"/><path d="M5 6L12 6" stroke="#e7ce83" stroke-width="1.6"/><path d="M-4 6L0 12L-5 11Z" fill="${green}"/></g>`;
  }
  for(let j=0;j<3;j++){const y=11+j*6.5;art+=`<ellipse cx="${axis(y)+(j%2?3:-2)}" cy="${y}" rx="${2+j*.7}" ry="${3.5+j*.6}" fill="${j===0?green:light}" transform="rotate(${j%2?24:-18} ${axis(y)} ${y})"/>`;}
  for(const [y,side]of [[137,1],[127,-1],[116,1]])art+=`<path d="M${axis(y)} ${y}q${side*21} -6 ${side*23} -24q${-side*19} 5 ${-side*23} 24" fill="${green}"/>`;
 }else if(d.id==='marguerite'){
  const flowers=[[[0,25,1],[-30,53,.8],[29,70,.85],[-13,89,.65]],[[14,27,.95],[-23,48,1],[33,84,.7]],[[0,33,1],[-31,77,.72],[29,55,.8],[-11,106,.55]]][v];
  for(const [x,y,k]of flowers){art+=line(`M0 150 Q${x*.16} ${y+46} ${x} ${y}`,1.25);}
  for(const [x,y,k]of flowers){
   art+=`<g transform="translate(${x} ${y}) scale(${k})">`;
   for(let j=0;j<15;j++){const a=j*24+(j%2?2:-1);art+=`<path transform="rotate(${a})" d="M-1.8 -3Q-5 -9 -3 -17Q-1 -21 2 -17Q5 -10 1.8 -3Z" fill="${j%3===0?shade(color,-7):color}" stroke="${shade(color,-12)}" stroke-width=".3"/>`;}
   art+='<circle r="4.5" fill="#d9bd58"/>';
   for(let j=0;j<12;j++){const a=j*2.4,r=3.5*Math.sqrt(j/12);art+=`<circle cx="${Math.cos(a)*r}" cy="${Math.sin(a)*r}" r=".55" fill="${j%2?'#b49b48':'#efda8b'}"/>`;}
   art+='</g>';
  }
  for(const [y,side]of [[130,1],[116,-1]]){art+=line(`M0 ${y}Q${side*13} ${y-9} ${side*22} ${y-26}`,1);for(let j=0;j<4;j++){const x=side*(4+j*4),yy=y-5-j*4;art+=line(`M${x} ${yy}l${side*2} -8M${x} ${yy}l${side*8} -1`,1);}}
 }
 return `<g transform="translate(0 ${-item.h}) scale(${scale})">${art}</g>`;
}

function newBotanicalSpray(d,item,color){if(['amaranthus','gloriosa','alstroemeria'].includes(d.id))return newSeasonalSpray(d,item,color);
 if(['fiddlehead','snapdragon','marguerite'].includes(d.id))return newGardenSpray(d,item,color);
 if(d.fanPalm)return fanPalmSpray(d,item,color);
 if(d.id==='lilyofthevalley'&&item.variant>=2)return `<g transform="scale(-1 1)">${newBotanicalSpray(d,{...item,variant:item.variant-2},color)}</g>`;
 const [w,h]=extraDimensions(d,item.h),green='#849272',light=shade(color,13),dark=shade(color,-15);let out='';
 const stem=(path,width=1.25)=>`<path d="${path}" fill="none" stroke="${green}" stroke-width="${width}" stroke-linecap="round"/>`;
 const onQuadraticAtY=(p0,p1,p2,y)=>{let lo=0,hi=1;for(let n=0;n<24;n++){const t=(lo+hi)/2,u=1-t,yy=u*u*p0[1]+2*u*t*p1[1]+t*t*p2[1];if(yy>y)lo=t;else hi=t;}const t=(lo+hi)/2,u=1-t;return [u*u*p0[0]+2*u*t*p1[0]+t*t*p2[0],u*u*p0[1]+2*u*t*p1[1]+t*t*p2[1]];};
 const leaf=(x,y,angle,k=1)=>`<path transform="translate(${x} ${y}) rotate(${angle}) scale(${k})" d="M0 0 Q-17 -9 -9 -28 Q4 -17 0 0Z" fill="#909f7d"/>`;
 if(['curlywillow','pulsatilla','gladiolus'].includes(d.id)){
  const form=item.variant%(d.id==='curlywillow'?2:3);
  const twig=(path,width=1.2,ink=d.stemColor)=>`<path d="${path}" fill="none" stroke="${ink}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  if(d.id==='curlywillow'){
   const branches=[
    [['M0 170 C-7 148 9 138 2 117 S-14 89 -3 73 S13 48 4 32 S2 12 10 3',1.7],['M2 117 C19 109 26 97 18 84 S24 60 33 55 S39 35 34 24',1.1],['M-3 73 C-23 67 -29 54 -21 42 S-27 21 -35 14',.9]],
    [['M0 170 C-9 151 -5 134 9 124 S29 107 19 91 S25 65 40 61 S58 42 50 27 S55 9 61 4',1.7],['M9 124 C-10 111 -33 119 -35 99 S-21 77 -34 62 S-43 40 -36 31',1.2],['M40 61 C22 58 15 44 22 33 S14 15 5 10',.9]],

   ][form];
   for(const [path,width]of branches)out+=twig(path,width,color)+twig(path,width*.25,light);
  }else if(d.id==='pulsatilla'){
   const cx=[0,-15,13][form],cy=[35,42,32][form];
   out+=twig(`M0 150 Q${cx+8} 100 ${cx} ${cy+9}`,1.4);
   // A small bract collar connects the feathery seed head directly to its stalk.
   for(let j=0;j<5;j++){const x=cx+(j-2)*3;out+=twig(`M${cx} ${cy+13} Q${x} ${cy+9} ${x+(j-2)*2} ${cy+5}`,.6,'#a2ab90');}
   out+=`<ellipse cx="${cx}" cy="${cy+2}" rx="4" ry="5" fill="#a9ae95"/>`;
   for(let j=0;j<62;j++){
    const a=j*2.39996,r=(form===2?30:25)*( .68+.32*(.5+.5*Math.sin(j*7.3))),dx=Math.cos(a)*r,dy=Math.sin(a)*r*.91;
    const x=cx+dx,y=cy+dy,cpx=cx+dx*.34-dy*.18,cpy=cy+dy*.4+dx*.12;
    out+=twig(`M${cx} ${cy+2} Q${cpx} ${cpy} ${x} ${y}`,j%5===0?.65:.43,j%5===0?dark:color);
    for(let f=0;f<3;f++){const t=.69+f*.1,xx=cx+dx*t,yy=cy+dy*t;out+=twig(`M${xx-dy*.085} ${yy+dx*.085} Q${xx+dx*.035} ${yy+dy*.035} ${xx+dx*.11} ${yy+dy*.11} M${xx+dy*.085} ${yy-dx*.085} Q${xx+dx*.035} ${yy+dy*.035} ${xx+dx*.11} ${yy+dy*.11}`,.35,color);}
   }
  }else{
   const lean=[-6,12,-2][form],count=[6,7,4][form];
   const center=y=>lean*(180-y)/172;
   out+=twig(`M0 180 L${lean} 8`,2);
   out+=`<path d="M0 176 Q-18 142 -14 114 Q-4 141 2 168Z" fill="#98a486"/><path d="M1 175 Q17 147 21 132 Q18 159 1 180Z" fill="#829173"/>`;
   for(let j=count-1;j>=0;j--){
    const y=133-j*16,side=j%2?-1:1,x=center(y),k=form===2?1.05-j*.14:1-j*.065;
    out+=twig(`M${x} ${y+5} L${x+side*9} ${y}`,1.1);
    out+=`<g transform="translate(${x+side*10} ${y}) rotate(${side*18}) scale(${k})"><path d="M-6 6 Q-11 13 -3 17 Q3 13 7 7Z" fill="#8d9c7a"/><path d="M-3 10 Q-21 4 -19 -9 Q-18 -17 -10 -13 Q-14 -29 -2 -29 Q7 -29 8 -16 Q20 -22 24 -12 Q29 0 12 9 Q5 15 -3 10Z" fill="${light}"/><path d="M0 9 Q-16 6 -18 -4 Q-11 -11 -3 -3 Q-4 -17 4 -21 Q12 -19 10 -4 Q21 -9 23 -1 Q17 9 6 12Z" fill="${color}"/><path d="M0 10 Q-9 1 -4 -5 Q2 -8 5 2 Q11 -5 14 0 Q13 9 4 13Z" fill="${dark}" opacity=".55"/><path d="M0 10 Q3 1 5 -4 M3 10 Q8 4 12 2" fill="none" stroke="${light}" stroke-width="1.1"/></g>`;
   }
   if(form===2){
    // Fill the upper spike with buds that gradually swell toward the open flowers.
    for(let j=0;j<5;j++){
     const y=10+j*13,x=center(y),side=j%2?-1:1,k=.48+j*.105;
     out+=`<g transform="translate(${x} ${y}) scale(${side*k} ${k})"><path d="M0 15 Q-4 2 6 -8 Q17 2 9 11 L0 15Z" fill="${j<2?'#a6b08d':color}"/><path d="M0 15 Q-5 5 -2 0 Q1 8 7 10 Q10 6 13 2 Q13 13 0 15Z" fill="#8e9e79"/><path d="M4 7 Q8 2 6 -5" fill="none" stroke="${j<2?'#c0c7a5':light}" stroke-width=".85"/></g>`;
    }
   }else{
   for(let j=0;j<3;j++){const y=12+j*15,x=center(y),side=j%2?-1:1;out+=`<path d="M${x} ${y+14} Q${x+side*13} ${y+8} ${x+side*6} ${y-3} Q${x-3} ${y+2} ${x} ${y+14}Z" fill="${j===2?color:'#a6b08d'}"/>`;}
   }
  }
  const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${k})">${out}</g>`;
 }
 if(['horsetail','barebranch','ivy'].includes(d.id)){
  const form=item.variant%(d.id==='barebranch'?5:3);
  const twig=(path,width=1.3,ink=d.stemColor)=>`<path d="${path}" fill="none" stroke="${ink}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  if(d.id==='horsetail'){
   // Length belongs to the segmented stalk, not a separate connecting stem.
   const stalks=[[[0,1]],[[ -5,1],[13,.75]],[[0,1],[-16,.8],[17,.65]]][form];
   const k=item.scale;
   for(const [spread,ratio]of stalks){
    const length=item.h*ratio,x=spread*k,top=-length;
    out+=twig(`M0 0 L${x} ${top}`,3.7*k,color)+twig(`M${-.8*k} 0 L${x-.8*k} ${top+2}`,.7*k,light);
    for(let y=top+17;y<-5;y+=22){const xx=x*y/top;out+=`<path d="M${xx-2*k} ${y} Q${xx} ${y+1.4} ${xx+2*k} ${y}" fill="none" stroke="#52654d" stroke-width="${2*k}"/><path d="M${xx-1.7*k} ${y-1.4} L${xx+1.7*k} ${y-1.4}" stroke="#b2b699" stroke-width="${.6*k}"/>`;}
    out+=`<path d="M${x-1.8*k} ${top+2} Q${x-k} ${top-3} ${x} ${top-5} Q${x+1.6*k} ${top-2} ${x+1.8*k} ${top+2}Z" fill="${dark}"/>`;
   }
   return `<g class="horsetail-stalks">${out}</g>`;
  }else if(d.id==='barebranch'){
   const layouts=[
    // Upright: narrow, tall, staggered forks.
    [['M0 150 L-2 113 L2 77 L-5 42 L0 6',2.4],['M2 77 L22 49 L28 12',1.5],['M-5 42 L-23 28 L-29 8',1.1],['M-2 113 L-22 87 L-29 62',1.4],['M22 49 L37 36',.75]],
    // Spreading: low and broad with angular offshoots.
    [['M0 150 L-2 123 L7 104 L29 89 L55 82 L86 67',2.4],['M7 104 L-17 88 L-44 82 L-58 70',1.7],['M29 89 L24 62 L32 42',1.2],['M55 82 L64 57 L62 43',1.1],['M-17 88 L-21 62 L-33 48',1.1],['M86 67 L97 49',.8],['M55 82 L76 93 L94 91',1],['M-44 82 L-59 87',.7]],
    // Forked: two spare, long arms and generous negative space.
    [['M0 150 L-2 107 L-20 73 L-31 38 L-44 13',2.4],['M-2 107 L22 79 L39 43 L49 5',2],['M-31 38 L-14 20 L-12 4',1.05],['M39 43 L62 29 L72 10',1.1],['M-20 73 L-42 59 L-55 39',1.15]],
    // Angled: a single diagonal trunk with one-sided branching.
    [['M0 150 L6 115 L24 85 L39 56 L59 27 L68 4',2.4],['M6 115 L-13 98 L-26 77',1.35],['M24 85 L52 76 L76 57 L90 51',1.45],['M39 56 L25 33 L24 12',1.2],['M59 27 L82 20 L98 4',1.1],['M52 76 L66 88 L84 87',.8],['M25 33 L9 25 L2 12',.7]],
    // Twiggy: compact, densely divided crown.
    [['M0 150 L-2 116 L4 87 L0 61 L7 28 L3 8',2.4],['M4 87 L-20 69 L-34 45 L-39 21',1.6],['M0 61 L25 49 L40 26 L44 6',1.5],['M-2 116 L26 94 L42 72 L62 60',1.6],['M-20 69 L-44 64 L-59 47',1.1],['M-34 45 L-18 32 L-17 13',1],['M25 49 L20 27 L27 12',1],['M42 72 L31 63 L28 52',.85],['M62 60 L72 39 L70 22',1],['M-44 64 L-54 76',.65],['M7 28 L-5 19 L-10 5',.7],['M40 26 L58 18 L65 5',.75],['M72 39 L89 31',.65]]
   ][form];
   for(const [path,width]of layouts)out+=twig(path,width,color)+`<path d="${path}" stroke="${light}" stroke-width="${width*.2}" fill="none" stroke-linecap="round" opacity=".6"/>`;
  }else{
   const mirror=form===1?-1:1;
   const curve=form===2?[[0,180],[-25,75],[16,3],[45,88]]:[[0,180],[-13,27],[62,2],[40,169]];
   const pt=t=>{const u=1-t;return [0,1].map(a=>u*u*u*curve[0][a]+3*u*u*t*curve[1][a]+3*u*t*t*curve[2][a]+t*t*t*curve[3][a]);};
   // Split the bare base at the first leaf without changing the cubic vine's shape.
   const mix=(a,b,t)=>a.map((v,n)=>v+(b[n]-v)*t),t=.18;
   const a=mix(curve[0],curve[1],t),b=mix(curve[1],curve[2],t),c=mix(curve[2],curve[3],t),ab=mix(a,b,t),bc=mix(b,c,t),join=mix(ab,bc,t);
   const path=q=>`M${q[0].join(' ')} C${q[1].join(' ')} ${q[2].join(' ')} ${q[3].join(' ')}`;
   const bare=twig(path([curve[0],a,ab,join]),1.3);
   if(item.stemOnly){const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${k})"><g transform="scale(${mirror} 1)">${bare}</g></g>`;}
   out+=`<g transform="scale(${mirror} 1)">`+(item.hidePetiole?'':bare)+twig(path([join,bc,c,curve[3]]),1.3);
   for(let j=0;j<11;j++){const t=.18+j*.081,[x,y]=pt(t),sign=j%2?-1:1,angle=sign*(45+j%3*9),k=.75-(t*.34),dx=sign*(4+(1-t)*5),dy=4;
    out+=twig(`M${x} ${y} Q${x+dx*.4} ${y+4} ${x+dx} ${y+dy}`,.65);
    out+=`<g transform="translate(${x+dx} ${y+dy}) rotate(${angle}) scale(${k})"><path d="M0 0 Q-7 3 -15 -4 L-8 -9 L-16 -20 L-5 -18 L0 -32 L6 -18 L17 -22 L10 -9 L16 -4 Q7 4 0 0Z" fill="${item.color===2?'#dddcc0':color}"/>`;
    if(item.color===2)out+=`<path d="M0 -1 L-10 -5 L-5 -10 L-10 -17 L-3 -15 L0 -25 L4 -15 L11 -18 L7 -9 L11 -4Z" fill="#869976"/>`;
    out+=`<path d="M0 0 L0 -27 M0 -6 L-12 -18 M0 -6 L13 -18 M0 -3 L-12 -4 M0 -3 L12 -4" stroke="${light}" stroke-width=".7" fill="none" opacity=".65"/></g>`;
   }
   out+='</g>';
  }
  const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${k})">${out}</g>`;
 }
 if(['ginkgobranch','camellia','tallowbranch','leucadendron','acacia','caspia','solidago','echinops'].includes(d.id)){
  const twig=(p,width=1.2)=>`<path d="${p}" fill="none" stroke="${d.stemColor}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const finish=()=>{const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${d.id!=='acacia'&&item.variant%2?-k:k} ${k})">${out}</g>`;};
  if(d.id==='ginkgobranch'){
   out+=twig('M0 150 L0 114 L4 80 L0 49 L8 26',1.8);
   for(const [x,y,a,k,sy]of [[8,26,10,.85,49],[-25,57,-48,1,80],[25,82,48,.9,114],[-20,115,-65,.75,136],[19,46,55,.63,49]]){
    out+=twig(`M${sy===80?4:0} ${sy} L${x} ${y}`,.9);
    out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 0 Q-4 -12 -21 -20 Q-22 -27 -17 -29 L-12 -28 L-7 -31 L-3 -29 L0 -22 L3 -30 L8 -32 L13 -29 L18 -30 Q24 -26 21 -21 Q6 -12 0 0Z" fill="${color}"/>`;
    for(const xx of [-17,-10,-5,5,11,17])out+=`<path d="M0 0 Q${xx*.45} -14 ${xx} -26" fill="none" stroke="${dark}" stroke-width=".5" opacity=".45"/>`;
    out+='</g>';
   }
  }else if(d.id==='camellia'){
   out+=twig('M0 150 Q-2 105 0 41',1.9);
   for(const [x,y,a,k]of [[0,120,-50,.9],[0,94,68,.85],[0,68,-53,.75]])out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 0 Q-14 -13 -6 -34 Q7 -31 11 -23 Q14 -10 0 0Z" fill="#71876b"/><path d="M0 0 Q1 -17 -6 -32 M0 -9 L-7 -18 M1 -17 L7 -22" fill="none" stroke="#a4b08a" stroke-width=".6"/></g>`;
   out+='<g transform="translate(0 39)">';
   for(const [n,r,k,offset]of [[7,16,1,0],[6,9,.77,24],[5,3,.48,8]])for(let j=0;j<n;j++)out+=`<g transform="rotate(${j*360/n+offset})"><path transform="translate(0 ${-r}) scale(${k})" d="M0 13 C-14 14 -21 0 -15 -10 Q-10 -20 0 -17 Q12 -21 17 -9 C22 3 12 15 0 13Z" fill="${j%3===0?light:j%3===1?color:shade(color,-6)}"/><path transform="translate(0 ${-r}) scale(${k})" d="M-9 -11 Q-1 -15 8 -12" fill="none" stroke="${light}" stroke-width=".7" opacity=".55"/></g>`;
   for(let j=0;j<9;j++){const a=j*2.4;out+=`<path d="M0 3 L${Math.cos(a)*4} ${Math.sin(a)*4}" stroke="#d0b56a" stroke-width="1.2"/><circle cx="${Math.cos(a)*4}" cy="${Math.sin(a)*4}" r="1.1" fill="#e1c77d"/>`;}
   out+='</g>';
  }else if(d.id==='tallowbranch'){
   out+=twig('M0 150 L-3 122 L2 105 L-1 84 L5 67 L2 48 L9 29',1.8);
   const bunches=[[9,29,[[0,-8,4.5],[-7,-2,5.1],[6,1,4.3],[-1,7,4.8]]],[2,48,[[9,5,4.2],[13,-3,4.6]]],[5,67,[[-7,1,5.2],[-13,-7,4.1]]],[-1,84,[[8,-4,5.1],[13,4,4.6],[-1,9,4.2]]],[2,105,[[-12,-4,4.8],[-6,5,5.3],[8,8,4.6]]]];
   let fruit='';
   for(const [x,y,berries]of bunches)for(const [dx,dy,r]of berries){const bx=x+dx,by=y+dy;out+=twig(`M${x} ${y+6} Q${bx-2} ${by+7} ${bx} ${by+2}`,.7);fruit+=`<g transform="translate(${bx} ${by}) rotate(${dx*3})"><path d="M-4 3 L-5 -1 L-1 -4 L4 -2 L5 3 L1 5Z" fill="#95876a"/><path d="M${-r} 0 C${-r-1} ${-r*.7} ${-r*.4} ${-r-1} 1 ${-r} C${r+1} ${-r} ${r+1} 1 ${r*.5} ${r*.8} Q${-r*.2} ${r+1} ${-r} 0Z" fill="${shade(color,-8)}"/><path d="M${-r+.5} -1 Q${-r} ${-r} .5 ${-r+.4} Q${r} ${-r} ${r-.2} -.3 Q1 ${r*.5} ${-r+.5} -1Z" fill="${color}"/><path d="M${-r*.6} ${-r*.25} Q${-r*.4} ${-r*.7} .5 ${-r*.65}" stroke="${light}" stroke-width="1.1" stroke-linecap="round" fill="none"/><path d="M-2 4 L0 2 L2 4" fill="none" stroke="#a09475" stroke-width=".7"/></g>`;}
   out+=fruit;
  }else if(d.id==='leucadendron'){
   out+=`<path d="M0 150 C-1 116 5 78 12 44" fill="none" stroke="#796b59" stroke-width="2.2"/>`;
   for(const [x,y,sign,len]of [[0,141,-1,32],[1,130,1,38],[2,115,-1,37],[4,100,1,42],[7,82,-1,37],[9,68,1,40]]){
    out+=`<path d="M${x} ${y} C${x+sign*9} ${y-10} ${x+sign*15} ${y-len+7} ${x+sign*14} ${y-len} C${x+sign*8} ${y-len+2} ${x+sign*4} ${y-16} ${x} ${y}Z" fill="${sign<0?'#777962':'#8a896d'}"/><path d="M${x} ${y} Q${x+sign*6} ${y-16} ${x+sign*14} ${y-len}" fill="none" stroke="#a39d7d" stroke-width=".5" opacity=".6"/>`;
   }
   out+='<g transform="translate(12 48) rotate(13)">';
   for(const [a,x,yy,c]of [[-20,-4,-8,shade(color,-15)],[17,4,-5,shade(color,-8)],[-8,-1,-12,color],[9,3,-7,shade(color,9)]])out+=`<path transform="translate(${x} ${yy}) rotate(${a})" d="M0 17 C-9 6 -11 -9 -7 -27 Q-3 -39 3 -44 Q9 -38 8 -24 C10 -7 8 8 0 17Z" fill="${c}"/><path transform="translate(${x} ${yy}) rotate(${a})" d="M0 14 Q2 -10 3 -36" stroke="${light}" stroke-width=".6" opacity=".2" fill="none"/>`;
   out+=`<path d="M0 20 Q-13 7 -16 -21 Q-7 -11 -1 7 Q5 -9 17 -25 Q15 5 0 20Z" fill="${shade(color,-5)}"/><path d="M0 20 Q-7 1 -14 -17 M0 20 Q9 1 16 -21" stroke="#a29179" opacity=".4" stroke-width=".7" fill="none"/></g>`;
  }else if(d.id==='acacia'){
   const branch=(p,k=1)=>`<path d="${p}" fill="none" stroke="#7f8a67" stroke-width="${k}" stroke-linecap="round"/>`;
   const form=item.variant%3;
   const curves=[[[0,150],[-7,79],[8,21]],[[0,150],[1,91],[-21,35]],[[0,150],[24,104],[20,51]]];
   const [p0,p1,p2]=curves[form];
   out+=branch(`M0 150 Q${p1.join(' ')} ${p2.join(' ')}`,1.5);
   const leaves=[[[132,62,28],[103,-61,23]],[[131,-64,27],[108,61,22]],[[134,-62,25],[110,77,23]]][form];
   for(const [sy,a,len]of leaves){const [x,y]=onQuadraticAtY(p0,p1,p2,sy);
    out+=`<g transform="translate(${x} ${y}) rotate(${a})">`+branch(`M0 0 Q-2 ${-len*.55} 0 ${-len}`,.7);
    for(let j=1;j<7;j++)for(const sign of [-1,1]){const yy=-j*len/7,reach=14*Math.sin(j/7*Math.PI)*.8+2,ey=yy-7;out+=branch(`M0 ${yy} L${sign*reach} ${ey}`,.4);for(let n=1;n<7;n++){const xx=sign*reach*n/7,py=yy-7*n/7,needle=3.6*Math.sin(n/7*Math.PI)+.8;out+=`<path d="M${xx} ${py} l${-sign*1.2} ${-needle} M${xx} ${py} l${sign*needle} .3" stroke="${j%2?'#687f60':'#819475'}" stroke-width=".7" stroke-linecap="round"/>`;}}
    out+='</g>';
   }
   let blooms='';
   const clusters=[
    [[27,8,13],[48,-12,28],[67,22,39],[82,-21,58],[96,24,76],[112,-19,99],[125,18,113]],
    [[43,-22,24],[65,-38,47],[79,17,35],[91,36,52],[104,-32,82],[116,39,92],[131,-23,116]],
    [[58,33,45],[74,46,63],[84,-16,58],[99,43,91],[111,-23,93],[122,39,122],[136,25,139]]
   ][form];
   for(const [sy,x,y]of clusters){const [sx]=onQuadraticAtY(p0,p1,p2,sy),cx=(sx+x)*.5,cy=form===2?Math.min(sy,y)-13:y+16;out+=branch(`M${sx} ${sy} Q${cx} ${cy} ${x} ${y}`,.8);
    for(let j=0;j<12;j++){const t=(j+1)/13,u=1-t,px=u*u*sx+2*u*t*cx+t*t*x,py=u*u*sy+2*u*t*cy+t*t*y,sign=j%2?-1:1,bx=px+sign*(4+j%3*2.3),by=py-4-j%2*2,r=2.1+(j%4)*.34;out+=branch(`M${px} ${py} L${bx} ${by}`,.5);blooms+=`<circle cx="${bx}" cy="${by}" r="${r}" fill="${shade(color,-5)}"/>`;for(let n=0;n<13;n++){const a=n*2.4,rr=r*Math.sqrt((n+.5)/13);blooms+=`<circle cx="${bx+Math.cos(a)*rr}" cy="${by+Math.sin(a)*rr}" r=".65" fill="${n%3?color:light}"/>`;}}
   }
   out+=blooms;
  }else if(d.id==='caspia'){
   const pale=item.color===1,ink=pale?'#a4ab98':d.stemColor;
   const fine=(p,k=.5)=>`<path d="${p}" fill="none" stroke="${ink}" stroke-width="${k}" stroke-linecap="round"/>`;
   let florets='';
   const detail=item.variant>=4,form=item.variant;const sprays=form===4?[[4,45,0]]:form===5?[[-14,38,-4],[19,61,6]]:[[-36,49,-14],[-23,24,-7],[-6,12,-3],[17,21,7],[36,40,14],[43,73,18],[-41,90,-20]];
   for(const [x,y,cx]of sprays){
    out+=fine(`M0 150 Q${cx} 91 ${x} ${y}`,.8);
    for(let j=0;j<(detail?4:9);j++){const t=(detail?.52:.3)+j*(detail?.12:.075),u=1-t,px=2*u*t*cx+t*t*x,py=u*u*150+2*u*t*91+t*t*y,sign=j%2?-1:1,ex=px+sign*(7+j%3*2),ey=py-13-j%3*3;out+=fine(`M${px} ${py} Q${ex} ${py-7} ${ex} ${ey}`);
     for(let n=0;n<(detail?3:5);n++){const tx=px+(ex-px)*(n+1)/(detail?3:5),ty=py+(ey-py)*(n+1)/5,fx=tx+sign*(n%2?4:2),fy=ty-4;out+=fine(`M${tx} ${ty} L${fx} ${fy}`,.3);florets+=`<g transform="translate(${fx} ${fy}) rotate(${sign*25})"><path d="M0 2 L-1.3 -.2 L-.7 -2 L.3 -1.3 L1.4 -2 L1.8 .1Z" fill="${n%3?color:light}"/><path d="M0 2 L0 -.7" stroke="${pale?'#c4c9bb':dark}" stroke-width=".4"/></g>`;}
    }
   }
   out+=florets;
  }else if(d.id==='solidago'){
   const branch=(p,k=.8)=>`<path d="${p}" fill="none" stroke="#82936b" stroke-width="${k}" stroke-linecap="round"/>`;
   out+=branch('M0 150 Q1 113 8 89 Q15 57 11 18',1.5);
   let flowers='';
   // Each arch has its own length and direction, with buds thinning at its tip.
   for(const [sx,sy,cx,cy,x,y]of [[11,53,-1,27,-8,14],[8,89,-14,55,-26,43],[8,89,30,44,41,42],[4,110,25,77,48,80],[2,128,-20,91,-38,88],[4,110,29,107,44,117],[11,53,25,25,25,13]]){
    out+=branch(`M${sx} ${sy} Q${cx} ${cy} ${x} ${y}`,1);
    for(let j=1;j<12;j++){const t=j/12,u=1-t,px=u*u*sx+2*u*t*cx+t*t*x,py=u*u*sy+2*u*t*cy+t*t*y,sign=j%2?-1:1,reach=(1-t)*9+2,ex=px+sign*reach,ey=py-5-(1-t)*5;out+=branch(`M${px} ${py} Q${ex} ${py-3} ${ex} ${ey}`,.45);
     out+=`<path d="M${px} ${py+2} Q${px+sign*4} ${py-4} ${px+sign*7} ${py-7} Q${px+sign*5} ${py} ${px} ${py+2}Z" fill="#98a875"/>`;
     for(let n=0;n<3;n++){const fx=ex+(n-1)*1.9,fy=ey-n%2*2.2,r=.65+(1-t)*.55;flowers+=`<ellipse cx="${fx}" cy="${fy}" rx="${r}" ry="${r*1.4}" fill="${j%3===0?'#b6be72':j%3===1?color:light}"/><path d="M${fx-1} ${fy} l1 -1.8 1 1" stroke="${light}" stroke-width=".45" fill="none"/>`;}
    }
   }
   for(const [x,y,sign]of [[0,142,-1],[2,130,1],[4,117,-1],[8,94,1]])out+=`<path d="M${x} ${y} Q${x+sign*12} ${y-9} ${x+sign*17} ${y-23} Q${x+sign*5} ${y-16} ${x} ${y}Z" fill="#8d9f70"/>`;
   out+=flowers;
  }else{
   out+=twig('M0 150 Q1 96 -2 38',1.7);
   for(const [x,y,r]of [[-2,33,16]]){
    out+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${shade(color,-7)}"/>`;
    for(let j=0;j<75;j++){const a=j*2.399,rr=r*Math.sqrt((j+.5)/75),xx=x+Math.cos(a)*rr,yy=y+Math.sin(a)*rr;out+=`<path d="M${xx} ${yy+1.7} l-1.2 -3 1.3 .7 1.2 -1.7 .4 3" fill="none" stroke="${j%3?color:light}" stroke-width=".8"/>`;}
    for(let j=0;j<25;j++){const a=j*Math.PI*2/25;out+=`<path d="M${x+Math.cos(a)*(r-1)} ${y+Math.sin(a)*(r-1)} l${Math.cos(a)*3} ${Math.sin(a)*3}" stroke="${color}" stroke-width=".65"/>`;}
   }
   for(const sign of [-1,1])out+=`<path d="M0 132 L${sign*8} 119 L${sign*15} 116 L${sign*10} 111 L${sign*20} 104 L${sign*17} 99 L${sign*24} 92 L${sign*12} 97 L${sign*9} 106 L${sign*4} 105Z" fill="#8e9d83"/>`;
  }
  return finish();
 }
 if(d.id==='cosmos'){
  const form=item.variant%(d.id==='barebranch'?5:3);
  const twig=(path,width=1.2)=>`<path d="${path}" fill="none" stroke="${green}" stroke-width="${width}" stroke-linecap="round"/>`;
  const cx=[0,-12,13][form],cy=[38,43,45][form];
  out+=twig(`M0 150 C-4 112 ${cx} 86 ${cx} ${cy}`,1.4);

  if(form===2){out+=twig('M0 120 Q-27 105 -25 81');out+='<g transform="translate(-25 79) rotate(-17)"><path d="M0 6 Q-11 -3 -3 -12 Q4 -15 7 -5 Q9 2 0 6Z" fill="#9eac7f"/><path d="M-2 -9 Q2 -13 4 -7 L1 0Z" fill="'+color+'"/><path d="M0 7 L-6 1 M0 7 L5 1" stroke="#7c9167" stroke-width="1.2"/></g>';}
  out+=`<g transform="translate(${cx} ${cy}) rotate(${[4,-25,23][form]})">`;
  if(form===1){
   for(let j=0;j<5;j++)out+=`<path transform="rotate(${(j-2)*18})" d="M0 6 C-8 3 -13 -8 -9 -18 L-5 -20 L-1 -18 L4 -20 L9 -16 C12 -6 8 3 0 6Z" fill="${j%2?color:shade(color,-7)}"/>`;
   out+='<ellipse cy="3" rx="10" ry="4" fill="#d4b04e"/>';
   for(let j=0;j<4;j++)out+=`<path transform="rotate(${(j-1.5)*23} 0 6)" d="M0 4 C-9 3 -17 9 -14 17 L-10 19 L-6 17 L-2 20 L3 17 Q7 10 0 4Z" fill="${j%2?light:color}"/>`;
   out+='<path d="M-5 17 L0 22 L5 17" fill="#8b9c70"/>';
  }else{
   for(let j=0;j<8;j++){const a=j*45+(form===2?(j%2?5:-4):0),length=form===2?(j%3===0?25:30):28;out+=`<path transform="rotate(${a})" d="M0 4 C-7 -1 -13 -13 -10 -${length-4} L-6 -${length-2} L-3 -${length} L1 -${length-2} L5 -${length} L10 -${length-4} C12 -13 7 -1 0 4Z" fill="${j%3===0?light:j%3===1?color:shade(color,-5)}"/><path transform="rotate(${a})" d="M0 -7 L-2 -${length-6}" stroke="${dark}" stroke-width=".5" opacity=".28"/>`;}
   out+='<circle r="6.6" fill="#cfac4e"/>';
   for(let j=0;j<14;j++)out+=`<circle cx="${Math.cos(j*2.4)*(j%2?4.5:2.6)}" cy="${Math.sin(j*2.4)*(j%2?4.5:2.6)}" r="1" fill="${j%2?'#e8ca68':'#b89543'}"/>`;
  }
  out+='</g>';
  const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${k})">${out}</g>`;
 }
 if(['lunaria','cosmos','clematis','muscari','campanula'].includes(d.id)){
  const mirror=item.variant%2?-1:1;
  const twig=(path,width=1.2)=>`<path d="${path}" fill="none" stroke="${d.stemColor??green}" stroke-width="${width}" stroke-linecap="round"/>`;
  let heads='';
  if(d.id==='lunaria'){
   out+=twig('M0 150 L0 41 Q0 28 8 19');
   for(const [x,y,k]of [[8,22,.8],[-21,49,1],[23,67,.92],[-19,94,.85],[17,117,.7]]){
    out+=twig(`M0 ${Math.max(41,y+20)} Q${x} ${y+16} ${x} ${y+9}`);
    heads+=`<g transform="translate(${x} ${y}) rotate(${x*.6}) scale(${k})"><ellipse rx="12" ry="17" fill="${color}" opacity=".72"/><ellipse rx="11.6" ry="16.5" fill="none" stroke="${dark}" stroke-width=".65" opacity=".5"/><path d="M0 -16 Q-2 0 0 16" stroke="${dark}" stroke-width=".6" opacity=".4"/><path d="M-8 -10 Q-12 -1 -6 10" stroke="${light}" stroke-width="2" opacity=".65" fill="none"/></g>`;
   }
  }else if(d.id==='cosmos'||d.id==='clematis'){
   const star=d.id==='clematis',flowers=item.variant<2?[[3,30,1],[-26,78,.7]]:[[-9,39,.95],[27,88,.65]];
   const [cx,cy]=flowers[0];
   out+=twig(`M0 150 L0 104 C0 76 ${cx} ${cy+22} ${cx} ${cy}`,1.4);
   const [sx,sy]=flowers[1];out+=twig(`M0 112 Q${sx} ${sy+20} ${sx} ${sy}`);
   if(star){out+=leaf(0,127,-55,.65)+leaf(0,110,60,.7);out+=twig('M0 125 Q29 118 25 103 Q21 97 18 103',.7);}
   else for(const y of [114,131])for(const sign of [-1,1]){out+=twig(`M0 ${y} L${sign*19} ${y-21}`,.65);for(let j=1;j<4;j++)out+=twig(`M${sign*j*4} ${y-j*4.4} l${sign*2} -9 M${sign*j*4} ${y-j*4.4} l${sign*8} -3`,.45);}
   for(const [x,y,k]of flowers){heads+=`<g transform="translate(${x} ${y}) scale(${k})">`;
    const n=star?6:8;
    for(let j=0;j<n;j++)heads+=`<path transform="rotate(${j*360/n+9})" d="${star?'M0 4 C-12 -4 -9 -20 0 -29 C10 -20 12 -4 0 4Z':'M0 3 C-8 -2 -14 -15 -10 -22 L-6 -23 L-3 -26 L1 -24 L5 -26 L10 -22 C13 -12 8 -2 0 3Z'}" fill="${j%3===0?light:j%3===1?color:shade(color,-5)}"/>`;
    if(star){for(let j=0;j<14;j++){const a=j*Math.PI/7,xx=Math.cos(a)*7,yy=Math.sin(a)*7;heads+=`<path d="M0 0 L${xx} ${yy}" stroke="#e2dbb1" stroke-width="1"/><circle cx="${xx}" cy="${yy}" r="1.1" fill="#ded4a4"/>`;}heads+='<circle r="3" fill="#a5a276"/>';}
    else{heads+='<circle r="6" fill="#c3a159"/>';for(let j=0;j<9;j++)heads+=`<circle cx="${Math.cos(j*2.4)*4}" cy="${Math.sin(j*2.4)*4}" r="1" fill="#e4c97e"/>`;}
    heads+='</g>';
   }
  }else if(d.id==='muscari'){
   out+=twig('M0 150 Q3 98 0 29',1.6);
   out+='<path d="M0 143 Q-29 113 -21 75 Q-17 116 0 143Z M1 146 Q27 117 19 86 Q17 123 1 146Z" fill="#8f9d7a"/>';
   for(let row=0;row<7;row++){
    const y=24+row*7.5,r=3.4+Math.min(row,4)*.55;
    for(const sign of [-1,1]){const x=sign*(row<2?3.3:5.6);heads+=`<g transform="translate(${x} ${y})"><path d="M${-r} 0 Q${-r-1} -5 0 -6 Q${r+1} -5 ${r} 0 L${r*.55} 4 L${-r*.55} 4Z" fill="${row%2?color:dark}"/><ellipse cy="3" rx="${r*.62}" ry="1.6" fill="${light}"/><ellipse cy="3.2" rx="${r*.34}" ry=".85" fill="${dark}"/><path d="M-2 -3 L-2 -1" stroke="${light}" opacity=".45" stroke-linecap="round"/></g>`;}
   }
  }else{
   out+=twig('M0 150 L0 59 Q0 35 9 20',1.5);
   const bells=item.variant<2?[[9,24,-12,.7],[-19,56,24,1],[22,85,-28,.95],[-17,112,20,.8]]:[[9,25,-10,.8],[-22,69,26,1],[22,108,-26,.95]];
   for(const [x,y,a,k]of bells){out+=twig(`M0 ${Math.max(59,y+4)} Q${x*.6} ${y-12} ${x} ${y}`);heads+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 -3 L-7 4 L-2 3 L2 6 L6 3Z" fill="#8c9b76"/><path d="M-5 0 C-10 4 -7 13 -14 23 Q-8 29 -3 25 Q2 30 6 25 Q12 28 15 22 C8 13 10 3 5 0Z" fill="${color}"/><path d="M-4 2 Q-5 14 -9 23 Q0 19 12 23 Q5 13 5 2Z" fill="${light}" opacity=".6"/><path d="M-13 23 Q-4 17 14 23 Q7 28 2 25 Q-5 28 -13 23Z" fill="${dark}"/><path d="M-12 23 Q-4 19 13 23" fill="none" stroke="${light}" stroke-width="1.3"/><path d="M0 20 L0 25" stroke="#d6c89e" stroke-width="1.2"/></g>`;}
   out+=leaf(0,133,55,.6);
  }
  out+=heads;
  const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${mirror*k} ${k})">${out}</g>`;
 }
 if(['pussywillow','lotuspod','wheat','maplebranch','hollyleaf'].includes(d.id)){
  const mirror=item.variant%2?-1:1;
  const branch=(path,width=1.4)=>`<path d="${path}" stroke="${d.stemColor??'#849272'}" stroke-width="${width}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  if(d.id==='pussywillow'){
   out+=branch('M0 150 L0 78 Q0 47 9 17',1.7);
   out+=branch('M0 103 Q-18 83 -25 48',1.2);
   const buds=[[8,22,12,.8],[3,44,-27,1],[1,65,28,.95],[0,87,-25,1],[-23,53,-30,.78],[-17,74,25,.88]];
   for(const [x,y,a,k]of buds)out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 4 Q-7 -2 -2 -9 Q4 -8 4 0Z" fill="#8b7564"/><ellipse cy="-5" rx="4.5" ry="7.7" fill="${shade(color,-7)}"/><ellipse cx="-.7" cy="-6" rx="3.6" ry="6.3" fill="${color}"/><path d="M-3 -9 L-4 -10 M-3 -5 L-4.5 -5 M-2 -12 L-2 -13 M1 -12 L2 -13 M3 -8 L4 -9 M3 -3 L4 -3" stroke="${light}" stroke-width=".7" opacity=".7" stroke-linecap="round"/></g>`;
  }else if(d.id==='lotuspod'){
   const tilt=item.variant<2?-12:16;
   out+=branch('M0 150 Q-7 99 3 60 Q7 45 0 35',2.1);
   out+=`<g transform="translate(0 35) rotate(${tilt})"><path d="M-27 -4 Q-22 15 0 24 Q23 13 27 -4Z" fill="${dark}"/><path d="M-22 -2 Q-16 12 0 21 Q13 12 20 -2Z" fill="${color}"/><path d="M-14 4 L-5 17 M0 5 L0 20 M14 3 L7 16" fill="none" stroke="${light}" stroke-width="1" opacity=".35"/><ellipse cy="-4" rx="29" ry="14" fill="${light}"/><ellipse cy="-4" rx="26" ry="11.5" fill="${color}"/>`;
   for(const [x,y,r]of [[-15,-7,3.5],[-3,-11,3],[10,-8,3.7],[19,-2,3],[-17,1,2.8],[-5,-1,4],[6,2,3.3],[-4,6,2.4]])out+=`<ellipse cx="${x}" cy="${y}" rx="${r+1}" ry="${r*.72+1}" fill="${light}"/><ellipse cx="${x}" cy="${y+.4}" rx="${r}" ry="${r*.72}" fill="${shade(color,-32)}"/><ellipse cx="${x+.3}" cy="${y+1}" rx="${r*.5}" ry="${r*.36}" fill="${dark}"/>`;
   out+='</g>';
  }else if(d.id==='wheat'){
   const spikes=item.variant<2?[[-23,53,-16,.8],[2,23,4,1],[24,63,19,.8]]:[[-17,40,-12,.95],[19,52,16,.9]];
   for(const [x,y,a,k]of spikes){const ex=x-Math.sin(a*Math.PI/180)*42*k,ey=y+Math.cos(a*Math.PI/180)*42*k;out+=branch(`M0 150 Q${ex*.3} 105 ${ex} ${ey}`,1.2);out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})">`+branch('M0 42 L0 -9',1);
    for(let n=0;n<6;n++)for(const sign of [-1,1]){const y=n*6;out+=`<path d="M0 ${y+9} Q${sign*10} ${y+4} ${sign*7} ${y-4} Q${sign} ${y-3} 0 ${y+9}Z" fill="${n%2?color:shade(color,-5)}"/><path d="M${sign*6} ${y-2} L${sign*(11+n*.5)} ${y-19}" stroke="${light}" stroke-width=".65" stroke-linecap="round"/>`;}
    out+='</g>';
   }
  }else{
   const form=item.variant%3,maple=d.id==='maplebranch';
   const layouts=maple?[
    [[0,29,0,.85],[-24,65,-46,.9],[25,87,48,1],[-18,114,-60,.67]],
    [[0,37,-12,1.05],[30,76,58,.8],[-20,108,-48,.65]],
    [[0,24,9,.65],[-21,49,-42,.68],[23,67,40,.78],[-27,89,-58,.8],[19,113,54,.62]]
   ]:[
    [[0,27,7,.8],[-18,60,-47,.9],[21,79,44,1],[-17,107,-48,.85],[16,127,50,.7]],
    [[0,30,-10,1.1],[-27,77,-60,1],[24,111,51,.88]],
    [[0,22,0,.68],[-17,46,-40,.65],[18,63,37,.74],[-23,83,-54,.86],[24,105,53,.8],[-15,127,-59,.6]]
   ];
   const leaves=layouts[form],top=leaves[0],topAngle=top[2]*Math.PI/180,base=maple?14:13;
   const tx=top[0]-Math.sin(topAngle)*base*top[3],ty=top[1]+Math.cos(topAngle)*base*top[3];
   out+=branch(`M0 150 L0 ${ty+16} Q0 ${ty+6} ${tx} ${ty}`,1.7);
   for(const [x,y,a,k]of leaves){const angle=a*Math.PI/180,ex=x-Math.sin(angle)*base*k,ey=y+Math.cos(angle)*base*k;
    out+=branch(`M0 ${Math.max(ty+16,ey+13)} Q${ex*.6} ${ey+8} ${ex} ${ey}`,1);
    out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})">`;
    if(d.id==='maplebranch')out+=`<path d="M0 14 L-7 7 L-20 8 L-15 0 L-23 -9 L-11 -6 L-14 -20 L-4 -14 L0 -30 L5 -14 L15 -20 L12 -6 L24 -9 L16 1 L21 8 L8 7Z" fill="${color}"/><path d="M0 14 L0 -29 L5 -14 L15 -20 L12 -6 L24 -9 L16 1 L21 8 L8 7Z" fill="${dark}" opacity=".28"/><path d="M0 15 L0 -23 M0 8 L-16 -5 M0 8 L17 -5 M0 0 L-10 -15 M0 0 L11 -15" stroke="${light}" stroke-width=".8" opacity=".6" fill="none"/>`;
    else out+=`<path d="M0 13 Q-4 7 -13 8 Q-8 1 -17 -3 Q-10 -8 -13 -16 Q-5 -13 0 -27 Q5 -13 13 -16 Q10 -8 17 -3 Q8 1 13 8 Q4 7 0 13Z" fill="${color}"/><path d="M0 13 L0 -27 Q5 -13 13 -16 Q10 -8 17 -3 Q8 1 13 8 Q4 7 0 13Z" fill="${light}" opacity=".46"/><path d="M0 12 L0 -23 M0 3 L-10 -2 M0 -6 L-8 -13 M0 3 L10 -2 M0 -6 L8 -13" stroke="${light}" stroke-width=".7" fill="none" opacity=".65"/>`;
    out+='</g>';
   }
  }
  const k=item.scale*w/d.artSize[0];
  return `<g transform="translate(0 ${-item.h}) scale(${mirror*k} ${k})">${out}</g>`;
 }
 if(d.id==='eucalyptuspod'){
  const wood=(path,width=1.6)=>`<path d="${path}" fill="none" stroke="#8f8172" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/><path d="${path}" fill="none" stroke="#c5b9a6" stroke-width="${width*.25}" opacity=".6"/>`;
  out+=wood('M0 150 L-3 124 L2 101 L-4 78 L2 54 L10 29',2.7);
  out+=wood('M-3 124 L-15 102 L-30 89 L-43 74',2)+wood('M2 101 L21 88 L33 68 L37 54',1.9)+wood('M-4 78 L-19 62 L-27 40 L-33 29',1.8)+wood('M2 54 L-7 44 L-14 26',1.5);
  const groups=[[10,29,0],[-33,29,1],[-14,26,2],[-27,40,3],[-19,62,4],[-43,74,5],[-30,89,6],[37,54,7],[21,88,8],[-3,124,9],[2,54,10]];
  let caps='';
  for(const [x,y,n]of groups){
   const offsets=n%3===0?[[-7,-6,-38],[3,-9,13],[9,-1,68]]:n%3===1?[[-5,-8,-24],[5,-5,39],[0,3,109],[11,1,77]]:[[-6,-4,-65],[4,-7,18]];
   offsets.forEach(([dx,dy,a],j)=>{
    out+=wood(`M${x} ${y+2} L${x+dx} ${y+dy+3}`,.9);
    const k=.66+((n+j)%4)*.09;
    caps+=`<g transform="translate(${x+dx} ${y+dy}) rotate(${a}) scale(${k})"><path d="M-4.9 -8 Q-7 -1 -3 4 Q0 6 3.8 3 Q6.4 -.5 4.8 -8Z" fill="${dark}"/><path d="M-4 -8 Q-5 0 -2 3 Q1 4 2.6 1 L3 -8Z" fill="${color}"/><path d="M-3 -5 Q-4 -1 -1 2" fill="none" stroke="${light}" stroke-width="1.1" opacity=".65"/><path d="M-5.4 -8 L-4.1 -10 L-1.8 -9.7 L.5 -10.4 L3 -9.5 L5.2 -8 Q5 -4.9 0 -4.6 Q-5 -5 -5.4 -8Z" fill="${shade(color,7)}"/><ellipse cy="-7.7" rx="3.4" ry="2.2" fill="#655f46"/><path d="M-2.4 -8.2 L-.4 -6.5 L2 -8.1 M-.4 -6.5 L.4 -9" fill="none" stroke="${color}" stroke-width=".8"/></g>`;
   });
  }
  out+=caps;const k=item.scale*w/d.artSize[0];return `<g transform="translate(0 ${-item.h}) scale(${item.variant%2?-k:k} ${k})">${out}</g>`;
 }
 if(d.id==='hypericum'||d.id==='crabapple'){
  const dragon=d.id==='hypericum',mirror=item.variant%2?-1:1;
  const twig=(path,width=1.15)=>`<path d="${path}" fill="none" stroke="${dragon?'#897e60':'#827e64'}" stroke-width="${width}" stroke-linecap="round"/>`;
  const blade=(x,y,sign,k)=>`<g transform="translate(${x} ${y}) scale(${sign*k} ${k})"><path d="M0 0 C8 -15 24 -23 32 -17 C29 -3 16 5 0 0Z" fill="${dragon?'#728261':'#8c9670'}"/><path d="M1 0 Q17 -1 30 -16 Q21 -7 1 0Z" fill="${dragon?'#87926c':'#a0a680'}"/><path d="M1 0 Q17 -6 28 -15" stroke="#b0b18a" stroke-width=".5" opacity=".45" fill="none"/></g>`;
  // All lateral branches join the straight trunk exactly; fruit layers cover their tips.
  out+=twig('M0 150 L0 36',1.8);
  let fruitArt='';
  if(dragon){
   out+=blade(0,113,-1,.95)+blade(0,113,1,.85)+blade(0,77,-1,.92)+blade(0,77,1,1.05);
   const clusters=item.variant<2?[[-23,39,65],[18,22,52],[31,56,82]]:[[-25,32,62],[18,40,68]];
   for(const [x,y,j]of clusters){
    out+=twig(`M0 ${j} Q${x*.55} ${y+15} ${x} ${y+7}`);
    for(const [dx,dy,k]of [[-10,2,.78],[2,-7,1],[12,6,.7]]){
     const fx=x+dx,fy=y+dy;out+=twig(`M${x} ${y+9} Q${fx} ${fy+12} ${fx} ${fy+4}`,.8);
     fruitArt+=`<g transform="translate(${fx} ${fy}) rotate(${dx*.9}) scale(${k})"><path d="M0 3 L-5 2 L-3 5 L-4 7 L0 5 L4 7 L3 4 L6 2Z" fill="#778559"/><circle cy="-.5" r="5.8" fill="${dark}"/><circle cx="-.55" cy="-1.1" r="5.1" fill="${color}"/><ellipse cx="-2" cy="-2.8" rx="1.65" ry="1.1" fill="${light}" opacity=".65"/><circle cx=".2" cy="-5.3" r=".55" fill="${dark}"/></g>`;
    }
   }
   // The trunk ends inside the upper fan rather than protruding above its fruit.
   out+=twig('M0 36 Q5 31 20 22',1);
  }else{
   const clusters=item.variant<2?[[0,24,36],[-24,50,76],[24,69,96],[-20,96,119],[17,117,138]]:[[0,27,36],[25,52,77],[-24,79,103],[18,106,130]];
   for(const [x,y,j]of clusters){
    out+=twig(`M0 ${j} Q${x*.7} ${y+16} ${x} ${y+5}`);
    out+=blade(x*.6,y+22,x<=0?1:-1,.48);
    const berries=[[-8,0,5.3],[1,-5,5.8],[9,3,5],[-3,9,5.4],[7,12,3.5],[-11,11,3]];
    for(const [dx,dy,r]of berries){
     const fx=x+dx,fy=y+dy,c=r<4?'#aab879':color;
     out+=twig(`M${x} ${y+6} L${fx} ${fy}`,.65);
     fruitArt+=`<g transform="translate(${fx} ${fy})"><path d="M${-r} 0 C${-r-1} ${-r*.8} -2 ${-r-1} 0 ${-r*.72} C${r*.7} ${-r-1} ${r+1} -2 ${r} 2 Q${r*.6} ${r+1} 0 ${r*.9} Q${-r} ${r} ${-r} 0Z" fill="${shade(c,-9)}"/><ellipse cx="-.5" cy="-.5" rx="${r*.86}" ry="${r*.83}" fill="${c}"/><ellipse cx="${-r*.25}" cy="${-r*.3}" rx="${r*.3}" ry="${r*.22}" fill="${shade(c,10)}" opacity=".7"/><path d="M-.9 -1 L.7 .5 M.7 -1 L-.6 .5" fill="none" stroke="#8c8a68" stroke-width=".65"/></g>`;
    }
   }
  }
  out+=fruitArt;
  const k=item.scale*w/d.artSize[0];
  return `<g transform="translate(0 ${-item.h}) scale(${mirror*k} ${k})">${out}</g>`;
 }
 if(['hypericum','lanternfruit','crabapple','eucalyptuspod'].includes(d.id)){
  const mirror=item.variant%2?-1:1;
  const points=item.variant<2?[[15,29],[-24,66],[24,103]]:[[-14,31],[24,75]];
  const [cx,cy]=points[0],join=cy+23;
  const twig=path=>`<path d="${path}" fill="none" stroke="#8b9478" stroke-width="1.5" stroke-linecap="round"/>`;
  out+=twig(`M0 150 L0 ${join} C0 ${cy+12} ${cx} ${cy+12} ${cx} ${cy}`);
  let fruits='';
  for(const [x,y]of points){
   if(x!==cx||y!==cy)out+=twig(`M0 ${y+23} C0 ${y+12} ${x} ${y+12} ${x} ${y}`);
   if(d.id!=='eucalyptuspod')out+=`<path d="M0 ${y+23} Q${-x*.7} ${y+2} ${-x*.85} ${y+9} Q${-x*.9} ${y+22} 0 ${y+23}Z" fill="#97a17e"/>`;
   if(d.id==='hypericum'){
    for(const [dx,dy,r]of [[-9,0,8],[8,-4,8.5],[3,13,9]]){
     out+=twig(`M${x} ${y} L${x+dx} ${y+dy}`);
     fruits+=`<g transform="translate(${x+dx} ${y+dy})"><path d="M-9 -2 L-5 -5 L-4 -10 L0 -6 L5 -9 L5 -4 L10 -1 L5 2 L-5 3Z" fill="#879775"/><ellipse cy="2" rx="${r}" ry="${r*.95}" fill="${dark}"/><ellipse cx="-.7" cy=".8" rx="${r*.87}" ry="${r*.84}" fill="${color}"/><ellipse cx="-2.5" cy="-2" rx="2.6" ry="1.5" fill="${light}" opacity=".65"/><path d="M-1 8 L0 7 L1 8" stroke="#85755e" stroke-width=".7" fill="none"/></g>`;
    }
   }else if(d.id==='lanternfruit'){
    // The stalk terminates under the calyx; the husk hangs below it.
    fruits+=`<g transform="translate(${x} ${y}) rotate(${x<0?12:-12})"><path d="M0 0 C-5 5 -18 6 -17 18 Q-15 29 0 39 Q15 29 17 18 C18 6 5 5 0 0Z" fill="${dark}"/><path d="M0 1 C-9 8 -11 22 0 39 C13 21 10 8 0 1Z" fill="${color}"/><path d="M0 2 Q-3 18 0 37 Q5 19 0 2Z" fill="${light}" opacity=".5"/><path d="M0 2 Q-13 15 0 38 M0 2 Q13 15 0 38" fill="none" stroke="${light}" stroke-width=".65" opacity=".45"/><path d="M0 -2 L-6 5 L-1 3 L3 6 L5 3Z" fill="#94986f"/></g>`;
   }else if(d.id==='crabapple'){
    fruits+=`<g transform="translate(${x} ${y})"><path d="M0 0 Q-1 -6 3 -9" stroke="#88745b" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M0 1 C-16 -7 -21 5 -16 17 Q-11 30 0 25 Q12 30 17 16 C22 3 13 -7 0 1Z" fill="${dark}"/><path d="M0 2 C-13 -4 -17 5 -13 16 Q-8 25 0 23 Q12 27 14 13 C18 2 8 -3 0 2Z" fill="${color}"/><path d="M-9 3 Q-14 8 -10 14" stroke="${light}" stroke-width="3" stroke-linecap="round" opacity=".55"/><path d="M-2 23 Q0 21 2 23" stroke="#8b735a" fill="none" stroke-width=".8"/></g>`;
   }else{
    for(const [dx,dy,k]of [[-9,-2,.8],[10,2,1],[0,17,.85]]){
     out+=twig(`M${x} ${y} L${x+dx} ${y+dy+8}`);
     fruits+=`<g transform="translate(${x+dx} ${y+dy}) rotate(${dx}) scale(${k})"><path d="M-9 -3 Q-10 8 -3 11 L3 11 Q10 8 9 -3Z" fill="${dark}"/><path d="M-7 -2 Q-7 7 -2 9 L3 9 Q7 5 7 -2Z" fill="${color}"/><ellipse cy="-3" rx="10" ry="4.7" fill="${light}"/><ellipse cy="-3" rx="6.5" ry="2.8" fill="${shade(color,-25)}"/><path d="M-4 -3 L0 -1 L4 -4 M0 -1 L0 -5" fill="none" stroke="${color}" stroke-width="1.2"/></g>`;
    }
   }
  }
  out+=fruits;
  const k=item.scale*w/d.artSize[0];
  return `<g transform="translate(0 ${-item.h}) scale(${mirror*k} ${k})">${out}</g>`;
 }
 if(['freesia','nigella','smilax','snowberry'].includes(d.id)){
  const mirror=item.variant%2?-1:1;
  if(d.id==='freesia'){
   out+=stem('M0 150 C-3 109 -5 67 8 40 Q19 19 41 24',1.7);
   out+='<path d="M-2 137 Q-26 115 -27 79 Q-9 103 -2 137Z" fill="#8e9e79"/>';
   const florets=item.variant<2?[[-5,83,1,-20],[1,60,.85,-8],[13,40,.67,20]]:[[-5,93,.92,-25],[-2,72,.87,-14],[6,51,.75,5],[19,35,.57,23]];
   florets.forEach(([x,y],index)=>{const t=(item.variant<2?[.4,.65,.9]:[.3,.5,.7,.93])[index],u=1-t,sx=-9*u*u*t-15*u*t*t+8*t*t*t,sy=150*u*u*u+327*u*u*t+201*u*t*t+40*t*t*t;out+=stem(`M${sx} ${sy} Q${(sx+x)/2} ${y+8} ${x} ${y}`,1.1);});
   for(const [x,y,k,a]of florets){out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 17 C-6 9 -14 -1 -16 -12 Q-16 -20 -9 -18 Q-3 -25 3 -18 Q12 -22 16 -14 C17 -3 7 10 0 17Z" fill="${color}"/><path d="M0 12 Q-12 1 -15 -11 Q-15 -17 -9 -15 Q-3 -20 1 -14 Q6 -21 12 -15 Q19 -11 11 -3Z" fill="${light}"/><path d="M0 9 Q-7 -1 -5 -7 Q0 -13 6 -6 Q9 0 0 9Z" fill="${dark}"/><path d="M-1 6 L-2 -3 M2 5 L4 -2" stroke="#c7aa63" stroke-width="1.5" stroke-linecap="round"/><path d="M0 19 Q-5 13 -4 9 L0 14 L5 9 Q4 16 0 19Z" fill="#899b70"/></g>`;}
   for(const [x,y,k,a]of [[29,26,.8,48],[40,24,.6,68]])out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 10 Q-8 -1 0 -14 Q9 -1 0 10Z" fill="#b5c18c"/><path d="M0 -12 Q-5 -2 0 5 Q5 -2 0 -12Z" fill="${color}"/></g>`;
  }else if(d.id==='nigella'){
   const flowers=item.variant<2?[[-24,62,.8],[13,27,1],[29,91,.66]]:[[-26,84,.8],[8,35,1]];
   const crown=flowers.reduce((a,b)=>a[1]<b[1]?a:b);
   out+=stem(`M0 150 L0 90 C0 67 ${crown[0]} ${crown[1]+18} ${crown[0]} ${crown[1]}`,1.3);
   for(const [x,y,k]of flowers)if(x!==crown[0]||y!==crown[1])out+=stem(`M0 ${Math.max(96,y+32)} C0 ${y+22} ${x} ${y+19} ${x} ${y}`,1);
   for(const [x,y,k]of flowers){
    out+=`<g transform="translate(${x} ${y}) scale(${k})">`;
    for(let j=0;j<9;j++){const a=j*Math.PI*2/9,ex=Math.cos(a)*22,ey=Math.sin(a)*22;out+=stem(`M0 3 Q${ex*.65} ${ey*.65} ${ex} ${ey}`, .5);}
    for(let j=0;j<8;j++)out+=`<path transform="rotate(${j*45+7})" d="M0 4 Q-12 -2 -9 -14 Q-5 -21 0 -18 Q6 -22 10 -14 Q11 -3 0 4Z" fill="${[color,light,shade(color,-6)][j%3]}"/>`;
    for(let j=0;j<10;j++){const a=j*Math.PI/5;out+=`<path d="M0 1 L${Math.cos(a)*7} ${Math.sin(a)*7}" stroke="#8e9678" stroke-width=".75"/><circle cx="${Math.cos(a)*7}" cy="${Math.sin(a)*7}" r="1" fill="#666a59"/>`;}
    out+='<path d="M-3 3 L-2 -5 M0 3 L1 -7 M2 3 L4 -4" stroke="#899878" stroke-width="1.3" fill="none"/></g>';
   }
   for(const y of [119,103])for(const sign of [-1,1]){out+=stem(`M0 ${y} L${sign*18} ${y-18}`,.6);for(let j=1;j<4;j++)out+=stem(`M${sign*j*4} ${y-j*4} l${sign*2} -7 M${sign*j*4} ${y-j*4} l${sign*7} -2`,.45);}
  }else{
   const berry=d.id==='snowberry',twig=berry?'#8b9674':'#82775f';
   const branch=path=>`<path d="${path}" stroke="${twig}" stroke-width="1.35" fill="none" stroke-linecap="round"/>`;
   const clusters=berry?[[-18,43],[17,67],[-18,93],[14,116]]:[[-26,53],[21,28],[29,84],[-23,115]];
   if(item.variant>=2)clusters.pop();
   const crown=clusters.reduce((a,b)=>a[1]<b[1]?a:b);
   out+=branch(`M0 150 L0 ${crown[1]+26} C0 ${crown[1]+12} ${crown[0]} ${crown[1]+14} ${crown[0]} ${crown[1]}`);
   let fruitArt='';
   for(const [x,y]of clusters){if(x!==crown[0]||y!==crown[1])out+=branch(`M0 ${y+22} C0 ${y+12} ${x} ${y+12} ${x} ${y}`);if(berry){out+=`<path d="M0 ${y+26} Q${-x*.9} ${y+9} ${-x} ${y+19} Q${-x*.7} ${y+33} 0 ${y+26}Z" fill="#8d9d7b"/>`;}
    const fruit=berry?[[-7,-5,7],[7,-1,8],[0,12,7.5]]:[[-9,-8,4.7],[4,-10,5],[12,1,5.2],[-5,7,5.5],[5,13,4.5]];
    for(const [dx,dy,r]of fruit)out+=branch(`M${x} ${y} L${x+dx} ${y+dy}`);
    for(const [dx,dy,r]of fruit){const xx=x+dx,yy=y+dy;fruitArt+=`<ellipse cx="${xx}" cy="${yy}" rx="${r}" ry="${r*(berry?1.12:1)}" fill="${shade(color,-10)}"/><ellipse cx="${xx-.6}" cy="${yy-.8}" rx="${r*.85}" ry="${r*(berry?.97:.85)}" fill="${color}"/><ellipse cx="${xx-r*.27}" cy="${yy-r*.32}" rx="${r*.28}" ry="${r*.2}" fill="${light}" opacity=".65"/><path d="M${xx-1} ${yy+r*.77} l1 -.7 1 .7" fill="none" stroke="${berry?'#aaa28a':'#74584a'}" stroke-width=".7"/>`;}
   }
   out+=fruitArt;
  }
  return `<g transform="translate(0 ${-item.h}) scale(${mirror*item.scale*w/d.artSize[0]} ${item.scale*w/d.artSize[0]})">${out}</g>`;
 }
 if(d.id==='phalaenopsis'){
  const form=item.variant%3;
  const stems=['M0 157 C-5 119 -4 82 13 52 Q23 31 36 29','M0 157 C-3 119 -8 82 9 47 C20 25 34 14 43 15','M0 157 C-16 126 -18 87 4 52 C17 27 39 12 47 23'];
  const blooms=[[[ -12,104,.88,-16],[16,64,.82,16]],[[-12,111,.78,-16],[8,77,.88,10],[27,43,.72,20]],[[-18,125,.64,-19],[-10,91,.72,-8],[13,57,.74,14],[34,29,.60,35]]];
  out+=stem(stems[form],2);
  const palette=item.color??0,pattern=palette>=6;
  const lip=palette===0?'#c29a74':palette===3||palette===4||palette===7?'#97576e':palette>=5?'#8d467c':'#bf8195';
  const petals=['M0 4 C-14 -1 -13 -19 -4 -24 Q4 -30 10 -20 C15 -9 10 0 0 4Z','M-1 1 C-14 -2 -27 -14 -34 -4 C-42 9 -24 21 -9 14 L0 5Z','M1 1 C14 -3 27 -15 34 -4 C42 9 24 21 9 14 L0 5Z','M-3 6 C-18 8 -22 19 -18 27 C-12 31 -2 22 1 11Z','M3 6 C18 8 22 19 18 27 C12 31 2 22 -1 11Z'];
  const orchid=(x,y,k,a)=>{
   let flower=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})">`;
   const uid='orchid-petal-'+(newBotanicalSpray.orchidSerial=(newBotanicalSpray.orchidSerial??0)+1);
   if(pattern)flower+=`<defs><clipPath id="${uid}">${petals.map(p=>`<path d="${p}"/>`).join('')}</clipPath></defs>`;
   petals.forEach((p,n)=>{flower+=`<path d="${p}" fill="${[shade(color,-6),light,color,color,shade(color,7)][n]}"/>`;});
   if(pattern){
    flower+=`<g clip-path="url(#${uid})">`;
    if(palette===6){
     for(const [xx,yy,rx,ry]of [[0,-26,11,5],[-35,5,7,14],[35,5,7,14],[-16,27,8,6],[16,27,8,6]])flower+=`<ellipse cx="${xx}" cy="${yy}" rx="${rx}" ry="${ry}" fill="#9875af" opacity=".8"/>`;
     for(let j=0;j<26;j++){const a=j*2.399;flower+=`<path d="M${Math.cos(a)*30} ${Math.sin(a)*25} L${Math.cos(a)*(24+j%4)} ${Math.sin(a)*(19+j%3)}" stroke="#9875af" stroke-width="${.6+j%3*.25}" opacity=".75"/>`;}
    }else if(palette===7||palette===8){
     const ink=palette===7?'#aa6677':'#a25d99';
     for(let j=0;j<155;j++){const xx=Math.sin(j*12.9898)*38,yy=Math.cos(j*7.783)*29,r=.35+(j%5)*.14;flower+=`<ellipse cx="${xx}" cy="${yy}" rx="${r}" ry="${r*(1+(j%3)*.3)}" transform="rotate(${j*31} ${xx} ${yy})" fill="${ink}" opacity="${.52+(j%3)*.12}"/>`;}
    }else{
     for(let j=0;j<42;j++){const a=j*Math.PI*2/42,ex=Math.cos(a)*44,ey=Math.sin(a)*34,mx=ex*.58,my=ey*.6;flower+=`<path d="M${Math.cos(a)*5} ${Math.sin(a)*5} Q${mx+Math.sin(j)*3} ${my} ${ex} ${ey} M${mx} ${my} l${Math.cos(a+.35)*14} ${Math.sin(a+.35)*12}" fill="none" stroke="#a469aa" stroke-width=".65" opacity=".7"/>`;}
    }
    flower+='</g>';
   }
   flower+=`<path d="M-7 6 Q-8 -2 0 -3 Q8 -2 7 6 L4 9 Q12 18 6 22 L0 17 L-6 22 Q-12 18 -4 9Z" fill="${lip}"/><path d="M-3 5 Q0 1 3 5 L2 12 L-2 12Z" fill="#e2c579"/><path d="M-2 0 Q0 -4 2 0 L2 5 L-2 5Z" fill="${light}"/></g>`;
   return flower;
  };
  // Branches start on the exact main-stem Bezier, not near each flower.
  const mainCurves=[[[0,157],[-5,119],[-4,82],[13,52]],[[0,157],[-3,119],[-8,82],[9,47]],[[0,157],[-16,126],[-18,87],[4,52]]];
  const branchTimes=[[.38,.76],[.27,.59,.94],[.16,.45,.78,.98]];
  const pointOnStem=t=>mainCurves[form][0].map((_,axis)=>{const u=1-t,p=mainCurves[form];return u*u*u*p[0][axis]+3*u*u*t*p[1][axis]+3*u*t*t*p[2][axis]+t*t*t*p[3][axis];});
  blooms[form].forEach(([x,y],index)=>{
   const [sx,sy]=pointOnStem(branchTimes[form][index]);
   out+=stem(`M${sx} ${sy} Q${(sx+x)/2} ${y+12} ${x} ${y}`,1.35);
  });
  // Paint all blooms last, concealing every branch endpoint behind the petals.
  for(const [x,y,k,a]of blooms[form])out+=orchid(x,y,k,a);
  out+=`<g transform="translate(${[35,42,47][form]} ${[29,17,23][form]}) rotate(${[35,38,65][form]})"><path d="M0 8 C-11 2 -8 -10 0 -12 C9 -8 10 3 0 8Z" fill="${shade(color,-13)}"/><path d="M0 8 Q-2 1 0 -10" fill="none" stroke="${color}" stroke-width="1"/></g>`;
  // One uniform scale preserves the flower's proportions on every output.
  return `<g transform="translate(0 ${-item.h}) scale(${item.scale*w/d.artSize[0]})">${out}</g>`;
 }
 if(d.id==='laceflower'){
  const branchSets=[[[-28,43,.72],[2,18,.93],[29,39,.75]],[[-20,51,.82],[13,21,.95]],[[-37,55,.72],[-7,16,.8],[37,36,.7]]];
  out+=stem('M0 125 Q3 85 0 60',1.5);
  for(const [x,y,k]of branchSets[item.variant%3]){
   out+=stem(`M0 115 Q${x*.24} 76 ${x} ${y+20}`);
   for(let j=0;j<6;j++){const a=Math.PI+j*Math.PI/5,px=x+Math.cos(a)*23*k,py=y+Math.sin(a)*12*k+Math.sin(j*4)*2;
    out+=stem(`M${x} ${y+20} Q${(x+px)/2} ${y+7} ${px} ${py}`,.6);
    for(let b=0;b<3;b++){const bx=px+Math.sin(b*2.4+j)*3.6,by=py+Math.cos(b*2.4+j)*3.2;
     out+=`<g transform="translate(${bx} ${by}) scale(.7)"><path d="M0 -2.8Q3 -4 2.4 -.7Q5 1 1.2 2Q0 5 -1.4 2Q-5 1 -2.2 -1Q-3 -4 0 -2.8" fill="${b%2?color:light}"/><circle r=".55" fill="#bfc4a2"/></g>`;
    }
   }
  }
  for(const side of [-1,1])for(let j=0;j<3;j++)out+=stem(`M0 ${105-j*5} Q${side*(10+j*2)} ${92-j*4} ${side*(17+j*2)} ${92-j*7}`,.65);
 }else if(d.id==='sweetpea'){
  out+=stem('M0 128 Q7 79 1 26',1.6);
  for(const [x,y,k,a]of [[6,23,.8,-12],[-18,48,1,-24],[21,72,.92,18],[-9,96,.75,-10]]){
   const [sx,sy]=onQuadraticAtY([0,128],[7,79],[1,26],y+24),rad=a*Math.PI/180,ex=x-Math.sin(rad)*k*12,ey=y+Math.cos(rad)*k*12;out+=stem(`M${sx} ${sy} Q${x*.8} ${ey+8} ${ex} ${ey}`);
   out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="M0 11 C-12 8 -24 -3 -18 -13 Q-15 -20 -8 -16 Q-1 -23 6 -16 Q17 -19 20 -10 C23 2 12 12 0 11" fill="${light}"/><path d="M0 11 Q-21 6 -21 -2 Q-8 -9 0 6 Q10 -10 23 -5 Q22 9 0 13" fill="${color}"/><path d="M-7 6 Q0 -1 8 5 Q11 17 0 18 Q-8 16 -7 6" fill="${dark}"/></g>`;
  }
  out+=leaf(0,119,-45,.7)+stem('M4 112 Q27 110 26 99 Q24 95 21 99',.7);
 }else if(d.id==='gomphrena'){
  for(const [x,y,k]of [[-25,46,.79],[7,24,1],[26,76,.7]]){
   const rad=x*.18*Math.PI/180,ex=x-Math.sin(rad)*k*24,ey=y+Math.cos(rad)*k*24;out+=stem(`M0 126 Q${x*.25} 90 ${ex} ${ey}`,1.5);
   out+=`<g transform="translate(${x} ${y}) rotate(${x*.18}) scale(${k})"><path d="M0 23Q-13 13 -20 18Q-13 29 0 26Q13 31 21 20Q11 15 0 23" fill="#8c9d74"/><g transform="translate(0 25.65) scale(.85) translate(0 -25.65) scale(.88 1.35)"><path d="M-15 -3C-16 -12 -9 -19 0 -19C10 -19 17 -12 17 -2C18 9 11 19 1 19C-10 19 -18 11 -17 1Z" fill="${color}"/>`;
   for(let j=0;j<56;j++){
    const a=j*2.39996+.32*Math.sin(j*3),r=16*Math.sqrt(j/56),xx=Math.cos(a)*r,yy=Math.sin(a)*r,cc=item.color===2?['#ebb374','#e4a366','#dc8a5b','#d27155','#c66053','#ba5556'][Math.max(0,Math.min(5,Math.floor((yy+18)/6)))]:[color,light,shade(color,-8),shade(color,7)][j%4];
    out+=`<path transform="translate(${xx} ${yy}) rotate(${j*41})" d="M-2.6 1.3Q-4 -1 -1.7 -2.5Q0 -4 1.8 -2Q4 -1 2.2 1.6Q0 3.1 -2.6 1.3Z" fill="${cc}"/>`;
   }
   out+='</g></g>';
  }
  out+=leaf(0,116,58,.7)+leaf(-4,100,-28,.6);
 }else if(d.id==='lilyofthevalley'){
  const long=item.variant%2,base=long?170:135;
  out+=`<g transform="translate(0 ${base}) scale(.64) translate(0 -130)"><path d="M-3 130 C-31 103 -40 60 -27 31 C-7 51 -6 95 -3 130Z" fill="#82936c"/><path d="M2 130 Q26 83 34 63 Q40 103 2 130Z" fill="#96a47d"/></g>`;
  out+=stem(`M0 ${base} Q-3 43 16 15 Q28 3 31 19`,1.8);
  const bells=long?[[29,19,.6],[21,36,.7],[15,54,.8],[11,73,.9],[9,94,1],[8,116,1],[8,139,.95]]:[[29,19,.6],[19,34,.75],[13,52,.85],[9,72,1],[8,95,1]];
  for(const [x,y,k]of bells){
   const [sx,sy]=onQuadraticAtY([0,base],[-3,43],[16,15],Math.max(16,y-7));out+=stem(`M${sx} ${sy} Q${x+6} ${y-10} ${x+6} ${y+1}`,.9);
   out+=`<g transform="translate(${x+6} ${y}) scale(${k})"><path d="M-5 0 Q0 -5 5 0 Q5 9 10 12 Q6 17 3 13 Q0 18 -3 13 Q-6 17 -10 12 Q-5 9 -5 0Z" fill="${color}"/><path d="M-8 12Q-5 15 -3 12Q0 16 3 12Q6 15 8 12" fill="none" stroke="#d9dfcb" stroke-width="1"/></g>`;
  }

 }
 return `<g transform="translate(0 ${-item.h}) scale(${item.scale*w/(d.id==='lilyofthevalley'?85:d.id==='gomphrena'?95:d.artSize[0])} ${item.scale*h/(d.id==='lilyofthevalley'?(item.variant%2?170:135):d.id==='gomphrena'?130:d.artSize[1])})">${out}</g>`;
}

// Upright cupped rose in three-quarter view; layers model petals rather than flattening the front sprite.
function roseSideBloom(color,gradient=false){
 const deep='#919191',mid='#b6b6b6',light='#d6d6d6',front='#c9c9c9';
 const petalBase='#c9c9c9';
 const petals=` <path d="M-23 -12C-29 -23 -22 -31 -13 -32Q-7 -38 1 -33Q15 -39 22 -28Q29 -25 26 -14C28 0 17 15 3 20Q-15 19 -23 -12Z" fill="${mid}"/>
 <path d="M-24 -17C-32 -27 -23 -34 -14 -30Q-11 -26 -6 -26Q-18 -21 -12 -13Q-20 -9 -24 -17Z" fill="${light}"/>
 <path d="M-13 -29Q-7 -36 2 -31Q12 -36 18 -28Q11 -30 5 -23Q-2 -20 -13 -29Z" fill="${petalBase}"/>
 <path d="M-8 -24Q-3 -32 8 -27Q17 -22 9 -14Q-1 -10 -8 -24Z" fill="${deep}"/>
 <path d="M-7 -25Q-1 -29 5 -23Q9 -20 5 -15Q1 -21 -4 -20Q-8 -20 -7 -25Z" fill="${light}"/>
 <path d="M16 -29C26 -33 31 -22 23 -16Q16 -11 7 -12Q15 -17 12 -22Q21 -20 16 -29Z" fill="${front}"/>
 <path d="M-24 -16Q-16 -14 -12 -5Q-8 4 5 7Q10 17 2 25C-10 29 -23 17 -23 6Q-29 -4 -24 -16Z" fill="${petalBase}"/>
 <path d="M-24 -14Q-20 -16 -17 -11Q-12 -3 -8 -2Q-19 0 -24 -7Z" fill="${light}"/>
 <path d="M25 -16Q31 -13 27 -4C23 3 23 14 14 21Q3 30 -8 25C-18 19 -14 8 -6 4Q1 0 10 -2Q20 -7 25 -16Z" fill="${front}"/>
 <path d="M25 -16Q29 -12 23 -8Q16 -2 9 0Q-4 2 -10 11Q-8 3 2 -1Q19 -7 25 -16Z" fill="${light}" opacity=".75"/>
 <path d="M-10 19Q1 28 14 20Q7 28 -2 28Q-8 27 -10 19Z" fill="${mid}"/>
`;
 return `<g class="rose-side-bloom" transform="rotate(7)">
 <path d="M-2 36C-14 36 -28 28 -34 18Q-23 16 -15 22L-13 20Q-4 25 -2 36Z" fill="#82966f"/>
 <path d="M0 40C11 24 22 28 33 24Q28 35 17 39L15 42Q7 44 0 40Z" fill="#91a17e"/>
 <path d="M-3 34Q-18 27 -28 21M3 39Q16 33 27 28" fill="none" stroke="#acb69a" stroke-width=".7" opacity=".55"/>
 <path d="M-4 25C-20 27 -23 11 -31 8Q-36 7 -38 11Q-34 2 -28 5Q-20 8 -15 18L-1 24Q13 13 26 12Q33 9 35 6Q36 16 25 18Q14 21 9 27Z" fill="#788c65"/>
 <g class="rose-side-petals" transform="translate(0 25) scale(.85) translate(0 -25)">
 <g filter="url(#tone-${color.slice(1)})">${petals}</g>
 ${gradient?`<defs><radialGradient id="rose-side-red-gradient" cx="50%" cy="45%" r="58%"><stop stop-color="#73182e"/><stop offset=".45" stop-color="#b73249"/><stop offset="1" stop-color="#e87d85"/></radialGradient><clipPath id="rose-side-gradient-clip">${petals}</clipPath></defs><path d="M-40 -45H40V35H-40Z" fill="url(#rose-side-red-gradient)" clip-path="url(#rose-side-gradient-clip)" opacity=".42"/>`:''}
 </g>
 <path d="M-8 25Q-3 25 0 29Q4 25 10 24Q6 33 0 34Q-7 33 -8 25Z" fill="#879870"/>
 </g>`;
}

for(const group of ['vessel','bouquet','imagination','halloween'])$('vessel-category-'+group).onclick=()=>{vesselGroup=group;refreshVesselGroups();};

function newLeafMarkup(d,item,color){
 const [w,h]=extraDimensions(d,item.h),v=item.variant%(d.id==='fishtailfern'?6:4),ink=shade(color,-19),pale=shade(color,22);let art='';
 const vein=(path,width=1)=>`<path d="${path}" fill="none" stroke="${pale}" stroke-width="${width}" stroke-linecap="round" opacity=".65"/>`;
 if(d.id==='fishtailfern'){
  const fork=[[-33,0,32,2],[-28,4,39,-2],[-39,2,25,6],[-25,-3,35,4],[-42,12,37,-6],[-19,-9,44,14]][v];
  const edge=v>=4?'M0 153C-16 125-22 89-13 58Q-18 40-40 16Q-24 19-16 33Q-23 13-19 0Q-3 12 0 38Q8 22 15 3Q23 17 17 35Q32 14 43 12Q39 35 19 54C26 88 18 124 0 153Z':`M0 153C-15 128-21 91-13 61C-11 46 ${fork[0]} 25 ${fork[0]} ${fork[1]}Q-13 15 0 36Q14 17 ${fork[2]} ${fork[3]}C${fork[2]-2} 28 14 46 16 63C25 94 17 128 0 153Z`;
  art=`<path d="${edge}" fill="${color}"/>`+vein('M0 149Q4 102 0 42',1.2);
  for(let j=0;j<8;j++){const y=58+j*10,k=9-Math.max(0,j-4);art+=vein(`M1 ${y+7}L-${k} ${y}M1 ${y+7}L${k+1} ${y-1}`,.55);}
 }else if(d.id==='angelphilodendron'){
  const edge='M0 0C-8 7-11 27-9 40C-17 27-24 7-30 12C-39 18-26 43-15 53C-28 43-44 26-48 35C-52 43-32 62-15 68C-32 60-55 48-56 60C-56 71-32 80-13 83C-33 79-53 77-49 89C-45 98-27 98-10 97C-22 106-43 109-34 119C-25 129-8 114 0 137C9 115 24 128 34 117C42 107 22 107 11 98C29 98 49 99 51 87C52 77 30 79 14 82C33 75 58 67 56 56C53 47 31 61 15 67C31 55 51 41 45 31C40 24 26 44 14 52C23 38 36 16 28 10C20 7 13 30 8 40C10 24 7 7 0 0Z';
  art=`<path d="${edge}" fill="${color}"/>`+vein('M0 135Q-3 67 0 5',1.3);
  for(const [y,x,dy]of [[37,14,-12],[55,21,-13],[75,27,-7],[94,25,-3],[112,15,2]])art+=vein(`M0 ${y}Q-${x*.5} ${y+dy} -${x} ${y+dy}M0 ${y}Q${x*.5} ${y+dy} ${x} ${y+dy}`, .65);
 }else if(d.id==='fatsia'){
  art=`<path d="M0 115Q-8 106-16 114Q-26 119-36 110Q-16 108-21 101C-42 105-62 96-67 87C-45 78-25 98-16 95C-22 88-48 87-53 70L-59 46C-36 41-27 81-15 82C-12 75-32 56-29 35L-30 7C-4 20-6 58-5 70Q0 82 3 64C2 38 16 10 27 3C41 30 21 54 14 73C28 56 33 27 57 19C61 43 43 69 24 80Q17 88 27 85C46 69 59 63 76 67C69 92 46 102 25 99Q15 98 22 104C42 104 56 109 64 120C45 117 39 134 17 115Q8 109 13 121Q25 135 27 146C11 139 6 124 0 115Z" fill="${color}"/>`;
  for(const [x,y]of [[-29,12],[26,8],[54,24],[70,70],[58,119],[23,140],[-62,88],[-55,49]])art+=vein(`M0 115L${x} ${y}`, .8);
  art+=`<path d="M0 115L0 151" fill="none" stroke="${ink}" stroke-width="1.8"/>`;
 }else if(d.id==='birdnestfern'){
  const crown=d.id==='fishtailfern'?['M0 20L-27 0Q-29 17-17 34L-37 20Q-36 44-19 55','M0 27L-12 0L-17 20L-32 7Q-37 29-19 55','M0 18L-34 5L-23 26L-40 25Q-36 47-19 55','M0 25L-20 0L-19 23L-30 13Q-31 37-19 55'][v]:'M0 0Q-12 16-16 35';
  art=`<path d="${crown}Q-29 55-19 75Q-29 99-12 120Q-18 141 0 153Q18 140 12 121Q28 101 20 79Q30 55 17 35${d.id==='fishtailfern'?['Q36 35 35 15L17 29Q29 9 22 0L0 20','Q32 29 27 6L10 24L6 0L0 27','Q42 40 39 17L20 26L30 0L0 18','Q30 30 34 12L17 29L14 0L0 25'][v]:'Q15 15 0 0'}Z" fill="${color}"/>`+vein('M0 151Q-3 92 0 23',1.6);
  for(let j=0;j<12;j++){const y=36+j*9;art+=vein(`M0 ${y+7}Q${-9} ${y} ${-14-Math.sin(j)*3} ${y-3}M0 ${y+7}Q9 ${y} ${14+Math.sin(j)*3} ${y-3}`,.55);}
 }else if(d.id==='fiddleleaf'){
  art=`<path d="M0 133Q-32 135-35 110Q-37 95-23 81Q-19 69-32 51Q-49 20-28 7Q-11 -3 0 9Q18 -4 35 11Q49 28 31 52Q19 70 24 82Q42 104 31 120Q20 135 0 133Z" fill="${color}"/>`+vein('M0 132Q-6 72 0 9',1.6);
  for(let j=0;j<7;j++){const y=23+j*15,reach=y>50&&y<90?17:26;art+=vein(`M-1 ${y+12}Q-12 ${y+7} -${reach} ${y}M-1 ${y+12}Q12 ${y+5} ${reach} ${y}`,1);}
 }else if(d.id==='fiddlephilodendron'){
  art=`<path d="M0 143Q-9 116-31 121Q-52 118-40 89Q-34 71-20 86Q-14 72-27 50Q-35 20 0 0Q34 24 26 51Q13 74 20 86Q38 69 44 96Q50 121 28 122Q10 117 0 143Z" fill="${color}"/>`+vein('M0 143Q-4 69 0 3',1.4)+vein('M0 116L-31 105M0 113L33 101M0 73L-22 43M0 73L22 44',.8);
 }else if(d.id==='irisleaf'){
  for(const [angle,k] of (v%2?[[ -7,.92],[6,.83],[0,1]]:[[-5,1],[6,.88]]))art+=`<g transform="rotate(${angle} 0 190) translate(0 ${190*(1-k)}) scale(1 ${k})"><path d="M0 190Q-9 94-3 24L1 0Q7 99 5 155Z" fill="${color}"/><path d="M0 189Q-5 99 0 15Q1 103 2 152Z" fill="#c9cea0"/>${vein('M0 187L1 8',.6)}</g>`;
 }else if(d.id==='dustymiller'){
  const leaf='M0 0Q-9 -4-10 -14Q-23 -10-25 -20Q-29 -30-17 -31Q-31 -40-24 -47Q-17 -54-10 -42Q-15 -59-6 -61Q3 -64 3 -48Q9 -62 16 -56Q23 -49 13 -38Q29 -43 29 -32Q30 -23 15 -22Q24 -12 16 -6Q9 -2 0 0Z';
  art=`<path d="M0 140Q-4 70 0 35" stroke="${ink}" stroke-width="1.5" fill="none"/>`;
  for(const [x,y,a,k] of [[0,62,0,.9],[-9,98,-45,.68],[10,105,44,.75],[-7,135,-57,.55],[8,138,55,.57]])art+=`<path d="M-1 ${y+8}L${x} ${y}" stroke="${ink}" stroke-width="1.2"/><g transform="translate(${x} ${y}) rotate(${a}) scale(${k})"><path d="${leaf}" fill="${color}"/><path d="M0 0L-2 -51M-1 -16L-18 -25M-1 -22L18 -32" fill="none" stroke="${pale}" stroke-width="1" opacity=".7"/></g>`;
 }else if(d.id==='silveroak'){
  const curl=[0,15,-12,7][v],count=[11,9,12,10][v],spread=[1,.76,1.14,.9][v];
  art=`<path d="M0 168Q${curl} 92 3 7" fill="none" stroke="#b4b8a1" stroke-width="1.3"/>`;
  for(let j=0;j<count;j++)for(const side of [-1,1]){const y=30+j*123/(count-1),len=(14+Math.sin((j+1)/(count+2)*Math.PI)*25)*(side===1?.88:1)*spread,up=20+(count-1-j)*1.2+(j%3)*2;
   art+=`<g transform="translate(${2*curl*(y/168)*(1-y/168)} ${y+(side===1?4:0)}) scale(${side} 1)"><path d="M0 2C${len*.35} -5 ${len*.78} ${-up*.53} ${len} ${-up}C${len*.96} ${-up*.35} ${len*.4} 4 0 5Z" fill="${color}"/>${vein(`M1 3Q${len*.6} -5 ${len*.91} ${-up*.8}`,.4)}</g>`;
  }
  art+=`<path d="M2 24Q-2 8 6 0Q9 12 2 24Z" fill="${color}"/>`;
 }else if(d.id==='birch'){
  art='<path d="M0 174Q-8 87 7 10" stroke="#8c816d" stroke-width="1.8" fill="none"/>';
  for(let j=0;j<8;j++){const y=28+j*18,x=(j%2?1:-1)*(18+(j%3)*9),k=.65+(j%3)*.12;art+=`<path d="M0 ${y+20}Q${x*.4} ${y+8} ${x} ${y}" stroke="#8c816d" stroke-width="1" fill="none"/><g transform="translate(${x} ${y}) rotate(${x<0?-35:30}) scale(${k})"><path d="M0 0C-19 -9-19 -30 0 -44C18 -29 17 -10 0 0Z" fill="${color}"/>${vein('M0 -1Q-2 -23 0 -41',.7)}</g>`;}
 }else{
  art=`<path d="M0 151Q-9 87 6 0" fill="none" stroke="${ink}" stroke-width=".8"/>`;
  const spray=(sx,sy,ex,ey,width)=>{
   let out=`<path d="M${sx} ${sy}Q${sx+(ex-sx)*.5} ${sy+(ey-sy)*.44} ${ex} ${ey}" fill="none" stroke="${ink}" stroke-width="${width}" stroke-linecap="round"/>`;
   for(let k=1;k<=6;k++){const t=k/7,x=sx+(ex-sx)*t,y=sy+(ey-sy)*t,reach=((1-t)*3.5+.35)*Math.min(1,Math.hypot(ex-sx,ey-sy)/15);
    for(const side of [-1,1])for(let q=0;q<2;q++){const dx=side*reach*(.5+q*.25),dy=-reach*(.6+(2-q)*.32);out+=`<path d="M${x} ${y}l${dx} ${dy}" fill="none" stroke="${color}" stroke-width=".42" stroke-linecap="round"/>`;}
   }return out;
  };
  art+=spray(4,28,6,0,.5);
  for(let j=0;j<7;j++){const y=25+j*16,span=(16+j*3.6)*[1,1.45,1.7,1.3][v]*(j%2?1:-1),rise=[15,8,2,22][v]+(j%3)*4;
   art+=spray(0,y+14,span,y-rise,.55);
   for(let k=1;k<6;k++){const t=k/6,x=span*t,yy=y+14-(14+rise)*t;
    for(const side of [-1,1]){const dx=side*(3+(1-t)*12),dy=-3-(1-t)*15;art+=spray(x,yy,x+dx,yy+dy,.35);}
   }
  }
 }
 const naturalHeight=({birdnestfern:153,fishtailfern:153,fiddleleaf:133,fiddlephilodendron:143,irisleaf:190,asparagusfern:151,dustymiller:140,birch:174,angelphilodendron:137,fatsia:151,silveroak:168}[d.id])/.96;
 return `<g transform="translate(0 ${-item.h}) scale(${item.scale*w/d.artSize[0]} ${item.scale*h/naturalHeight})"><g transform="rotate(${[0,-5,4,-2,8,-8][v]} 0 ${naturalHeight*.94})">${art}</g></g>`;
}

function ruscusBranch(item,color){
 const tip=-item.h+20,curve=stemGeometry(item,tip),v=item.variant;let out=`<path class="foliage-trunk" d="${curve.path}" fill="none" stroke="${shade(color,-15)}" stroke-width="1.8"/>`;
 const leaf=(k,flip)=>`<g transform="scale(${flip*k} ${k})"><path d="M0 0C-22 -14-24 -42 5 -61C7 -42 31 -23 0 0Z" fill="${color}"/><path d="M0 -1Q4 -31 5 -57M0 -12Q-9 -29-7 -43M3 -14Q15 -31 8 -45" fill="none" stroke="${shade(color,18)}" stroke-width=".65" opacity=".7"/></g>`;
 let j=0;for(let y=-38;y>tip+30;y-=30+(j%3)*5){const side=(j+v)%2?1:-1,k=(.75+.1*((j+v)%3))*item.scale;out+=`<g class="foliage-node" transform="translate(${curve.xAt(y)} ${y}) rotate(${side*(26+(j%3)*12)+curve.angleAt(y)})">${leaf(k,side)}</g>`;j++;}
 out+=`<g class="foliage-tip" transform="translate(${curve.xAt(tip+35)} ${tip+35}) rotate(${curve.angleAt(tip)})">${leaf(.7*item.scale,1)}</g>`;return out;
}

window.ForiRose.ready.then(()=>{renderCatalog();render();}).catch(error=>{console.error(error);announce("玫瑰素材載入失敗，請重新整理再試。");});


function naturalPetals(markup,color,type){
 if(color===data.find(d=>d.id===type)?.colors[0][1])return markup;
 const id='natural-'+type+'-'+color.slice(1),rgb=color.slice(1).match(/../g).map(v=>parseInt(v,16)/255);
 const mask=type==='sunflower'?'0 8 -8 0 -1.2':type==='gypsophila'?'2 2 2 0 -3.3':type==='delphinium'||type==='lavender'||type==='bluestar'?'0 -8 8 0 -.05':type==='birdofparadise'?'6 -6 0 0 -.4': '5 -6 2 0 -.1';
 return `<defs><filter id="${id}" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 ${mask}" result="petalMask"/><feComposite in="petalMask" in2="SourceAlpha" operator="in" result="mask"/><feColorMatrix in="SourceGraphic" type="saturate" values="0"/><feComponentTransfer><feFuncR type="linear" slope=".3" intercept=".7"/><feFuncG type="linear" slope=".3" intercept=".7"/><feFuncB type="linear" slope=".3" intercept=".7"/></feComponentTransfer><feColorMatrix type="matrix" values="${rgb[0]} 0 0 0 0 0 ${rgb[1]} 0 0 0 0 0 ${rgb[2]} 0 0 0 0 0 1 0"/><feComposite in2="mask" operator="in" result="petals"/><feComposite in="SourceGraphic" in2="mask" operator="out"/><feComposite in2="petals" operator="arithmetic" k2="1" k3="1"/></filter></defs><g filter="url(#${id})">${markup}</g>`;
}

function newSeasonalSpray(d,item,color){
 const v=item.variant%3,green='#7e9070',dark='#657c5d';
 const stem=(path,width=1.4)=>`<path d="${path}" fill="none" stroke="${green}" stroke-width="${width}" stroke-linecap="round"/>`;
 const leaf=(x,y,a,size=1)=>`<g transform="translate(${x} ${y}) rotate(${a}) scale(${size})"><path d="M0 0 Q-12 -11 -5 -30 Q8 -17 0 0" fill="${green}"/>${stem('M0 0 Q-3 -12 -5 -28',.5)}</g>`;
 let out=stem('M0 150 Q3 110 -2 73',2);
 if(d.id==='amaranthus'){
  out=stem('M0 150 Q7 100 2 63',1.5);
  const form=item.variant%6,spikes=[[[ -27,16,116,1]],[[-34,22,93,1]],[[-22,9,137,1]],[[-31,13,116,.9],[-14,34,77,.8]],[[-39,22,92,1.12],[-15,8,129,.95]],[[-44,24,87,.8],[-28,7,133,1.05],[-11,33,101,.86]]][form];
  for(const [x,y,len,weight] of spikes){
  out+=stem(`M2 63 Q${x*.25} ${y-22} ${x} ${y}`,1);
  // Counter-rotate the hanging spike: gravity always points down on the canvas.
  out+=`<g class="gravity-pendant" transform="translate(${x} ${y}) rotate(${-Number(item.a||0)})">`;
  const lean=Math.sin(Number(item.a||0)*Math.PI/180),drape=4+Math.abs(lean)*10+v;
  const px=t=>-Math.sin(t*Math.PI)*drape+lean*18*t*(1-t)*(1-t),py=t=>t*len*(1-Math.abs(lean)*.04);
  let path='M0 0';for(let k=1;k<=30;k++)path+=` L${px(k/30)} ${py(k/30)}`;out+=stem(path,.45);
  for(let k=0;k<70;k++){const t=k/69,wide=(1.9+Math.sin(t*22+v)*.45)*(1-t*.83)*weight*1.3;for(let j=-1;j<=1;j++){
   const xx=px(t)+j*wide+Math.sin(k*2.3+v)*.5,yy=py(t)+Math.cos(k*3+j)*.7;
   out+=`<ellipse cx="${xx}" cy="${yy}" rx="${(.65+(1-t)*.5)*weight*1.25}" ry="${(.85+(1-t)*.5)*weight}" fill="${shade(color,((k+j+90)%4-1)*7)}"/>`;
  }}out+='</g>';
  }
 }else{
  const blooms=d.id==='gloriosa'?[[[-23,46,.9,-12],[24,78,.8,14]],[[0,43,1,4],[-26,89,.77,-23]],[[24,43,.85,17],[-23,76,.85,-15],[10,107,.6,5]]][v]:[[[-24,50,.86,-18],[20,39,1,12],[18,86,.82,22]],[[-26,57,1,-17],[23,69,.94,23],[0,27,.78,0]],[[0,43,1,0],[-30,88,.8,-25],[29,88,.85,28]]][v];
  for(const [x,y,k,a]of blooms){out+=stem(`M0 145 Q${x*.2} ${y+38} ${x} ${y+6}`,1.5);let bloom='';
   if(d.id==='gloriosa'){
    for(const angle of [-72,-43,-14,16,46,74])bloom+=`<g transform="rotate(${angle})"><path d="M0 3 C-5 -6 -13 -15 -7 -22 C-3 -26 -8 -31 -3 -36 C-6 -23 9 -23 5 -14 C3 -9 2 -3 0 3Z" fill="${color}" stroke="#dfc56b" stroke-width="1.4"/><path d="M0 1 Q-4 -15 -3 -28" fill="none" stroke="${shade(color,20)}" stroke-width=".65"/></g>`;
    for(const angle of [-75,-46,-16,17,47,76]){const r=angle*Math.PI/180,xx=Math.sin(r)*28,yy=8+Math.cos(r)*12;bloom+=stem(`M0 3 Q${xx*.4} 12 ${xx} ${yy}`, .65)+`<ellipse cx="${xx}" cy="${yy}" rx="3" ry=".9" fill="#947943" transform="rotate(${-angle} ${xx} ${yy})"/>`;}
   }else{
    for(const angle of [0,120,240])bloom+=`<path transform="rotate(${angle})" d="M0 6 C-8 0 -20 -10 -13 -20 Q-3 -29 5 -18 Q13 -5 0 6Z" fill="${color}" stroke="${shade(color,-20)}" stroke-width=".6"/>`;
    for(const angle of [60,180,300]){bloom+=`<g transform="rotate(${angle})"><path d="M0 5 Q-12 -7 -8 -21 Q-1 -28 5 -20 Q11 -7 0 5Z" fill="${shade(color,18)}" stroke="${shade(color,-17)}" stroke-width=".5"/><path d="M0 3 Q-7 -6 -5 -15 Q0 -18 4 -13 Q6 -4 0 3" fill="#e5cf83" opacity=".85"/>`;for(let j=0;j<8;j++){let xx=(j%3-1)*2.5,yy=-5-Math.floor(j/3)*4;bloom+=`<path d="M${xx} ${yy} l.7 -2" stroke="#986361" stroke-width=".7"/>`;}bloom+='</g>';}
    for(let j=0;j<5;j++)bloom+=stem(`M0 4 Q${j-2} -2 ${(j-2)*2} -6`,.5)+`<circle cx="${(j-2)*2}" cy="-6" r=".9" fill="#826645"/>`;
   }
   out+=`<g transform="translate(${x} ${y}) rotate(${a}) scale(${k})">${bloom}</g>`;
  }
  out+=leaf(0,130,-48,1)+leaf(0,115,65,.9)+leaf(-2,99,-55,.7);
 }
 const [w]=extraDimensions(d,item.h);return `<g transform="translate(0 ${-item.h}) scale(${item.scale*w/d.artSize[0]})">${out}</g>`;
}

// Read the real painted stem endpoint and tangent rather than guessing a percentage
// of the artwork height. Cached in normalized artwork coordinates.
function vectorStemJoin(d,item,color){
 if(!(d.vectorSpray||d.vectorLeaf)||d.id==='horsetail'||typeof document.createElementNS!=='function')return null;
 const key=d.id+':'+item.variant+':'+color;
 let join=vectorJoinCache.get(key);
 if(!join){
  const sample={...item,h:200,scale:1},markup=extraMarkup(d,sample,color),svg=document.createElementNS(NS,'svg');svg.innerHTML=markup;
  const height=extraDimensions(d,200)[1],targetY=-200+height;
  let best=null;
  for(const path of svg.querySelectorAll('path[stroke]')){
   if(path.getAttribute('fill')!=='none')continue;
   const length=path.getTotalLength();if(length<20)continue;
   let matrix=new DOMMatrix(),node=path;
   while(node&&node!==svg){const t=node.transform?.baseVal?.consolidate();if(t)matrix=new DOMMatrix([t.matrix.a,t.matrix.b,t.matrix.c,t.matrix.d,t.matrix.e,t.matrix.f]).multiply(matrix);node=node.parentElement;}
   for(const end of [0,length]){
    const point=matrix.transformPoint(path.getPointAtLength(end)),inner=matrix.transformPoint(path.getPointAtLength(end===0?Math.min(2,length):Math.max(0,length-2)));
    // A base must lead upward into the plant, excluding leaf tips and flower rays.
    if(inner.y>=point.y)continue;
    const score=Math.hypot(point.x,point.y-targetY);
    if(!best||score<best.score){const dx=inner.x-point.x,dy=inner.y-point.y,mag=Math.hypot(dx,dy);best={score,x:point.x,y:point.y+200,tx:dx/mag,ty:dy/mag,ink:path.getAttribute('stroke'),width:Number(path.getAttribute('stroke-width')||1)*Math.hypot(matrix.a,matrix.b)};}
   }
  }
  join=best&&best.score<Math.max(24,height*.18)?best:null;
  if(join)vectorJoinCache.set(key,join);
 }
 if(!join)return null;
 const k=item.scale*Math.max(.8,Math.min(1,item.h/160));
 return {...join,x:join.x*k,y:-item.h+join.y*k,width:join.width*k};
}
function connectedStemPath(item,join,baseY=0){
 const endY=join.y-baseY,curve=stemGeometry(item,endY);let path=`M0 ${baseY}`;
 const point=t=>({x:curve.xAt(endY*t),y:baseY+endY*t});
 for(let n=0;n<5;n++){
  const a=n/5,b=(n+1)/5,p=point(a),q=point(b),dt=(b-a)/3;
  const derivative=t=>{const lo=Math.max(0,t-.0001),hi=Math.min(1,t+.0001);return (point(hi).x-point(lo).x)/(hi-lo);};
  const c1={x:p.x+derivative(a)*dt,y:p.y+endY*dt};
  const c2=n===4?{x:join.x-join.tx*Math.min(14,Math.abs(endY)*dt),y:join.y-join.ty*Math.min(14,Math.abs(endY)*dt)}:{x:q.x-derivative(b)*dt,y:q.y-endY*dt};
  const e=n===4?join:q;path+=` C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${e.x} ${e.y}`;
 }
 return path;
}

// Move paths rooted at the base behind the vessel, preserving every ancestor
// transform. Decorative petals, leaves and pendant flowers remain in front.
function separateBasalStems(markup,join){
 if(typeof document.createElementNS!=='function')return {art:markup,stems:''};
 const svg=document.createElementNS(NS,'svg');svg.innerHTML=markup;let stems='';
 for(const path of Array.from(svg.querySelectorAll('path[stroke]'))){
  if(path.closest('.gravity-pendant'))continue;
  if(path.getAttribute('fill')!=='none')continue;
  const length=path.getTotalLength();if(length<20)continue;
  let matrix=new DOMMatrix(),node=path;
  while(node&&node!==svg){const t=node.transform?.baseVal?.consolidate();if(t)matrix=new DOMMatrix([t.matrix.a,t.matrix.b,t.matrix.c,t.matrix.d,t.matrix.e,t.matrix.f]).multiply(matrix);node=node.parentElement;}
  const rooted=[0,length].some(end=>{const p=matrix.transformPoint(path.getPointAtLength(end)),q=matrix.transformPoint(path.getPointAtLength(end===0?Math.min(2,length):Math.max(0,length-2)));return q.y<p.y&&Math.abs(p.x-join.x)<18&&Math.abs(p.y-join.y)<18;});
  if(!rooted)continue;
  let copy=path.cloneNode(true);for(let parent=path.parentElement;parent&&parent!==svg;parent=parent.parentElement){const wrapper=parent.cloneNode(false);wrapper.appendChild(copy);copy=wrapper;}
  stems+=copy.outerHTML;path.remove();
 }
 return {art:svg.innerHTML,stems};
}

function halloweenVessel(key,p,id){
 if(key==='ghost'){
  const body=p===vaseColors.ivory?'#f2efe7':p.body,edge=shade(body,-27),light=shade(body,9),eyes=p===vaseColors.black?'#c9c9c3':'#4b4c48';
  const back=`<ellipse cx="330" cy="478" rx="27" ry="7" fill="${edge}"/><ellipse cx="330" cy="478" rx="23" ry="4.5" fill="${p.inside}"/>`;
  const front=`<defs><linearGradient id="${id}-ghost"><stop stop-color="${edge}"/><stop offset=".3" stop-color="${light}"/><stop offset=".64" stop-color="${body}"/><stop offset="1" stop-color="${edge}"/></linearGradient></defs><path d="M303 478C283 483 275 504 273 533Q270 579 252 624Q259 643 279 629Q290 617 303 636Q317 649 330 632Q342 622 357 638Q371 648 385 629Q396 640 408 626Q389 586 387 541C386 506 374 484 357 478A27 7 0 0 1 303 478Z" fill="url(#${id}-ghost)" stroke="${edge}" stroke-width=".8"/><g fill="none" stroke="${edge}" stroke-width="1.3" opacity=".46"><path d="M291 553Q295 595 279 629M310 575Q303 613 311 640M353 568Q351 607 362 641M374 552Q368 592 385 629"/></g><ellipse cx="308" cy="533" rx="6" ry="10" fill="${eyes}" transform="rotate(-8 308 533)"/><ellipse cx="350" cy="533" rx="6" ry="10" fill="${eyes}" transform="rotate(8 350 533)"/><path d="M303 478A27 7 0 0 0 357 478L353 478A23 4.5 0 0 1 307 478Z" fill="${light}"/>`;
  return {back,front};
 }
 if(key==='pumpkin'){
  const orange=p===vaseColors.ivory,white=p===vaseColors.gray;
  const skin=orange?'#be793f':white?'#ded9c9':'#454741',light=orange?'#d39150':white?'#eeeadf':'#565951',dark=orange?'#91572f':white?'#b0a791':'#292c27',inside=orange?'#51452f':white?'#736e5c':'#181c18';
  const silhouette='M290 484Q263 480 247 505C226 536 239 588 265 607Q282 626 305 619Q330 631 355 619Q381 626 399 605C425 580 433 532 410 503Q394 480 370 484Z';
  const back=`<ellipse cx="330" cy="484" rx="40" ry="9" fill="${dark}"/><ellipse cx="330" cy="484" rx="35" ry="6" fill="${inside}"/>`;
  const front=`<defs><linearGradient id="${id}-pumpkin"><stop stop-color="${dark}"/><stop offset=".36" stop-color="${light}"/><stop offset=".7" stop-color="${skin}"/><stop offset="1" stop-color="${dark}"/></linearGradient></defs><path d="${silhouette}" fill="url(#${id}-pumpkin)" stroke="${dark}" stroke-width="1"/><g fill="none" stroke="${dark}" stroke-width="1.4" opacity=".55"><path d="M297 490C270 528 272 594 305 619M316 492C306 538 307 603 318 623M343 492C355 537 354 601 343 623M365 490C393 530 389 592 355 619"/></g><path d="M290 484A40 9 0 0 0 370 484L365 484A35 6 0 0 1 295 484Z" fill="${light}"/><g fill="${inside}"><path d="M269 545L288 525L303 550Q284 555 269 545ZM354 550L372 525L392 545Q374 556 354 550Z"/><path d="M325 548L316 563L334 563Z"/><path d="M281 574Q330 601 383 572L373 590L363 586L358 599L343 600L341 591L324 592L322 601L307 598L302 587L293 588Z"/></g>`;
  return {back,front};
 }
 const bone=p.body,edge=p.edge,light=shade(bone,14),mid=shade(bone,-13),shadow=shade(bone,-31),deep=shade(p.inside,-47);
 const gradient=`<defs><linearGradient id="${id}-bone" x1=".15" y1="0" x2=".7" y2="1"><stop stop-color="${light}"/><stop offset=".44" stop-color="${bone}"/><stop offset="1" stop-color="${mid}"/></linearGradient><radialGradient id="${id}-socket" cx=".63" cy=".7" r=".8"><stop stop-color="${deep}"/><stop offset=".63" stop-color="${shadow}"/><stop offset="1" stop-color="${mid}"/></radialGradient><linearGradient id="${id}-jaw" x2="0" y2="1"><stop stop-color="${shadow}"/><stop offset=".55" stop-color="${mid}"/><stop offset="1" stop-color="${bone}"/></linearGradient></defs>`;
 const fill=`url(#${id}-bone)`,cavity=`url(#${id}-socket)`;
 const back=`${gradient}<ellipse cx="330" cy="493" rx="29" ry="7" fill="${shadow}"/><ellipse cx="330" cy="493" rx="25" ry="4.5" fill="${deep}"/>`;
 let front=`<path d="M301 493C286 490 272 496 263 509L255 526L253 544L257 561L253 573L265 587L285 592L302 590L323 596L344 597L362 603L387 607L413 605L434 600Q451 596 454 584L448 568L425 562L402 553L383 545L371 534L366 512L359 493A29 7 0 0 1 301 493Z" fill="${fill}" stroke="${edge}" stroke-width="1"/>
 <path d="M269 569L265 585Q264 604 284 611L331 622L389 623Q418 625 438 607L445 595L434 598L426 607L394 614L340 612L295 600L286 574Z" fill="url(#${id}-jaw)" stroke="${edge}" stroke-width="1"/>
 <path d="M292 589Q320 599 341 600L383 609L419 604L431 596L415 596L388 600L357 593L327 588Z" fill="${deep}" opacity=".8"/>
 <path d="M268 518Q279 500 300 501Q283 515 283 535L278 557L265 563Q258 543 268 518Z" fill="${mid}" opacity=".7"/>
 <path d="M289 522C301 511 324 514 337 527Q348 540 339 554L322 566Q305 568 293 556Q282 541 289 522Z" fill="${cavity}" stroke="${shadow}" stroke-width="1.3"/>
 <path d="M286 525Q301 508 324 516Q336 519 342 531L336 527Q312 514 291 529Z" fill="${light}"/>
 <path d="M294 532Q304 524 321 528Q332 533 331 548L320 556L304 554Q295 547 294 532Z" fill="${deep}" opacity=".65"/>
 <path d="M275 561Q290 574 309 570L340 556L350 543L355 551Q340 578 312 583Q286 590 271 574Z" fill="${fill}" stroke="${edge}" stroke-width=".9"/>
 <path d="M278 563Q292 575 311 573L337 561" fill="none" stroke="${light}" stroke-width="2"/>
 <path d="M283 580Q303 587 326 577L340 569" fill="none" stroke="${shadow}" stroke-width="1"/>
 <path d="M350 545Q362 542 373 551L384 564L376 576L359 570L352 558Z" fill="${cavity}"/>
 <path d="M355 547Q364 548 374 558L370 567L360 564Z" fill="${deep}" opacity=".65"/>
 <path d="M343 519L348 532L346 547L356 553L361 551L357 537L360 526Z" fill="${light}" opacity=".7"/>
 <path d="M376 546Q398 552 423 563L440 568L425 571L396 562L376 556Z" fill="${light}"/>
 <path d="M425 571Q436 567 448 573L450 583L442 592L431 591L423 582Z" fill="${cavity}" stroke="${shadow}" stroke-width=".8"/>
 <path d="M434 574L439 582L436 589M428 579L445 584" fill="none" stroke="${mid}" stroke-width="1.2"/>
 <path d="M385 573L402 577L416 586L413 595L385 598L369 589Z" fill="${mid}" opacity=".45"/>
 <ellipse cx="390" cy="574" rx="3" ry="1.7" transform="rotate(20 390 574)" fill="${shadow}"/>
 <g fill="none" stroke="${shadow}" stroke-width=".65" opacity=".65"><path d="M292 502L296 506L294 511M341 501L338 506L342 511L339 515M353 506L352 513L356 517L355 523M378 557L382 561L380 564L385 568M404 563L401 568L406 572M267 532L272 529M261 550L266 547M294 605Q329 615 361 617M403 617L419 613"/></g>
 <path d="M290 586L299 589L300 597L295 600L291 595Z M303 589L312 590L314 599L308 602L305 597Z M317 591L327 590L333 597L328 603L321 601Z M334 592L343 594L346 602L340 606L336 602Z M347 596L356 596L357 605L352 608Z" fill="${fill}" stroke="${shadow}" stroke-width=".7"/>
 <path d="M367 590Q373 587 378 591L378 601Q378 612 370 615Q373 605 366 599Z" fill="${light}" stroke="${edge}" stroke-width=".9"/>
 <path d="M370 593Q375 600 372 610" fill="none" stroke="${mid}" stroke-width=".7"/>
 <path d="M399 598L406 597L406 605L402 609L399 606Z M409 596L416 595L416 603L412 607L409 604Z M419 594L425 593L425 600L422 604L419 602Z M428 591L434 590L433 598L430 601L428 598Z" fill="${light}" stroke="${edge}" stroke-width=".7"/>
 <path d="M386 613L388 605L393 601L397 612M348 614L350 608L354 615M334 612L336 606L341 613M319 609L321 603L326 611" fill="${bone}" stroke="${shadow}" stroke-width=".6"/>
 <path d="M301 493A29 7 0 0 0 359 493L355 493A25 4.5 0 0 1 305 493Z" fill="${p.rim}" stroke="${edge}" stroke-width=".5"/>
 <path d="M304 495Q330 504 356 495" fill="none" stroke="${light}" stroke-width=".9"/>`;
 // Subtle deterministic pores on the muzzle and cranium, not random per redraw.
 for(const [x,y]of [[275,519],[278,515],[281,511],[275,524],[274,539],[279,550],[282,552],[350,516],[355,529],[364,540],[375,554],[381,558],[397,568],[402,570],[407,573],[409,577],[415,579],[391,581],[394,585],[401,587],[410,589],[279,596],[286,601],[301,606]])front+=`<ellipse cx="${x}" cy="${y}" rx=".65" ry=".38" fill="${shadow}" opacity=".34"/>`;
 return {back,front};
}
