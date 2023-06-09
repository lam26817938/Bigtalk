(()=>{"use strict";var e={6591:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(9526),o=n(6397),i=n(3277),a=n(2982),l=n(5861),s=n(885),c=n(3292),d=n(4333),u=n(9233),f=n(1133),h=n(3497),y=n(1787),g=n(7244),m=(n(6333),n(6629)),x=n(4385),j=n(2783),p=n.n(j),b=(n(6429),n(7557)),C=d.default.create({bg:{flex:1,width:"100%",height:"100%"},container:{flex:1,alignItems:"center",justifyContent:"center"},searchBar:{width:"30%",height:40,marginVertical:10,paddingHorizontal:10,borderColor:"#D3D3D3",borderWidth:1,borderRadius:20,backgroundColor:"#FFF"},dataTable:{alignItems:"center",justifyContent:"center",width:"70%",borderRadius:20,backgroundColor:"#F5F5F5",overflow:"hidden"},header:{width:"70%",backgroundColor:"#FFB6C1",borderTopLeftRadius:20,borderTopRightRadius:20},row:{width:"70%"},titleText:{fontWeight:"bold",fontFamily:"Arial",fontSize:18,color:"#FFF"},resetButton:{position:"absolute",right:10,top:8,backgroundColor:"#FFB6C1",borderRadius:20,width:25,height:25,alignItems:"center",justifyContent:"center"},paginationButton:{borderRadius:20,width:30,height:30,marginHorizontal:5,marginRight:16,backgroundColor:"#FFB6C1",alignItems:"center",justifyContent:"center"},paginationButtonContainer:{flexDirection:"row-reverse",alignItems:"center",marginTop:20}});const k=function(){var e=(0,r.useState)([]),t=(0,s.default)(e,2),o=t[0],i=t[1],d=(0,r.useState)(0),j=(0,s.default)(d,2),k=j[0],w=j[1],v=(0,r.useState)(""),S=(0,s.default)(v,2),D=S[0],B=S[1],T=(0,r.useState)([]),P=(0,s.default)(T,2),F=P[0],_=P[1],R=(0,r.useState)({key:null,direction:null}),I=(0,s.default)(R,2),L=I[0],O=I[1],M=(0,r.useState)(null),A=(0,s.default)(M,2),N=A[0],E=A[1];function z(e){var t="ascending";L.key===e&&"ascending"===L.direction?t="descending":L.key===e&&"descending"===L.direction&&(e=null,t=null),O({key:e,direction:t})}function G(){return(G=(0,l.default)((function*(){var e=yield fetch("https://spacex-production.up.railway.app/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n  query ExampleQuery {\n    launches {\n      mission_name\n      rocket {\n        rocket_name\n        rocket_type\n      }\n      launch_date_local\n    }\n  }\n"})});try{var t=yield e.json();t.data.launches.forEach((function(e){e.launch_date_local=e.launch_date_local.substring(0,10).replace(/-/g,"/")})),i(t.data.launches)}catch(n){console.error("data error")}}))).apply(this,arguments)}function H(e){E(e);var t=(0,m.default)(new Date(e),"yyyy/MM/dd"),n=o.filter((function(e){return e.launch_date_local==t}));_(n),w(0)}(0,r.useEffect)((function(){!function(){G.apply(this,arguments)}()}),[]);var W=D.length>0||N?F:o,U=Math.min(20*k+1,W.length),V=Math.min(20*(k+1),W.length),q=Math.ceil(W.length/20),K=(0,a.default)(W).sort((function(e,t){return L.key?e[L.key]<t[L.key]?"ascending"===L.direction?-1:1:e[L.key]>t[L.key]?"ascending"===L.direction?1:-1:0:0}));return(0,b.jsx)(f.default,{style:C.bg,children:(0,b.jsx)(y.default,{source:n(3666),resizeMode:"repeat",children:(0,b.jsxs)(f.default,{style:C.container,children:[(0,b.jsxs)(g.default,{style:C.dataTable,children:[(0,b.jsx)(h.default,{style:C.searchBar,placeholder:"Search Mission Name, Rocket Name, and Rocket Type",value:D,onChangeText:function(e){if(console.log(e),console.log(F[0]),B(e),""===e)_([]);else{var t=o.filter((function(t){return t.mission_name.toLowerCase().includes(e.toLowerCase())||t.rocket.rocket_name.toLowerCase().includes(e.toLowerCase())||t.rocket.rocket_type.toLowerCase().includes(e.toLowerCase())}));_(t)}w(0)}}),(0,b.jsx)("div",{style:C.searchBar,children:(0,b.jsx)(p(),{selected:N,onSelect:function(e){return H(e)},onChange:function(e){return H(e)},placeholderText:"Search Date",mode:"date",dateFormat:"yyyy/MM/dd"})}),(0,b.jsxs)(g.default.Header,{style:C.header,children:[(0,b.jsx)(g.default.Title,{sortDirection:"mission_name"===L.key?L.direction:null,onPress:function(){return z("mission_name")},children:(0,b.jsx)(u.default,{style:C.titleText,children:"Mission Name"})}),(0,b.jsx)(g.default.Title,{sortDirection:"rocket_name"===L.key?L.direction:null,onPress:function(){return z("rocket_name")},children:(0,b.jsx)(u.default,{style:C.titleText,children:"Rocket Name"})}),(0,b.jsx)(g.default.Title,{sortDirection:"rocket_type"===L.key?L.direction:null,onPress:function(){return z("rocket_type")},children:(0,b.jsx)(u.default,{style:C.titleText,children:"Rocket Type"})}),(0,b.jsx)(g.default.Title,{sortDirection:"launch_date_local"===L.key?L.direction:null,onPress:function(){return z("launch_date_local")},children:(0,b.jsx)(u.default,{style:C.titleText,children:"Launch Date"})}),(0,b.jsx)(x.default,{title:"X",onClick:function(){O({key:null,direction:null}),E(null),B("")},style:C.resetButton,children:"X"})]}),K.slice(U-1,V).map((function(e){return(0,b.jsxs)(g.default.Row,{style:C.row,children:[(0,b.jsx)(g.default.Cell,{children:e.mission_name}),(0,b.jsx)(g.default.Cell,{children:e.rocket.rocket_name}),(0,b.jsx)(g.default.Cell,{children:e.rocket.rocket_type}),(0,b.jsx)(g.default.Cell,{children:e.launch_date_local})]},e.mission_name)})),(0,b.jsx)(g.default.Pagination,{page:k,numberOfPages:q,onPageChange:function(e){return w(e)},label:U+"-"+V+" of "+(D.length>0||N?F.length:o.length)}),(0,b.jsxs)(f.default,{style:C.paginationButtonContainer,children:[(0,b.jsx)(x.default,{title:"Last",disabled:k===q-1||0==F.length&&D.length>0,onClick:function(){return w(q-1)},style:C.paginationButton,children:">>"}),(0,b.jsx)(x.default,{title:"First",disabled:0===k,onClick:function(){return w(0)},style:C.paginationButton,children:"<<"})]})]}),(0,b.jsx)(c.default,{style:"auto"})]})})})};var w=n(7301),v=n(7509),S=n(5567),D=d.default.create({background:{flex:1,alignItems:"center",justifyContent:"center"},container:{flex:1,backgroundColor:"#4F9D9D",alignItems:"center",justifyContent:"center"},card:{height:220,backgroundColor:"#FFF",width:"100%",borderRadius:10,borderWidth:2,borderColor:"#FF69B4",alignItems:"center",justifyContent:"center",padding:20,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},title:{position:"absolute",top:20,left:100,margin:10,fontSize:28,fontWeight:"bold",color:"#FF69B4",textShadowColor:"#FFF",textShadowOffset:{width:1,height:1},textShadowRadius:1},button:{borderRadius:10,backgroundColor:"#FFC1E0",padding:10,marginTop:20},buttontext:{fontWeight:"bold"},top:{height:100}});const B=function(){var e=(0,i.useNavigate)();return(0,b.jsx)(S.LinearGradient,{colors:["#4F9D9D","#FF69B4"],style:D.background,children:(0,b.jsxs)(f.default,{style:D.container,children:[(0,b.jsx)("div",{style:D.top}),(0,b.jsx)(u.default,{style:D.title,children:"\ud83c\udf38Lian's Portfolio\ud83c\udf38"}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"Personal Information"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"Many stuff related to me"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){return e("/Info")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"MTK assingment"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"MediaTek frontend assignment"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){return e("/MTK")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"RA"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"USC Reserach Assistant - A web web crawler to get all products information from online retail for marketing purpose"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){return e("/RA")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"Peace"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"USC Capstone Project - a full stack website. Implemented autoencoder from deep learning"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){w.default.openURL("https://sccapstone.github.io/peace_frontend/")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"Naibot"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"A stream chatbot - \u4e00\u500b\u64c1\u6709\u4e2d\u6587\u6307\u4ee4\u8207\u91d1\u6d41\u529f\u80fd\u7684\u76f4\u64ad\u6a5f\u5668\u4eba"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){w.default.openURL("https://naibot-api.azurewebsites.net")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"Itri-Line-GPT"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"My internship in Itri(Industrial Technology Research Institute). Modify chatGPT into a customer service with several features"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){return e("/Itri")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"Library"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"A Library system used by Zhongshan Elementary School"}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){return e("/Library")}})]}),(0,b.jsxs)(v.Card,{containerStyle:D.card,children:[(0,b.jsx)(v.Card.Title,{children:"C++ Encoder"}),(0,b.jsx)(v.Card.Divider,{}),(0,b.jsx)(u.default,{style:{marginBottom:10},children:"A encoder convente data to C++ for IC design purpose made by Python."}),(0,b.jsx)(v.Button,{title:(0,b.jsx)(u.default,{style:D.buttontext,children:"Go to Details"}),type:"outline",icon:{name:"arrow-right",type:"font-awesome"},buttonStyle:D.button,onPress:function(){return e("/Encoder")}})]}),(0,b.jsx)(c.default,{style:"auto"})]})})};var T=d.default.create({container:{flex:1,backgroundColor:"#4F9D9D",alignItems:"center",justifyContent:"center"},back:{position:"absolute",top:50,left:100}});const P=function(){var e=(0,i.useNavigate)();return(0,b.jsxs)(f.default,{style:T.container,children:[(0,b.jsx)("div",{style:T.back,children:(0,b.jsx)(v.Button,{onPress:function(){return e(-1)},icon:{name:"arrow-left",type:"font-awesome"},children:"< Back"})}),(0,b.jsxs)(u.default,{style:{marginBottom:10,fontSize:40},children:["Sorry I signed the Non-disclosure agreement!","\n\n","The tools I use:","\n","*Python    *Data Analysis  *Selenium  *Git  *Linux","\n","*Network  *Project organize  *Html  *Parallel","\n"]})]})};var F=d.default.create({container:{flex:1,flexDirection:"row",backgroundColor:"#4F9D9D",alignItems:"center",justifyContent:"center"},left:{flex:1},right:{flex:1},back:{position:"absolute",top:50,left:100},section:{marginTop:120,marginLeft:20,alignSelf:"flex-start",left:100},sectionTitle:{fontSize:30,fontWeight:"bold",marginBottom:10,color:"#fff",fontFamily:"Helvetica Neue",lineHeight:30},course:{fontSize:24,marginBottom:5,color:"#fff",fontFamily:"Helvetica Neue",lineHeight:24},middleSection:{justifyContent:"center"}});const _=function(){var e=(0,i.useNavigate)(),t=(0,r.useState)(["Data Structures andAlgorithms","Computer Systems Engineering","Compiler Construction","Operating Systems","Intro to Computer Networks","Database System Design","Big Data Analytics","Advanced Digital Design"]),n=(0,s.default)(t,2),o=n[0],a=(n[1],(0,r.useState)(["Signals and Systems","Robotic Applications & Design","Statistics for Engineers","Discrete Structures","Elem Differential Equations","Vector Calculus","Algorithmic Design","Intro Electrical Engr Lab","UNIX/Linux Fundamentals","Digital Logic Design","Electrical Science","Circuits","Intro to Computer Architecture","Advanced Programming Tech","Essentials of Physics","Applied Linear Algebra","Technical Writing","Computing in the Modern World"])),l=(0,s.default)(a,2),c=l[0],d=(l[1],(0,r.useState)(["Git","MARS","Linux","Azure","Jupyter","Quartus","Verilog","Matlab","HTML","Docker","R","OBS","VHDL"])),h=(0,s.default)(d,2),y=h[0],g=(h[1],(0,r.useState)(["Tau Beta Pi member","National Robot Competition Prize for Excellence","National Creativity Competition Prize of Gold","USC CEC Department Scholarship","President\u2019s Honor List"])),m=(0,s.default)(g,2),x=m[0],j=(m[1],(0,r.useState)(["Library system app","Data key-in form in Excel","Online shop made by Wix","Machine learning & deep learning research lab"])),p=(0,s.default)(j,2),C=p[0];p[1];return(0,b.jsxs)(f.default,{style:F.container,children:[(0,b.jsxs)(f.default,{style:F.left,children:[(0,b.jsx)(f.default,{style:F.back,children:(0,b.jsx)(v.Button,{onPress:function(){return e(-1)},icon:{name:"arrow-left",type:"font-awesome"}})}),(0,b.jsxs)(f.default,{style:F.section,children:[(0,b.jsx)(u.default,{style:F.sectionTitle,children:"Major Courses:"}),o.map((function(e){return(0,b.jsx)(u.default,{style:F.course,children:e})}))]}),(0,b.jsxs)(f.default,{style:F.section,children:[(0,b.jsx)(u.default,{style:F.sectionTitle,children:"Other related Courses:"}),c.map((function(e){return(0,b.jsx)(u.default,{style:F.course,children:e})}))]})]}),(0,b.jsxs)(f.default,{style:F.right,children:[(0,b.jsxs)(f.default,{style:F.section,children:[(0,b.jsx)(u.default,{style:F.sectionTitle,children:"Skill Set:"}),y.map((function(e){return(0,b.jsx)(u.default,{style:F.course,children:e})}))]}),(0,b.jsxs)(f.default,{style:F.section,children:[(0,b.jsx)(u.default,{style:F.sectionTitle,children:"Honor"}),x.map((function(e){return(0,b.jsx)(u.default,{style:F.course,children:e})}))]}),(0,b.jsxs)(f.default,{style:F.section,children:[(0,b.jsx)(u.default,{style:F.sectionTitle,children:"Other Projects"}),C.map((function(e){return(0,b.jsx)(u.default,{style:F.course,children:e})}))]})]})]})};var R=n(9899),I=d.default.create({container:{flex:1,backgroundColor:"#4F9D9D",alignItems:"center",justifyContent:"center"},back:{position:"absolute",top:50,left:20},image:{width:200,height:200,marginBottom:20}});const L=function(){var e=(0,i.useNavigate)();return(0,b.jsxs)(f.default,{style:I.container,children:[(0,b.jsx)(f.default,{style:I.back,children:(0,b.jsx)(v.Button,{onPress:function(){e(-1)},icon:{name:"arrow-left",type:"font-awesome"},children:"< Back"})}),(0,b.jsx)(u.default,{style:{marginBottom:10,fontSize:40},children:"Line official friend QRcode"}),(0,b.jsx)(R.default,{source:n(2096),style:I.image}),(0,b.jsx)(u.default,{style:{marginBottom:10,fontSize:40,color:"blue"},onPress:function(){w.default.openURL("https://github.com/lam26817938/Itri-line_gpt")},children:"Link to repo"})]})};var O=d.default.create({container:{flex:1,backgroundColor:"#4F9D9D",alignItems:"center",justifyContent:"center"},back:{position:"absolute",top:50,left:100}});const M=function(){var e=(0,i.useNavigate)();return(0,b.jsxs)(f.default,{style:O.container,children:[(0,b.jsx)("div",{style:O.back,children:(0,b.jsx)(v.Button,{onPress:function(){return e(-1)},icon:{name:"arrow-left",type:"font-awesome"},children:"< Back"})}),(0,b.jsx)(u.default,{style:{marginBottom:10,fontSize:40},children:"TBC!"})]})};var A=d.default.create({container:{flex:1,backgroundColor:"#4F9D9D",alignItems:"center",justifyContent:"center"},back:{position:"absolute",top:50,left:100}});const N=function(){var e=(0,i.useNavigate)();return(0,b.jsxs)(f.default,{style:A.container,children:[(0,b.jsx)("div",{style:A.back,children:(0,b.jsx)(v.Button,{onPress:function(){return e(-1)},icon:{name:"arrow-left",type:"font-awesome"},children:"< Back"})}),(0,b.jsxs)(u.default,{style:{marginBottom:10,fontSize:40},children:["High Confidential!","\n\n","It's an effectial tool currently used by a semiconductor company"]})]})};const E=function(){return(0,b.jsx)(o.BrowserRouter,{basename:"/Bigtalk",children:(0,b.jsxs)(i.Routes,{children:[(0,b.jsx)(i.Route,{path:"/",element:(0,b.jsx)(B,{})}),(0,b.jsx)(i.Route,{path:"/MTK",element:(0,b.jsx)(k,{})}),(0,b.jsx)(i.Route,{path:"/RA",element:(0,b.jsx)(P,{})}),(0,b.jsx)(i.Route,{path:"/Info",element:(0,b.jsx)(_,{})}),(0,b.jsx)(i.Route,{path:"/Itri",element:(0,b.jsx)(L,{})}),(0,b.jsx)(i.Route,{path:"/Library",element:(0,b.jsx)(M,{})}),(0,b.jsx)(i.Route,{path:"/encoder",element:(0,b.jsx)(N,{})})]})})}},2096:(e,t,n)=>{e.exports=n.p+"static/media/Itri.b536f201b6beedf2641a.png"},3666:(e,t,n)=>{e.exports=n.p+"static/media/mtk.87ac4421d94cc02e38df.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,o,i]=e[d],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/Bigtalk/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,c=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var d=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[637],(()=>n(9484)));r=n.O(r)})();
//# sourceMappingURL=main.5b7aa6f1.js.map