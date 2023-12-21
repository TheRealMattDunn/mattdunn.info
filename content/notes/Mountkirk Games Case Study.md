---
title: Mountkirk Games Case Study
date: 2022-02-13
last-modified: 2023-10-23
tags:
  - google-cloud
  - cloud-architecture
  - case-study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Overview

- Online, session-based **multiplayer** mobile games
- Already migrated on-prem to Google Cloud
- Starting to expand from mobile to **other gaming platforms**
- Latest game:
	- Retro first-person-shooter (FPS)
	- **Expected to be popular**
	- **100s** of simultaneous players
		- *Not a huge number, but sizable*
	- Games take place in a **geo-specific 'arena'**
	- **Multiple platforms** and **locations**
	- Digital **real-time banner** displaying **global** leaderboard
- Planned architecture:
	- Plan to deploy backend to **[GKE](notes/Kubernetes%20Engine%20(GKE).md)**
		- *Multiple regional clusters*
		- *[Anthos](notes/Anthos.md) for common config management and service mesh capabilities*
		- *[Multi Cluster Ingress](notes/Multi%20Cluster%20Ingress.md)*
	- Wish to **scale** rapidly based on **demand**
	- Usage of **[global load balancers](notes/Google%20Cloud%20Load%20Balancing.md)** to route players to the closest regional arena
	- Usage of a **multi-region [Cloud Spanner](notes/Cloud%20Spanner.md)** cluster to keep global leaderboard in sync
		- *Streaming data*

## Existing Environment

- Recently migrated to Google Cloud
- Five games migrated via **lift-and-shift to [Compute Engine](notes/Compute%20Engine.md) VMs**
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
	- *Caching with [Memorystore](notes/Memorystore.md)*
- Optimize for **dynamic scaling**
	- *GKE node and pod horizontal autoscaling*
	- *Spanner doesn't autoscale—need to implement custom solution, e.g.*
		- *Cloud monitoring (CPU), [Pub/Sub](notes/Pub%20Sub.md), [Cloud Functions](notes/Cloud%20Functions.md)*
- Use **managed services** and pool resources
	- *GKE autopilot not an option, as GPUs required*
	- *Pooled resources: shared project for management and analytics*
		- *Log buckets, [BigQuery](notes/BigQuery.md), Anthos*
- Minimize costs

## Technical Requirements

- **Dynamically** scale based on **game activity**
	- *Horizontal pod autoscaler and [node autoscaling](notes/GKE%20Cluster%20Autoscaling.md)*
- Publish scores on **near real-time** leaderboard
	- *Streaming data*
- Game activity **logs** stored in **structured files** for **analysis**
	- *Import to BigQuery from Logging*
	- *Store logs in [Cloud Storage](notes/Cloud%20Storage.md)—load as BigQuery external table*
- Render graphics service-side via **GPUs** for multi-platform support
	- *GPU support in GKE (but no Autopilot)*
- Eventual migration of legacy games to platform

## Executive Statement

- Build on existing success of Google Cloud
- Wish to analyse player behaviour and **game telemetry**
	- *[Cloud Bigtable](notes/Cloud%20Bigtable.md) for telemetry storage*
	- *BigQuery, [BigQuery ML](notes/BigQuery%20ML.md)*
- Use **[cloud native](notes/The%20Path%20to%20Cloud%20Native.md)** design principles
- **Latency** is a top priority
- **Cost management** a second priority
- Expect advanced analytics capabilities to **rapidly iterate bug fixes** and **new functionality**

## Potential Solution Design

![Mountkirk Games design](files/mountkirk_games_design.svg)

## References

- [Mountkirk Games case study](https://services.google.com/fh/files/blogs/master_case_study_mountkirk_games.pdf)
