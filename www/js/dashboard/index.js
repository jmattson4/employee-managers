var N="Dev",F="http://localhost:5000/api",x="";var k={};N==="Dev"&&(k={getAllDepartments:`${F}/departments/`,updateEmployee:`${F}/departments/employee/update`,getDepartment:n=>`${F}/departments/name/${n}`,deleteEmployee:n=>`${F}/departments/employee/id/${n}`});N==="Prod"&&(k={getAllDepartments:`${x}/departments/`,updateEmployee:`${x}/departments/employee/update`,getDepartment:n=>`${x}/departments/name/${n}`,deleteEmployee:n=>`${x}/departments/employee/id/${n}`});var L=k;var Ae=async n=>await(await fetch(n)).json(),Oe=async n=>await(await fetch(n,{method:"DELETE",redirect:"follow"})).json(),Re=async(n,r)=>{let i=new Headers;i.append("Content-Type","application/json");let o=JSON.stringify(r),m=await(await fetch(n,{method:"PUT",headers:i,body:o,redirect:"follow"})).text()},Fe={getRequest:Ae,deleteRequest:Oe,putRequest:Re},S=Fe;var xe=function(){let n=null;function r(){let i=document.createElement("img");document.body.appendChild(i);let o=async m=>{let u=await S.deleteRequest(L.deleteEmployee(m.detail.id));console.log(u),i.dispatchEvent(new CustomEvent("removeItem",{bubbles:!0,detail:u}))},c=async m=>{let u=await S.putRequest(L.updateEmployee,m.detail.payload)},h=async m=>{let u=await S.getRequest(L.getDepartment(m.detail.name));i.dispatchEvent(new CustomEvent("updateDisplay",{bubbles:!0,detail:u}))};return i.addEventListener("deleteEmployee",o),i.addEventListener("editEmployee",c),i.addEventListener("sideBarSelect",h),{handle:i}}return{getInstance:function(){return n||(n=r()),n}}}(),C=xe;var Y=`
    <ul class="departments"></ul>
`,ee=`
   <li class="department" data-name="<%-data.name%> "><%-data.name%></li>
`;function Ie(n){return document.createRange().createContextualFragment(n).firstElementChild}var T=Ie;var Pe=function(){return T(Y)},te=Pe;function ne(n,r,i){return i={path:r,exports:{},require:function(o,c){return Me(o,c??i.path)}},n(i,i.exports),i.exports}function Me(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var B={};function re(n,r){for(var i=0,o=n.length-1;o>=0;o--){var c=n[o];c==="."?n.splice(o,1):c===".."?(n.splice(o,1),i++):i&&(n.splice(o,1),i--)}if(r)for(;i--;i)n.unshift("..");return n}var qe=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,$=function(n){return qe.exec(n).slice(1)};function M(){for(var n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:"/";if(typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)continue;n=o+"/"+n,r=o.charAt(0)==="/"}return n=re(U(n.split("/"),function(c){return!!c}),!r).join("/"),(r?"/":"")+n||"."}function V(n){var r=H(n),i=Ne(n,-1)==="/";return n=re(U(n.split("/"),function(o){return!!o}),!r).join("/"),!n&&!r&&(n="."),n&&i&&(n+="/"),(r?"/":"")+n}function H(n){return n.charAt(0)==="/"}function ae(){var n=Array.prototype.slice.call(arguments,0);return V(U(n,function(r,i){if(typeof r!="string")throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))}function se(n,r){n=M(n).substr(1),r=M(r).substr(1);function i(g){for(var _=0;_<g.length&&g[_]==="";_++);for(var w=g.length-1;w>=0&&g[w]==="";w--);return _>w?[]:g.slice(_,w-_+1)}for(var o=i(n.split("/")),c=i(r.split("/")),h=Math.min(o.length,c.length),m=h,u=0;u<h;u++)if(o[u]!==c[u]){m=u;break}for(var p=[],u=m;u<o.length;u++)p.push("..");return p=p.concat(c.slice(m)),p.join("/")}var ie="/",oe=":";function le(n){var r=$(n),i=r[0],o=r[1];return!i&&!o?".":(o&&(o=o.substr(0,o.length-1)),i+o)}function ce(n,r){var i=$(n)[2];return r&&i.substr(-1*r.length)===r&&(i=i.substr(0,i.length-r.length)),i}function ue(n){return $(n)[3]}var ke={extname:ue,basename:ce,dirname:le,sep:ie,delimiter:oe,relative:se,join:ae,isAbsolute:H,normalize:V,resolve:M};function U(n,r){if(n.filter)return n.filter(r);for(var i=[],o=0;o<n.length;o++)r(n[o],o,n)&&i.push(n[o]);return i}var Ne="ab".substr(-1)==="b"?function(n,r,i){return n.substr(r,i)}:function(n,r,i){return r<0&&(r=n.length+r),n.substr(r,i)},Be=Object.freeze({__proto__:null,resolve:M,normalize:V,isAbsolute:H,join:ae,relative:se,sep:ie,delimiter:oe,dirname:le,basename:ce,extname:ue,default:ke}),E=ne(function(n,r){var i=/[|\\{}()[\]^$+*?.]/g;r.escapeRegExpChars=function(u){return u?String(u).replace(i,"\\$&"):""};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},c=/[&<>'"]/g;function h(u){return o[u]||u}var m=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;r.escapeXML=function(u){return u==null?"":String(u).replace(c,h)},r.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+m},r.shallowCopy=function(u,p){p=p||{};for(var g in p)u[g]=p[g];return u},r.shallowCopyFromList=function(u,p,g){for(var _=0;_<g.length;_++){var w=g[_];typeof p[w]!="undefined"&&(u[w]=p[w])}return u},r.cache={_data:{},set:function(u,p){this._data[u]=p},get:function(u){return this._data[u]},remove:function(u){delete this._data[u]},reset:function(){this._data={}}},r.hyphenToCamel=function(u){return u.replace(/-[a-z]/g,function(p){return p[1].toUpperCase()})}}),$e=[["ejs@3.1.6","C:\\Users\\Jace\\Documents\\GithubRepos\\frontend-assignment03"]],Ue="ejs@3.1.6",He="ejs@3.1.6",Ve=!1,We="sha512-9lt9Zse4hPucPkoP7FHDF0LQAlGyF9JVpnClFLFH3aSSbxmyoqINRpp/9wePWJTUl4KOQwRL72Iw3InHPDkoGw==",Je="/ejs",ze={},Ge={type:"version",registry:!0,raw:"ejs@3.1.6",name:"ejs",escapedName:"ejs",rawSpec:"3.1.6",saveSpec:null,fetchSpec:"3.1.6"},Xe=["/"],Ze="https://registry.npmjs.org/ejs/-/ejs-3.1.6.tgz",Qe="3.1.6",Ke="C:\\Users\\Jace\\Documents\\GithubRepos\\frontend-assignment03",Ye={name:"Matthew Eernisse",email:"mde@fleegix.org",url:"http://fleegix.org"},et={ejs:"bin/cli.js"},tt={url:"https://github.com/mde/ejs/issues"},nt={jake:"^10.6.1"},rt="Embedded JavaScript templates",at={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^3.6.4","lru-cache":"^4.0.1",mocha:"^7.1.1","uglify-js":"^3.3.16"},st={node:">=0.10.0"},it="https://github.com/mde/ejs",ot="ejs.min.js",lt=["template","engine","ejs"],ct="Apache-2.0",ut="./lib/ejs.js",mt="ejs",dt={type:"git",url:"git://github.com/mde/ejs.git"},pt={test:"mocha"},ft="ejs.min.js",ht="3.1.6",vt={_args:$e,_from:Ue,_id:He,_inBundle:Ve,_integrity:We,_location:Je,_phantomChildren:ze,_requested:Ge,_requiredBy:Xe,_resolved:Ze,_spec:Qe,_where:Ke,author:Ye,bin:et,bugs:tt,dependencies:nt,description:rt,devDependencies:at,engines:st,homepage:it,jsdelivr:ot,keywords:lt,license:ct,main:ut,name:mt,repository:dt,scripts:pt,unpkg:ft,version:ht},gt=ne(function(n,r){var i=Be,o=!1,c=vt.version,h="<",m=">",u="%",p="locals",g="ejs",_="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",w=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],be=w.concat("cache"),J=/^\uFEFF/;r.cache=E.cache,r.fileLoader=B.readFileSync,r.localsName=p,r.promiseImpl=new Function("return this;")().Promise,r.resolveInclude=function(t,a,e){var s=i.dirname,l=i.extname,d=i.resolve,v=d(e?a:s(a),t),j=l(t);return j||(v+=".ejs"),v};function z(t,a){var e;if(a.some(function(s){return e=r.resolveInclude(t,s,!0),B.existsSync(e)}))return e}function Te(t,a){var e,s,l=a.views,d=/^[A-Za-z]+:\\|^\//.exec(t);if(d&&d.length)t=t.replace(/^\/*/,""),Array.isArray(a.root)?e=z(t,a.root):e=r.resolveInclude(t,a.root||"/",!0);else if(a.filename&&(s=r.resolveInclude(t,a.filename),B.existsSync(s)&&(e=s)),!e&&Array.isArray(l)&&(e=z(t,l)),!e&&typeof a.includer!="function")throw new Error('Could not find the include file "'+a.escapeFunction(t)+'"');return e}function O(t,a){var e,s=t.filename,l=arguments.length>1;if(t.cache){if(!s)throw new Error("cache option requires a filename");if(e=r.cache.get(s),e)return e;l||(a=G(s).toString().replace(J,""))}else if(!l){if(!s)throw new Error("Internal EJS error: no file name or template provided");a=G(s).toString().replace(J,"")}return e=r.compile(a,t),t.cache&&r.cache.set(s,e),e}function je(t,a,e){var s;if(e){try{s=O(t)(a)}catch(l){return e(l)}e(null,s)}else{if(typeof r.promiseImpl=="function")return new r.promiseImpl(function(l,d){try{s=O(t)(a),l(s)}catch(v){d(v)}});throw new Error("Please provide a callback function")}}function G(t){return r.fileLoader(t)}function Le(t,a){var e=E.shallowCopy({},a);if(e.filename=Te(t,e),typeof a.includer=="function"){var s=a.includer(t,e.filename);if(s&&(s.filename&&(e.filename=s.filename),s.template))return O(e,s.template)}return O(e)}function X(t,a,e,s,l){var d=a.split(`
`),v=Math.max(s-3,0),j=Math.min(d.length,s+3),b=l(e),D=d.slice(v,j).map(function(I,P){var R=P+v+1;return(R==s?" >> ":"    ")+R+"| "+I}).join(`
`);throw t.path=b,t.message=(b||"ejs")+":"+s+`
`+D+`

`+t.message,t}function Z(t){return t.replace(/;(\s*$)/,"$1")}r.compile=function(a,e){var s;return e&&e.scope&&(o||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),o=!0),e.context||(e.context=e.scope),delete e.scope),s=new f(a,e),s.compile()},r.render=function(t,a,e){var s=a||{},l=e||{};return arguments.length==2&&E.shallowCopyFromList(l,s,w),O(l,t)(s)},r.renderFile=function(){var t=Array.prototype.slice.call(arguments),a=t.shift(),e,s={filename:a},l,d;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(l=t.shift(),t.length?E.shallowCopy(s,t.pop()):(l.settings&&(l.settings.views&&(s.views=l.settings.views),l.settings["view cache"]&&(s.cache=!0),d=l.settings["view options"],d&&E.shallowCopy(s,d)),E.shallowCopyFromList(s,l,be)),s.filename=a):l={},je(s,l,e)},r.Template=f,r.clearCache=function(){r.cache.reset()};function f(t,a){a=a||{};var e={};this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=a.client||!1,e.escapeFunction=a.escape||a.escapeFunction||E.escapeXML,e.compileDebug=a.compileDebug!==!1,e.debug=!!a.debug,e.filename=a.filename,e.openDelimiter=a.openDelimiter||r.openDelimiter||h,e.closeDelimiter=a.closeDelimiter||r.closeDelimiter||m,e.delimiter=a.delimiter||r.delimiter||u,e.strict=a.strict||!1,e.context=a.context,e.cache=a.cache||!1,e.rmWhitespace=a.rmWhitespace,e.root=a.root,e.includer=a.includer,e.outputFunctionName=a.outputFunctionName,e.localsName=a.localsName||r.localsName||p,e.views=a.views,e.async=a.async,e.destructuredLocals=a.destructuredLocals,e.legacyInclude=typeof a.legacyInclude!="undefined"?!!a.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof a._with!="undefined"?a._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=_,a=E.escapeRegExpChars(this.opts.delimiter),e=E.escapeRegExpChars(this.opts.openDelimiter),s=E.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,a).replace(/</g,e).replace(/>/g,s),new RegExp(t)},compile:function(){var t,a,e=this.opts,s="",l="",d=e.escapeFunction,v,j=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),s+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName&&(s+="  var "+e.outputFunctionName+` = __append;
`),e.destructuredLocals&&e.destructuredLocals.length){for(var b="  var __locals = ("+e.localsName+` || {}),
`,D=0;D<e.destructuredLocals.length;D++){var I=e.destructuredLocals[D];D>0&&(b+=`,
  `),b+=I+" = __locals."+I}s+=b+`;
`}e._with!==!1&&(s+="  with ("+e.localsName+` || {}) {
`,l+=`  }
`),l+=`  return __output;
`,this.source=s+this.source+l}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+j+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+d.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+X.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+j+`
`);try{if(e.async)try{v=new Function("return (async function(){}).constructor;")()}catch(y){throw y instanceof SyntaxError?new Error("This environment does not support async/await"):y}else v=Function;a=new v(e.localsName+", escapeFn, include, rethrow",t)}catch(y){throw y instanceof SyntaxError&&(e.filename&&(y.message+=" in "+e.filename),y.message+=` while compiling ejs

`,y.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,y.message+="https://github.com/RyanZim/EJS-Lint",e.async||(y.message+=`
`,y.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),y}var P=e.client?a:function(Q){var De=function(Ce,K){var q=E.shallowCopy({},Q);return K&&(q=E.shallowCopy(q,K)),Le(Ce,e)(q)};return a.apply(e.context,[Q||{},d,De,X])};if(e.filename&&typeof Object.defineProperty=="function"){var R=e.filename,Se=i.basename(R,i.extname(R));try{Object.defineProperty(P,"name",{value:Se,writable:!1,enumerable:!1,configurable:!0})}catch(y){}}return P},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var a=this,e=this.parseTemplateText(),s=this.opts.delimiter,l=this.opts.openDelimiter,d=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(v,j){var b;if(v.indexOf(l+s)===0&&v.indexOf(l+s+s)!==0&&(b=e[j+2],!(b==s+d||b=="-"+s+d||b=="_"+s+d)))throw new Error('Could not find matching close tag for "'+v+'".');a.scanLine(v)})},parseTemplateText:function(){for(var t=this.templateText,a=this.regex,e=a.exec(t),s=[],l;e;)l=e.index,l!==0&&(s.push(t.substring(0,l)),t=t.slice(l)),s.push(e[0]),t=t.slice(e[0].length),e=a.exec(t);return t&&s.push(t),s},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var a=this,e=this.opts.delimiter,s=this.opts.openDelimiter,l=this.opts.closeDelimiter,d=0;switch(d=t.split(`
`).length-1,t){case s+e:case s+e+"_":this.mode=f.modes.EVAL;break;case s+e+"=":this.mode=f.modes.ESCAPED;break;case s+e+"-":this.mode=f.modes.RAW;break;case s+e+"#":this.mode=f.modes.COMMENT;break;case s+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(s+e+e,s+e)+`")
`;break;case e+e+l:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+l,e+l)+`")
`;break;case e+l:case"-"+e+l:case"_"+e+l:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+Z(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+Z(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}a.opts.compileDebug&&d&&(this.currentLine+=d,this.source+="    ; __line = "+this.currentLine+`
`)}},r.escapeXML=E.escapeXML,r.__express=r.renderFile,r.VERSION=c,r.name=g,typeof window!="undefined"&&(window.ejs=r)}),me=gt;function yt(n,r){return me.render(n,{data:r})}var A=yt;var Et=C.getInstance(),de=new CustomEvent("sideBarSelect",{bubbles:!0,detail:{name:null}}),wt=function(n){let r=A(ee,n),i=T(r);return i.addEventListener("click",_t),i},_t=n=>{de.detail.name=n.currentTarget.dataset.name,Et.handle.dispatchEvent(de)},pe=wt;var bt=document.querySelector("#sidebar"),Tt=function(){return{init:function(r){let i=te();r.forEach(o=>{let c=pe(o);i.append(c)}),bt.append(i)}}},fe=Tt;var jt=`
<aside class="manager" data-id="<%-data.id%> ">
<img src="<%-data.avatar%>" alt="" />
<ul>
  <li class="fullname"><%-data.firstname%> <%-data.lastname%></li>
  <li class="email">email: <%-data.email%></li>
  <li class="cell-number">cell:<%-data.cellNumber%></li>
</ul>
</aside>  
`,Lt=`
<aside class="managers">
<header><h2>manager</h2></header>
</aside>  
`,St={parentTemplate:Lt,childTemplate:jt},W=St;var Dt=n=>{let r=document.querySelector("#managers"),i=n.filter(c=>c.role),o=T(W.parentTemplate);return i.forEach(c=>{let h=A(W.childTemplate,c),m=T(h);o.appendChild(m)}),o},he=Dt;var ve=`
<aside class="employees"></aside>
`,ge=`
 

<ul class="employee" data-id="<%-data.id%>">
<li>
  <img src="<%-data.avatar%>" width="90px" alt="" />
</li>

<li class="fullname">
    <label> firstname </label>
  <input id="firstname" type="text" value="<%-data.firstname%>" >
 
</li>

 
<li class="lastname"> 
<label> lastname </label>
<input id="lastname" type="text" value="<%-data.lastname%>">
</li>
 


<li>
<label> salary</label>
<input id="salary" type="text" value="<%-data.salary%>">
</li>
 


<li class="vacation"><label> vacation days</label>
  <input id="vacation" type="text" value="<%-data.vacation%>" >
</li>
 
<li class="controls" data-id="<%-data.id%>">
<img id="edit" class="icon" src="assets/svgs/edit.svg" width="24px" alt="">
  <img id="delete" class="icon" src="assets/svgs/delete.svg" width:="24px" alt="">
</li>

 
</ul>
 

`;var ye=C.getInstance(),Ct=function(n){let r=T(ve),i=n.filter(c=>!c.role),o=c=>{switch(c.target.id){case"delete":ye.handle.dispatchEvent(new CustomEvent("deleteEmployee",{bubbles:!0,detail:{id:c.currentTarget.dataset.id}})),r.removeChild(c.currentTarget.parentElement);break;case"edit":let h={id:c.currentTarget.dataset.id,firstname:c.currentTarget.parentElement.querySelector("#firstname").value.trim(),lastname:c.currentTarget.parentElement.querySelector("#lastname").value.trim(),salary:c.currentTarget.parentElement.querySelector("#salary").value.trim(),vacation:c.currentTarget.parentElement.querySelector("#vacation").value.trim()};ye.handle.dispatchEvent(new CustomEvent("editEmployee",{bubbles:!0,detail:{payload:h}}));break}};return i.forEach(c=>{let h=A(ge,c),m=T(h);m.querySelector(".controls").addEventListener("click",o),r.appendChild(m)}),r},Ee=Ct;var At=()=>{let n=document.querySelector("#panel"),r=document.querySelector("#widget-heading"),i=null,o=null,c=m=>{r.textContent=`${m[0].department} department`,i=n.appendChild(he(m)),o=n.appendChild(Ee(m))};return{updateDisplay:m=>{n.removeChild(i),n.removeChild(o),c(m)},view:n,init:c}},_e=At;var we=_e(),Ot=fe(),Rt=C.getInstance();Rt.handle.addEventListener("updateDisplay",n=>{we.updateDisplay(n.detail)});var Ft=async function(){let n=await S.getRequest(L.getAllDepartments),r=await S.getRequest(L.getDepartment("training"));console.log(n),Ot.init(n),we.init(r)};Ft();
/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */
