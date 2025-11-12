(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1521,(e,r,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return t}});let t=e=>{}},79537,e=>{e.v({AElig:"Æ",AMP:"&",Aacute:"Á",Acirc:"Â",Agrave:"À",Aring:"Å",Atilde:"Ã",Auml:"Ä",COPY:"©",Ccedil:"Ç",ETH:"Ð",Eacute:"É",Ecirc:"Ê",Egrave:"È",Euml:"Ë",GT:">",Iacute:"Í",Icirc:"Î",Igrave:"Ì",Iuml:"Ï",LT:"<",Ntilde:"Ñ",Oacute:"Ó",Ocirc:"Ô",Ograve:"Ò",Oslash:"Ø",Otilde:"Õ",Ouml:"Ö",QUOT:'"',REG:"®",THORN:"Þ",Uacute:"Ú",Ucirc:"Û",Ugrave:"Ù",Uuml:"Ü",Yacute:"Ý",aacute:"á",acirc:"â",acute:"´",aelig:"æ",agrave:"à",amp:"&",aring:"å",atilde:"ã",auml:"ä",brvbar:"¦",ccedil:"ç",cedil:"¸",cent:"¢",copy:"©",curren:"¤",deg:"°",divide:"÷",eacute:"é",ecirc:"ê",egrave:"è",eth:"ð",euml:"ë",frac12:"½",frac14:"¼",frac34:"¾",gt:">",iacute:"í",icirc:"î",iexcl:"¡",igrave:"ì",iquest:"¿",iuml:"ï",laquo:"«",lt:"<",macr:"¯",micro:"µ",middot:"·",nbsp:" ",not:"¬",ntilde:"ñ",oacute:"ó",ocirc:"ô",ograve:"ò",ordf:"ª",ordm:"º",oslash:"ø",otilde:"õ",ouml:"ö",para:"¶",plusmn:"±",pound:"£",quot:'"',raquo:"»",reg:"®",sect:"§",shy:"­",sup1:"¹",sup2:"²",sup3:"³",szlig:"ß",thorn:"þ",times:"×",uacute:"ú",ucirc:"û",ugrave:"ù",uml:"¨",uuml:"ü",yacute:"ý",yen:"¥",yuml:"ÿ"})},27208,e=>{e.v({0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"})},73850,e=>{"use strict";var r=e.i(45100);let n=(0,e.i(51849).createIcon)({iconProps:{useFillCurrentColor:!0},viewBox:"0 0 156 94",paths:(0,r.jsx)("path",{d:"M0,31.18h31.18v62.56H0V31.18Zm155.46,5.67v56.89h-31.18V45.36c0-7.83-6.34-14.18-14.17-14.18h-17.01c.29,1.85,.44,3.74,.44,5.67v56.89h-31.18V45.36c0-7.83-6.35-14.18-14.17-14.18H31.18V0h25.51c13.15,0,24.69,6.89,31.21,17.25,2.62,4.15,4.43,8.86,5.2,13.92V0h25.51c20.35,0,36.85,16.5,36.85,36.85Z"})});e.s(["IconMLogo",0,n])},7823,e=>{"use strict";function r(e,r){if(null==e)return{};var n={};for(var t in e)if(({}).hasOwnProperty.call(e,t)){if(-1!==r.indexOf(t))continue;n[t]=e[t]}return n}e.s(["default",()=>r])},37215,e=>{"use strict";function r(){return(r=Object.assign.bind()).apply(null,arguments)}e.s(["default",()=>r])},22480,e=>{"use strict";let r=(0,e.i(64334).createContext)({currentId:"",onLinkClick:()=>{},linkMap:{current:new Map}});e.s(["AnchorContext",0,r])},98319,e=>{"use strict";var r=e.i(64334);function n(...e){return(0,r.useCallback)(r=>{e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})},e)}e.s(["useComposedRefs",()=>n])},88036,59013,e=>{"use strict";var r=e.i(45100),n=e.i(64334),t=e.i(22480);function l(e){let r=(0,n.useRef)(null);return r.current=e,(0,n.useCallback)((...e)=>r.current?.(...e),[])}e.s(["useEvent",()=>l],59013);var i=e.i(96224);function o(e,r){try{return e.querySelector(r)}catch(e){return null}}function s({scrollContainer:e,targetId:r,offset:n,isScrolling:t}){var l,s;if(!r)return;let a=o(document,`#${CSS.escape(r)}`);if(!a)return;let c=e.current,u=((void 0===(l=c)&&(l=window),l)&&(l===window?Math.ceil(window.pageYOffset):l.scrollTop)||0)+((e,r)=>{if(!e.getClientRects().length)return 0;let n=e.getBoundingClientRect();return n.width||n.height?r&&r!==window?n.top-r.getBoundingClientRect().top:(r=e.ownerDocument.documentElement,n.top-r.clientTop):n.top})(a,c)+n;(t.current=!0,(0,i.isWindow)(c))?c.scrollTo((void 0===(s=c)&&(s=window),s)&&(s===window?Math.ceil(window.pageXOffset||window.scrollX):s.scrollLeft)||0,u):c.scrollTop=u}function a({targetId:e,linkMap:r,wrapperRef:n,currentId:t,setCurrentId:l,onChange:i}){e&&n.current&&r.current.get(e)&&e!==t&&l(e).then(()=>{i?.(e,t)})}var c=e.i(98319);let u=(0,n.forwardRef)((e,u)=>{let{scrollContainer:d,offset:m=0,children:p,onChange:h,queryKey:f="anchor-id",isCloseInitAnchor:w,...x}=e,{currentId:v,onLinkClick:g,wrapperRef:C,linkMap:j}=function({propScrollContainer:e,onChange:r,offset:t,queryKey:c,isCloseInitAnchor:u}){var d;let m,p,h=(0,n.useRef)(null),f=(0,n.useRef)(null),w=(0,n.useRef)(new Map),x=(0,n.useRef)(!1),[v,g]=function(e){let[r,t]=(0,n.useState)({value:"",resolve:e=>{}});return(0,n.useEffect)(()=>{r.resolve(r.value)},[r]),[r.value,e=>new Promise(r=>{t(n=>{let t=e;return"function"==typeof e&&(t=e(n.value)),{value:t,resolve:r}})})]}(0),C=l(()=>{if(x.current)return;let e=function({linkMap:e,scrollContainer:r}){let n=r.current,t=((0,i.isWindow)(n)?document.documentElement||document.body:n).getBoundingClientRect(),l=Array.from(e.current.keys()),s=[];for(let e of l){let r=o(document,"#"+CSS.escape(e));if(r){let{top:e}=r.getBoundingClientRect(),l=(0,i.isWindow)(n)?e:e-t.top;l>=0&&s.push({element:r,top:l})}}return 0===s.length?null:s.reduce((e,r)=>e.top<=r.top?e:r).element}({linkMap:w,scrollContainer:f});e?.id&&a({targetId:e.id,linkMap:w,wrapperRef:h,currentId:v,setCurrentId:g,onChange:r})}),j=l((d=()=>{C(),x.current=!1},m=null,(p=(...e)=>{m||(m=setTimeout(()=>{m=null,d(...e)},30))}).cancel=()=>{m&&(clearTimeout(m),m=null)},p));return(0,n.useEffect)(()=>(f.current=(0,i.isString)(e)?o(document,e):e||window,f.current?.addEventListener("scroll",j),()=>{f.current?.removeEventListener("scroll",j)}),[j,e]),(0,n.useEffect)(()=>{if(!u)return void j();let e=new URLSearchParams(new URL(window.location.href).search).get(c);e&&(a({targetId:e,linkMap:w,wrapperRef:h,currentId:v,setCurrentId:g,onChange:r}),s({scrollContainer:f,targetId:e,offset:t,isScrolling:x}))},[]),{onScroll:j,currentId:v,onLinkClick:function(e,n){e.preventDefault(),a({targetId:n,linkMap:w,wrapperRef:h,currentId:v,setCurrentId:g,onChange:r}),s({scrollContainer:f,targetId:n,offset:t,isScrolling:x})},wrapperRef:h,scrollContainer:f,linkMap:w}}({propScrollContainer:d,onChange:h,offset:m,queryKey:f,isCloseInitAnchor:w});return(0,r.jsx)(t.AnchorContext.Provider,{value:{currentId:v,linkMap:j,onLinkClick:g},children:(0,r.jsx)("div",{...x,ref:(0,c.useComposedRefs)(C,u),children:p})})});e.s(["Anchor",0,u],88036)},69438,e=>{"use strict";var r=e.i(45100),n=e.i(64334),t=e.i(22480),l=e.i(98319);let i=(0,n.forwardRef)((e,i)=>{let{onLinkClick:o,linkMap:s,currentId:a}=(0,n.useContext)(t.AnchorContext),{onClick:c,targetId:u,children:d,className:m,activeClassName:p,...h}=e,f=(0,n.useRef)(null);return(0,n.useEffect)(()=>{var e;return e=f.current,u&&s.current.set(u,e),()=>{s.current.delete(u)}},[u,s]),(0,r.jsx)("div",{ref:(0,l.useComposedRefs)(i,f),...h,onClick:e=>{e.stopPropagation(),c?.(e),o?.(e,u)},"data-target-id":u,className:a===u?p:m,children:d})});e.s(["AnchorLink",0,i],69438)},93562,e=>{"use strict";var r=e.i(88036),n=e.i(69438),t=e.i(22480);let l={Root:r.Anchor,Link:n.AnchorLink,Context:t.AnchorContext};e.s(["Anchor",()=>l])},53437,e=>{"use strict";var r=e.i(45100),n=e.i(18694);e.i(82928);var t=e.i(69389),l=e.i(93612);e.i(73869);var i=e.i(84435);let o=`function App() {
  return <TInput placeholder="Enter" allowClear className="w-52" />;
}`;function s(){return(0,r.jsx)(i.CodePreview,{code:o})}let a=`function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <TInput
          placeholder="Enter"
          defaultValue="warning input"
          allowClear
          className="w-52 sm:w-80"
          status="warning"
        />
      </Cell>
      <Cell>
        <TInput
          placeholder="Enter"
          defaultValue="error input"
          allowClear
          className="w-52 sm:w-80"
          status="error"
        />
      </Cell>
      <Cell><TInput readOnly placeholder="Enter" defaultValue="readOnly input" allowClear className="w-52 sm:w-80" /></Cell>
      <Cell><TInput disabled placeholder="Enter" defaultValue="disabled input" allowClear className="w-52 sm:w-80" /></Cell>
    </Grid>

  );
}`;function c(){return(0,r.jsx)(i.CodePreview,{code:a})}let u=`function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <TInput
          placeholder="Enter"
          className="w-52 sm:w-80"
          prefixElement={<IconSearchLine />}
        />
      </Cell>
      <Cell>
        <TInput
          placeholder="Enter"
          className="w-52 sm:w-80"
          suffixElement={<IconSearchLine />}
        />
      </Cell>
      <Cell>
        <TInput
          placeholder="Enter"
          className="w-52 sm:w-80"
          prefixElement="+86"
          suffixElement={<IconSearchLine />}
        />
      </Cell>
    </Grid>
  );
}`;function d(){return(0,r.jsx)(i.CodePreview,{code:u})}let m=`
function GroupWrapper({ children, className }) {
  return (
    <div className={cs(
        "flex [&>div:not(:last-child):not(:first-child)]:rounded-none",
        "[&>div:last-child]:rounded-tl-none [&>div:last-child]:rounded-bl-none",
        "[&>div:first-child]:rounded-tr-none [&>div:first-child]:rounded-br-none",
        className
      )}>
        {children}
    </div>
  )
}

const boxClassName = "flex items-center h-full border px-4 py-2 bg-color-50 rounded-md dark:border-none";

function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <GroupWrapper className="w-52 sm:w-80 h-9">
          <div className={cs(boxClassName, "border-r-0",)}>+86</div>
          <TInput
            placeholder="Enter"
            className="w-full"
          />
          <div className={cs(boxClassName, "border-l-0")}>
            <IconSearchLine />
          </div>
        </GroupWrapper>
      </Cell>
      <Cell>
        <GroupWrapper className="w-52 sm:w-80 h-9">
          <TInput
            placeholder="Enter"
            className="w-full"
          />
          <div className={cs(boxClassName, "border-l-0")}><IconSearchLine /></div>
        </GroupWrapper>
      </Cell>
      <Cell>
        <GroupWrapper className="w-52 sm:w-80 h-9">
          <div className={cs(boxClassName, "border-r-0")}><IconSearchLine /></div>
          <TInput
            placeholder="Enter"
            className="w-full"
          />
        </GroupWrapper>
      </Cell>
    </Grid>
  );
}`;function p(){return(0,r.jsx)(i.CodePreview,{code:m})}let h=`function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell>
        <TInput
          maxLength={{ length: 10 }}
          showWordLimit
          placeholder='Enter no more than 10 letters'
          className="w-52 sm:w-80"
        />
      </Cell>
      <Cell>
        <TInput
          maxLength={{ length: 10, errorOnly: true }}
          showWordLimit
          defaultValue='More than 10 letters will be error'
          className="w-52 sm:w-80"
        />
      </Cell>
    </Grid>
  );
}`;function f(){return(0,r.jsx)(i.CodePreview,{code:h})}let w=`function App() {
  return (
    <Grid columns="repeat(auto-fit,minmax(320px,1fr))" minRowHeight="40px">
      <Cell className="flex flex-col gap-2">
        <div>trim whitespace when out of focus：</div>
        <TInput
          placeholder='Enter something'
          onChange={v => { console.log('current value: ', v); }}
          normalizeTrigger={['onBlur']}
          normalize={v => v ? v.trim() : v}
          className="w-52 sm:w-80"
        />
      </Cell>
      <Cell className="flex flex-col gap-2">
        <div>trim whitespace when press enter：</div>
        <TInput
          placeholder='Enter something'
          onChange={v => { console.log('current value: ', v); }}
          normalize={v => v ? v.trim() : v}
          normalizeTrigger={['onPressEnter']}
          className="w-52 sm:w-80"
        />
      </Cell>
    </Grid>
  );
}`;function x(){return(0,r.jsx)(i.CodePreview,{code:w})}let v=`const boxClassName = "flex items-center h-full border px-4 py-2 bg-color-50 rounded-md dark:border-none";
function App() {
  return (
    <div className="flex flex-col gap-4">
      <div>minWidth:300, maxWidth:500</div>
      <TInput
         autoFitWidth style={{minWidth: 300, maxWidth: 500}} placeholder='Enter something'
      />
      <TInput
        placeholder='Enter something'
        prefixElement={<IconEmailLine />}
        style={{minWidth: 300, maxWidth: 500}}
        autoFitWidth
      />
      <GroupWrapper style={{minWidth: 300, maxWidth: 500, width: 'fit-content'}} className="h-9">
        <TInput
          placeholder='Enter something'
          prefixElement={<IconEmailLine />}
          style={{ width: '100%' }}
          autoFitWidth
        />
        <div className={cs(boxClassName, "border-l-0")}><IconSearchLine /></div>
      </GroupWrapper>
    </div>
  );
}
   
function GroupWrapper({ children, className, style }) {
  return (
    <div style={style} className={cs(
        "flex [&>div:not(:last-child):not(:first-child)]:rounded-none",
        "[&>div:last-child]:rounded-tl-none [&>div:last-child]:rounded-bl-none",
        "[&>div:first-child]:rounded-tr-none [&>div:first-child]:rounded-br-none",
        className
      )}>
        {children}
    </div>
  )
}`;function g(){return(0,r.jsx)(i.CodePreview,{code:v})}let C=`function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <InputSearch
        placeholder='Enter something'
        className="w-52 sm:w-80"
        loading
      />
      <InputSearch
        placeholder='Enter something'
        showButton
        className="w-52 sm:w-80"
        loading={loading}
        onSearch={async (value) => {
          setLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setLoading(false);
        }}
      />
    </div>
  );
}`;function j(){return(0,r.jsx)(i.CodePreview,{code:C})}let b=`function App() {
  return (
    <div className="flex flex-col gap-4">
      <Password defaultValue="password" className="w-52 sm:w-80" />
      <Password
        defaultValue='password'
        defaultVisibility={true}
        placeholder='Enter password'
        className="w-52 sm:w-80"
      />
      <Password
        defaultValue='password'
        visibilityToggle={false}
        placeholder='Enter password'
        className="w-52 sm:w-80"
      />
    </div>
  );
}`;function N(){return(0,r.jsx)(i.CodePreview,{code:b})}function E(e){return(0,r.jsxs)(r.Fragment,{children:["\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["最简单的例子。建议在使用",(0,r.jsx)(l.Code,{children:"allowClear"}),"属性的时候，加上固定参数。以免 ",(0,r.jsx)(l.Code,{children:"allowClear"})," 出现可以清除输入框内容的图标 时会占据一定空间，让输入框变长。"]}),children:"基本用法"}),"\n",(0,r.jsx)(s,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsx)(r.Fragment,{children:"不同的输入框状态"}),children:"输入状态"}),"\n",(0,r.jsx)(c,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["通过指定",(0,r.jsx)(l.Code,{children:"prefixElement"}),"和",(0,r.jsx)(l.Code,{children:"suffixElement"}),"来在输入框内添加前缀和后缀。"]}),children:"前后缀"}),"\n",(0,r.jsx)(d,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["前后标签的功能完全可以使用",(0,r.jsx)(l.Code,{children:"CSS"})," 结合 ",(0,r.jsx)(l.Code,{children:"Button"})," 组件轻松实现。"]}),children:"前后标签"}),"\n",(0,r.jsx)(p,{}),"\n","\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["设置 ",(0,r.jsx)(l.Code,{children:"maxLength.length"})," 可以限制最大字数，配合 ",(0,r.jsx)(l.Code,{children:"showWordLimit"})," 可以显示字数统计。 设置"," ",(0,r.jsx)(l.Code,{children:"maxLength.errorOnly: true"})," 后不会限制用户输入字数，但是超过最大字数会展示错误状态。"]}),children:"字数统计"}),"\n",(0,r.jsx)(f,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["在指定时机对用户输入的值进行格式化处理，前后值不一致时，会触发 ",(0,r.jsx)(l.Code,{children:"onChange"})," 事件"]}),children:"格式化输入值"}),"\n",(0,r.jsx)(x,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["通过 ",(0,r.jsx)(l.Code,{children:"autoFitWidth"})," 属性可以设置 ",(0,r.jsx)(l.Code,{children:"Input"})," 的宽度跟随文字自适应。"]}),children:"宽度自适应"}),"\n",(0,r.jsx)(g,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsxs)(r.Fragment,{children:["搜索框是一种特殊的输入框，通常用于搜索功能。通过设置 ",(0,r.jsx)(l.Code,{children:"showButton"})," 属性可以在输入框右侧显示一个搜索按钮。"]}),children:"搜索框"}),"\n",(0,r.jsx)(j,{}),"\n","\n",(0,r.jsx)(t.H3Sub,{sub:(0,r.jsx)(r.Fragment,{children:"用于密码的输入。"}),children:"密码框"}),"\n",(0,r.jsx)(N,{})]})}function I(e={}){let{wrapper:t}={...(0,n.useMDXComponents)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}function T(){return(0,r.jsx)(I,{})}e.s(["HowMakeCssButton",()=>T],53437)}]);