# Setting up SnappyFlow in your own environment

SnappyFlow can be consumed via SnappyFlow Cloud or it can be setup in your own environment such as on-prem data center or it can be setup in your cloud account in AWS and Azure.

:::caution

The below guide is applicable for setups with an **ingest rate below 500 GB/day**. For higher ingest rates, reach out to support@snappyflow.io

:::

## What you need to get started

- A SnappyFlow account. An account can be created [here](https://accounts.snappyflow.io).

- An approximate idea of your monthly ingest rates. The more accurate your data is, the better. This data is useful to ensure right sizing of your infrastructure

## Size your infrastructure using the sizing tool

SnappyFlow providesHead to accounts.snappyflow.io and use your SnappyFlow credentials to login. Once logged in, click on Pricing Calculator.

Choose your cloud platform and select the region where you want to deploy SnappyFlow. The region can be changed at a later stage too.

<img src="/img/snappyflow_self_hosted/select_cloud.png" />

### Total ingest rate ###
In the configuration page, enter the total ingest rate for your stack. This ingest rate is the daily average sum of all logs, metrics and traces. The tool automatically assumes a breakup between logs, metrics and traces and you can also manually adjust this breakup to match your stack needs or leave it at its default value.

<img src="/img/snappyflow_self_hosted/ingest_configuration.png" />

### Data retention ###
The next input on data retention defines how long the ingested data is retained in a high-performance storage. A very high data retention can significantly increase storage requirements and costs. 

<img src="/img/snappyflow_self_hosted/data_retention.png" />

### Extended backup ###
Using extended backup is one way to reduce infrastructure costs. All metrics and logs stored in the backup can easily be retrieved for easy visualizations. This backup is available only for metrics and logs. Any ingested log or metric that ages beyond the primary data retention period defined in the previous section is backed up in a low cost storage service.
<img src="/img/snappyflow_self_hosted/extended_backup.png" />

### Backup for SnappyFlow account data ###
It is recommended to create a backup for SnappyFlow account data. This account data is stored in a dedicated database. This helps in quick recovery in case of cloud infrastructure failures. This database stores all account and configuration information. 

<img src="/img/snappyflow_self_hosted/dedicated_backup.png" />

Click on Calculate Price button to continue.

### Cost summary ###

A summary of the infrastructure required and their cost is provided on the right. By default, a 1 year reserved instance pricing is taken. The tool also provides a list of alternate servers that can be choose either for better performance or for optimizing costs.

<img src="/img/snappyflow_self_hosted/cost_summary.png" />

## Dowload template to create SnappyFlow stack ##

Click on the Download button at the end of the infrastructure summary to get a template depending on the choice of cloud platform selected.

For AWS, a `Cloud Formation Template` is provided.

For Azure, a `Custom Template` is provided.

These templates are pre-loaded with the required stack information such as server types, quantities and help you quickly launch a SnappyFlow stack.

## Create SnappyFlow stack on AWS

### Pre-Requisites ###

- AWS account
- Pre-configured IAM roles with appropriate access levels

### Uploading the template ###

Sign into your AWS console. Search for `Cloudformation` using the search bar on top and select the `CloudFormation` service.

<img src="/img/snappyflow_self_hosted/cloudformation.png" />

Click on `Create Stack` and select `With new resources` option.

<img src="/img/snappyflow_self_hosted/aws_create_stack.png" />

Select `Template is ready` and upload the template provided by SnappyFlow sizing tool and click `Next`.

<img src="/img/snappyflow_self_hosted/aws_create_stack_2.png" />



### Configuration ###

In this page, provide a stack name and configure subnets and IAM Roles required for the stack.

<img src="/img/snappyflow_self_hosted/aws_stack_configuration.png" />



**Deployment**

Choose Recommended

**Database Type**

If a backup for SnappyFlow account is required, choose 'RDS'. Else select 'Local'

**Private Subnet**

APM and Opensearch instances will be created under selected Subnets. If RDS is selected as DatabaseType, add two subnets with same VPC and different availability zones, as RDS creation needs to cover all availability zones in the region. APM and Opensearch instances will be created with first subnet(first selection in checkbox) !!!

:::note
If DatabaseType is chosen as RDS, provide two Private Subnets. Without two separate subnets, stack creation will fail.
:::

**Public Subnet**

Loadbalancer and bastion will be created under this Subnet. Select public subnet of availibility zone same as first PrivateSubnetIds (first selection in checkbox) of same VPC. 

For example: If a private subnet with availability zone "a" is selected, a public subnet of availability zone "a" should be added under same VPC, so that the Loadbalancer can forward request to target group of instances.

**Allowed IP**

Provide a list of IP addresses which can access SnappyFlow server

**KeyName**

Provide an existing key for SSH access to SnappyFlow instances

**IAMRole**

Provide an existing IAM Role with appropriate permissions. This is required to discover end points and create a S3 storage required for logs and metric backup.

Click on `Next` to continue.

In the `Configure stack options` screen, provide tags and verify all permissions and other stack creation options.

Click on `Next` to continue.

Review all configuration settings and click on `Create Stack' to create SnappyFlow stack.

<img src="/img/snappyflow_self_hosted/aws_stack_review.png" />

Once the stack is successfully created, it should appear under the list of stacks in CloudFormation service.

<img src="/img/snappyflow_self_hosted/aws_stack_complete.png" />

### Accessing SnappyFlow server ###


Click on the stack and select `Outputs` tab

<img src="/img/snappyflow_self_hosted/aws_stack_output.png" />

SnappyFLow portal can be accessed using the server URL provided here. The default username is  admin and password is the instance id.

<img src="/img/snappyflow_self_hosted/aws_stack_url.png" />

SnappyFlow will complete the installation automatically. This process takes upto 30 minutes.

<img src="/img/snappyflow_self_hosted/portal.png" />

## Create SnappyFlow stack on Azure

:::caution

Before downloading the template for Azure, make sure your region has enough quotas for the server types provided in the sizing tool summary. If not, change server type in the sizing tool using drop down option.
:::

### Pre-Requisites ###

- Azure account
- Pre-configured subnets
- Azure blob storage 

### Uploading the template ###

Log into Azure portal and Search for `Custom Deployment` using the search bar on top and select `Deploy a custom template`.

<img src="/img/snappyflow_self_hosted/azure_custom_template.png" />

Click on `Build your own template in the editor`

<img src="/img/snappyflow_self_hosted/azure_build_template.png" />

You will now see an editor and here you can Click on `Load file` to upload the template provided by SnappyFlow sizing tool.

<img src="/img/snappyflow_self_hosted/azure_load_template.png" />

Click on `Save` to continue.

### Configuration ###

In this page, choose a subscription and resource group that this new stack will be a part of. 

<img src="/img/snappyflow_self_hosted/azure_template_config.png" />

The region is auto populated from template. Provide the Virtual Network Name and Subnet name that you’d like this stack to be part of.  

If access to SnappyFlow is required via open internet, choose true in Public Ip addr field. You can also define the IP addresses that can access the stack or leave it at default for access via internet. 

Choose True for System Assigned Identity.

To enable SSH access to the stack, you can choose from an existing Admin Username and provide the admin key.

Provide a name and key for the backup storage. 

Click on `Review + Create` to proceed.

Review all stack details and click on Create. Azure will validate all inputs and start the deployment process.

<img src="/img/snappyflow_self_hosted/azure_template_config.png" />

### Accessing SnappyFlow server ###

Once deployment is complete, you will see a deployment complete message.

<img src="/img/snappyflow_self_hosted/azure_template_complete.png" />

To access SnappyFlow portal, select the SnappyFlow server VM. You can find this virtual machine under the resource group or subscriptions that was earlier selected. 

<img src="/img/snappyflow_self_hosted/azure_template_access.png" />


Use the public IP address to access the portal. The default username is admin and password is admin. 

SnappyFlow will complete the installation automatically. This process takes upto 30 minutes.

<img src="/img/snappyflow_self_hosted/portal.png" />