(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{285:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(262),r=n(267),d=Object(o.c)({__name:"index",setup:function(t){var e=function(t,e){r.a.to(t,{opacity:1,duration:2,delay:e}),r.a.to(t,{opacity:0,duration:1.5,delay:e+2.5,onComplete:function(){var e;null===(e=document.getElementById(t))||void 0===e||e.remove()}})},n=function(){r.a.to("#welcome-div",{y:"-100%",duration:.5,delay:12,onComplete:function(){return r.a.to("#welcome-div",{display:"none"}),window.sessionStorage.setItem("@HAS_INTRO_CLONE","already seen")}})};return Object(o.d)((function(){window.sessionStorage.getItem("@HAS_INTRO_CLONE")?r.a.to("#welcome-div",{display:"none"}):(e("#discord-intro",1),e("#tools-intro",7),n(),document.body.style.overflow="auto")})),{__sfc:!0,fadeInAnimation:e,removeAbsoluteWindow:n,Icon:c.a}}}),l=n(42),component=Object(l.a)(d,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"z-1 absolute inset-0 w-screen h-screen bg-stone-950 text-xl flex items-center justify-center",attrs:{id:"welcome-div"}},[e("section",{staticClass:"intro-section",attrs:{id:"discord-intro"}},[t._m(0),t._v(" "),e(n.Icon,{staticClass:"mt-4",attrs:{icon:"fa6-brands:discord",width:"80"}})],1),t._v(" "),e("section",{staticClass:"intro-section",attrs:{id:"tools-intro"}},[e("p",[t._v("Was created with Vue and Tailwind")]),t._v(" "),e("aside",{staticClass:"flex"},[e(n.Icon,{attrs:{icon:"mdi:vuejs",width:"80"}}),t._v(" "),e(n.Icon,{attrs:{icon:"mdi:tailwind",width:"80"}})],1),t._v(" "),e("p",[t._v("I hope that u enjoy it")])])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("\n      This project is just a clone UI "),e("br"),t._v("\n      to pratice my front-end skills\n    ")])}],!1,null,null,null);e.default=component.exports}}]);