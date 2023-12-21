---
title: Dataflow
date: 2022-02-16
last-modified: 2023-12-21
tags:
  - google-cloud
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
	- [Pub/Sub](notes/Pub%20Sub.md) to [BigQuery](notes/BigQuery.md)
	- Pub/Sub to [Cloud Storage](notes/Cloud%20Storage.md)
	- [Datastream](notes/Datastream.md) to BigQuery
	- Pub/Sub to MongoDb
- Batch
	- BigQuery to Cloud Storage
	- [Cloud Bigtable](notes/Cloud%20Bigtable.md) to Cloud Storage
	- Cloud Storage to BigQuery
	- [Cloud Spanner](notes/Cloud%20Spanner.md) to Cloud Storage
- Utility
	- Bulk compression in Cloud Storage
	- [Cloud Firestore](notes/Cloud%20Firestore.md) bulk delete
	- File format conversion

## References

- [Google Cloud Decision Trees](notes/moc/Google%20Cloud%20Decision%20Trees.md)
