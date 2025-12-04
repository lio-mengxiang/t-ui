(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return c}});let c=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var n={};for(var c in e)if(({}).hasOwnProperty.call(e,c)){if(-1!==t.indexOf(c))continue;n[c]=e[c]}return n}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function n(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>n])},88036,e=>{"use strict";var t=e.i(45100),n=e.i(64334),c=e.i(22480);function r(e){let t=(0,n.useRef)(null);return t.current=e,(0,n.useCallback)((...e)=>t.current?.(...e),[])}var o=e.i(96224);function l(e,t){try{return e.querySelector(t)}catch(e){return null}}function i({scrollContainer:e,targetId:t,offset:n,isScrolling:c}){var r,i;if(!t)return;let a=l(document,`#${CSS.escape(t)}`);if(!a)return;let u=e.current,s=((void 0===(r=u)&&(r=window),r)&&(r===window?Math.ceil(window.pageYOffset):r.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?t&&t!==window?n.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top})(a,u)+n;(c.current=!0,(0,o.isWindow)(u))?u.scrollTo((void 0===(i=u)&&(i=window),i)&&(i===window?Math.ceil(window.pageXOffset||window.scrollX):i.scrollLeft)||0,s):u.scrollTop=s}function a({targetId:e,linkMap:t,wrapperRef:n,currentId:c,setCurrentId:r,onChange:o}){e&&n.current&&t.current.get(e)&&e!==c&&r(e).then(()=>{o?.(e,c)})}var u=e.i(98319);let s=(0,n.forwardRef)((e,s)=>{let{scrollContainer:d,offset:h=0,children:x,onChange:f,queryKey:p="anchor-id",isCloseInitAnchor:C,...k}=e,{currentId:v,onLinkClick:g,wrapperRef:b,linkMap:m}=function({propScrollContainer:e,onChange:t,offset:c,queryKey:u,isCloseInitAnchor:s}){var d;let h,x,f=(0,n.useRef)(null),p=(0,n.useRef)(null),C=(0,n.useRef)(new Map),k=(0,n.useRef)(!1),[v,g]=function(e){let[t,c]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{c(n=>{let c=e;return"function"==typeof e&&(c=e(n.value)),{value:c,resolve:t}})})]}(0),b=r(()=>{if(k.current)return;let e=function({linkMap:e,scrollContainer:t}){let n=t.current,c=((0,o.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),r=Array.from(e.current.keys()),i=[];for(let e of r){let t=l(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),r=(0,o.isWindow)(n)?e:e-c.top;r>=0&&i.push({element:t,top:r})}}return 0===i.length?null:i.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:C,scrollContainer:p});e?.id&&a({targetId:e.id,linkMap:C,wrapperRef:f,currentId:v,setCurrentId:g,onChange:t})}),m=r((d=()=>{b(),k.current=!1},h=null,(x=(...e)=>{h||(h=setTimeout(()=>{h=null,d(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},x));return(0,n.useEffect)(()=>(p.current=(0,o.isString)(e)?l(document,e):e||window,p.current?.addEventListener("scroll",m),()=>{p.current?.removeEventListener("scroll",m)}),[m,e]),(0,n.useEffect)(()=>{if(!s)return void m();let e=new URLSearchParams(new URL(window.location.href).search).get(u);e&&(a({targetId:e,linkMap:C,wrapperRef:f,currentId:v,setCurrentId:g,onChange:t}),i({scrollContainer:p,targetId:e,offset:c,isScrolling:k}))},[]),{onScroll:m,currentId:v,onLinkClick:function(e,n){e.preventDefault(),a({targetId:n,linkMap:C,wrapperRef:f,currentId:v,setCurrentId:g,onChange:t}),i({scrollContainer:p,targetId:n,offset:c,isScrolling:k})},wrapperRef:f,scrollContainer:p,linkMap:C}}({propScrollContainer:d,onChange:f,offset:h,queryKey:p,isCloseInitAnchor:C});return(0,t.jsx)(c.AnchorContext.Provider,{value:{currentId:v,linkMap:m,onLinkClick:g},children:(0,t.jsx)("div",{...k,ref:(0,u.useComposedRefs)(b,s),children:x})})});e.s(["Anchor",0,s],88036)},69438,e=>{"use strict";var t=e.i(45100),n=e.i(64334),c=e.i(22480),r=e.i(98319);let o=(0,n.forwardRef)((e,o)=>{let{onLinkClick:l,linkMap:i,currentId:a}=(0,n.useContext)(c.AnchorContext),{onClick:u,targetId:s,children:d,className:h,activeClassName:x,...f}=e,p=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=p.current,s&&i.current.set(s,e),()=>{i.current.delete(s)}},[s,i]),(0,t.jsx)("div",{ref:(0,r.useComposedRefs)(o,p),...f,onClick:e=>{e.stopPropagation(),u?.(e),l?.(e,s)},"data-target-id":s,className:a===s?x:h,children:d})});e.s(["AnchorLink",0,o],69438)},93562,e=>{"use strict";var t=e.i(88036),n=e.i(69438),c=e.i(22480);let r={Root:t.Anchor,Link:n.AnchorLink,Context:c.AnchorContext};e.s(["Anchor",()=>r])},59772,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var c=e.i(45100),r=e.i(2157);let o=(0,t.createContext)({type:"radio"}),l={RadioContext:n,Root:function(e){let l=(0,t.useContext)(o),i=function({props:e,context:t}){let n={...e};return t.group&&(n.checked=t.value===e.value,n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:l}),{disabled:a,readonly:u,children:s,value:d,checked:h,onChange:x,...f}=i,p=(0,t.useRef)(null),[C,k]=(0,r.useMergeValue)(!1,{value:h,defaultValue:i.defaultChecked});return(0,c.jsx)(n.Provider,{value:{checked:C,disabled:a,readonly:u},children:(0,c.jsxs)("label",{...f,onClick:function(e){a||u?e.preventDefault():f?.onClick?.(e)},"aria-disabled":!!a,"aria-readonly":!!u,"aria-checked":!!C,children:[(0,c.jsx)("input",{ref:p,disabled:!!a,value:d,type:"radio",checked:!!C,onChange:t=>{t.persist(),t.stopPropagation(),a||u||(l.group?l?.onChangeValue?.(d,t):"checked"in e||C||k(!0),C||x?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!u}),s]})})},Group:function(e){let{name:t,children:n,type:l="radio",disabled:i,readonly:a,onChange:u,...s}=e,[d,h]=(0,r.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,c.jsx)("div",{role:"radiogroup",...s,children:(0,c.jsx)(o.Provider,{value:{onChangeValue:(t,n)=>{t!==d&&("value"in e||h(t),u?.(t,n))},type:l,value:d,disabled:i,readonly:a,group:!0,name:t},children:n})})}};e.s(["Radio",()=>l],59772)},46030,e=>{"use strict";var t=e.i(64334);let n=(0,t.createContext)({checked:!1});var c=e.i(45100),r=e.i(2157);let o=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),l={CheckboxContext:n,Root:function(e){let l=(0,t.useContext)(o),{onGroupChange:i}=l,a=function({props:e,context:t}){let n={...e};return t.isCheckboxGroup&&(n.checked=-1!==t.checkboxGroupValue.indexOf(e.value),n.disabled=!!(t.disabled||e.disabled),n.readonly=!!(t.readonly||e.readonly)),n}({props:e,context:l}),{disabled:u,children:s,readonly:d,value:h,checked:x,onChange:f,indeterminate:p,...C}=a,k=(0,t.useRef)(null),[v,g]=(0,r.useMergeValue)(!1,{value:x,defaultValue:a.defaultChecked});return(0,t.useEffect)(()=>(l.registerValue(h),()=>{l.unRegisterValue(h)}),[h]),(0,c.jsx)(n.Provider,{value:{checked:v,disabled:u,indeterminate:p,readonly:d},children:(0,c.jsxs)("label",{...C,onClick:function(e){u||d?e.preventDefault():C?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!d,"aria-checked":!!v,children:[(0,c.jsx)("input",{value:h,disabled:!!u,ref:k,checked:!!v,onChange:function(e){e.persist(),e.stopPropagation(),u||d||(l.isCheckboxGroup?i?.(a.value,e.target.checked,e):g(e.target.checked),f?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),s]})})},IconCheck:function({className:e}){return(0,c.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,c.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:n,children:l,readonly:i,onChange:a,...u}=e,[s,d]=(0,r.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[h,x]=(0,t.useState)([]);return(0,c.jsx)("div",{role:"checkboxgroup",...u,children:(0,c.jsx)(o.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:s,onGroupChange:function(e,t,n){if(!Array.isArray(s))return void console.error("Checkbox.Group value must be an array");let c=s?.slice()||[];t?c.push(e):c.splice(s.indexOf(e),1),d(c),a?.(c.filter(e=>h.indexOf(e)>-1),n)},disabled:n,readonly:i,registerValue:e=>{x(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{x(t=>t.filter(t=>t!==e))}},children:l})})}};e.s(["Checkbox",()=>l],46030)},16321,e=>{"use strict";var t=e.i(45100),n=e.i(18694);e.i(82928);var c=e.i(69389),r=e.i(93612);e.i(73869);var o=e.i(84435);let l=`function App() {
  return (
    <div className="flex flex-wrap gap-4 flex-col">
     <div className="text-sm">Not Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <TCheckbox>Default</TCheckbox>
       <TCheckbox disabled>Disabled</TCheckbox>
       <TCheckbox readonly>Readonly</TCheckbox>
     </div>
     <div className="text-sm">Checked Style:</div>
     <div className="flex gap-4 flex-wrap">
       <TCheckbox checked>Default</TCheckbox>
       <TCheckbox disabled checked>Disabled</TCheckbox>
       <TCheckbox readonly checked>Readonly</TCheckbox>
     </div>
    </div>
  );
}`;function i(){return(0,t.jsx)(o.CodePreview,{code:l})}let a=`function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <TButton
        onClick={() => {
          setChecked(!checked);
        }}
        status="primary"
        type="outline"
        className="w-fit"
      >
        {checked ? 'Uncheck' : 'Check'}
      </TButton>
      <TCheckbox checked={checked}>Default</TCheckbox>
      <TCheckbox disabled checked={checked}>
        Disabled
      </TCheckbox>
      <TCheckbox readonly checked={checked}>
        Readonly
      </TCheckbox>
    </div>
  );
}`;function u(){return(0,t.jsx)(o.CodePreview,{code:a})}let s=`function App() {
  return (
    <Checkbox.Group defaultValue={['2']} className="flex gap-4 flex-wrap">
      <TCheckbox value="1">Option 1</TCheckbox>
      <TCheckbox value="2">Option 2</TCheckbox>
      <TCheckbox value="3">Option 3</TCheckbox>
    </Checkbox.Group>
  );
}`;function d(){return(0,t.jsx)(o.CodePreview,{code:s})}let h=`function App() {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [value, setValue] = useState([0, 1]);
  const options = ['Option 1', 'Option 2', 'Option 3'];


  function onChangeAll(checked) {
    if (checked) {
      setIndeterminate(false);
      setCheckAll(true);
      setValue([0, 1, 2]);
    } else {
      setIndeterminate(false);
      setCheckAll(false);
      setValue([]);
    }
  }

  function onChange(checkList) {
    setIndeterminate(!!(checkList.length && checkList.length !== options.length));
    setCheckAll(!!(checkList.length === options.length));
    setValue(checkList);
  }

  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <TCheckbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate} className="w-fit">
        {checkAll ? 'unCheck All' : 'Check All'}
      </TCheckbox>
      <Checkbox.Group value={value} onChange={onChange} className="flex gap-4 flex-wrap">
        {options.map((option, index) => (
          <TCheckbox key={index} value={index}>
            {option}
          </TCheckbox>
        ))}
      </Checkbox.Group>
    </div>
  );
}`;function x(){return(0,t.jsx)(o.CodePreview,{code:h})}function f(e){let o={code:"code",div:"div",p:"p",...(0,n.useMDXComponents)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["本质上 ",(0,t.jsx)(o.code,{children:"checkbox"})," 组件的就是一个多选的逻辑，但很多组件库的多选按钮仅限于方形的 ",(0,t.jsx)(o.code,{children:"checkbox"})," 按钮。"]}),"\n",(0,t.jsxs)(o.p,{children:["而我们的 ",(0,t.jsx)(o.code,{children:"checkbox"})," 组件，默认我封装为了 ",(0,t.jsx)(o.code,{children:"TCheckbox"})," 组件是方形的 ",(0,t.jsx)(o.code,{children:"checkbox"})," 按钮外，也支持用户自己用 ",(0,t.jsx)(o.code,{children:"tailwindcss"})," 或者 ",(0,t.jsx)(o.code,{children:"css"})," 来自定义样式。"]}),"\n",(0,t.jsx)(o.p,{children:"你会在创意案例中你后续会增加很多好玩的多选样式。"}),"\n","\n",(0,t.jsx)(c.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.div,{className:"mb-2",children:["可以看到，我们的 ",(0,t.jsx)(r.Code,{children:"checkbox"})," 组件，主要有三种状态，分别是： ",(0,t.jsx)(r.Code,{children:"default"}),"、 ",(0,t.jsx)(r.Code,{children:"disabled"}),"、",(0,t.jsx)(r.Code,{children:"readonly"}),"。然后分别每种状态有选中和未选中的样式。 "]}),(0,t.jsxs)(o.div,{children:["需要注意，HTML 标准并不支持 ",(0,t.jsx)(r.Code,{children:"readonly"})," 属性，这是我们组件单独封装的。"]})]}),children:"基础多选框"}),"\n",(0,t.jsx)(i,{}),"\n","\n",(0,t.jsx)(c.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过 ",(0,t.jsx)(r.Code,{children:"checked"})," 属性控制是否选中"]}),children:"受控按钮"}),"\n",(0,t.jsx)(u,{}),"\n","\n",(0,t.jsx)(c.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["将多个 ",(0,t.jsx)(r.Code,{children:"checkbox"})," 组件放在一个 ",(0,t.jsx)(r.Code,{children:"checkbox-group"})," 组件中，注意一定要设置 ",(0,t.jsx)(r.Code,{children:"defaultValue"})," 或者",(0,t.jsx)(r.Code,{children:"value"})," 属性才能实现多选框组的功能。"]}),children:"多选框 Group"}),"\n",(0,t.jsx)(d,{}),"\n","\n",(0,t.jsx)(c.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["通过 ",(0,t.jsx)(r.Code,{children:"indeterminate"})," 属性可以实现半选效果"]}),children:"半选 Group"}),"\n",(0,t.jsx)(x,{})]})}function p(e={}){let{wrapper:c}={...(0,n.useMDXComponents)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}function C(){return(0,t.jsx)(p,{})}e.s(["HowMakeCssButton",()=>C],16321)}]);