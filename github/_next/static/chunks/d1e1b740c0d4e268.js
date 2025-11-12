(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,n,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var n=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,n.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function n(e,n){if(null==e)return{};var o={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==n.indexOf(t))continue;o[t]=e[t]}return o}e.s(["default",()=>n])},37215,e=>{"use strict";function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>n])},22480,e=>{"use strict";let n=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,n])},98319,e=>{"use strict";var n=e.i(64334);function o(...e){return(0,n.useCallback)(n=>{e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})},e)}e.s(["useComposedRefs",()=>o])},88036,59013,e=>{"use strict";var n=e.i(45100),o=e.i(64334),t=e.i(22480);function i(e){let n=(0,o.useRef)(null);return n.current=e,(0,o.useCallback)((...e)=>n.current?.(...e),[])}e.s(["useEvent",()=>i],59013);var c=e.i(96224);function r(e,n){try{return e.querySelector(n)}catch(e){return null}}function s({scrollContainer:e,targetId:n,offset:o,isScrolling:t}){var i,s;if(!n)return;let l=r(document,`#${CSS.escape(n)}`);if(!l)return;let d=e.current,a=((void 0===(i=d)&&(i=window),i)&&(i===window?Math.ceil(window.pageYOffset):i.scrollTop)||0)+((e,n)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?n&&n!==window?o.top-n.getBoundingClientRect().top:(n=e.ownerDocument.documentElement,o.top-n.clientTop):o.top})(l,d)+o;(t.current=!0,(0,c.isWindow)(d))?d.scrollTo((void 0===(s=d)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,a):d.scrollTop=a}function l({targetId:e,linkMap:n,wrapperRef:o,currentId:t,setCurrentId:i,onChange:c}){e&&o.current&&n.current.get(e)&&e!==t&&i(e).then(()=>{c?.(e,t)})}var d=e.i(98319);let a=(0,o.forwardRef)((e,a)=>{let{scrollContainer:u,offset:h=0,children:p,onChange:x,queryKey:j="anchor-id",isCloseInitAnchor:g,...m}=e,{currentId:C,onLinkClick:f,wrapperRef:v,linkMap:w}=function({propScrollContainer:e,onChange:n,offset:t,queryKey:d,isCloseInitAnchor:a}){var u;let h,p,x=(0,o.useRef)(null),j=(0,o.useRef)(null),g=(0,o.useRef)(new Map),m=(0,o.useRef)(!1),[C,f]=function(e){let[n,t]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{n.resolve(n.value)},[n]),[n.value,e=>new Promise(n=>{t(o=>{let t=e;return"function"==typeof e&&(t=e(o.value)),{value:t,resolve:n}})})]}(0),v=i(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:n}){let o=n.current,t=((0,c.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),i=Array.from(e.current.keys()),s=[];for(let e of i){let n=r(document,"#"+CSS.escape(e));if(n){let{top:e}=n.getBoundingClientRect(),i=(0,c.isWindow)(o)?e:e-t.top;i>=0&&s.push({element:n,top:i})}}return 0===s.length?null:s.reduce((e,n)=>e.top<=n.top?e:n).element}({linkMap:g,scrollContainer:j});e?.id&&l({targetId:e.id,linkMap:g,wrapperRef:x,currentId:C,setCurrentId:f,onChange:n})}),w=i((u=()=>{v(),m.current=!1},h=null,(p=(...e)=>{h||(h=setTimeout(()=>{h=null,u(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},p));return(0,o.useEffect)(()=>(j.current=(0,c.isString)(e)?r(document,e):e||window,j.current?.addEventListener("scroll",w),()=>{j.current?.removeEventListener("scroll",w)}),[w,e]),(0,o.useEffect)(()=>{if(!a)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(d);e&&(l({targetId:e,linkMap:g,wrapperRef:x,currentId:C,setCurrentId:f,onChange:n}),s({scrollContainer:j,targetId:e,offset:t,isScrolling:m}))},[]),{onScroll:w,currentId:C,onLinkClick:function(e,o){e.preventDefault(),l({targetId:o,linkMap:g,wrapperRef:x,currentId:C,setCurrentId:f,onChange:n}),s({scrollContainer:j,targetId:o,offset:t,isScrolling:m})},wrapperRef:x,scrollContainer:j,linkMap:g}}({propScrollContainer:u,onChange:x,offset:h,queryKey:j,isCloseInitAnchor:g});return(0,n.jsx)(t.AnchorContext.Provider,{value:{currentId:C,linkMap:w,onLinkClick:f},children:(0,n.jsx)("div",{...m,ref:(0,d.useComposedRefs)(v,a),children:p})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var n=e.i(45100),o=e.i(64334),t=e.i(22480),i=e.i(98319);let c=(0,o.forwardRef)((e,c)=>{let{onLinkClick:r,linkMap:s,currentId:l}=(0,o.useContext)(t.AnchorContext),{onClick:d,targetId:a,children:u,className:h,activeClassName:p,...x}=e,j=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=j.current,a&&s.current.set(a,e),()=>{s.current.delete(a)}},[a,s]),(0,n.jsx)("div",{ref:(0,i.useComposedRefs)(c,j),...x,onClick:e=>{e.stopPropagation(),d?.(e),r?.(e,a)},"data-target-id":a,className:l===a?p:h,children:u})});e.s(["AnchorLink",0,c],69438)},93562,e=>{"use strict";var n=e.i(88036),o=e.i(69438),t=e.i(22480);let i={Root:n.Anchor,Link:o.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>i])},53827,56245,e=>{"use strict";var n=e.i(45100),o=e.i(93562),t=e.i(37812);function i({items:e,...i}){return(0,n.jsx)(o.Anchor.Root,{...i,className:"sticky top-[90px] overflow-y-auto h-[calc(100vh-100px)]",children:function e(i){return Array.isArray(i)?i.map((i,c)=>(0,n.jsxs)(o.Anchor.Link,{targetId:i.text,children:[(0,n.jsx)(t.LinkItem,{item:i}),e(i.items)]},i.text||c)):null}(e)})}e.s(["Catalog",()=>i],56245),e.s([],53827)},63652,e=>{"use strict";var n=e.i(45100),o=e.i(18694);e.i(82928);var t=e.i(72304),i=e.i(47445),c=e.i(69389);function r(e){let r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.H1,{subheading:"Input 组件难点解析",children:"探索 React 中文输入下的惊人问题，你绝对不能错过！"}),"\n",(0,n.jsx)(t.ImageTypography,{src:"/input/input.webp",fill:!0,alt:"input"}),"\n",(0,n.jsx)(r.h2,{children:"前言"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Input"})," 组件大家都用过，是吧，但是你有没有想过这样一个场景，如下图，我正在搜索数据"]}),"\n",(0,n.jsxs)(r.p,{children:["同时组件上注册了 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件，然后边输入，底下会显示你搜索相关的内容，"]}),"\n",(0,n.jsx)(t.ImageTypography,{src:"/input/example1.webp",fill:!0,alt:"input",imageClassName:"object-contain"}),"\n",(0,n.jsxs)(r.p,{children:["但是有一个问题，输入中文的时候，比如你输入三国的 ",(0,n.jsx)(r.code,{children:"三"})," 字，要先输入 ",(0,n.jsx)(r.code,{children:"san"})," 然后才出现汉字 ",(0,n.jsx)(r.code,{children:"三"})]}),"\n",(0,n.jsx)(t.ImageTypography,{src:"/input/example2.webp",width:400,height:200,alt:"input",imageClassName:"object-contain",containerClassName:"h-[200px]"}),"\n",(0,n.jsxs)(r.p,{children:["可问题来了，",(0,n.jsx)(r.code,{children:"onChange"})," 事件监听的是 ",(0,n.jsx)(r.code,{children:"san"}),"，只要 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件触发，就会开始向后端请求数据，那么输入 ",(0,n.jsx)(r.code,{children:"san"})," 意味着，在 ",(0,n.jsx)(r.code,{children:"s"}),", ",(0,n.jsx)(r.code,{children:"sa"})," 和 ",(0,n.jsx)(r.code,{children:"san"})," 的时候，分别发了三次请求。\n其实我们根本不想这样，我们想的是等中文显示在输入框，也就是输入完 ",(0,n.jsx)(r.code,{children:"三"})," 这个字的时候才搜索。加上请求后端接口本身就是异步的，意味着 ",(0,n.jsx)(r.code,{children:"s"}),", ",(0,n.jsx)(r.code,{children:"sa"})," 和 ",(0,n.jsx)(r.code,{children:"san"})," 三个请求发出去，返回的顺序也不一定，所以这是一个很严重的问题。\n异步问题我们暂且不谈，一般用 ",(0,n.jsx)(r.code,{children:"debounce"})," 去解决，这种方式不是治本的，我建议最好上 ",(0,n.jsx)(r.code,{children:"rxjs"}),"(或者自己封装一个能取消之前请求操作的工具函数)来从根上解决这个问题。"]}),"\n",(0,n.jsx)(r.h2,{children:"解决方案"}),"\n",(0,n.jsx)(r.p,{children:"这种问题在英文输入法是没有任务问题的，所以参考国外的组件库是不行的，拿国内来说"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["阿里的 ",(0,n.jsx)(r.code,{children:"ant design"}),"、字节的 ",(0,n.jsx)(r.code,{children:"semi design"})," 是完全不管这个问题的，所以你在远程搜索的时候，交互很糟糕"]}),"\n",(0,n.jsxs)(r.li,{children:["腾讯的 ",(0,n.jsx)(r.code,{children:"tdesign"})," 处理了此问题，但在非 ",(0,n.jsx)(r.code,{children:"chrome"})," 浏览器下，会触发两次 ",(0,n.jsx)(r.code,{children:"onChange"})," ,也就是中文输入会执行两次远程搜索，我觉得这个体验也不好，但起码用户侧能轻松解决，就是对比两次搜索值是否相同，不同才去搜索"]}),"\n",(0,n.jsxs)(r.li,{children:["字节 ",(0,n.jsx)(r.code,{children:"arco design"})," 完美解决这个问题"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["现在我们把这个问题的解决思路先描述一下。这里涉及到两个事件 ",(0,n.jsx)(r.code,{children:"Compositionstart"})," 和 ",(0,n.jsx)(r.code,{children:"Compositionend"})," 事件。"]}),"\n",(0,n.jsx)(r.h2,{children:"Composition 事件"}),"\n",(0,n.jsxs)(r.p,{children:["我们主要借助 ",(0,n.jsx)(r.code,{children:"Composition"})," 事件中的 ",(0,n.jsx)(r.code,{children:"compositionstart"})," 和 ",(0,n.jsx)(r.code,{children:"compositionend"})," 事件来解决这个问题。"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"compositionstart"})," 事件在用户开始进行非直接输入的时候触发（非直接输入就是上面提到的 ",(0,n.jsx)(r.code,{children:"san"})," 这个过程），而在非直接输入结束，也即用户点选候选词或者点击 ",(0,n.jsx)(r.code,{children:"选定"})," 按钮之后，比如按 ",(0,n.jsx)(r.code,{children:"回车键"}),"，会触发 ",(0,n.jsx)(r.code,{children:"compositionend"})," 事件。\n举个例子，还是上面输入三这个字的过程，当你输入 ",(0,n.jsx)(r.code,{children:"s"})," 的时候，已经打开了中文输入法，此时 ",(0,n.jsx)(r.code,{children:"compositionstart"})," 事件触发了，当你输入完三并且确认的时候，",(0,n.jsx)(r.code,{children:"compositionend"}),"事件触发。\n还有一个",(0,n.jsx)(r.code,{children:"compositionupdate"}),"事件， 此事件触发于字符被输入到一段文字的时候，如在用户开始输入拼音到确定结束的过程都会触发该事件。"]}),"\n",(0,n.jsxs)(r.p,{children:["所以说",(0,n.jsx)(r.code,{children:"compositionstart"}),"与",(0,n.jsx)(r.code,{children:"compositionend"}),"都只会会被触发一次，而",(0,n.jsx)(r.code,{children:"compositionupdate"}),"则是有可能多次触发。"]}),"\n",(0,n.jsx)(r.h2,{children:"受控和非受控组件"}),"\n",(0,n.jsxs)(r.p,{children:["讲后面的知识点之前，我们需要铺垫一个基础知识，就是了解什么是 ",(0,n.jsx)(r.code,{children:"受控"})," 和 ",(0,n.jsx)(r.code,{children:"非受控组件"}),"。我们就那 ",(0,n.jsx)(r.code,{children:"input"})," 组件举例。"]}),"\n",(0,n.jsx)(r.h3,{children:"受控组件"}),"\n",(0,n.jsxs)(r.p,{children:["受控组件的值是由 ",(0,n.jsx)(r.code,{children:"React"})," 来管理的，每次输入触发 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件。"]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}                      // React 通过 state 控制值
      onChange={(e) => setValue(e.target.value)} // 每次输入时更新 state
    />
  );
}`,language:"jsx"}),"\n",(0,n.jsx)(r.p,{children:"特点："}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"value"})," 完全由 ",(0,n.jsx)(r.code,{children:"React 状态驱动"}),"。"]}),"\n",(0,n.jsxs)(r.li,{children:["任何用户输入都会触发 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件，然后更新 ",(0,n.jsx)(r.code,{children:"state"}),"。"]}),"\n",(0,n.jsxs)(r.li,{children:["React 再通过 ",(0,n.jsx)(r.code,{children:"value={state}"})," 渲染出新值。"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"注意："}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["如果设置了 ",(0,n.jsx)(r.code,{children:"value"})," 却 没有 ",(0,n.jsx)(r.code,{children:"onChange"}),"，React 会发警告。"]}),"\n",(0,n.jsx)(r.li,{children:"一旦组件是受控的，就不能再变回非受控（反之亦然）。"}),"\n"]}),"\n",(0,n.jsx)(r.h3,{children:"非受控组件"}),"\n",(0,n.jsxs)(r.p,{children:["受控组件的值是由 ",(0,n.jsx)(r.code,{children:"DOM"})," 来管理的，使用 ",(0,n.jsx)(r.code,{children:"defaultValue"})," 初始化，通过 ",(0,n.jsx)(r.code,{children:"ref"})," 读取值。"]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(inputRef.current.value); // 从 DOM 读取值
  };

  return (
    <>
      <input defaultValue="hello" ref={inputRef} />
      <button onClick={handleSubmit}>提交</button>
    </>
  );
}`,language:"jsx"}),"\n",(0,n.jsx)(r.p,{children:"特点:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["使用 ",(0,n.jsx)(r.code,{children:"defaultValue"})," 设定初始值。"]}),"\n",(0,n.jsxs)(r.li,{children:["输入变化由 ",(0,n.jsx)(r.code,{children:"DOM"})," 自己维护，",(0,n.jsx)(r.code,{children:"React"})," 不干涉。"]}),"\n",(0,n.jsxs)(r.li,{children:["用 ",(0,n.jsx)(r.code,{children:"ref"})," 访问当前输入值"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["但这里因为我们是想自己控制是否触发 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件， 在非受控状态是无法做到的，所以我们内部的 ",(0,n.jsx)(r.code,{children:"input"})," 组件其实最终无论外界是用受控还是非受控的方式，我们都转化为了受控组件。"]}),"\n",(0,n.jsx)(r.h2,{children:"基本解决思路"}),"\n",(0,n.jsxs)(r.p,{children:["以利用",(0,n.jsx)(r.code,{children:"CompositionStart"}),"作为一个信号，如果正在输入中文，",(0,n.jsx)(r.code,{children:"change"}),"事件中的代码就先不要运行，等",(0,n.jsx)(r.code,{children:"compositionend"}),"触发时，接着的",(0,n.jsx)(r.code,{children:"change"}),"事件才可以运行其中的代码。"]}),"\n",(0,n.jsx)(r.p,{children:"示例代码如下："}),"\n",(0,n.jsxs)(r.p,{children:["首先 ",(0,n.jsx)(r.code,{children:"Input"})," 组件如下："]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`<input
  value={innerValue}
  onCompositionStart={handleCompositionStart}
  onCompositionEnd={handleCompositionEnd}
  onChange={handleChange}
/>`,language:"jsx"}),"\n",(0,n.jsxs)(r.p,{children:["然后我们看下",(0,n.jsx)(r.code,{children:"value"})," 属性的",(0,n.jsx)(r.code,{children:"innerValue"})," 是什么。"]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`// 用来记录此时是否Compositionstart事件触发了，如果触发就置为true
// Compositionend结束就置为false
const composingRef = useRef(false);

const [composingValue, setComposingValue] = useState<string>('');
// 如果启动了中文输入法，那么 innerValue 就是 composingValue
// composingValue 就是中文输入的时候比如 “三国”，你输入从 “s” 到 “sanguo”，此时 innerValue 都是 composingValue
// 除了中文输入法外，innerValue 都是 value
const innerValue = composingRef.current ? composingValue : value ?? '';`,language:"javascript"}),"\n",(0,n.jsxs)(r.p,{children:["上面可以看到 ",(0,n.jsx)(r.code,{children:"innerValue"})," 是最终渲染给 ",(0,n.jsx)(r.code,{children:"input"})," 框的 ",(0,n.jsx)(r.code,{children:"value"}),"，用户一般通过 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件获取值，所以我们在中文输入的时候，只要不触发 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件，是不是就好了！"]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`// 开始输入中文的时候把 composingRef.current 置为 true
function handleCompositionStart(e: React.CompositionEvent<HTMLInputElement>) {
    composingRef.current = true;
    const {
      currentTarget: { value },
    } = e;
  }
  // 中文输入完毕，把 composingRef.current 置为 false，并把此时输入完的值给 handleChange（handleChange 会触发 onChange）
  function handleCompositionEnd(e: React.CompositionEvent<HTMLInputElement>) {
    if (composingRef.current) {
      composingRef.current = false;
      handleChange(e);
    }
  }

function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.CompositionEvent<HTMLInputElement>) {
    let { value: newStr } = e.currentTarget;
    // 当中文输入的时候，不触发 onChange 事件，触发 setComposingValue 只是为了让输入框同步你输入的 text
    if (composingRef.current) {
      setComposingValue(newStr);
    } else {
      // 完成中文输入时同步一次 composingValue
      setComposingValue(newStr);
      // 中文输入完毕，此时触发 onChange
      onChange(newStr, { e });
    }
  }
`,language:"javascript"}),"\n",(0,n.jsx)(r.h2,{children:"你以为就解决了？ NO！"}),"\n",(0,n.jsx)(r.p,{children:"其他浏览器不会有问题，但谷歌浏览器却不行。这里要注意的是谷歌浏览器跟其他浏览器的执行顺序不同："}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["谷歌浏览器：",(0,n.jsx)(r.code,{children:"compositionstart"})," -> ",(0,n.jsx)(r.code,{children:"onChange"})," -> ",(0,n.jsx)(r.code,{children:"compositionend"})]}),"\n",(0,n.jsxs)(r.li,{children:["其他浏览器： ",(0,n.jsx)(r.code,{children:"compositionstart"})," -> ",(0,n.jsx)(r.code,{children:"compositionend"})," -> ",(0,n.jsx)(r.code,{children:"onChange"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["所以上述代码运行在谷歌浏览器的话，会有什么问题呢？一开始中文输入我们就将 ",(0,n.jsx)(r.code,{children:"composingRef.current"})," 设置为 ",(0,n.jsx)(r.code,{children:"true"}),"，最后一步 ",(0,n.jsx)(r.code,{children:"compositionend"})," 方法我们才将 ",(0,n.jsx)(r.code,{children:"composingRef.current"})," 恢复为 false,而 ",(0,n.jsx)(r.code,{children:"onChange"})," 已经执行完了， 按这个逻辑中文输入法打字都改不了 input 的 value 值。\n所以有的同学就会说，那么就专门对谷歌浏览器做一次处理就好了，例如判断是否为谷歌浏览器，在 ",(0,n.jsx)(r.code,{children:"compositionend"})," 方法最后再执行一次 ",(0,n.jsx)(r.code,{children:"onChange"})," 方法"]}),"\n",(0,n.jsx)(r.h2,{children:"还没解决？"}),"\n",(0,n.jsxs)(r.p,{children:["我们之前说了，要把 ",(0,n.jsx)(r.code,{children:"input"})," 的受控和非受控都内部都转为 ",(0,n.jsx)(r.code,{children:"受控的形式"}),"，所以外部不传 ",(0,n.jsx)(r.code,{children:"value"})," 的时候，我们依然要在内部转化为 ",(0,n.jsx)(r.code,{children:"value"})," 属性的值。怎么做呢，其实就是拦截 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件，我们用自己的 ",(0,n.jsx)(r.code,{children:"setState"})," 来更新 ",(0,n.jsx)(r.code,{children:"value"})," 属性的值。"]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`const [value, setValue]= useState(props.value)
const onChange = (value, e) => {
  if (!('value' in props)) {
    setValue(value);
  }
  props.onChange?.(value, e);
};
<input onChange={onChange}>
`,language:"jsx"}),"\n",(0,n.jsx)(r.h2,{children:"好像探讨结束了？no!"}),"\n",(0,n.jsxs)(r.p,{children:["最后一个边界 ",(0,n.jsx)(r.code,{children:"case"}),"，很烦人，比如我们还是最开始的案例，输了",(0,n.jsx)(r.code,{children:"san"}),"。"]}),"\n",(0,n.jsxs)(r.p,{children:["此时，如果我们按回车会触发键盘的",(0,n.jsx)(r.code,{children:"Enter事件"}),"，因为一般情况",(0,n.jsx)(r.code,{children:"input"}),"组件都支持",(0,n.jsx)(r.code,{children:"Enter"}),"事件处理函数作为",(0,n.jsx)(r.code,{children:"props"}),"传递给",(0,n.jsx)(r.code,{children:"input"}),"\n问题来了，这种外界传入的",(0,n.jsx)(r.code,{children:"Enter"}),"事件处理函数的目的一般都是比如校验",(0,n.jsx)(r.code,{children:"input"}),"框的值，比如格式化",(0,n.jsx)(r.code,{children:"input"}),"框的值，但是此时我们中文输入法里，这个",(0,n.jsx)(r.code,{children:"Enter"}),"只是想结束输入，而不是想校验",(0,n.jsx)(r.code,{children:"input"}),"框的值！\n所以我们还要劫持",(0,n.jsx)(r.code,{children:"onKeyDown"}),"事件，处理一下！"]}),"\n",(0,n.jsx)(r.h2,{children:"最后"}),"\n",(0,n.jsxs)(r.p,{children:["文末我会把 ",(0,n.jsx)(r.code,{children:"arco design"})," 封装的 ",(0,n.jsx)(r.code,{children:"useComposition"}),"函数分享会出来，有英文注释，很简单的英文。\n然后我们再解决一个文章开始说的问题，为什么腾讯的 ",(0,n.jsx)(r.code,{children:"Tdesign"})," 在中文输入法下，会造成两次",(0,n.jsx)(r.code,{children:"onChange"}),", ",(0,n.jsx)(r.code,{children:"arco design"})," 就能解决呢？\n其实很简单，答案在以下代码的 ",(0,n.jsx)(r.code,{children:"32"})," 行。也就是我们每次 ",(0,n.jsx)(r.code,{children:"onChange"})," 刷新值的时候，要做一个判断，如果 ",(0,n.jsx)(r.code,{children:"input"})," 的框里新的值跟旧值一样，那么就不会触发 ",(0,n.jsx)(r.code,{children:"onChange"})," 事件，这就让虽然触发两次 ",(0,n.jsx)(r.code,{children:"onChange"}),"，但是由于第二次 ",(0,n.jsx)(r.code,{children:"onChange"})," 的值跟第一次一样，所以第二次 ",(0,n.jsx)(r.code,{children:"onChange"})," 就被拒绝了。"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"useComposition"})," 完整代码如下(收藏代码吧吧，很少有库把这个问题处理的很好的):"]}),"\n",(0,n.jsx)(i.CodeBlock,{code:`import { ChangeEventHandler, CompositionEventHandler, KeyboardEventHandler, useRef, useState } from 'react';
import { InputProps, TextAreaProps } from '../interface';

interface useCompositionProps {
  value: string;
  maxLength: number;
  onChange: InputProps['onChange'];
  onKeyDown: InputProps['onKeyDown'] | TextAreaProps['onKeyDown'];
  onPressEnter: InputProps['onPressEnter'];
  normalizeHandler?: (type: InputProps['normalizeTrigger'][number]) => InputProps['normalize'];
}

/**
* Handle input text like Chinese
* chrome： compositionstart -> onChange -> compositionend
* other browser: compositionstart -> compositionend -> onChange
*/
export function useComposition({ value, maxLength, onChange, onKeyDown, onPressEnter, normalizeHandler }: useCompositionProps): {
  compositionValue: string;
  triggerValueChange: typeof onChange;
  handleCompositionStart: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleCompositionEnd: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleValueChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handleKeyDown: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
} {
  const refIsComposition = useRef(false);
  const [compositionValue, setCompositionValue] = useState('');

  const triggerValueChange: typeof onChange = (newValue, e) => {
    if (
      onChange &&
      // Prevents onchange from being triggered twice
      newValue !== value &&
      (maxLength === undefined || newValue.length <= maxLength)
    ) {
      onChange(newValue, e);
    }
  };

  return {
    compositionValue,
    triggerValueChange,
    handleCompositionStart: (e: any) => {
      refIsComposition.current = true;
    },
    handleCompositionEnd: (e: any) => {
      setCompositionValue(undefined);
      triggerValueChange(e.target.value, e);
    },
    handleValueChange: (e: any) => {
      const newValue = e.target.value;
      if (!refIsComposition.current) {
        // if e.type is compositionend event, the following content will trigger
        compositionValue && setCompositionValue(undefined);
        triggerValueChange(newValue, e);
      } else {
        refIsComposition.current = false;
        setCompositionValue(newValue);
      }
    },
    handleKeyDown: (e: any) => {
      const keyCode = e.key;
      if (!refIsComposition.current) {
        onKeyDown?.(e);
        if (keyCode === 'Enter') {
          onPressEnter?.(e);
          normalizeHandler && triggerValueChange(normalizeHandler('onPressEnter')(e.target.value), e);
        }
      }
    },
  };
}`,language:"jsx"}),"\n",(0,n.jsx)(r.h2,{children:"附录"}),"\n",(0,n.jsx)(r.h3,{children:"安装 input"}),"\n",(0,n.jsx)(i.CodeBlock,{code:`npm i @t-headless-ui/react
yarn i @t-headless-ui/react
pnpm i @t-headless-ui/react`,language:"bash"}),"\n",(0,n.jsx)(r.h3,{children:"引入和使用 input"}),"\n",(0,n.jsx)(i.CodeBlock,{code:`import { InputComponent } from '@t-headless-ui/react';

// 使用
<InputComponent />`,language:"tsx"})]})}function s(e={}){let{wrapper:t}={...(0,o.useMDXComponents)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function l(){return(0,n.jsx)(s,{})}let d=[{level:2,text:"前言"},{level:2,text:"解决方案"},{level:2,text:"Composition 事件"},{level:2,text:"受控和非受控组件",items:[{level:3,text:"受控组件"},{level:3,text:"非受控组件"}]},{level:2,text:"基本解决思路"},{level:2,text:"你以为就解决了？ NO！"},{level:2,text:"还没解决？"},{level:2,text:"好像探讨结束了？no!"},{level:2,text:"最后"},{level:2,text:"附录",items:[{level:3,text:"安装 input"},{level:3,text:"引入和使用 input"}]}];e.i(53827);var a=e.i(56245);function u(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12",children:(0,n.jsx)(l,{})}),(0,n.jsx)("div",{className:"hidden z-10 xl:flex xl:w-48 mt-8 pl-0 shrink-0",children:(0,n.jsx)(a.Catalog,{items:d,offset:-90})})]})}e.s(["default",()=>u],63652)}]);