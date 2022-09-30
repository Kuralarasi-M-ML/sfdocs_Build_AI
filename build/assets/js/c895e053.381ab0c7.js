"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[4235],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={},s="Oracle ASH",u={unversionedId:"Integrations/plugin/oracleASH",id:"Integrations/plugin/oracleASH",title:"Oracle ASH",description:"Description",source:"@site/docs/Integrations/plugin/oracleASH.md",sourceDirName:"Integrations/plugin",slug:"/Integrations/plugin/oracleASH",permalink:"/docs/Integrations/plugin/oracleASH",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/plugin/oracleASH.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sfAgent installation on Windows",permalink:"/docs/Integrations/os/windows/sfagent_windows"},next:{title:"overview",permalink:"/docs/Integrations/postgres/overview"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configuration Settings",id:"configuration-settings",level:3},{value:"Documents",id:"documents",level:3}],f={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oracle-ash"},"Oracle ASH"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"OracleASH plugin fetch and parse the oracle ASH report from AWS-RDS."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mention the RDS Database instance name while adding the RDS Endpoint in 'Instance Name' field."),(0,o.kt)("li",{parentName:"ul"},"DB Host address must be specified in the 'IP' field of the RDS Endpoint configuration.")),(0,o.kt)("h3",{id:"configuration-settings"},"Configuration Settings"),(0,o.kt)("p",null,"Add plugin through the Plugins tab under RDS Endpoint."),(0,o.kt)("p",null,"Optional Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'ASH Report File Prefix: By default RDS generates the ASH report file name in the format "ashrpt_beginTime_endTime". Specify the file name prefix, if changed. Default value is "ashrpt".'),(0,o.kt)("li",{parentName:"ul"},"Service Name(SID): Oracle service name."),(0,o.kt)("li",{parentName:"ul"},"Username: Database login username."),(0,o.kt)("li",{parentName:"ul"},"Password: Database login password."),(0,o.kt)("li",{parentName:"ul"},"Port: Database port."),(0,o.kt)("li",{parentName:"ul"},"Report Duration in Minutes: Total time of the report in minutes.\nExample: If the ",(0,o.kt)("inlineCode",{parentName:"li"},"Report Duration in Minutes")," is set to 5 minutes, then it will generate an ASH report for the last 5 mintues in each poll.\nThis value should be lesser than the plugin interval.")),(0,o.kt)("h3",{id:"documents"},"Documents"),(0,o.kt)("p",null,"Following sections from the ASH report are captured by snappyflow with respective document types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Top Service/Module"),(0,o.kt)("li",{parentName:"ul"},"Top SQL Command Types"),(0,o.kt)("li",{parentName:"ul"},"Top Phases of Execution"),(0,o.kt)("li",{parentName:"ul"},"Top SQL with Top Events"),(0,o.kt)("li",{parentName:"ul"},"Top Sessions"),(0,o.kt)("li",{parentName:"ul"},"Top Blocking Sessions.")),(0,o.kt)("p",null,"To add support for more sections, please reach out to snappyflow team."),(0,o.kt)("p",null,"Use the dashboard template 'Oracle_ASH' for visualization."),(0,o.kt)("p",null,"For help with plugins, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@snappyflow.io"},"support@snappyflow.io"),"."))}m.isMDXComponent=!0}}]);