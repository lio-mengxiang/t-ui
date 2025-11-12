(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,n,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var n=e.i(45100);let c=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,n.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,c])},7823,e=>{"use strict";function n(e,n){if(null==e)return{};var c={};for(var s in e)if(({}).hasOwnProperty.call(e,s)){if(-1!==n.indexOf(s))continue;c[s]=e[s]}return c}e.s(["default",()=>n])},37215,e=>{"use strict";function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>n])},22480,e=>{"use strict";let n=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,n])},98319,e=>{"use strict";var n=e.i(64334);function c(...e){return(0,n.useCallback)(n=>{e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})},e)}e.s(["useComposedRefs",()=>c])},88036,59013,e=>{"use strict";var n=e.i(45100),c=e.i(64334),s=e.i(22480);function r(e){let n=(0,c.useRef)(null);return n.current=e,(0,c.useCallback)((...e)=>n.current?.(...e),[])}e.s(["useEvent",()=>r],59013);var i=e.i(96224);function d(e,n){try{return e.querySelector(n)}catch(e){return null}}function l({scrollContainer:e,targetId:n,offset:c,isScrolling:s}){var r,l;if(!n)return;let o=d(document,`#${CSS.escape(n)}`);if(!o)return;let t=e.current,h=((void 0===(r=t)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,n)=>{if(!e.getClientRects().length)return 0;let c=e.getBoundingClientRect();return c.width||c.height?n&&n!==window?c.top-n.getBoundingClientRect().top:(n=e.ownerDocument.documentElement,c.top-n.clientTop):c.top})(o,t)+c;(s.current=!0,(0,i.isWindow)(t))?t.scrollTo((void 0===(l=t)&&(l=window),l)&&(l===window?Math.ceil(window.pageXOffset||window.scrollX):l.scrollLeft)||0,h):t.scrollTop=h}function o({targetId:e,linkMap:n,wrapperRef:c,currentId:s,setCurrentId:r,onChange:i}){e&&c.current&&n.current.get(e)&&e!==s&&r(e).then(()=>{i?.(e,s)})}var t=e.i(98319);let h=(0,c.forwardRef)((e,h)=>{let{scrollContainer:x,offset:a=0,children:u,onChange:j,queryKey:p="anchor-id",isCloseInitAnchor:m,...v}=e,{currentId:f,onLinkClick:g,wrapperRef:b,linkMap:w}=function({propScrollContainer:e,onChange:n,offset:s,queryKey:t,isCloseInitAnchor:h}){var x;let a,u,j=(0,c.useRef)(null),p=(0,c.useRef)(null),m=(0,c.useRef)(new Map),v=(0,c.useRef)(!1),[f,g]=function(e){let[n,s]=(0,c.useState)({value:"",resolve:e=>{}});return(0,c.useEffect)(()=>{n.resolve(n.value)},[n]),[n.value,e=>new Promise(n=>{s(c=>{let s=e;return"function"==typeof e&&(s=e(c.value)),{value:s,resolve:n}})})]}(0),b=r(()=>{if(v.current)return;let e=function({linkMap:e,scrollContainer:n}){let c=n.current,s=((0,i.isWindow)(c)?document.documentElement||document.body:c).getBoundingClientRect(),r=Array.from(e.current.keys()),l=[];for(let e of r){let n=d(document,"#"+CSS.escape(e));if(n){let{top:e}=n.getBoundingClientRect(),r=(0,i.isWindow)(c)?e:e-s.top;r>=0&&l.push({element:n,top:r})}}return 0===l.length?null:l.reduce((e,n)=>e.top<=n.top?e:n).element}({linkMap:m,scrollContainer:p});e?.id&&o({targetId:e.id,linkMap:m,wrapperRef:j,currentId:f,setCurrentId:g,onChange:n})}),w=r((x=()=>{b(),v.current=!1},a=null,(u=(...e)=>{a||(a=setTimeout(()=>{a=null,x(...e)},30))}).cancel=()=>{a&&(clearTimeout(a),a=null)},u));return(0,c.useEffect)(()=>(p.current=(0,i.isString)(e)?d(document,e):e||window,p.current?.addEventListener("scroll",w),()=>{p.current?.removeEventListener("scroll",w)}),[w,e]),(0,c.useEffect)(()=>{if(!h)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(t);e&&(o({targetId:e,linkMap:m,wrapperRef:j,currentId:f,setCurrentId:g,onChange:n}),l({scrollContainer:p,targetId:e,offset:s,isScrolling:v}))},[]),{onScroll:w,currentId:f,onLinkClick:function(e,c){e.preventDefault(),o({targetId:c,linkMap:m,wrapperRef:j,currentId:f,setCurrentId:g,onChange:n}),l({scrollContainer:p,targetId:c,offset:s,isScrolling:v})},wrapperRef:j,scrollContainer:p,linkMap:m}}({propScrollContainer:x,onChange:j,offset:a,queryKey:p,isCloseInitAnchor:m});return(0,n.jsx)(s.AnchorContext.Provider,{value:{currentId:f,linkMap:w,onLinkClick:g},children:(0,n.jsx)("div",{...v,ref:(0,t.useComposedRefs)(b,h),children:u})})});e.s(["Anchor",0,h],88036)},69438,e=>{"use strict";var n=e.i(45100),c=e.i(64334),s=e.i(22480),r=e.i(98319);let i=(0,c.forwardRef)((e,i)=>{let{onLinkClick:d,linkMap:l,currentId:o}=(0,c.useContext)(s.AnchorContext),{onClick:t,targetId:h,children:x,className:a,activeClassName:u,...j}=e,p=(0,c.useRef)(null);return(0,c.useEffect)(()=>{var e;return e=p.current,h&&l.current.set(h,e),()=>{l.current.delete(h)}},[h,l]),(0,n.jsx)("div",{ref:(0,r.useComposedRefs)(i,p),...j,onClick:e=>{e.stopPropagation(),t?.(e),d?.(e,h)},"data-target-id":h,className:o===h?u:a,children:x})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var n=e.i(88036),c=e.i(69438),s=e.i(22480);let r={Root:n.Anchor,Link:c.AnchorLink,Context:s.AnchorContext};e.s(["Anchor",()=>r])},6346,e=>{"use strict";var n=e.i(45100),c=e.i(18694);e.i(82928);var s=e.i(72304),r=e.i(47445),i=e.i(69389);function d(e){let d={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.H1,{subheading:"从常见的布局方案看，Grid组件",children:"这么灵活的布局的组件，值得一学哦！"}),"\n",(0,n.jsx)(s.ImageTypography,{src:"/grid/grid.webp",fill:!0,alt:"icon"}),"\n",(0,n.jsx)(d.h2,{children:"前言"}),"\n",(0,n.jsxs)(d.p,{children:["现在国内国外主流 ",(0,n.jsx)(d.code,{children:"UI"})," 组件库会有一个叫布局的组件，例如 ",(0,n.jsx)(d.code,{children:"antd"})," 和 ",(0,n.jsx)(d.code,{children:"M-UI"})," 都有一个 ",(0,n.jsx)(d.code,{children:"Grid"})," 组件，帮助布局，"]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"antd"}),"的布局组件示例如下："]}),"\n",(0,n.jsx)(s.ImageTypography,{src:"/grid/ant-grid.webp",fill:!0,alt:"antd grid"}),"\n",(0,n.jsx)(d.p,{children:"这些组件主要是帮助我们布局的，并且可以设置在不同屏幕尺寸下布局的样式。是一种来实现的布局方案，实用性很强。"}),"\n",(0,n.jsxs)(d.p,{children:["其主要的实现方式是使用 ",(0,n.jsx)(d.code,{children:"flex"})," 布局，以及借助 ",(0,n.jsx)(d.code,{children:"css"})," 的 ",(0,n.jsx)(d.code,{children:"media query"})," 来实现的。",(0,n.jsx)(d.code,{children:"flex"})," 布局在单行布局时十分方便，尤其新的浏览器版本支持 ",(0,n.jsx)(d.code,{children:"flex"})," 的 ",(0,n.jsx)(d.code,{children:"gap"})," 属性后，",(0,n.jsx)(d.code,{children:"flex"})," 在多行布局上也更加方便。"]}),"\n",(0,n.jsxs)(d.p,{children:["在绝大多数情况下，基于 ",(0,n.jsx)(d.code,{children:"flex"})," 布局的 ",(0,n.jsx)(d.code,{children:"Grid"})," 组件足够了。"]}),"\n",(0,n.jsxs)(d.p,{children:["我这里的 ",(0,n.jsx)(d.code,{children:"Grid"})," 组件主要是基于 ",(0,n.jsx)(d.code,{children:"css"})," 的 ",(0,n.jsx)(d.code,{children:"display: grid"})," 布局来实现的，",(0,n.jsx)(d.code,{children:"display: grid"})," 主要是为二维布局而生的，当然单行布局也没问题。"]}),"\n",(0,n.jsxs)(d.p,{children:["然后也我使用 ",(0,n.jsx)(d.code,{children:"javascript"})," 控制 ",(0,n.jsx)(d.code,{children:"media query"})," 来实现不同屏幕尺寸下的布局样式。所以就很符合 ",(0,n.jsx)(d.code,{children:"headless"})," 的思想，不需要像 ",(0,n.jsx)(d.code,{children:"antd"}),",",(0,n.jsx)(d.code,{children:"M-UI"})," 需要配合 ",(0,n.jsx)(d.code,{children:"css"})," 。"]}),"\n",(0,n.jsxs)(d.p,{children:["这也是我为什么使用 ",(0,n.jsx)(d.code,{children:"display: grid"})," 布局的原因，因为 ",(0,n.jsx)(d.code,{children:"grid"})," 布局在二维布局上更方便，也更符合 ",(0,n.jsx)(d.code,{children:"headless"})," 的思想。"]}),"\n",(0,n.jsx)(d.p,{children:"在介绍我们的方案之前，可以先来看看常见的自适应布局方案有哪些。"}),"\n",(0,n.jsx)(d.h2,{children:"两类布局方案"}),"\n",(0,n.jsx)(d.p,{children:"主流的布局方案主要分为两个大类："}),"\n",(0,n.jsxs)(d.p,{children:["一类依靠媒体查询，就一种设置 ",(0,n.jsx)(d.code,{children:"breakpoint"}),"(断点)，来实现的。例如屏幕宽度："]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["小于 ",(0,n.jsx)(d.code,{children:"526px"})," 时，布局为单列"]}),"\n",(0,n.jsxs)(d.li,{children:["大于等于 ",(0,n.jsx)(d.code,{children:"526px"})," 但小于等于 ",(0,n.jsx)(d.code,{children:"768px"})," 时，布局为双列"]}),"\n",(0,n.jsxs)(d.li,{children:["大于等于 ",(0,n.jsx)(d.code,{children:"768px"})," 时，布局为三列"]}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["一类是流体布局方案，就是屏幕缩放时，布局也会相应地缩放。例如百分比布局，我设置一个元素的宽度为 ",(0,n.jsx)(d.code,{children:"50%"}),"，那么当浏览器的宽度发生变化时，这个元素的宽度也会相应地变化。"]}),"\n",(0,n.jsxs)(d.p,{children:["这方面我不是专业的，但我感觉（欢迎大家补充）媒体查询的方式，更适合实现多平台的响应式布局，例如你要做一个适应 ",(0,n.jsx)(d.code,{children:"手机"}),"，",(0,n.jsx)(d.code,{children:"平板"}),"，",(0,n.jsx)(d.code,{children:"电脑"})," 等不同屏幕宽度，且宽度范围差距较大的响应式布局。"]}),"\n",(0,n.jsx)(d.p,{children:"而流体布局，更适合做宽度变化范围较小的设备上，例如移动端的布局（不同的手机尺寸变化范围并不大）。接下来我们就讲两个常见的流体布局方案。"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"百分比布局方案"}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"vw/vh"})," 布局方案"]}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["最后讲一下我们组件库中 ",(0,n.jsx)(d.code,{children:"Grid"})," 布局组件的媒体查询方案。"]}),"\n",(0,n.jsx)(d.p,{children:"当然这个肯定不绝对，因为有些酷炫的网站，可能流体布局更适合。"}),"\n",(0,n.jsx)(d.h2,{children:"百分比布局方案"}),"\n",(0,n.jsxs)(d.p,{children:["这个方案就是给元素设置百分比，例如相对于 ",(0,n.jsx)(d.code,{children:"window"})," 窗口的宽度或者高度设置当前元素的百分比，\n当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。"]}),"\n",(0,n.jsx)(d.p,{children:"例如："}),"\n",(0,n.jsx)(r.CodeBlock,{code:`.container {
  width: 100%;   /* 容器占满视口 */
}

.box {
  width: 50%;    /* box始终是container宽度的一半 */
  height: 30%;   /* 高度是container高度的30% */
}`,language:"css"}),"\n",(0,n.jsxs)(d.p,{children:["我们看到，百分比布局是一种基于父容器大小的布局方案，但这个方案在布局简单的情况下还可以，但是稍微有点复杂的话，就会有一个很麻烦的地方。\n就是百分比到底是相对于什么的百分比？这句话大家可能觉得有点奇怪，肯定是子元素的 ",(0,n.jsx)(d.code,{children:"width"})," 相当于父元素的 ",(0,n.jsx)(d.code,{children:"width"}),"，子元素的 ",(0,n.jsx)(d.code,{children:"height"}),"\n相当于父元素的 ",(0,n.jsx)(d.code,{children:"height"})," 呗！"]}),"\n",(0,n.jsx)(d.p,{children:"但其实不是呢，情况也比较复杂，列举一些："}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["子元素的 ",(0,n.jsx)(d.code,{children:"margin"})," 如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的 ",(0,n.jsx)(d.code,{children:"width"}),"。而与父元素的 ",(0,n.jsx)(d.code,{children:"height"}),"无关。"]}),"\n",(0,n.jsxs)(d.li,{children:["子元素的 ",(0,n.jsx)(d.code,{children:"padding"})," 同上。"]}),"\n",(0,n.jsxs)(d.li,{children:["子元素的 ",(0,n.jsx)(d.code,{children:"top"})," 和 ",(0,n.jsx)(d.code,{children:"bottom"})," 如果设置百分比，则相对于 ",(0,n.jsx)(d.code,{children:"包含块"})," 的 ",(0,n.jsx)(d.code,{children:"height"})," 的百分比。"]}),"\n",(0,n.jsxs)(d.li,{children:["子元素的 ",(0,n.jsx)(d.code,{children:"left"})," 和 ",(0,n.jsx)(d.code,{children:"right"})," 如果设置百分比，则相对于 ",(0,n.jsx)(d.code,{children:"包含块"})," 的 ",(0,n.jsx)(d.code,{children:"width"})," 的百分比。"]}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["上面提到一个 ",(0,n.jsx)(d.code,{children:"包含块"})," 的概念，想了解详细内容，可以去搜 ",(0,n.jsx)(d.code,{children:"MDN"}),"。顺便纠正一个常见的错误，很多定位，例如 ",(0,n.jsx)(d.code,{children:"absolute"})," 定位，",(0,n.jsx)(d.code,{children:"top"}),", ",(0,n.jsx)(d.code,{children:"left"}),"这些定位值\n是相对于最近的一个非 ",(0,n.jsx)(d.code,{children:"static"})," 定位的父元素的，这个说法是错的。"]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"absolute"})," 的定位上下文其实是它的 ",(0,n.jsx)(d.code,{children:"包含块"}),"。"]}),"\n",(0,n.jsx)(d.p,{children:"这就体现出百分比布局优缺点非常明显:"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"优点：简单场景百分比布局简单方便，只需要设置百分比即可。"}),"\n",(0,n.jsxs)(d.li,{children:["缺点：复杂场景注意的细节太多。但实际上 ",(0,n.jsx)(d.code,{children:"antd"})," 布局组件的 ",(0,n.jsx)(d.code,{children:"Grid"})," (基于 ",(0,n.jsx)(d.code,{children:"display: flex"}),") 在处理自适应布局时，也使用了 ",(0,n.jsx)(d.code,{children:"百分比"}),"，\n但仅限于 ",(0,n.jsx)(d.code,{children:"width"})," 和 ",(0,n.jsx)(d.code,{children:"height"}),"，所以总体来说，百分比布局还是比较方便的。"]}),"\n"]}),"\n",(0,n.jsx)(d.h3,{children:"vw/vh 布局"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"vw/vh"})," 布局是基于视口的宽度和高度来布局的，例如 ",(0,n.jsx)(d.code,{children:"100vw"})," 就是视口的宽度，",(0,n.jsx)(d.code,{children:"100vh"})," 就是视口的高度。也就是说 ",(0,n.jsx)(d.code,{children:"vw/vh"})," 布局也是某种程度上的百分比布局。\n核心理解是相对参照物不同，百分比常相对于父元素，而 ",(0,n.jsx)(d.code,{children:"vw/vh"})," 相对于屏幕宽度。"]}),"\n",(0,n.jsxs)(d.p,{children:["简单的 ",(0,n.jsx)(d.code,{children:"vw/vh"})," 布局使用方法是，首先设计稿例如是 ",(0,n.jsx)(d.code,{children:"750px"})," 为基准，那么 ",(0,n.jsx)(d.code,{children:"100vw"})," 就是 ",(0,n.jsx)(d.code,{children:"750px"}),", 那么 ",(0,n.jsx)(d.code,{children:"1px"})," 对应 ",(0,n.jsx)(d.code,{children:"100 / 750 vw"}),"。"]}),"\n",(0,n.jsxs)(d.p,{children:["所以设计稿中其它的 ",(0,n.jsx)(d.code,{children:"px"})," 单位，都可以直接转换为 ",(0,n.jsx)(d.code,{children:"vw/vh"})," 单位。当然自己计算是比较麻烦的，所以我们一般可以借助一些现成的插件，例如 ",(0,n.jsx)(d.code,{children:"postcss-px-to-viewport"}),"，来自动帮我们转换。"]}),"\n",(0,n.jsxs)(d.p,{children:["这种 ",(0,n.jsx)(d.code,{children:"vw/vh"})," 布局会有一些常见的坑，例如："]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["经典的 ",(0,n.jsx)(d.code,{children:"1px"})," 像素问题，很多移动端组件库采取的是，添加伪类，然后使用 ",(0,n.jsx)(d.code,{children:"transform: scale(0.5)"})," 来解决。"]}),"\n",(0,n.jsxs)(d.li,{children:["对于例如 ",(0,n.jsx)(d.code,{children:"input"})," 这种能换出软键盘的功能，在安卓机下 ",(0,n.jsx)(d.code,{children:"vm/vh"})," 布局就会有问题，因为安卓的软键盘弹出会把原先的网页 ",(0,n.jsx)(d.code,{children:"height"})," 减小，那么原先页面如果设置整个网页高度为 ",(0,n.jsx)(d.code,{children:"100vh"})," 的话，\n那么此时软键盘占据了部分 ",(0,n.jsx)(d.code,{children:"height"}),"，整个网页就会缩小。"]}),"\n",(0,n.jsx)(d.li,{children:"...等等"}),"\n"]}),"\n",(0,n.jsx)(d.h3,{children:"媒体查询方案"}),"\n",(0,n.jsxs)(d.p,{children:["这种方案主要是借助 ",(0,n.jsx)(d.code,{children:"css"})," 的媒体查询。但 ",(0,n.jsx)(d.code,{children:"css"})," 的媒体查询要写很多 ",(0,n.jsx)(d.code,{children:"css"}),", 我们的 ",(0,n.jsx)(d.code,{children:"Grid"})," 布局组件则是利用 ",(0,n.jsx)(d.code,{children:"javascript"})," 来实现的动态控制媒体查询。加上\n",(0,n.jsx)(d.code,{children:"display: grid"})," 本身对自适应布局良好的支持，结合起来，算是一个很好的媒体查询解决方案。"]}),"\n",(0,n.jsxs)(d.p,{children:["这里我们说一下核心的 ",(0,n.jsx)(d.code,{children:"媒体查询"})," hook 的实现思路。"]}),"\n",(0,n.jsx)(d.h3,{children:"媒体查询核心 hook"}),"\n",(0,n.jsxs)(d.p,{children:["简单介绍一下这个 ",(0,n.jsx)(d.code,{children:"hook"})," 的实现思路。以下的源码，粗略看下即可，后续会详细解释。"]}),"\n",(0,n.jsx)(r.CodeBlock,{code:`import { useEffect, useRef, useState, useMemo } from 'react';
import ResponsiveObserve, { responsiveArray, ScreenMap } from '../utils/responsive-observe';
import { ResponsiveValue } from '../interface';
import { isObject } from '../../utils';

function isResponsiveValue(val: number | ResponsiveValue): val is ResponsiveValue {
return isObject(val);
}

export const useResponsiveState = (val: number | ResponsiveValue, defaultValue: number) => {
const token = useRef<string>(null);
const [screens, setScreens] = useState<ScreenMap>({
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
  xxl: true,
  xxxl: true,
});
useEffect(() => {
  token.current = ResponsiveObserve.subscribe((screens) => {
    if (isResponsiveValue(val)) {
      setScreens(screens);
    }
  });

  return () => {
    ResponsiveObserve.unsubscribe(token.current);
  };
}, []);

const result = useMemo(() => {
  let res = defaultValue;
  if (isResponsiveValue(val)) {
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i];
      if (screens[breakpoint] || (breakpoint === 'xs' && val[breakpoint] !== undefined)) {
        res = (val[breakpoint] as number) || defaultValue;
        break;
      }
    }
  } else {
    res = val;
  }
  return res;
}, [screens, val, defaultValue]);
return result;
};`,language:"javascript"}),"\n",(0,n.jsxs)(d.p,{children:["首先我们看 ",(0,n.jsx)(d.code,{children:"useResponsiveState"})," hook，接收两个参数，一个是 ",(0,n.jsx)(d.code,{children:"val"}),"，可以是数字，例如 ",(0,n.jsx)(d.code,{children:"1"}),", 表示在 ",(0,n.jsx)(d.code,{children:"display: grid"})," 中的 ",(0,n.jsx)(d.code,{children:"column"})," 数占 ",(0,n.jsx)(d.code,{children:"1"})," 份。"]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"column"})," 就是你把当前容器切分成多少份，例如 ",(0,n.jsx)(d.code,{children:"12"})," 份。 ",(0,n.jsx)(d.code,{children:"1"})," 就代表占 ",(0,n.jsx)(d.code,{children:"1/12"}),"。还可以是响应式的，例如 ",(0,n.jsx)(d.code,{children:"{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 12 }"}),"，\n表示在不同的屏幕宽度下，",(0,n.jsx)(d.code,{children:"column"})," 数不同。"]}),"\n",(0,n.jsx)(d.p,{children:"其中默认设置的是例如"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"xs"})," 表示的是 ",(0,n.jsx)(d.code,{children:"(max-width: 575px)"}),"，表示在 ",(0,n.jsx)(d.code,{children:"575px"})," 以下的屏幕宽度下，",(0,n.jsx)(d.code,{children:"column"})," 数为 ",(0,n.jsx)(d.code,{children:"1"}),"。"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"sm"})," 表示的是 ",(0,n.jsx)(d.code,{children:"(min-width: 576px)"}),"，表示在 ",(0,n.jsx)(d.code,{children:"576px"})," 以上的屏幕宽度下，",(0,n.jsx)(d.code,{children:"column"})," 数为 ",(0,n.jsx)(d.code,{children:"2"}),"。"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"md"})," 表示的是 ",(0,n.jsx)(d.code,{children:"(min-width: 768px)"}),"，表示在 ",(0,n.jsx)(d.code,{children:"768px"})," 以上的屏幕宽度下，",(0,n.jsx)(d.code,{children:"column"})," 数为 ",(0,n.jsx)(d.code,{children:"3"}),"。"]}),"\n",(0,n.jsx)(d.li,{children:"...等等"}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["全部的 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 如下："]}),"\n",(0,n.jsx)(r.CodeBlock,{code:`export const responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
  xxxl: '(min-width: 2000px)',
};`,language:"javascript"}),"\n",(0,n.jsxs)(d.p,{children:["其实这个是我组件写死的，后续会考虑是否可以根据业务场景，来动态调整 ",(0,n.jsx)(d.code,{children:"breakpoint"}),"。"]}),"\n",(0,n.jsxs)(d.p,{children:["然后 ",(0,n.jsx)(d.code,{children:"defaultValue"})," 是默认值，当 ",(0,n.jsx)(d.code,{children:"val"})," 不是响应式值时，或者当前屏幕宽度下，没有对应的 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 时，就会返回 ",(0,n.jsx)(d.code,{children:"defaultValue"}),"。是一个 ",(0,n.jsx)(d.code,{children:"number"})," 值。"]}),"\n",(0,n.jsxs)(d.p,{children:["其中 ",(0,n.jsx)(d.code,{children:"useEffect"})," 很重要，我们来看看做了什么：\n`="]}),"\n",(0,n.jsx)(r.CodeBlock,{code:`
useEffect(() => {
  token.current = ResponsiveObserve.subscribe((screens) => {
    if (isResponsiveValue(val)) {
      setScreens(screens);
    }
  });

  return () => {
    ResponsiveObserve.unsubscribe(token.current);
  };
}, []);
};`,language:"javascript"}),"\n",(0,n.jsxs)(d.p,{children:["这里调用了外部引入的 ",(0,n.jsx)(d.code,{children:"ResponsiveObserve"})," 的 ",(0,n.jsx)(d.code,{children:"subscribe"})," 方法。"]}),"\n",(0,n.jsxs)(d.p,{children:["作用就是，每当我们设置的 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 发生变化时，就会调用 ",(0,n.jsx)(d.code,{children:"subscribe"})," 中的回调函数，将当前屏幕宽度下的 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 信息传递给我们。比如告诉我们"]}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:["当前屏幕宽度下，",(0,n.jsx)(d.code,{children:"xs"})," 这个 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 是否生效了。"]}),"\n",(0,n.jsxs)(d.li,{children:["当前屏幕宽度下，",(0,n.jsx)(d.code,{children:"sm"})," 这个 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 是否生效了。"]}),"\n",(0,n.jsx)(d.li,{children:"...等等"}),"\n"]}),"\n",(0,n.jsxs)(d.p,{children:["现在的关键是，如何知道当前屏幕宽度下，哪个 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 生效了？也就是我们要去看看 ",(0,n.jsx)(d.code,{children:"ResponsiveObserve"})," 的实现逻辑。"]}),"\n",(0,n.jsx)(d.p,{children:"完整代码如下，我们来看看："}),"\n",(0,n.jsx)(r.CodeBlock,{code:`export type Breakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type BreakpointMap = Partial<Record<Breakpoint, string>>;
export type ScreenMap = Partial<Record<Breakpoint, boolean>>;

export const responsiveArray: Breakpoint[] = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

export const responsiveMap: BreakpointMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
  xxxl: '(min-width: 2000px)',
};

type SubscribeFunc = (screens: ScreenMap, breakpointChecked: Breakpoint) => void;

let subscribers: Array<{
token: string;
func: SubscribeFunc;
}> = [];
let subUid = -1;
let screens = {};

const responsiveObserve = {
matchHandlers: {},
dispatch(pointMap: ScreenMap, breakpointChecked: Breakpoint) {
  screens = pointMap;
  if (subscribers.length < 1) {
    return false;
  }

  subscribers.forEach((item) => {
    item.func(screens, breakpointChecked);
  });

  return true;
},
subscribe(func: SubscribeFunc) {
  if (subscribers.length === 0) {
    this.register();
  }
  const token = (++subUid).toString();
  subscribers.push({
    token,
    func,
  });
  func(screens, null);
  return token;
},
unsubscribe(token: string) {
  subscribers = subscribers.filter((item) => item.token !== token);
  if (subscribers.length === 0) {
    this.unregister();
  }
},
unregister() {
  Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
    const matchMediaQuery = responsiveMap[screen];
    const handler = this.matchHandlers[matchMediaQuery];
    if (handler && handler.mql && handler.listener) {
      handler.mql.removeListener(handler.listener);
    }
  });
},
register() {
  Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
    const matchMediaQuery = responsiveMap[screen];
    const listener = ({ matches }: { matches: boolean }) => {
      this.dispatch(
        {
          ...screens,
          [screen]: matches,
        },
        screen,
      );
    };
    const mql = window.matchMedia(matchMediaQuery);
    mql.addListener(listener);
    this.matchHandlers[matchMediaQuery] = {
      mql,
      listener,
    };

    listener(mql);
  });
},
};

export default responsiveObserve;`,language:"javascript"}),"\n",(0,n.jsxs)(d.p,{children:["我们首先看到 ",(0,n.jsx)(d.code,{children:"subscribe"})," 方法，首先会初始化一下 ",(0,n.jsx)(d.code,{children:"screens"})," , 也就是当前屏幕宽度下，所有 ",(0,n.jsx)(d.code,{children:"breakpoint"})," 是否生效的映射关系。"]}),"\n",(0,n.jsxs)(d.p,{children:["还需注意 ",(0,n.jsx)(d.code,{children:"subscribe"})," 方法中，会把我们在 ",(0,n.jsx)(d.code,{children:"hooks"})," 中注册的 ",(0,n.jsx)(d.code,{children:"func"})," 函数，添加到 ",(0,n.jsx)(d.code,{children:"subscribers"})," 数组中。"]}),"\n",(0,n.jsx)(d.p,{children:"然后最关键的代码来了："}),"\n",(0,n.jsx)(r.CodeBlock,{code:`const mql = window.matchMedia(matchMediaQuery);
mql.addListener(listener);`,language:"javascript"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"window.matchMedia(matchMediaQuery)"})," ，例如：",(0,n.jsx)(d.code,{children:"window.matchMedia('(max-width: 575px)')"})," ，返回的是一个 ",(0,n.jsx)(d.code,{children:"MediaQueryList"})," 对象。"]}),"\n",(0,n.jsxs)(d.p,{children:["这个对象有一个 ",(0,n.jsx)(d.code,{children:"matches"})," 属性，当 ",(0,n.jsx)(d.code,{children:"MediaQueryList"})," 所描述的媒体查询条件被满足时，",(0,n.jsx)(d.code,{children:"matches"})," 属性的值为 ",(0,n.jsx)(d.code,{children:"true"}),"，否则为 ",(0,n.jsx)(d.code,{children:"false"}),"。"]}),"\n",(0,n.jsxs)(d.p,{children:["我们可以监听 ",(0,n.jsx)(d.code,{children:"MediaQueryList"})," 对象的 ",(0,n.jsx)(d.code,{children:"change"})," 事件，当媒体查询条件发生变化时，会触发 ",(0,n.jsx)(d.code,{children:"change"})," 事件。"]}),"\n",(0,n.jsxs)(d.p,{children:["也就是说每当我们设置的断点发生变化，就会触发 ",(0,n.jsx)(d.code,{children:"change"})," 事件，也就是我们我们注册的 ",(0,n.jsx)(d.code,{children:"listener"})," 函数，这个函数会调用 ",(0,n.jsx)(d.code,{children:"this.dispatch"})," 方法，这个"]}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"this.dispatch"})," 方法实则把之前 ",(0,n.jsx)(d.code,{children:"subscribers"})," 数组中的所有函数，都调用一遍，而这些注册的函数，实际上就是我们调用 ",(0,n.jsx)(d.code,{children:"hook"})," 中，",(0,n.jsx)(d.code,{children:"subscribe"})," 方法注册的函数。"]}),"\n",(0,n.jsx)(d.p,{children:"这就是这个函数总体的思路。"}),"\n",(0,n.jsx)(d.h2,{children:"Grid 布局组件"}),"\n",(0,n.jsxs)(d.p,{children:["了解 ",(0,n.jsx)(d.code,{children:"Grid"})," 布局组件，可以直接去仓库看源码，主要是你需要了解 ",(0,n.jsx)(d.code,{children:"display: grid"})," 布局的常见用法，比如 ",(0,n.jsx)(d.code,{children:"grid-template-columns"}),"、",(0,n.jsx)(d.code,{children:"grid-template-rows"}),"、",(0,n.jsx)(d.code,{children:"grid-gap"})," 等。"]}),"\n",(0,n.jsxs)(d.p,{children:["还有就是 ",(0,n.jsx)(d.code,{children:"grid-column-start"}),"、",(0,n.jsx)(d.code,{children:"grid-row-start"}),"、",(0,n.jsx)(d.code,{children:"grid-column-end"}),"、",(0,n.jsx)(d.code,{children:"grid-row-end"})," 等属性，这些属性可以用来指定元素在 ",(0,n.jsx)(d.code,{children:"grid"})," 布局中的起始位置。"]}),"\n",(0,n.jsx)(d.h2,{children:"总结"}),"\n",(0,n.jsx)(d.p,{children:"欢迎加入到我们的组件库交流群中。有什么疑问都可以在群里讨论，并且会有视频直播每个组件的实现。"}),"\n",(0,n.jsx)(d.p,{children:"更重要的是,我可以帮助你增加一些简历中的核心项目，例如我们这个组件库级别的。无论你是面试初级开发还是到前端技术专家，都会帮助你在面试中脱颖而出。"}),"\n",(0,n.jsx)(d.h2,{children:"安装 Grid 组件"}),"\n",(0,n.jsx)(r.CodeBlock,{code:`npm i @t-headless-ui/react
yarn i @t-headless-ui/react
pnpm i @t-headless-ui/react`,language:"bash"}),"\n",(0,n.jsx)(d.h3,{children:"引入 Grid 组件"}),"\n",(0,n.jsx)(r.CodeBlock,{code:"import { Grid, Cell } from '@t-headless-ui/react';",language:"tsx"})]})}function l(e={}){let{wrapper:s}={...(0,c.useMDXComponents)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function o(){return(0,n.jsx)(l,{})}e.s(["MustRead",()=>o],6346)}]);