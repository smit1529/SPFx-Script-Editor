define("5fd16adf-1feb-445f-a35e-79b2976d998a_0.0.1",["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-loader","@microsoft/sp-webpart-base"],function(e,t,n,r,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp5fd16adf_1feb_445f_a35e_79b2976d998a_0_0_1;window.webpackJsonp5fd16adf_1feb_445f_a35e_79b2976d998a_0_0_1=function(t,r,a){for(var i,s,l=0,c=[];l<t.length;l++)s=t[l],o[s]&&c.push(o[s][0]),o[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(n&&n(t,r,a);c.length;)c.shift()()};var r={},o={1:0};return t.e=function(e){function n(){s.onerror=s.onload=null,clearTimeout(l);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var a=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=a;var i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+""+e+"."+({}[e]||e)+"_"+{0:"37093eac3513fa872852"}[e]+".js";var l=setTimeout(n,12e4);return s.onerror=s.onload=n,i.appendChild(s),a},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},function(){var e,n=document.getElementsByTagName("script"),r=new RegExp("script-editor-web-part_?[a-zA-Z0-9-_]*.js","i");if(n&&n.length)for(var o=0;o<n.length;o++)if(n[o]){var a=n[o].getAttribute("src");if(a&&a.match(r)){e=a.substring(0,a.lastIndexOf("/")+1);break}}if(!e)for(var i in window.__setWebpackPublicPathLoaderSrcRegistry__)if(i&&i.match(r)){e=i.substring(0,i.lastIndexOf("/")+1);break}t.p=e}(),t(t.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(1)),a=(n.n(o),n(3)),i=(n.n(a),n(4)),s=(n.n(i),n(5)),l=(n.n(s),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),c=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}l((r=r.apply(e,t||[])).next())})},p=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,a=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){l.label=n[1];break}if(6===n[0]&&l.label<i[1]){l.label=i[1],i=n;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(n);break}i[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,s,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.save=function(e){t.properties.script=e,t.render()},t}return l(t,e),t.prototype.render=function(){return c(this,void 0,void 0,function(){var e,t;return p(this,function(i){switch(i.label){case 0:return this.displayMode!=a.DisplayMode.Read?[3,1]:(this.properties.removePadding?(this.domElement.parentElement.parentElement.parentElement.style.paddingTop="0",this.domElement.parentElement.parentElement.parentElement.style.paddingBottom="0",this.domElement.parentElement.parentElement.parentElement.style.marginTop="0",this.domElement.parentElement.parentElement.parentElement.style.marginBottom="0"):(this.domElement.parentElement.parentElement.parentElement.style.paddingTop="",this.domElement.parentElement.parentElement.parentElement.style.paddingBottom="",this.domElement.parentElement.parentElement.parentElement.style.marginTop="",this.domElement.parentElement.parentElement.parentElement.style.marginBottom=""),this.domElement.innerHTML=this.properties.script,this.executeScript(this.domElement),[3,3]);case 1:return[4,n.e(0).then(n.bind(null,6))];case 2:e=i.sent(),t=r.createElement(e.default,{script:this.properties.script,title:this.properties.title,save:this.save}),o.render(t,this.domElement),i.label=3;case 3:return[2]}})})},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return a.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.evalScript=function(e){var t=e.text||e.textContent||e.innerHTML||"",n=document.getElementsByTagName("head")[0]||document.documentElement,r=document.createElement("script");if(r.type="text/javascript",!(e.src&&e.src.length>0)){e.onload&&e.onload.length>0&&(r.onload=e.onload);try{r.appendChild(document.createTextNode(t))}catch(e){r.text=t}n.insertBefore(r,n.firstChild),n.removeChild(r)}},t.prototype.nodeName=function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},t.prototype.executeScript=function(e){return c(this,void 0,void 0,function(){var t,n,r,o,a,s,r,l,c,r,u,r,l,r;return p(this,function(p){switch(p.label){case 0:for(this.properties.spPageContextInfo&&!window._spPageContextInfo&&(window._spPageContextInfo=this.context.pageContext.legacyPageContext),window.ScriptGlobal={},t=[],n=e.childNodes,r=0;n[r];r++)o=n[r],!this.nodeName(o,"script")||o.type&&"text/javascript"!==o.type.toLowerCase()||t.push(o);for(a=[],s=[],r=0;t[r];r++)l=t[r],l.src&&l.src.length>0&&a.push(l.src),l.onload&&l.onload.length>0&&s.push(l.onload);c=null,window.define&&window.define.amd&&(c=window.define.amd,window.define.amd=null),r=0,p.label=1;case 1:if(!(r<a.length))return[3,6];p.label=2;case 2:return p.trys.push([2,4,,5]),[4,i.SPComponentLoader.loadScript(a[r],{globalExportsName:"ScriptGlobal"})];case 3:return p.sent(),[3,5];case 4:return u=p.sent(),console.error(u),[3,5];case 5:return r++,[3,1];case 6:for(c&&(window.define.amd=c),r=0;t[r];r++)l=t[r],l.parentNode&&l.parentNode.removeChild(l),this.evalScript(t[r]);for(r=0;s[r];r++)s[r]();return[2]}})})},t}(s.BaseClientSideWebPart);t.default=u},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o}])});
!function(){window.__setWebpackPublicPathLoaderSrcRegistry__||(window.__setWebpackPublicPathLoaderSrcRegistry__={});var e=document.getElementsByTagName("script");if(e&&e.length)for(var t=0;t<e.length;t++)if(e[t]){var r=e[t].getAttribute("src");r&&(window.__setWebpackPublicPathLoaderSrcRegistry__[r]=!0)}}();