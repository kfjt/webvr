(this.webpackJsonpwebvr=this.webpackJsonpwebvr||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),c=(n(21),n(8)),u=n(4),s=n.n(u),f=n(11),d=n(2),v=n(3),h=n(1);function l(){var e=Object(d.a)(["\n  position: absolute\n  width: ","\n  height: ","\n"]);return l=function(){return e},e}function w(){var e=Object(d.a)(["\n  position: absolute\n"]);return w=function(){return e},e}function b(){var e=Object(d.a)(["\n  width: ","\n  height: ","\n"]);return b=function(){return e},e}var g=v.a.div(b(),(function(e){return e.width||"auto"}),(function(e){return e.height||"auto"})),m=v.a.video(w()),O=v.a.canvas(l(),(function(e){return e.width||"auto"}),(function(e){return e.height||"auto"})),p=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),i=Object(a.useRef)(),o=Object(a.useState)(),u=Object(c.a)(o,2),d=u[0],v=u[1],l=Object(a.useState)(),w=Object(c.a)(l,2),b=w[0];return function(e){var t=e.refVideo,n=e.setWidth,r=e.setHeight;Object(a.useEffect)((function(){var e=t.current,a=function(){var t=Object(f.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});case 2:e.srcObject=t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&a(),e.addEventListener("loadeddata",e.play),e.addEventListener("loadedmetadata",(function(){n(e.videoWidth),r(e.videoHeight)}))}))}({refVideo:e,setWidth:v,setHeight:w[1]}),function(e){var t=e.refCanvas;Object(a.useEffect)((function(){var e=t.current.getContext("webgl2");e&&function(e){e.clearColor(0,0,0,.5),e.clear(e.COLOR_BUFFER_BIT)}(e)}))}({refCanvas:t}),function(e){var t=e.refCanvas,n=e.text,r=e.coord;Object(a.useEffect)((function(){t.current.getContext("2d").fillText(n,r.x,r.y,40)}))}({refCanvas:n,text:"World",coord:{x:20,y:40}}),function(e){var t=e.refCanvas,n=new h.e,r=new h.d(90),i=new h.a(1,1,1),o=new h.c({color:65280}),c=new h.b(i,o);n.add(c),r.position.z=5,Object(a.useEffect)((function(){var e=t.current,a=new h.f({canvas:e,alpha:!0});a.setSize(e.width,e.height);!function e(){requestAnimationFrame(e),c.rotation.x+=.01,c.rotation.y+=.01,a.render(n,r)}()}))}({refCanvas:i}),r.a.createElement(g,{className:"vrscene",width:d,height:b},r.a.createElement(m,{ref:e}),r.a.createElement(O,{ref:t,width:d,height:b}),r.a.createElement(O,{ref:n,width:d,height:b}),r.a.createElement(O,{ref:i,width:d,height:b}))};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.51151594.chunk.js.map