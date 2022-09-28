"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[1613],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={sidebar_label:"ETL Jobs"},l="Analyzing ETL Jobs with SnappyFlow",p={unversionedId:"Log_management/etl_jobs",id:"Log_management/etl_jobs",title:"Analyzing ETL Jobs with SnappyFlow",description:"Analytics processing usually requires user to run a sequence of database reads/write jobs and transformation operations. In many cases these jobs are complex and may take a long time to complete. It is a very common need of the users to monitor individual jobs runs, summarize performance of different jobs, compare two runs of a specific job type.",source:"@site/docs/Log_management/etl_jobs.md",sourceDirName:"Log_management",slug:"/Log_management/etl_jobs",permalink:"/docs/Log_management/etl_jobs",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Log_management/etl_jobs.md",tags:[],version:"current",frontMatter:{sidebar_label:"ETL Jobs"},sidebar:"tutorialSidebar",previous:{title:"Log Signatures",permalink:"/docs/Log_management/log_signatures"},next:{title:"Custom Log Overview pane",permalink:"/docs/Log_management/custom_log"}},u={},c=[{value:"Step 1: Drop logs from ETL Jobs",id:"step-1-drop-logs-from-etl-jobs",level:2},{value:"Step 2: Forward logs to SnappyFlow",id:"step-2-forward-logs-to-snappyflow",level:2},{value:"Step 3: Generate an access URL for use by summarization module",id:"step-3-generate-an-access-url-for-use-by-summarization-module",level:2},{value:"Step 4: Run summarization script as a cronjob",id:"step-4-run-summarization-script-as-a-cronjob",level:2},{value:"Step 5: Review ETL Dashboards",id:"step-5-review-etl-dashboards",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"analyzing-etl-jobs-with-snappyflow"},"Analyzing ETL Jobs with SnappyFlow"),(0,r.kt)("p",null,"Analytics processing usually requires user to run a sequence of database reads/write jobs and transformation operations. In many cases these jobs are complex and may take a long time to complete. It is a very common need of the users to monitor individual jobs runs, summarize performance of different jobs, compare two runs of a specific job type. "),(0,r.kt)("p",null,"SnappyFlow provides an easy yet powerful tool to analyze ETL Jobs. The approach is explained in the following video"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lFLXyMfq6jY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("picture",null),(0,r.kt)("h2",{id:"step-1-drop-logs-from-etl-jobs"},"Step 1: Drop logs from ETL Jobs"),(0,r.kt)("p",null,"SnappyFlow allows for a job to have up to a 3-level hierarchy- Job, Stage, Task. Logs in JSON format have to be dropped whenever a job/stage/task is started, completed or terminated. This log can be parsed using SnappyFlow\u2019s ETL parser. "),(0,r.kt)("div",null,(0,r.kt)("b",null,"Log format for a Job:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "jobName": <Job-name>,\n    "jobId": <Unique JobId>,\n    "time": <Time in epoch milliseconds format>\n    "type": "job",\n    "status": <status: started, success, failed, aborted> \n }\n')),(0,r.kt)("div",null,(0,r.kt)("b",null,"Log format for a Stage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n     "jobName": <Job-name>,\n     "jobId": <Unique JobId>,\n    "stageId": <stageId>,\n    "stageName": <stageName>\n     "time": <Time in epoch milliseconds format>\n     "type": "stage", \n     "status": <status can be started, success, failed, aborted>\n } \n')),(0,r.kt)("div",null,(0,r.kt)("b",null,"Log format for a Task:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "jobName": <Job-name>,\n    "jobId": <Unique JobId>,\n    \u201cstageId\u201d: <staged>,\n    \u201cstageName\u201d: <stageName>\n    "time": <Time in epoch milliseconds format>\n    "type": "task",\n    "status": <status can be started, success, failed, aborted>\n} \n')),(0,r.kt)("h2",{id:"step-2-forward-logs-to-snappyflow"},"Step 2: Forward logs to SnappyFlow"),(0,r.kt)("p",null,"Add the following log parser to logging section of sfAgent\u2019s config.yaml:    "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"logging:\n  plugins:\n    - name: etlRaw\n      enabled: true\n        config:\n          log_path: <log file path>\n")),(0,r.kt)("p",null,"Restart sfAgent with the new configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"service sfagent restart\n")),(0,r.kt)("p",null,"Check if documents have been received in SnappyFlow. You will find 3 documents under metrics with plugin name as \u201cetlRaw\u201d and documentType as \u201cjob\u201d, \u201cstage\u201d and \u201ctask\u201d depending on your hierarchy. "),(0,r.kt)("h2",{id:"step-3-generate-an-access-url-for-use-by-summarization-module"},"Step 3: Generate an access URL for use by summarization module"),(0,r.kt)("p",null,"Logs shipped to SnappyFlow are in a raw form and they cannot be directly used for reporting and analysis. Therefore user has to export this raw data to a summarization script that transforms the data and sends it back to SnappyFlow into a new document. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Import a ETL template into your dashboard.")," "),(0,r.kt)("p",null,"Go to \u201cScratchpad\u201d pane "),(0,r.kt)("p",null,"Click on \u2018Export API Endpoint\u2019 option in the component and create component  URL for all 3 components for interval, say Last 5 mins. "),(0,r.kt)("img",{src:"/img/Picture1.png"}),(0,r.kt)("p",null,"Click on the \u2018API Endpoints\u2019 option for the project to view the API List. Copy the URL\u2019s for the 3 components and the Authentication token. These need to be provided in Step 4"),(0,r.kt)("img",{src:"/img/Picture2.png"}),(0,r.kt)("h2",{id:"step-4-run-summarization-script-as-a-cronjob"},"Step 4: Run summarization script as a cronjob"),(0,r.kt)("p",null,"Install the pip utility from the below link. Refer to the link for Installation and Usage instructions."),(0,r.kt)("p",null,"\u200b      ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/sfapmetl/"},"sfapmetl \xb7 PyPI")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The python script takes a config file path as input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set values for key, appName, projectName, Name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Provide the component Url\u2019s for Job, stage and Task and authKey (from Step 3)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The data will be available in the dashboard under the plugin \u2018etlReport\u2019 and documentType - job, stage and task."))),(0,r.kt)("h2",{id:"step-5-review-etl-dashboards"},"Step 5: Review ETL Dashboards"),(0,r.kt)("p",null,"You will now see the summarized data in dashboard under etlReport for job, stage and tasks. Select a particular job and choose a timeline to see job duration trends over the selected time period. Clicking on a particular job id provides a drilled down view of stages and tasks within that job. "),(0,r.kt)("img",{src:"/img/Picture3.png"}))}d.isMDXComponent=!0}}]);