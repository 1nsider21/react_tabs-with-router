(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c),m=a(6),i=a(1),o=(a(21),function(e){var t=e.tabs,a=e.match;return l.a.createElement("div",null,l.a.createElement("ul",{className:"tabs"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(m.b,{className:"tabs__link",to:"/tabs/".concat(e.id)},e.title))}))),a.params.tabId&&l.a.createElement("h1",null,t.find((function(e){return e.id===a.params.tabId})).content))});o.defaultProps={match:{}};var s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return l.a.createElement("h1",null,"Home")},b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(m.b,{className:"nav__link",to:"/",exact:!0},"Home page")),l.a.createElement("li",null,l.a.createElement(m.b,{className:"nav__link",to:"/tabs"},"Tabs page"))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:u}),l.a.createElement(i.a,{path:"/tabs/:tabId?",render:function(e){var t=e.match;return l.a.createElement(o,{match:t,tabs:s})}})))};r.a.render(l.a.createElement(m.a,null,l.a.createElement(b,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ef3e7e0c.chunk.js.map