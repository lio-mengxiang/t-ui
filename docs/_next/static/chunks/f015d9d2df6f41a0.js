(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var o={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;o[r]=e[r]}return o}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function o(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>o])},88036,e=>{"use strict";var t=e.i(45100),o=e.i(64334),r=e.i(22480);function n(e){let t=(0,o.useRef)(null);return t.current=e,(0,o.useCallback)((...e)=>t.current?.(...e),[])}var i=e.i(96224);function l(e,t){try{return e.querySelector(t)}catch(e){return null}}function s({scrollContainer:e,targetId:t,offset:o,isScrolling:r}){var n,s;if(!t)return;let c=l(document,`#${CSS.escape(t)}`);if(!c)return;let u=e.current,a=((void 0===(n=u)&&(n=window),n)&&(n===window?Math.ceil(window.pageYOffset):n.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?t&&t!==window?o.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,o.top-t.clientTop):o.top})(c,u)+o;(r.current=!0,(0,i.isWindow)(u))?u.scrollTo((void 0===(s=u)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,a):u.scrollTop=a}function c({targetId:e,linkMap:t,wrapperRef:o,currentId:r,setCurrentId:n,onChange:i}){e&&o.current&&t.current.get(e)&&e!==r&&n(e).then(()=>{i?.(e,r)})}var u=e.i(98319);let a=(0,o.forwardRef)((e,a)=>{let{scrollContainer:p,offset:d=0,children:v,onChange:h,queryKey:f="anchor-id",isCloseInitAnchor:g,...m}=e,{currentId:C,onLinkClick:x,wrapperRef:b,linkMap:T}=function({propScrollContainer:e,onChange:t,offset:r,queryKey:u,isCloseInitAnchor:a}){var p;let d,v,h=(0,o.useRef)(null),f=(0,o.useRef)(null),g=(0,o.useRef)(new Map),m=(0,o.useRef)(!1),[C,x]=function(e){let[t,r]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{r(o=>{let r=e;return"function"==typeof e&&(r=e(o.value)),{value:r,resolve:t}})})]}(0),b=n(()=>{if(m.current)return;let e=function({linkMap:e,scrollContainer:t}){let o=t.current,r=((0,i.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),n=Array.from(e.current.keys()),s=[];for(let e of n){let t=l(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),n=(0,i.isWindow)(o)?e:e-r.top;n>=0&&s.push({element:t,top:n})}}return 0===s.length?null:s.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:g,scrollContainer:f});e?.id&&c({targetId:e.id,linkMap:g,wrapperRef:h,currentId:C,setCurrentId:x,onChange:t})}),T=n((p=()=>{b(),m.current=!1},d=null,(v=(...e)=>{d||(d=setTimeout(()=>{d=null,p(...e)},30))}).cancel=()=>{d&&(clearTimeout(d),d=null)},v));return(0,o.useEffect)(()=>(f.current=(0,i.isString)(e)?l(document,e):e||window,f.current?.addEventListener("scroll",T),()=>{f.current?.removeEventListener("scroll",T)}),[T,e]),(0,o.useEffect)(()=>{if(!a)return void T();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(c({targetId:e,linkMap:g,wrapperRef:h,currentId:C,setCurrentId:x,onChange:t}),s({scrollContainer:f,targetId:e,offset:r,isScrolling:m}))},[]),{onScroll:T,currentId:C,onLinkClick:function(e,o){e.preventDefault(),c({targetId:o,linkMap:g,wrapperRef:h,currentId:C,setCurrentId:x,onChange:t}),s({scrollContainer:f,targetId:o,offset:r,isScrolling:m})},wrapperRef:h,scrollContainer:f,linkMap:g}}({propScrollContainer:p,onChange:h,offset:d,queryKey:f,isCloseInitAnchor:g});return(0,t.jsx)(r.AnchorContext.Provider,{value:{currentId:C,linkMap:T,onLinkClick:x},children:(0,t.jsx)("div",{...m,ref:(0,u.useComposedRefs)(b,a),children:v})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var t=e.i(45100),o=e.i(64334),r=e.i(22480),n=e.i(98319);let i=(0,o.forwardRef)((e,i)=>{let{onLinkClick:l,linkMap:s,currentId:c}=(0,o.useContext)(r.AnchorContext),{onClick:u,targetId:a,children:p,className:d,activeClassName:v,...h}=e,f=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=f.current,a&&s.current.set(a,e),()=>{s.current.delete(a)}},[a,s]),(0,t.jsx)("div",{ref:(0,n.useComposedRefs)(i,f),...h,onClick:e=>{e.stopPropagation(),u?.(e),l?.(e,a)},"data-target-id":a,className:c===a?v:d,children:p})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var t=e.i(88036),o=e.i(69438),r=e.i(22480);let n={Root:t.Anchor,Link:o.AnchorLink,Context:r.AnchorContext};e.s(["Anchor",()=>n])},59772,e=>{"use strict";var t=e.i(64334);let o=(0,t.createContext)({checked:!1});var r=e.i(45100),n=e.i(2157);let i=(0,t.createContext)({type:"radio"}),l={RadioContext:o,Root:function(e){let l=(0,t.useContext)(i),s=function({props:e,context:t}){let o={...e};return t.group&&(o.checked=t.value===e.value,o.disabled=!!(t.disabled||e.disabled),o.readonly=!!(t.readonly||e.readonly)),o}({props:e,context:l}),{disabled:c,readonly:u,children:a,value:p,checked:d,onChange:v,...h}=s,f=(0,t.useRef)(null),[g,m]=(0,n.useMergeValue)(!1,{value:d,defaultValue:s.defaultChecked});return(0,r.jsx)(o.Provider,{value:{checked:g,disabled:c,readonly:u},children:(0,r.jsxs)("label",{...h,onClick:function(e){c||u?e.preventDefault():h?.onClick?.(e)},"aria-disabled":!!c,"aria-readonly":!!u,"aria-checked":!!g,children:[(0,r.jsx)("input",{ref:f,disabled:!!c,value:p,type:"radio",checked:!!g,onChange:t=>{t.persist(),t.stopPropagation(),c||u||(l.group?l?.onChangeValue?.(p,t):"checked"in e||g||m(!0),g||v?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),a]})})},Group:function(e){let{name:t,children:o,type:l="radio",disabled:s,readonly:c,onChange:u,...a}=e,[p,d]=(0,n.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,r.jsx)("div",{role:"radiogroup",...a,children:(0,r.jsx)(i.Provider,{value:{onChangeValue:(t,o)=>{t!==p&&("value"in e||d(t),u?.(t,o))},type:l,value:p,disabled:s,readonly:c,group:!0,name:t},children:o})})}};e.s(["Radio",()=>l],59772)},46030,e=>{"use strict";var t=e.i(64334);let o=(0,t.createContext)({checked:!1});var r=e.i(45100),n=e.i(2157);let i=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),l={CheckboxContext:o,Root:function(e){let l=(0,t.useContext)(i),{onGroupChange:s}=l,c=function({props:e,context:t}){let o={...e};return t.isCheckboxGroup&&(o.checked=-1!==t.checkboxGroupValue.indexOf(e.value),o.disabled=!!(t.disabled||e.disabled),o.readonly=!!(t.readonly||e.readonly)),o}({props:e,context:l}),{disabled:u,children:a,readonly:p,value:d,checked:v,onChange:h,indeterminate:f,...g}=c,m=(0,t.useRef)(null),[C,x]=(0,n.useMergeValue)(!1,{value:v,defaultValue:c.defaultChecked});return(0,t.useEffect)(()=>(l.registerValue(d),()=>{l.unRegisterValue(d)}),[d]),(0,r.jsx)(o.Provider,{value:{checked:C,disabled:u,indeterminate:f,readonly:p},children:(0,r.jsxs)("label",{...g,onClick:function(e){u||p?e.preventDefault():g?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!p,"aria-checked":!!C,children:[(0,r.jsx)("input",{value:d,disabled:!!u,ref:m,checked:!!C,onChange:function(e){e.persist(),e.stopPropagation(),u||p||(l.isCheckboxGroup?s?.(c.value,e.target.checked,e):x(e.target.checked),h?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!p}),a]})})},IconCheck:function({className:e}){return(0,r.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,r.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:o,children:l,readonly:s,onChange:c,...u}=e,[a,p]=(0,n.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[d,v]=(0,t.useState)([]);return(0,r.jsx)("div",{role:"checkboxgroup",...u,children:(0,r.jsx)(i.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:a,onGroupChange:function(e,t,o){if(!Array.isArray(a))return void console.error("Checkbox.Group value must be an array");let r=a?.slice()||[];t?r.push(e):r.splice(a.indexOf(e),1),p(r),c?.(r.filter(e=>d.indexOf(e)>-1),o)},disabled:o,readonly:s,registerValue:e=>{v(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{v(t=>t.filter(t=>t!==e))}},children:l})})}};e.s(["Checkbox",()=>l],46030)},21710,e=>{"use strict";var t=e.i(45100),o=e.i(18694);e.i(82928);var r=e.i(69389),n=e.i(93612);e.i(73869);var i=e.i(84435);let l=`
function App() {
  return (
    <>
      <TPopover popoverContent="Popover Content">
        <TButton status="primary">Hover me!</TButton>
      </TPopover>
    </>
  );
}
`;function s(){return(0,t.jsx)(i.CodePreview,{code:l})}let c=`
function App() {
  const ContextMenuExample = forwardRef((props, ref) => {
    return (
      <div ref={ref} className="h-8 border border-solid border-color flex items-center px-4 py-2 rounded-lg cursor-pointer" {...props}>
       右击触发元素
      </div>
    );
  });

  return (
    <div className="flex gap-x-4 flex-wrap">
      <TPopover popoverContent="Popover Content">
        <TButton status="primary">Hover me!</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click">
        <TButton status="primary">Click me!</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="context-menu">
        <ContextMenuExample />
      </TPopover>
    </div>
  );
}
`;function u(){return(0,t.jsx)(i.CodePreview,{code:c})}let a=`
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
      <TPopover popoverContent="Popover Content" showArrow>
        <TButton style={styles.placementTop} status="primary">top</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="top-start" showArrow>
        <TButton status="primary" style={styles.placementTopLeft}>top-start</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="top-end" showArrow>
        <TButton status="primary" style={styles.placementTopRight}>top-end</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="bottom-start" showArrow>
        <TButton status="primary" style={styles.placementBottomLeft}>bottom-start</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="bottom-end" showArrow>
        <TButton status="primary" style={styles.placementBottomRight}>bottom-end</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="left-start" showArrow>
        <TButton status="primary" style={styles.placementLeftTop}>left-start</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="left-end" showArrow>
        <TButton status="primary" style={styles.placementLeftBottom}>left-end</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="right-start" showArrow>
        <TButton status="primary" style={styles.placementRightTop}>right-start</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="right-end" showArrow>
        <TButton status="primary" style={styles.placementRightBottom}>right-end</TButton>
      </TPopover>
    </div>
  );
}
`;function p(){return(0,t.jsx)(i.CodePreview,{code:a})}let d=`
function App() {
  function PopoverContent() {
      const { triggerRef } = useContext(Popover.PopoverContext);
      const triggerDom = triggerRef.current;
      return (
        <div style={{ width: triggerDom?.offsetWidth }} className="px-2 py-1">
          内容也跟金箍棒一样长，长，长长长！
        </div>
      );
  }
  return (
    <TPopover popoverContent={<PopoverContent />} trigger="click" contentClassName="p-0">
      <TButton status="primary">我是金箍棒! 我！很长！很猛！很强！</TButton>
    </TPopover>
  );
}
`;function v(){return(0,t.jsx)(i.CodePreview,{code:d})}let h=`
function App() {
  const [visible, setVisible] = useState(true);
  return (
    <TPopover popoverContent="Popover Content" trigger="click"  placement="right" visible={visible}>
      <TButton status="primary" onClick={()=> setVisible(!visible)}>一直显示(Always show)</TButton>
    </TPopover>
  );
}
`;function f(){return(0,t.jsx)(i.CodePreview,{code:h})}let g=`
function App() {
  return (
    <TPopover popoverContent="Popover Content" trigger="click" disabled>
      <TButton status="primary" disabled>Click Me!</TButton>
    </TPopover>
  );
}
`;function m(){return(0,t.jsx)(i.CodePreview,{code:g})}let C=`
function App() {
  const [visible] = useState(true);
  const [spanVisible, setVisible] = useState(false);
  const [content, setContent] = useState('This is the popup content');
  const btnClicksRef = useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setVisible(showMore);
    setContent(\`This is the popup content\${showMore ? '，There are many, many, many, many....' : ''}\`);
  };
  return (
    <TPopover popoverContent="Popover Content" placement="right" visible={visible}>
      <TButton status="primary" onClick={toggleContent}>Click to change content{spanVisible && <span>，click again</span>}</TButton>
    </TPopover>
  );
}
`;function x(){return(0,t.jsx)(i.CodePreview,{code:C})}function b(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(n.Code,{children:"popoverContent"}),"自定义浮层内容，",(0,t.jsx)(n.Code,{children:"TPopover"})," 的子元素作为触发元素"]}),children:"基本用法"}),"\n",(0,t.jsx)(s,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["提供 ",(0,t.jsx)(n.Code,{children:"悬浮时触发(默认)"}),"、",(0,t.jsx)(n.Code,{children:"点击时触发"}),"、",(0,t.jsx)(n.Code,{children:"获取焦点时触发"}),"、",(0,t.jsx)(n.Code,{children:"右击时触发"}),"等方式"]}),children:"不同触发方式"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(n.Code,{children:"placement"})," 控制浮层方向，如果需要浮层箭头，设置 ",(0,t.jsx)(n.Code,{children:"showArrow=true"})," 即可"]}),children:"不同的位置"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(n.Code,{children:"useContext(Popover.PopoverContext)"})," 可以获取到触发元素的 ",(0,t.jsx)(n.Code,{children:"dom 节点"})]}),children:"获取触发元素"}),"\n",(0,t.jsx)(v,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可以通过 ",(0,t.jsx)(n.Code,{children:"visible"})," 自由控制弹出层的显示或隐藏"]}),children:"可控制显示的弹出层"}),"\n",(0,t.jsx)(f,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"组件禁用后，不再显示弹出层"}),children:"禁用状态的弹出层"}),"\n",(0,t.jsx)(m,{}),"\n","\n",(0,t.jsx)(r.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["当 ",(0,t.jsx)(n.Code,{children:"trigger"})," 或 ",(0,t.jsx)(n.Code,{children:"弹框内容"})," 显示内容动态变化时，自适应调整位置"]}),children:"动态自适应"}),"\n",(0,t.jsx)(x,{})]})}function T(e={}){let{wrapper:r}={...(0,o.useMDXComponents)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}function P(){return(0,t.jsx)(T,{})}e.s(["HowMakeCssButton",()=>P],21710)}]);