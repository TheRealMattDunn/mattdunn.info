---
title: EHR Healthcare Case Study
date: 2022-02-09
last-modified: 2024-03-25
tags:
  - google-cloud
  - cloud-architecture
  - case-study
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
		- *Google Cloud is HIPAA compliant*
		- *Need to protect PII data*
	- *Multi-national:*
		- *Even more compliance*
		- *Multi-regional deployments*
- Growing rapidly:
	- *Need to scale*
	- *Autoscaling Groups*
	- *Kubernetes autoscaling (pods, [node pools](notes/GKE%20Cluster%20Autoscaling.md))*
- DR plan required
- Need to update **continuous deployment** processes:
	- *Update software faster*
	- *CI/CD*
- Google Cloud to replace existing colocation facilities

## Existing Environment

- Lease on DC about to expire
- **Web-based customer-facing** applications
	- Many already **containerized** to run on **Kubernetes**:
		- *[Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md)*
		- *[GKE Enterprise](notes/GKE%20Enterprise.md) for hybrid-cloud use cases, and to manage multiple clusters centrally*
		- *Google Container Registry*
- **SQL** and **noSQL** DBs:
	- MySQL
		- *Lift/shift to [Cloud SQL](notes/Cloud%20SQL.md)*
	- MS SQL Server
		- *Lift/shift to Cloud SQL*
		- *Provision specific version in [Compute Engine](notes/Compute%20Engine.md) (if not available in Cloud SQL)*
	- Redis
		- *Lift/shift to [Memorystore](notes/Memorystore.md)*
		- *Deploy Redis Enterprise from marketplace*
	- MongoDB
		- *ETL to [Cloud Firestore](notes/Cloud%20Firestore.md)*
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
		- *Move to Google Cloud Operations Suite*
	- Alerts via **email** often **ignored**
		- *Reduce frequency*
		- *Move from email to SMS, Slack, PagerDuty, [Pub/Sub](notes/Pub%20Sub.md) etc.*
		- *Alerting policies*

## Business Requirements

- Onboard **new** insurance providers **as quickly as possible**:
	- *Common APIs*
	- *API management - Apigee*
	- *SaaS admin portal*
		- *Deploy to [App Engine](notes/App%20Engine.md) or [Cloud Run](notes/Cloud%20Run.md) (preferred due to containers) if traffic low*
- **99.9% availability** for customer-facing applications:
	- *Multi-zonal / regional resources*
- **Centralized** visibility of applications, with **proactive monitoring and alerting**:
	- *Google Cloud Operations*
	- *Central logging/monitoring project for all subprojects*
- Gain **insights** into healthcare trends:
	- *[Vertex AI](notes/moc/Vertex%20AI.md)*
	- *[BigQuery](notes/BigQuery.md)*
	- *BigQuery BI*
	- *Looker*
- **Reduce latency** to end users:
	- *Premium network tier*
	- *Multi-zonal / regional resources*
	- *Anthos to place clusters in multiple-regions—[Multi Cluster Ingress](notes/Multi%20Cluster%20Ingress.md)*
	- *[Global load balancing](notes/Google%20Cloud%20Load%20Balancing.md)*
	- *Cloud CDN*
- Ensure **compliance**:
	- *HIPAA*
	- *Audit logging*
- Decrease infrastructure **admin costs**:
	- *Use managed services wherever possible*
	- *Automate using IaC*
- **Predictions** and reports on industry trends:
	- *AI/[ML](notes/Machine%20Learning.md)*
	- *[BigQuery ML](notes/BigQuery%20ML.md)*
	- *Reports with [Looker Studio](notes/Google%20Looker%20Studio.md)*
	- *AI Platform / [Vertex AI](notes/moc/Vertex%20AI.md)*

## Technical Requirements

- **Maintain legacy interfaces** to existing insurance providers
	- *VPN or Partner/Dedicated interconnect*
- **Consistent** way to manage **containerized** apps
	- *Anthos*
	- *Cloud Run and Cloud Run for Anthos*
	- *Google Container Registry*
- **Secure** and **high performance** interface **between Google Cloud and on-prem**
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
	- *[Dataproc](notes/Dataproc.md)*
	- *[Dataflow](notes/Dataflow.md)*

## Executive Statement

- Currently, **expensive** (time, money):
	- Training team to manage **disparate systems**
	- **Multiple environments**
		- *CapEx and OpEx too high*
		- *Consolidate to common platform e.g. Anthos*
		- *Use managed services where possible*
- **Outages** caused by:
	- Misconfigurations
		- *Automate where possible—CI/CD*
		- *Infrastructure as code e.g. [Terraform](notes/moc/Terraform.md)*
		- *[Kubernetes](notes/moc/Kubernetes.md)—roll-back unstable releases*
		- *Anthos Config Management for guardrails and best practice policies across all clusters*
	- Inadequate capacity
		- *[Autoscaling](notes/Google%20Cloud%20Compute%20Autoscaling.md)*
	- Inconsistent monitoring
		- *Consolidate onto Google Cloud Operations*

## Potential Solution Design

![EHR Healthcare design](files/ehr_healthcare_design.svg)

## References

- [EHR Healthcare case study overview](https://services.google.com/fh/files/blogs/master_case_study_ehr_healthcare.pdf)
