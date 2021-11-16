# Monitoring HAProxy on Instances 

## Overview

HAProxy is a free, very fast and reliable solution offering high availability, load balancing and proxying for TCP and Http-based applications. HA Proxy monitoring involves monitoring of the following aspects: 

- HA Proxy Access Logs 

- HA Proxy Logs 

- HA Proxy Metrics  

  


## Prerequisites 

 

1. Configure HAProxy Access Logs 

2. Configure HAProxy Stats 

3. Set socket path and enable logs to send desired log file under global section in below haproxy config path. 

   Path:`/etc/haproxy/haproxy.conf` 

   Example

   ```
   global   
       
            stats socket /run/haproxy/admin.sock mode 660 level admin 
       
                       log /dev/log    local0 
   
   ```

    

4. Configure the HAProxy in following manner to enable server logs. 

   - Refer link (https://www.digitalocean.com/community/tutorials/how-to-configure-haproxy-logging-with-rsyslog-on-centos-8-quickstart) for configuration of haproxy to send access logs to a log file in centos also configure Rsyslog to collect haproxy logs. 

   - Create a directory to run haproxy service using sudo. 

     - `Mkdir /run/harpoxy`

   - Under listen section add below lines to capture access logs: 

   - ```
     Capture request header User-Agent len 128. 
     
     log-format %ci: %cp\ [%tr]\ %ft\ %b/%s\ %TR/%Tw/%Tc/%Tr/%Ta\ %ST\ %B\ %CC\ %CS\ %tsc\ %ac/%fc/%bc/%sc/%rc\ %sq/%bq\ %hr\ %hs\ %{+Q}r
     ```

   - Add below line to frontend configuration to capture requests: 

     - `capture request header User-Agent len 128`. 

 

## Configuration 

sfAgent section provides steps to install and automatically generate plugin configurations.  User can also manually add the configuration shown below to `config.yaml` under `/opt/sfagent/` directory. 

```yaml
key: <profile key> 
generate_name: true 
tags: 
  Name: <unique instance name or will be generated from IP> 
  appName: <add application name> 
  projectName: <add project name> 
metrics: 
  metrics: 
  plugins: 
    - name: haproxy     
      enabled: true     
      interval: 30 
logging: 
  plugins: 
    - name: haproxy-access 
          enabled: true 
          config: 
          geo_info: false 
          log_path: /var/log/haproxy.log 
          ua_parser: false 
       - name: haproxy-general 
        enabled: true 
          config: 
            log_level:
            - emerg 
            - alert 
            - error 
        log_path: /var/log/haproxy.log 
```

## Viewing data and dashboards 

Data collected by plugins can be viewed in SnappyFlow’s browse data section under metrics section 

plugin: lsof 

documentType: lsofSummary, lsofstats 

Dashboard template: LSOF 

 

**Test Matrix** 

Ubuntu:  HAproxy version (1.6.3) tested 

Centos: HAproxy version (1.5.18) tested 



 

## See Also 

[Linux Monitoring](/docs/integrations/os/linux/overview) 

[Nginx](/docs/integrations/nginx/overview) 

[Apache Server](/docs/integrations/apache/overview/) 

 

For help with plugins, please reach out to support@snappyflow.io. 

 

 

 

 