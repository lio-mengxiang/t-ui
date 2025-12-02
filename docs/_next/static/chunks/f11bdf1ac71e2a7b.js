(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(o,e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return t}});let t=o=>{}},79537,o=>{o.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,o=>{o.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,o=>{"use strict";var e=o.i(45100);let r=(0,o.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,e.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});o.s(["IconMLogo",0,r])},7823,o=>{"use strict";function e(o,e){if(null==o)return{};var r={};for(var t in o)if(({}).hasOwnProperty.call(o,t)){if(-1!==e.indexOf(t))continue;r[t]=o[t]}return r}o.s(["default",()=>e])},37215,o=>{"use strict";function e(){return(e=Object.assign.bind()).apply(null,arguments)}o.s(["default",()=>e])},22480,o=>{"use strict";let e=(0,o.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});o.s(["AnchorContext",0,e])},98319,o=>{"use strict";var e=o.i(64334);function r(...o){return(0,e.useCallback)(e=>{o.forEach(o=>{"function"==typeof o?o(e):null!=o&&(o.current=e)})},o)}o.s(["useComposedRefs",()=>r])},88036,o=>{"use strict";var e=o.i(45100),r=o.i(64334),t=o.i(22480);function n(o){let e=(0,r.useRef)(null);return e.current=o,(0,r.useCallback)((...o)=>e.current?.(...o),[])}var p=o.i(96224);function a(o,e){try{return o.querySelector(e)}catch(o){return null}}function c({scrollContainer:o,targetId:e,offset:r,isScrolling:t}){var n,c;if(!e)return;let i=a(document,`#${CSS.escape(e)}`);if(!i)return;let l=o.current,d=((void 0===(n=l)&&(n=window),n)&&(n===window?Math.ceil(window.pageYOffset):n.scrollTop)||0)+((o,e)=>{if(!o.getClientRects().length)return 0;let r=o.getBoundingClientRect();return r.width||r.height?e&&e!==window?r.top-e.getBoundingClientRect().top:(e=o.ownerDocument.documentElement,r.top-e.clientTop):r.top})(i,l)+r;(t.current=!0,(0,p.isWindow)(l))?l.scrollTo((void 0===(c=l)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,d):l.scrollTop=d}function i({targetId:o,linkMap:e,wrapperRef:r,currentId:t,setCurrentId:n,onChange:p}){o&&r.current&&e.current.get(o)&&o!==t&&n(o).then(()=>{p?.(o,t)})}var l=o.i(98319);let d=(0,r.forwardRef)((o,d)=>{let{scrollContainer:s,offset:v=0,children:u,onChange:h,queryKey:m="anchor-id",isCloseInitAnchor:x,...g}=o,{currentId:f,onLinkClick:w,wrapperRef:b,linkMap:j}=function({propScrollContainer:o,onChange:e,offset:t,queryKey:l,isCloseInitAnchor:d}){var s;let v,u,h=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useRef)(new Map),g=(0,r.useRef)(!1),[f,w]=function(o){let[e,t]=(0,r.useState)({value:"",resolve:o=>{}});return(0,r.useEffect)(()=>{e.resolve(e.value)},[e]),[e.value,o=>new Promise(e=>{t(r=>{let t=o;return"function"==typeof o&&(t=o(r.value)),{value:t,resolve:e}})})]}(0),b=n(()=>{if(g.current)return;let o=function({linkMap:o,scrollContainer:e}){let r=e.current,t=((0,p.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),n=Array.from(o.current.keys()),c=[];for(let o of n){let e=a(document,"#"+CSS.escape(o));if(e){let{top:o}=e.getBoundingClientRect(),n=(0,p.isWindow)(r)?o:o-t.top;n>=0&&c.push({element:e,top:n})}}return 0===c.length?null:c.reduce((o,e)=>o.top<=e.top?o:e).element}({linkMap:x,scrollContainer:m});o?.id&&i({targetId:o.id,linkMap:x,wrapperRef:h,currentId:f,setCurrentId:w,onChange:e})}),j=n((s=()=>{b(),g.current=!1},v=null,(u=(...o)=>{v||(v=setTimeout(()=>{v=null,s(...o)},30))}).cancel=()=>{v&&(clearTimeout(v),v=null)},u));return(0,r.useEffect)(()=>(m.current=(0,p.isString)(o)?a(document,o):o||window,m.current?.addEventListener("scroll",j),()=>{m.current?.removeEventListener("scroll",j)}),[j,o]),(0,r.useEffect)(()=>{if(!d)return void j();let o=new URLSearchParams(new URL(window.location.href).search).get(l);o&&(i({targetId:o,linkMap:x,wrapperRef:h,currentId:f,setCurrentId:w,onChange:e}),c({scrollContainer:m,targetId:o,offset:t,isScrolling:g}))},[]),{onScroll:j,currentId:f,onLinkClick:function(o,r){o.preventDefault(),i({targetId:r,linkMap:x,wrapperRef:h,currentId:f,setCurrentId:w,onChange:e}),c({scrollContainer:m,targetId:r,offset:t,isScrolling:g})},wrapperRef:h,scrollContainer:m,linkMap:x}}({propScrollContainer:s,onChange:h,offset:v,queryKey:m,isCloseInitAnchor:x});return(0,e.jsx)(t.AnchorContext.Provider,{value:{currentId:f,linkMap:j,onLinkClick:w},children:(0,e.jsx)("div",{...g,ref:(0,l.useComposedRefs)(b,d),children:u})})});o.s(["Anchor",0,d],88036)},69438,o=>{"use strict";var e=o.i(45100),r=o.i(64334),t=o.i(22480),n=o.i(98319);let p=(0,r.forwardRef)((o,p)=>{let{onLinkClick:a,linkMap:c,currentId:i}=(0,r.useContext)(t.AnchorContext),{onClick:l,targetId:d,children:s,className:v,activeClassName:u,...h}=o,m=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var o;return o=m.current,d&&c.current.set(d,o),()=>{c.current.delete(d)}},[d,c]),(0,e.jsx)("div",{ref:(0,n.useComposedRefs)(p,m),...h,onClick:o=>{o.stopPropagation(),l?.(o),a?.(o,d)},"data-target-id":d,className:i===d?u:v,children:s})});o.s(["AnchorLink",0,p],69438)},93562,o=>{"use strict";var e=o.i(88036),r=o.i(69438),t=o.i(22480);let n={Root:e.Anchor,Link:r.AnchorLink,Context:t.AnchorContext};o.s(["Anchor",()=>n])},59772,o=>{"use strict";var e=o.i(64334);let r=(0,e.createContext)({checked:!1});var t=o.i(45100),n=o.i(2157);let p=(0,e.createContext)({type:"radio"}),a={RadioContext:r,Root:function(o){let a=(0,e.useContext)(p),c=function({props:o,context:e}){let r={...o};return e.group&&(r.checked=e.value===o.value,r.disabled=!!(e.disabled||o.disabled),r.readonly=!!(e.readonly||o.readonly)),r}({props:o,context:a}),{disabled:i,readonly:l,children:d,value:s,checked:v,onChange:u,...h}=c,m=(0,e.useRef)(null),[x,g]=(0,n.useMergeValue)(!1,{value:v,defaultValue:c.defaultChecked});return(0,t.jsx)(r.Provider,{value:{checked:x,disabled:i,readonly:l},children:(0,t.jsxs)("label",{...h,onClick:function(o){i||l?o.preventDefault():h?.onClick?.(o)},"aria-disabled":!!i,"aria-readonly":!!l,"aria-checked":!!x,children:[(0,t.jsx)("input",{ref:m,disabled:!!i,value:s,type:"radio",checked:!!x,onChange:e=>{e.persist(),e.stopPropagation(),i||l||(a.group?a?.onChangeValue?.(s,e):"checked"in o||x||g(!0),x||u?.(!0,e))},onClick:o=>{o.stopPropagation()},"aria-readonly":!!l}),d]})})},Group:function(o){let{name:e,children:r,type:a="radio",disabled:c,readonly:i,onChange:l,...d}=o,[s,v]=(0,n.useMergeValue)(void 0,{defaultValue:o.defaultValue,value:o.value});return(0,t.jsx)("div",{role:"radiogroup",...d,children:(0,t.jsx)(p.Provider,{value:{onChangeValue:(e,r)=>{e!==s&&("value"in o||v(e),l?.(e,r))},type:a,value:s,disabled:c,readonly:i,group:!0,name:e},children:r})})}};o.s(["Radio",()=>a],59772)},54969,o=>{"use strict";var e=o.i(45100),r=o.i(18694);o.i(82928);var t=o.i(72304),n=o.i(47445),p=o.i(69389);o.i(73869);var a=o.i(84435);let c=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="top" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点击我</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div style={{
          padding: '4px 10px',
          background: 'var(--bg-color)',
          color: 'var(--text-color)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          marginBottom: '6px',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`;function i(){return(0,e.jsx)(a.CodePreview,{code:c})}let l=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="bottom" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div className="t-popup popover-content">
          Popover Content
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`,d=`.t-popup {
  padding: 4px 10px;
  background: var(--bg-color);
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  --popover-content-margin: 8px;
  --popover-content-arrow-margin: 12px;
}
.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: var(--popover-content-margin);
}

.t-popover-content[data-placement^='bottom'] .popover-content {
  margin-top: var(--popover-content-margin);
}

.t-popover-content[data-placement^='left'] .popover-content {
  margin-right: var(--popover-content-margin);
}

.t-popover-content[data-placement^='right'] .popover-content {
  margin-left: var(--popover-content-margin);
}`;function s(){return(0,e.jsx)(a.CodePreview,{code:l,cssCode:d})}let v=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="bottom" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
      <Popover.Content>
        <div className="t-popup popover-content">
          Popover Content
          <div className="popover-content-arrow"></div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}`,u=`.t-popup {
  padding: 4px 10px;
  background: var(--bg-color);
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  z-index: 1001;
  position: relative;
  --popover-content-margin: 8px;
  --popover-arrow-width: 8px;
  --border-popover-color: var(--border-color);
}

.popover-content-arrow {
  position: absolute;
  z-index: 1;
  background-color: inherit;

  &::before {
    position: absolute;
    content: '';
    width: var(--popover-arrow-width);
    height: var(--popover-arrow-width);
    transform: rotate(45deg);
    background-color: inherit;
  }
}

.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: var(--popover-content-margin);
}

.t-popover-content[data-placement^='bottom'] .popover-content {
  margin-top: var(--popover-content-margin);
}

.t-popover-content[data-placement^='left'] .popover-content {
  margin-right: var(--popover-content-margin);
}

.t-popover-content[data-placement^='right'] .popover-content {
  margin-left: var(--popover-content-margin);
}

/**
 * popover-content-arrow
 */
.t-popover-content[data-placement^='top'] .popover-content-arrow {
  &::before {
    border-top-left-radius: 100%;
    border-bottom: 1px solid var(--border-popover-color);
    border-right: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='top-start'] .popover-content-arrow {
  left: var(--popover-arrow-width);
}

.t-popover-content[data-placement='top'] .popover-content-arrow {
  left: 50%;
  margin-left: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='top-end'] .popover-content-arrow {
  left: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='bottom'] .popover-content-arrow {
  top: calc((-1 * var(--popover-arrow-width) / 2) - 1px);
  &::before {
    border-bottom-right-radius: 100%;
    border-top: 1px solid var(--border-popover-color);
    border-left: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='bottom-start'] .popover-content-arrow {
  left: var(--popover-arrow-width);
}

.t-popover-content[data-placement='bottom'] .popover-content-arrow {
  left: 50%;
  margin-left: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='bottom-end'] .popover-content-arrow {
  left: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='left'] .popover-content-arrow {
  right: calc(1 * var(--popover-arrow-width) / 2);
  &::before {
    border-top: 1px solid var(--border-popover-color);
    border-right: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='left-start'] .popover-content-arrow {
  top: var(--popover-arrow-width);
}

.t-popover-content[data-placement='left'] .popover-content-arrow {
  top: 50%;
  margin-top: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='left-end'] .popover-content-arrow {
  top: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='right'] .popover-content-arrow {
  left: calc((-1 * var(--popover-arrow-width) / 2) - 1px);
  &::before {
    border-bottom: 1px solid var(--border-popover-color);
    border-left: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='right-start'] .popover-content-arrow {
  top: var(--popover-arrow-width);
}

.t-popover-content[data-placement='right'] .popover-content-arrow {
  top: 50%;
  margin-top: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='right-end'] .popover-content-arrow {
  top: calc(100% - var(--popover-arrow-width) * 2);
}
`;function h(){return(0,e.jsx)(a.CodePreview,{code:v,cssCode:u})}var m=o.i(72069);o.i(70977);var x=o.i(21518);function g({placement:o="top",trigger:r="hover",attach:t="body",disabled:n=!1,children:p,offsetDistance:a=0,offsetSkidding:c=0,strategy:i="absolute",visible:l,defaultVisible:d,onVisibleChange:s,showArrow:v=!1,popoverContent:u}){return(0,e.jsxs)(m.Popover.Root,{placement:o,trigger:r,disabled:n,strategy:i,offsetDistance:a,offsetSkidding:c,visible:l,defaultVisible:d,onVisibleChange:s,children:[(0,e.jsx)(m.Popover.Trigger,{children:p}),(0,e.jsxs)(m.Popover.Content,{attach:t,className:"t-popup popover-content",children:[u,v&&(0,e.jsx)("div",{className:"popover-content-arrow"})]})]})}function f(){return(0,e.jsx)(g,{popoverContent:"Popover Content",showArrow:!0,children:(0,e.jsx)(x.TButton,{status:"success",children:"Hover me!"})})}let w=`import { Popover } from '@t-headless-ui/react';

function App() {
  return (
    <Popover.Root placement="bottom" trigger="click">
      <Popover.Trigger>
        {/* TButton 是在 Button 章节我们封装的 Button 组件 */}
        <TButton status="primary">点我，来呀！</TButton>
      </Popover.Trigger>
      <Popover.Content className="t-popup popover-content">
          Popover Content
          <div className="popover-content-arrow"></div>
      </Popover.Content>
    </Popover.Root>
  );
}`,b=`.t-popup {
  padding: 4px 10px;
  background: var(--bg-color);
  color: var(--text-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 14px;
  z-index: 1001;
  position: relative;
  --popover-content-margin: 8px;
  --popover-arrow-width: 8px;
  --border-popover-color: var(--border-color);
}

.popover-content-arrow {
  position: absolute;
  z-index: 1;
  background-color: inherit;

  &::before {
    position: absolute;
    content: '';
    width: var(--popover-arrow-width);
    height: var(--popover-arrow-width);
    transform: rotate(45deg);
    background-color: inherit;
  }
}

.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: var(--popover-content-margin);
}

.t-popover-content[data-placement^='bottom'] .popover-content {
  margin-top: var(--popover-content-margin);
}

.t-popover-content[data-placement^='left'] .popover-content {
  margin-right: var(--popover-content-margin);
}

.t-popover-content[data-placement^='right'] .popover-content {
  margin-left: var(--popover-content-margin);
}

/**
 * popover-content-arrow
 */
.t-popover-content[data-placement^='top'] .popover-content-arrow {
  &::before {
    border-top-left-radius: 100%;
    border-bottom: 1px solid var(--border-popover-color);
    border-right: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='top-start'] .popover-content-arrow {
  left: var(--popover-arrow-width);
}

.t-popover-content[data-placement='top'] .popover-content-arrow {
  left: 50%;
  margin-left: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='top-end'] .popover-content-arrow {
  left: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='bottom'] .popover-content-arrow {
  top: calc((-1 * var(--popover-arrow-width) / 2) - 1px);
  &::before {
    border-bottom-right-radius: 100%;
    border-top: 1px solid var(--border-popover-color);
    border-left: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='bottom-start'] .popover-content-arrow {
  left: var(--popover-arrow-width);
}

.t-popover-content[data-placement='bottom'] .popover-content-arrow {
  left: 50%;
  margin-left: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='bottom-end'] .popover-content-arrow {
  left: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='left'] .popover-content-arrow {
  right: calc(1 * var(--popover-arrow-width) / 2);
  &::before {
    border-top: 1px solid var(--border-popover-color);
    border-right: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='left-start'] .popover-content-arrow {
  top: var(--popover-arrow-width);
}

.t-popover-content[data-placement='left'] .popover-content-arrow {
  top: 50%;
  margin-top: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='left-end'] .popover-content-arrow {
  top: calc(100% - var(--popover-arrow-width) * 2);
}

.t-popover-content[data-placement^='right'] .popover-content-arrow {
  left: calc((-1 * var(--popover-arrow-width) / 2) - 1px);
  &::before {
    border-bottom: 1px solid var(--border-popover-color);
    border-left: 1px solid var(--border-popover-color);
  }
}

.t-popover-content[data-placement='right-start'] .popover-content-arrow {
  top: var(--popover-arrow-width);
}

.t-popover-content[data-placement='right'] .popover-content-arrow {
  top: 50%;
  margin-top: calc(-1 * var(--popover-arrow-width) / 2);
}

.t-popover-content[data-placement='right-end'] .popover-content-arrow {
  top: calc(100% - var(--popover-arrow-width) * 2);
}
`;function j(){return(0,e.jsx)(a.CodePreview,{code:w,cssCode:b})}function C(o){let a={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...o.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.H1,{subheading:"使用 css/less/sass 构建篇",children:"弹框组件自定义样式"}),"\n",(0,e.jsx)(t.ImageTypography,{src:"/popover/popover.webp",fill:!0,alt:"popover"}),"\n",(0,e.jsx)(a.h2,{children:"1、基础封装"}),"\n",(0,e.jsxs)(a.p,{children:["注：这篇是讲的使用 ",(0,e.jsx)(a.code,{children:"css"}),"（",(0,e.jsx)(a.code,{children:"less"})," 和 ",(0,e.jsx)(a.code,{children:"sass"})," 原理一致） 封装弹框组件，如有想看原子化 ",(0,e.jsx)(a.code,{children:"css"})," 封装，可以看下面的 ",(0,e.jsx)(a.code,{children:"tailwindcss"})," 篇。"]}),"\n",(0,e.jsx)(a.p,{children:"我们还是以下方的代码为例，可以发现，其实我们需要封装仅仅是弹出框内容的样式："}),"\n",(0,e.jsx)(i,{}),"\n",(0,e.jsxs)(a.p,{children:["然后我们抽离其中的样式到 ",(0,e.jsx)(a.code,{children:"CSS"})," 文件中"]}),"\n",(0,e.jsx)(a.p,{children:"上面代码有个两个明显的问题，"}),"\n",(0,e.jsxs)(a.ul,{children:["\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsxs)(a.p,{children:["首先样式使用 ",(0,e.jsx)(a.code,{children:"style"})," 内联样式，一般情况下都建议提取 ",(0,e.jsx)(a.code,{children:"css"})," 类中。"]}),"\n"]}),"\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsxs)(a.p,{children:["然后 ",(0,e.jsx)(a.code,{children:"style"})," 样式设置了一个 ",(0,e.jsx)(a.code,{children:"margin-bottom"})," 来隔开按钮和弹框，但问题在于因为弹框的位置有很多种情况，比如："]}),"\n"]}),"\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsx)(a.p,{children:"顶部"}),"\n"]}),"\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsx)(a.p,{children:"底部"}),"\n"]}),"\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsx)(a.p,{children:"左侧"}),"\n"]}),"\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsx)(a.p,{children:"右侧"}),"\n"]}),"\n",(0,e.jsxs)(a.li,{children:["\n",(0,e.jsx)(a.p,{children:"...等等"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(a.p,{children:["所以我们需要动态的设置 ",(0,e.jsx)(a.code,{children:"CSS"}),", 而如何动态的设置呢，我特意在组件库的弹框中留了一个口子，也就是弹出框外层包裹了一个 ",(0,e.jsx)(a.code,{children:"div"})," 元素，这个元素会有如下属性"]}),"\n",(0,e.jsxs)(a.ul,{children:["\n",(0,e.jsxs)(a.li,{children:["data-placement = 弹出框的位置(例如 ",(0,e.jsx)(a.code,{children:"top"}),")"]}),"\n",(0,e.jsx)(a.li,{children:'class="t-popover-content"'}),"\n"]}),"\n",(0,e.jsxs)(a.p,{children:["我们先拿 ",(0,e.jsx)(a.code,{children:"top"})," 位置为例，如何动态设置 ",(0,e.jsx)(a.code,{children:"top"})," 位置："]}),"\n",(0,e.jsx)(n.CodeBlock,{code:`.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: 8px;
}`,language:"css"}),"\n",(0,e.jsxs)(a.p,{children:["其中 ",(0,e.jsx)(a.code,{children:"t-popover-content"})," 就是 ",(0,e.jsx)(a.code,{children:"<Popover.Content>"})," 组件的 ",(0,e.jsx)(a.code,{children:"class"})," 类名, ",(0,e.jsx)(a.code,{children:"[data-placement^='top']"})," 中 ",(0,e.jsx)(a.code,{children:"data-placement"})," 自定义属性也是在 ",(0,e.jsx)(a.code,{children:"<Popover.Content>"})," 组件上。"]}),"\n",(0,e.jsxs)(a.p,{children:["所以我们通过 ",(0,e.jsx)(a.code,{children:"data-placement"})," 属性来动态的设置 ",(0,e.jsx)(a.code,{children:"margin-bottom"})," 样式。",(0,e.jsx)(a.code,{children:"[data-placement^='top']"})," 表示可能弹框的方向是 ",(0,e.jsx)(a.code,{children:"top"}),", ",(0,e.jsx)(a.code,{children:"top-start"}),", ",(0,e.jsx)(a.code,{children:"top-end"}),"。"]}),"\n",(0,e.jsxs)(a.p,{children:["这里只说明了 ",(0,e.jsx)(a.code,{children:"top"})," 方向，其它方向是类似的。"]}),"\n",(0,e.jsxs)(a.p,{children:["所以我们可以借助这两个属性来动态的设置按钮和弹框隔开的距离，如下（注意查看 ",(0,e.jsx)(a.code,{children:"CSS"})," 样式）："]}),"\n",(0,e.jsx)(s,{}),"\n",(0,e.jsx)(a.p,{children:"这里简单解释一下"}),"\n",(0,e.jsx)(a.h2,{children:"2、箭头样式封装"}),"\n",(0,e.jsx)(a.p,{children:"很多时候，大家需要弹框有一个箭头，这个箭头的位置是根据弹框的位置来确定的，比如："}),"\n",(0,e.jsxs)(a.ul,{children:["\n",(0,e.jsx)(a.li,{children:"顶部箭头指向按钮的底部"}),"\n",(0,e.jsx)(a.li,{children:"底部箭头指向按钮的顶部"}),"\n",(0,e.jsx)(a.li,{children:"左侧箭头指向按钮的右侧"}),"\n",(0,e.jsx)(a.li,{children:"右侧箭头指向按钮的左侧"}),"\n"]}),"\n",(0,e.jsx)(a.p,{children:"首先，我们预想的箭头是这样插入的："}),"\n",(0,e.jsx)(n.CodeBlock,{code:`<Popover.Content>
  <div className="t-popup popover-content">
      Popover Content
    <div className="t-popover-arrow"></div>
  </div>
</Popover.Content>`,language:"jsx"}),"\n",(0,e.jsxs)(a.p,{children:["这里我们将 ",(0,e.jsx)(a.code,{children:".t-popup"})," 的 ",(0,e.jsx)(a.code,{children:"position"})," 属性设置为 ",(0,e.jsx)(a.code,{children:"relative"}),"， 然后让箭头的 ",(0,e.jsx)(a.code,{children:"dom"})," 元素设置为 ",(0,e.jsx)(a.code,{children:"absolute"}),"， 并根据 ",(0,e.jsx)(a.code,{children:"data-placement"})," 属性来动态设置箭头的位置。"]}),"\n",(0,e.jsx)(a.p,{children:"所以最后的代码如下："}),"\n",(0,e.jsx)(h,{}),"\n",(0,e.jsx)(a.h2,{children:"4、如何更优雅"}),"\n",(0,e.jsxs)(a.p,{children:["封装到这一步，我发现，其实我可以将 ",(0,e.jsx)(a.code,{children:"t-popup popover-content"})," 放到 ",(0,e.jsx)(a.code,{children:"Popover.Content"})," 组件上（",(0,e.jsx)(a.code,{children:"@t-headless-ui/react"})," 需要专门为其开个口子，允许只传入 ",(0,e.jsx)(a.code,{children:"className"}),"），这样组件使用者的代码会更加清晰，如下："]}),"\n",(0,e.jsx)(j,{}),"\n",(0,e.jsx)(a.h2,{children:"5、更好的封装"}),"\n",(0,e.jsxs)(a.p,{children:["因为 ",(0,e.jsx)(a.code,{children:"@t-headless-ui/react"})," 组件库是一个 ",(0,e.jsx)(a.code,{children:"headless"})," 组件库（没有样式），属于比较低层次的封装，所以使用起来没有 ",(0,e.jsx)(a.code,{children:"ant-design"}),"、",(0,e.jsx)(a.code,{children:"M-UI"})," 这类高度封装的组件库简单，\n但 ",(0,e.jsx)(a.code,{children:"headless"})," 组件库提供了更多的可定制化的空间，我们可以根据自己的需求来定制组件的样式。例如我可以进行如下封装出自己业务需要的弹框组件。"]}),"\n",(0,e.jsx)(n.CodeBlock,{code:`  import React from 'react';
  import { Popover, PopoverProps, PortalProps } from '@t-headless-ui/react';
  import { TButton } from '@/button/tailwind-button';
  import './t-popover.css';
  interface TPopoverProps extends PopoverProps {
    attach?: PortalProps['attach'];
    children: React.ReactNode;
    showArrow?: boolean;
    popoverContent: React.ReactNode;
  }
  function TPopover({
    placement = 'top',
    trigger = 'hover',
    attach = 'body',
    disabled = false,
    children,
    offsetDistance = 0,
    offsetSkidding = 0,
    strategy = 'absolute',
    visible,
    defaultVisible,
    onVisibleChange,
    showArrow = false,
    popoverContent,
  }: TPopoverProps) {
    return (
      <Popover.Root
        placement={placement}
        trigger={trigger}
        disabled={disabled}
        strategy={strategy}
        offsetDistance={offsetDistance}
        offsetSkidding={offsetSkidding}
        visible={visible}
        defaultVisible={defaultVisible}
        onVisibleChange={onVisibleChange}
      >
        <Popover.Trigger>{children}</Popover.Trigger>
        <Popover.Content attach={attach} className="t-popup popover-content">
          {popoverContent}
          {showArrow && <div className="popover-content-arrow"></div>}
        </Popover.Content>
      </Popover.Root>
    );
  }`,language:"jsx"}),"\n",(0,e.jsxs)(a.p,{children:["使用的话就会很简单，如下是一个例子，",(0,e.jsx)(a.code,{children:"<TButton>"})," 组件的封装，可以去看 ",(0,e.jsx)(a.code,{children:"button"})," 篇的内容："]}),"\n",(0,e.jsx)(n.CodeBlock,{code:`<TPopover popoverContent="Popover Content" showArrow>
    <TButton>Hover me!</TButton>
</TPopover>`,language:"jsx"}),"\n",(0,e.jsx)(a.p,{children:"效果如下："}),"\n",(0,e.jsx)(f,{}),"\n",(0,e.jsx)(a.h2,{children:"6、总结"}),"\n",(0,e.jsx)(a.p,{children:"最后，如果你想了解源码实现细节，欢迎加入到组件库交流群，里面会有直播解释源码和实现思路 。"}),"\n",(0,e.jsx)(a.p,{children:"同时如果你想让自己的简历有一些与众不同高难度的项目，也欢迎咨询，例如对于前端组件库项目，在询问你的前端技术栈和意愿的情况下，\n可以帮助到初级前端到资深前端范围的求职者拥有一个亮眼的项目写在简历中，让你在面试时脱颖而出，给面试官一点惊喜😁。"})]})}function P(o={}){let{wrapper:t}={...(0,r.useMDXComponents)(),...o.components};return t?(0,e.jsx)(t,{...o,children:(0,e.jsx)(C,{...o})}):C(o)}function T(){return(0,e.jsx)(P,{})}o.s(["HowMakeCssButton",()=>T],54969)}]);