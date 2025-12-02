(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,o)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let o=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,o])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var o={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;o[n]=e[n]}return o}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function o(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>o])},88036,e=>{"use strict";var t=e.i(45100),o=e.i(64334),n=e.i(22480);function r(e){let t=(0,o.useRef)(null);return t.current=e,(0,o.useCallback)((...e)=>t.current?.(...e),[])}var i=e.i(96224);function s(e,t){try{return e.querySelector(t)}catch(e){return null}}function l({scrollContainer:e,targetId:t,offset:o,isScrolling:n}){var r,l;if(!t)return;let c=s(document,`#${CSS.escape(t)}`);if(!c)return;let u=e.current,a=((void 0===(r=u)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let o=e.getBoundingClientRect();return o.width||o.height?t&&t!==window?o.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,o.top-t.clientTop):o.top})(c,u)+o;(n.current=!0,(0,i.isWindow)(u))?u.scrollTo((void 0===(l=u)&&(l=window),l)&&(l===window?Math.ceil(window.pageXOffset||window.scrollX):l.scrollLeft)||0,a):u.scrollTop=a}function c({targetId:e,linkMap:t,wrapperRef:o,currentId:n,setCurrentId:r,onChange:i}){e&&o.current&&t.current.get(e)&&e!==n&&r(e).then(()=>{i?.(e,n)})}var u=e.i(98319);let a=(0,o.forwardRef)((e,a)=>{let{scrollContainer:p,offset:d=0,children:v,onChange:m,queryKey:f="anchor-id",isCloseInitAnchor:h,...g}=e,{currentId:C,onLinkClick:x,wrapperRef:T,linkMap:P}=function({propScrollContainer:e,onChange:t,offset:n,queryKey:u,isCloseInitAnchor:a}){var p;let d,v,m=(0,o.useRef)(null),f=(0,o.useRef)(null),h=(0,o.useRef)(new Map),g=(0,o.useRef)(!1),[C,x]=function(e){let[t,n]=(0,o.useState)({value:"",resolve:e=>{}});return(0,o.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{n(o=>{let n=e;return"function"==typeof e&&(n=e(o.value)),{value:n,resolve:t}})})]}(0),T=r(()=>{if(g.current)return;let e=function({linkMap:e,scrollContainer:t}){let o=t.current,n=((0,i.isWindow)(o)?document.documentElement||document.body:o).getBoundingClientRect(),r=Array.from(e.current.keys()),l=[];for(let e of r){let t=s(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),r=(0,i.isWindow)(o)?e:e-n.top;r>=0&&l.push({element:t,top:r})}}return 0===l.length?null:l.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:h,scrollContainer:f});e?.id&&c({targetId:e.id,linkMap:h,wrapperRef:m,currentId:C,setCurrentId:x,onChange:t})}),P=r((p=()=>{T(),g.current=!1},d=null,(v=(...e)=>{d||(d=setTimeout(()=>{d=null,p(...e)},30))}).cancel=()=>{d&&(clearTimeout(d),d=null)},v));return(0,o.useEffect)(()=>(f.current=(0,i.isString)(e)?s(document,e):e||window,f.current?.addEventListener("scroll",P),()=>{f.current?.removeEventListener("scroll",P)}),[P,e]),(0,o.useEffect)(()=>{if(!a)return void P();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(c({targetId:e,linkMap:h,wrapperRef:m,currentId:C,setCurrentId:x,onChange:t}),l({scrollContainer:f,targetId:e,offset:n,isScrolling:g}))},[]),{onScroll:P,currentId:C,onLinkClick:function(e,o){e.preventDefault(),c({targetId:o,linkMap:h,wrapperRef:m,currentId:C,setCurrentId:x,onChange:t}),l({scrollContainer:f,targetId:o,offset:n,isScrolling:g})},wrapperRef:m,scrollContainer:f,linkMap:h}}({propScrollContainer:p,onChange:m,offset:d,queryKey:f,isCloseInitAnchor:h});return(0,t.jsx)(n.AnchorContext.Provider,{value:{currentId:C,linkMap:P,onLinkClick:x},children:(0,t.jsx)("div",{...g,ref:(0,u.useComposedRefs)(T,a),children:v})})});e.s(["Anchor",0,a],88036)},69438,e=>{"use strict";var t=e.i(45100),o=e.i(64334),n=e.i(22480),r=e.i(98319);let i=(0,o.forwardRef)((e,i)=>{let{onLinkClick:s,linkMap:l,currentId:c}=(0,o.useContext)(n.AnchorContext),{onClick:u,targetId:a,children:p,className:d,activeClassName:v,...m}=e,f=(0,o.useRef)(null);return(0,o.useEffect)(()=>{var e;return e=f.current,a&&l.current.set(a,e),()=>{l.current.delete(a)}},[a,l]),(0,t.jsx)("div",{ref:(0,r.useComposedRefs)(i,f),...m,onClick:e=>{e.stopPropagation(),u?.(e),s?.(e,a)},"data-target-id":a,className:c===a?v:d,children:p})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var t=e.i(88036),o=e.i(69438),n=e.i(22480);let r={Root:t.Anchor,Link:o.AnchorLink,Context:n.AnchorContext};e.s(["Anchor",()=>r])},59772,e=>{"use strict";var t=e.i(64334);let o=(0,t.createContext)({checked:!1});var n=e.i(45100),r=e.i(2157);let i=(0,t.createContext)({type:"radio"}),s={RadioContext:o,Root:function(e){let s=(0,t.useContext)(i),l=function({props:e,context:t}){let o={...e};return t.group&&(o.checked=t.value===e.value,o.disabled=!!(t.disabled||e.disabled),o.readonly=!!(t.readonly||e.readonly)),o}({props:e,context:s}),{disabled:c,readonly:u,children:a,value:p,checked:d,onChange:v,...m}=l,f=(0,t.useRef)(null),[h,g]=(0,r.useMergeValue)(!1,{value:d,defaultValue:l.defaultChecked});return(0,n.jsx)(o.Provider,{value:{checked:h,disabled:c,readonly:u},children:(0,n.jsxs)("label",{...m,onClick:function(e){c||u?e.preventDefault():m?.onClick?.(e)},"aria-disabled":!!c,"aria-readonly":!!u,"aria-checked":!!h,children:[(0,n.jsx)("input",{ref:f,disabled:!!c,value:p,type:"radio",checked:!!h,onChange:t=>{t.persist(),t.stopPropagation(),c||u||(s.group?s?.onChangeValue?.(p,t):"checked"in e||h||g(!0),h||v?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),a]})})},Group:function(e){let{name:t,children:o,type:s="radio",disabled:l,readonly:c,onChange:u,...a}=e,[p,d]=(0,r.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,n.jsx)("div",{role:"radiogroup",...a,children:(0,n.jsx)(i.Provider,{value:{onChangeValue:(t,o)=>{t!==p&&("value"in e||d(t),u?.(t,o))},type:s,value:p,disabled:l,readonly:c,group:!0,name:t},children:o})})}};e.s(["Radio",()=>s],59772)},21710,e=>{"use strict";var t=e.i(45100),o=e.i(18694);e.i(82928);var n=e.i(69389),r=e.i(93612);e.i(73869);var i=e.i(84435);let s=`
function App() {
  return (
    <>
      <TPopover popoverContent="Popover Content">
        <TButton status="primary">Hover me!</TButton>
      </TPopover>
    </>
  );
}
`;function l(){return(0,t.jsx)(i.CodePreview,{code:s})}let c=`
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
`;function v(){return(0,t.jsx)(i.CodePreview,{code:d})}let m=`
function App() {
  const [visible, setVisible] = useState(true);
  return (
    <TPopover popoverContent="Popover Content" trigger="click"  placement="right" visible={visible}>
      <TButton status="primary" onClick={()=> setVisible(!visible)}>一直显示(Always show)</TButton>
    </TPopover>
  );
}
`;function f(){return(0,t.jsx)(i.CodePreview,{code:m})}let h=`
function App() {
  return (
    <TPopover popoverContent="Popover Content" trigger="click" disabled>
      <TButton status="primary" disabled>Click Me!</TButton>
    </TPopover>
  );
}
`;function g(){return(0,t.jsx)(i.CodePreview,{code:h})}let C=`
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
`;function x(){return(0,t.jsx)(i.CodePreview,{code:C})}function T(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(r.Code,{children:"popoverContent"}),"自定义浮层内容，",(0,t.jsx)(r.Code,{children:"TPopover"})," 的子元素作为触发元素"]}),children:"基本用法"}),"\n",(0,t.jsx)(l,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["提供 ",(0,t.jsx)(r.Code,{children:"悬浮时触发(默认)"}),"、",(0,t.jsx)(r.Code,{children:"点击时触发"}),"、",(0,t.jsx)(r.Code,{children:"获取焦点时触发"}),"、",(0,t.jsx)(r.Code,{children:"右击时触发"}),"等方式"]}),children:"不同触发方式"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(r.Code,{children:"placement"})," 控制浮层方向，如果需要浮层箭头，设置 ",(0,t.jsx)(r.Code,{children:"showArrow=true"})," 即可"]}),children:"不同的位置"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["使用 ",(0,t.jsx)(r.Code,{children:"useContext(Popover.PopoverContext)"})," 可以获取到触发元素的 ",(0,t.jsx)(r.Code,{children:"dom 节点"})]}),children:"获取触发元素"}),"\n",(0,t.jsx)(v,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可以通过 ",(0,t.jsx)(r.Code,{children:"visible"})," 自由控制弹出层的显示或隐藏"]}),children:"可控制显示的弹出层"}),"\n",(0,t.jsx)(f,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"组件禁用后，不再显示弹出层"}),children:"禁用状态的弹出层"}),"\n",(0,t.jsx)(g,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["当 ",(0,t.jsx)(r.Code,{children:"trigger"})," 或 ",(0,t.jsx)(r.Code,{children:"弹框内容"})," 显示内容动态变化时，自适应调整位置"]}),children:"动态自适应"}),"\n",(0,t.jsx)(x,{})]})}function P(e={}){let{wrapper:n}={...(0,o.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(T,{...e})}):T(e)}function b(){return(0,t.jsx)(P,{})}e.s(["HowMakeCssButton",()=>b],21710)}]);