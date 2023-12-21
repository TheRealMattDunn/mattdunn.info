---
title: Helicopter Racing League Case Study
date: 2022-02-11
last-modified: 2023-12-21
tags:
  - google-cloud
  - cloud architecture
  - case study
---

> Non-italicised points represent notes taken from Google's official case study documentation, with keywords highlighted in **bold**.
> Points in *italics* represent additional insights and possible solutions.

## Overview

- **Global** sports league for helicopter racing
- **World championship** and **regional** events
	- *Need to cater for global and regional traffic*
	- *Points of presence in many regions—close to end users*
	- *CDN*
- Offers **paid service** to stream races with **live telemetry** and **predictions throughout**
	- *Uptime important*
	- *Real-time analytics*
- Wish to migrate to a **new platform**
	- *Currently on AWS or Azure—Storage Transfer Service*
- Increase use of **AI/[ML](notes/Machine%20Learning.md)** services
- More serving of **real time** and **recorded** content **closer to users** in **emerging markets**

## Existing Technical Environment

- **Public cloud**-first company
- Video recorded/edited at racetracks
- Encoding and transcoding performed **in the cloud**
	- *VMs*
- **Enterprise connectivity** and local compute in **truck mounted DCs**
	- *Mobile DCs—dedicated interconnect not an option*
- Race prediction service hosted on cloud
- Content stored in **object storage**
	- *Migration—Storage Transfer Service*
- Video **encoding/transcoding** performed on **VMs** for each job
	- *Lift/shift with Migrate for Compute Engine*
	- *GPUs*
	- *Machine types:*
		- *Tau T2D (option for scale-out architecture, no GPU support)*
		- *C2, C2D (ultra-high performance, no GPU support)*
		- *A2 (optimized for GPU usage)*
	- *Transcoder API—managed service*
- Race predictions via **TensorFlow** models running on **VMs**
	- *Lift/shift with Migrate for Compute Engine*
	- *[TPUs](notes/Google%20Cloud%20TPUs.md)s—Tensor Processing Unit, built for TensorFlow*
	- *[Vertex AI](notes/moc/Vertex%20AI.md)*

## Business Requirements

- Expand predictive capabilities
- **Reduce latency** in emerging markets
	- *Cloud CDN*
	- *[Global Load Balancing](notes/Google%20Cloud%20Load%20Balancing.md)*
	- *Regional Managed Instance Groups (MIGs)*
	- *Regional [Cloud Storage](notes/Cloud%20Storage.md) buckets*
- **Expose models** to partners
	- *Private connectivity – VPN*
	- *API Gateway / Apigee*
- Increase predictive capabilities (race results, mechanical failures, crowd sentiment)
	- *Previous race results—batch data analysis*
	- *Sentiment analysis:*
		- *Natural Language API—predefined categories inc. sentiment analysis*
		- *[AutoML](notes/AutoML.md) Natural Language—custom categories*
		- *Vertex AI—Video Intelligence API*
- Increase **telemetry** and **insights**
	- *[Cloud IoT Core](notes/Cloud%20IoT%20Core.md)*
	- *[Cloud Bigtable](notes/Cloud%20Bigtable.md), [Dataflow](notes/Dataflow.md), [BigQuery](notes/BigQuery.md), Looker*
- **Measure engagement** with new predictions
	- *[Cloud Firestore](notes/Cloud%20Firestore.md)*
	- *AI/ML models—Vertex AI*
- Enhance global availability and **quality of broadcasts**
	- *Higher quality video encoding—high spec VMs (Tau, GPUs)*
- Increase number of **concurrent viewers**
	- *Increase capacity*
	- *Dynamic horizontal scaling—[Autoscaling Groups](notes/Google%20Cloud%20Compute%20Autoscaling.md)*
- Minimize operational **complexity**
	- *Managed services where possible*
	- *Reduce number of platforms*
- Ensure regulatory **compliance**
- New revenue streams e.g. merchandise
	- *Online store—SaaS*
	- *[Cloud Run](notes/Cloud%20Run.md), [App Engine](notes/App%20Engine.md), [Cloud Firestore](notes/Cloud%20Firestore.md)*

## Technical Requirements

- Maintain/increase **prediction throughput/accuracy**
	- *TPUs, Vertex AI*
- Reduce viewer **latency**
	- *Content closer to viewers*
	- *Multi-regional GCS buckets*
	- *Cloud CDN*
	- *Global Load Balancers*
	- *HSL protocol—HTTP Live Streaming, Apple protocol for on-demand auto/video*
- Increase transcoding **performance**
	- *Vertical and horizontal scaling*
	- *Transcoder API—batch processing*
- **Real-time analytics** of viewer consumption
- Data mart—processing large volumes of race data
	- *AutoML Vision*
	- *Vertex AI*
	- *BigQuery ML*

## Potential Solution Design

 ![Helicopter racing league design](files/helicopter_racing_league_design.svg)

## References

- [Helicopter Racing League case study overview](https://services.google.com/fh/files/blogs/master_case_study_helicopter_racing_league.pdf)
