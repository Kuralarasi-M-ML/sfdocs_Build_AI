# TRACING JAVA APPLICATIONS

**Supported Versions**

sfTrace Java Agent automatically instruments various APIs,  frameworks and application servers. Currently, sfTrace supports the following:   

**Supported Java versions**

Oracle JDK: 7u60+, 8u40+, 9, 10, 11 
Open JDK: 7u60+, 8u40+, 9, 10, 11​ 

**Supported Web Frameworks**

Spring Web MVC 4.x, 5.x 
Spring Boot 1.5+, 2.x supports embedded Tomcat​ 
JAX-RS 2.x ​ 
JAX-WS ​ 

**Supported Application Servers**

Tomcat 7.x, 8.5.x, 9.x 
Wildfly 8-16​ 
JBoss EAP 6.4, 7.0, 7.1, 7.2​

### Choose your platform

<ul class="icon_list">
<li><A target="#javaInstance"><img src="images/instances-logo.png" > <div>Instance</div></a></li>
<li><img src="images/kubernetes-logo.png"> <div>Kubernetes</div></li>
<li><img src="images/docker-logo.png"> <div>Docker</div></li>
<li><img src="images/amazon-ecs-logo.png"> <div>ECS</div></li>
<li ><img src="images/lambda-functions-logo.png"> <div>Lambda <br/>Function</div></li>
</ul>  

<div id="javaInstance"></div>

## Instances

Install sfAgent which automatically installs sfTrace agent as well.

Link the application with sfTrace Java Agent 

##### Command line

Use the following arguments while starting your application using java –jar command, in IDE, Maven or Gradle script: 

```
java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar -Dsftrace.service_name=<my-service> -jar <application jar> 
```

Note: If service_name is not provided, an auto discovered service name will be added. Service_name is used to identify and filter the traces related to an application and should be named appropriately to distinctly identify it. Service name must only contain characters from the ASCII alphabet, numbers, dashes, underscores and spaces. 

##### Apache Tomcat 

Add the agent configuration in setenv.sh. If this file is not present,  create the file in below folder

```
<tomcat installation path>/bin
```

Refer to [tomcat_setenv.sh](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/tomcat_setenv.sh)  for tracing specific configuration that needs to be copied to setenv.sh file. 

Make the file executable using chmod +x bin/setenv.sh and start the server 

##### JBoss EAP/WildFly 

###### Standalone Mode 

Add the agent configuration in standalone.conf file and start the server 

Refer to [JBOSS_standalone.conf](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/JBOSS_standalone.conf" /t "_blank)   for tracing specific configuration. Copy from section with “SFTRACE-CONFIG” in comments 

###### Domain Mode

Add the agent configuration in domain.xml and start the server 

Refer to [JBOSS_domain.xml](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/JBOSS_domain.xml)  for tracing specific configuration. Copy from section with “SFTRACE-CONFIG” in comments 

After updating the configuration, restart the application. 

##### Additional features available for Spring Boot Applications

By default, transaction names of unsupported Servlet API-based frameworks are in the form of $method unknown route. To modify this and to report the transactions names in the form of $method $path, use the following in javaagent configuration. This option is applicable only for spring-boot based applications.

```
-Delastic.apm.disable_instrumentations=spring-mvc  
-Delastic.apm.use_path_as_transaction_name=true 
```

###### Normalizing Transaction URLs

If your URLs contain path parameters like /user/$userId, it can lead to an explosion of transaction types. This can be avoided by using URL groups.

For example, if the application supports urls like: 

```
/owners, /owners/<owner_id>, /owners/<owner_id>/edit, /owners/<owner_id>/pets, 
```

then url groups would be configured as: 

```
url_groups=/owners/*,/owner/*/edit,/owners/*/pets 
```

###### Example of running java application via command line using these parameters

```
java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar 
-Dsftrace.service_name=my-service 
-Delastic.apm.disable_instrumentations=spring-mvc 
–Delastic.apm.use_path_as_transaction_name=true 
–Delastic.apm.url_groups=/owners/*,/owner/*/edit,/owners/*/pets -jar <application jar> 
```

## Docker

Refer to [java_Dockerfile](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_Dockerfile) . Look at sections with SFTRACE-CONFIG description. 

Installation steps are provided. copy the trace agent to the container and start the container by attaching the agent to the application. Additionally, user has to add SnappyFlow configurations for profile_key, projectName, appName to the docker file 

Once updated, build and start the container.

## Kubernetes

sfTrace is run as an initContainer in the application pod. User can deploy this either using a manifest yaml or a Helm chart. 

###### Example of Manifest yaml 

[java_k8s_standalone_deployment.yaml](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_k8s_standalone_deployment.yaml)  

###### Example of a Helm chart 

**Update values.yaml**: Refer to [java_k8s_with_helm_chart_values.yaml](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_k8s_with_helm_chart_values.yaml)  to configure agent specific properties. Look at sections with SFTRACE-CONFIG description 

**Update deployment.yam**l: Refer to [java_k8s_with_helm_chart_deployment.yaml](https://github.com/snappyflow/website-artefacts/blob/master/sfTracing/java/java_k8s_with_helm_chart_deployment.yaml)  to copy trace agent to the container and start the container by attaching  the agent. Look at sections with SFTRACE-CONFIG description 

## **ECS** 

- Create the Task definition - Open Amazon ECS, in navigation pane, choose task definition and click on Create New Task Definition and select the launch type as EC2 or  Fargate, click on Next step. 
- Give the Task definition Name 
- Task Role, choose an IAM role that provides permissions for containers in  your task to make calls to AWS APIs on your behalf and Network Mode
- Click on Add containers. Give a Container name, and give the Image of your Java Application. Set Memory limit and port mappings as per your task requirements. In the environment section, for Entry Point give sh , -c For Command paste the following lines 

```
mkdir /sfagent && wget -O /sfagent/sftrace-agent.tar.gz
https://github.com/snappyflow/apm-agent/releases/download/latest/sftrace-agent.tar.gz && cd /sfagent && tar -xvzf sftrace-agent.tar.gz && java -javaagent:/sfagent/sftrace/java/sftrace-java-agent.jar -jar <your_jar_name>
```

## Lambda functions

coming soon !
