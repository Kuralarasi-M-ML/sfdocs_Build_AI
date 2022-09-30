"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[3633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={},s="Jboss plugin",p={unversionedId:"Integrations/jboss",id:"Integrations/jboss",title:"Jboss plugin",description:"Overview",source:"@site/docs/Integrations/jboss.md",sourceDirName:"Integrations",slug:"/Integrations/jboss",permalink:"/docs/Integrations/jboss",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/jboss.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/docs/Integrations/java/java_profiler_memory"},next:{title:"overview",permalink:"/docs/Integrations/kafka/overview"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration Settings",id:"configuration-settings",level:2},{value:"Documents",id:"documents",level:2},{value:"Server Info pane",id:"server-info-pane",level:3},{value:"Jvm Health pane",id:"jvm-health-pane",level:3},{value:"Api Load Analysis pane",id:"api-load-analysis-pane",level:3},{value:"Logger",id:"logger",level:2},{value:"Description",id:"description",level:3},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Configuration Settings",id:"configuration-settings-1",level:2},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",level:2}],c={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jboss-plugin"},"Jboss plugin"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Jboss Metric plugin monitors Jboss server by collecting multiple types of metrics like server stats, jvm stats using Jolokia"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jboss Metric Plugin is based on Jolokia agent which requires JMX monitoring to be enabled locally. Following property needs to be included during the start of jboss process")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," -Dcom.sun.management.jmxremote\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JCMD command must be installed in the machine")),(0,o.kt)("h2",{id:"configuration-settings"},"Configuration Settings"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent"),"\u202fsection\u202ffor\u202fsteps to install and automatically generate\u202fplugin\u202fconfigurations. User can also manually add the configuration shown below to\u202f",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\u202funder ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/sfagent")," directory\u202f "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\nmetrics: \n  metrics: \n  plugins: \n    - name: jboss\n      enabled: true\n      interval: 30\n      config:\n       username: jbossuser\n       password: password\n       protocol: http\n       port: 8080\n       context: jolokia\n")),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("p",null,"It consists of two document types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jboss stats: contain metrics like jboss sever version, uptime, server name,transactions and session related details,request information like processing time, request count, data received and sent,processing time, request count, data received and sent"),(0,o.kt)("li",{parentName:"ul"},"JVM stats: contain all JVM related metrics used by tomcat server like garbage collection details, memory pools, loaded/unloaded classes etc")),(0,o.kt)("p",null,"Use Jboss dashboard for data visualization."),(0,o.kt)("h3",{id:"server-info-pane"},"Server Info pane"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"img.png",src:n(785).Z,width:"1365",height:"602"})),(0,o.kt)("h3",{id:"jvm-health-pane"},"Jvm Health pane"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"img_1.png",src:n(5483).Z,width:"1366",height:"573"})),(0,o.kt)("h3",{id:"api-load-analysis-pane"},"Api Load Analysis pane"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"img_2.png",src:n(6760).Z,width:"1366",height:"580"})),(0,o.kt)("h2",{id:"logger"},"Logger"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Jboss logger to capture Wildfly server access logs and error logs."),(0,o.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("p",null,"Jboss server access log format needs to be modified to capture all metrics from the access logs, which includes following steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Edit the file $JBOSS_HOME/standalone/configuration/standalone.xml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set log format in the following section ",(0,o.kt)("inlineCode",{parentName:"p"},'<host name="default-host" alias="localhost">')," by specifying the pattern value to pre-defined \u201ccombined\u201d log format or"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<host name="default-host" alias="localhost">\n<location name="/" handler="welcome-content"/>\n<access-log pattern="%h %t &quot;%r&quot; %s &quot;%{i,User-Agent}&quot; %D " use-server-log="false"/>\n<http-invoker security-realm="ApplicationRealm"/>\n</host>\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Set the attribute record-request-start-time="true" in the section ',(0,o.kt)("inlineCode",{parentName:"p"},'<subsystem xmlns="urn:jboss:domain:undertow:*">')," for all the listeners as %D and %T access log elements will work only after record-request-start-time is turned on")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Set the attribute statistics-enabled="true" in all the occurences of standalone.xml as the statistics are disabled by default'))),(0,o.kt)("p",null,"After changing log pattern to combined or the above mentioned pattern, sample log would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'183.83.155.203 [07/Aug/2020:14:24:17 +0000] "GET /petclinic/org.richfaces.resources/javax.faces.resource/org.richfaces/skinning.ecss?db=eAG7dPvZfwAIqAOT HTTP/1.1" 500 "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36" 3\n\n')),(0,o.kt)("h2",{id:"configuration-settings-1"},"Configuration Settings"),(0,o.kt)("p",null,"Mention the access log file and server log file path in plugin configuration. Wildcard character supported"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'logging: \n  plugins: \n    - name: jboss-access\n      enabled: true\n      ## OPTIONAL\n      config:\n        log_path: "/opt/wildfly/standalone/log/access*.log"\n        geo_info: true\n        ua_parser: true\n        url_normalizer: false #Not recommended for k8s deployment\n    - name: jboss-error\n      enabled: true\n      ## OPTIONAL\n      config:\n        log_level:\n          - error\n          - warn\n          - warning\n        log_path: "/opt/wildfly/standalone/log/server*.log"\n')),(0,o.kt)("p",null,"Jboss access log plugin also supports:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Geo-IP: Useful to find geographical location of the client using the IP address. To enable, set the option "geo_info" to true in the above configuration'),(0,o.kt)("li",{parentName:"ol"},'User-Agent Analysis: To get the host machine details like browser, Operating system and device by analysis the user-agent. To enable, set the option "ua_parser" to true in the above configuration. If enabled, by default it runs on port 8586'),(0,o.kt)("li",{parentName:"ol"},'URL Normalizer (not supported in container deployment): Normalize incoming URL paths. To enable, set the option "url_normalizer" to true in the above configuration. If enabled, by default it runs on port 8587')),(0,o.kt)("p",null,"Config Field Description,"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"interval"),": Normalization algorithm runtime interval"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"enabled"),": Rely on normalization feature for rule generation"),(0,o.kt)("p",null,"*rules_length_limit Normalization specific configuration is available in /opt/sfagent/normalization/config.yaml which resonate the following,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"interval: 300 \ndynamic_rule_generation: \n    enabled: true\n    rules_length_limit: 1000\n    log_volume: 100000\nrules: []\n")),(0,o.kt)("p",null,"t*: Limit over size of generated rules. set the value to -1  for specifying no limit"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"log_volume"),": Limit over number of logs processed. set the value to -1  for specifying no limit"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"rules"),": Rules Generated"),(0,o.kt)("p",null,"Recommended Approach is to have sfagent running with ",(0,o.kt)("em",{parentName:"p"},"dynamic_rule_generation")," enabled over a period of time. Observe whether rules generated reflect all the web app requests intended to be normalized and if its a true reflection, set ",(0,o.kt)("em",{parentName:"p"},"enabled")," flag to ",(0,o.kt)("em",{parentName:"p"},"false")," , indicating no further rules will be generated"),(0,o.kt)("p",null,"Default ports used by user-agent analysis and URL Normalizer can be changed respectively with the inclusion of following in config.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"agent: \n    uaparserport: desired_port_number\n    url_normalizer: desired_port_number\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Latitude and Longitude are often near the center of population. These values are not precise and should not be used to identify a particular address or household"),(0,o.kt)("li",{parentName:"ol"},"User-agent parsing requires high computation power. Recommended to enable only if needed and system have enough CPU resource available. Please refer the following table to know the CPU consumption range. These are ",(0,o.kt)("strong",{parentName:"li"},"approximate values"),", and ",(0,o.kt)("strong",{parentName:"li"},"might vary")," depending on multiple factors")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Average Request Rate (request/sec)"),(0,o.kt)("th",{parentName:"tr",align:null},"Approx. CPU Utilization (%)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"50"),(0,o.kt)("td",{parentName:"tr",align:null},"4 - 7")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},"12 - 15")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"200"),(0,o.kt)("td",{parentName:"tr",align:null},"30 - 60")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"300"),(0,o.kt)("td",{parentName:"tr",align:null},"40 - 60")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"50 - 80")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1000"),(0,o.kt)("td",{parentName:"tr",align:null},"80 - 140")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2000"),(0,o.kt)("td",{parentName:"tr",align:null},"90 - 160")))),(0,o.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,o.kt)("p",null,"Data collected by plugins can be viewed in SnappyFlow\u2019s browse data section under metrics section "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"plugin: jboss, jboss-access, jboss-error")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"documentType: jboss, jvm, jboss-access, jboss-error")),(0,o.kt)("p",null,"Dashboard template: ",(0,o.kt)("inlineCode",{parentName:"p"},"jboss")),(0,o.kt)("p",null,"For help with plugins, please reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@snappyflow.io"},"support@snappyflow.io"),"."))}m.isMDXComponent=!0},6760:function(e,t,n){t.Z=n.p+"assets/images/jboss_api_load-78d41634b046f03c027649d3fa41c0be.png"},5483:function(e,t,n){t.Z=n.p+"assets/images/jboss_jvm_health-1c8cdb8bf990003c2498d45a92d71ce7.png"},785:function(e,t,n){t.Z=n.p+"assets/images/jboss_server_info-d39a442b76346722101a9bbfbfd71bf1.png"}}]);