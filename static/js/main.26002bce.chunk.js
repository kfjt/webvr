(this.webpackJsonpwebvr=this.webpackJsonpwebvr||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),c=(n(20),n(3)),s=n(1),u=n(2),l=n(4),d=n.n(l),m=n(10);function v(){var e=Object(s.a)(["\n  position: absolute\n"]);return v=function(){return e},e}var h=u.a.video(v());function f(){var e=Object(s.a)(["\n  a-scene {\n    width: ","px\n    height: ","px\n  }\n"]);return f=function(){return e},e}var p=Object(u.a)((function(e){return r.a.createElement("a-scene",{embedded:!0,"vr-mode-ui":"enabled: false","keyboard-shortcuts":"enterVR: false",stats:!0},e.children)}))(f(),(function(e){return e.width}),(function(e){return e.height})),w=function(e){var t=e.width,n=e.height,a=e.acceleration;if(!n)return r.a.createElement("div",null);console.log(a);var i=a.x,o=a.y,c=a.z;return r.a.createElement(p,{width:t,height:n},r.a.createElement("a-entity",{position:"".concat(i," ").concat(o," ").concat(c)},r.a.createElement("a-entity",{camera:!0,"look-controls":!0})),r.a.createElement("a-entity",{geometry:"primitive: cone; radiusBottom: 0.1; radiusTop: 0.01",material:"color: yellow",position:"0 0 0"}),r.a.createElement("a-entity",{geometry:"primitive: cone; radiusBottom: 0.1; radiusTop: 0.01",material:"color: yellow",position:"1 0 0"}),r.a.createElement("a-entity",{geometry:"primitive: cone; radiusBottom: 0.1; radiusTop: 0.01",material:"color: yellow",position:"2 0 0"}),r.a.createElement("a-entity",{geometry:"primitive: cone; radiusBottom: 0.1; radiusTop: 0.01",material:"color: yellow",position:"3 0 0"}),r.a.createElement("a-entity",{geometry:"primitive: cone; radiusBottom: 0.1; radiusTop: 0.01",material:"color: yellow",position:"4 0 0"}))};function g(){var e=Object(s.a)(["\n  width: ","px\n  height: ","px\n"]);return g=function(){return e},e}var y=u.a.div(g(),(function(e){return e.width}),(function(e){return e.height})),b=function(){var e=Object(a.useRef)(),t=Object(a.useState)(),n=Object(c.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(),u=Object(c.a)(s,2),l=u[0],v=u[1],f=Object(a.useState)({x:0,y:1.6,z:0}),p=Object(c.a)(f,2),g=p[0],b=p[1];return function(e){var t=e.refVideo,n=e.setWidth,r=e.setHeight;Object(a.useEffect)((function(){var e=t.current,a=function(){var t=Object(m.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});case 2:e.srcObject=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&a(),e.addEventListener("loadeddata",e.play),e.addEventListener("loadedmetadata",(function(){n(e.videoWidth),r(e.videoHeight)}))}))}({refVideo:e,setWidth:o,setHeight:v}),function(e){var t=e.setAcceleration;Object(a.useEffect)((function(){var e=function(e){return t(e.acceleration)};return window.addEventListener("devicemotion",e,!0),window.removeEventListener("devicemotion",e)}))}({setAcceleration:b}),r.a.createElement(y,{className:"vrscene",width:i,height:l},r.a.createElement(h,{ref:e}),r.a.createElement(w,{width:i,height:l,acceleration:g}))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.26002bce.chunk.js.map