"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1622],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={},c="Real User Monitoring",l={unversionedId:"RUM/RUM_documentation",id:"RUM/RUM_documentation",title:"Real User Monitoring",description:"Overview",source:"@site/docs/RUM/RUM_documentation.md",sourceDirName:"RUM",slug:"/RUM/RUM_documentation",permalink:"/docs/RUM/RUM_documentation",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/RUM/RUM_documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sending notifications to Slack",permalink:"/docs/Alerts_notifications/slack"},next:{title:"Agent Installation",permalink:"/docs/RUM/RUM_agent_installation"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Supported Technologies",id:"supported-technologies",level:2},{value:"Setting up Real User Monitoring (RUM) in SnappyFlow",id:"setting-up-real-user-monitoring-rum-in-snappyflow",level:2},{value:"Performance Metrics",id:"performance-metrics",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"real-user-monitoring"},"Real User Monitoring"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Real User Monitoring (RUM) is used for performance analysis of client(Browser) side component of an application. It involves recording end-user interactions with a website or a client interacting with a server or cloud-based application. It allows website/application owners to visualize the sequence of actions and ",(0,i.kt)("a",{parentName:"p",href:"./RUM_Glossary/#event"},"events")," that take place during an interaction. Metrics such as ",(0,i.kt)("a",{parentName:"p",href:"./RUM_Glossary/#response-time"},"Response time"),", ",(0,i.kt)("a",{parentName:"p",href:"./RUM_Glossary/#transaction"},"Transactions"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/RUM/RUM_Glossary/#error"},"Errors"),", Event information, Browser information are monitored and visualized to help identify and troubleshoot website performance issues. Below are the screenshots of RUM Dashboard."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(8455).Z,width:"1366",height:"659"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(7329).Z,width:"1366",height:"661"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(6180).Z,width:"1366",height:"657"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"image",src:n(2960).Z,width:"1366",height:"658"})),(0,i.kt)("h2",{id:"supported-technologies"},"Supported Technologies"),(0,i.kt)("p",null,"All the applications developed using javascript or javascript based frameworks such as Angular, React, Vue etc are supported.  "),(0,i.kt)("h2",{id:"setting-up-real-user-monitoring-rum-in-snappyflow"},"Setting up Real User Monitoring (RUM) in SnappyFlow"),(0,i.kt)("p",null,"Snappyflow provides a lightweight and powerful ",(0,i.kt)("inlineCode",{parentName:"p"},"sf-apm-rum")," agent that can be installed in your web application to monitor user integrations in real time. ",(0,i.kt)("a",{parentName:"p",href:"/docs/RUM/RUM_agent_installation"},"Steps to install RUM agent")),(0,i.kt)("h2",{id:"performance-metrics"},"Performance Metrics"),(0,i.kt)("p",null,"Below are the various performance metrics that are captured by the ",(0,i.kt)("inlineCode",{parentName:"p"},"sf-apm-rum")," agent"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/RUM/RUM_Metrics/#apdex-rating"},"Apdex Rating")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/RUM/RUM_Metrics/#page-load-metrics"},"Page load metrics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/RUM/RUM_Metrics/#user-interactions"},"User interactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/RUM/RUM_Metrics/#user-centric-metrics"},"User Centric Metrics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/RUM/RUM_Metrics/#javascript-errors"},"JavaScript errors"))))}m.isMDXComponent=!0},8455:function(e,t,n){t.Z=n.p+"assets/images/doc1-c53dbee89512c0fa7ed548da4d99dc91.png"},7329:function(e,t,n){t.Z=n.p+"assets/images/doc2-0a55e82858ebea77d9a3fb3cb27e0dc8.png"},6180:function(e,t,n){t.Z=n.p+"assets/images/doc3-ebac8a30282381ee5a44fdf6f39f0db1.png"},2960:function(e,t,n){t.Z=n.p+"assets/images/doc4-a0d6c1f9691b05811b8cd59fabfc701b.png"}}]);