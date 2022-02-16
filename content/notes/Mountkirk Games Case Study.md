---
title: "Mountkirk Games Case Study"
date: "2022-02-13"
tags:
- gcp
- cloud architecture
- case study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Overview

- Online, session-based **multiplayer** mobile games
- Already migrated on-prem to GCP
- Starting to expand from mobile to **other gaming platforms**
- Latest game:
	- Retro first-person-shooter (FPS)
	- **Expected to be popular**
	- **100s** of simultaneous players
		- *Not a huge number, but sizable*
	- Games take place in a **geo-specific 'area'**
	- **Multiple platforms** and **locations**
	- Digital **real-time banner** displaying **global** leaderboard
- Planned architecture:
	- Plan to deploy backend to **GKE**
		- *Multiple regional clusters*
		- *Anthos for common config management and service mesh capabilities*
		- *Multi Cluster Ingress*
	- Wish to **scale** rapidly based on **demand**
	- Usage of **global load balancers** to route players to the closest regional arena
	- Usage of a **multi-region Cloud Spanner** cluster to keep global leaderboard in sync
		- *Streaming data*

## Existing Environment

- Recently migrated to GCP
- Five games migrated via **lift-and-shift to Compute Engine VMs**
	- *Suggests Migrate for Compute Engine*
- Each new game exists in an **isolated project**, with a **parent folder** maintaining **permissions** and **network policies**
- Legacy games with lower traffic have been consolidated into a **single project**
- **Dev/test environments** also exist

## Business Requirements

- Support **multiple gaming platforms**
	- *Potentially multiple back-ends*
- **Multi-region**
	- *Consider different sets of compliance requirements*
- **Rapid iteration** of features
	- *CI/CD*
	- *Cloud Build / Cloud Deploy*
- Minimize **latency**
	- *Global Load Balancers*
	- *Premium network tier*
	- *Cloud CDN*
	- *Caching with Cloud Memorystore*
- Optimize for **dynamic scaling**
	- *GKE node and pod horizontal autoscaling*
	- *Spanner doesn't autoscale—need to implement custom solution, e.g.,*
		- *Cloud monitoring (CPU), Pub/Sub, Cloud Functions*
- Use **managed services** and pool resources
	- *GKE autopilot not an option, as GPUs required*
	- *Pooled resources: shared project for management and analytics*
		- *Log buckets, BigQuery, Anthos*
- Minimize costs

## Technical Requirements

- **Dynamically** scale based on **game activity**
	- *Horizontal pod autoscaler and node autoscaling*
- Publish scores on **near real-time** leaderboard
	- *Streaming data*
- Game activity **logs** stored in **structured files** for **analysis**
	- *Import to BigQuery from Logging*
	- *Store logs in GCS—load as BigQuery external table*
- Render graphics service-side via **GPUs** for multi-platform support
	- *GPU support in GKE (but no autopilot)*
- Eventual migration of legacy games to platform

## Executive Statement

- Build on existing success of GCP
- Wish to analyse player behaviour and **game telemetry**
	- *Bigtable for telemetry storage*
	- *BigQuery, BigQuery ML*
- Use **cloud-native** design principles
- **Latency** is a top priority
- **Cost management** a second priority
- Expect advanced analytics capabilities to **rapidly iterate bug fixes** and **new functionality**

## Potential Solution Design

![Mountkirk Games design](/files/mountkirk_games_design.svg)

# References

- [Mountkirk Games case study](https://services.google.com/fh/files/blogs/master_case_study_mountkirk_games.pdf)
- [Google Cloud Certified Professional Cloud Architect](notes/Google%20Cloud%20Certified%20Professional%20Cloud%20Architect.md)
