---
title: TerramEarth Case Study
date: 2022-02-14
last-modified: 2023-10-23
tags:
  - google-cloud
  - cloud-architecture
  - case-study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Overview

- Manufacturer of heavy equipment for mining and agriculture
- **500** dealers/service centres in **100** countries
- **2 million vehicles** in operation with **20% annual growth**
	- *Big data—2.4 million vehicles next year*
- **Telemetry** from vehicles:
	- Small subset collected in **real-time** for fleet management
		- *Steaming via: [Cloud IoT Core](notes/Cloud%20IoT%20Core.md), [Pub/Sub](notes/Pub%20Sub.md)/[Dataflow](notes/Dataflow.md), [BigQuery](notes/BigQuery.md)/[Cloud Bigtable](notes/Cloud%20Bigtable.md)*
	- Remainder uploaded as compressed **batch** files daily upon return to base: **200 to 500 MB/day = 1 PB/day total**
		- *Batch—[Cloud Storage](notes/Cloud%20Storage.md), BigQuery*

## Existing Technical Environment

- Vehicle data aggregation and analysis infrastructure in Google Cloud
- **Global** clients
- Sensor data collected from **manufacturing plants** and sent to **private DCs**
	- **Legacy** inventory and logistics management systems
	- DCs have multiple **network interconnects** with Google Cloud
		- *Cloud interconnect—10 Gbps minimum*
- **Web frontend** for dealers and customers:
	- Runs in Google Cloud
	- Stock management
	- Analytics
		- *[App Engine](notes/App%20Engine.md) or [Cloud Run](notes/Cloud%20Run.md)*

## Business Requirements

- **Predict** vehicle malfunction to ship parts to dealerships for just-in-time repair
	- *[BigQuery](notes/BigQuery.md) ML (SQL)*
	- *[AutoML](notes/AutoML.md) Tables (business users)*
	- *[Vertex AI](notes/moc/Vertex%20AI.md) (data scientists)*
- **Decrease** cloud ops costs
- Adjust to **seasonality**
	- *[Compute Autoscaling](notes/Google%20Cloud%20Compute%20Autoscaling.md)*
	- *Prefer serverless—IoT Core, Pub/Sub, Cloud Storage, Dataflow, BigQuery, AppEngine/Cloud Run*
- **Increase speed/reliability** of dev workflow
	- *[SRE](notes/moc/Site%20Reliability%20Engineering%20(SRE).md)*
	- *CI/CD*
- **Remote** developers
	- Productivity
		- *Cloud Code*
	- Code/data security
		- *IAM*
- Platform for custom **API** services for dealers/partners
	- *Apigee*

## Technical Requirements

- **HTTP API abstraction layer** for legacy systems
	- Insulate for gradual move into cloud
- Modernize **CI/CD** pipelines
	- *Cloud Build*
	- *Container Registry*
- **Container**-based apps
	- *Cloud Run / [GKE](notes/Kubernetes%20Engine%20(GKE).md)*
	- *Prefer Cloud Run to App Engine*
- Allow developers to run **experiments**
	- Security
	- Governance
		- *Sandbox projects*
- Self-service portal for internal/partner developers to:
	- **Create new projects**
	- Request resources for **analytics** jobs
	- **Centrally** manage access to **API** endpoints
- [cloud native](notes/The%20Path%20to%20Cloud%20Native.md) solutions for **keys/secret management**
	- Optimize for **identity**-based access
		- *KMS, Secret Manager*
- Improve/standardize tools for apps/network monitoring/troubleshooting

## Executive Statement

- Focus on customer
- Customer service—minimize downtime
- Want best-in-class fleet management for customers
- Improve operations of dealerships
- 5-year plan:
	- Create partner ecosystem of new products via **access to data**
	- Increase autonomous vehicle capabilities
	- Path to **move legacy systems to cloud**
		- *Migrate for Compute Engine, Migrate For Anthos*

## Potential Solution Design

![Terramearth design](files/terramearth_design.svg)

## References

- [TerramEarth case study overview](https://services.google.com/fh/files/blogs/master_case_study_terramearth.pdf)
