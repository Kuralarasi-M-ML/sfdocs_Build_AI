/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {


    // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Quick Start Guide',
            link: {
                type: 'doc',
                id: 'Quick_Start/getting_started'
            },
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'Integrations/os/linux/sfagent_linux',
                    label: 'Monitor a Linux system',
                },
                {
                    type: 'doc',
                    id: 'Integrations/os/windows/sfagent_windows',
                    label: 'Monitor a Windows system',
                },
                {
                    type: 'doc',
                    id: 'Quick_Start/sfpoller_setup',
                    label: 'Monitor Cloud Services',
                },
                {
                    type: 'doc',
                    id: 'Integrations/kubernetes/kubernetes_monitoring_with_sfPod',
                    label: 'Monitor a Kubernetes cluster',
                },
                {
                    type: 'category',
                    label: 'Setup SnappyFlow Self Hosted',
                  
                        collapsed: true,
                        items: [
                            {
                                type: 'doc',
                                id: 'Quick_Start/aws',
                                label: 'AWS',
                            },
                            {
                                type: 'doc',
                                id: 'Quick_Start/azure',
                                label: 'Azure',
                            },
                        ], 
                }, 
            ],
        },
        {
            type: 'category',
            label: 'sfPoller',
            link: {
                type: 'doc',
                id: 'sfPoller/overview'
            },
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'sfPoller/overview',
                    label: 'sfPoller overview',
                },
                {
                    type: 'doc',
                    id: 'sfPoller/aws_setup',
                    label: 'Setup in AWS',
                },
                {
                    type: 'doc',
                    id: 'sfPoller/vcenter_setup',
                    label: 'Setup in vCenter',
                },
                {
                    type: 'doc',
                    id: 'sfPoller/azure_setup',
                    label: 'Setup in Azure',
                }
            ],
        },
        {
            type: 'category',
            label: 'Tracing',
            link: {
                type: 'generated-index',
                title: 'Tracing in SnappyFlow',
                description: 'SnappyFlow supports distributed tracing compliant with Opentracing standard. Tracing allows users to visualize the sequence of steps a transaction (whether API or non-API such as a Celery job) takes during its execution. This analysis is extremely powerful and allows pinpointing the source of problems such as abnormal time being spent on an execution step or identifying point of failure in a transaction. SnappyFlow refers to distributed tracing as sfTrace.',
            },
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'Tracing/java',
                    label: 'Java'
                },
                {
                    type: 'doc',
                    id: 'Tracing/python',
                    label: 'Python'
                },
                {
                    type: 'doc',
                    id: 'Tracing/ruby',
                    label: 'Ruby'
                },
                {
                    type: 'doc',
                    id: 'Tracing/nodejs',
                    label: 'NodeJS'
                },
                {
                    type: 'category',
                    label: 'C#',
                    link: {
                        type: 'doc',
                        id: 'Tracing/csharp',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Tracing/aspdotnetcore',
                            label: 'ASP.NET Core',
                        },
                        {
                            type: 'doc',
                            id: 'Tracing/dotnetframework',
                            label: '.NET Framework',
                        },
                    ]
                },
                {
                    type: 'doc',
                    id: 'Tracing/go',
                    label: 'GO'
                },
                {
                    type: 'category',
                    label: 'Advanced Tracing Feature',
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Tracing/advanced/trace_history',
                            label: 'Trace History',
                        }
                    ]
                },
            ],


        },
        {
            type: 'category',
            label: 'Integrations',
            link: {
                type: 'doc',
                id: 'Integrations/overview'
            },
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'Integrations/activemq',
                    label: 'ActiveMQ',
                },
                {
                    type: 'doc',
                    id: 'Integrations/apache/overview',
                    label: 'Apache',
                },
                {
                    type: 'doc',
                    id: 'Integrations/aws_lambda',
                    label: 'AWS Lambda',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/aws',
                    label: 'AWS',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/azuredb',
                    label: 'AzureDB',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/azurelog',
                    label: 'AzureLog',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/blazemeter',
                    label: 'Blaze Meter',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/blob',
                    label: 'Blob',
                },
                {
                    type: 'category',
                    label: 'Clickhouse',
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/clickhouse_kubernetes',
                            label: 'Clickhouse on Kubernetes',
                        },
                    ]
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/configUpdate',
                    label: 'Configuration Update',
                },
                {
                    type: 'doc',
                    id: 'Integrations/elb/elb_rds',
                    label: 'Elastic Load Balancer',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/elb',
                    label: 'ELB',
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/elblogs',
                    label: 'ELB Logs',
                },
                {
                    type: 'category',
                    label: 'GO',
                    link: {
                        type: 'doc',
                        id: 'Integrations/go/profiler',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/go/profiler',
                            label: 'Go Profiler',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'Integrations/haproxy',
                    label: 'HAProxy',
                },
                {
                    type: 'doc',
                    id: 'Integrations/hcp_consul',
                   label: 'HCP Consul',
                },
                {
                    type: 'category',
                    label: 'IIS',
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/iis/iis_windows',
                            label: 'IIS in Windows'
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/iis/iis_setup',
                            label: 'IIS Web Server and Access Logging Setup'
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'JAVA',
                    link: {
                        type: 'doc',
                        id: 'Integrations/java/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/java/java_instances',
                            label: 'Monitoring JAVA on Instances',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/java/java_kubernetes',
                            label: 'Monitoring JAVA in Kubernetes',
                        },
                        {
                            Profiler: [
                                {
                                    type: 'doc',
                                    id: 'Integrations/java/java_profiler_cpu',
                                    label: 'CPU',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/java/java_profiler_memory',
                                    label: 'Memory',
                                },
                            ],

                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'Integrations/jboss',
                    label: 'JBoss',
                },
                {
                    type: 'category',
                    label: 'Kafka',
                    link: {
                        type: 'doc',
                        id: 'Integrations/kafka/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/kafka/kafka_kubernetes',
                            label: 'Kafka in Kubernetes'
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/kafka/kafka_instances',
                            label: 'Kafka on Instances',
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Kubernetes',
                    link: {
                        type: 'doc',
                        id: 'Integrations/kubernetes/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/kubernetes/kubernetes_monitoring_with_sfPod',
                            label: 'Kubernetes Monitoring with sfPod',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/kubernetes/sfkubeagent_installation',
                            label: 'Monitoring Application Pods with sfKubeAgent',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/kubernetes/prometheus_exporter',
                            label: 'Prometheus Exporter',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/kubernetes/centralized_logging_of_application_pod_logs',
                            label: 'Centralized Logging of Application Pods',
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'Integrations/mongodb',
                    label: 'MongoDB',
                },
                {
                    type: 'category',
                    label: 'MS SQL',
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/mssql_windows',
                            label: 'MS SQL on Instances',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/plugin/mssql',
                            label: 'MS SQL in Kubernetes',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'MySQL',
                    link: {
                        type: 'doc',
                        id: 'Integrations/mysql/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/mysql/mysql_instances',
                            label: 'MySQL on Instances',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/mysql/mysql_kubernetes',
                            label: 'MySQL in Kubernetes',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/mysql/mysql_windows',
                            label: 'MySQL on Windows',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/mysql/mysql_sfpoller',
                            label: 'MySQL with sfPoller',
                        },
                    ],
                },

                {
                    type: 'category',
                    label: 'Nginx',
                    link: {
                        type: 'doc',
                        id: 'Integrations/nginx/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/nginx/nginx_instance',
                            label: 'Monitoring Nginx on Instances',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/nginx/nginx_kubernetes',
                            label: 'Monitoring Nginx in Kubernetes',
                        },
                    ],
                },

                {
                    type: 'category',
                    label: 'Operating Systems',
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'Linux',
                            link: {
                                type: 'doc',
                                id: 'Integrations/os/linux/overview',
                            },
                            collapsed: true,
                            items: [
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/sfagent_linux',
                                    label: 'sfAgent Installation on Linux',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/linux_os',
                                    label: 'Monitoring Linux OS',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/cpuloadstats_plugin',
                                    label: 'CPU Load',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/filestats_plugin',
                                    label: 'File Stats',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/netstat',
                                    label: 'Netstat',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/psutil',
                                    label: 'PSUtil',
                                },
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/linux/lsof',
                                    label: 'LSOF',
                                },

                            ],
                        },
                        {
                            type: 'category',
                            label: 'Windows',
                            collapsed: true,
                            items: [
                                {
                                    type: 'doc',
                                    id: 'Integrations/os/windows/sfagent_windows',
                                    label: 'sfAgent installation on Windows',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'doc',
                    id: 'Integrations/plugin/oracleASH',
                    label: 'Oracle ASH',
                },
                {
                    type: 'category',
                    label: 'Postgres',
                    link: {
                        type: 'doc',
                        id: 'Integrations/postgres/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/postgres/postgres_instances',
                            label: 'Postgres on Instances',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/postgres/postgres_kubernetes',
                            label: 'Postgres in Kubernetes',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/postgres/postgres_sfpoller',
                            label: 'Postgres with sfPoller',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'RabbitMQ',
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/rabbitmqinstance',
                            label: 'RabbitMQ on Instances',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/rabbitmqkubernet',
                            label: 'RabbitMQ in Kubernetes',
                        },
                    ]
                },
                // {
                //     type: 'doc',
                //     id: 'Integrations/redis',
                //     label: 'Redis',
                // },
                {
                    type: 'doc',
                    id: 'Integrations/redis_sentinel',
                    label: 'Redis Sentinel',
                },
                {
                    type: 'category',
                    label: 'Redis',  
                    link: {
                        type: 'doc',
                        id: 'Integrations/redis/overview'
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/redis/redis_instance',
                            label: 'Redis Instance',
                        },
                        {
                            type: 'doc',
                            id: 'Integrations/redis/redis_kubernetes',
                            label: 'Redis Kubernetes',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'StatsD',
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/statsd/custom_monitoring',
                            label: 'Custom Monitoring using StatsD',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Tomcat',
                    link: {
                        type: 'doc',
                        id: 'Integrations/tomcat/overview',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'Integrations/tomcat/tomcat_windows',
                            label: 'Tomcat in Windows'
                        },
                    ]
                },
                {
                    type: 'doc',
                    id: 'Integrations/tripwire',
                    label: 'TripWire',
                }, 
                {
                    type: 'doc',
                    id: 'Integrations/plugin/vcenter',
                    label: 'vCenter',
                },

                {
                    type: 'doc',
                    id: 'Integrations/zookeeper',
                    label: 'ZooKeeper',
                },





            ],
        },
        {
            type: 'category',
            label: 'Profiling',

            link: {
                type: 'generated-index',
                title: 'Profiling',
                image: '/img/docusaurus.png',
            },
            items: [
                'Integrations/go/profiler',
                {
                    type: 'category',
                    label: 'Java',
                    link: {
                        type: 'doc',
                        id: 'Integrations/java/java_profiler_cpu',
                    },
                    items: ['Integrations/java/java_profiler_cpu', 'Integrations/java/java_profiler_memory']
                },
            ],
            collapsed: true,
            //   items: ['Integrations/go/profiler', 'Integrations/java/java_profiler_cpu'], 
        },
        {
            type: 'category',
            label: 'Log Management',
            link: {
                type: 'doc',
                id: 'Log_management/log_overview',
            },
            collapsed: true,
            items: [
            
            
                {
                    type: 'category',
                    label: 'Feature Extraction',
                    link: {
                        type: 'doc',
                        id: 'Log_management/feature_extraction',
                    },
                    collapsed: false,
                    items: [
                        {
                            type: 'doc',
                            id: 'Log_management/skip_functions',
                            label: 'Skip Functions'
                        },
                        {
                            type: 'doc',
                            id: 'Log_management/extract_functions',
                            label: 'Extract Functions'
                        },
                    ]
                },




                //{
                //   type: 'doc',
                //    id: 'Log_management/feature_extraction',
                //    label: 'Feature Extraction',
                //},
                //{
                //    type: 'doc',
                //    id: 'Log_management/skip_functions',
                //    label: 'Skip Functions',
                //},
                //{
                //   type: 'doc',
                //    id: 'Log_management/extract_functions',
                //    label: 'Extract Functions',
                //},
                {
                    type: 'doc',
                    id: 'Log_management/archival',
                    label: 'Archival',
                },
                {
                    type: 'doc',
                    id: 'Log_management/log_signatures',
                    label: 'Log Signatures',
                },
                {
                    type: 'doc',
                    id: 'Log_management/etl_jobs',
                    label: 'ETL Jobs',
                },
                {
                    type: 'doc',
                    id: 'Log_management/custom_log',
                    label: 'Custom Log Overview',
                },
            ],
        },
        {
            type: 'category',
            label: 'Dashboards',
            link: {
                type: 'generated-index',
                title: 'Dashboards'
            },
            collapsed: true,
            items: ['Dashboards/getting_started', 'Dashboards/dashboard_management'],
        },
        {
            type: 'category',
            label: 'Alerts & Notifications',
            link: {
                type: 'doc',
                id: 'Alerts_notifications/getting_started',
            },
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: 'Alerts_notifications/getting_started',
                    label: 'Alerts overview',
                },
                {
                    type: 'doc',
                    id: 'Alerts_notifications/slo',
                    label: 'SLO',
                },
                {
                    type: 'doc',
                    id: 'Alerts_notifications/pager_duty',
                    label: 'Pager Duty',
                },
                {
                    type: 'doc',
                    id: 'Alerts_notifications/slack',
                    label: 'Slack',
                },
            ],
        },
        {
            type: 'category',
            label: 'Real User Monitoring',
            link: {
                type: 'doc',
                id: 'RUM/RUM_documentation',
            },
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Agent Installation',
                    link: {
                        type: 'doc',
                        id: 'RUM/RUM_agent_installation',
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'doc',
                            id: 'RUM/agent_installation/angular',
                            label: 'Angular'
                        },
                        {
                            type: 'doc',
                            id: 'RUM/agent_installation/react',
                            label: 'React'
                        },
                        {
                            type: 'doc',
                            id: 'RUM/agent_installation/nextjs',
                            label: 'Nextjs'
                        },
                        {
                            type: 'doc',
                            id: 'RUM/agent_installation/others',
                            label: 'Others'
                        }
                    ]
                },
                {
                    type: 'doc',
                    id: 'RUM/RUM_Dashboard',
                    label: 'RUM Dashboard',
                },
                {
                    type: 'doc',
                    id: 'RUM/RUM_Metrics',
                    label: 'Performance Metrics',
                },
                {
                    type: 'doc',
                    id: 'RUM/RUM_Glossary',
                    label: 'Glossary',
                }
            ],
        },
        {
            type: 'category',
            label: 'Synthetic Monitoring',
            link: {
                type: 'doc',
                id: 'Synthetic/overview',
            },
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    label: 'Overview',
                    id: 'Synthetic/overview', 
                } 

            ],
        },
 
    ],
};
