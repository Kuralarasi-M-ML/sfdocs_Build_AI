"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1264],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],l={},p="Sending notifications to Slack",c={unversionedId:"Alerts_notifications/slack",id:"Alerts_notifications/slack",title:"Sending notifications to Slack",description:"Overview",source:"@site/docs/Alerts_notifications/slack.md",sourceDirName:"Alerts_notifications",slug:"/Alerts_notifications/slack",permalink:"/docs/Alerts_notifications/slack",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Alerts_notifications/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sending notifications to PagerDuty",permalink:"/docs/Alerts_notifications/pager_duty"},next:{title:"Real User Monitoring",permalink:"/docs/RUM/RUM_documentation"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Create Slack Token",id:"step-1-create-slack-token",level:2},{value:"Create New App For Your Workspace",id:"create-new-app-for-your-workspace",level:3},{value:"Provide Permission Scope",id:"provide-permission-scope",level:3},{value:"Install Slack App To Workspace &amp; Generate Token",id:"install-slack-app-to-workspace--generate-token",level:3},{value:"Features and Functionality(optional)",id:"features-and-functionalityoptional",level:3},{value:"Step 2: Add Slack Token to SnappyFLow",id:"step-2-add-slack-token-to-snappyflow",level:2},{value:"Step 3:  Add Slack notification to the Project",id:"step-3--add-slack-notification-to-the-project",level:2},{value:"Step 4: Setup Alerts",id:"step-4-setup-alerts",level:2}],u={toc:d};function k(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-notifications-to-slack"},"Sending notifications to Slack"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"SnappyFlow sends alerts/notifications to Slack and alerts can be configured to fit your existing business processes"),(0,o.kt)("h2",{id:"step-1-create-slack-token"},"Step 1: Create Slack Token"),(0,o.kt)("h3",{id:"create-new-app-for-your-workspace"},"Create New App For Your Workspace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visit ",(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/apps"},"https://api.slack.com/apps")),(0,o.kt)("li",{parentName:"ul"},"Click on create new app"),(0,o.kt)("li",{parentName:"ul"},"Enter your Slack app name"),(0,o.kt)("li",{parentName:"ul"},"Select the workspace from the drop-down"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Create App"))),(0,o.kt)("h3",{id:"provide-permission-scope"},"Provide Permission Scope"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth & Permissions")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"Features")," section from left side menu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Scroll down to Scope section and find Bot Token Scope.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add an Oauth Scope")," and select chat:write:public, im:read, mpim:read, groups:read, channels:read")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"scope from drop-down")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It automatically adds chat:write scope along with it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is another scope below the Bot Token Scope called as user Token Scope.\nSelect bot token scope and not the user token scope."))))),(0,o.kt)("h3",{id:"install-slack-app-to-workspace--generate-token"},"Install Slack App To Workspace & Generate Token"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scroll-up and Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Install App to Workspace"),"."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow")," to Provide permission for newly created App."),(0,o.kt)("li",{parentName:"ul"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bot User OAuth Access Token")," and paste token in APM Slack settings.")),(0,o.kt)("h3",{id:"features-and-functionalityoptional"},"Features and Functionality(optional)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Select "App Home" under ',(0,o.kt)("inlineCode",{parentName:"li"},"Features")," section from left side menu."),(0,o.kt)("li",{parentName:"ul"},"Scroll down to ",(0,o.kt)("inlineCode",{parentName:"li"},"Your App\u2019s Presence in Slack")," section"),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"Always show My Bot as Online")," in App Home")),(0,o.kt)("h2",{id:"step-2-add-slack-token-to-snappyflow"},"Step 2: Add Slack Token to SnappyFLow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Under the ",(0,o.kt)("inlineCode",{parentName:"li"},"Manage")," tab in SnappyFlow portal, select your profile and click on notifications."),(0,o.kt)("li",{parentName:"ul"},"Select notification type as ",(0,o.kt)("inlineCode",{parentName:"li"},"Slack")," and give a name of your choice and add the token generated in step 1 in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Token")," field")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"slack_1",src:n(825).Z,width:"770",height:"375"})),(0,o.kt)("h2",{id:"step-3--add-slack-notification-to-the-project"},"Step 3:  Add Slack notification to the Project"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"slack_2",src:n(6710).Z,width:"660",height:"401"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"slack_2a",src:n(9605).Z,width:"655",height:"229"})),(0,o.kt)("h2",{id:"step-4-setup-alerts"},"Step 4: Setup Alerts"),(0,o.kt)("p",null,"From the Application Dashboard, In the Alert Definition page , Edit the Alerts and check the \u201cNotify\u201d option"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"slack_3",src:n(1184).Z,width:"416",height:"175"})))}k.isMDXComponent=!0},825:function(e,t,n){t.Z=n.p+"assets/images/slack_1-ffde03c58b6de7af29841a07b341372a.png"},6710:function(e,t,n){t.Z=n.p+"assets/images/slack_2-beef993858aac309774d15346f32f677.png"},9605:function(e,t,n){t.Z=n.p+"assets/images/slack_2a-2a532d0939288f396f646b1f860d89c5.png"},1184:function(e,t,n){t.Z=n.p+"assets/images/slack_3-6597c5119c147ad8672531c9072991d7.png"}}]);