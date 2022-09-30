"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[7933],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={},s="AWS",u={unversionedId:"Integrations/plugin/aws",id:"Integrations/plugin/aws",title:"AWS",description:"Description",source:"@site/docs/Integrations/plugin/aws.md",sourceDirName:"Integrations/plugin",slug:"/Integrations/plugin/aws",permalink:"/docs/Integrations/plugin/aws",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/plugin/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Forwarding AWS Lambda logs to SnappyFlow",permalink:"/docs/Integrations/aws_lambda"},next:{title:"AzureDB",permalink:"/docs/Integrations/plugin/azuredb"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Enabling AWS billing reports",id:"enabling-aws-billing-reports",level:3},{value:"Configuration Settings",id:"configuration-settings",level:3},{value:"Documents",id:"documents",level:3},{value:"Further Reading",id:"further-reading",level:3}],d={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws"},"AWS"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"AWS Metric plugin provide information related to billing and inventory for the account and it is displayed in sfAPM dashboard. "),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"enabling-aws-billing-reports"},"Enabling AWS billing reports"),(0,o.kt)("p",null,"   AWS Billing reports can be generated following simple steps given at AWS official documentation.\nIt involves two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setting up an Amazon S3 bucket for Cost and Usage Reports . (",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-s3.html"},"related aws documentation"),")"),(0,o.kt)("li",{parentName:"ol"},"Creating Cost and Usage Reports . (",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html"},"related aws documentation"),")")),(0,o.kt)("h3",{id:"configuration-settings"},"Configuration Settings"),(0,o.kt)("p",null,"Billing and Inventory plugins need to be added through Plugins tab."),(0,o.kt)("p",null,"Parameters:\n1) S3 bucket name where the billing csv is placed.\n2) Folder path of the bucket where the billing csv is placed.\n3) Interval"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," AWS billing plugin provides billing information per day. So interval must be 86400."),(0,o.kt)("h3",{id:"documents"},"Documents"),(0,o.kt)("p",null,"All Billing and Inventory metrics are collected and displayed in CloudMonitoring_AWS dashboard."),(0,o.kt)("h3",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,"S3 , ",(0,o.kt)("a",{parentName:"p",href:"./rds"},"RDS")," and ",(0,o.kt)("a",{parentName:"p",href:"./elb"},"ELB")," for other AWS service related monitoring."),(0,o.kt)("p",null,"For help with plugins, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@snappyflow.io"},"support@snappyflow.io"),"."))}g.isMDXComponent=!0}}]);