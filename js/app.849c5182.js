(function(e){function t(t){for(var r,l,i=t[0],a=t[1],s=t[2],p=0,u=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&u.push(o[l][0]),o[l]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(t);while(u.length)u.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"431c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["f"])("div",{class:"line"},null,-1),c={class:"app__container"};function l(e,t,n,l,i,a){var s=Object(r["l"])("FolderView");return Object(r["h"])(),Object(r["e"])(r["a"],null,[o,Object(r["f"])("section",c,[Object(r["g"])(s,{name:"$",folders:e.folders,files:e.files},null,8,["folders","files"])])],64)}n("b0c0");var i=n("bfb3"),a=n.n(i);Object(r["j"])("data-v-4e3bac42");var s={class:"folder__container"},f={class:"folder__name"},p={class:"folder__list"},u=["onClick"],d=Object(r["f"])("img",{src:a.a,alt:"icon folder"},null,-1),b={class:"folder__title"},g={class:"file__list"},j={key:0,class:"folder__open"};function m(e,t,n,o,c,l){var i=Object(r["l"])("FileView"),a=Object(r["l"])("FolderView",!0);return Object(r["h"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",s,[Object(r["f"])("p",f,Object(r["m"])(n.name),1),Object(r["f"])("div",p,[(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(n.folders,(function(e,t){return Object(r["h"])(),Object(r["e"])("div",{class:"folder",onClick:function(e){return l.openFolder(t)}},[d,Object(r["f"])("p",b,Object(r["m"])(e.name),1)],8,u)})),256))]),Object(r["f"])("div",g,[(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["k"])(n.files,(function(e){return Object(r["h"])(),Object(r["c"])(i,{name:e.name,type:e.type},null,8,["name","type"])})),256))])]),this.open?(Object(r["h"])(),Object(r["e"])("div",j,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return l.clickButton&&l.clickButton.apply(l,arguments)}),class:"folder__button"},"Вернуться к папке $"),Object(r["g"])(a,{name:n.folders[this.numberFolder].name,folders:n.folders[this.numberFolder].folders,files:n.folders[this.numberFolder].files},null,8,["name","folders","files"])])):Object(r["d"])("",!0)],64)}Object(r["i"])();n("159b"),n("ac1f"),n("1276");var O=n("96a9"),v=n.n(O),y=n("be5a"),h=n.n(y),_=n("cac2"),w=n.n(_),k=n("9277"),F=n.n(k);Object(r["j"])("data-v-6f066edc");var x={class:"file"},S={key:0,src:v.a,alt:"icon folder"},P={key:1,src:h.a,alt:"icon folder"},V={key:2,src:w.a,alt:"icon folder"},A={key:3,src:F.a,alt:"icon folder"},M={class:"file__title"};function B(e,t,n,o,c,l){return Object(r["h"])(),Object(r["e"])("div",x,["svg"==n.type.split("/")[1]?(Object(r["h"])(),Object(r["e"])("img",S)):"jpeg"==n.type.split("/")[1]?(Object(r["h"])(),Object(r["e"])("img",P)):"png"==n.type.split("/")[1]?(Object(r["h"])(),Object(r["e"])("img",V)):(Object(r["h"])(),Object(r["e"])("img",A)),Object(r["f"])("p",M,Object(r["m"])(n.name),1)])}Object(r["i"])();var C={name:"FileView",props:{name:String,type:String},methods:{defineFile:function(e){var t=e.split("/")[1];return"svg"==t?t="svg":"jpg"==t&&(t="jpg"),console.log(t),t}}};n("bb6c");C.render=B,C.__scopeId="data-v-6f066edc";var q=C,I={name:"FolderView",components:{FileView:q},props:{name:String,folders:Array,files:Array},data:function(){return{open:!1,numberFolder:0}},methods:{openFolder:function(e){this.open=!0,this.numberFolder=e;var t=document.querySelectorAll(".folder__container");t.forEach((function(e,t){e.style.display="none"}));var n=document.querySelector(".folder__button");n&&(n.style.display="none")},clickButton:function(){window.history.go(0)}}};n("8308");I.render=m,I.__scopeId="data-v-4e3bac42";var J=I,T={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},$={name:"App",components:{FolderView:J},data:function(){return T}};n("5dc5");$.render=l;var E=$;Object(r["b"])(E).mount("#app")},"5dc5":function(e,t,n){"use strict";n("431c")},8308:function(e,t,n){"use strict";n("dba0")},9277:function(e,t,n){e.exports=n.p+"img/file-js.0d8432d5.png"},"96a9":function(e,t,n){e.exports=n.p+"img/file-svg.461c20a5.png"},bb6c:function(e,t,n){"use strict";n("e72f")},be5a:function(e,t,n){e.exports=n.p+"img/file-jpg.351538d9.png"},bfb3:function(e,t,n){e.exports=n.p+"img/folder.d25e73bc.png"},cac2:function(e,t,n){e.exports=n.p+"img/file-png.2814f56d.png"},dba0:function(e,t,n){},e72f:function(e,t,n){}});
//# sourceMappingURL=app.849c5182.js.map