(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,t.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,r])},7823,e=>{"use strict";function t(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}e.s(["default",()=>t])},37215,e=>{"use strict";function t(){return(t=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>t])},22480,e=>{"use strict";let t=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,t])},98319,e=>{"use strict";var t=e.i(64334);function r(...e){return(0,t.useCallback)(t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})},e)}e.s(["useComposedRefs",()=>r])},88036,e=>{"use strict";var t=e.i(45100),r=e.i(64334),n=e.i(22480);function a(e){let t=(0,r.useRef)(null);return t.current=e,(0,r.useCallback)((...e)=>t.current?.(...e),[])}var o=e.i(96224);function l(e,t){try{return e.querySelector(t)}catch(e){return null}}function c({scrollContainer:e,targetId:t,offset:r,isScrolling:n}){var a,c;if(!t)return;let u=l(document,`#${CSS.escape(t)}`);if(!u)return;let i=e.current,s=((void 0===(a=i)&&(a=window),a)&&(a===window?Math.ceil(window.pageYOffset):a.scrollTop)||0)+((e,t)=>{if(!e.getClientRects().length)return 0;let r=e.getBoundingClientRect();return r.width||r.height?t&&t!==window?r.top-t.getBoundingClientRect().top:(t=e.ownerDocument.documentElement,r.top-t.clientTop):r.top})(u,i)+r;(n.current=!0,(0,o.isWindow)(i))?i.scrollTo((void 0===(c=i)&&(c=window),c)&&(c===window?Math.ceil(window.pageXOffset||window.scrollX):c.scrollLeft)||0,s):i.scrollTop=s}function u({targetId:e,linkMap:t,wrapperRef:r,currentId:n,setCurrentId:a,onChange:o}){e&&r.current&&t.current.get(e)&&e!==n&&a(e).then(()=>{o?.(e,n)})}var i=e.i(98319);let s=(0,r.forwardRef)((e,s)=>{let{scrollContainer:d,offset:h=0,children:p,onChange:g,queryKey:f="anchor-id",isCloseInitAnchor:x,...v}=e,{currentId:C,onLinkClick:b,wrapperRef:m,linkMap:T}=function({propScrollContainer:e,onChange:t,offset:n,queryKey:i,isCloseInitAnchor:s}){var d;let h,p,g=(0,r.useRef)(null),f=(0,r.useRef)(null),x=(0,r.useRef)(new Map),v=(0,r.useRef)(!1),[C,b]=function(e){let[t,n]=(0,r.useState)({value:"",resolve:e=>{}});return(0,r.useEffect)(()=>{t.resolve(t.value)},[t]),[t.value,e=>new Promise(t=>{n(r=>{let n=e;return"function"==typeof e&&(n=e(r.value)),{value:n,resolve:t}})})]}(0),m=a(()=>{if(v.current)return;let e=function({linkMap:e,scrollContainer:t}){let r=t.current,n=((0,o.isWindow)(r)?document.documentElement||document.body:r).getBoundingClientRect(),a=Array.from(e.current.keys()),c=[];for(let e of a){let t=l(document,"#"+CSS.escape(e));if(t){let{top:e}=t.getBoundingClientRect(),a=(0,o.isWindow)(r)?e:e-n.top;a>=0&&c.push({element:t,top:a})}}return 0===c.length?null:c.reduce((e,t)=>e.top<=t.top?e:t).element}({linkMap:x,scrollContainer:f});e?.id&&u({targetId:e.id,linkMap:x,wrapperRef:g,currentId:C,setCurrentId:b,onChange:t})}),T=a((d=()=>{m(),v.current=!1},h=null,(p=(...e)=>{h||(h=setTimeout(()=>{h=null,d(...e)},30))}).cancel=()=>{h&&(clearTimeout(h),h=null)},p));return(0,r.useEffect)(()=>(f.current=(0,o.isString)(e)?l(document,e):e||window,f.current?.addEventListener("scroll",T),()=>{f.current?.removeEventListener("scroll",T)}),[T,e]),(0,r.useEffect)(()=>{if(!s)return void T();let e=new URLSearchParams(new URL(window.location.href).search).get(i);e&&(u({targetId:e,linkMap:x,wrapperRef:g,currentId:C,setCurrentId:b,onChange:t}),c({scrollContainer:f,targetId:e,offset:n,isScrolling:v}))},[]),{onScroll:T,currentId:C,onLinkClick:function(e,r){e.preventDefault(),u({targetId:r,linkMap:x,wrapperRef:g,currentId:C,setCurrentId:b,onChange:t}),c({scrollContainer:f,targetId:r,offset:n,isScrolling:v})},wrapperRef:g,scrollContainer:f,linkMap:x}}({propScrollContainer:d,onChange:g,offset:h,queryKey:f,isCloseInitAnchor:x});return(0,t.jsx)(n.AnchorContext.Provider,{value:{currentId:C,linkMap:T,onLinkClick:b},children:(0,t.jsx)("div",{...v,ref:(0,i.useComposedRefs)(m,s),children:p})})});e.s(["Anchor",0,s],88036)},69438,e=>{"use strict";var t=e.i(45100),r=e.i(64334),n=e.i(22480),a=e.i(98319);let o=(0,r.forwardRef)((e,o)=>{let{onLinkClick:l,linkMap:c,currentId:u}=(0,r.useContext)(n.AnchorContext),{onClick:i,targetId:s,children:d,className:h,activeClassName:p,...g}=e,f=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;return e=f.current,s&&c.current.set(s,e),()=>{c.current.delete(s)}},[s,c]),(0,t.jsx)("div",{ref:(0,a.useComposedRefs)(o,f),...g,onClick:e=>{e.stopPropagation(),i?.(e),l?.(e,s)},"data-target-id":s,className:u===s?p:h,children:d})});e.s(["AnchorLink",0,o],69438)},93562,e=>{"use strict";var t=e.i(88036),r=e.i(69438),n=e.i(22480);let a={Root:t.Anchor,Link:r.AnchorLink,Context:n.AnchorContext};e.s(["Anchor",()=>a])},55552,e=>{"use strict";var t=e.i(45100);let r=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 24 24",paths:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12c0 3.542-2.869 3.968-5.512 4.36-1.461.216-2.854.423-3.655 1.14-.846.757-.523 1.895-.227 2.94C13.991 21.8 14.332 23 12 23 5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11zm-2.292-.688a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zM14.98 7.876a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125zm-4.354-2.063a2.062 2.062 0 11-4.125 0 2.062 2.062 0 014.125 0zm-5.73 7.563a2.062 2.062 0 100-4.125 2.062 2.062 0 000 4.125z"})})});e.s(["IconPlatteFill",0,r])},59772,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var n=e.i(45100),a=e.i(2157);let o=(0,t.createContext)({type:"radio"}),l={RadioContext:r,Root:function(e){let l=(0,t.useContext)(o),c=function({props:e,context:t}){let r={...e};return t.group&&(r.checked=t.value===e.value,r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:l}),{disabled:u,readonly:i,children:s,value:d,checked:h,onChange:p,...g}=c,f=(0,t.useRef)(null),[x,v]=(0,a.useMergeValue)(!1,{value:h,defaultValue:c.defaultChecked});return(0,n.jsx)(r.Provider,{value:{checked:x,disabled:u,readonly:i},children:(0,n.jsxs)("label",{...g,onClick:function(e){u||i?e.preventDefault():g?.onClick?.(e)},"aria-disabled":!!u,"aria-readonly":!!i,"aria-checked":!!x,children:[(0,n.jsx)("input",{ref:f,disabled:!!u,value:d,type:"radio",checked:!!x,onChange:t=>{t.persist(),t.stopPropagation(),u||i||(l.group?l?.onChangeValue?.(d,t):"checked"in e||x||v(!0),x||p?.(!0,t))},onClick:e=>{e.stopPropagation()},"aria-readonly":!!i}),s]})})},Group:function(e){let{name:t,children:r,type:l="radio",disabled:c,readonly:u,onChange:i,...s}=e,[d,h]=(0,a.useMergeValue)(void 0,{defaultValue:e.defaultValue,value:e.value});return(0,n.jsx)("div",{role:"radiogroup",...s,children:(0,n.jsx)(o.Provider,{value:{onChangeValue:(t,r)=>{t!==d&&("value"in e||h(t),i?.(t,r))},type:l,value:d,disabled:c,readonly:u,group:!0,name:t},children:r})})}};e.s(["Radio",()=>l],59772)},46030,e=>{"use strict";var t=e.i(64334);let r=(0,t.createContext)({checked:!1});var n=e.i(45100),a=e.i(2157);let o=(0,t.createContext)({isCheckboxGroup:!1,checkboxGroupValue:[],onGroupChange:()=>{},registerValue:()=>{},unRegisterValue:()=>{}}),l={CheckboxContext:r,Root:function(e){let l=(0,t.useContext)(o),{onGroupChange:c}=l,u=function({props:e,context:t}){let r={...e};return t.isCheckboxGroup&&(r.checked=-1!==t.checkboxGroupValue.indexOf(e.value),r.disabled=!!(t.disabled||e.disabled),r.readonly=!!(t.readonly||e.readonly)),r}({props:e,context:l}),{disabled:i,children:s,readonly:d,value:h,checked:p,onChange:g,indeterminate:f,...x}=u,v=(0,t.useRef)(null),[C,b]=(0,a.useMergeValue)(!1,{value:p,defaultValue:u.defaultChecked});return(0,t.useEffect)(()=>(l.registerValue(h),()=>{l.unRegisterValue(h)}),[h]),(0,n.jsx)(r.Provider,{value:{checked:C,disabled:i,indeterminate:f,readonly:d},children:(0,n.jsxs)("label",{...x,onClick:function(e){i||d?e.preventDefault():x?.onClick?.(e)},"aria-disabled":!!i,"aria-readonly":!!d,"aria-checked":!!C,children:[(0,n.jsx)("input",{value:h,disabled:!!i,ref:v,checked:!!C,onChange:function(e){e.persist(),e.stopPropagation(),i||d||(l.isCheckboxGroup?c?.(u.value,e.target.checked,e):b(e.target.checked),g?.(e.target.checked,e))},onClick:e=>e.stopPropagation(),type:"checkbox","aria-readonly":!!d}),s]})})},IconCheck:function({className:e}){return(0,n.jsx)("svg",{className:e,"aria-hidden":!0,focusable:!1,viewBox:"0 0 1024 1024",width:"200",height:"200",fill:"currentColor",children:(0,n.jsx)("path",{d:"M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z","p-id":"840"})})},Group:function(e){let{disabled:r,children:l,readonly:c,onChange:u,...i}=e,[s,d]=(0,a.useMergeValue)([],{defaultValue:e.defaultValue,value:e.value}),[h,p]=(0,t.useState)([]);return(0,n.jsx)("div",{role:"checkboxgroup",...i,children:(0,n.jsx)(o.Provider,{value:{isCheckboxGroup:!0,checkboxGroupValue:s,onGroupChange:function(e,t,r){if(!Array.isArray(s))return void console.error("Checkbox.Group value must be an array");let n=s?.slice()||[];t?n.push(e):n.splice(s.indexOf(e),1),d(n),u?.(n.filter(e=>h.indexOf(e)>-1),r)},disabled:r,readonly:c,registerValue:e=>{p(t=>Array.from(new Set([...t,e])))},unRegisterValue:e=>{p(t=>t.filter(t=>t!==e))}},children:l})})}};e.s(["Checkbox",()=>l],46030)},18615,e=>{"use strict";var t=e.i(45100),r=e.i(18694);e.i(82928);var n=e.i(69389),a=e.i(93612);e.i(73869);var o=e.i(84435);let l=`
function App() {
  return (
    <div className="flex gap-4">
      <TTag>Default</TTag>
      <TTag className="text-white bg-primary-color">Primary</TTag>
      <TTag className="border border-primary-color text-primary-color bg-color">Primary</TTag>
    </div>
  );
}`;function c(){return(0,t.jsx)(o.CodePreview,{code:l})}let u=`function App() {
  return (
    <div className="inline-flex gap-4">
      <TTag closable>Tag</TTag>
      <TTag closable>
        <IconInfoLine /> <span className="ml-1">Tag</span>
      </TTag>
    </div>
  );
}
`;function i(){return(0,t.jsx)(o.CodePreview,{code:u})}let s=`function App() {
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
`;function d(){return(0,t.jsx)(o.CodePreview,{code:s})}let h=`
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
}`;function p(){return(0,t.jsx)(o.CodePreview,{code:h})}let g=`function App() {
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
`;function f(){return(0,t.jsx)(o.CodePreview,{code:g})}function x(e){return(0,t.jsxs)(t.Fragment,{children:["\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"基础标签为默认的为灰色样式。但由于这个组件过为简单，样式完全建议自定义即可。"}),children:"基本用法"}),"\n",(0,t.jsx)(c,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:["可设置 ",(0,t.jsx)(a.Code,{children:"closable"})," 可以使标签可关闭。关闭时会触发 ",(0,t.jsx)(a.Code,{children:"onClose"})," 事件。"]}),children:"可关闭标签"}),"\n",(0,t.jsx)(i,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Code,{children:"Tag"})," 组件本身不支持可选中功能，但是可以通过 ",(0,t.jsx)(a.Code,{children:"Checkbox"})," 组件实现。以下是一个简单的示例："]}),children:"可选中"}),"\n",(0,t.jsx)(d,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"可动态添加和删除标签。"}),children:"动态编辑标签"}),"\n",(0,t.jsx)(p,{}),"\n","\n",(0,t.jsx)(n.H3Sub,{sub:(0,t.jsx)(t.Fragment,{children:"自定义异步关闭功能。"}),children:"异步关闭"}),"\n",(0,t.jsx)(f,{})]})}function v(e={}){let{wrapper:n}={...(0,r.useMDXComponents)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function C(){return(0,t.jsx)(v,{})}e.s(["HowMakeCssButton",()=>C],18615)}]);