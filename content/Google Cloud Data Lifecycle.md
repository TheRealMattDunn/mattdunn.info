---
title: Google Cloud Data Lifecycle
date: 2022-02-08
last-modified: 2023-10-23
tags:
  - cloud-architecture
  - google-cloud
---

## Ingest

### Stream

- [Pub/Sub](Pub%20Sub.md)

### Batch

- [Cloud Storage](Cloud%20Storage.md)
	- Storage Transfer Service—moving large amounts of data from on-prem
- [BigQuery](BigQuery.md)
	- BigQuery Transfer Service—moving from SaaS e.g. YouTube, Google Ads
- Big Data (e.g. PBs)
	- Storage Transfer Appliance

### Application

- [Cloud Logging](Cloud%20Logging.md)
- [Pub/Sub](Pub%20Sub.md)
- [Cloud SQL](Cloud%20SQL.md)
- [Cloud Firestore](Cloud%20Firestore.md)—noSQL
- [Cloud Bigtable](Cloud%20Bigtable.md)—large amounts of noSQL
- [Cloud Spanner](Cloud%20Spanner.md)—large amounts of structured data

## Storage

### Objects

- [Cloud Storage](Cloud%20Storage.md)
- Cloud Storage for Firebase

### Databases

- SQL
	- [Cloud SQL](Cloud%20SQL.md)
	- [Cloud Spanner](Cloud%20Spanner.md)
- noSQL
	- [Cloud Bigtable](Cloud%20Bigtable.md)
	- [Cloud Firestore](Cloud%20Firestore.md)

### Warehouse

- [BigQuery](BigQuery.md)

## Process / Analyse

### Compute

- [Compute Engine](Compute%20Engine.md)
- [Kubernetes Engine](Kubernetes%20Engine%20(GKE).md)
- [App Engine](App%20Engine.md)

### Large Scale

- [Dataproc](Dataproc.md)—Hadoop, Spark etc.
- [Dataflow](Dataflow.md)—Apache Beam
- [Dataprep](Dataprep.md)

### Analyse

- [BigQuery](BigQuery.md)—PBs of data analysis at speed

## Explore / Visualize

### Science

- Cloud Datalab—Jupyter notebooks

### Visualize

- BigQuery BI
- [Looker Studio](Google%20Looker%20Studio.md)
- [Looker](Looker.md)

## References

- [Data Lifecycle](Data%20Lifecycle.md)
