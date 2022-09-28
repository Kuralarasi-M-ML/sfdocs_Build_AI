"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[8251],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7115:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],p={},l="Steps to install SnappyFlow RUM agent - Angular",s={unversionedId:"RUM/agent_installation/angular",id:"RUM/agent_installation/angular",title:"Steps to install SnappyFlow RUM agent - Angular",description:"Any web application developed using Angular.",source:"@site/docs/RUM/agent_installation/angular.md",sourceDirName:"RUM/agent_installation",slug:"/RUM/agent_installation/angular",permalink:"/docs/RUM/agent_installation/angular",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/RUM/agent_installation/angular.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent Installation",permalink:"/docs/RUM/RUM_agent_installation"},next:{title:"Steps to install SnappyFlow RUM agent - React",permalink:"/docs/RUM/agent_installation/react"}},c={},u=[{value:"<strong>Step 1: Install the sf-apm-rum agent</strong>",id:"step-1-install-the-sf-apm-rum-agent",level:2},{value:"<strong>Step 2: Import the sf-apm-rum package</strong>",id:"step-2-import-the-sf-apm-rum-package",level:2},{value:"<strong>Step 3: Configure the error handler</strong>",id:"step-3-configure-the-error-handler",level:2},{value:"<strong>Step 4: Configure the sf-apm-rum agent</strong>",id:"step-4-configure-the-sf-apm-rum-agent",level:2},{value:"<strong>Step 5: Verify the setup</strong>",id:"step-5-verify-the-setup",level:2},{value:"<strong>Step 6: Debugging (In case of No Data in RUM Dashboard)</strong>",id:"step-6-debugging-in-case-of-no-data-in-rum-dashboard",level:2},{value:"i. <strong>Check if data is available on the Snappyflow server</strong>",id:"i-check-if-data-is-available-on-the-snappyflow-server",level:5},{value:"ii. <strong>Check if the RUM data is sent from the configured application</strong>",id:"ii-check-if-the-rum-data-is-sent-from-the-configured-application",level:5},{value:"iii. <strong>Check if the configurations are correct</strong>",id:"iii-check-if-the-configurations-are-correct",level:5}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"steps-to-install-snappyflow-rum-agent---angular"},"Steps to install SnappyFlow RUM agent - Angular"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Any web application developed using Angular."))),(0,o.kt)("h2",{id:"step-1-install-the-sf-apm-rum-agent"},(0,o.kt)("strong",{parentName:"h2"},"Step 1: Install the sf-apm-rum agent")),(0,o.kt)("p",null,"cd to the project directory and run the below command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install --save sf-apm-rum \n")),(0,o.kt)("h2",{id:"step-2-import-the-sf-apm-rum-package"},(0,o.kt)("strong",{parentName:"h2"},"Step 2: Import the sf-apm-rum package")),(0,o.kt)("p",null,"Add following path in angular.json under scripts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'node_modules/sf-apm-rum/dist/sf-apm-rum.js'\n")),(0,o.kt)("p",null,"Eg:\n",(0,o.kt)("inlineCode",{parentName:"p"},"scripts: ['node_modules/sf-apm-rum/dist/sf-apm-rum.js']")),(0,o.kt)("h2",{id:"step-3-configure-the-error-handler"},(0,o.kt)("strong",{parentName:"h2"},"Step 3: Configure the error handler")),(0,o.kt)("p",null,"Create a new file  ",(0,o.kt)("inlineCode",{parentName:"p"},"apm-error.handler.ts")," in the add following code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { ErrorHandler } from "@angular/core";\ndeclare const sfApm: any;\n\nexport class ApmErrorHandler extends ErrorHandler {\n\n    constructor() {\n        super()\n    }\n\n    handleError(error) {\n        sfApm.apm.captureError(error.originalError || error)\n        super.handleError(error)\n    }\n\n}\n')),(0,o.kt)("p",null,"Then in ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts")," add,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ErrorHandler, NgModule } from '@angular/core';\nimport { ApmErrorHandler } from './apm.error-handler';\n")),(0,o.kt)("p",null,"under imports add,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"providers: [\n    {provide: ErrorHandler, useClass: ApmErrorHandler}\n]\n")),(0,o.kt)("h2",{id:"step-4-configure-the-sf-apm-rum-agent"},(0,o.kt)("strong",{parentName:"h2"},"Step 4: Configure the sf-apm-rum agent")),(0,o.kt)("p",null,"Add the following code in the applications root component,\nusually in app.component.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"declare const sfApm: any; // add it outside class\n\nlet apmRum = new sfApm.ApmRum(); // initialize the library\n\nconst apmData = {\n    baseUrl: '<add-snappyflow-server-url-here>', // provide the URL of the snappyflow APM server that you are using to view the data\n    profileKey: '<add-profile-key-here>', // paste the profile key copied from SF profile\n    serviceName: '<your-apm-service-name>', // specify service name for RUM\n    projectName: '<add-project-name-here>', // provide the snappyflow project name\n    appName: '<add-application-name-here>', // provide the snappyflow application name\n};\napmRum.init(apmData);\n")),(0,o.kt)("h2",{id:"step-5-verify-the-setup"},(0,o.kt)("strong",{parentName:"h2"},"Step 5: Verify the setup")),(0,o.kt)("p",null,"Once the above mentioned steps are completed, restart the application and check for the RUM data in the Snappyflow APM server. For viewing RUM data in snappyflow server, make sure  the project and application is created or discovered with project name and app name specified in the ",(0,o.kt)("a",{parentName:"p",href:"#step3-configure-the-sf-apm-rum-agent"},"Step 3"),"."),(0,o.kt)("p",null,"Once application is available in the Snappyflow Server, Click on View dashboard -> Click on Real User Monitoring Tab on left side bar -> Go to Real Time Pane"),(0,o.kt)("h2",{id:"step-6-debugging-in-case-of-no-data-in-rum-dashboard"},(0,o.kt)("strong",{parentName:"h2"},"Step 6: Debugging (In case of No Data in RUM Dashboard)")),(0,o.kt)("h5",{id:"i-check-if-data-is-available-on-the-snappyflow-server"},"i. ",(0,o.kt)("strong",{parentName:"h5"},"Check if data is available on the Snappyflow server")),(0,o.kt)("p",null,'Navigate to the application dashboard -> Click on Browse Data -> Change the Index to "Real User Monitoring". Check if the data is available. If the data is available, it will be visible on the RUM Dashboard within few seconds.  '),(0,o.kt)("h5",{id:"ii-check-if-the-rum-data-is-sent-from-the-configured-application"},"ii. ",(0,o.kt)("strong",{parentName:"h5"},"Check if the RUM data is sent from the configured application")),(0,o.kt)("p",null,"Open the Developer tools for the configured web application on the browser -> Click on the Network Tab -> Trigger some actions in the application. Check if there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"intake/v2/rum/events")," call fired from the configured application side. If this call is made, it means that the data is being sent to the snappyflow server.   "),(0,o.kt)("h5",{id:"iii-check-if-the-configurations-are-correct"},"iii. ",(0,o.kt)("strong",{parentName:"h5"},"Check if the configurations are correct")),(0,o.kt)("p",null,"Check if the projectName and appName provided in the ",(0,o.kt)("a",{parentName:"p",href:"#step-4-configure-the-sf-apm-rum-agent"},"Step 4")," are matching the project name and application name in the snappyflow server."))}m.isMDXComponent=!0}}]);