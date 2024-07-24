import{j as w}from"./jsx-runtime.B6N9iRLn.js";import{g as tr,r as c,R as or}from"./index.DNi1g-pO.js";import{u as nr}from"./AttchStore.CddD-W1G.js";import"./index.22bC0alc.js";var ze={exports:{}},ir="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sr=ir,ar=sr;function $e(){}function Ne(){}Ne.resetWarningCache=$e;var cr=function(){function e(n,a,u,l,i,d){if(d!==ar){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:Ne,resetWarningCache:$e};return t.PropTypes=t,t};ze.exports=cr();var lr=ze.exports;const p=tr(lr),pr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function $(e,r){const t=ur(e);if(typeof t.path!="string"){const{webkitRelativePath:n}=e;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function ur(e){const{name:r}=e;if(r&&r.lastIndexOf(".")!==-1&&!e.type){const n=r.split(".").pop().toLowerCase(),a=pr.get(n);a&&Object.defineProperty(e,"type",{value:a,writable:!1,configurable:!1,enumerable:!0})}return e}var R=(e,r,t)=>new Promise((n,a)=>{var u=d=>{try{i(t.next(d))}catch(v){a(v)}},l=d=>{try{i(t.throw(d))}catch(v){a(v)}},i=d=>d.done?n(d.value):Promise.resolve(d.value).then(u,l);i((t=t.apply(e,r)).next())});const fr=[".DS_Store","Thumbs.db"];function dr(e){return R(this,null,function*(){return q(e)&&mr(e.dataTransfer)?hr(e.dataTransfer,e.type):gr(e)?yr(e):Array.isArray(e)&&e.every(r=>"getFile"in r&&typeof r.getFile=="function")?br(e):[]})}function mr(e){return q(e)}function gr(e){return q(e)&&q(e.target)}function q(e){return typeof e=="object"&&e!==null}function yr(e){return pe(e.target.files).map(r=>$(r))}function br(e){return R(this,null,function*(){return(yield Promise.all(e.map(t=>t.getFile()))).map(t=>$(t))})}function hr(e,r){return R(this,null,function*(){if(e.items){const t=pe(e.items).filter(a=>a.kind==="file");if(r!=="drop")return t;const n=yield Promise.all(t.map(vr));return je(Be(n))}return je(pe(e.files).map(t=>$(t)))})}function je(e){return e.filter(r=>fr.indexOf(r.name)===-1)}function pe(e){if(e===null)return[];const r=[];for(let t=0;t<e.length;t++){const n=e[t];r.push(n)}return r}function vr(e){if(typeof e.webkitGetAsEntry!="function")return Ce(e);const r=e.webkitGetAsEntry();return r&&r.isDirectory?We(r):Ce(e)}function Be(e){return e.reduce((r,t)=>[...r,...Array.isArray(t)?Be(t):[t]],[])}function Ce(e){const r=e.getAsFile();if(!r)return Promise.reject(`${e} is not a File`);const t=$(r);return Promise.resolve(t)}function Dr(e){return R(this,null,function*(){return e.isDirectory?We(e):xr(e)})}function We(e){const r=e.createReader();return new Promise((t,n)=>{const a=[];function u(){r.readEntries(l=>R(this,null,function*(){if(l.length){const i=Promise.all(l.map(Dr));a.push(i),u()}else try{const i=yield Promise.all(a);t(i)}catch(i){n(i)}}),l=>{n(l)})}u()})}function xr(e){return R(this,null,function*(){return new Promise((r,t)=>{e.file(n=>{const a=$(n,e.fullPath);r(a)},n=>{t(n)})})})}function wr(e,r){if(e&&r){const t=Array.isArray(r)?r:r.split(","),n=e.name||"",a=(e.type||"").toLowerCase(),u=a.replace(/\/.*$/,"");return t.some(l=>{const i=l.trim().toLowerCase();return i.charAt(0)==="."?n.toLowerCase().endsWith(i):i.endsWith("/*")?u===i.replace(/\/.*$/,""):a===i})}return!0}var Er=Object.defineProperty,_r=Object.defineProperties,Fr=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertySymbols,Or=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable,Te=(e,r,t)=>r in e?Er(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ar=(e,r)=>{for(var t in r||(r={}))Or.call(r,t)&&Te(e,t,r[t]);if(Re)for(var t of Re(r))Pr.call(r,t)&&Te(e,t,r[t]);return e},jr=(e,r)=>_r(e,Fr(r));const Cr="file-invalid-type",Rr="file-too-large",Tr="file-too-small",kr="too-many-files",Ir=e=>{e=Array.isArray(e)&&e.length===1?e[0]:e;const r=Array.isArray(e)?`one of ${e.join(", ")}`:e;return{code:Cr,message:`File type must be ${r}`}},ke=e=>({code:Rr,message:`File is larger than ${e} ${e===1?"byte":"bytes"}`}),Ie=e=>({code:Tr,message:`File is smaller than ${e} ${e===1?"byte":"bytes"}`}),Mr={code:kr,message:"Too many files"};function Ke(e,r){const t=e.type==="application/x-moz-file"||wr(e,r);return[t,t?null:Ir(r)]}function He(e,r,t){if(P(e.size))if(P(r)&&P(t)){if(e.size>t)return[!1,ke(t)];if(e.size<r)return[!1,Ie(r)]}else{if(P(r)&&e.size<r)return[!1,Ie(r)];if(P(t)&&e.size>t)return[!1,ke(t)]}return[!0,null]}function P(e){return e!=null}function Sr({files:e,accept:r,minSize:t,maxSize:n,multiple:a,maxFiles:u,validator:l}){return!a&&e.length>1||a&&u>=1&&e.length>u?!1:e.every(i=>{const[d]=Ke(i,r),[v]=He(i,t,n),T=l?l(i):null;return d&&v&&!T})}function G(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function Y(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,r=>r==="Files"||r==="application/x-moz-file"):!!e.target&&!!e.target.files}function Me(e){e.preventDefault()}function Lr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function zr(e){return e.indexOf("Edge/")!==-1}function $r(e=window.navigator.userAgent){return Lr(e)||zr(e)}function x(...e){return(r,...t)=>e.some(n=>(!G(r)&&n&&n(r,...t),G(r)))}function Nr(){return"showOpenFilePicker"in window}function Br(e){return P(e)?[{description:"Files",accept:Object.entries(e).filter(([t,n])=>{let a=!0;return Ue(t)||(console.warn(`Skipped "${t}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),a=!1),(!Array.isArray(n)||!n.every(Ye))&&(console.warn(`Skipped "${t}" because an invalid file extension was provided.`),a=!1),a}).reduce((t,[n,a])=>jr(Ar({},t),{[n]:a}),{})}]:e}function Wr(e){if(P(e))return Object.entries(e).reduce((r,[t,n])=>[...r,t,...n],[]).filter(r=>Ue(r)||Ye(r)).join(",")}function Kr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Hr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function Ue(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Ye(e){return/^.*\.[\w]+$/.test(e)}var Ur=Object.defineProperty,Yr=Object.defineProperties,qr=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,Se=(e,r,t)=>r in e?Ur(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))qe.call(r,t)&&Se(e,t,r[t]);if(V)for(var t of V(r))Ge.call(r,t)&&Se(e,t,r[t]);return e},E=(e,r)=>Yr(e,qr(r)),Z=(e,r)=>{var t={};for(var n in e)qe.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&V)for(var n of V(e))r.indexOf(n)<0&&Ge.call(e,n)&&(t[n]=e[n]);return t};const fe=c.forwardRef((e,r)=>{var t=e,{children:n}=t,a=Z(t,["children"]);const u=Ze(a),{open:l}=u,i=Z(u,["open"]);return c.useImperativeHandle(r,()=>({open:l}),[l]),or.createElement(c.Fragment,null,n(E(y({},i),{open:l})))});fe.displayName="Dropzone";const Ve={disabled:!1,getFilesFromEvent:dr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};fe.defaultProps=Ve;fe.propTypes={children:p.func,accept:p.objectOf(p.arrayOf(p.string)),multiple:p.bool,preventDropOnDocument:p.bool,noClick:p.bool,noKeyboard:p.bool,noDrag:p.bool,noDragEventsBubbling:p.bool,minSize:p.number,maxSize:p.number,maxFiles:p.number,disabled:p.bool,getFilesFromEvent:p.func,onFileDialogCancel:p.func,onFileDialogOpen:p.func,useFsAccessApi:p.bool,autoFocus:p.bool,onDragEnter:p.func,onDragLeave:p.func,onDragOver:p.func,onDrop:p.func,onDropAccepted:p.func,onDropRejected:p.func,onError:p.func,validator:p.func};const ue={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Ze(e={}){const{accept:r,disabled:t,getFilesFromEvent:n,maxSize:a,minSize:u,multiple:l,maxFiles:i,onDragEnter:d,onDragLeave:v,onDragOver:T,onDrop:J,onDropAccepted:Q,onDropRejected:X,onFileDialogCancel:ee,onFileDialogOpen:re,useFsAccessApi:de,autoFocus:me,preventDropOnDocument:te,noClick:ge,noKeyboard:oe,noDrag:ye,noDragEventsBubbling:_,onError:ne,validator:k}=y(y({},Ve),e),I=c.useMemo(()=>Wr(r),[r]),be=c.useMemo(()=>Br(r),[r]),ie=c.useMemo(()=>typeof re=="function"?re:Le,[re]),N=c.useMemo(()=>typeof ee=="function"?ee:Le,[ee]),g=c.useRef(null),D=c.useRef(null),[he,b]=c.useReducer(Gr,ue),{isFocused:Je,isFileDialogActive:ve}=he,B=c.useRef(typeof window<"u"&&window.isSecureContext&&de&&Nr()),De=()=>{!B.current&&ve&&setTimeout(()=>{if(D.current){const{files:o}=D.current;o.length||(b({type:"closeDialog"}),N())}},300)};c.useEffect(()=>(window.addEventListener("focus",De,!1),()=>{window.removeEventListener("focus",De,!1)}),[D,ve,N,B]);const A=c.useRef([]),xe=o=>{g.current&&g.current.contains(o.target)||(o.preventDefault(),A.current=[])};c.useEffect(()=>(te&&(document.addEventListener("dragover",Me,!1),document.addEventListener("drop",xe,!1)),()=>{te&&(document.removeEventListener("dragover",Me),document.removeEventListener("drop",xe))}),[g,te]),c.useEffect(()=>(!t&&me&&g.current&&g.current.focus(),()=>{}),[g,me,t]);const F=c.useCallback(o=>{ne?ne(o):console.error(o)},[ne]),we=c.useCallback(o=>{o.preventDefault(),o.persist(),U(o),A.current=[...A.current,o.target],Y(o)&&Promise.resolve(n(o)).then(s=>{if(G(o)&&!_)return;const f=s.length,m=f>0&&Sr({files:s,accept:I,minSize:u,maxSize:a,multiple:l,maxFiles:i,validator:k}),h=f>0&&!m;b({isDragAccept:m,isDragReject:h,isDragActive:!0,type:"setDraggedFiles"}),d&&d(o)}).catch(s=>F(s))},[n,d,F,_,I,u,a,l,i,k]),Ee=c.useCallback(o=>{o.preventDefault(),o.persist(),U(o);const s=Y(o);if(s&&o.dataTransfer)try{o.dataTransfer.dropEffect="copy"}catch{}return s&&T&&T(o),!1},[T,_]),_e=c.useCallback(o=>{o.preventDefault(),o.persist(),U(o);const s=A.current.filter(m=>g.current&&g.current.contains(m)),f=s.indexOf(o.target);f!==-1&&s.splice(f,1),A.current=s,!(s.length>0)&&(b({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Y(o)&&v&&v(o))},[g,v,_]),W=c.useCallback((o,s)=>{const f=[],m=[];o.forEach(h=>{const[M,S]=Ke(h,I),[ae,ce]=He(h,u,a),L=k?k(h):null;if(M&&ae&&!L)f.push(h);else{let z=[S,ce];L&&(z=z.concat(L)),m.push({file:h,errors:z.filter(le=>le)})}}),(!l&&f.length>1||l&&i>=1&&f.length>i)&&(f.forEach(h=>{m.push({file:h,errors:[Mr]})}),f.splice(0)),b({acceptedFiles:f,fileRejections:m,type:"setFiles"}),J&&J(f,m,s),m.length>0&&X&&X(m,s),f.length>0&&Q&&Q(f,s)},[b,l,I,u,a,i,J,Q,X,k]),K=c.useCallback(o=>{o.preventDefault(),o.persist(),U(o),A.current=[],Y(o)&&Promise.resolve(n(o)).then(s=>{G(o)&&!_||W(s,o)}).catch(s=>F(s)),b({type:"reset"})},[n,W,F,_]),j=c.useCallback(()=>{if(B.current){b({type:"openDialog"}),ie();const o={multiple:l,types:be};window.showOpenFilePicker(o).then(s=>n(s)).then(s=>{W(s,null),b({type:"closeDialog"})}).catch(s=>{Kr(s)?(N(s),b({type:"closeDialog"})):Hr(s)?(B.current=!1,D.current?(D.current.value=null,D.current.click()):F(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):F(s)});return}D.current&&(b({type:"openDialog"}),ie(),D.current.value=null,D.current.click())},[b,ie,N,de,W,F,be,l]),Fe=c.useCallback(o=>{!g.current||!g.current.isEqualNode(o.target)||(o.key===" "||o.key==="Enter"||o.keyCode===32||o.keyCode===13)&&(o.preventDefault(),j())},[g,j]),Oe=c.useCallback(()=>{b({type:"focus"})},[]),Pe=c.useCallback(()=>{b({type:"blur"})},[]),Ae=c.useCallback(()=>{ge||($r()?setTimeout(j,0):j())},[ge,j]),C=o=>t?null:o,se=o=>oe?null:C(o),H=o=>ye?null:C(o),U=o=>{_&&o.stopPropagation()},Qe=c.useMemo(()=>(o={})=>{var s=o,{refKey:f="ref",role:m,onKeyDown:h,onFocus:M,onBlur:S,onClick:ae,onDragEnter:ce,onDragOver:L,onDragLeave:z,onDrop:le}=s,rr=Z(s,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return y(y({onKeyDown:se(x(h,Fe)),onFocus:se(x(M,Oe)),onBlur:se(x(S,Pe)),onClick:C(x(ae,Ae)),onDragEnter:H(x(ce,we)),onDragOver:H(x(L,Ee)),onDragLeave:H(x(z,_e)),onDrop:H(x(le,K)),role:typeof m=="string"&&m!==""?m:"presentation",[f]:g},!t&&!oe?{tabIndex:0}:{}),rr)},[g,Fe,Oe,Pe,Ae,we,Ee,_e,K,oe,ye,t]),Xe=c.useCallback(o=>{o.stopPropagation()},[]),er=c.useMemo(()=>(o={})=>{var s=o,{refKey:f="ref",onChange:m,onClick:h}=s,M=Z(s,["refKey","onChange","onClick"]);const S={accept:I,multiple:l,type:"file",style:{display:"none"},onChange:C(x(m,K)),onClick:C(x(h,Xe)),tabIndex:-1,[f]:D};return y(y({},S),M)},[D,r,l,K,t]);return E(y({},he),{isFocused:Je&&!t,getRootProps:Qe,getInputProps:er,rootRef:g,inputRef:D,open:C(j)})}function Gr(e,r){switch(r.type){case"focus":return E(y({},e),{isFocused:!0});case"blur":return E(y({},e),{isFocused:!1});case"openDialog":return E(y({},ue),{isFileDialogActive:!0});case"closeDialog":return E(y({},e),{isFileDialogActive:!1});case"setDraggedFiles":return E(y({},e),{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return E(y({},e),{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return y({},ue);default:return e}}function Le(){}function Vr({title:e,titleId:r,...t},n){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},t),e?c.createElement("title",{id:r},e):null,c.createElement("path",{fillRule:"evenodd",d:"M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z",clipRule:"evenodd"}))}const Zr=c.forwardRef(Vr),O={invalid_file_type:"Archivo no permitido",too_many_files:"Solo es posible subir 20 archivos a la vez",file_too_large:"Max size = 100MB",file_not_found:"No file found",upload_failed:"Upload failed"},Jr=["jpg","jpeg","png"];function tt(){const{addImg:e,err:r}=nr(i=>i),t=i=>{if(i===void 0||i.name===void 0)return{code:"no-file-found",message:O.file_not_found};const d=i.name.split(".").pop()||"";return Jr.includes(d)?i.size>1024*1024*100?(console.log("file too large"),{code:"file-too-large",message:O.file_too_large}):null:{code:"type-incorrect",message:O.invalid_file_type}},{getRootProps:n,getInputProps:a,fileRejections:u}=Ze({onDropAccepted:i=>{i.forEach(d=>{e(d)})},validator:t,maxFiles:20}),l=c.useMemo(()=>{if(u[0]){const{errors:i}=u[0];return i[0].code==="file-too-large"?O.file_too_large:i[0].code==="type-incorrect"?O.invalid_file_type:i[0].code==="too-many-files"?O.too_many_files:O.upload_failed}},[u]);return w.jsx("div",{className:"flex flex-col items-center justify-center w-full px-4 sm:px-36 lg:px-36 md:px-20",children:w.jsx("div",{className:"bg-gradient-to-r to-emerald-600 from-sky-400 p-3 rounded-lg w-full",children:w.jsxs("div",{...n(),className:"flex flex-col items-center justify-center pt-5 pb-6 w-full px-4 h-28 border-2 border-white border-dashed rounded-lg cursor-pointer bg-gray-300 bg-opacity-25 border-opacity-25 text-opacity-100 hover:bg-opacity-25 hover:bg-bray-800 hover:bg-gray-600 hover:border-white",children:[w.jsx(Zr,{className:`h-8 w-8 ${r?"text-red-600":"text-white"}`}),l?w.jsx("p",{className:"text-red-500",children:l}):w.jsxs("p",{className:`text-sm ${r?"text-red-600":"text-white"} text-center`,children:[w.jsx("span",{className:"font-semibold text-sm mt-2",children:"Click para seleccionar un archivo"})," ","o arrastralo aquí"]}),w.jsx("input",{...a()})]})})})}export{tt as UploadZone};