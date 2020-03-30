!function(e){var t=this.webpackHotUpdate;this.webpackHotUpdate=function webpackHotUpdateCallback(e,r){!function hotAddUpdateChunk(e,t){if(!y[e]||!w[e])return;for(var r in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(l[r]=t[r]);0==--f&&0===h&&hotUpdateDownloaded()}(e,r),t&&t(e,r)};var r,n=!0,o="6c002b5ac4b7ec511b3f",a={},i=[],d=[];function hotCreateRequire(e){var t=b[e];if(!t)return __webpack_require__;var n=function(n){return t.hot.active?(b[n]?b[n].parents.indexOf(e)<0&&b[n].parents.push(e):(i=[e],r=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),i=[]),__webpack_require__(n)},o=function ObjectFactory(e){return{configurable:!0,enumerable:!0,get:function(){return __webpack_require__[e]},set:function(t){__webpack_require__[e]=t}}};for(var a in __webpack_require__)Object.prototype.hasOwnProperty.call(__webpack_require__,a)&&"e"!==a&&Object.defineProperty(n,a,o(a));return n.e=function(e){return"ready"===p&&hotSetStatus("prepare"),h++,__webpack_require__.e(e).then(finishChunkLoading,function(e){throw finishChunkLoading(),e});function finishChunkLoading(){h--,"prepare"===p&&(_[e]||hotEnsureUpdateChunk(e),0===h&&0===f&&hotUpdateDownloaded())}},n}var c=[],p="idle";function hotSetStatus(e){p=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var u,l,s,f=0,h=0,_={},w={},y={};function toModuleId(e){return+e+""===e?+e:e}function hotCheck(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return n=e,hotSetStatus("check"),function hotDownloadManifest(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,n=__webpack_require__.p+""+o+".hot-update.json";r.open("GET",n,!0),r.timeout=1e4,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+n+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+n+" failed."));else{try{var o=JSON.parse(r.responseText)}catch(e){return void t(e)}e(o)}}})}().then(function(e){if(!e)return hotSetStatus("idle"),null;w={},_={},y=e.c,s=e.h,hotSetStatus("prepare");var t=new Promise(function(e,t){u={resolve:e,reject:t}});l={};return hotEnsureUpdateChunk(0),"prepare"===p&&0===h&&0===f&&hotUpdateDownloaded(),t})}function hotEnsureUpdateChunk(e){y[e]?(w[e]=!0,f++,function hotDownloadUpdateChunk(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=__webpack_require__.p+""+e+"."+o+".hot-update.js",t.appendChild(r)}(e)):_[e]=!0}function hotUpdateDownloaded(){hotSetStatus("ready");var e=u;if(u=null,e)if(n)hotApply(n).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&t.push(toModuleId(r));e.resolve(t)}}function hotApply(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,n,d,c,u;function getAffectedStuff(e){for(var t=[e],r={},n=t.slice().map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),a=o.id,i=o.chain;if((c=b[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var d=0;d<c.parents.length;d++){var p=c.parents[d],u=b[p];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([p]),moduleId:a,parentId:p};t.indexOf(p)>=0||(u.hot._acceptedDependencies[a]?(r[p]||(r[p]=[]),addAllToSet(r[p],[a])):(delete r[p],t.push(p),n.push({chain:i.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function addAllToSet(e,t){for(var r=0;r<t.length;r++){var n=t[r];e.indexOf(n)<0&&e.push(n)}}t=t||{};var f={},h=[],_={},w=function warnUnexpectedRequire(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var m in l)if(Object.prototype.hasOwnProperty.call(l,m)){var E;u=toModuleId(m);var v=!1,k=!1,g=!1,S="";switch((E=l[m]?getAffectedStuff(u):{type:"disposed",moduleId:m}).chain&&(S="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(v=new Error("Aborted because of self decline: "+E.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(v=new Error("Aborted because "+u+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(E),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),g=!0;break;default:throw new Error("Unexception type "+E.type)}if(v)return hotSetStatus("abort"),Promise.reject(v);if(k)for(u in _[u]=l[u],addAllToSet(h,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,u)&&(f[u]||(f[u]=[]),addAllToSet(f[u],E.outdatedDependencies[u]));g&&(addAllToSet(h,[E.moduleId]),_[u]=w)}var D,H=[];for(n=0;n<h.length;n++)u=h[n],b[u]&&b[u].hot._selfAccepted&&H.push({module:u,errorHandler:b[u].hot._selfAccepted});hotSetStatus("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function hotDisposeChunk(e){delete installedChunks[e]}(e)});for(var q,O,C=h.slice();C.length>0;)if(u=C.pop(),c=b[u]){var x={},R=c.hot._disposeHandlers;for(d=0;d<R.length;d++)(r=R[d])(x);for(a[u]=x,c.hot.active=!1,delete b[u],d=0;d<c.children.length;d++){var A=b[c.children[d]];A&&((D=A.parents.indexOf(u))>=0&&A.parents.splice(D,1))}}for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)&&(c=b[u]))for(O=f[u],d=0;d<O.length;d++)q=O[d],(D=c.children.indexOf(q))>=0&&c.children.splice(D,1);for(u in hotSetStatus("apply"),o=s,_)Object.prototype.hasOwnProperty.call(_,u)&&(e[u]=_[u]);var T=null;for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)){c=b[u],O=f[u];var j=[];for(n=0;n<O.length;n++)q=O[n],r=c.hot._acceptedDependencies[q],j.indexOf(r)>=0||j.push(r);for(n=0;n<j.length;n++){r=j[n];try{r(O)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:O[n],error:e}),t.ignoreErrored||T||(T=e)}}}for(n=0;n<H.length;n++){var M=H[n];u=M.module,i=[u];try{__webpack_require__(u)}catch(e){if("function"==typeof M.errorHandler)try{M.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:r,orginalError:e}),t.ignoreErrored||T||(T=r),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||T||(T=e)}}return T?(hotSetStatus("fail"),Promise.reject(T)):(hotSetStatus("idle"),new Promise(function(e){e(h)}))}var b={};function __webpack_require__(t){if(b[t])return b[t].exports;var n=b[t]={i:t,l:!1,exports:{},hot:function hotCreateModule(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:hotCheck,apply:hotApply,status:function(e){if(!e)return p;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:a[e]};return r=void 0,t}(t),parents:(d=i,i=[],d),children:[]};return e[t].call(n.exports,n,n.exports,hotCreateRequire(t)),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=b,__webpack_require__.i=function(e){return e},__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="./",__webpack_require__.h=function(){return o},hotCreateRequire(0)(__webpack_require__.s=0)}([function(e,t,r){"use strict";var n,o,a,i,d,c,p,u,l;!function initialize(){n=new THREE.Scene;var e=new THREE.AmbientLight(13421772,.5);function onResize(){c.onResize(),c.copySizeTo(a.domElement),null!==p.arController&&c.copySizeTo(p.arController.canvas)}n.add(e),o=new THREE.Camera,n.add(o),(a=new THREE.WebGLRenderer({antialias:!0,alpha:!0})).setClearColor(new THREE.Color("lightgrey"),0),a.setSize(640,480),a.domElement.style.position="absolute",a.domElement.style.top="0px",a.domElement.style.left="0px",document.body.appendChild(a.domElement),i=new THREE.Clock,d=0,0,(c=new THREEx.ArToolkitSource({sourceType:"webcam"})).init(function onReady(){onResize()}),window.addEventListener("resize",function(){onResize()}),(p=new THREEx.ArToolkitContext({cameraParametersUrl:"data/camera_para.dat",detectionMode:"mono"})).init(function onCompleted(){o.projectionMatrix.copy(p.getProjectionMatrix())}),u=new THREE.Group,n.add(u);new THREEx.ArMarkerControls(p,u,{type:"pattern",patternUrl:"data/hiro.patt"});var t=new THREE.CubeGeometry(1,1,1),r=new THREE.MeshNormalMaterial({transparent:!0,opacity:.5,side:THREE.DoubleSide});(l=new THREE.Mesh(t,r)).position.y=.5,u.add(l)}(),function animate(){requestAnimationFrame(animate);d=i.getDelta();d;!function update(){!1!==c.ready&&p.update(c.domElement)}();!function render(){a.render(n,o)}()}()}]);