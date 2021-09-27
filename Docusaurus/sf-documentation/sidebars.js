/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [  
    {
      type: 'category',
      label: 'Quick Start Guide',
      items: [ 
        {
         type: 'doc',
         id: 'Quick_Start/getting_start',
         label: 'Getting Started',
        },
      ],      
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Tracing', 
      items: [
         {
          type: 'doc',
          id: 'Tracing/overview',
          label: 'Overview',
         },
         {
          type: 'doc',
          id: 'Tracing/java',
          label: 'Java',
         },
         {
          type: 'doc',
          id: 'Tracing/java_v2',
          label: 'Java V2',
         },
         {
          type: 'doc',
          id: 'Tracing/python',
          label: 'Python',
         },
         {
          type: 'doc',
          id: 'Tracing/ruby',
          label: 'Ruby',
         },
         {
          type: 'doc',
          id: 'Tracing/nodejs',
          label: 'NodeJS',
         }, 
         {
          type: 'doc',
          id: 'Tracing/csharp',
          label: 'C#',
         }, 
        ],
  },
  {
    type: 'category',
    label: 'Integrations',
    collapsed: false,
    items: [
      {
       type: 'doc',
       id: 'Integrations/overview',
       label: 'Overview',
      }, 
          {
              JAVA: [
                {
                  type: 'doc',
                  id:  'Integrations/java/overview',
                  label: 'Overview',
                 }, 
                 {
                  type: 'doc',
                  id: 'Integrations/java/java_instance',
                  label: 'Monitoring JAVA on Instances',
                 }, 
                 {
                  type: 'doc',
                  id:  'Integrations/java/java_kubernetes',
                  label: 'Monitoring JAVA on Kubernetes',
                 }, 
                ],
              },
          
          {
              NGINX: [
                {
                  type: 'doc',
                  id:  'Integrations/nginx/overview',
                  label: 'Overview',
                 }, 
                 {
                  type: 'doc',
                  id:  'Integrations/nginx/nginx_instance',
                  label: 'Monitoring Nginx on Instances',
                 }, 
                 {
                  type: 'doc',
                  id:  'Integrations/nginx/nginx_kubernetes',
                  label: 'Monitoring Nginx on Kubernetes',
                 },  
           ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Log Management',
    items:[ 
      {
        type: 'doc',
        id: 'Log_management/log_overview',
        label: 'Log Overview Search',
       },
       {
        type: 'doc',
        id: 'Log_management/feature_extraction',
        label: 'Feature Extraction',
       },
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
      ],
  },
  {
    type: 'category',
    label: 'Dashboards',
    items:[ 
      {
        type: 'doc',
        id:  'Dashboards/getting_started',
        label: 'Getting Started',
       },
       {
        type: 'doc',
        id:  'Dashboards/dashboard_management',
        label: 'Dashboard Management',
       },
     ],
  },
  {
    type: 'category',
    label: 'Alerts & Notifications',
    items:[
      {
        type: 'doc',
        id: 'Alerts_notifications/getting_started',
        label: 'Getting Started',
       },
       {
        type: 'doc',
        id:  'Alerts_notifications/alert_management',
        label: 'Alert Management',
       },
       {
        type: 'doc',
        id: 'Alerts_notifications/slo',
        label: 'SLO',
       }, 
      ],
  },
  {
    type: 'category',
    label: 'sfAgent Installation',
    items:[
      {
        type: 'doc',
        id: 'sfAgent_Linux/sfAgent_installation_in_Linux',
        label: 'sfAgent Installation in Linux',
       }, 
      ],
  },
  {
    type: 'category',
      label: 'New Pages',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'New_pages/kubernetes_monitoring_with_sfPod',
          label: 'Kubernetes Monitoring with sfPod',
         }, 
         {
          type: 'doc',
          id: 'New_pages/prometheus_exporter',
          label: 'Prometheus Exporter ',
         }, 
         {
          type: 'doc',
          id: 'New_pages/go_profiler',
          label: 'Go Profiler',
         }, 
         {
          type: 'doc',
          id: 'New_pages/sfkubeagent_installation',
          label: 'sfKubeAgent Installation',
         }, 
         {
          type: 'doc',
          id: 'New_pages/centralized_logging_of_application_pod_logs',
          label: 'Centralized Logging of Application Pod Logs',
         }, 
         {
          type: 'doc',
          id:  'New_pages/sfagent_windows',
          label: 'Monitoring Windows Instances',
         },
         {
          type: 'doc',
          id: 'New_pages/sfagent_linux',
          label: 'Monitoring Linux Instances',
         },
         {
          type: 'doc',
          id: 'New_pages/sfpoller_setup',
          label: 'sfPoller Setup',
          },
          {
              type: 'doc',
              id: 'New_pages/postgres_instances',
              label: 'Postgres on Instances',
          },
          {
              type: 'doc',
              id: 'New_pages/postgres_kubernetes',
              label: 'Postgres on Kubernetes',
          },
          {
              type: 'doc',
              id: 'New_pages/mysql_instances',
              label: 'MySQL on Instances',
          },
      ],
  },
  ],
};
