(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function r(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>r])},88036,e=>{"use strict";var t=e.i(45100),r=e.i(64334),n=e.i(22480);function o(e){let t=(0,r.useRef)(null);return t.current=e,(0,r.useCallback)((...e)=>t.current?.(...e),[])}var a=e.i(96224);function i(e,t){try{return e.querySelector(t)}catch(e){return null}}function c({scrollContainer:e,targetId:t,offset:r,isScrolling:n}){var o,c;if(!t)return;let u=i(document,`#${CSS.escape(t)}`);if(!u)return;let l=e.current,s=((void 0===(o=l)&&(o=window),o)&&(o===window?Math.ceil(window.pageYOffset):o.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?t&&t!==window?r.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,r.top-t.clientTop):r.top})(u,l)+r;(n.current=!0,(0,a.isWindow)(l))?l.scrollTo((void 0===(c=l)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,s):l.scrollTop=s}function u({targetId:e,linkMap:t,wrapperRef:r,currentId:n,setCurrentId:o,onChange:a}){e&&r.current&&t.current.get(e)&&e!==n&&o(e).then(()=>{a?.(e,n)})}var l=e.i(98319);let s=(0,r.forwardRef)((e,s)=>{let{scrollContainer:d,offset:h=0,children:p,onChange:g,queryKey:f="anchor-id",isCloseInitAnchor:x,...C}=e,{currentId:v,onLinkClick:k,wrapperRef:m,linkMap:b}=function({propScrollContainer:e,onChange:t,offset:n,queryKey:l,isCloseInitAnchor:s}){var d;let h,p,g=(0,r.useRef)(null),f=(0,r.useRef)(null),x=(0,r.useRef)(new Map),C=(0,r.useRef)(!1),[v,k]=function(e){let[t,n]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{n(r=>{let n=e;return"function"==typeof e&&(n=e(r.value)),{value:n,resolve:t}})})]}(0),m=o(()=>{if(C.current)return;let e=function({linkMap:e,scrollContainer:t}){let r=t.current,n=((0,a.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),o=Array.from(e.current.keys()),c=[];for(let e of o){let t=i(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),o=(0,a.isWindow)(r)?e:e-n.top;o>=0&&c.push({element:t,top:o})}}return 0===c.length?null:c.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:x,scrollContainer:f});e?.id&&u({targetId:e.id,linkMap:x,wrapperRef:g,currentId:v,setCurrentId:k,onChange:t})}),b=o((d=()=>{m(),C.current=!1},h=null,(p=(...e)=>{h||(h=setTimeout(()=>{h=null,d(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},p));return(0,r.useEffect)(()=>(f.current=(0,a.isString)(e)?i(document,e):e||window,f.current?.addEventListener("scroll",b),()=>{f.current?.removeEventListener("scroll",b)}),[b,e]),(0,r.useEffect)(()=>{if(!s)return void b();let e=new URLSearchParams(new URL(window.location.href).search).get(l);e&&(u({targetId:e,linkMap:x,wrapperRef:g,currentId:v,setCurrentId:k,onChange:t}),c({scrollContainer:f,targetId:e,offset:n,isScrolling:C}))},[]),{onScroll:b,currentId:v,onLinkClick:function(e,r){e.preventDefault(),u({targetId:r,linkMap:x,wrapperRef:g,currentId:v,setCurrentId:k,onChange:t}),c({scrollContainer:f,targetId:r,offset:n,isScrolling:C})},wrapperRef:g,scrollContainer:f,linkMap:x}}({propScrollContainer:d,onChange:g,offset:h,queryKey:f,isCloseInitAnchor:x});return(0,t.jsx)(n.AnchorContext.Provider,{value:{currentId:v,linkMap:b,onLinkClick:k},children:(0,t.jsx)("div",{...C,ref:(0,l.useComposedRefs)(m,s),children:p})})});e.s(["Anchor",0,s],88036)},69438,e=>{"use strict";var t=e.i(45100),r=e.i(64334),n=e.i(22480),o=e.i(98319);let a=(0,r.forwardRef)((e,a)=>{let{onLinkClick:i,linkMap:c,currentId:u}=(0,r.useContext)(n.AnchorContext),{onClick:l,targetId:s,children:d,className:h,activeClassName:p,...g}=e,f=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=f.current,s&&c.current.set(s,e),()=>{c.current.delete(s)}},[s,c]),(0,t.jsx)("div",{ref:(0,o.useComposedRefs)(a,f),...g,onClick:e=>{e.stopPropagation(),l?.(e),i?.(e,s)},"data-target-id":s,className:u===s?p:h,children:d})});e.s(["AnchorLink",0,a],69438)},93562,e=>{"use strict";var t=e.i(88036),r=e.i(69438),n=e.i(22480);let o={Root:t.Anchor,Link:r.AnchorLink,Context:n.AnchorContext};e.s(["Anchor",()=>o])},55552,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 24 24",paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12c0 3.542-2.869 3.968-5.512 4.36-1.461.216-2.854.423-3.655 1.14-.846.757-.523 1.895-.227 2.94C13.991 21.8 14.332 23 12 23 5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-2.292-.688a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zM14.98 7.876a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125zm-4.354-2.063a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zm-5.73 7.563a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125z"})})});e.s(["IconPlatteFill",0,r])},46030,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var n=e.i(45100),o=e.i(2157);let a=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),i={CheckboxContext:r,Root:function(e){let i=(0,t.useContext)(a),{onGroupChange:c}=i,u=function({props:e,context:t}){let r={...e};return t.isCheckboxGroup&&(r.checked=-1!==t.checkboxGroupValue.indexOf(e.value),r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:i}),{disabled:l,children:s,readonly:d,value:h,checked:p,onChange:g,indeterminate:f,...x}=u,C=(0,t.useRef)(null),[v,k]=(0,o.useMergeValue)(!1,{value:p,defaultValue:u.defaultChecked});return(0,t.useEffect)(()=>(i.registerValue(h),()=>{i.unRegisterValue(h)}),[h]),(0,n.jsx)(r.Provider,{value:{checked:v,disabled:l,indeterminate:f,readonly:d},children:(0,n.jsxs)("label",{...x,onClick:function(e){l||d?e.preventDefault():x?.onClick?.(e)},"aria-disabled":!!l,"aria-readonly":!!d,"aria-checked":!!v,children:[(0,n.jsx)("input",{value:h,disabled:!!l,ref:C,checked:!!v,onChange:function(e){e.persist(),e.stopPropagation(),l||d||(i.isCheckboxGroup?c?.(u.value,e.target.checked,e):k(e.target.checked),g?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),s]})})},IconCheck:function({className:e}){return(0,n.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,n.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:r,children:i,readonly:c,onChange:u,...l}=e,[s,d]=(0,o.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[h,p]=(0,t.useState)([]);return(0,n.jsx)("div",{role:"checkboxgroup",...l,children:(0,n.jsx)(a.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:s,onGroupChange:function(e,t,r){if(!Array.isArray(s))return void console.error("Checkbox.Group value must be an array");let n=s?.slice()||[];t?n.push(e):n.splice(s.indexOf(e),1),d(n),u?.(n.filter(e=>h.indexOf(e)>-1),r)},disabled:r,readonly:c,registerValue:e=>{p(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{p(t=>t.filter(t=>t!==e))}},children:i})})}};e.s(["Checkbox",()=>i],46030)},4937,92176,e=>{"use strict";var t=e.i(45100),r=e.i(51849);let n=(0,r.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M40 41L44 21H8.8125L4 41H40Z",fill:"none",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconOpenFileLine",0,n],4937);let o=(0,r.createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 12L31 12",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 20L31 20",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 28H23",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z",fill:"none"}),(0,t.jsx)("path",{d:"M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]})});e.s(["IconSearchFileLine",0,o],92176)},20126,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useStrokeCurrentColor:!0},paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{strokeWidth:"4",d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"})})});e.s(["IconInfoFileLine",0,r])},59772,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var n=e.i(45100),o=e.i(2157);let a=(0,t.createContext)({type:"radio"}),i={RadioContext:r,Root:function(e){let i=(0,t.useContext)(a),c=function({props:e,context:t}){let r={...e};return t.group&&(r.checked=t.value===e.value,r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:i}),{disabled:u,readonly:l,children:s,value:d,checked:h,onChange:p,...g}=c,f=(0,t.useRef)(null),[x,C]=(0,o.useMergeValue)(!1,{value:h,defaultValue:c.defaultChecked});return(0,n.jsx)(r.Provider,{value:{checked:x,disabled:u,readonly:l},children:(0,n.jsxs)("label",{...g,onClick:function(e){u||l?e.preventDefault():g?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!l,"aria-checked":!!x,children:[(0,n.jsx)("input",{ref:f,disabled:!!u,value:d,type:"radio",checked:!!x,onChange:t=>{t.persist(),t.stopPropagation(),u||l||(i.group?i?.onChangeValue?.(d,t):"checked"in e||x||C(!0),x||p?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!l}),s]})})},Group:function(e){let{name:t,children:r,type:i="radio",disabled:c,readonly:u,onChange:l,...s}=e,[d,h]=(0,o.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,n.jsx)("div",{role:"radiogroup",...s,children:(0,n.jsx)(a.Provider,{value:{onChangeValue:(t,r)=>{t!==d&&("value"in e||h(t),l?.(t,r))},type:i,value:d,disabled:c,readonly:u,group:!0,name:t},children:r})})}};e.s(["Radio",()=>i],59772)},18615,e=>{"use strict";var t=e.i(45100),r=e.i(18694);e.i(82928);var n=e.i(69389),o=e.i(93612);e.i(73869);var a=e.i(84435);let i=`
function App() {
  return (
    <div className="flex gap-4">
      <TTag>Default</TTag>
      <TTag className="text-white bg-primary-color">Primary</TTag>
      <TTag className="border border-primary-color text-primary-color bg-color">Primary</TTag>
    </div>
  );
}`;function c(){return(0,t.jsx)(a.CodePreview,{code:i})}let u=`function App() {
  return (
    <div className="inline-flex gap-4">
      <TTag closable>Tag</TTag>
      <TTag closable>
        <IconInfoLine /> <span className="ml-1">Tag</span>
      </TTag>
    </div>
  );
}
`;function l(){return(0,t.jsx)(a.CodePreview,{code:u})}let s=`function App() {
  const TagCheckbox = ({ children, className, ...rest }) => {
    return (
      <Checkbox.Root
        className={cs(
          'relative flex cursor-pointer items-center text-xs group h-6 px-2  border border-color rounded-md transition-all duration-200',
          '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
          'hover:scale-105',
          '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-50',
          '[&[aria-readonly="true"]]:cursor-default',
          '[&[aria-checked="true"]]:border-color-800 [&[aria-checked="true"]]:bg-color-50',
          className,
        )}
        {...rest}
      >
        {children}
      </Checkbox.Root>
    );
  };
  return (
    <Checkbox.Group defaultValue={[]} className="flex gap-4 flex-wrap ml-2">
      <TagCheckbox value="1" className="flex flex-col justify-center">
        Tag1
      </TagCheckbox>
      <TagCheckbox value="2" className="flex flex-col justify-center">
        Tag2
      </TagCheckbox>
      <TagCheckbox value="3" className="flex flex-col justify-center">
        Tag3
      </TagCheckbox>
    </Checkbox.Group>
  );
}
`;function d(){return(0,t.jsx)(a.CodePreview,{code:s})}let h=`
function App() {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function addTag() {
    if (inputValue) {
      tags.push(inputValue);
      setTags(tags);
      setInputValue('');
    }

    setShowInput(false);
  }

  function removeTag(index) {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {tags.map((tag, index) => {
        return (
          <TTag key={index} onClose={() => removeTag(index)} closable={index !== 0}>
            {tag}
          </TTag>
        );
      })}
      {showInput ? (
        <TInput autoFocus value={inputValue} style={{ width: 74, height: 24 }} onPressEnter={addTag} onBlur={addTag} onChange={setInputValue} />
      ) : (
        <TTag
          className="cursor-pointer w-[74px] bg-color-50"
          tabIndex={0}
          onClick={() => setShowInput(true)}
          onKeyDown={(e) => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
              // enter
              setShowInput(true);
            }
          }}
        >
          + Add Tag
        </TTag>
      )}
    </div>
  );
}`;function p(){return(0,t.jsx)(a.CodePreview,{code:h})}let g=`function App() {
  function Tag({ children }) {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible && (
          <TTag
            closable
            onClose={() => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (Math.random() >= 0.5) {
                    resolve();
                  } else {
                    TMessage.error({
                      message: '删除失败！',
                    });
                    reject();
                  }
                }, 3000);
              })
            }}
          >
            {children}
          </TTag>
        )}
      </>
    );
  }
  return (
    <Tag>Tag</Tag>
  );
}
`;function f(){return(0,t.jsx)(a.CodePreview,{code:g})}function x(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"基础标签为默认的为灰色样式。但由于这个组件过为简单，样式完全建议自定义即可。"}),children:"基本用法"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可设置 ",(0,t.jsx)(o.Code,{children:"closable"})," 可以使标签可关闭。关闭时会触发 ",(0,t.jsx)(o.Code,{children:"onClose"})," 事件。"]}),children:"可关闭标签"}),"\n",(0,t.jsx)(l,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Code,{children:"Tag"})," 组件本身不支持可选中功能，但是可以通过 ",(0,t.jsx)(o.Code,{children:"Checkbox"})," 组件实现。以下是一个简单的示例："]}),children:"可选中"}),"\n",(0,t.jsx)(d,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可动态添加和删除标签。"}),children:"动态编辑标签"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"自定义异步关闭功能。"}),children:"异步关闭"}),"\n",(0,t.jsx)(f,{})]})}function C(e={}){let{wrapper:n}={...(0,r.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function v(){return(0,t.jsx)(C,{})}e.s(["HowMakeCssButton",()=>v],18615)}]);