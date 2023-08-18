---
title: GCP Dataflow
date: 2022-02-16
last-modified: 2023-08-18
tags:
  - gcp
  - data
  - big data
  - data processing
---

## Overview

- Streaming analytics service
- Transform and enrich data in stream and batch modes with a single model
	- Avoid [Training-Serving Skew](Training-Serving%20Skew.md)
- Serverless—managed service, horizontal scaling
- NoOps—automated maintenance, monitoring and scaling
- Execution engine for [Apache Beam](notes/Apache%20Beam.md)
	- Open source
	- Beam SDK—Java, Python, Go
	- Dataflow is the backend for the Beam API

![Dataflow process](files/dataflow_process.svg)

### Templates

- Streaming
	- [Pub/Sub](notes/GCP%20Pub%20Sub.md) to [BigQuery](notes/GCP%20BigQuery.md)
	- Pub/Sub to [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
	- [Datastream](notes/GCP%20Datastream.md) to BigQuery
	- Pub/Sub to MongoDb
- Batch
	- BigQuery to Cloud Storage
	- [Cloud Bigtable](notes/GCP%20Cloud%20Bigtable.md) to Cloud Storage
	- Cloud Storage to BigQuery
	- [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md) to Cloud Storage
- Utility
	- Bulk compression in Cloud Storage
	- [Cloud Firestore](notes/GCP%20Cloud%20Firestore.md) bulk delete
	- File format conversion

## References

- [GCP Decision Trees](notes/moc/GCP%20Decision%20Trees.md)
