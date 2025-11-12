(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(n,e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return t}});let t=n=>{}},79537,n=>{n.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,n=>{n.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,n=>{"use strict";var e=n.i(45100);let r=(0,n.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,e.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});n.s(["IconMLogo",0,r])},7823,n=>{"use strict";function e(n,e){if(null==n)return{};var r={};for(var t in n)if(({}).hasOwnProperty.call(n,t)){if(-1!==e.indexOf(t))continue;r[t]=n[t]}return r}n.s(["default",()=>e])},37215,n=>{"use strict";function e(){return(e=Object.assign.bind()).apply(null,arguments)}n.s(["default",()=>e])},22480,n=>{"use strict";let e=(0,n.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});n.s(["AnchorContext",0,e])},98319,n=>{"use strict";var e=n.i(64334);function r(...n){return(0,e.useCallback)(e=>{n.forEach(n=>{"function"==typeof n?n(e):null!=n&&(n.current=e)})},n)}n.s(["useComposedRefs",()=>r])},88036,59013,n=>{"use strict";var e=n.i(45100),r=n.i(64334),t=n.i(22480);function i(n){let e=(0,r.useRef)(null);return e.current=n,(0,r.useCallback)((...n)=>e.current?.(...n),[])}n.s(["useEvent",()=>i],59013);var o=n.i(96224);function l(n,e){try{return n.querySelector(e)}catch(n){return null}}function s({scrollContainer:n,targetId:e,offset:r,isScrolling:t}){var i,s;if(!e)return;let c=l(document,`#${CSS.escape(e)}`);if(!c)return;let a=n.current,d=((void 0===(i=a)&&(i=window),i)&&(i===window?Math.ceil(window.pageYOffset):i.scrollTop)||0)+((n,e)=>{if(!n.getClientRects().length)return 0;let r=n.getBoundingClientRect();return r.width||r.height?e&&e!==window?r.top-e.getBoundingClientRect().top:(e=n.ownerDocument.documentElement,r.top-e.clientTop):r.top})(c,a)+r;(t.current=!0,(0,o.isWindow)(a))?a.scrollTo((void 0===(s=a)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,d):a.scrollTop=d}function c({targetId:n,linkMap:e,wrapperRef:r,currentId:t,setCurrentId:i,onChange:o}){n&&r.current&&e.current.get(n)&&n!==t&&i(n).then(()=>{o?.(n,t)})}var a=n.i(98319);let d=(0,r.forwardRef)((n,d)=>{let{scrollContainer:b,offset:u=0,children:h,onChange:p,queryKey:x="anchor-id",isCloseInitAnchor:g,...f}=n,{currentId:m,onLinkClick:v,wrapperRef:j,linkMap:C}=function({propScrollContainer:n,onChange:e,offset:t,queryKey:a,isCloseInitAnchor:d}){var b;let u,h,p=(0,r.useRef)(null),x=(0,r.useRef)(null),g=(0,r.useRef)(new Map),f=(0,r.useRef)(!1),[m,v]=function(n){let[e,t]=(0,r.useState)({value:"",resolve:n=>{}});return(0,r.useEffect)(()=>{e.resolve(e.value)},[e]),[e.value,n=>new Promise(e=>{t(r=>{let t=n;return"function"==typeof n&&(t=n(r.value)),{value:t,resolve:e}})})]}(0),j=i(()=>{if(f.current)return;let n=function({linkMap:n,scrollContainer:e}){let r=e.current,t=((0,o.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),i=Array.from(n.current.keys()),s=[];for(let n of i){let e=l(document,"#"+CSS.escape(n));if(e){let{top:n}=e.getBoundingClientRect(),i=(0,o.isWindow)(r)?n:n-t.top;i>=0&&s.push({element:e,top:i})}}return 0===s.length?null:s.reduce((n,e)=>n.top<=e.top?n:e).element}({linkMap:g,scrollContainer:x});n?.id&&c({targetId:n.id,linkMap:g,wrapperRef:p,currentId:m,setCurrentId:v,onChange:e})}),C=i((b=()=>{j(),f.current=!1},u=null,(h=(...n)=>{u||(u=setTimeout(()=>{u=null,b(...n)},30))}).cancel=()=>{u&&(clearTimeout(u),u=null)},h));return(0,r.useEffect)(()=>(x.current=(0,o.isString)(n)?l(document,n):n||window,x.current?.addEventListener("scroll",C),()=>{x.current?.removeEventListener("scroll",C)}),[C,n]),(0,r.useEffect)(()=>{if(!d)return void C();let n=new URLSearchParams(new URL(window.location.href).search).get(a);n&&(c({targetId:n,linkMap:g,wrapperRef:p,currentId:m,setCurrentId:v,onChange:e}),s({scrollContainer:x,targetId:n,offset:t,isScrolling:f}))},[]),{onScroll:C,currentId:m,onLinkClick:function(n,r){n.preventDefault(),c({targetId:r,linkMap:g,wrapperRef:p,currentId:m,setCurrentId:v,onChange:e}),s({scrollContainer:x,targetId:r,offset:t,isScrolling:f})},wrapperRef:p,scrollContainer:x,linkMap:g}}({propScrollContainer:b,onChange:p,offset:u,queryKey:x,isCloseInitAnchor:g});return(0,e.jsx)(t.AnchorContext.Provider,{value:{currentId:m,linkMap:C,onLinkClick:v},children:(0,e.jsx)("div",{...f,ref:(0,a.useComposedRefs)(j,d),children:h})})});n.s(["Anchor",0,d],88036)},69438,n=>{"use strict";var e=n.i(45100),r=n.i(64334),t=n.i(22480),i=n.i(98319);let o=(0,r.forwardRef)((n,o)=>{let{onLinkClick:l,linkMap:s,currentId:c}=(0,r.useContext)(t.AnchorContext),{onClick:a,targetId:d,children:b,className:u,activeClassName:h,...p}=n,x=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var n;return n=x.current,d&&s.current.set(d,n),()=>{s.current.delete(d)}},[d,s]),(0,e.jsx)("div",{ref:(0,i.useComposedRefs)(o,x),...p,onClick:n=>{n.stopPropagation(),a?.(n),l?.(n,d)},"data-target-id":d,className:c===d?h:u,children:b})});n.s(["AnchorLink",0,o],69438)},93562,n=>{"use strict";var e=n.i(88036),r=n.i(69438),t=n.i(22480);let i={Root:e.Anchor,Link:r.AnchorLink,Context:t.AnchorContext};n.s(["Anchor",()=>i])},59715,60326,42210,72932,47169,n=>{"use strict";var e=n.i(45100);n.i(73869);var r=n.i(84435);let t=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <Button
      disabled
      loading={true}
      onClick={() => {
        console.log('onClick 不触发');
      }}
    >
      Button
    </Button>
  );
}`;function i(){return(0,e.jsx)(r.CodePreview,{code:t})}n.s(["BasicExample",()=>i],60326);let o=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        onClick={() => {
          console.log('onClick 触发');
        }}
        type="button"
        className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition [&:not(:disabled):hover]:scale-110 [&:not(:disabled):hover]:shadow-xl [&:disabled]:cursor-not-allowed focus:ring-3 focus:outline-hidden disabled:bg-indigo-400"
      >
        Normal
      </Button>
      <Button
        onClick={() => {
          console.log('onClick 不触发');
        }}
        type="button"
        disabled
        className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition [&:not(:disabled):hover]:scale-110 [&:not(:disabled):hover]:shadow-xl [&:disabled]:cursor-not-allowed focus:ring-3 focus:outline-hidden disabled:bg-indigo-400"
      >
        Disabled
      </Button>
    </div>
  );
}`;function l(){return(0,e.jsx)(r.CodePreview,{code:o})}n.s(["TailwindBasicExample",()=>l],42210);let s=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        type="button"
        className="normal-btn btn-primary-fill"
        onClick={() => {
          console.log('onClick 触发');
        }}
      >
        Normal
      </Button>
      <Button
        type="button"
        disabled
        className="normal-btn btn-primary-fill"
        onClick={() => {
          console.log('onClick 不触发');
        }}
      >
        Disabled
      </Button>
    </div>
  );
}`,c=`.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-primary-bg-color: #2563eb;
  --btn-primary-bg-disabled-color: #93c5fd;
  --btn-primary-text-color: #fff;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-primary-fill:disabled {
  background-color: var(--btn-primary-bg-disabled-color);
  color: var(--btn-primary-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-primary-bg-color);
  color: var(--btn-primary-text-color);
  border: 1px solid transparent;
}`;function a(){return(0,e.jsx)(r.CodePreview,{code:s,cssCode:c})}n.s(["CssBasicExample",()=>a],72932);let d=`import { Button } from '@t-headless-ui/react';

function App() {
  return (
    <div className="flex gap-x-4">
      <Button
        type="button"
        className="normal-btn btn-success-fill"
        onClick={() => {
          console.log('onClick 触发');
        }}
      >
        Normal
      </Button>
      <Button
        type="button"
        disabled
        className="normal-btn btn-success-fill"
        onClick={() => {
          console.log('onClick 不触发');
        }}
      >
        Disabled
      </Button>
    </div>
  );
}`,b=`.btn-success-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2ba471;
  --btn-bg-disabled-color: #92dab2;
  --btn-text-color: #fff;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-success-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-success-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}`;function u(){return(0,e.jsx)(r.CodePreview,{code:d,cssCode:b})}n.s(["CssSuccessBasicExample",()=>u],47169),n.s([],59715)},64877,n=>{"use strict";var e=n.i(45100),r=n.i(18694);n.i(82928);var t=n.i(72304),i=n.i(2697),o=n.i(47445),l=n.i(69389),s=n.i(18805);n.i(73869);var c=n.i(84435);let a=`function App() {
  function TButton({ loading, children }) {
    return (
      <Button
        className={\`normal-btn btn-primary-fill \${!!loading ? 'normal-btn-loading' : '' }\`}
      >
        {loading ? (
          <IconLoadingLine className="mr-2 animate-spin" />
        ): null}
        {children}
      </Button>
    );
  }
  return (
    <div className="l flex gap-x-4">
      <TButton loading onClick={() => { console.log('onClick 不会触发') }}>
        Normal
      </TButton>
       <TButton>
        Hover Me
      </TButton>
    </div>
  );
}`,d=`.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2563eb;
  --btn-bg-disabled-color: #93c5fd;
  --btn-text-color: #fff;
  --btn-bg-hover: #366ef4;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-primary-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-success-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}

.btn-success-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-primary-fill.normal-btn-loading {
  cursor: default;
}
.btn-primary-fill:not(:disabled):not(.normal-btn-loading):hover {
  border-color: transparent;
  color: #fff;
  background-color: ;
}`;function b(){return(0,e.jsx)(c.CodePreview,{code:a,cssCode:d})}let u=`function App() {
  function TButton({ loading, children, size }) {
    return (
      <Button
        className={cs(
          'normal-btn btn-primary-fill',
          {
            'normal-btn-loading': !!loading,
            'btn-small': size === 'sm',
            'btn-large': size === 'lg',
          }
        )}
        onClick={() => { console.log('onClick 不会触发') }}
      >
        {loading ? (
          <IconLoadingLine className="mr-2 animate-spin" />
        ): null}
        {children}
      </Button>
    );
  }
  return (
    <div className="l btn-group">
      <TButton>
        Small
      </TButton>
      <TButton>
        Default
      </TButton>
      <TButton>
        large
      </TButton>
    </div>
  );
}`,h=`.btn-group {
  display: inline-flex;
  --btn-radius: 4px;
}
.btn-group .normal-btn:first-child {
  border-radius: var(--btn-radius) 0 0 var(--btn-radius);
}
.btn-group .btn-outline:first-child:hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:not(:first-child):not(:last-child):hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:last-child {
  border-radius: 0 var(--btn-radius) var(--btn-radius) 0;
}
.btn-group .normal-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group .normal-btn:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 20%);
}


.btn-small {
  height: 28px
}

.btn-large {
  height: 36px
}

.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2563eb;
  --btn-bg-disabled-color: #93c5fd;
  --btn-text-color: #fff;
  --btn-bg-hover: #4670d2;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-primary-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-success-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}

.btn-success-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-primary-fill.normal-btn-loading {
  cursor: default;
}
.btn-primary-fill:not(:disabled):not(.normal-btn-loading):hover {
  border-color: transparent;
  color: #fff;
  background-color: var(--btn-bg-hover);
}`;function p(){return(0,e.jsx)(c.CodePreview,{code:u,cssCode:h})}let x=`function App() {
  function TButton({ loading, children, size }) {
    return (
      <Button
        className={cs(
          'normal-btn btn-primary-fill',
          {
            'normal-btn-loading': !!loading,
            'btn-small': size === 'sm',
            'btn-large': size === 'lg',
          }
        )}
        onClick={() => { console.log('onClick 不会触发') }}
      >
        {loading ? (
          <IconLoadingLine className="mr-2 animate-spin" />
        ): null}
        {children}
      </Button>
    );
  }
  return (
    <div className="l flex gap-x-4">
      <TButton size="sm">
        Small
      </TButton>
      <TButton>
        Default
      </TButton>
      <TButton size="lg">
        large
      </TButton>
    </div>
  );
}`,g=`.btn-small {
  height: 28px
}

.btn-large {
  height: 36px
}

.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2563eb;
  --btn-bg-disabled-color: #93c5fd;
  --btn-text-color: #fff;
  --btn-bg-hover: #4670d2;
}
.normal-btn {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: var(--btn-padding);
  height: var(--btn-height);
  font-size: var(--btn-font-size);
  appearance: none;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s var(--transition-timing-function-standard);
  box-sizing: border-box;
  line-height: var(--btn-lineHeight);
  border-radius: var(--btn-radius);
}
.btn-primary-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}
.btn-primary-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-success-fill:disabled {
  background-color: var(--btn-bg-disabled-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
  cursor: not-allowed;
}

.btn-success-fill:not(:disabled) {
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  border: 1px solid transparent;
}

.btn-primary-fill.normal-btn-loading {
  cursor: default;
}
.btn-primary-fill:not(:disabled):not(.normal-btn-loading):hover {
  border-color: transparent;
  color: #fff;
  background-color: var(--btn-bg-hover);
}`;function f(){return(0,e.jsx)(c.CodePreview,{code:x,cssCode:g})}n.i(37247);var m=n.i(34947);let v={title:"CSS 换肤方案",href:(0,m.getImageUrl)("/solution/theme/css")},j={title:"Tailwind 换肤方案",href:(0,m.getImageUrl)("/solution/theme/tailwind")},C={title:"Next.js 换肤方案",href:(0,m.getImageUrl)("/solution/theme/next")};n.i(59715);var y=n.i(72932),B=n.i(47169);function w(n){let c={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.H1,{subheading:"使用 css/less/sass 构建篇",children:"原来精美的 Button 都是这么封装的？一看就会"}),"\n",(0,e.jsx)(i.AvatarM,{}),"\n",(0,e.jsx)(t.ImageTypography,{src:"/button/button.webp",fill:!0,alt:"button"}),"\n",(0,e.jsxs)(c.p,{children:["注：这篇是讲的使用 ",(0,e.jsx)(c.code,{children:"css"})," 添加样式。如果你对原子类添加样式感兴趣，例如 ",(0,e.jsx)(c.code,{children:"tailwindcss"}),"， 请移步下面的篇文章。"]}),"\n",(0,e.jsx)(c.h2,{children:"1、抽象 Button 状态"}),"\n",(0,e.jsxs)(c.p,{children:["对于 ",(0,e.jsx)(c.code,{children:"button"})," 我们可以将一些常用的功能单独抽离成 ",(0,e.jsx)(c.code,{children:"css"})," 变量。例如："]}),"\n",(0,e.jsxs)(c.ul,{children:["\n",(0,e.jsxs)(c.li,{children:["设置不同主题色：例如 ",(0,e.jsx)(c.code,{children:"primary"}),"（主色）, ",(0,e.jsx)(c.code,{children:"success"}),"（成功状态）, ",(0,e.jsx)(c.code,{children:"error"}),"（失败状态） 等等。"]}),"\n",(0,e.jsxs)(c.li,{children:["设置 ",(0,e.jsx)(c.code,{children:"disabled"})," 状态的背景色，文字颜色（不同主题色还需要分别设置不同的 ",(0,e.jsx)(c.code,{children:"disabled"})," 状态色）"]}),"\n",(0,e.jsx)(c.li,{children:"等等"}),"\n"]}),"\n",(0,e.jsx)(c.p,{children:"注：如果你对主题换肤方案感兴趣，请查看组件库全局解决方案之换肤方案篇："}),"\n",(0,e.jsxs)(c.ul,{children:["\n",(0,e.jsxs)(c.li,{children:["\n",(0,e.jsx)(s.Link,{href:v.href,children:v.title}),"\n"]}),"\n",(0,e.jsxs)(c.li,{children:["\n",(0,e.jsx)(s.Link,{href:j.href,children:j.title}),"\n"]}),"\n",(0,e.jsxs)(c.li,{children:["\n",(0,e.jsx)(s.Link,{href:C.href,children:C.title}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(c.p,{children:["如下，可以看到，我们定义了一些跟颜色相关的 ",(0,e.jsx)(c.code,{children:"css"})," 变量, 放入了 ",(0,e.jsx)(c.code,{children:".btn-primary-fill"})," 这个类名："]}),"\n",(0,e.jsx)(o.CodeBlock,{code:`.btn-primary-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2563eb;
  --btn-bg-disabled-color: #93c5fd;
  --btn-text-color: #fff;
}`,language:"css"}),"\n",(0,e.jsx)(c.p,{children:"使用如下"}),"\n",(0,e.jsx)(y.CssBasicExample,{}),"\n",(0,e.jsxs)(c.p,{children:["所以我们可以自定义一套 ",(0,e.jsx)(c.code,{children:".btn-primary-fill"})," 里面的 ",(0,e.jsx)(c.code,{children:"css"})," 变量，从而\n达到自定义样式的目的，例如使用如下的 ",(0,e.jsx)(c.code,{children:".btn-success-fill"})," 来替代 ",(0,e.jsx)(c.code,{children:".btn-primary-fill"})," (注意颜色变化)"]}),"\n",(0,e.jsx)(o.CodeBlock,{code:`.btn-success-fill {
  --btn-padding: 0 14px;
  --btn-height: 36px;
  --btn-font-size: 14px;
  --transition-timing-function-standard: cubic-bezier(0.34, 0.69, 0.1, 1);
  --btn-lineHeight: 1.5715;
  --btn-radius: 4px;
  --btn-bg-color: #2ba471;
  --btn-bg-disabled-color: #92dab2;
  --btn-text-color: #fff;
}`,language:"css"}),"\n",(0,e.jsx)(c.p,{children:"效果如下："}),"\n",(0,e.jsx)(B.CssSuccessBasicExample,{}),"\n",(0,e.jsxs)(c.p,{children:["需要注意，其实这里的颜色，一般都是全局在 ",(0,e.jsx)(c.code,{children:"global.css"})," 中定义的主题色，我们这里为了是直接写死的。"]}),"\n",(0,e.jsx)(c.h2,{children:"2、增加 loading/hover 态"}),"\n",(0,e.jsxs)(c.p,{children:["我们上面定义了正常和 ",(0,e.jsx)(c.code,{children:"disabled"})," 状态的 ",(0,e.jsx)(c.code,{children:"css"})," 变量，接下来 ",(0,e.jsx)(c.code,{children:"loading"})," 状态需要的是一个 ",(0,e.jsx)(c.code,{children:"loading"})," 图标，\n图标我们直接从 ",(0,e.jsx)(c.code,{children:"@t-headless-ui/react"})," 中获取, 对 ",(0,e.jsx)(c.code,{children:"loading"})," 处理是传入参数 ",(0,e.jsx)(c.code,{children:"loading: true"})," 的参数，\n就会出现 ",(0,e.jsx)(c.code,{children:"loading"})," 图标，当然你可以自定义任意 ",(0,e.jsx)(c.code,{children:"loading"})," 图标。"]}),"\n",(0,e.jsxs)(c.p,{children:["需要注意，",(0,e.jsx)(c.code,{children:"loading"})," 状态，",(0,e.jsx)(c.code,{children:"onClick"})," 事件是不会触发。"]}),"\n",(0,e.jsxs)(c.p,{children:["接着我们增加一下 ",(0,e.jsx)(c.code,{children:"hover"})," 状态，为什么需要 ",(0,e.jsx)(c.code,{children:"hover"})," 态呢？好处就是当 ",(0,e.jsx)(c.code,{children:"hover"})," 按钮时，能给对面一个反馈，知道此时正在 ",(0,e.jsx)(c.code,{children:"hover"})," 哪个按钮，我们使用如下\ncss 实现："]}),"\n",(0,e.jsx)(o.CodeBlock,{code:`.btn-primary-fill {
  /* ... */
  --btn-bg-hover: #4670d2;
}
.btn-primary-fill:not(:disabled):not(.normal-btn-loading):hover {
  border-color: transparent;
  color: #fff;
  background-color: var(--btn-bg-hover);
}`,language:"css"}),"\n",(0,e.jsx)(c.p,{children:"效果如下："}),"\n",(0,e.jsx)(b,{}),"\n",(0,e.jsx)(c.h2,{children:"3、增加 active/focus 态"}),"\n",(0,e.jsxs)(c.p,{children:[(0,e.jsx)(c.code,{children:"active"})," 状态是指点击按钮且没有离开按钮时的状态，表明按钮正在被点击，我们在后续的 《创意案例》 章节会有\n很多有意思的案例，比如点击按钮时，按钮会有一个波纹效果，会有彩带等等。"]}),"\n",(0,e.jsxs)(c.p,{children:[(0,e.jsx)(c.code,{children:"focus"})," 状态是指当我们使用键盘的 ",(0,e.jsx)(c.code,{children:"tab"})," 键选中按钮时的状态。主要是有些场景用户希望用 ",(0,e.jsx)(c.code,{children:"tab"})," 快速选中按钮\n例如在弹框组件中，往往会有确定和取消两个按钮，我们就可以使用 ",(0,e.jsx)(c.code,{children:"tab"})," 快速选中。所以有一个 ui 上能区分是否 ",(0,e.jsx)(c.code,{children:"focus"}),"\n对应按钮是很有必要的。"]}),"\n",(0,e.jsxs)(c.p,{children:["加这个两个状态也就是几行 ",(0,e.jsx)(c.code,{children:"css"})," 的事，如下："]}),"\n",(0,e.jsx)(o.CodeBlock,{code:`.btn-primary-fill:not(:disabled):not(.normal-btn-loading):active {
background-color: theme('colors.primary.active');
color: #fff;
border: 1px solid transparent;
}

.btn-primary-fill:not(:disabled):focus-visible {
outline: 2px solid theme('colors.primary.focus');
outline-offset: 1px;
}`,language:"css"}),"\n",(0,e.jsx)(c.h2,{children:"4、使用 css 增强 Button"}),"\n",(0,e.jsxs)(c.ul,{children:["\n",(0,e.jsxs)(c.li,{children:["按钮尺寸：很多库会让 ",(0,e.jsx)(c.code,{children:"Button"})," 组件支持 ",(0,e.jsx)(c.code,{children:"lg"}),"、",(0,e.jsx)(c.code,{children:"sm"})," 等尺寸，其实就是修改一下 ",(0,e.jsx)(c.code,{children:"height"})," 和 ",(0,e.jsx)(c.code,{children:"padding"})," 即可。"]}),"\n"]}),"\n",(0,e.jsxs)(c.p,{children:["我们先拿按钮尺寸来举例，在这之前，我们首先要明白一个很重要的辅助函数 ",(0,e.jsx)(c.code,{children:"classNames"}),"。"]}),"\n",(0,e.jsxs)(c.p,{children:["简单来说 ",(0,e.jsx)(c.code,{children:"classNames"})," 是一个帮助你动态拼接 ",(0,e.jsx)(c.code,{children:"CSS"})," 类名的小工具，让你写样式时更简洁、更清晰。"]}),"\n",(0,e.jsx)(c.p,{children:"🎯 为什么需要它？\n你可能经常会写这样的代码："}),"\n",(0,e.jsx)(o.CodeBlock,{code:`<div className={isActive ? "btn active" : "btn"}>点击我</div>`,language:"jsx"}),"\n",(0,e.jsx)(c.p,{children:"但当你的条件变多，代码就会变得很乱，比如这样："}),"\n",(0,e.jsx)(o.CodeBlock,{code:`<div className={isActive ? (isDisabled ? 'btn active disabled' : 'btn active') : isDisabled ? 'btn disabled' : 'btn'}>点击我</div>`,language:"jsx"}),"\n",(0,e.jsx)(c.p,{children:"😵 看起来非常难读！我们可以用 classnames 简化"}),"\n",(0,e.jsx)(o.CodeBlock,{code:`import classNames from "classnames";

<div
className={classNames('btn', {
  active: isActive,
  disabled: isDisabled,
})}
>
点击我
</div>
`,language:"jsx"}),"\n",(0,e.jsx)(c.p,{children:"这会根据 isActive 和 isDisabled 的值自动拼接类名。"}),"\n",(0,e.jsx)(c.p,{children:"比如："}),"\n",(0,e.jsxs)(c.ul,{children:["\n",(0,e.jsxs)(c.li,{children:["\n",(0,e.jsx)(c.p,{children:'isActive = true, isDisabled = false ➜ "btn active"'}),"\n"]}),"\n",(0,e.jsxs)(c.li,{children:["\n",(0,e.jsx)(c.p,{children:'isActive = false, isDisabled = true ➜ "btn disabled"'}),"\n"]}),"\n",(0,e.jsxs)(c.li,{children:["\n",(0,e.jsx)(c.p,{children:'都为 true ➜ "btn active disabled"'}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(c.p,{children:[(0,e.jsx)(c.code,{children:"classNames"})," 还支持传入数组，比如："]}),"\n",(0,e.jsx)(o.CodeBlock,{code:`<div className={classNames('btn', ['active', 'disabled'])}>点击我</div>`,language:"jsx"}),"\n",(0,e.jsx)(c.p,{children:'这会拼接 "btn active disabled" 这个类名。'}),"\n",(0,e.jsxs)(c.p,{children:["好了，我们接着之前的增加按钮尺寸的功能。\n我们使用 ",(0,e.jsx)(c.code,{children:"classNames"})," 辅助函数，动态拼接 ",(0,e.jsx)(c.code,{children:"CSS"})," 类名，实现按钮尺寸的功能。还有，我自己实现了一个简单 ",(0,e.jsx)(c.code,{children:"classNames"})," 辅助函数，命令为 ",(0,e.jsx)(c.code,{children:"cs"}),"。"]}),"\n",(0,e.jsx)(f,{}),"\n",(0,e.jsxs)(c.p,{children:["下面的一些对标知名组件库的功能，大家也可以用类似的方法去实现，因为都是简单的 ",(0,e.jsx)(c.code,{children:"css"})," + ",(0,e.jsx)(c.code,{children:"classNames"})," 辅助函数的组合。我就不赘述了。"]}),"\n",(0,e.jsxs)(c.ul,{children:["\n",(0,e.jsx)(c.li,{children:"单个图标的 Button：将按钮长宽设置一致即可。"}),"\n",(0,e.jsx)(c.li,{children:"边框按钮、纯文字按钮：将背景颜色去掉，改为边框颜色即可。"}),"\n",(0,e.jsxs)(c.li,{children:["按钮状态，例如成功状态按钮：设置不同主题色即可，建议在 ",(0,e.jsx)(c.code,{children:"global.css"})," 中定义，这个涉及到组件库的换肤方案，有兴趣的可以来我们的组件库交流群里找我详细了解。"]}),"\n"]}),"\n",(0,e.jsxs)(c.p,{children:["其实，Button 组件使用 ",(0,e.jsx)(c.code,{children:"less"})," 我在自己之前实现的组件库 ",(0,e.jsx)(c.code,{children:"@mx-design/react"})," 中也有实现，感兴趣的同学欢迎到我的 github 和组件库群探讨。但我也深知\n这种 ",(0,e.jsx)(c.code,{children:"css"})," 和组件耦合的组件库的局限性，所以放弃了 ",(0,e.jsx)(c.code,{children:"@mx-design/react"})," 的维护，转而专注于 ",(0,e.jsx)(c.code,{children:"headless"})," 的组件库的开发。你们会在下一章节 ",(0,e.jsx)(c.code,{children:"Tailwindcss Button"})," 中看到完整源码。"]}),"\n",(0,e.jsx)(c.h2,{children:"5、增加实现 group 按钮"}),"\n",(0,e.jsxs)(c.p,{children:["这个也比较好实现，其实也算是简单的 ",(0,e.jsx)(c.code,{children:"css"})," 功能。我们可以在 Button 组件外层包裹一个 ",(0,e.jsx)(c.code,{children:"div"}),"，然后给 ",(0,e.jsx)(c.code,{children:"div"})," 加上一个类名，例如 ",(0,e.jsx)(c.code,{children:"button-group"}),"。"]}),"\n",(0,e.jsxs)(c.ul,{children:["\n",(0,e.jsxs)(c.li,{children:["然后对于 ",(0,e.jsx)(c.code,{children:"button-group"})," 第一个子元素，也就是第一个 ",(0,e.jsx)(c.code,{children:"Button"})," 组件，我们可以给它左上角和左下角加上一个 ",(0,e.jsx)(c.code,{children:"border-radius"}),"，例如 ",(0,e.jsx)(c.code,{children:"4px"}),"。"]}),"\n",(0,e.jsxs)(c.li,{children:["接着对于 ",(0,e.jsx)(c.code,{children:"button-group"})," 最后一个子元素，也就是最后一个 ",(0,e.jsx)(c.code,{children:"Button"})," 组件，我们可以给它右上角和右下角加上一个 ",(0,e.jsx)(c.code,{children:"border-radius"}),"，例如 ",(0,e.jsx)(c.code,{children:"4px"}),"。"]}),"\n"]}),"\n",(0,e.jsx)(c.p,{children:"就轻松实现 group 按钮的功能了。"}),"\n",(0,e.jsxs)(c.p,{children:[(0,e.jsx)(c.code,{children:"css"})," 大致如下（以下代码还处理了一些边界情况，例如按钮重合部分，有的边框需要）"]}),"\n",(0,e.jsx)(o.CodeBlock,{code:`.btn-group {
  display: inline-flex;
  --btn-radius: 4px;
}
.btn-group .normal-btn:first-child {
  border-radius: var(--btn-radius) 0 0 var(--btn-radius);
}
.btn-group .btn-outline:first-child:hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:not(:first-child):not(:last-child):hover {
  border-right-color: transparent;
}
.btn-group .normal-btn:last-child {
  border-radius: 0 var(--btn-radius) var(--btn-radius) 0;
}
.btn-group .normal-btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group .normal-btn:not(:last-child) {
  border-right: 1px solid rgba(255, 255, 255, 20%);
}`,language:"css"}),"\n",(0,e.jsx)(c.p,{children:"效果如下："}),"\n",(0,e.jsx)(p,{}),"\n",(0,e.jsx)(c.h2,{children:"6、总结"}),"\n",(0,e.jsx)(c.p,{children:"作为一名合格的前端开发，毫无疑问需要对页面常见功能和组件了解基本原理，如果要向更高级的前端工程师段位进阶，这些组件需要自己实现\n也是必须的。最后，希望文章对你有帮助，有任何疑惑，欢迎加入目前国内最好手写组件库交流群。"}),"\n",(0,e.jsxs)(c.p,{children:["完整代码可以去我的 ",(0,e.jsx)(c.code,{children:"@mx-design/react"})," 组件库中查看。也欢迎报名我的质量超超超高的 ",(0,e.jsx)(c.code,{children:"React"})," 组件库开发教程。\n我肯定你学到的知识，会把很多同段位的前端遥遥甩在身后，这对于你面试项目介绍、远程工作展示自己的项目、或者接单子时展示实力都会大有帮助。\n我也很乐意直接帮助优化简历中的项目介绍的内容。"]}),"\n",(0,e.jsxs)(c.p,{children:[(0,e.jsx)(c.code,{children:"Vue"})," 组件库也在开发中，vue 的同伴也欢迎加群哦。"]})]})}function k(n={}){let{wrapper:t}={...(0,r.useMDXComponents)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(w,{...n})}):w(n)}function N(){return(0,e.jsx)(k,{})}n.s(["HowMakeCssButton",()=>N],64877)}]);