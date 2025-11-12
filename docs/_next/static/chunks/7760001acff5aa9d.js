(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,n,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var n=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,n.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function n(e,n){if(null==e)return{};var r={};for(var i in e)if(({}).hasOwnProperty.call(e,i)){if(-1!==n.indexOf(i))continue;r[i]=e[i]}return r}e.s(["default",()=>n])},37215,e=>{"use strict";function n(){return(n=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>n])},22480,e=>{"use strict";let n=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,n])},98319,e=>{"use strict";var n=e.i(64334);function r(...e){return(0,n.useCallback)(n=>{e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})},e)}e.s(["useComposedRefs",()=>r])},88036,59013,e=>{"use strict";var n=e.i(45100),r=e.i(64334),i=e.i(22480);function o(e){let n=(0,r.useRef)(null);return n.current=e,(0,r.useCallback)((...e)=>n.current?.(...e),[])}e.s(["useEvent",()=>o],59013);var t=e.i(96224);function l(e,n){try{return e.querySelector(n)}catch(e){return null}}function c({scrollContainer:e,targetId:n,offset:r,isScrolling:i}){var o,c;if(!n)return;let s=l(document,`#${CSS.escape(n)}`);if(!s)return;let d=e.current,a=((void 0===(o=d)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,n)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?n&&n!==window?r.top-n.getBoundingClientRect().top:(n=e.ownerDocument.documentElement,r.top-n.clientTop):r.top})(s,d)+r;(i.current=!0,(0,t.isWindow)(d))?d.scrollTo((void 0===(c=d)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,a):d.scrollTop=a}function s({targetId:e,linkMap:n,wrapperRef:r,currentId:i,setCurrentId:o,onChange:t}){e&&r.current&&n.current.get(e)&&e!==i&&o(e).then(()=>{t?.(e,i)})}var d=e.i(98319);let a=(0,r.forwardRef)((e,a)=>{let{scrollContainer:u,offset:p=0,children:h,onChange:x,queryKey:g="anchor-id",isCloseInitAnchor:j,...v}=e,{currentId:f,onLinkClick:m,wrapperRef:b,linkMap:w}=function({propScrollContainer:e,onChange:n,offset:i,queryKey:d,isCloseInitAnchor:a}){var u;let p,h,x=(0,r.useRef)(null),g=(0,r.useRef)(null),j=(0,r.useRef)(new Map),v=(0,r.useRef)(!1),[f,m]=function(e){let[n,i]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{n.resolve(n.value)},[n]),[n.value,e=>new Promise(n=>{i(r=>{let i=e;return"function"==typeof e&&(i=e(r.value)),{value:i,resolve:n}})})]}(0),b=o(()=>{if(v.current)return;let e=function({linkMap:e,scrollContainer:n}){let r=n.current,i=((0,t.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),o=Array.from(e.current.keys()),c=[];for(let e of o){let n=l(document,"#"+CSS.escape(e));if(n){let{top:e}=n.getBoundingClientRect(),o=(0,t.isWindow)(r)?e:e-i.top;o>=0&&c.push({element:n,top:o})}}return 0===c.length?null:c.reduce((e,n)=>e.top<=n.top?e:n).element}({linkMap:j,scrollContainer:g});e?.id&&s({targetId:e.id,linkMap:j,wrapperRef:x,currentId:f,setCurrentId:m,onChange:n})}),w=o((u=()=>{b(),v.current=!1},p=null,(h=(...e)=>{p||(p=setTimeout(()=>{p=null,u(...e)},30))}).cancel=()=>{p&&(clearTimeout(p),p=null)},h));return(0,r.useEffect)(()=>(g.current=(0,t.isString)(e)?l(document,e):e||window,g.current?.addEventListener("scroll",w),()=>{g.current?.removeEventListener("scroll",w)}),[w,e]),(0,r.useEffect)(()=>{if(!a)return void w();let e=new URLSearchParams(new URL(window.location.href).search).get(d);e&&(s({targetId:e,linkMap:j,wrapperRef:x,currentId:f,setCurrentId:m,onChange:n}),c({scrollContainer:g,targetId:e,offset:i,isScrolling:v}))},[]),{onScroll:w,currentId:f,onLinkClick:function(e,r){e.preventDefault(),s({targetId:r,linkMap:j,wrapperRef:x,currentId:f,setCurrentId:m,onChange:n}),c({scrollContainer:g,targetId:r,offset:i,isScrolling:v})},wrapperRef:x,scrollContainer:g,linkMap:j}}({propScrollContainer:u,onChange:x,offset:p,queryKey:g,isCloseInitAnchor:j});return(0,n.jsx)(i.AnchorContext.Provider,{value:{currentId:f,linkMap:w,onLinkClick:m},children:(0,n.jsx)("div",{...v,ref:(0,d.useComposedRefs)(b,a),children:h})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var n=e.i(45100),r=e.i(64334),i=e.i(22480),o=e.i(98319);let t=(0,r.forwardRef)((e,t)=>{let{onLinkClick:l,linkMap:c,currentId:s}=(0,r.useContext)(i.AnchorContext),{onClick:d,targetId:a,children:u,className:p,activeClassName:h,...x}=e,g=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=g.current,a&&c.current.set(a,e),()=>{c.current.delete(a)}},[a,c]),(0,n.jsx)("div",{ref:(0,o.useComposedRefs)(t,g),...x,onClick:e=>{e.stopPropagation(),d?.(e),l?.(e,a)},"data-target-id":a,className:s===a?h:p,children:u})});e.s(["AnchorLink",0,t],69438)},93562,e=>{"use strict";var n=e.i(88036),r=e.i(69438),i=e.i(22480);let o={Root:n.Anchor,Link:r.AnchorLink,Context:i.AnchorContext};e.s(["Anchor",()=>o])},59021,e=>{"use strict";var n=e.i(45100),r=e.i(18694);e.i(82928);var i=e.i(72304),o=e.i(2697),t=e.i(47445),l=e.i(69389);e.i(73869);var c=e.i(84435);let s=`function App() {
  return (
    <InputComponent placeholder="请输入" />
  );
}`;function d(){return(0,n.jsx)(c.CodePreview,{code:s})}let a=`
function App() {
  return (
    <div className="input">
      <InputComponent className="input-inner" placeholder="Enter" allowClear clearIcon={<IconCloseLine className="input-close" />} />
    </div>
  );
}`,u=`.input {
  --input-padding: 6px 12px;
  --input-line-height: 1.42857;
  --input-color-text: var(--text-color);
  --input-font-size: 14px;
  --input-color-text-placeholder: var(--text-color-placeholder);
  --input-bg-color: transparent;
  --input-border-color: var(--tw-color-blue-600);
  --input-default-color: var(--border-color);
  --input-border-radius: 8px;
  --input-inner-padding: 0 4px;
  --input-icon-hover-bg: var(--bg-color-100);
  display: inline-flex;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0%);
  box-sizing: border-box;
  border: 1px solid var(--input-default-color);
  border-radius: var(--input-border-radius);
  padding: var(--input-padding);

  &::placeholder {
    color: var(--input-color-text-placeholder);
  }

  &&-focus {
    border-color: var(--input-border-color);
  }

  &:hover {
    border-color: var(--input-border-color);
  }

  > .input-inner {
    flex: 1;
    border: none;
    outline: none;
    padding: 0;
    max-width: 100%;
    min-width: 0;
    font: inherit;
    white-space: nowrap;
    background-color: var(--input-bg-color);
    /* 默认换行行为：只在允许的断点处换行，防止长单词或URL溢出容器 */
    word-wrap: normal;
    color: var(--input-color-text);
    line-height: var(--input-line-height);
    font-size: var(--input-font-size);
    box-sizing: border-box;
    transition:
      color 0.1s linear,
      border-color 0.1s linear,
      background-color 0.1s linear;
    padding: var(--input-inner-padding);
  }

  > .input-addon {
    user-select: none;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    color: var(--text-color-500);
  }

  & > span > .input-close {
    cursor: pointer;
    color: var(--input-color-text);
    visibility: hidden;
    transition: all linear 0.1s;
    &:hover {
      background-color: var(--input-icon-hover-bg);
      border-radius: 50%;
    }
  }

  &:hover {
    & > span > .input-close {
      visibility: visible;
    }
  }
}`;function p(){return(0,n.jsx)(c.CodePreview,{cssCode:u,code:a})}let h=`
function App() {
  return (
    <div className="input">
      <IconEmailLine className="input-addon" style={{ marginRight: 4 }} />
      <InputComponent className="input-inner" placeholder="Enter" allowClear clearIcon={<IconCloseLine className="input-close" />}  />
      <IconSearchLine className="input-addon" style={{ marginLeft: 4 }} />
    </div>
  );
}`,x=`.input {
  --input-padding: 6px 12px;
  --input-line-height: 1.42857;
  --input-color-text: var(--text-color);
  --input-font-size: 14px;
  --input-color-text-placeholder: var(--text-color-placeholder);
  --input-bg-color: transparent;
  --input-border-color: var(--tw-color-blue-600);
  --input-default-color: var(--border-color);
  --input-border-radius: 8px;
  --input-inner-padding: 0 4px;
  --input-icon-hover-bg: var(--bg-color-100);
  display: inline-flex;
  align-items: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0%);
  box-sizing: border-box;
  border: 1px solid var(--input-default-color);
  border-radius: var(--input-border-radius);
  padding: var(--input-padding);

  &::placeholder {
    color: var(--input-color-text-placeholder);
  }

  &&-focus {
    border-color: var(--input-border-color);
  }

  &:hover {
    border-color: var(--input-border-color);
  }

  > .input-inner {
    flex: 1;
    border: none;
    outline: none;
    padding: 0;
    max-width: 100%;
    min-width: 0;
    font: inherit;
    white-space: nowrap;
    background-color: var(--input-bg-color);
    /* 默认换行行为：只在允许的断点处换行，防止长单词或URL溢出容器 */
    word-wrap: normal;
    color: var(--input-color-text);
    line-height: var(--input-line-height);
    font-size: var(--input-font-size);
    box-sizing: border-box;
    transition:
      color 0.1s linear,
      border-color 0.1s linear,
      background-color 0.1s linear;
    padding: var(--input-inner-padding);
  }

  > .input-addon {
    user-select: none;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    height: 100%;
    font-size: 14px;
    color: var(--text-color-500);
  }

  & > span > .input-close {
    cursor: pointer;
    color: var(--input-color-text);
    visibility: hidden;
    transition: all linear 0.1s;
    &:hover {
      background-color: var(--input-icon-hover-bg);
      border-radius: 50%;
    }
  }

  &:hover {
    & > span > .input-close {
      visibility: visible;
    }
  }
}`;function g(){return(0,n.jsx)(c.CodePreview,{cssCode:x,code:h})}function j(e){let c={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.H1,{subheading:"css/less/sass 篇",children:"Input 组件的封装思路"}),"\n",(0,n.jsx)(o.AvatarM,{}),"\n",(0,n.jsx)(i.ImageTypography,{src:"/input/input.webp",fill:!0,alt:"input"}),"\n",(0,n.jsxs)(c.p,{children:["注：这篇是讲的使用 ",(0,n.jsx)(c.code,{children:"css"})," 添加样式。如果你对原子类添加样式感兴趣，例如 ",(0,n.jsx)(c.code,{children:"tailwindcss"}),"， 请移步下面的篇文章,",(0,n.jsx)(c.code,{children:"tailwindcss"})," 篇会更加详细。"]}),"\n",(0,n.jsxs)(c.p,{children:["基础用法和效果如下, 我们的 ",(0,n.jsx)(c.code,{children:"Input"})," 是没有任何样式的："]}),"\n",(0,n.jsx)(d,{}),"\n",(0,n.jsx)(c.p,{children:"但其实它包含很多高级功能,参数如下："}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsxs)(c.li,{children:["allowClear: 是否允许清空输入框（需要配合 ",(0,n.jsx)(c.code,{children:"clearIcon"})," 使用）"]}),"\n",(0,n.jsx)(c.li,{children:"clearIcon: 自定义清除按钮图标"}),"\n",(0,n.jsx)(c.li,{children:"disabled: 是否禁用输入框"}),"\n",(0,n.jsx)(c.li,{children:"readOnly: 是否只读"}),"\n",(0,n.jsxs)(c.li,{children:["onChange: 输入时的回调（注意，跟原生的 ",(0,n.jsx)(c.code,{children:"onChange"})," 不同，第一个参数是值，类型如下：(value: string, e) => void"]}),"\n",(0,n.jsx)(c.li,{children:"onClear: 点击清除按钮的回调"}),"\n",(0,n.jsxs)(c.li,{children:["normalizeTrigger: 指定 normalize 执行的时机('onBlur' | 'onPressEnter')，需要配合 ",(0,n.jsx)(c.code,{children:"normalize"})," 参数。"]}),"\n",(0,n.jsxs)(c.li,{children:["normalize: 在指定时机对用户输入的值进行格式化处理。前后值不一致时，会触发 ",(0,n.jsx)(c.code,{children:"onChange"}),"。类型：(value: string) => string;"]}),"\n",(0,n.jsxs)(c.li,{children:["maxLength: 输入框最大输入的长度；类型是 ",(0,n.jsx)(c.code,{children:"{ length?: number; errorOnly?: boolean }"}),"。设置 ",(0,n.jsx)(c.code,{children:"errorOnly"}),"为 ",(0,n.jsx)(c.code,{children:"true"})," 后，超过 ",(0,n.jsx)(c.code,{children:"maxLength"})," 会展示 ",(0,n.jsx)(c.code,{children:"error"})," 状态，并不限制用户输入。"]}),"\n",(0,n.jsxs)(c.li,{children:["autoFitWidth: 是否自动调整输入框宽度，默认是 ",(0,n.jsx)(c.code,{children:"true"}),"。类型：boolean; 配合 ",(0,n.jsx)(c.code,{children:"css"})," 中的 ",(0,n.jsx)(c.code,{children:"min-width"})," 和 ",(0,n.jsx)(c.code,{children:"max-width"})," 可以实现输入框宽度的自适应。"]}),"\n"]}),"\n",(0,n.jsxs)(c.p,{children:["我们的目标主要是拓展现在的 ",(0,n.jsx)(c.code,{children:"Input"})," 组件，添加更多的功能，例如："]}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsxs)(c.li,{children:["添加 ",(0,n.jsx)(c.code,{children:"css"})," 样式"]}),"\n",(0,n.jsxs)(c.li,{children:["增加 ",(0,n.jsx)(c.code,{children:"input"})," 框内部的前后缀图标"]}),"\n",(0,n.jsxs)(c.li,{children:["增加 ",(0,n.jsx)(c.code,{children:"input group"})," 组件，用于在 ",(0,n.jsx)(c.code,{children:"input"})," 框外部添加前缀或后缀图标。"]}),"\n",(0,n.jsx)(c.li,{children:"字数统计功能"}),"\n"]}),"\n",(0,n.jsx)(c.h2,{children:"1、基础封装"}),"\n",(0,n.jsxs)(c.p,{children:["我们先在 ",(0,n.jsx)(c.code,{children:"@t-headless-ui/react"})," 中的 ",(0,n.jsx)(c.code,{children:"Input"})," 组件封装一下 ",(0,n.jsx)(c.code,{children:"css"}),"。"]}),"\n",(0,n.jsx)(p,{}),"\n",(0,n.jsxs)(c.p,{children:["这里 ",(0,n.jsx)(c.code,{children:"css"})," 还不完善，我们还需要补充："]}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsx)(c.li,{children:"disabled 禁用样式"}),"\n",(0,n.jsx)(c.li,{children:"readOnly 只读样式"}),"\n",(0,n.jsxs)(c.li,{children:["增加 input 状态，例如 ",(0,n.jsx)(c.code,{children:"error"}),", ",(0,n.jsx)(c.code,{children:"warning"})," 状态"]}),"\n"]}),"\n",(0,n.jsxs)(c.p,{children:["同时，后面我们要实现可以增加前后缀图标的功能，例如搜索框的图标。那么就需要包裹一下目前的 ",(0,n.jsx)(c.code,{children:"InputComponent"})," 组件，例如用一个 ",(0,n.jsx)(c.code,{children:"div"})," 包裹起来。那么此时就会有一个很严重的问题。"]}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsxs)(c.li,{children:["首先，本身的 ",(0,n.jsx)(c.code,{children:"InputComponent"})," 组件需要 ",(0,n.jsx)(c.code,{children:"disabled"})," , ",(0,n.jsx)(c.code,{children:"readOnly"})," 参数，这样才能实现 ",(0,n.jsx)(c.code,{children:"input"})," 元素本身的 ",(0,n.jsx)(c.code,{children:"disabled"})," 和 ",(0,n.jsx)(c.code,{children:"readOnly"})," 的原生功能。"]}),"\n",(0,n.jsxs)(c.li,{children:["然后，加上 ",(0,n.jsx)(c.code,{children:"status"})," 这个参数，同样需要共享给包裹 ",(0,n.jsx)(c.code,{children:"InputComponent"})," 组件的父元素，父元素的 ",(0,n.jsx)(c.code,{children:"css"})," 才能根据状态的变化而显示不同的样式。例如 ",(0,n.jsx)(c.code,{children:"disabled"})," 状态时，给父元素的 ",(0,n.jsx)(c.code,{children:"css"})," 添加 ",(0,n.jsx)(c.code,{children:"cursor: not-allowed"}),"。"]}),"\n"]}),"\n",(0,n.jsx)(c.h2,{children:"2、增加前后缀图标"}),"\n",(0,n.jsxs)(c.p,{children:["增加前后缀简单来看只需要修改 ",(0,n.jsx)(c.code,{children:"css"}),"，但其实有个很大的坑，我们看完下面的示例后再说："]}),"\n",(0,n.jsx)(g,{}),"\n",(0,n.jsxs)(c.p,{children:["这里最大的问题点击前后缀图标的时候，应该让 ",(0,n.jsx)(c.code,{children:"input"})," 组件聚焦，这样就看起来是一个整体，而不是仅仅增加了图标而已。\n这个功能简单做法是给外层 ",(0,n.jsx)(c.code,{children:"div"})," 标签加一个 ",(0,n.jsx)(c.code,{children:"onClick"})," 事件，判断："]}),"\n",(0,n.jsx)(t.CodeBlock,{code:`// inputWrapperRef 就是包裹 input 组件的 div 元素的 ref 引用
// inputRef 是 input 组件的 ref 引用，我们是的 InputComponent 对外暴露了 focus 方法用来聚焦
const onClick = (e) => {
  if (inputWrapperRef.current && inputWrapperRef.current.contains(e?.target)) {
    inputRef.current?.focus();
  }
};`,language:"javascript"}),"\n",(0,n.jsxs)(c.p,{children:["完整效果可以在后面的 ",(0,n.jsx)(c.code,{children:"Input"})," 完整案例查看。"]}),"\n",(0,n.jsx)(c.h2,{children:"3、增加状态"}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"input"})," 很长见的状态包括，",(0,n.jsx)(c.code,{children:"默认"})," 状态，",(0,n.jsx)(c.code,{children:"warning"})," 状态，",(0,n.jsx)(c.code,{children:"error"})," 状态，",(0,n.jsx)(c.code,{children:"disabled"})," 状态 和 ",(0,n.jsx)(c.code,{children:"readOnly"})," 状态。来到这里其实已经有点复杂了，\n我们需要重新封装一下 ",(0,n.jsx)(c.code,{children:"InputComponent"})," 组件，添加 ",(0,n.jsx)(c.code,{children:"status"})," 参数。"]}),"\n",(0,n.jsxs)(c.p,{children:["为了简化这部分逻辑，",(0,n.jsx)(c.code,{children:"@t-headless-ui/react"})," 组件库中导出了一个 ",(0,n.jsx)(c.code,{children:"useInputGroup"})," 的 ",(0,n.jsx)(c.code,{children:"hook"}),", 来帮助我们简化这部分逻辑。完整实现在 ",(0,n.jsx)(c.code,{children:"tailwindcss"})," 章节，这里我们写个示例代码。"]}),"\n",(0,n.jsx)(t.CodeBlock,{code:`const TInput = forwardRef<RefInputType, TInputProps>((props, ref) => {
const {
  clearIcon = (
    <IconCloseLine className="group-hover:visible invisible transition-all duration-150 ease-linear cursor-pointer hover:rounded-full hover:bg-color-100" />
  ),
  prefixElement,
  suffixElement,
  showWordLimit,
  className,
  inputClassName,
  style,
  inputStyle,
  ...rest
} = props;
const { status, inputRef, inputWrapperRef, hasLengthError, value, onChange, onMouseDown, onClick } = useInputGroup(props);

const valueLength = value?.length;
const trueMaxLength = props?.maxLength?.length;

useImperativeHandle(ref, () => {
  return {
    ...inputRef.current,
    // 暴露这个属性给 popover 组件使用
    dom: inputWrapperRef.current,
  };
}, []);

return (
  <div
    className={cs(
      'input',
      {
        // disabled 的 css
        'input-disabled':
          props.disabled,
        // readOnly 的 css
        'input-readOnly': props.readOnly,
        // status 为 error 的 css
        'input-error': status === 'error' && !props.disabled,
        // status 为 warning 的 css
        'input-warning': status === 'warning' && !props.disabled,
      },

      className,
    )}
    ref={inputWrapperRef}
    style={style}
    onMouseDown={onMouseDown}
    onClick={onClick}
  >
    <span className="input-addon">{prefixElement}</span>
    <InputComponent
      ref={inputRef}
      {...rest}
      value={value}
      onChange={onChange}
      className={cs(
        'input-inner',
        {
          'input-inner-disabled': props.disabled,
          'input-inner-readOnly': props.readOnly,
        },
        inputClassName,
      )}
      style={inputStyle}
      clearIcon={clearIcon}
    />
    {trueMaxLength !== undefined && showWordLimit && (
      // 单独封装一个显示字数的组件
      <SuffixElement trueMaxLength={trueMaxLength} valueLength={valueLength} hasLengthError={hasLengthError} />
    )}
    <span className="input-addon">{suffixElement}</span>
  </div>

);
});`,language:"jsx"}),"\n",(0,n.jsx)(c.h2,{children:"4、更多功能"}),"\n",(0,n.jsxs)(c.p,{children:["更多功能是本身 ",(0,n.jsx)(c.code,{children:"@t-headless-ui/react"})," 组件库中 ",(0,n.jsx)(c.code,{children:"InputComponent"})," 组件的功能，会在完整案例中展示。"]}),"\n",(0,n.jsxs)(c.ul,{children:["\n",(0,n.jsxs)(c.li,{children:["normalizeTrigger: 指定 normalize 执行的时机('onBlur' | 'onPressEnter')，需要配合 ",(0,n.jsx)(c.code,{children:"normalize"})," 参数。"]}),"\n",(0,n.jsxs)(c.li,{children:["normalize: 在指定时机对用户输入的值进行格式化处理。前后值不一致时，会触发 ",(0,n.jsx)(c.code,{children:"onChange"}),"。类型：(value: string) => string;"]}),"\n",(0,n.jsxs)(c.li,{children:["maxLength: 输入框最大输入的长度；类型是 ",(0,n.jsx)(c.code,{children:"{ length?: number; errorOnly?: boolean }"}),"。设置 ",(0,n.jsx)(c.code,{children:"errorOnly"}),"为 ",(0,n.jsx)(c.code,{children:"true"})," 后，超过 ",(0,n.jsx)(c.code,{children:"maxLength"})," 会展示 ",(0,n.jsx)(c.code,{children:"error"})," 状态，并不限制用户输入。"]}),"\n",(0,n.jsxs)(c.li,{children:["autoFitWidth: 是否自动调整输入框宽度，默认是 ",(0,n.jsx)(c.code,{children:"true"}),"。类型：boolean; 配合 ",(0,n.jsx)(c.code,{children:"css"})," 中的 ",(0,n.jsx)(c.code,{children:"min-width"})," 和 ",(0,n.jsx)(c.code,{children:"max-width"})," 可以实现输入框宽度的自适应。"]}),"\n"]}),"\n",(0,n.jsx)(c.h2,{children:"5、总结"}),"\n",(0,n.jsx)(c.p,{children:"作为一名合格的前端开发，毫无疑问需要对页面常见功能和组件了解基本原理，如果要向更高级的前端工程师段位进阶，这些组件需要自己实现\n也是必须的。最后，希望文章对你有帮助，有任何疑惑，欢迎加入目前国内最好手写组件库交流群。"}),"\n",(0,n.jsxs)(c.p,{children:["完整代码可以去我的 ",(0,n.jsx)(c.code,{children:"@t-headless-ui/react"})," 组件库中查看。也欢迎报名我的质量超超超高的 ",(0,n.jsx)(c.code,{children:"React"})," 组件库开发教程。"]}),"\n",(0,n.jsx)(c.p,{children:"我也很乐意直接帮助你打造自己的核心项目，放入简历中，让你在面试中脱颖而出。"}),"\n",(0,n.jsxs)(c.p,{children:[(0,n.jsx)(c.code,{children:"Vue"})," 组件库也在开发中，vue 的同伴也欢迎加群哦。"]})]})}function v(e={}){let{wrapper:i}={...(0,r.useMDXComponents)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}function f(){return(0,n.jsx)(v,{})}e.s(["HowMakeCssInput",()=>f],59021)}]);