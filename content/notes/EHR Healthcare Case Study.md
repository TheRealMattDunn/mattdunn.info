---
title: "EHR Healthcare Case Study"
date: "2022-02-09"
tags:
- gcp
- cloud architecture
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Overview

- **Leading provider** of electronic **health** record software:
	- *Large company*
	- *Many customers*
	- *Compliance important*
- Provide SaaS to **multinational** medical offices, hospitals, and insurance providers:
	- *Regulations:*
		- *GCP is HIPAA compliant*
		- *Need to protect PII data*
	- *Multi-national:*
		- *even more compliance*
		- *Multi-regional deployments*
- Growing rapidly:
	- *Need to scale*
	- *Autoscaling Groups*
	- *Kubernetes autoscaling (pods, nodes)*
- DR plan required
- Need to update **continuous deployment** processes:
	- *Update software faster*
	- *CI/CD*
- GCP to replace existing colocation facilities

## Existing Environment

- Lease on DC about to expire
- **Web-based customer-facing** applications
	- Many already **containerized** to run on **Kubernetes**:
		- *GKE*
		- *Anthos for hybrid-cloud use cases, and to manage multiple clusters centrally*
		- *Google Container Registry*
- **SQL** and **noSQL** DBs:
	- MySQL
		- *Lift/shift to Cloud SQL*
	- MS SQL Server
		- *Lift/shift to Cloud SQL*
		- *Provision specific version in GCE (if not available in Cloud SQL)*
	- Redis
		- *Lift/shift to Memorystore*
		- *Deploy Redis Enterprise from marketplace*
	- MongoDB
		- *ETL to Firestore*
		- *Deploy MongoDB Atlas from marketplace*
		- *Manual build on GCE/GKE*
- **Legacy file and API integrations** with insurance providers **on-prem**:
	- Scheduled to be replaced, but **no immediate plans to move or upgrade**
		- *Requires secure connectivity between cloud and on-prem*
		- *VPN, Partner/Dedicated Interconnect*
- Users managed in **MS Active Directory**:
	- *Google Cloud Directory Sync (GCDS)*
		- *One-way sync of users and groups*
- Monitoring:
	- Currently using **open source** tools
		- *Move to GCP Operations Suite*
	- Alerts via **email** often **ignored**
		- *Reduce frequency*
		- *Move from email to SMS, Slack, PagerDuty, Pub/Sub etc.*
		- *Alerting policies*

## Business Requirements

- Onboard **new** insurance providers **as quickly as possible**:
	- *Common APIs*
	- *API management - Apigee*
	- *SaaS admin portal*
		- *Deploy to App Engine or Cloud Run (preferred due to containers) if traffic low*
- **99.9% availability** for customer-facing applications:
	- *Multi-zonal / regional resources*
- **Centralized** visibility of applications, with **proactive monitoring and alerting**:
	- *GCP Operations*
	- *Central logging/monitoring project for all subprojects*
- Gain **insights** into healthcare trends:
	- *AI/ML*
	- *BigQuery*
	- *BigQuery BI*
	- *Looker*
- **Reduce latency** to end users:
	- *Premium network tier*
	- *Multi-zonal / regional resources*
	- *Anthos to place clusters in multiple-regions – multi-cluster ingress*
	- *Global load balancing*
	- *Cloud CDN*
- Ensure **compliance**:
	- *HIPAA*
	- *Audit logging*
- Decrease infrastructure **admin costs**:
	- *Use managed services wherever possible*
	- *Automate using IaC*
- **Predictions** and reports on industry trends:
	- *AI/ML*
	- *BigQuery ML*
	- *Reports with Data Studio*
	- *AI Platform / Vertex AI*

## Technical Requirements

- **Maintain legacy interfaces** to existing insurance providers
	- *VPN or Partner/Dedicated interconnect*
- **Consistent** way to manage **containerized** apps
	- *Anthos*
	- *Cloud Run and Cloud Run for Anthos*
	- *Google Container Registry*
- **Secure** and **high performance** interface **between GCP and on-prem**
	- *VPN or Partner/Dedicated interconnect*
- Logging, log retention, monitoring, alerting
	- *Cloud Operations*
	- *Long term retention, use GCS or BigQuery as a sink*
- Manage **multiple container-based** environments
	- *Anthos*
	- *Centralized DevOps project*
		- *Host GCR and Cloud Build*
	- *Same container image for each environment*
- Create **interfaces** to ingest and **process data** from new providers
	- *APIs: Apigee*
	- *Pub/Sub*
	- *Dataproc*
	- *Dataflow*

## Executive Statement

- Currently, **expensive** (time, money):
	- Training team to manage **disparate systems**
	- **Multiple environments**
		- *CapEx and OpEx too high*
		- *Consolidate to common platform e.g., Anthos*
		- *Use managed services where possible*
- **Outages** caused by:
	- Misconfigurations
		- *Automate where possible – CI/CD*
		- *Infrastructure as code e.g., Terraform*
		- *Kubernetes – roll-back unstable releases*
		- *Anthos Config Management for guardrails and best practice policies across all clusters*
	- Inadequate capacity
		- *Autoscaling*
	- Inconsistent monitoring
		- *Consolidate onto GCP Operations*

## Potential Solution Design

![EHR Healthcare design](/files/ehr_healthcare_design.svg)

# References

- [Google Cloud Certified Professional Cloud Architect](notes/Google%20Cloud%20Certified%20Professional%20Cloud%20Architect.md)
- [EHR Healthcare case study overview](https://services.google.com/fh/files/blogs/master_case_study_ehr_healthcare.pdf)
