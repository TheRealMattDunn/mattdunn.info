---
title: "EHR Healthcare Case Study"
date: "2022-02-09"
tags:
- gcp
- cloud architecture
---

## Overview

**Leading provider of electronic health record software:**
- _Large company_
- _Many customers_

**Provide SaaS to multinational medical offices, hospitals, and insurance providers:**
- _Regulations:_
	- _GCP is HIPAA compliant_
	- _Need to protect PII data_
- _Multi-national:_
	- _even more compliance_
	- _Multi-regional deployments_

**Growing rapidly:**
- _Need to scale_
- _Autoscaling Groups_
- _Kubernetes autoscaling (pods, nodes)_

**DR plan required**

**Need to update continuous deployment processes:**
- _Update software faster_
- _CI/CD_

**GCP to replace existing colocation facilities**

## Existing Environment

**Lease on DC about to expire**

**Web-based customer-facing applications**
- **Many already containerized to run on Kubernetes:**
	- _GKE_
	- _Anthos for hybrid-cloud use cases, and to manage multiple clusters centrally_
	- _Google Container Registry_

**SQL and noSQL DBs:**
- MySQL
	- _Lift/shift to Cloud SQL_
- MS SQL Server
	- _Lift/shift to Cloud SQL_
	- _Provision specific version in GCE (if not available in Cloud SQL)_
- Redis
	- _Lift/shift to Memorystore_
	- _Deploy Redis Enterprise from marketplace_
- MongoDB
	- _ETL to Firestore_
	- _Deploy MongoDB Atlas from marketplace_
	- _Manual build on GCE/GKE_

**Legacy file and API integrations with insurance providers on-prem:**
- Scheduled to be replaced, but no immediate plans to move or upgrade
	- _Requires secure connectivity between cloud and on-prem_
	- _VPN, Partner/Dedicated Interconnect_

**Users managed in MS Active Directory:**
- _Google Cloud Directory Sync (GCDS)_
	- _One-way sync of users and groups_

**Monitoring:**
- Currently using open source tools
	- _Move to GCP Operations Suite_
- Alerts via email often ignored
	- _Reduce frequency_
	- _Move from email to SMS, Slack, PagerDuty, Pub/Sub etc._
	- _Alerting policies_

## Business Requirements

**Onboard new insurance providers as quickly as possible:**
- _Common APIs_
- _API management - Apigee_
- _SaaS admin portal_
	- _Deploy to App Engine or Cloud Run (preferred due to containers) if traffic low_

**99.9% availability for customer-facing applications:**
- _Multi-zonal / regional resources_

**Centralized visibility of applications, with proactive monitoring and alerting:**
- _GCP Operations_
- _Central logging/monitoring project for all subprojects_

**Gain insights into healthcare trends:**
- _AI/ML_
- _BigQuery_
- _BigQueryBI_
- _Looker_

**Reduce latency to end users:**
- _Premium network tier_
- _Multi-zonal / regional resources_
- _Anthos to place clusters in multiple-regions - multi-cluster ingress_
- _Global load balancing_
- _Cloud CDN_

**Ensure compliance:**
- _HIPAA_
- _Audit logging_

**Decrease infrastructure admin costs:**
- _Use managed services wherever possible_
- _Automate using IaC_

**Predictions and reports on industry trends:**
- _AI/ML_
- _BigQuery ML_
- _Reports with Data Studio_
- _AI Platform / Vertex AI_

## Technical Requirements

**Maintain legacy interfaces to existing insurance providers**
- _VPN or Partner/Dedicated interconnect_

**Consistent way to manage containerized apps**
- _Anthos_
- _Cloud Run and Cloud Run for Anthos_
- _Google Container Registry_

**Secure and high performance interface between GCP and on-prem**
- _VPN or Partner/Dedicated interconnect_

**Logging, log retention, monitoring, alerting**
- _Cloud Operations_
- _Long term retention, use GCS or BigQuery as a sink_

**Manage multiple container-based environments**
- _Anthos_
- _Centralized DevOps project_
	- _Host GCR and Cloud Build_
- _Same container image for each environment_

**Create interfaces to ingest and process data from new providers**
- _APIs: Apigee_
- _Pub/Sub_
- _Dataproc_
- _Dataflow_

## Executive Statement

**Currently, expensive (time, money):**
- Training team to manage disparate systems
- Multiple environments
	- _CapEx and OpEx too high_
	- Consolidate to common platform e.g., Anthos_
	- _Use managed services where possible_

**Outages caused by:**
- Misconfigurations
	- _Automate where possible – CI/CD_
	- _Infrastructure as code e.g., Terraform_
	- _Kubernetes – roll-back unstable releases_
	- _Anthos Config Management for guardrails and best practice policies across all clusters_
- Inadequate capacity
	- _Autoscaling_
- Inconsistent monitoring
	- _Consolidate onto GCP Operations_

## Potential Solution Design

![EHR Healthcare design](/files/ehr_healthcare_design.svg)

# References

- [EHR Healthcare Case study overview](https://services.google.com/fh/files/blogs/master_case_study_ehr_healthcare.pdf)
