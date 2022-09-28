"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[8807],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7583:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],i={},p="SnappyFlow sfPoller Setup In Azure",c={unversionedId:"sfPoller/azure_setup",id:"sfPoller/azure_setup",title:"SnappyFlow sfPoller Setup In Azure",description:"Launching sfPoller Instance",source:"@site/docs/sfPoller/azure_setup.md",sourceDirName:"sfPoller",slug:"/sfPoller/azure_setup",permalink:"/docs/sfPoller/azure_setup",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/sfPoller/azure_setup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Snappyflow sfPoller Server for vCenter",permalink:"/docs/sfPoller/vcenter_setup"},next:{title:"Tracing",permalink:"/docs/category/tracing"}},s={},u=[{value:"Launching sfPoller Instance",id:"launching-sfpoller-instance",level:2},{value:"Configure sfPoller",id:"configure-sfpoller",level:3}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snappyflow-sfpoller-setup-in-azure"},"SnappyFlow sfPoller Setup In Azure"),(0,o.kt)("h2",{id:"launching-sfpoller-instance"},"Launching sfPoller Instance"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to Azure portal. Goto marketplace and select SnappyFlow sfPoller at ",(0,o.kt)("a",{href:"https://portal.azure.com/#create/maplelabsinc1623932715330.sfpollersfpoller"},(0,o.kt)("u",null,"azure portal")),".",(0,o.kt)("img",{src:"/img/azure_1.png",alt:""})),(0,o.kt)("li",{parentName:"ol"},"Click create."),(0,o.kt)("li",{parentName:"ol"},"Create a new resource group."),(0,o.kt)("li",{parentName:"ol"},"Provide Virtual Machine name and select region."),(0,o.kt)("li",{parentName:"ol"},"Select the deployment size of the VM. (Recommended standard_B2s- 2 vcpu and 4GiB RAM)."),(0,o.kt)("li",{parentName:"ol"},"Select generate new key pair option for SSH public key resource or use existing public key."),(0,o.kt)("li",{parentName:"ol"},"If you select generate new key pair option provide key pair names. "),(0,o.kt)("li",{parentName:"ol"},"Select all three ports (HTTP 80, HTTPS 443, SSH 22) in inbound ports which are mentioned in the image below. ",(0,o.kt)("img",{src:"/img/azure_2.png",alt:""})),(0,o.kt)("li",{parentName:"ol"},"Click on next and select OS disk type."),(0,o.kt)("li",{parentName:"ol"},"Click on next and in the Management tab enable the identity check box.",(0,o.kt)("img",{src:"/img/azure_3.png",alt:""})),(0,o.kt)("li",{parentName:"ol"},"(Optional) Add tags for sfpoller instance "),(0,o.kt)("li",{parentName:"ol"},"Click on review+create and click create. "),(0,o.kt)("li",{parentName:"ol"},"After successfully deploying of server follow the below steps. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigate to the virtual machines and select the VM. "),(0,o.kt)("li",{parentName:"ul"},"Search for Identity and click on it."),(0,o.kt)("li",{parentName:"ul"},"Click on add role assignments."),(0,o.kt)("li",{parentName:"ul"},"Select scope as subscription and role as an owner. ",(0,o.kt)("img",{src:"/img/azure_4.png",alt:""})),(0,o.kt)("li",{parentName:"ul"},"Click on save."))),(0,o.kt)("li",{parentName:"ol"},"After completing the above steps, to access the sfPoller UI copy the public IP of VM and to login the username is admin, the password is a private IP address of the VM. ")),(0,o.kt)("h3",{id:"configure-sfpoller"},"Configure sfPoller"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add Profile Key:"),(0,o.kt)("p",{parentName:"li"},'Copy profile key from "Profiles" section under "Manage" tab of your SnappyFlow SaaS account or SnappyFlow server and save.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add Cloud Account:"),(0,o.kt)("p",{parentName:"li"},"Click cloud type and enter its details."),(0,o.kt)("p",{parentName:"li"},'(Optional) Add cloud metric plugins under "Plugins" tab if it is required to monitor account as well.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create Project:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to Application tab"),(0,o.kt)("li",{parentName:"ul"},'Click "Create project" and provide project name'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add Applications:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Add application by clicking add application button under "Actions" column (icon with + sign)'),(0,o.kt)("li",{parentName:"ul"},"Users can either discover applications from cloud using resource tags or manually add application and endpoints"),(0,o.kt)("li",{parentName:"ul"},"Click discover and provide tag keys for the account (If resources are tagged properly on the cloud, then Discovery feature discovers all end points)"),(0,o.kt)("li",{parentName:"ul"},"Add endpoints after selection (by default all endpoints are visible)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After adding endpoint click the save button")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to SnappyFlow dashboard (from where profile key was copied) and wait for sometime to get your applications discovered"))))}f.isMDXComponent=!0}}]);