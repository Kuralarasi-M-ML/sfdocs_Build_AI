"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[4058],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1044:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],l={},s="Monitoring Redis on instances",u={unversionedId:"Integrations/redis",id:"Integrations/redis",title:"Monitoring Redis on instances",description:"Overview",source:"@site/docs/Integrations/redis.md",sourceDirName:"Integrations",slug:"/Integrations/redis",permalink:"/docs/Integrations/redis",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/redis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RabbitMQ in Kubernetes",permalink:"/docs/Integrations/rabbitmqkubernet"},next:{title:"Monitoring Redis Sentinel setup on Instances",permalink:"/docs/Integrations/redis_sentinel"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Metrics plugin",id:"metrics-plugin",level:3},{value:"Logger plugin",id:"logger-plugin",level:3},{value:"Pre-requisites\u202f",id:"pre-requisites",level:2},{value:"Enable Slow Logs\u202f\u202f",id:"enable-slow-logs",level:3},{value:"Configuration\u202f",id:"configuration",level:2},{value:"Viewing data and dashboards\u202f\u202f",id:"viewing-data-and-dashboards",level:2}],p={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitoring-redis-on-instances"},"Monitoring Redis on instances"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Redis\u202fon instances is monitored using ",(0,a.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent"),"\u202fconfigured with\u202fRedisdb\u202fplugin\u202f "),(0,a.kt)("h3",{id:"metrics-plugin"},"Metrics plugin"),(0,a.kt)("p",null,"Collects metric data organized in following\u202f",(0,a.kt)("inlineCode",{parentName:"p"},"documentType")," under metrics index:\u202f "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keyspaceStat\u202f "),(0,a.kt)("li",{parentName:"ul"},"redisDetails "),(0,a.kt)("li",{parentName:"ul"},"redisStat"),(0,a.kt)("li",{parentName:"ul"},"redisPersistence")),(0,a.kt)("h3",{id:"logger-plugin"},"Logger plugin"),(0,a.kt)("p",null,"collects\u202fgeneral logs and slow logs. General logs are sent to log index whereas slow queries are sent to metrics index under\u202f",(0,a.kt)("inlineCode",{parentName:"p"},"documentType:redisSlowLogs"),"\u202f "),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites\u202f"),(0,a.kt)("h3",{id:"enable-slow-logs"},"Enable Slow Logs\u202f\u202f"),(0,a.kt)("p",null,"In\u202f",(0,a.kt)("inlineCode",{parentName:"p"},"redis.cnf"),"\u202ffile,\u202funcomment and configure the variables shown below:\u202f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"slowlog-log-slower-than= 1\u202f \nslowlog-max-len=100 \n")),(0,a.kt)("p",null,"Or, login to\u202fredis\u202fwith root user and execute below commands\u202f "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"config set slowlog-log-slower-than= 1;\u202f \nconfig set\u202fslowlog-max-len=100;\u202f \n")),(0,a.kt)("h2",{id:"configuration"},"Configuration\u202f"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/Quick_Start/getting_started#sfagent"},"sfAgent"),"\u202fsection\u202ffor\u202fsteps to install and automatically generate\u202fplugin\u202fconfigurations. User can also manually add the configuration shown below to\u202f",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\u202funder ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/sfagent/directory"),"\u202f "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"metrics:\u202f \n\u202f plugins:\u202f \n\u202f\u202f\u202f - name: redisdb\n  \u202f enabled: true\u202f \n\u202f\u202f\u202f\u202f\u202f interval: 60\u202f \n\u202f\u202f\u202f\u202f\u202f config:\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202fdocumentsTypes:\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f -\u202fkeyspaceStat\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f -\u202fredisDetails\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f -\u202fredisPersistence\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f -\u202fredisStat\n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f -\u202fslowLogs          \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f password: pass\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f port: 6379\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f user: admin\u202f \nlogging:\u202f \n\u202f plugins:\u202f \n\u202f\u202f\u202f - name:\u202fredis-general\u202f \n\u202f\u202f\u202f\u202f\u202f enabled: true\u202f \n\u202f\u202f\u202f\u202f\u202f config:\u202f \n\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202f\u202flog_path: /var/log/redis/redis-server.log\u202f \n")),(0,a.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards\u202f\u202f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data generated by plugin can be viewed in ",(0,a.kt)("inlineCode",{parentName:"li"},"browse data")," page inside the respective application under ",(0,a.kt)("inlineCode",{parentName:"li"},"plugin=redisdb"),"\u202f\u202fand\u202f",(0,a.kt)("inlineCode",{parentName:"li"},"documentType=serverDetails"),"\u202f ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dashboard for this data can be instantiated by Importing dashboard template ",(0,a.kt)("inlineCode",{parentName:"li"},"RedisDB")," to the application dashboard")))}g.isMDXComponent=!0}}]);