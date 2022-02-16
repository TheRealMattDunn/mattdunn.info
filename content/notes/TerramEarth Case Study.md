---
title: "TerramEarth Case Study"
date: "2022-02-14"
tags:
- cloud architecture
- case study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Overview

- Manufacturer of heavy equipment for mining and agriculture
- **500** dealers/service centres in **100** countries
- **2 million vehicles** in operation with **20% annual growth**
	- *Big data - 2.4 million vehicles next year*
- **Telemetry** from vehicles:
	- Small subset collected in **real-time** for fleet management
		- *Steaming via: IoT Core, Pub/Sub/ Cloud Dataflow, BigQuery/Bigtable*
	- Remainder uploaded as compressed **batch** files daily upon return to base: **200 to 500 MB/day = 1 PB/day total**

## Existing Technical Environment

- Vehicle data aggregation and analysis infrastructure in GCP
- **Global** clients
- Sensor data collected from **manufacturing plants** and sent to **private DCs**
	- **Legacy** inventory and logistics management systems
	- DCs have multiple **network interconnects** with GCP
- **Web frontend** for dealers and customers:
	- Runs in GCP
	- Stock management
	- Analytics

## Business Requirements

- **Predict** vehicle malfunction to ship parts to dealerships for just-in-time repair
- **Decrease** cloud ops costs
- Adjust to **seasonality**
- **Increase speed/reliability** of dev workflow
- **Remote** developers
	- Productivity
	- Code/data security
- Platform for custom **API** services for dealers/partners

## Technical Requirements

- **HTTP API abstraction layer** for legacy systems
	- Insulate for gradual move into cloud
- Modernize **CI/CD** pipelines
- **Container**-based apps
- Allow developers to run **experiments**
	- Security
	- Governance
- Self-service portal for internal/partner developers to:
	- **Create new projects**
	- Request resources for **analytics** jobs
	- **Centrally** manage access to **API** endpoints
- Cloud-native solutions for **keys/secret management**
	- Optimize for **identity**-based access
- Improve/standardize tools for apps/network monitoring/troubleshooting

## Executive Statement

- Focus on customer
- Customer service - minimize downtime
- Want best-in-class fleet management for customers
- Improve operations of dealerships
- 5-year plan:
	- Create partner ecosystem of new products via **access to data**
	- Increase autonomous vehicle capabilities
	- Path to **move legacy systems to cloud**

## Potential Solution Design

![Terramearth design](/files/terramearth_design.svg)

# References

- [TerramEarth case study overview](https://services.google.com/fh/files/blogs/master_case_study_terramearth.pdf)
- [Google Cloud Certified Professional Cloud Architect](notes/Google%20Cloud%20Certified%20Professional%20Cloud%20Architect.md)
