---
title: HipLocal Case Study
date: 2022-04-25
last-modified: 2023-10-23
tags:
  - google cloud
  - development
  - case study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Company Overview

- Community application
	- **Communication** between people in **close proximity**
		- *Streaming data: [Cloud IoT Core](notes/Cloud%20IoT%20Core.md), [Pub/Sub](notes/Pub%20Sub.md)*
		- *Data synchronization: [Cloud Firestore](notes/Cloud%20Firestore.md)*
- Event planning, organizing sporting events, businesses to connect with local communities
- Initial launch in Dallas—growing into **global** phenomenon
	- *Global and multi-regional resources*

## Executive Statement

- Go global—communities to **span global regions**
- Desire **rapid growth**
	- *PaaS, managed services*

## Solution Concept

- Expand existing service
	- **Update functionality**
	- **New locations**
- **Hire/train new teams** to support each location in local timezone
- Ensure:
	- Smooth **autoscaling**
		- *MIGs, Serverless*
	- Provide clear **uptime** data
		- [Cloud Monitoring](notes/Cloud%20Monitoring.md)
	- **Analyse/respond** to issues
		- [Cloud Monitoring](notes/Cloud%20Monitoring.md)

## Existing Technical Environment

- Mixture of **on-prem** and **Google Cloud infrastructure**
	- [Cloud VPN](notes/Cloud%20VPN.md), [Cloud Interconnect](notes/Cloud%20Interconnect.md)
- Team understands app, but **limited experience of globally scaled apps**
	- *Prefer managed solutions*
- **APIs** run on **[Compute Engine](notes/Compute%20Engine.md)** instances
	- *Migrate to [Cloud Endpoints](notes/Cloud%20Endpoints.md), [Google Cloud API Gateway](notes/Google%20Cloud%20API%20Gateway.md) or Apigee*
- State stored in single **MySQL** instance in Google Cloud
	- *Migrate to [Cloud SQL](notes/Cloud%20SQL.md) or [Cloud Spanner](notes/Cloud%20Spanner.md)*
- Release cycles—**dev freezes** during QA testing
	- *Require separate dev, QA and prod environments*
	- *CI/CD process with automated testing*
- No consistent **logging**
	- *[Cloud Logging](notes/Cloud%20Logging.md)*
	- *Install logging agent on GCE instances*
- **Deployments manual** by infrastructure engineers during quiet periods
	- *CI/CD: [Cloud Build](notes/Cloud%20Build.md), [Spinnaker](notes/Spinnaker.md)*
	- *Canary, blue/green deployments*
- Basic **SLIs**—uptime alerts fired when APIs unresponsive
	- *Improve with [Cloud Monitoring](notes/Cloud%20Monitoring.md)*

## Business Requirements

- Expand to new locations—consistent experience
	- *[Global Load Balancing](notes/Google%20Cloud%20Load%20Balancing.md)*
	- *Regional compute*
	- *[Cloud CDN](notes/Cloud%20CDN.md)*
- Support **10x** as many concurrent users
	- *Autoscaling: MIGs*
- Collect **user metrics**—monetize product
	- *[BigQuery](notes/BigQuery.md) or [Cloud Bigtable](notes/Cloud%20Bigtable.md) for time-series data*
	- *[Cloud Logging](notes/Cloud%20Logging.md), [Cloud Domains](notes/Cloud%20Domains.md)*
- Ensure **regulatory compliance** (e.g. GDPR)
- **Reduce** infrastructure management **time** and **cost**
	- *IaC, e.g. [Terraform](notes/moc/Terraform.md)*
	- *Migrate on-prem to Google Cloud*
- Adopt **Google best practices**:
	- Workflows/process—**application lifecycle management**
		- *Agile, CI/CD, canary deployments*
	- Define **SLIs** and **SLOs**
		- *[Cloud Monitoring](notes/Cloud%20Monitoring.md)*

## Technical Requirements

- **Secure communications** between **on-prem** and **Google *Cloud***
	- *TLS, [Cloud VPN](notes/Cloud%20VPN.md), [Cloud Interconnect](notes/Cloud%20Interconnect.md)*
- Usage **metrics/monitoring**
	- *[BigQuery](notes/BigQuery.md)*
- APIs—**authentication**/**authorization**
	- *OpenAPI, [Cloud Endpoints](notes/Cloud%20Endpoints.md)/[Google Cloud API Gateway](notes/Google%20Cloud%20API%20Gateway.md)/Apigee*
	- *Internal apps: [Identity Aware Proxy](notes/Identity%20Aware%20Proxy.md)*
- Implement faster/more accurate **validation of new features**
	- *Canary deployments, A/B testing*
- **Logging**/performance metrics—actionable information, **debugging** and **alerts**
	- *[Cloud Logging](notes/Cloud%20Logging.md), [Cloud Monitoring](notes/Cloud%20Monitoring.md), [Cloud Debugger](notes/Cloud%20Debugger.md)*
- **Scale** to meet user demands
	- *MIGs, [Google Cloud Load Balancing](notes/Google%20Cloud%20Load%20Balancing.md)*
	- *Migrate to serverless: [App Engine](notes/App%20Engine.md), [Cloud Run](notes/Cloud%20Run.md), [Cloud Functions](notes/Cloud%20Functions.md)*

## Potential Solution Design

![hiplocal_case_study](files/hiplocal_case_study.svg)

## References

- [HipLocal case study overview](https://services.google.com/fh/files/blogs/master_case_study_hiplocal.pdf)
