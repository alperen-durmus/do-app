(this["webpackJsonpspeechly-empty-template"]=this["webpackJsonpspeechly-empty-template"]||[]).push([[0],{145:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(28),r=a.n(s),o=(a(145),a(4)),j=a(39),i=a(65),p=a(241),b=a(242),d=a(239),l=a(240),u=a(76),f=a.n(u),h=a(18),O=["5e223eb6bamsh3e67e1f930affeap11c6f6jsn12b8c0f099eb","91c156e00fmsh7996f72b706cb68p1635ecjsn949aec97e020","4f7d012eb3msh396b0129a6a47e5p109d1ejsn13e344daa0d1","3555e92f7amsh0a125ae5c98c698p15e089jsn972ee7a368b9","2a448a49e2msh3f9407b760b2370p10dcb9jsnd5ced2a24943","8de98a5141mshc8d4d96bebafb63p132eaejsn1342a2175866","236d0a9cafmsh4d5baf3caf790fap1ca65cjsn2ab6c637ad6f"];var m=function(e){var t=e.text,a=Object(c.useState)(""),n=Object(o.a)(a,2),s=n[0],r=n[1],j=Object(c.useState)(0),i=Object(o.a)(j,2),d=i[0],l=i[1],u=Object(c.useState)(O[d]),m=Object(o.a)(u,2),x=m[0],g=m[1];return Object(c.useEffect)((function(){var e=new URLSearchParams;e.append("q",t),e.append("target","tr"),e.append("source","en");fetch("https://google-translate1.p.rapidapi.com/language/translate/v2",{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded","Accept-Encoding":"application/gzip","X-RapidAPI-Key":x,"X-RapidAPI-Host":"google-translate1.p.rapidapi.com"},body:e}).then((function(e){return e.json()})).then((function(e){console.log(e),void 0!=e.message?(l(d+1),g(O[d])):(console.log(d),r(e.data.translations[0].translatedText))})).catch((function(e){return console.error("error:"+e)}))}),[t,d]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.a,{style:{marginTop:20},children:Object(h.jsx)(b.a,{span:24,children:Object(h.jsx)(f.a,{rows:10,value:s})})})})};a(234);var x=function(){var e=Object(j.useSpeechContext)(),t=e.segment,a=(e.microphoneState,e.stop,Object(c.useState)("")),n=Object(o.a)(a,2),s=n[0],r=n[1],u=Object(c.useState)(),O=Object(o.a)(u,2),x=O[0],g=O[1],v=Object(c.useState)(!1),y=Object(o.a)(v,2),w=y[0],S=y[1];return Object(c.useEffect)((function(){if(t){var e=t.words.filter((function(e){return e.value})).map((function(e){return e.value})).join(" ");g(e),t.isFinal&&r(s+" "+x)}}),[t]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p.a,{justify:"center",children:Object(h.jsx)(b.a,{children:Object(h.jsx)(d.a,{width:200,src:"https://i.im.ge/2022/06/14/rvdVWJ.jpg",preview:!1})})}),Object(h.jsx)(p.a,{children:Object(h.jsx)(b.a,{span:24,children:Object(h.jsx)(f.a,{rows:10,value:s})})}),Object(h.jsx)(p.a,{justify:"center",style:{marginTop:20},children:Object(h.jsx)(b.a,{span:1,children:Object(h.jsx)(l.a,{onClick:function(){return S(!0)},size:"large",className:"button",children:"\xc7evir"})})}),w&&Object(h.jsx)(m,{text:s}),Object(h.jsx)(i.BigTranscript,{placement:"bottom"}),Object(h.jsx)(i.PushToTalkButton,{placement:"bottom",captureKey:"",powerOn:"auto",silenceToHangupTime:"2000"}),Object(h.jsx)(i.IntroPopup,{})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(j.SpeechProvider,{appId:"e950413e-1fa7-4dbc-8f31-7ff070ab38e2",historyFrames:"1000",children:Object(h.jsx)(x,{})})}),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.d54e8e23.chunk.js.map