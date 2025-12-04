(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,o,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var o=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,o.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function o(e,o){if(null==e)return{};var r={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==o.indexOf(t))continue;r[t]=e[t]}return r}e.s(["default",()=>o])},37215,e=>{"use strict";function o(){return(o=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>o])},22480,e=>{"use strict";let o=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,o])},98319,e=>{"use strict";var o=e.i(64334);function r(...e){return(0,o.useCallback)(o=>{e.forEach(e=>{"function"==typeof e?e(o):null!=e&&(e.current=o)})},e)}e.s(["useComposedRefs",()=>r])},88036,e=>{"use strict";var o=e.i(45100),r=e.i(64334),t=e.i(22480);function n(e){let o=(0,r.useRef)(null);return o.current=e,(0,r.useCallback)((...e)=>o.current?.(...e),[])}var a=e.i(96224);function p(e,o){try{return e.querySelector(o)}catch(e){return null}}function c({scrollContainer:e,targetId:o,offset:r,isScrolling:t}){var n,c;if(!o)return;let i=p(document,`#${CSS.escape(o)}`);if(!i)return;let l=e.current,d=((void 0===(n=l)&&(n=window),n)&&(n===window?Math.ceil(window.pageYOffset):n.scrollTop)||0)+((e,o)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?o&&o!==window?r.top-o.getBoundingClientRect().top:(o=e.ownerDocument.documentElement,r.top-o.clientTop):r.top})(i,l)+r;(t.current=!0,(0,a.isWindow)(l))?l.scrollTo((void 0===(c=l)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,d):l.scrollTop=d}function i({targetId:e,linkMap:o,wrapperRef:r,currentId:t,setCurrentId:n,onChange:a}){e&&r.current&&o.current.get(e)&&e!==t&&n(e).then(()=>{a?.(e,t)})}var l=e.i(98319);let d=(0,r.forwardRef)((e,d)=>{let{scrollContainer:s,offset:v=0,children:u,onChange:h,queryKey:x="anchor-id",isCloseInitAnchor:g,...m}=e,{currentId:f,onLinkClick:b,wrapperRef:w,linkMap:j}=function({propScrollContainer:e,onChange:o,offset:t,queryKey:l,isCloseInitAnchor:d}){var s;let v,u,h=(0,r.useRef)(null),x=(0,r.useRef)(null),g=(0,r.useRef)(new Map),m=(0,r.useRef)(!1),[f,b]=function(e){let[o,t]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{o.resolve(o.value)},[o]),[o.value,e=>new Promise(o=>{t(r=>{let t=e;return"function"==typeof e&&(t=e(r.value)),{value:t,resolve:o}})})]}(0),w=n(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:o}){let r=o.current,t=((0,a.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),n=Array.from(e.current.keys()),c=[];for(let e of n){let o=p(document,"#"+CSS.escape(e));if(o){let{top:e}=o.getBoundingClientRect(),n=(0,a.isWindow)(r)?e:e-t.top;n>=0&&c.push({element:o,top:n})}}return 0===c.length?null:c.reduce((e,o)=>e.top<=o.top?e:o).element}({linkMap:g,scrollContainer:x});e?.id&&i({targetId:e.id,linkMap:g,wrapperRef:h,currentId:f,setCurrentId:b,onChange:o})}),j=n((s=()=>{w(),m.current=!1},v=null,(u=(...e)=>{v||(v=setTimeout(()=>{v=null,s(...e)},30))}).cancel=()=>{v&&(clearTimeout(v),v=null)},u));return(0,r.useEffect)(()=>(x.current=(0,a.isString)(e)?p(document,e):e||window,x.current?.addEventListener("scroll",j),()=>{x.current?.removeEventListener("scroll",j)}),[j,e]),(0,r.useEffect)(()=>{if(!d)return void j();let e=new URLSearchParams(new URL(window.location.href).search).get(l);e&&(i({targetId:e,linkMap:g,wrapperRef:h,currentId:f,setCurrentId:b,onChange:o}),c({scrollContainer:x,targetId:e,offset:t,isScrolling:m}))},[]),{onScroll:j,currentId:f,onLinkClick:function(e,r){e.preventDefault(),i({targetId:r,linkMap:g,wrapperRef:h,currentId:f,setCurrentId:b,onChange:o}),c({scrollContainer:x,targetId:r,offset:t,isScrolling:m})},wrapperRef:h,scrollContainer:x,linkMap:g}}({propScrollContainer:s,onChange:h,offset:v,queryKey:x,isCloseInitAnchor:g});return(0,o.jsx)(t.AnchorContext.Provider,{value:{currentId:f,linkMap:j,onLinkClick:b},children:(0,o.jsx)("div",{...m,ref:(0,l.useComposedRefs)(w,d),children:u})})});e.s(["Anchor",0,d],88036)},69438,e=>{"use strict";var o=e.i(45100),r=e.i(64334),t=e.i(22480),n=e.i(98319);let a=(0,r.forwardRef)((e,a)=>{let{onLinkClick:p,linkMap:c,currentId:i}=(0,r.useContext)(t.AnchorContext),{onClick:l,targetId:d,children:s,className:v,activeClassName:u,...h}=e,x=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=x.current,d&&c.current.set(d,e),()=>{c.current.delete(d)}},[d,c]),(0,o.jsx)("div",{ref:(0,n.useComposedRefs)(a,x),...h,onClick:e=>{e.stopPropagation(),l?.(e),p?.(e,d)},"data-target-id":d,className:i===d?u:v,children:s})});e.s(["AnchorLink",0,a],69438)},93562,e=>{"use strict";var o=e.i(88036),r=e.i(69438),t=e.i(22480);let n={Root:o.Anchor,Link:r.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>n])},59772,e=>{"use strict";var o=e.i(64334);let r=(0,o.createContext)({checked:!1});var t=e.i(45100),n=e.i(2157);let a=(0,o.createContext)({type:"radio"}),p={RadioContext:r,Root:function(e){let p=(0,o.useContext)(a),c=function({props:e,context:o}){let r={...e};return o.group&&(r.checked=o.value===e.value,r.disabled=!!(o.disabled||e.disabled),r.readonly=!!(o.readonly||e.readonly)),r}({props:e,context:p}),{disabled:i,readonly:l,children:d,value:s,checked:v,onChange:u,...h}=c,x=(0,o.useRef)(null),[g,m]=(0,n.useMergeValue)(!1,{value:v,defaultValue:c.defaultChecked});return(0,t.jsx)(r.Provider,{value:{checked:g,disabled:i,readonly:l},children:(0,t.jsxs)("label",{...h,onClick:function(e){i||l?e.preventDefault():h?.onClick?.(e)},"aria-disabled":!!i,"aria-readonly":!!l,"aria-checked":!!g,children:[(0,t.jsx)("input",{ref:x,disabled:!!i,value:s,type:"radio",checked:!!g,onChange:o=>{o.persist(),o.stopPropagation(),i||l||(p.group?p?.onChangeValue?.(s,o):"checked"in e||g||m(!0),g||u?.(!0,o))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!l}),d]})})},Group:function(e){let{name:o,children:r,type:p="radio",disabled:c,readonly:i,onChange:l,...d}=e,[s,v]=(0,n.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,t.jsx)("div",{role:"radiogroup",...d,children:(0,t.jsx)(a.Provider,{value:{onChangeValue:(o,r)=>{o!==s&&("value"in e||v(o),l?.(o,r))},type:p,value:s,disabled:c,readonly:i,group:!0,name:o},children:r})})}};e.s(["Radio",()=>p],59772)},46030,e=>{"use strict";var o=e.i(64334);let r=(0,o.createContext)({checked:!1});var t=e.i(45100),n=e.i(2157);let a=(0,o.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),p={CheckboxContext:r,Root:function(e){let p=(0,o.useContext)(a),{onGroupChange:c}=p,i=function({props:e,context:o}){let r={...e};return o.isCheckboxGroup&&(r.checked=-1!==o.checkboxGroupValue.indexOf(e.value),r.disabled=!!(o.disabled||e.disabled),r.readonly=!!(o.readonly||e.readonly)),r}({props:e,context:p}),{disabled:l,children:d,readonly:s,value:v,checked:u,onChange:h,indeterminate:x,...g}=i,m=(0,o.useRef)(null),[f,b]=(0,n.useMergeValue)(!1,{value:u,defaultValue:i.defaultChecked});return(0,o.useEffect)(()=>(p.registerValue(v),()=>{p.unRegisterValue(v)}),[v]),(0,t.jsx)(r.Provider,{value:{checked:f,disabled:l,indeterminate:x,readonly:s},children:(0,t.jsxs)("label",{...g,onClick:function(e){l||s?e.preventDefault():g?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!s,"aria-checked":!!f,children:[(0,t.jsx)("input",{value:v,disabled:!!l,ref:m,checked:!!f,onChange:function(e){e.persist(),e.stopPropagation(),l||s||(p.isCheckboxGroup?c?.(i.value,e.target.checked,e):b(e.target.checked),h?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!s}),d]})})},IconCheck:function({className:e}){return(0,t.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,t.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:r,children:p,readonly:c,onChange:i,...l}=e,[d,s]=(0,n.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[v,u]=(0,o.useState)([]);return(0,t.jsx)("div",{role:"checkboxgroup",...l,children:(0,t.jsx)(a.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:d,onGroupChange:function(e,o,r){if(!Array.isArray(d))return void console.error("Checkbox.Group value must be an array");let t=d?.slice()||[];o?t.push(e):t.splice(d.indexOf(e),1),s(t),i?.(t.filter(e=>v.indexOf(e)>-1),r)},disabled:r,readonly:c,registerValue:e=>{u(o=>Array.from(new Set([...o,e])))},unRegisterValue:e=>{u(o=>o.filter(o=>o!==e))}},children:p})})}};e.s(["Checkbox",()=>p],46030)},54969,e=>{"use strict";var o=e.i(45100),r=e.i(18694);e.i(82928);var t=e.i(72304),n=e.i(47445),a=e.i(69389);e.i(73869);var p=e.i(84435);let c=`import { Popover } from '@t-headless-ui/react';

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
}`;function i(){return(0,o.jsx)(p.CodePreview,{code:c})}let l=`import { Popover } from '@t-headless-ui/react';

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
}`;function s(){return(0,o.jsx)(p.CodePreview,{code:l,cssCode:d})}let v=`import { Popover } from '@t-headless-ui/react';

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
`;function h(){return(0,o.jsx)(p.CodePreview,{code:v,cssCode:u})}var x=e.i(72069);e.i(70977);var g=e.i(21518);function m({placement:e="top",trigger:r="hover",attach:t="body",disabled:n=!1,children:a,offsetDistance:p=0,offsetSkidding:c=0,strategy:i="absolute",visible:l,defaultVisible:d,onVisibleChange:s,showArrow:v=!1,popoverContent:u}){return(0,o.jsxs)(x.Popover.Root,{placement:e,trigger:r,disabled:n,strategy:i,offsetDistance:p,offsetSkidding:c,visible:l,defaultVisible:d,onVisibleChange:s,children:[(0,o.jsx)(x.Popover.Trigger,{children:a}),(0,o.jsxs)(x.Popover.Content,{attach:t,className:"t-popup popover-content",children:[u,v&&(0,o.jsx)("div",{className:"popover-content-arrow"})]})]})}function f(){return(0,o.jsx)(m,{popoverContent:"Popover Content",showArrow:!0,children:(0,o.jsx)(g.TButton,{status:"success",children:"Hover me!"})})}let b=`import { Popover } from '@t-headless-ui/react';

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
}`,w=`.t-popup {
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
`;function j(){return(0,o.jsx)(p.CodePreview,{code:b,cssCode:w})}function C(e){let p={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.useMDXComponents)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.H1,{subheading:"使用 css/less/sass 构建篇",children:"弹框组件自定义样式"}),"\n",(0,o.jsx)(t.ImageTypography,{src:"/popover/popover.webp",fill:!0,alt:"popover"}),"\n",(0,o.jsx)(p.h2,{children:"1、基础封装"}),"\n",(0,o.jsxs)(p.p,{children:["注：这篇是讲的使用 ",(0,o.jsx)(p.code,{children:"css"}),"（",(0,o.jsx)(p.code,{children:"less"})," 和 ",(0,o.jsx)(p.code,{children:"sass"})," 原理一致） 封装弹框组件，如有想看原子化 ",(0,o.jsx)(p.code,{children:"css"})," 封装，可以看下面的 ",(0,o.jsx)(p.code,{children:"tailwindcss"})," 篇。"]}),"\n",(0,o.jsx)(p.p,{children:"我们还是以下方的代码为例，可以发现，其实我们需要封装仅仅是弹出框内容的样式："}),"\n",(0,o.jsx)(i,{}),"\n",(0,o.jsxs)(p.p,{children:["然后我们抽离其中的样式到 ",(0,o.jsx)(p.code,{children:"CSS"})," 文件中"]}),"\n",(0,o.jsx)(p.p,{children:"上面代码有个两个明显的问题，"}),"\n",(0,o.jsxs)(p.ul,{children:["\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsxs)(p.p,{children:["首先样式使用 ",(0,o.jsx)(p.code,{children:"style"})," 内联样式，一般情况下都建议提取 ",(0,o.jsx)(p.code,{children:"css"})," 类中。"]}),"\n"]}),"\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsxs)(p.p,{children:["然后 ",(0,o.jsx)(p.code,{children:"style"})," 样式设置了一个 ",(0,o.jsx)(p.code,{children:"margin-bottom"})," 来隔开按钮和弹框，但问题在于因为弹框的位置有很多种情况，比如："]}),"\n"]}),"\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsx)(p.p,{children:"顶部"}),"\n"]}),"\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsx)(p.p,{children:"底部"}),"\n"]}),"\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsx)(p.p,{children:"左侧"}),"\n"]}),"\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsx)(p.p,{children:"右侧"}),"\n"]}),"\n",(0,o.jsxs)(p.li,{children:["\n",(0,o.jsx)(p.p,{children:"...等等"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(p.p,{children:["所以我们需要动态的设置 ",(0,o.jsx)(p.code,{children:"CSS"}),", 而如何动态的设置呢，我特意在组件库的弹框中留了一个口子，也就是弹出框外层包裹了一个 ",(0,o.jsx)(p.code,{children:"div"})," 元素，这个元素会有如下属性"]}),"\n",(0,o.jsxs)(p.ul,{children:["\n",(0,o.jsxs)(p.li,{children:["data-placement = 弹出框的位置(例如 ",(0,o.jsx)(p.code,{children:"top"}),")"]}),"\n",(0,o.jsx)(p.li,{children:'class="t-popover-content"'}),"\n"]}),"\n",(0,o.jsxs)(p.p,{children:["我们先拿 ",(0,o.jsx)(p.code,{children:"top"})," 位置为例，如何动态设置 ",(0,o.jsx)(p.code,{children:"top"})," 位置："]}),"\n",(0,o.jsx)(n.CodeBlock,{code:`.t-popover-content[data-placement^='top'] .popover-content {
  margin-bottom: 8px;
}`,language:"css"}),"\n",(0,o.jsxs)(p.p,{children:["其中 ",(0,o.jsx)(p.code,{children:"t-popover-content"})," 就是 ",(0,o.jsx)(p.code,{children:"<Popover.Content>"})," 组件的 ",(0,o.jsx)(p.code,{children:"class"})," 类名, ",(0,o.jsx)(p.code,{children:"[data-placement^='top']"})," 中 ",(0,o.jsx)(p.code,{children:"data-placement"})," 自定义属性也是在 ",(0,o.jsx)(p.code,{children:"<Popover.Content>"})," 组件上。"]}),"\n",(0,o.jsxs)(p.p,{children:["所以我们通过 ",(0,o.jsx)(p.code,{children:"data-placement"})," 属性来动态的设置 ",(0,o.jsx)(p.code,{children:"margin-bottom"})," 样式。",(0,o.jsx)(p.code,{children:"[data-placement^='top']"})," 表示可能弹框的方向是 ",(0,o.jsx)(p.code,{children:"top"}),", ",(0,o.jsx)(p.code,{children:"top-start"}),", ",(0,o.jsx)(p.code,{children:"top-end"}),"。"]}),"\n",(0,o.jsxs)(p.p,{children:["这里只说明了 ",(0,o.jsx)(p.code,{children:"top"})," 方向，其它方向是类似的。"]}),"\n",(0,o.jsxs)(p.p,{children:["所以我们可以借助这两个属性来动态的设置按钮和弹框隔开的距离，如下（注意查看 ",(0,o.jsx)(p.code,{children:"CSS"})," 样式）："]}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(p.p,{children:"这里简单解释一下"}),"\n",(0,o.jsx)(p.h2,{children:"2、箭头样式封装"}),"\n",(0,o.jsx)(p.p,{children:"很多时候，大家需要弹框有一个箭头，这个箭头的位置是根据弹框的位置来确定的，比如："}),"\n",(0,o.jsxs)(p.ul,{children:["\n",(0,o.jsx)(p.li,{children:"顶部箭头指向按钮的底部"}),"\n",(0,o.jsx)(p.li,{children:"底部箭头指向按钮的顶部"}),"\n",(0,o.jsx)(p.li,{children:"左侧箭头指向按钮的右侧"}),"\n",(0,o.jsx)(p.li,{children:"右侧箭头指向按钮的左侧"}),"\n"]}),"\n",(0,o.jsx)(p.p,{children:"首先，我们预想的箭头是这样插入的："}),"\n",(0,o.jsx)(n.CodeBlock,{code:`<Popover.Content>
  <div className="t-popup popover-content">
      Popover Content
    <div className="t-popover-arrow"></div>
  </div>
</Popover.Content>`,language:"jsx"}),"\n",(0,o.jsxs)(p.p,{children:["这里我们将 ",(0,o.jsx)(p.code,{children:".t-popup"})," 的 ",(0,o.jsx)(p.code,{children:"position"})," 属性设置为 ",(0,o.jsx)(p.code,{children:"relative"}),"， 然后让箭头的 ",(0,o.jsx)(p.code,{children:"dom"})," 元素设置为 ",(0,o.jsx)(p.code,{children:"absolute"}),"， 并根据 ",(0,o.jsx)(p.code,{children:"data-placement"})," 属性来动态设置箭头的位置。"]}),"\n",(0,o.jsx)(p.p,{children:"所以最后的代码如下："}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(p.h2,{children:"4、如何更优雅"}),"\n",(0,o.jsxs)(p.p,{children:["封装到这一步，我发现，其实我可以将 ",(0,o.jsx)(p.code,{children:"t-popup popover-content"})," 放到 ",(0,o.jsx)(p.code,{children:"Popover.Content"})," 组件上（",(0,o.jsx)(p.code,{children:"@t-headless-ui/react"})," 需要专门为其开个口子，允许只传入 ",(0,o.jsx)(p.code,{children:"className"}),"），这样组件使用者的代码会更加清晰，如下："]}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(p.h2,{children:"5、更好的封装"}),"\n",(0,o.jsxs)(p.p,{children:["因为 ",(0,o.jsx)(p.code,{children:"@t-headless-ui/react"})," 组件库是一个 ",(0,o.jsx)(p.code,{children:"headless"})," 组件库（没有样式），属于比较低层次的封装，所以使用起来没有 ",(0,o.jsx)(p.code,{children:"ant-design"}),"、",(0,o.jsx)(p.code,{children:"M-UI"})," 这类高度封装的组件库简单，\n但 ",(0,o.jsx)(p.code,{children:"headless"})," 组件库提供了更多的可定制化的空间，我们可以根据自己的需求来定制组件的样式。例如我可以进行如下封装出自己业务需要的弹框组件。"]}),"\n",(0,o.jsx)(n.CodeBlock,{code:`  import React from 'react';
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
  }`,language:"jsx"}),"\n",(0,o.jsxs)(p.p,{children:["使用的话就会很简单，如下是一个例子，",(0,o.jsx)(p.code,{children:"<TButton>"})," 组件的封装，可以去看 ",(0,o.jsx)(p.code,{children:"button"})," 篇的内容："]}),"\n",(0,o.jsx)(n.CodeBlock,{code:`<TPopover popoverContent="Popover Content" showArrow>
    <TButton>Hover me!</TButton>
</TPopover>`,language:"jsx"}),"\n",(0,o.jsx)(p.p,{children:"效果如下："}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(p.h2,{children:"6、总结"}),"\n",(0,o.jsx)(p.p,{children:"最后，如果你想了解源码实现细节，欢迎加入到组件库交流群，里面会有直播解释源码和实现思路 。"}),"\n",(0,o.jsx)(p.p,{children:"同时如果你想让自己的简历有一些与众不同高难度的项目，也欢迎咨询，例如对于前端组件库项目，在询问你的前端技术栈和意愿的情况下，\n可以帮助到初级前端到资深前端范围的求职者拥有一个亮眼的项目写在简历中，让你在面试时脱颖而出，给面试官一点惊喜😁。"})]})}function P(e={}){let{wrapper:t}={...(0,r.useMDXComponents)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(C,{...e})}):C(e)}function k(){return(0,o.jsx)(P,{})}e.s(["HowMakeCssButton",()=>k],54969)}]);