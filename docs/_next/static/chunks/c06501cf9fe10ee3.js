(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var o={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;o[n]=e[n]}return o}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function o(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>o])},88036,e=>{"use strict";var t=e.i(45100),o=e.i(64334),n=e.i(22480);function r(e){let t=(0,o.useRef)(null);return t.current=e,(0,o.useCallback)((...e)=>t.current?.(...e),[])}var i=e.i(96224);function l(e,t){try{return e.querySelector(t)}catch(e){return null}}function s({scrollContainer:e,targetId:t,offset:o,isScrolling:n}){var r,s;if(!t)return;let a=l(document,`#${CSS.escape(t)}`);if(!a)return;let u=e.current,c=((void 0===(r=u)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?t&&t!==window?o.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,o.top-t.clientTop):o.top})(a,u)+o;(n.current=!0,(0,i.isWindow)(u))?u.scrollTo((void 0===(s=u)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,c):u.scrollTop=c}function a({targetId:e,linkMap:t,wrapperRef:o,currentId:n,setCurrentId:r,onChange:i}){e&&o.current&&t.current.get(e)&&e!==n&&r(e).then(()=>{i?.(e,n)})}var u=e.i(98319);let c=(0,o.forwardRef)((e,c)=>{let{scrollContainer:p,offset:d=0,children:h,onChange:v,queryKey:f="anchor-id",isCloseInitAnchor:m,...C}=e,{currentId:x,onLinkClick:g,wrapperRef:T,linkMap:b}=function({propScrollContainer:e,onChange:t,offset:n,queryKey:u,isCloseInitAnchor:c}){var p;let d,h,v=(0,o.useRef)(null),f=(0,o.useRef)(null),m=(0,o.useRef)(new Map),C=(0,o.useRef)(!1),[x,g]=function(e){let[t,n]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{n(o=>{let n=e;return"function"==typeof e&&(n=e(o.value)),{value:n,resolve:t}})})]}(0),T=r(()=>{if(C.current)return;let e=function({linkMap:e,scrollContainer:t}){let o=t.current,n=((0,i.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),r=Array.from(e.current.keys()),s=[];for(let e of r){let t=l(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),r=(0,i.isWindow)(o)?e:e-n.top;r>=0&&s.push({element:t,top:r})}}return 0===s.length?null:s.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:m,scrollContainer:f});e?.id&&a({targetId:e.id,linkMap:m,wrapperRef:v,currentId:x,setCurrentId:g,onChange:t})}),b=r((p=()=>{T(),C.current=!1},d=null,(h=(...e)=>{d||(d=setTimeout(()=>{d=null,p(...e)},30))}).cancel=()=>{d&&(clearTimeout(d),d=null)},h));return(0,o.useEffect)(()=>(f.current=(0,i.isString)(e)?l(document,e):e||window,f.current?.addEventListener("scroll",b),()=>{f.current?.removeEventListener("scroll",b)}),[b,e]),(0,o.useEffect)(()=>{if(!c)return void b();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(a({targetId:e,linkMap:m,wrapperRef:v,currentId:x,setCurrentId:g,onChange:t}),s({scrollContainer:f,targetId:e,offset:n,isScrolling:C}))},[]),{onScroll:b,currentId:x,onLinkClick:function(e,o){e.preventDefault(),a({targetId:o,linkMap:m,wrapperRef:v,currentId:x,setCurrentId:g,onChange:t}),s({scrollContainer:f,targetId:o,offset:n,isScrolling:C})},wrapperRef:v,scrollContainer:f,linkMap:m}}({propScrollContainer:p,onChange:v,offset:d,queryKey:f,isCloseInitAnchor:m});return(0,t.jsx)(n.AnchorContext.Provider,{value:{currentId:x,linkMap:b,onLinkClick:g},children:(0,t.jsx)("div",{...C,ref:(0,u.useComposedRefs)(T,c),children:h})})});e.s(["Anchor",0,c],88036)},69438,e=>{"use strict";var t=e.i(45100),o=e.i(64334),n=e.i(22480),r=e.i(98319);let i=(0,o.forwardRef)((e,i)=>{let{onLinkClick:l,linkMap:s,currentId:a}=(0,o.useContext)(n.AnchorContext),{onClick:u,targetId:c,children:p,className:d,activeClassName:h,...v}=e,f=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=f.current,c&&s.current.set(c,e),()=>{s.current.delete(c)}},[c,s]),(0,t.jsx)("div",{ref:(0,r.useComposedRefs)(i,f),...v,onClick:e=>{e.stopPropagation(),u?.(e),l?.(e,c)},"data-target-id":c,className:a===c?h:d,children:p})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var t=e.i(88036),o=e.i(69438),n=e.i(22480);let r={Root:t.Anchor,Link:o.AnchorLink,Context:n.AnchorContext};e.s(["Anchor",()=>r])},55552,e=>{"use strict";var t=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 24 24",paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12c0 3.542-2.869 3.968-5.512 4.36-1.461.216-2.854.423-3.655 1.14-.846.757-.523 1.895-.227 2.94C13.991 21.8 14.332 23 12 23 5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-2.292-.688a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zM14.98 7.876a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125zm-4.354-2.063a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zm-5.73 7.563a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125z"})})});e.s(["IconPlatteFill",0,o])},46030,e=>{"use strict";var t=e.i(64334);let o=(0,t.createContext)({checked:!1});var n=e.i(45100),r=e.i(2157);let i=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),l={CheckboxContext:o,Root:function(e){let l=(0,t.useContext)(i),{onGroupChange:s}=l,a=function({props:e,context:t}){let o={...e};return t.isCheckboxGroup&&(o.checked=-1!==t.checkboxGroupValue.indexOf(e.value),o.disabled=!!(t.disabled||e.disabled),o.readonly=!!(t.readonly||e.readonly)),o}({props:e,context:l}),{disabled:u,children:c,readonly:p,value:d,checked:h,onChange:v,indeterminate:f,...m}=a,C=(0,t.useRef)(null),[x,g]=(0,r.useMergeValue)(!1,{value:h,defaultValue:a.defaultChecked});return(0,t.useEffect)(()=>(l.registerValue(d),()=>{l.unRegisterValue(d)}),[d]),(0,n.jsx)(o.Provider,{value:{checked:x,disabled:u,indeterminate:f,readonly:p},children:(0,n.jsxs)("label",{...m,onClick:function(e){u||p?e.preventDefault():m?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!p,"aria-checked":!!x,children:[(0,n.jsx)("input",{value:d,disabled:!!u,ref:C,checked:!!x,onChange:function(e){e.persist(),e.stopPropagation(),u||p||(l.isCheckboxGroup?s?.(a.value,e.target.checked,e):g(e.target.checked),v?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!p}),c]})})},IconCheck:function({className:e}){return(0,n.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,n.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:o,children:l,readonly:s,onChange:a,...u}=e,[c,p]=(0,r.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[d,h]=(0,t.useState)([]);return(0,n.jsx)("div",{role:"checkboxgroup",...u,children:(0,n.jsx)(i.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:c,onGroupChange:function(e,t,o){if(!Array.isArray(c))return void console.error("Checkbox.Group value must be an array");let n=c?.slice()||[];t?n.push(e):n.splice(c.indexOf(e),1),p(n),a?.(n.filter(e=>d.indexOf(e)>-1),o)},disabled:o,readonly:s,registerValue:e=>{h(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{h(t=>t.filter(t=>t!==e))}},children:l})})}};e.s(["Checkbox",()=>l],46030)},4937,92176,e=>{"use strict";var t=e.i(45100),o=e.i(51849);let n=(0,o.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M40 41L44 21H8.8125L4 41H40Z",fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconOpenFileLine",0,n],4937);let r=(0,o.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 12L31 12",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 20L31 20",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 28H23",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z",fill:"none"}),(0,t.jsx)("path",{d:"M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconSearchFileLine",0,r],92176)},20126,e=>{"use strict";var t=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{strokeWidth:"4",d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"})})});e.s(["IconInfoFileLine",0,o])},59772,e=>{"use strict";var t=e.i(64334);let o=(0,t.createContext)({checked:!1});var n=e.i(45100),r=e.i(2157);let i=(0,t.createContext)({type:"radio"}),l={RadioContext:o,Root:function(e){let l=(0,t.useContext)(i),s=function({props:e,context:t}){let o={...e};return t.group&&(o.checked=t.value===e.value,o.disabled=!!(t.disabled||e.disabled),o.readonly=!!(t.readonly||e.readonly)),o}({props:e,context:l}),{disabled:a,readonly:u,children:c,value:p,checked:d,onChange:h,...v}=s,f=(0,t.useRef)(null),[m,C]=(0,r.useMergeValue)(!1,{value:d,defaultValue:s.defaultChecked});return(0,n.jsx)(o.Provider,{value:{checked:m,disabled:a,readonly:u},children:(0,n.jsxs)("label",{...v,onClick:function(e){a||u?e.preventDefault():v?.onClick?.(e)},"aria-disabled":!!a,"aria-readonly":!!u,"aria-checked":!!m,children:[(0,n.jsx)("input",{ref:f,disabled:!!a,value:p,type:"radio",checked:!!m,onChange:t=>{t.persist(),t.stopPropagation(),a||u||(l.group?l?.onChangeValue?.(p,t):"checked"in e||m||C(!0),m||h?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),c]})})},Group:function(e){let{name:t,children:o,type:l="radio",disabled:s,readonly:a,onChange:u,...c}=e,[p,d]=(0,r.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,n.jsx)("div",{role:"radiogroup",...c,children:(0,n.jsx)(i.Provider,{value:{onChangeValue:(t,o)=>{t!==p&&("value"in e||d(t),u?.(t,o))},type:l,value:p,disabled:s,readonly:a,group:!0,name:t},children:o})})}};e.s(["Radio",()=>l],59772)},74562,e=>{"use strict";var t=e.i(45100),o=e.i(18694);e.i(82928);var n=e.i(69389),r=e.i(93612);e.i(73869);var i=e.i(84435);let l=`
function App() {
  return (
    <>
      <Tooltip showArrow popoverContent="Tooltip Content">
        <span className="text-sm">Mouse over to display tooltip</span>
      </Tooltip>
    </>
  );
}
`;function s(){return(0,t.jsx)(i.CodePreview,{code:l})}let a=`
function App() {
  const ContextMenuExample = forwardRef((props, ref) => {
    return (
      <div ref={ref} className="text-sm h-8 border border-solid border-color flex items-center px-4 py-2 rounded-lg cursor-pointer" {...props}>
       右击触发元素
      </div>
    );
  });

  return (
    <div className="flex gap-4 flex-wrap">
      <Tooltip popoverContent="Popover Content">
        <TButton status="primary">Hover me!</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" trigger="click">
        <TButton status="primary">Click me!</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" trigger="context-menu">
        <ContextMenuExample />
      </Tooltip>
    </div>
  );
}
`;function u(){return(0,t.jsx)(i.CodePreview,{code:a})}let c=`
function App (){
  const styles = {
      container: {
        margin: '0 auto',
        width: '500px',
        height: '260px',
        position: 'relative',
      },
      placementTop: {
        position: 'absolute',
        top: '0',
        left: '42%',
      },
      placementTopLeft: {
        position: 'absolute',
        top: '0',
        left: '70px',
      },
      placementTopRight: {
        position: 'absolute',
        top: '0',
        right: '70px',
      },
      placementBottom: {
        position: 'absolute',
        bottom: '0',
        left: '42%',
      },
      placementBottomLeft: {
        position: 'absolute',
        bottom: '0',
        left: '70px',
        width: '120px',
      },
      placementBottomRight: {
        position: 'absolute',
        bottom: '0',
        right: '70px',
      },
      placementLeft: {
        position: 'absolute',
        left: '0',
        top: '42%',
      },
      placementLeftTop: {
        position: 'absolute',
        left: '0',
        top: '50px',
      },
      placementLeftBottom: {
        position: 'absolute',
        left: '0',
        bottom: '50px',
      },
      placementRight: {
        position: 'absolute',
        right: '0',
        top: '42%',
      },
      placementRightTop: {
        position: 'absolute',
        right: '0',
        top: '50px',
      },
      placementRightBottom: {
        position: 'absolute',
        right: '0',
        bottom: '50px',
      },
  };

  return (
    <div style={styles.container}>
      <Tooltip popoverContent="Popover Content" showArrow>
        <TButton style={styles.placementTop} status="primary">top</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" placement="top-start" showArrow>
        <TButton status="primary" style={styles.placementTopLeft}>top-start</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" placement="top-end" showArrow>
        <TButton status="primary" style={styles.placementTopRight}>top-end</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" placement="bottom-start" showArrow>
        <TButton status="primary" style={styles.placementBottomLeft}>bottom-start</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" placement="bottom-end" showArrow>
        <TButton status="primary" style={styles.placementBottomRight}>bottom-end</TButton>
      </Tooltip>
      <Tooltip popoverContent={<div className="w-32 flex items-center">Popover Content, Popover Content</div>} placement="left-start" showArrow>
        <TButton status="primary" style={styles.placementLeftTop}>left-start</TButton>
      </Tooltip>
      <Tooltip popoverContent={<div className="w-32 flex items-center">Popover Content, Popover Content</div>} placement="left-end" showArrow>
        <TButton status="primary" style={styles.placementLeftBottom}>left-end</TButton>
      </Tooltip>
      <Tooltip popoverContent={<div className="w-32 flex items-center">Popover Content, Popover Content</div>} placement="right-start" showArrow>
        <TButton status="primary" style={styles.placementRightTop}>right-start</TButton>
      </Tooltip>
      <Tooltip popoverContent={<div className="w-32 flex items-center">Popover Content, Popover Content</div>} placement="right-end" showArrow>
        <TButton status="primary" style={styles.placementRightBottom}>right-end</TButton>
      </Tooltip>
    </div>
  );
}
`;function p(){return(0,t.jsx)(i.CodePreview,{code:c})}let d=`
function App() {
  function PopoverContent() {
      const { triggerRef } = useContext(Popover.PopoverContext);
      const triggerDom = triggerRef.current;
      return (
        <div style={{ width: triggerDom?.offsetWidth }} className="px-2 py-1">
          My length is the same as the button below！
        </div>
      );
  }
  return (
    <TPopover popoverContent={<PopoverContent />} trigger="click" contentClassName="p-0">
      <TButton status="primary">I am long bar! ！</TButton>
    </TPopover>
  );
}
`;function h(){return(0,t.jsx)(i.CodePreview,{code:d})}let v=`
function App() {
  return (
    <div className="flex gap-4 wrap">
      <Tooltip popoverContent="Popover Content" contentClassName="bg-[#3491FA] text-white">
         <TButton className="bg-[#3491FA]">#3491FA</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" contentClassName="bg-[#165DFF] text-white">
         <TButton className="bg-[#165DFF]">#165DFF</TButton>
      </Tooltip>
      <Tooltip popoverContent="Popover Content" contentClassName="bg-[#722ED1] text-white">
         <TButton className="bg-[#722ED1]">#722ED1</TButton>
      </Tooltip>
    </div>
  );
}
`;function f(){return(0,t.jsx)(i.CodePreview,{code:v})}function m(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(r.Code,{children:"popoverContent"}),"自定义浮层内容，",(0,t.jsx)(r.Code,{children:"TPopover"})," 的子元素作为触发元素"]}),children:"基本用法"}),"\n",(0,t.jsx)(s,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["提供 ",(0,t.jsx)(r.Code,{children:"悬浮时触发(默认)"}),"、",(0,t.jsx)(r.Code,{children:"点击时触发"}),"、",(0,t.jsx)(r.Code,{children:"获取焦点时触发"}),"、",(0,t.jsx)(r.Code,{children:"右击时触发"}),"等方式"]}),children:"不同触发方式"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(r.Code,{children:"placement"})," 控制浮层方向，如果需要浮层箭头，设置 ",(0,t.jsx)(r.Code,{children:"showArrow=true"})," 即可"]}),children:"不同的位置"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(r.Code,{children:"useContext(Popover.PopoverContext)"})," 可以获取到触发元素的 ",(0,t.jsx)(r.Code,{children:"dom 节点"})]}),children:"获取触发元素"}),"\n",(0,t.jsx)(h,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过 ",(0,t.jsx)(r.Code,{children:"contentClassName"})," 属性设置不同背景色的 ",(0,t.jsx)(r.Code,{children:"tooltip"})]}),children:"不同颜色"}),"\n",(0,t.jsx)(f,{})]})}function C(e={}){let{wrapper:n}={...(0,o.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function x(){return(0,t.jsx)(C,{})}e.s(["HowMakeCssButton",()=>x],74562)}]);