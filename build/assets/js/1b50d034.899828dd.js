"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[9139],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8081:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={},s="What Is SfPoller?",c={unversionedId:"sfPoller/overview",id:"sfPoller/overview",title:"What Is SfPoller?",description:"During the course of instrumenting an application for monitoring, an SRE or an architect needs a repertoire of tools to cater to varied requirements of monitoring. sfPoller is a powerful and extremely useful component of SnappyFlow and when used in conjunction with sfAgent and sfPod, allow users to reach all interfaces of an application that need to be monitored.",source:"@site/docs/sfPoller/overview.md",sourceDirName:"sfPoller",slug:"/sfPoller/overview",permalink:"/docs/sfPoller/overview",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/sfPoller/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up SnappyFlow in your own environment",permalink:"/docs/Quick_Start/snappyflow_self_hosted"},next:{title:"SnappyFlow SfPoller Setup In AWS",permalink:"/docs/sfPoller/aws_setup"}},u={},p=[],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-sfpoller"},"What Is SfPoller?"),(0,a.kt)("p",null,"During the course of instrumenting an application for monitoring, an SRE or an architect needs a repertoire of tools to cater to varied requirements of monitoring. sfPoller is a powerful and extremely useful component of SnappyFlow and when used in conjunction with sfAgent and sfPod, allow users to reach all interfaces of an application that need to be monitored."),(0,a.kt)("p",null,"A few example scenarios where sfPoller is indispensable are mentioned below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Use Cases")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"sfPoller features")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Cloud Services such as ELB, S3, RDS etc."),(0,a.kt)("td",{parentName:"tr",align:null},"Includes plugins for most commonly used cloud components. Plugin connects to a cloud account, discover inventory and collect static & dynamic parameters using Public cloud APIs, Cloudwatch and Azure Monitor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Database monitoring"),(0,a.kt)("td",{parentName:"tr",align:null},"Includes plugins for most popular databases e.g. Oracle, MySQL, MS-SQL, Postgres, Redis, Elasticsearch etc.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service Monitoring using Synthetics"),(0,a.kt)("td",{parentName:"tr",align:null},"Users can deploy postman like collections on sfPoller to monitor health of API end-points. Alternatively, users can run synthetic monitoring on Blazemeter & Taurus and poll these external load generators to get results of various runs and correlate the results with application performance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring of Cloud Inventory, Usage and Pricing"),(0,a.kt)("td",{parentName:"tr",align:null},"Includes plugins for AWS, Azure and GCP to provide analysis of usage and billing at a very granular level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datacenter monitoring and analysis"),(0,a.kt)("td",{parentName:"tr",align:null},"sfPoller contains a very highly scalable vCenter, HyperV and Baremetal pollers that can monitor extremely large deployments and provide analysis of performance and usage.")))))}d.isMDXComponent=!0}}]);