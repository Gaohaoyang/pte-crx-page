(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{71828:(e,t,a)=>{Promise.resolve().then(a.bind(a,85763))},85763:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q});var n=a(51047),s=a(82808),i=a(72209),r=a(53217),l=a(61272),o=a(89039),c=a(76847);let d=(0,c.createContext)(void 0),m=()=>window.innerWidth<768,u=e=>{let{children:t,className:a,containerClassName:s}=e,i=(0,c.useRef)(null),[r,l]=(0,c.useState)(!1),[u,h]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=()=>{h(m())};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,n.jsx)(d.Provider,{value:[r,l],children:(0,n.jsx)("div",{className:(0,o.cn)("flex py-0",s),style:{perspective:"800px"},children:(0,n.jsx)("div",{ref:i,onMouseEnter:()=>{u||l(!0)},onMouseMove:e=>{if(!i.current||u)return;let{left:t,top:a,width:n,height:s}=i.current.getBoundingClientRect(),r=(e.clientX-t-n/2)/16,l=-(e.clientY-a-s/2)/16;i.current.style.transform="rotateY(".concat(r,"deg) rotateX(").concat(l,"deg)")},onMouseLeave:()=>{i.current&&!u&&(l(!1),i.current.style.transform="rotateY(0deg) rotateX(0deg)")},className:(0,o.cn)("relative flex w-full items-center justify-center transition-all duration-200 ease-linear",a),style:{transformStyle:"preserve-3d"},children:t})})})},h=e=>{let{children:t,className:a}=e;return(0,n.jsx)("div",{className:(0,o.cn)("h-full w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",a),children:t})},p=e=>{let{as:t="div",children:a,className:s,translateX:i=0,translateY:r=0,translateZ:l=0,rotateX:d=0,rotateY:u=0,rotateZ:h=0,...p}=e,g=(0,c.useRef)(null),[f]=x(),[A,S]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e=()=>{S(m())};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,c.useEffect)(()=>{y()},[f]);let y=()=>{g.current&&!A&&(f?g.current.style.transform="translateX(".concat(i,"px) translateY(").concat(r,"px) translateZ(").concat(l,"px) rotateX(").concat(d,"deg) rotateY(").concat(u,"deg) rotateZ(").concat(h,"deg)"):g.current.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")};return(0,n.jsx)(t,{ref:g,className:(0,o.cn)("w-fit transition duration-200 ease-linear",s),...p,children:a})},x=()=>{let e=(0,c.useContext)(d);if(void 0===e)throw Error("useMouseEnter must be used within a MouseEnterProvider");return e};var g=a(58965),f=a(30430),A=a(15494);let S=()=>{let{t:e}=(0,A.Bd)("home"),t=(0,c.useRef)(null),a=(0,g.W)(t,{once:!0,amount:.3});return(0,n.jsx)(f.P.div,{ref:t,className:"flex flex-1",initial:{x:100,opacity:0},animate:{x:a?0:100,opacity:a?1:0},transition:{delay:1,duration:.6,type:"spring",bounce:.2},children:(0,n.jsx)(u,{containerClassName:"flex flex-1",className:"inter-var",children:(0,n.jsxs)(h,{className:"group/card relative flex w-full flex-1 flex-col items-center justify-between rounded-xl border border-black/[0.1] px-2 py-4 shadow-md transition-shadow duration-300 dark:border-white/[0.2] dark:bg-slate-800 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] md:hover:shadow-2xl",children:[(0,n.jsxs)("div",{className:"inter-var ml-0 flex items-center justify-center gap-2 md:ml-0 lg:ml-5 xl:ml-0 2xl:ml-0",children:[(0,n.jsx)(p,{translateZ:90,translateX:5,children:(0,n.jsx)(r.default,{src:l.A,alt:"logo",width:80,height:80,className:"h-20 w-20 rounded-md shadow-lg"})}),(0,n.jsxs)("div",{className:"inter-var ml-0 flex-1 [transform-style:preserve-3d] md:ml-6 lg:ml-4 xl:ml-0 2xl:ml-0 [&>*]:[transform-style:preserve-3d]",children:[(0,n.jsx)(p,{translateZ:90,translateX:5,className:"text-lg font-semibold drop-shadow-lg md:text-lg xl:text-xl",children:e("PTE Sub-Scores Breakdown")}),(0,n.jsx)(p,{translateZ:80,translateX:5,className:"drop-shadow-lg",children:e("Chrome Extension")}),(0,n.jsx)("div",{className:"mt-1 flex items-center text-gray-600",children:[1,2,3,4,5].map((e,t)=>(0,n.jsx)(p,{translateZ:240+10*Math.min(t,4-t),translateX:25,className:"text-xl drop-shadow-lg dark:text-yellow-500",children:(0,n.jsx)(i.SeC,{})},e))})]})]}),(0,n.jsx)(p,{translateZ:80,translateX:5,className:"flex w-full justify-center",children:(0,n.jsx)(s.T,{color:"primary",className:"mt-4 w-11/12 rounded-full font-semibold shadow-lg",onPress:()=>{window.open("https://chromewebstore.google.com/detail/pte-sub-scores-breakdown/hibclclepijigjnfdkmkfhjogfhgicda","_blank")},children:e("Install from Chrome Web Store")})})]})})})},y=()=>{let{t:e}=(0,A.Bd)("home"),t=(0,c.useRef)(null),a=(0,g.W)(t,{once:!0,amount:.3});return(0,n.jsxs)("div",{ref:t,className:"w-full text-base lg:w-2/3 xl:w-2/3 2xl:w-2/3",children:[(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,ease:"easeOut"},className:"text-3xl font-bold",children:e("Automatically show your PTE sub-scores and details.")}),(0,n.jsxs)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.2,ease:"easeOut"},className:"mt-2 text-2xl font-bold",children:[e("So you don't need to press")," ",(0,n.jsx)("code",{className:"rounded-md bg-slate-100 p-1 text-xl dark:bg-slate-800",children:"F12"})," ",e("to open the console for a manual check.")]}),(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.4,ease:"easeOut"},className:"mt-3",children:e("Simply open your PTE score webpage after installing, and you'll see a clear breakdown of your performance, including sub-scores, CLB levels (for PTE-core), IELTS equivalent scores, and more.")}),(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.6,ease:"easeOut"},className:"mt-3",children:e("Explore this panel to better understand your strengths and areas for improvement! Wishing you great success!")})]})},R=e=>{let{className:t,containerRef:a,fromRef:s,toRef:i,curvature:r=0,reverse:l=!1,duration:d=3*Math.random()+4,delay:m=0,pathColor:u="gray",pathWidth:h=2,pathOpacity:p=.2,gradientStartColor:x="#ffaa40",gradientStopColor:g="#9c40ff",startXOffset:A=0,startYOffset:S=0,endXOffset:y=0,endYOffset:R=0}=e,j=(0,c.useId)(),[w,v]=(0,c.useState)(""),[M,b]=(0,c.useState)({width:0,height:0}),W=l?{x1:["90%","-10%"],x2:["100%","0%"],y1:["0%","0%"],y2:["0%","0%"]}:{x1:["10%","110%"],x2:["0%","100%"],y1:["0%","0%"],y2:["0%","0%"]};return(0,c.useEffect)(()=>{let e=()=>{if(a.current&&s.current&&i.current){let e=a.current.getBoundingClientRect(),t=s.current.getBoundingClientRect(),n=i.current.getBoundingClientRect();b({width:e.width,height:e.height});let l=t.left-e.left+t.width/2+A,o=t.top-e.top+t.height/2+S,c=n.left-e.left+n.width/2+y,d=n.top-e.top+n.height/2+R;v("M ".concat(l,",").concat(o," Q ").concat((l+c)/2,",").concat(o-r," ").concat(c,",").concat(d))}},t=new ResizeObserver(t=>{t.forEach(()=>{e()})});return a.current&&t.observe(a.current),e(),()=>{t.disconnect()}},[a,s,i,r,A,S,y,R]),(0,n.jsxs)("svg",{fill:"none",width:M.width,height:M.height,xmlns:"http://www.w3.org/2000/svg",className:(0,o.cn)("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",t),viewBox:"0 0 ".concat(M.width," ").concat(M.height),children:[(0,n.jsx)("path",{d:w,stroke:u,strokeWidth:h,strokeOpacity:p,strokeLinecap:"round"}),(0,n.jsx)("path",{d:w,strokeWidth:h,stroke:"url(#".concat(j,")"),strokeOpacity:"1",strokeLinecap:"round"}),(0,n.jsx)("defs",{children:(0,n.jsxs)(f.P.linearGradient,{className:"transform-gpu",id:j,gradientUnits:"userSpaceOnUse",initial:{x1:"0%",x2:"0%",y1:"0%",y2:"0%"},animate:{x1:W.x1,x2:W.x2,y1:W.y1,y2:W.y2},transition:{delay:m,duration:d,ease:[.16,1,.3,1],repeat:1/0,repeatDelay:0},children:[(0,n.jsx)("stop",{stopColor:x,stopOpacity:"0"}),(0,n.jsx)("stop",{stopColor:x}),(0,n.jsx)("stop",{offset:"32.5%",stopColor:g}),(0,n.jsx)("stop",{offset:"100%",stopColor:g,stopOpacity:"0"})]})})]})};var j=a(43843),w=a(43181),v=a(9969);let M=()=>{let{t:e}=(0,A.Bd)("home"),t=(0,c.useRef)(null),a=(0,c.useRef)(null),s=(0,c.useRef)(null),i=(0,c.useRef)(null),o=(0,c.useRef)(null),d=(0,c.useRef)(null),m=(0,g.W)(d,{once:!0,amount:.3});return(0,n.jsxs)("div",{ref:d,className:"mt-20",children:[(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:m?1:0,y:m?0:20},transition:{duration:.5,ease:"easeOut"},children:(0,n.jsx)("h2",{className:"text-3xl font-bold",children:e("How It Works")})}),(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:m?1:0,y:m?0:20},transition:{duration:.5,delay:.2,ease:"easeOut"},children:(0,n.jsx)("p",{className:"mt-2",children:e("When you visit the PTE score page, the Chrome extension intercepts the API response, adds some question types, and renders them in the page panel.")})}),(0,n.jsxs)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:m?1:0,y:m?0:20},transition:{duration:.5,delay:.4,ease:"easeOut"},className:"relative mx-auto flex w-[96%] items-center justify-center pt-20 text-gray-500 dark:text-gray-300 md:w-[80%] lg:w-[60%]",ref:t,children:[(0,n.jsxs)("div",{className:"flex w-full flex-col items-stretch justify-between",children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{ref:a,className:"relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600",children:[(0,n.jsx)(j.pmW,{className:"text-2xl"}),(0,n.jsx)("div",{className:"absolute -top-6 left-0 w-full text-center text-sm",children:"User"})]}),(0,n.jsxs)("div",{ref:s,className:"relative z-10 mr-0 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600",children:[(0,n.jsx)(w.Wjq,{className:"text-2xl"}),(0,n.jsx)("div",{className:"absolute -left-[22] -top-6 w-44 text-center text-sm",children:"PTE Website"})]}),(0,n.jsxs)("div",{ref:i,className:"relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600",children:[(0,n.jsx)(v.vwk,{className:"text-2xl"}),(0,n.jsx)("div",{className:"absolute -left-[22] -top-6 w-44 text-center text-sm",children:"PTE Server"})]})]}),(0,n.jsx)("div",{className:"mt-14 flex justify-center",children:(0,n.jsxs)("div",{ref:o,className:"relative z-10 ml-20 flex h-14 w-14 items-center justify-center rounded-full border bg-white p-3 shadow-md dark:bg-gray-600",children:[(0,n.jsx)(r.default,{src:l.A,alt:"logo",width:28,height:28,className:"h-7 w-7 rounded-sm"}),(0,n.jsxs)("div",{className:"absolute -bottom-11 -left-[40] w-80 text-center text-sm font-bold text-gray-800 dark:text-gray-200",children:["PTE Sub-Scores Breakdown",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"text-xs",children:"Chrome Extension"})]})]})})]}),(0,n.jsx)(R,{duration:5,containerRef:t,fromRef:a,toRef:s,curvature:20,startYOffset:-5,endYOffset:-5}),(0,n.jsx)(R,{duration:5,containerRef:t,fromRef:s,toRef:i,curvature:20,startYOffset:-5,endYOffset:-5}),(0,n.jsx)(R,{duration:5,containerRef:t,toRef:s,fromRef:i,curvature:-20,startYOffset:5,endYOffset:5,delay:2,reverse:!0}),(0,n.jsx)(R,{duration:5,containerRef:t,toRef:o,fromRef:s,curvature:40,startYOffset:25,startXOffset:5,endYOffset:-25,delay:2}),(0,n.jsx)(R,{duration:5,containerRef:t,toRef:s,fromRef:o,curvature:0,startYOffset:10,endYOffset:10,delay:2.5,reverse:!0}),(0,n.jsx)(R,{duration:5,containerRef:t,toRef:a,fromRef:s,curvature:-20,startYOffset:5,endYOffset:5,delay:3,reverse:!0})]})]})};var b=a(1912),W=a(62594),C=a(93235),k=a(77074),E=a(47328),I=a(81039),N=a(77587),L=a(1443),T=a(78314),B=a(51661);let D=[{name:"*巍",date:"2025-03-02",amount:"￥10.00",method:"AliPay"},{name:"*何",date:"2025-03-01",amount:"￥5.00",method:"Wechat Pay"},{name:"*牛",date:"2025-02-06",amount:"￥10.00",method:"Wechat Pay"},{name:"**宁",date:"2025-01-29",amount:"￥10.00",method:"AliPay",message:"新年快乐\uD83C\uDF86"},{name:"**霏",date:"2025-01-27",amount:"￥5.00",method:"AliPay"},{name:"j*n",date:"2025-01-16",amount:"￥35.00",method:"Wechat Pay",message:"just4fun: 同为程序员，感谢这个PTE插件。请你一杯星巴克！"},{name:"*哈",date:"2024-12-19",amount:"￥18.00",method:"Wechat Pay",message:"感谢制作了这个pte小分插件"},{name:"E*Y",date:"2024-12-08",amount:"￥10.00",method:"Wechat Pay"},{name:"*毓",date:"2024-12-04",amount:"￥10.00",method:"Wechat Pay",message:"Ayu"},{name:"*豆",date:"2024-11-23",amount:"￥10.00",method:"Wechat Pay"},{name:"*7",date:"2024-11-17",amount:"￥5.00",method:"Wechat Pay"},{name:"**灏",date:"2024-10-02",amount:"￥20.00",method:"AliPay"},{name:"O*y",date:"2024-09-02",amount:"￥5.00",method:"Wechat Pay",message:"Nan zhou"},{name:"T*m L*",date:"2024-08-20",amount:"CA$5.00",method:"<i>Interac</i> e-Transfer"}],P=[{name:"<i>Interac</i> e-Transfer",mainPic:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/Interac_e-Transfer_logo.png",width:220,picWidth:220,description:"gaohaoyang126@outlook.com"},{name:"PayPal",logo:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/paypal.png",mainPic:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/QR%20Code.png",picWidth:120,link:"https://www.paypal.com/donate/?business=NB2D3UXSQKDKU&no_recurring=0&item_name=Thanks+for+your+support%21+I+really+appreciate+it.+Have+a+great+day%21&currency_code=CAD",linkText:"PayPal Donation Link"},{name:"Wechat Pay",logo:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/wechatpayLogo.png",mainPic:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/wechatPay.png",picWidth:140},{name:"AliPay",logo:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/alipayLogo.png",mainPic:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/Alipay.png",picWidth:140},{name:"Buy Me a Coffee",mainPic:"https://cdn.jsdelivr.net/gh/Gaohaoyang/pics/pte/buymeacoffee.png",picWidth:220,link:"https://buymeacoffee.com/gaohaoyangh",linkText:"Buy Me a Coffee Link"}];var O=a(30210);let F=()=>{let{t:e}=(0,A.Bd)("home"),t=(0,c.useRef)(null),a=(0,g.W)(t,{once:!0,amount:.3}),s=(0,O.useSearchParams)(),i=(0,O.useRouter)();return(0,c.useEffect)(()=>{"donation"===s.get("scrollTo")&&setTimeout(()=>{let e=document.querySelector("#donation");if(!e)return;let t=e.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:t,behavior:"smooth"}),setTimeout(()=>{history.replaceState({},"","".concat(o.P,"/"))},1e3)},240)},[s,i]),(0,n.jsxs)("div",{ref:t,id:"donation",className:"mt-20",children:[(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,ease:"easeOut"},children:(0,n.jsx)("h2",{className:"mb-6 text-3xl font-bold",children:e("Donation")})}),(0,n.jsxs)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.2,ease:"easeOut"},children:[(0,n.jsx)("p",{children:e("If you found this helpful, feel free to sponsor me for a cup of coffee! ☕ :) I really appreciate it.")}),(0,n.jsx)("p",{children:e("Have a great day! Your name will appear on the donation list. ❤️")}),(0,n.jsxs)("p",{className:"mb-2 mr-2 mt-2 text-right text-sm text-gray-500 dark:text-gray-300",children:[e("Last updated:")," ","2025-03-03"]})]}),(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.4,ease:"easeOut"},children:(0,n.jsxs)(b.j,{isStriped:!0,"aria-label":"Donation table",className:"w-full",children:[(0,n.jsxs)(W.X,{children:[(0,n.jsx)(C.e,{children:e("Name")}),(0,n.jsx)(C.e,{children:e("Date")}),(0,n.jsx)(C.e,{children:e("Amount")}),(0,n.jsx)(C.e,{children:e("Method")}),(0,n.jsx)(C.e,{children:e("Message")})]}),(0,n.jsx)(k.E,{children:D.map((e,t)=>(0,n.jsxs)(E.s,{children:[(0,n.jsx)(I.w,{children:e.name}),(0,n.jsx)(I.w,{children:e.date}),(0,n.jsx)(I.w,{children:e.amount}),(0,n.jsx)(I.w,{children:(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:e.method}})}),(0,n.jsx)(I.w,{children:e.message||"-"})]},t))})]})}),(0,n.jsxs)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.6,ease:"easeOut"},children:[(0,n.jsx)("p",{className:"mt-4",children:e("You can support me through the following methods.")}),(0,n.jsx)("div",{className:"mt-4 flex flex-wrap gap-4",children:P.map((e,t)=>(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.8+.1*t,ease:"easeOut"},children:(0,n.jsxs)(N.Z,{className:"h-full w-full pb-2 sm:w-auto",children:[(0,n.jsxs)(L.d,{className:"flex-col items-center px-4 pb-0",children:[(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[e.logo&&(0,n.jsx)(T.W,{alt:e.name,className:"rounded-none object-cover",src:e.logo,width:30}),(0,n.jsx)("h4",{className:"text-center text-large font-bold",children:e.name.split(/<i>|<\/i>/).map((e,t)=>t%2==1?(0,n.jsx)("i",{children:e},t):e)})]}),(0,n.jsx)("p",{className:"",children:e.description})]}),(0,n.jsxs)(B.U,{className:"flex flex-col items-center overflow-visible py-2",children:[(0,n.jsx)(T.W,{alt:e.name,className:"rounded-none object-cover",src:e.mainPic,width:e.picWidth}),e.link&&(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"mt-2 text-sm text-blue-500 dark:text-blue-400",children:e.linkText})]})]})},e.name))})]})]})};var Y=a(20907),X=a(28366);let H=()=>{let{theme:e}=(0,Y.D)(),{i18n:t}=(0,A.Bd)("home");return(0,n.jsx)("div",{className:"disqus-container mt-40 rounded-lg",children:(0,n.jsx)(X.Mq,{shortname:"gaohaoyang-github-io-pte-crx-page",config:{url:"https://gaohaoyang.github.io/pte-crx-page",identifier:"gaohaoyang.github.io_pte-crx-page",title:"PTE Sub-Scores Breakdown | Analyze Your PTE Sub-Scores Online with PTE Sub-Scores Breakdown Chrome Extension | 分析 PTE Core 小分的 Chrome 插件",language:t.language}},"".concat(e,"_").concat(t.language))})};var Q=a(40291),U=a(17252),z=a(31066);let _={RA:"Read Aloud",RS:"Repeat Sentence",DI:"Describe Image",RTS:"Respond to a Situation",RL:"Re-tell Lecture",ASQ:"Answer Short Question",SWT:"Summarize Written Text",WE:"Write Email(Core)/Essay(Academic)","FIB-RW":"Fill in the Blanks: Reading & Writing","MCM-R":"Multiple Choice, Multiple Answers: Reading",RO:"Reorder Paragraph","FIB-R":"Fill in the Blanks: Reading","MCS-R":"Multiple Choice, Single Answer: Reading",SST:"Summarize Spoken Text","MCM-L":"Multiple Choice, Multiple Answer: Listening","FIB-L":"Fill in the Blanks: Listening","MCS-L":"Multiple Choice, Single Answer: Listening",SMW:"Select Missing Word",HIW:"Highlight Incorrect Words",WFD:"Write From Dictation",HCS:"Highlight Correct Summary"};var V=a(69495);let Z=e=>{let{content:t}=e,[a,s]=(0,c.useState)(!1);(0,c.useEffect)(()=>{s(!0)},[]);let i=e=>e.split(/\s+/).map(e=>{let t=e.replace(/[.,!?()]/g,"").trim();return t in _&&"string"==typeof _[t]?'<span class="question-type" data-type="'.concat(t,'" data-full="').concat(_[t],'">').concat(e,"</span>"):e}).join(" ");return(()=>{let e=t.split("\n").map(e=>'<p class="mb-2">'.concat(i(e),"</p>")).join("");return a?(0,n.jsx)(f.P.div,{className:"mt-8 text-gray-600 dark:text-neutral-300",children:(0,n.jsx)(f.P.div,{initial:{filter:"blur(10px)",opacity:0,y:5},animate:{filter:"blur(0px)",opacity:1,y:0},transition:{duration:.2,ease:"easeInOut"},children:t.split("\n").map((e,t)=>{let a=i(e),s=document.createElement("div");return s.innerHTML=a,(0,n.jsx)("div",{className:"mb-2",children:Array.from(s.childNodes).map((e,t)=>{if(e.nodeType===Node.TEXT_NODE)return(0,n.jsx)("span",{children:e.textContent},t);if(e instanceof HTMLElement&&e.classList.contains("question-type")){let a=e.getAttribute("data-full");return(0,n.jsx)(V.I,{content:a,delay:0,color:"foreground",showArrow:!0,children:(0,n.jsx)("span",{className:"font-bold",children:e.textContent})},t)}return null})},t)})})}):(0,n.jsx)("div",{className:"mt-8 text-gray-600 dark:text-neutral-300",dangerouslySetInnerHTML:{__html:e}})})()},G=e=>{let{testimonials:t,autoplay:a=!1}=e,{i18n:s}=(0,A.Bd)(),[i,l]=(0,c.useState)(0),[o,d]=(0,c.useState)(!1),m=()=>{switch(s.language){case"zh":return{name:t[i].nameZh,content:t[i].contentZh};case"ja":return{name:t[i].nameJa,content:t[i].contentJa};default:return{name:t[i].name,content:t[i].content}}},u=()=>{l(e=>(e+1)%t.length)},h=()=>{l(e=>(e-1+t.length)%t.length)},p=e=>e===i;(0,c.useEffect)(()=>{if(a&&!o){let e=setInterval(u,5e3);return()=>clearInterval(e)}},[a,o]),(0,c.useEffect)(()=>{let e=e=>{"ArrowLeft"===e.key?h():"ArrowRight"===e.key&&u()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let x=e=>{let t=[-4,0,4,-8,8,-10,10];return t[e%t.length]};return(0,n.jsx)("div",{className:"mt-6 flex w-full justify-center md:mt-8 lg:mt-4",children:(0,n.jsxs)("div",{className:"relative flex w-full flex-wrap justify-center",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,n.jsx)("div",{className:"w-full md:w-[460px] lg:ml-10 lg:w-[580px]",children:(0,n.jsx)("div",{className:"relative h-[100vw] w-full md:h-[500px] md:w-[430px] lg:h-[560px] lg:w-[490px]",children:(0,n.jsx)(z.N,{children:t.map((e,a)=>(0,n.jsxs)(f.P.div,{initial:{opacity:0,scale:.9,z:-100,rotate:x(a)},animate:{opacity:p(a)?1:.7,scale:p(a)?1:.95,z:p(a)?0:-100,rotate:p(a)?0:x(a),zIndex:p(a)?10:t.length+2-a,y:p(a)?[0,-80,0]:0},exit:{opacity:0,scale:.9,z:-100,rotate:x(a)},transition:{duration:.4,ease:"easeInOut"},className:"absolute inset-0 flex origin-bottom items-center justify-center rounded-xl border border-slate-200 bg-white shadow-md dark:border-neutral-500",children:[(0,n.jsx)(r.default,{src:e.src,alt:e.name,width:500,height:800,draggable:!1,className:"h-[98%] w-[98%] object-contain object-center"}),(0,n.jsx)("div",{className:"absolute inset-0 z-[1] hidden rounded-xl bg-black/20 dark:block"})]},a))})})}),(0,n.jsxs)("div",{className:"z-10 flex w-full flex-col justify-between py-4 md:w-[260px] lg:w-[300px] xl:w-[400px]",children:[(0,n.jsxs)(f.P.div,{className:"my-4 flex flex-1 flex-col justify-center",initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0},transition:{duration:.2,ease:"easeInOut"},children:[(0,n.jsxs)("h3",{className:"text-lg font-bold",children:[(0,n.jsxs)("span",{className:"mr-2 text-xs font-extralight",children:["Sample ",t[i].id]}),m().name]}),(0,n.jsx)(Z,{content:m().content})]},i),(0,n.jsxs)("div",{className:"mb-4 flex gap-4",children:[(0,n.jsx)("button",{onClick:h,className:"group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",children:(0,n.jsx)(Q.A,{className:"h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"})}),(0,n.jsx)("button",{onClick:u,className:"group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800",children:(0,n.jsx)(U.A,{className:"h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"})})]})]})]})})},J=[{id:"5",content:"Reading (90): Excellent in both Single-skill (MCM-R, MCS-R, RO) and Multiple-skills tasks (FIB-R, FIB-RW).\nSpeaking (85): Strong performance in both Extended (DI, RL) and Short Speaking (RA, RS, ASQ).\nWriting (84): Very good in Short Writing (WFD) with room for improvement in Extended Writing (WE, SWT, SST).\nListening (77): Good in Single-skill (MCM-L, MCS-L, SMW) but needs attention in Multiple-skills tasks (FIB-L, HCS, HIW).",contentZh:"阅读 (90): 在单项和多项任务中表现出色 (MCM-R, MCS-R, RO 和 FIB-R, FIB-RW)。\n口语 (85): 在扩展口语 (DI, RL) 和短口语 (RA, RS, ASQ) 中表现出色。\n写作 (84): 在短写作 (WFD) 中表现出色，但在扩展写作 (WE, SWT, SST) 中需要改进。\n听力 (77): 在单项 (MCM-L, MCS-L, SMW) 中表现良好，但在多项任务 (FIB-L, HCS, HIW) 中需要关注。",contentJa:"リーディング (90): 単独スキル (MCM-R, MCS-R, RO) と複合スキル (FIB-R, FIB-RW) の両方で優れた成績。\nスピーキング (85): 長文 (DI, RL) と短文 (RA, RS, ASQ) の両方で優れたパフォーマンス。\nライティング (84): 短文ライティング (WFD) で優れているが、長文ライティング (WE, SWT, SST) に改善の余地あり。\nリスニング (77): 単独スキル (MCM-L, MCS-L, SMW) は良好だが、複合スキル (FIB-L, HCS, HIW) に注意が必要。",name:"Excellent at Reading/Speaking, Enhance WE/SST",nameZh:"阅读/口语表现出色，提升 WE/SST",nameJa:"リーディング/スピーキングが優秀、WE/SST の向上が必要",src:{src:"/pte-crx-page//_next/static/media/sample5.5f03ad64.png",height:921,width:875,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEXj7vba7PPV6/HQ5OvBXXuEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nD3GwQ3AMACDQAP771wlkcrn2P7iabwjxbZSizNAjmsbOooPCYAAVijLmSsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{id:"4",content:"Listening: Moderate in Multiple-skills tasks (WFD, HCS, HIW) and Single-skill tasks (MCM-L, MCS-L, SMW).\nSpeaking: Needs improvement in Extended Speaking (DI, RL) and Short Speaking (RA, RS, ASQ).\nReading: Strongest skill, good in Multiple-skills (FIB-R, FIB-RW) and Single-skill tasks (RO, MCM-R, MCS-R).\nWriting: Strong overall, particularly in Short Writing (WFD).",contentZh:"听力: 在多项任务 (WFD, HCS, HIW) 和单项任务 (MCM-L, MCS-L, SMW) 中表现适中。\n口语: 在扩展口语 (DI, RL) 和短口语 (RA, RS, ASQ) 中需要改进。\n阅读: 最强技能，在多项任务 (FIB-R, FIB-RW) 和单项任务 (RO, MCM-R, MCS-R) 中表现良好。\n写作: 整体表现出色，尤其在短写作 (WFD) 中表现出色。",contentJa:"リスニング: 複合スキル (WFD, HCS, HIW) と単独スキル (MCM-L, MCS-L, SMW) で中程度。\nスピーキング: 長文 (DI, RL) と短文 (RA, RS, ASQ) の両方で改善が必要。\nリーディング: 最も強いスキル、複合 (FIB-R, FIB-RW) と単独タスク (RO, MCM-R, MCS-R) で良好。\nライティング: 全体的に強く、特に短文ライティング (WFD) で優れている。",name:"Good at WFD, Improve DI/RL/RA/RS Tasks",nameZh:"在 WFD 中表现出色，需要提升 DI/RL/RA/RS",nameJa:"WFD が得意、DI/RL/RA/RS タスクの改善が必要",src:{src:"/pte-crx-page//_next/static/media/sample4.0db30562.png",height:994,width:960,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXi7vba7PLU6/LS5Ovp8vYpacfBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nD3IwQkAIADDwKTt/jOLCN4nEPjqq1W2YRPTkeYavQeHUdtBgmUHDCYAaHDexDMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{id:"3",content:"Writing (89): Excellent performance in Extended Writing (WE, SST, SWT) and good in Short Writing (WFD, FIB-RW).\nListening (71): Moderate, needs improvement in Single-skill tasks (MCM-L, MCS-L).\nSpeaking (69): Weak in Short Speaking (RA, RS, ASQ), better in Extended Speaking (DI, RTS).\nReading (67): Weakest skill, particularly struggling with comprehension tasks.",contentZh:"写作 (89): 在扩展写作 (WE, SST, SWT) 中表现出色，在短写作 (WFD, FIB-RW) 中表现良好。\n听力 (71): 适中，需要提升单项任务 (MCM-L, MCS-L)。\n口语 (69): 在短口语 (RA, RS, ASQ) 中表现较弱，在扩展口语 (DI, RTS) 中表现较好。\n阅读 (67): 最弱技能，尤其在理解任务中表现不佳。",contentJa:"ライティング (89): 長文ライティング (WE, SST, SWT) で優れた成績、短文 (WFD, FIB-RW) も良好。\nリスニング (71): 中程度、単独スキルタスク (MCM-L, MCS-L) の改善が必要。\nスピーキング (69): 短文 (RA, RS, ASQ) が弱く、長文 (DI, RTS) の方が良好。\nリーディング (67): 最も弱いスキル、特に読解タスクで苦戦。",name:"Good at WE/SST/SWT, Improve RS/RA/RO/MCM",nameZh:"在 WE/SST/SWT 中表现出色，需要提升 RS/RA/RO/MCM",nameJa:"WE/SST/SWT が得意、RS/RA/RO/MCM の向上が必要",src:{src:"/pte-crx-page//_next/static/media/sample2.2ef80bc5.png",height:958,width:836,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAADFBMVEXl7/jR5O7c6vXU6/VJDS8uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nFWLsQ0AMAyDDP7/5ypRlrIgBpJDUMduT0YDbfkszLDfAwetAEFbSRjpAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},{id:"2",content:"Listening: Strong in Single-skill tasks (MCM-L, MCS-L, SMW), needs attention in Multiple-skills tasks (WFD).\nSpeaking: Excellent performance in both Extended Speaking (DI, RTS) and Short Speaking tasks (RA, RS, ASQ).\nReading: Outstanding in Single-skill Comprehension (MCM-R, MCS-R, RO) and Multiple-skills (FIB-R, FIB-RW).\nWriting: Strong in Extended Writing (WE, SST, SWT) and Open Response, room for improvement in Short Writing (WFD, FIB-RW).",contentZh:"听力: 在单项任务 (MCM-L, MCS-L, SMW) 中表现出色，需要关注多项任务 (WFD)。\n口语: 在扩展口语 (DI, RTS) 和短口语 (RA, RS, ASQ) 中表现出色。\n阅读: 在单项理解任务 (MCM-R, MCS-R, RO) 和多项任务 (FIB-R, FIB-RW) 中表现出色。\n写作: 在扩展写作 (WE, SST, SWT) 和开放式回答中表现出色，但在短写作 (WFD, FIB-RW) 中需要改进。",contentJa:"リスニング: 単独スキル (MCM-L, MCS-L, SMW) が強く、複合スキル (WFD) に注意が必要。\nスピーキング: 長文 (DI, RTS) と短文 (RA, RS, ASQ) の両方で優れたパフォーマンス。\nリーディング: 単独読解 (MCM-R, MCS-R, RO) と複合スキル (FIB-R, FIB-RW) で優秀。\nライティング: 長文 (WE, SST, SWT) と自由回答で強いが、短文 (WFD, FIB-RW) に改善の余地あり。",name:"Balanced High Scorer, Exceptional in Reading/Speaking",nameZh:"平衡的高分选手，阅读/口语表现出色",nameJa:"バランスの取れた高得点者、リーディング/スピーキングが特に優秀",src:{src:"/pte-crx-page//_next/static/media/sample1.b6e6c66c.png",height:1151,width:1007,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAADFBMVEXm7/jX6fLe7PXQ5+/ipC0+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nD3HsREAIACEMOD339mz0HSBR0vIfik2dbKlC2f3BNUBB0AAR2zAJLQAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}},{id:"1",content:"Writing (90): Strongest skill with perfect scores in all areas - WE, SST, SWT.\nSpeaking (90): Excellent in short tasks (RA, RS, ASQ), slightly lower in Extended Speaking (DI, RTS).\nListening (85): Good but needs improvement in MCM-L and MCS-L comprehension tasks.\nReading (81): Relatively weakest skill, particularly in RO, MCM-R, MCS-R, and FIB-R tasks.",contentZh:"写作 (90): 最强技能，在所有领域 (WE, SST, SWT) 中表现出色。\n口语 (90): 在短任务 (RA, RS, ASQ) 中表现出色，在扩展口语 (DI, RTS) 中稍逊一筹。\n听力 (85): 表现良好，但需要提升单项理解任务 (MCM-L, MCS-L)。\n阅读 (81): 相对较弱，尤其在 RO, MCM-R, MCS-R, 和 FIB-R 任务中表现不佳。",contentJa:"ライティング (90): 全分野 (WE, SST, SWT) で完璧なスコアを記録した最強スキル。\nスピーキング (90): 短文タスク (RA, RS, ASQ) で優秀、長文 (DI, RTS) でやや低め。\nリスニング (85): 良好だが、MCM-L と MCS-L の読解タスクで改善が必要。\nリーディング (81): 相対的に最も弱く、特に RO, MCM-R, MCS-R, FIB-R タスクで課題あり。",name:"Excellent in Most Skills, Focus on RO/MCM-R/FIB-R",nameZh:"在大多数技能中表现出色，关注 RO/MCM-R/FIB-R",nameJa:"ほとんどのスキルで優秀、RO/MCM-R/FIB-R に焦点を",src:{src:"/pte-crx-page//_next/static/media/sample3.97691ad9.png",height:868,width:749,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAFVBMVEXS6PHn8fnj7vfc6vbX7PTL5O3X4fDDqisoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nBWIyQ0AMAyD8NHsP3LlBwKBJNsid8l53uFo3PAeMGj7uu6eY6X6E6YAmlsG54QAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}}],K=()=>{let{t:e}=(0,A.Bd)("home"),t=(0,c.useRef)(null),a=(0,g.W)(t,{once:!0,amount:.3});return(0,n.jsxs)("div",{ref:t,children:[(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,ease:"easeOut"},children:(0,n.jsx)("div",{className:"mt-10 text-3xl font-bold",children:e("Samples")})}),(0,n.jsx)(f.P.div,{initial:{opacity:0,y:20},animate:{opacity:a?1:0,y:a?0:20},transition:{duration:.5,delay:.2,ease:"easeOut"},children:(0,n.jsx)(G,{testimonials:J,autoplay:!0})})]})};function q(){return(0,n.jsx)("div",{className:"flex flex-col items-center justify-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-300",children:(0,n.jsxs)("div",{className:"container p-4",children:[(0,n.jsxs)("div",{className:"mt-6 flex flex-wrap gap-4",children:[(0,n.jsx)(y,{}),(0,n.jsx)(S,{})]}),(0,n.jsx)(K,{}),(0,n.jsx)(M,{}),(0,n.jsx)(c.Suspense,{children:(0,n.jsx)(F,{})}),(0,n.jsx)(H,{})]})})}},89039:(e,t,a)=>{"use strict";a.d(t,{P:()=>r,cn:()=>i});var n=a(669),s=a(85250);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.QP)((0,n.$)(t))}let r="/pte-crx-page"},61272:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});let n={src:"/pte-crx-page//_next/static/media/logo.54a1cc06.svg",height:128,width:128,blurWidth:0,blurHeight:0}}},e=>{var t=t=>e(e.s=t);e.O(0,[785,549,613,116,54,175,543,403,112,721,59,358],()=>t(71828)),_N_E=e.O()}]);