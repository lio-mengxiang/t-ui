(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22836,92176,e=>{"use strict";var t=e.i(65504),n=e.i(51849);let r=(0,n.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M40 41L44 21H8.8125L4 41H40Z",fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconOpenFileLine",0,r],22836);let s=(0,n.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 12L31 12",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 20L31 20",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 28H23",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z",fill:"none"}),(0,t.jsx)("path",{d:"M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconSearchFileLine",0,s],92176)},37284,e=>{"use strict";var t=e.i(65504);let n=(0,e.i(51849).createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{strokeWidth:"4",d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"})})});e.s(["IconInfoFileLine",0,n])},41870,e=>{"use strict";var t=e.i(22221);let n=(0,t.createContext)({checked:!1});var r=e.i(65504),s=e.i(2157);let o=(0,t.createContext)({type:"radio"}),i={RadioContext:n,Root:function(e){let i=(0,t.useContext)(o),a=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:i}),{disabled:c,readonly:l,children:u,value:d,checked:x,onChange:h,...p}=a,m=(0,t.useRef)(null),[g,f]=(0,s.useMergeValue)(!1,{value:x,defaultValue:a.defaultChecked});return(0,r.jsx)(n.Provider,{value:{checked:g,disabled:c,readonly:l},children:(0,r.jsxs)("label",{...p,onClick:function(e){c||l?e.preventDefault():p?.onClick?.(e)},"aria-disabled":!!c,"aria-readonly":!!l,"aria-checked":!!g,children:[(0,r.jsx)("input",{ref:m,disabled:!!c,value:d,type:"radio",checked:!!g,onChange:t=>{t.persist(),t.stopPropagation(),c||l||(i.group?i?.onChangeValue?.(d,t):"checked"in e||g||f(!0),g||h?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!l}),u]})})},Group:function(e){let{name:t,children:n,type:i="radio",disabled:a,readonly:c,onChange:l,...u}=e,[d,x]=(0,s.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...u,children:(0,r.jsx)(o.Provider,{value:{onChangeValue:(t,n)=>{t!==d&&("value"in e||x(t),l?.(t,n))},type:i,value:d,disabled:a,readonly:c,group:!0,name:t},children:n})})}};e.s(["Radio",()=>i],41870)},75535,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},35680,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}e.s(["default",()=>t])},13434,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},73850,e=>{"use strict";var t=e.i(65504);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},65917,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return u},getImageProps:function(){return l}};for(var s in r)Object.defineProperty(n,s,{enumerable:!0,get:r[s]});let o=e.r(33982),i=e.r(93195),a=e.r(16482),c=o._(e.r(37320));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/t-ui/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=a.Image},42090,(e,t,n)=>{t.exports=e.r(65917)},18694,10780,28841,51809,16520,e=>{"use strict";var t=e.i(65504);e.i(90850);var n=e.i(21990);let r=e=>"string"==typeof e?e:void 0;function s({children:e,subheading:n}){return(0,t.jsxs)("h1",{className:"font-medium mb-8 text-[36px]",id:r(e),children:[e,(0,t.jsx)("div",{className:"text-lg font-normal text-color-400",children:n})]})}function o({children:e}){return(0,t.jsx)("h2",{className:"font-medium mb-8 mt-8 text-[28px]",id:r(e),children:e})}function i({children:e,className:s}){return(0,t.jsx)("h3",{className:(0,n.cs)("font-medium mb-8 mt-8 text-[20px]",s),id:r(e),children:e})}function a({children:e,sub:n}){return(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)(i,{className:"mb-2",children:e}),(0,t.jsx)("div",{className:"text-[13px]",children:n})]})}function c({children:e}){return(0,t.jsx)("h4",{className:"font-medium mb-8 mt-8 text-[16px]",id:r(e),children:e})}function l({children:e}){return(0,t.jsx)("h5",{className:"font-medium mb-8 mt-8 text-[14px]",id:r(e),children:e})}function u({children:e}){return(0,t.jsx)("h6",{className:"font-medium mb-8 mt-8 text-[12px]",id:r(e),children:e})}e.s(["H1",()=>s,"H2",()=>o,"H3",()=>i,"H3Sub",()=>a,"H4",()=>c,"H5",()=>l,"H6",()=>u],10780);var d=e.i(53027);function x({children:e}){return(0,t.jsx)("ul",{className:"list-disc p-0 m-6 space-y-4",children:e})}function h({children:e}){return(0,t.jsx)("ol",{className:"list-decimal p-0 m-6 space-y-4",children:e})}var p=e.i(42090),m=e.i(39943);function g({src:e,alt:r,width:s,height:o,fill:i,style:a,containerClassName:c,imageClassName:l}){return(0,t.jsx)("div",{className:(0,n.cs)(`w-full h-96 relative mt-8 mb-8 ${c}`),children:(0,t.jsx)(p.default,{src:(0,m.getImageUrl)(e),alt:r,width:s,height:o,style:a,fill:i,className:(0,n.cs)("object-cover",l)})})}e.s(["ImageTypography",()=>g],28841);var f=e.i(69457),j=e.i(73850);function C(){return(0,t.jsx)(f.Avatar,{text:"孟祥_成都 🔥",des:"前端技术专家，全栈开发工程师",children:(0,t.jsx)(j.IconMLogo,{})})}e.s(["AvatarM",()=>C],51809);var v=e.i(57030);e.i(78806);var b=e.i(186),k=e.i(61750),y=e.i(96183);function T(e){return{h1:({children:e})=>(0,t.jsx)(s,{children:e}),h2:({children:e})=>(0,t.jsx)(o,{children:e}),h3:({children:e})=>(0,t.jsx)(i,{children:e}),h4:({children:e})=>(0,t.jsx)(c,{children:e}),h5:({children:e})=>(0,t.jsx)(l,{children:e}),h6:({children:e})=>(0,t.jsx)(u,{children:e}),p:({children:e})=>(0,t.jsx)(d.Paragraph,{children:e}),ol:({children:e})=>(0,t.jsx)(h,{children:e}),ul:({children:e})=>(0,t.jsx)(x,{children:e}),code:({children:e,className:n})=>n?.startsWith("language-")?(0,t.jsx)(v.CodeBlock,{language:n,code:e}):(0,t.jsx)(b.Code,{children:e}),a:e=>(0,t.jsx)(k.Link,{...e}),pre:({children:e})=>(0,t.jsx)(y.Pre,{children:e}),...e}}e.s([],16520),e.s(["useMDXComponents",()=>T],18694)},46030,e=>{"use strict";var t=e.i(22221);let n=(0,t.createContext)({checked:!1});var r=e.i(65504),s=e.i(2157);let o=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),i={CheckboxContext:n,Root:function(e){let i=(0,t.useContext)(o),{onGroupChange:a}=i,c=function({props:e,context:t}){let n={...e};return t.isCheckboxGroup&&(n.checked=-1!==t.checkboxGroupValue.indexOf(e.value),n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:i}),{disabled:l,children:u,readonly:d,value:x,checked:h,onChange:p,indeterminate:m,...g}=c,f=(0,t.useRef)(null),[j,C]=(0,s.useMergeValue)(!1,{value:h,defaultValue:c.defaultChecked});return(0,t.useEffect)(()=>(i.registerValue(x),()=>{i.unRegisterValue(x)}),[x]),(0,r.jsx)(n.Provider,{value:{checked:j,disabled:l,indeterminate:m,readonly:d},children:(0,r.jsxs)("label",{...g,onClick:function(e){l||d?e.preventDefault():g?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!d,"aria-checked":!!j,children:[(0,r.jsx)("input",{value:x,disabled:!!l,ref:f,checked:!!j,onChange:function(e){e.persist(),e.stopPropagation(),l||d||(i.isCheckboxGroup?a?.(c.value,e.target.checked,e):C(e.target.checked),p?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),u]})})},IconCheck:function({className:e}){return(0,r.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,r.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:n,children:i,readonly:a,onChange:c,...l}=e,[u,d]=(0,s.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[x,h]=(0,t.useState)([]);return(0,r.jsx)("div",{role:"checkboxgroup",...l,children:(0,r.jsx)(o.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:u,onGroupChange:function(e,t,n){if(!Array.isArray(u))return void console.error("Checkbox.Group value must be an array");let r=u?.slice()||[];t?r.push(e):r.splice(u.indexOf(e),1),d(r),c?.(r.filter(e=>x.indexOf(e)>-1),n)},disabled:n,readonly:a,registerValue:e=>{h(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{h(t=>t.filter(t=>t!==e))}},children:i})})}};e.s(["Checkbox",()=>i],46030)},99975,e=>{"use strict";var t=e.i(65504),n=e.i(18694);e.i(16520);var r=e.i(57030),s=e.i(10780),o=e.i(186);e.i(89065);var i=e.i(4783);let a=`
function App() {
  return (
    <TButton
        status="primary"
        onClick={() =>
          TMessage.info({
            message: "这是一条通知",
          })
        }
      >
        Open Info Message
    </TButton>
  );
}
`;function c(){return(0,t.jsx)(i.CodePreview,{code:a})}let l=`
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          TMessage.info({
            duration: 4,
            message: '这是一条 info message',
          });
        }}
      >
        Info
      </TButton>
      <TButton
        status="warning"
        onClick={() => {
          TMessage.warning({
            duration: 4,
            message: '这是一条 warning message',
          });
        }}
      >
        Warning
      </TButton>
       <TButton
        status="success"
        onClick={() => {
          TMessage.success({
            duration: 4,
            message: '这是一条 success message',
          });
        }}
      >
        Success
      </TButton>
      <TButton
        status="error"
        onClick={() => {
          TMessage.error({
            duration: 4,
            message: '这是一条 error message',
          });
        }}
      >
        Error
      </TButton>
       <TButton
        status="default"
        onClick={() => {
          TMessage.loading({
            duration: 4,
            message: '这是一条 loading message',
          });
        }}
      >
        Loading
      </TButton>
    </div>
  );
}
`;function u(){return(0,t.jsx)(i.CodePreview,{code:l})}let d=`
const Card = () => {
  return (
    <div className="max-w-sm w-full rounded-2xl border border-purple-100 bg-white shadow-md p-5 space-y-4 pointer-events-auto mb-2">
      <div className="flex items-center space-x-2">
        <IconTLogo className="w-6 h-6" />
        <span className="font-medium text-gray-700">Card</span>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900">UI Library</h2>
        <p className="text-sm text-gray-500">$3,500 – 5,500 net</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-600 font-medium">Project Based</span>
        <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">Remote</span>
        <span className="px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600 font-medium">Full Time</span>
      </div>

      <div className="text-xs text-gray-400">Posted 2 days ago</div>
    </div>
  );
};

function App() {
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastStore.add({
            duration: 3,
            component: <Card />,
          })
        }
      >
        custom message
    </TButton>
  );
}
`;function x(){return(0,t.jsx)(i.CodePreview,{code:d})}let h=`
function App() {
  let index = 1;
  return (
    <TButton
        status="primary"
        onClick={() =>
          toastBottomStore.add({
            duration: 3,
            component: <TAlert message={\`这是第\${index++}条通知\`} title="Alter" containerClassName="pb-2" />,
          })
        }
      >
        custom position
    </TButton>
  );
}
`;function p(){return(0,t.jsx)(i.CodePreview,{code:h})}let m=`
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          TMessage.info({
            duration: null,
            showClose: true,
            message: '这是一条 info message',
          });
        }}
      >
        Close Effect
      </TButton>
    </div>
  );
}`;function g(){return(0,t.jsx)(i.CodePreview,{code:m})}let f=`
function App() {
  return (
    <div className="flex gap-x-2">
      <TButton
        status="primary"
        onClick={() => {
          const id = TMessage.loading({
            duration: null,
            message: '这是一条 info message',
          });
          
          setTimeout(() => {
            TMessage.update(id, {
              type: 'success',
              duration: 4,
              message: '请求成功',
            });
          }, 3000);
        }}
      >
        Update Info
      </TButton>
    </div>
  );
}`;function j(){return(0,t.jsx)(i.CodePreview,{code:f})}function C(e){let i={code:"code",li:"li",p:"p",ul:"ul",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["最简单的例子。",(0,t.jsx)(o.Code,{children:"切记"}),"一定要看 ",(0,t.jsx)(o.Code,{children:"必读指南"}),"中",(0,t.jsx)(o.Code,{children:"引入和使用 toast"}),"章节，了解如何引入",(0,t.jsx)(o.Code,{children:"ToastProvider"}),"。"]}),children:"基本用法"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["全局提示有 5 种不同的类型，分别为：",(0,t.jsx)(o.Code,{children:"info"}),"、",(0,t.jsx)(o.Code,{children:"success"}),"、",(0,t.jsx)(o.Code,{children:"warning"}),"、",(0,t.jsx)(o.Code,{children:"error"}),"、",(0,t.jsx)(o.Code,{children:"loading"})]}),children:"不同类型"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可以使用基本的",(0,t.jsx)(o.Code,{children:"createToastStore"}),"方法来自定义 toast 组件, 这里我们定义另一种"]}),children:"自定义组件"}),"\n",(0,t.jsx)(x,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Code,{children:"message"})," 组件的位置完全可以自己定义，请在",(0,t.jsx)(o.Code,{children:"必读指南"}),"里了解，配置位置的方式，以下的 ",(0,t.jsx)(o.Code,{children:"message"}),"我们定位在了右下角"]}),children:"位置"}),"\n",(0,t.jsxs)(i.p,{children:["以下就是配置 ",(0,t.jsx)(i.code,{children:"ToastProvider"})," 的代码，注意"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"bottom-28"}),"(定向到底部)，",(0,t.jsx)(i.code,{children:"items-end pr-12"}),"(定位到右边)，所以就是 ",(0,t.jsx)(i.code,{children:"右下方"})]}),"\n",(0,t.jsxs)(i.li,{children:["并且 ",(0,t.jsx)(i.code,{children:"direction"})," 设为 ",(0,t.jsx)(i.code,{children:"bottom-to-top"})," ，所以就是从下往上弹出"]}),"\n",(0,t.jsxs)(i.li,{children:["最后 ",(0,t.jsx)(i.code,{children:"stack"})," 设为 ",(0,t.jsx)(i.code,{children:"true"})," ，并且我们使用 ",(0,t.jsx)(i.code,{children:"stack"})," 模式"]}),"\n"]}),"\n",(0,t.jsx)(r.CodeBlock,{code:`export const toastBottomStore = createToastStore({ maxCount: 6 });

<ToastProvider
  store={toastBottomStore}
  containerProps={{
    className: cs('w-full fixed bottom-12 flex flex-col items-end pr-12 pointer-events-none', \`\${TOAST_Z_INDEX}\`),
  }}
  direction="bottom-to-top"
/>`,language:"tsx",className:"mb-12"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["传入",(0,t.jsx)(o.Code,{children:"showClose"}),"可以让 message 显示关闭按钮。点击关闭按钮可以手动关闭 message"]}),children:"手动控制关闭"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(s.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过指定 ",(0,t.jsx)(o.Code,{children:"id"}),"，可以更新已经存在的 ",(0,t.jsx)(o.Code,{children:"message"})," 内容。注意， ",(0,t.jsx)(o.Code,{children:"duration"})," 值为 ",(0,t.jsx)(o.Code,{children:"null"})," 会取消当前",(0,t.jsx)(o.Code,{children:"message"})," 消息自动关闭功能"]}),children:"更新内容"}),"\n",(0,t.jsx)(j,{})]})}function v(e={}){let{wrapper:r}={...(0,n.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(C,{...e})}):C(e)}function b(){return(0,t.jsx)(v,{})}e.s(["HowMakeCssButton",()=>b],99975)}]);