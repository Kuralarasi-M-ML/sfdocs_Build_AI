"use strict";(self.webpackChunksf_documentation=self.webpackChunksf_documentation||[]).push([[9536],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7301:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),o=["components"],i={},s="Clickhouse on Kubernetes",u={unversionedId:"Integrations/clickhouse_kubernetes",id:"Integrations/clickhouse_kubernetes",title:"Clickhouse on Kubernetes",description:"Clickhouse\u202frunning\u202fin\u202fKubernetes\u202fcan\u202fbe\u202fmonitored\u202fin\u202fSnappyFlow\u202fusing\u202fPrometheus\u202fexporter.",source:"@site/docs/Integrations/clickhouse_kubernetes.md",sourceDirName:"Integrations",slug:"/Integrations/clickhouse_kubernetes",permalink:"/docs/Integrations/clickhouse_kubernetes",editUrl:"https://github.com/ram-dot-kumar/SFwebsite.git/docs/Integrations/clickhouse_kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blob",permalink:"/docs/Integrations/plugin/blob"},next:{title:"Configuration Update Feature (Linux & Windows)",permalink:"/docs/Integrations/plugin/configUpdate"}},d={},m=[{value:"Clickhouse monitoring with Prometheus",id:"clickhouse-monitoring-with-prometheus",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Metrics list",id:"metrics-list",level:3},{value:"Cluster Details",id:"cluster-details",level:5},{value:"Host Details",id:"host-details",level:5},{value:"TableStats",id:"tablestats",level:5},{value:"Configuration\u202f",id:"configuration",level:2},{value:"Viewing data and dashboards",id:"viewing-data-and-dashboards",level:2}],p={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-on-kubernetes"},"Clickhouse on Kubernetes"),(0,l.kt)("p",null,"Clickhouse\u202frunning\u202fin\u202fKubernetes\u202fcan\u202fbe\u202fmonitored\u202fin\u202fSnappyFlow\u202fusing\u202fPrometheus\u202fexporter."),(0,l.kt)("h2",{id:"clickhouse-monitoring-with-prometheus"},"Clickhouse monitoring with Prometheus"),(0,l.kt)("p",null,"Refer to Prometheus Exporter overview to understand how SnappyFlow monitors using Prometheus exporters."),(0,l.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,l.kt)("p",null," Prometheus exporter is deployed as a side-car in the application container and the exporter port is accessible to sfPod"),(0,l.kt)("h3",{id:"metrics-list"},"Metrics list"),(0,l.kt)("h5",{id:"cluster-details"},"Cluster Details"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DNSError"),(0,l.kt)("td",{parentName:"tr",align:null},"Total count of errors in DNS resolution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DelayedInserts"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of times the INSERT of a block to a MergeTree table was throttled due to high number of active data parts for partition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ContextLocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of times the lock of Context was acquired or tried to acquire. This is global lock.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergedUncompressedBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Uncompressed bytes (for columns as they stored in memory) that was read for background merges. This is the number before merge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergesTimeMilliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent for background merges.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DiskReadElapsedMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent waiting for read syscall. This include reads from page cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DiskWriteElapsedMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent waiting for write syscall. This include writes to page cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergeTreeDataWriterCompressedBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Bytes written to filesystem for data INSERTed to MergeTree tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergeTreeDataWriterRows"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rows INSERTed to MergeTree tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NumberOfTables"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tables")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InsertedBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of bytes (uncompressed; for columns as they stored in memory) INSERTed to all tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InsertedRows"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rows INSERTed to all tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Merge"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of launched background merges.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of queries to be interpreted and potentially executed. Does not include queries that failed to parse or were rejected due to AST size limits, quota limits or limits on the number of simultaneously running queries. May include internal queries initiated by ClickHouse itself. Does not count subqueries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FailedQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of failed queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SelectQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as Query, but only for SELECT queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FailedSelectQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as FailedQuery, but only for SELECT queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileopen"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of files opened.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NumberOfDatabases"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of databases")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReadonlyReplica"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Replicated tables that are currently in readonly state due to re-initialization after ZooKeeper session loss or due to startup without ZooKeeper configured.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OSCPUWaitMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time a thread was ready for execution but waiting to be scheduled by OS, from the OS point of view.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OSIOWaitMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time a thread spent waiting for a result of IO operation, from the OS point of view. This is real IO that doesn't include page cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UserTimeMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent in processing (queries and other tasks) threads executing CPU instructions in user space. This include time CPU pipeline was stalled due to cache misses, branch mispredictions, hyper-threading, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OSWriteBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of bytes written to disks or block devices. Doesn't include bytes that are in page cache dirty pages. May not include data that was written by OS asynchronously.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"QueryDuration  (Prom Metric: chi_clickhouse_event_RealTimeMicroseconds)"),(0,l.kt)("td",{parentName:"tr",align:null},"Total (wall clock) time spent in processing (queries and other tasks) threads (not that this is a sum).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergedRows"),(0,l.kt)("td",{parentName:"tr",align:null},"Rows read for background merges. This is the number of rows before merge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LongestRunningQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Longest running query time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HardPageFaults"),(0,l.kt)("td",{parentName:"tr",align:null},"An exception that the memory management unit (MMU) raises when a process accesses a memory page without proper preparations")))),(0,l.kt)("h5",{id:"host-details"},"Host Details"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DNSError"),(0,l.kt)("td",{parentName:"tr",align:null},"Total count of errors in DNS resolution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Httpconnection"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of connections to HTTP server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CompressedReadBufferBlocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of compressed blocks (the blocks of data that are compressed independent of each other) read from compressed sources (files, network)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CompressedReadBufferBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of uncompressed bytes (the number of bytes after decompression) read from compressed sources (files, network).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DiskReadElapsedMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent waiting for read syscall. This include reads from page cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DiskWriteElapsedMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent waiting for write syscall. This include writes to page cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergeTreeDataWriterCompressedBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Bytes written to filesystem for data INSERTed to MergeTree tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergeTreeDataWriterRows"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rows INSERTed to MergeTree tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DistributedConnectionFailAtAll"),(0,l.kt)("td",{parentName:"tr",align:null},"Total count when distributed connection fails after all retries finished")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InsertQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as Query, but only for INSERT queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NumberOfTables"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tables")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query Threads"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of query processing threads")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeperUserExceptions"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper User Exceptions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BackgroundDistributedSchedulePoolTask"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of active tasks in          BackgroundDistributedSchedulePool. This pool is used for distributed sends that is done in background.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BackgroundMovePoolTask"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of active tasks in BackgroundProcessingPool for moves")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BackgroundSchedulePoolTask"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of active tasks in BackgroundSchedulePool. This pool is used for periodic ReplicatedMergeTree tasks, like cleaning old data parts, altering data parts, replica re-initialization, etc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ContextLocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of times the lock of Context was acquired or tried to acquire. This is global lock.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ContextLockWait"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of threads waiting for lock in Context. This is global lock.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GlobalThreadActive"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of threads in global thread pool running a task.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GlobalThreadTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of threads in global thread pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LocalThreadActive"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of threads in local thread pools running a task.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LocalThreadTotal"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of threads in local thread pool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PartMutation"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of mutations (ALTER DELETE/UPDATE)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FailedQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of failed queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SelectQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as Query, but only for SELECT queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FailedSelectQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as FailedQuery, but only for SELECT queries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fileopen"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of files opened.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergedRows"),(0,l.kt)("td",{parentName:"tr",align:null},"Rows read for background merges. This is the number of rows before merge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Merge"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of launched background merges.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of queries to be interpreted and potentially executed. Does not include queries that failed to parse or were rejected due to AST size limits, quota limits or limits on the number of simultaneously running queries. May include internal queries initiated by ClickHouse itself. Does not count subqueries.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InsertedBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of bytes (uncompressed; for columns as they stored in memory) INSERTed to all tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"InsertedRows"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rows INSERTed to all tables.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergedUncompressedBytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Uncompressed bytes (for columns as they stored in memory) that was read for background merges. This is the number before merge.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MergesTimeMilliseconds"),(0,l.kt)("td",{parentName:"tr",align:null},"Total time spent for background merges.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReplicasMaxInsertsInQueue"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReplicasMaxMergesInQueue"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReplicasSumInsertsInQueue"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ReplicasSumMergesInQueue"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jemalloc_background_thread_num_runs"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MaxPartCountForPartition"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MemoryTrackingForMerges"),(0,l.kt)("td",{parentName:"tr",align:null},"Total amount of memory (bytes) allocated for background merges. Included in MemoryTrackingInBackgroundProcessingPool. Note that this value may include a drift when the memory was allocated in a context of background processing pool and freed in other context or vice-versa. This happens naturally due to caches for tables indexes and doesn't indicate memory leaks.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeperWaitMicroseconds"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ArenaAllocBytes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h5",{id:"tablestats"},"TableStats"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NumPartitions"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of partitions of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NumTableParts"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of parts of the table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TableSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Table size in bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NumRow"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rows in the table")))),(0,l.kt)("h2",{id:"configuration"},"Configuration\u202f"),(0,l.kt)("p",null,"Clickhouse Deployment.yaml: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: clickhouse-operator\nspec:\n  selector:\n    matchLabels:\n      app: clickhouse-operator\n  template:\n    metadata:\n      annotations:\n        prometheus.io/port: "8888"\n        prometheus.io/scrape: "true"\n      labels:\n        app: clickhouse-operator\n    spec:\n      containers:\n      - env:\n        - name: OPERATOR_POD_NODE_NAME\n          valueFrom:\n            fieldRef:\n              apiVersion: v1\n              fieldPath: spec.nodeName\n        image: altinity/clickhouse-operator:0.10.0\n        imagePullPolicy: Always\n        name: clickhouse-operator\n        volumeMounts:\n        - mountPath: /etc/clickhouse-operator\n          name: etc-clickhouse-operator-folder\n        - mountPath: /etc/clickhouse-operator/conf.d\n          name: etc-clickhouse-operator-confd-folder\n        - mountPath: /etc/clickhouse-operator/config.d\n          name: etc-clickhouse-operator-configd-folder\n        - mountPath: /etc/clickhouse-operator/templates.d\n          name: etc-clickhouse-operator-templatesd-folder\n        - mountPath: /etc/clickhouse-operator/users.d\n          name: etc-clickhouse-operator-usersd-folder\n      - image: altinity/metrics-exporter:0.10.0\n        imagePullPolicy: Always\n        name: metrics-exporter\n        ports:\n        - containerPort: 8888\n          name: metrics\n          protocol: TCP\n        volumeMounts:\n        - mountPath: /etc/clickhouse-operator\n          name: etc-clickhouse-operator-folder\n        - mountPath: /etc/clickhouse-operator/conf.d\n          name: etc-clickhouse-operator-confd-folder\n        - mountPath: /etc/clickhouse-operator/config.d\n          name: etc-clickhouse-operator-configd-folder\n        - mountPath: /etc/clickhouse-operator/templates.d\n          name: etc-clickhouse-operator-templatesd-folder\n        - mountPath: /etc/clickhouse-operator/users.d\n          name: etc-clickhouse-operator-usersd-folder\n      volumes:\n      - configMap:\n          defaultMode: 420\n          name: etc-clickhouse-operator-files\n        name: etc-clickhouse-operator-folder\n      - configMap:\n          defaultMode: 420\n          name: etc-clickhouse-operator-confd-files\n        name: etc-clickhouse-operator-confd-folder\n      - configMap:\n          defaultMode: 420\n          name: etc-clickhouse-operator-configd-files\n        name: etc-clickhouse-operator-configd-folder\n      - configMap:\n          defaultMode: 420\n          name: etc-clickhouse-operator-templatesd-files\n        name: etc-clickhouse-operator-templatesd-folder\n      - configMap:\n          defaultMode: 420\n          name: etc-clickhouse-operator-usersd-files\n        name: etc-clickhouse-operator-usersd-folder\n\u202f \n')),(0,l.kt)("h2",{id:"viewing-data-and-dashboards"},"Viewing data and dashboards"),(0,l.kt)("p",null,"Data collected by plugins can be viewed in SnappyFlow\u2019s browse data section\u202f  \u202f\u202f "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plugin = ",(0,l.kt)("inlineCode",{parentName:"li"},"kube-prom-clickhouse")," "),(0,l.kt)("li",{parentName:"ul"},"documentType= ",(0,l.kt)("inlineCode",{parentName:"li"},"clusterDetails, hostDetails, tableStats")," "),(0,l.kt)("li",{parentName:"ul"},"Dashboard template: ",(0,l.kt)("inlineCode",{parentName:"li"},"Clickhouse_Kube_Prom"))))}c.isMDXComponent=!0}}]);