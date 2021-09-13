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
      items: ['Quick_Start/getting_start'],
    },
    {
      type: 'category',
      label: 'Tracing',
      items: ['Tracing/overview', 'Tracing/java', 'Tracing/python', 'Tracing/ruby', 'Tracing/nodejs', 'Tracing/csharp'],
  },
  {
    type: 'category',
    label: 'Integrations',
    items:['Integrations/overview', 'Integrations/jvm', 'Integrations/mysql'],
  },
  {
    type: 'category',
    label: 'Log Management',
    items:[ 'Log_management/log_overview', 'Log_management/feature_extraction', 'Log_management/archival', 'Log_management/log_signatures', 'Log_management/etl_jobs'],
  },
  {
    type: 'category',
    label: 'Dashboards',
    items:[ 'Dashboards/getting_started', 'Dashboards/dashboard_management'],
  },
  {
    type: 'category',
    label: 'Alerts & Notifications',
    items:['Alerts_notifications/getting_started', 'Alerts_notifications/alert_management', 'Alerts_notifications/slo'],
  },
   //   [{doc:'Tracing/overview', label: 'Overview'}, {doc:'Tracing/java', label: 'Java'}],
    //},
  ],
};
