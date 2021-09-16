import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Quick Start Guide',
    Png: require('../../static/img/getting-started-icon.png').default,
    list: [
      {
        label: "Getting Started",
        url: '/docs/Quick_Start/getting_start'
      }
    ]
  },
  {
    title: 'Integrations',
    Png: require('../../static/img/integrations-icon.png').default,
    list: [
      {
        label: "Overview",
        url: '/docs/Integrations/overview'
      },
      {
        label: "JVM",
        url: '/docs/Integrations/jvm'
      },
      {
        label: "MYSQL",
        url: '/docs/Integrations/mysql'
      }
    ]
  },
  {
    title: 'Dashboards',
    Png: require('../../static/img/dashboards-icon.png').default,
    list: [
      {
        label: "Getting Started",
        url: '/docs/Dashboards/getting_started'
      },
      {
        label: "Dashboard Management",
        url: '/docs/Dashboards/dashboard_management'
      }
    ]
  },
  {
    title: 'Tracing',
    Png: require('../../static/img/tracing-icon.png').default,
    list: [
      {
        label: "Overview",
        url: '/docs/Tracing/overview'
      },
      {
        label: "Java",
        url: '/docs/Tracing/java'
      },
      {
        label: "Python",
        url: '/docs/Tracing/python'
      },
      {
        label: "Ruby",
        url: '/docs/Tracing/ruby'
      },
      {
        label: "NodeJS",
        url: '/docs/Tracing/nodejs'
      },
      {
        label: "C#",
        url: '/docs/Tracing/csharp'
      }
    ]
  },
  {
    title: 'Log Management',
    Png: require('../../static/img/log-management-icon.png').default,
    list: [
      {
        label: "Log Overview Search",
        url: '/docs/Log_management/log_overview'
      },
      {
        label: "Feature Extraction",
        url: '/docs/Log_management/feature_extraction'
      },
      {
        label: "Archival",
        url: '/docs/Log_management/archival'
      },
      {
        label: "Log Signatures",
        url: '/docs/Log_management/log_signatures'
      },
      {
        label: "ETL Jobs",
        url: '/docs/Log_management/etl_jobs'
      }
    ]
  },
  {
    title: 'Alerts & Notifications',
    Png: require('../../static/img/alerts-notification-icon.png').default,
    list: [
      {
        label: "Getting Started",
        url: '/docs/Alerts_notifications/getting_started'
      },
      {
        label: "Alert Management",
        url: '/docs/Alerts_notifications/alert_management'
      },
      {
        label: "SLO",
        url: '/docs/Alerts_notifications/slo'
      }
    ]
  },
  {
    title: 'sfAgent Installation',
    Png: require('../../static/img/alerts-notification-icon.png').default,
    list: [
      {
        label: "sfAgent Installation in Linux",
        url: '/docs/sfAgent_Linux/sfAgent_installation_in_Linux'
      } 
    ]
  },
];
function Feature({ Png, title, list }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padLR">
        <div className={styles.treePanel}>
          <h4> <img src={Png} alt={title} />{title}</h4>
          <ul className={styles.treeView}>
            {
              list.map((items) => (
                <li>
                  {/* <div className={styles.brd_left_line}></div> */}
                  <a href={items.url}>{items.label}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.docContainer}>
        {/* <h4><img src="../../static/img/documentation-big-icon.png" /> <span>Documentation</span></h4> */}
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}