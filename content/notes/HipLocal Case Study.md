---
title: "HipLocal Case Study"
date: "2022-04-25"
tags:
- development
- gcp
- case study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Company Overview

- Community application
	- **Communication** between people in **close proximity**
		- *Streaming data: [IoT Core](notes/GCP%20IoT%20Core.md), [Pub/Sub](notes/GCP%20Pub%20Sub.md)*
		- *Data synchronization: [Cloud Firestore](notes/GCP%20Cloud%20Firestore.md)*
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
		- [Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md)
	- **Analyse/respond** to issues
		- [Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md)

## Existing Technical Environment

- Mixture of **on-prem** and **GCP infrastructure**
	- [Cloud VPN](notes/GCP%20Cloud%20VPN.md), [Cloud Interconnect](notes/GCP%20Cloud%20Interconnect.md)
- Team understands app, but **limited experience of globally scaled apps**
	- *Prefer managed solutions*
- **APIs** run on **[Compute Engine](notes/GCP%20Compute%20Engine.md)** instances
	- *Migrate to [Cloud Endpoints](notes/GCP%20Cloud%20Endpoints.md), [API Gateway](notes/GCP%20API%20Gateway.md) or Apigee*
- State stored in single **MySQL** instance in GCP
	- *Migrate to [Cloud SQL](notes/GCP%20Cloud%20SQL.md) or [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md)*
- Release cycles—**dev freezes** during QA testing
	- *Require separate dev, QA and prod environments*
	- *CI/CD process with automated testing*
- No consistent **logging**
	- *[Cloud Logging](notes/GCP%20Cloud%20Logging.md)*
	- *Install logging agent on GCE instances*
- **Deployments manual** by infrastructure engineers during quiet periods
	- *CI/CD: [Cloud Build](notes/GCP%20Cloud%20Build.md), [Spinnaker](notes/Spinnaker.md)*
	- *Canary, blue/green deployments*
- Basic **SLIs**—uptime alerts fired when APIs unresponsive
	- *Improve with [Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md)*

## Business Requirements

- Expand to new locations—consistent experience
	- *[Global Load Balancing](notes/GCP%20Load%20Balancing.md)*
	- *Regional compute*
	- *[Cloud CDN](notes/GCP%20Cloud%20CDN.md)*
- Support **10x** as many concurrent users
	- *Autoscaling: MIGs*
- Collect **user metrics**—monetize product
	- *[BigQuery](notes/GCP%20BigQuery.md) or [Cloud Bigtable](notes/GCP%20Cloud%20Bigtable.md) for time-series data*
	- *[Cloud Logging](notes/GCP%20Cloud%20Logging.md), [Cloud Domains](notes/GCP%20Cloud%20Domains.md)*
- Ensure **regulatory compliance** (e.g. GDPR)
- **Reduce** infrastructure management **time** and **cost**
	- *IaC, e.g. [Terraform](notes/moc/Terraform.md)*
	- *Migrate on-prem to GCP*
- Adopt **Google best practices**:
	- Workflows/process—**application lifecycle management**
		- *Agile, CI/CD, canary deployments*
	- Define **SLIs** and **SLOs**
		- *[Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md)*

## Technical Requirements

- **Secure communications** between **on-prem** and **GCP**
	- *TLS, [Cloud VPN](notes/GCP%20Cloud%20VPN.md), [Cloud Interconnect](notes/GCP%20Cloud%20Interconnect.md)*
- Usage **metrics/monitoring**
	- *[BigQuery](notes/GCP%20BigQuery.md)*
- APIs—**authentication**/**authorization**
	- *OpenAPI, [Cloud Endpoints](notes/GCP%20Cloud%20Endpoints.md)/[API Gateway](notes/GCP%20API%20Gateway.md)/Apigee*
	- *Internal apps: [Identity Aware Proxy](notes/GCP%20Identity%20Aware%20Proxy.md)*
- Implement faster/more accurate **validation of new features**
	- *Canary deployments, A/B testing*
- **Logging**/performance metrics—actionable information, **debugging** and **alerts**
	- *[Cloud Logging](notes/GCP%20Cloud%20Logging.md), [Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md), [Cloud Debugger](notes/GCP%20Cloud%20Debugger.md)*
- **Scale** to meet user demands
	- *MIGs, [GCP Load Balancing](notes/GCP%20Load%20Balancing.md)*
	- *Migrate to serverless: [App Engine](notes/GCP%20App%20Engine.md), [Cloud Run](notes/GCP%20Cloud%20Run.md), [Cloud Functions](notes/GCP%20Cloud%20Functions.md)*

## Potential Solution Design

![hiplocal_case_study](files/hiplocal_case_study.svg)

# References

- [HipLocal case study overview](https://services.google.com/fh/files/blogs/master_case_study_hiplocal.pdf)
