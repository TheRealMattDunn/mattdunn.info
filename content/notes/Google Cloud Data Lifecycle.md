---
title: Google Cloud Data Lifecycle
date: 2022-02-08
last-modified: 2023-10-23
tags:
  - cloud architecture
  - google cloud
---

## Ingest

### Stream

- [Pub/Sub](notes/Pub%20Sub.md)

### Batch

- [Cloud Storage](notes/Cloud%20Storage.md)
	- Storage Transfer Service—moving large amounts of data from on-prem
- [BigQuery](notes/BigQuery.md)
	- BigQuery Transfer Service—moving from SaaS e.g. YouTube, Google Ads
- Big Data (e.g. PBs)
	- Storage Transfer Appliance

### Application

- [Cloud Logging](notes/Cloud%20Logging.md)
- [Pub/Sub](notes/Pub%20Sub.md)
- [Cloud SQL](notes/Cloud%20SQL.md)
- [Cloud Firestore](notes/Cloud%20Firestore.md)—noSQL
- [Cloud Bigtable](notes/Cloud%20Bigtable.md)—large amounts of noSQL
- [Cloud Spanner](notes/Cloud%20Spanner.md)—large amounts of structured data

## Storage

### Objects

- [Cloud Storage](notes/Cloud%20Storage.md)
- Cloud Storage for Firebase

### Databases

- SQL
	- [Cloud SQL](notes/Cloud%20SQL.md)
	- [Cloud Spanner](notes/Cloud%20Spanner.md)
- noSQL
	- [Cloud Bigtable](notes/Cloud%20Bigtable.md)
	- [Cloud Firestore](notes/Cloud%20Firestore.md)

### Warehouse

- [BigQuery](notes/BigQuery.md)

## Process / Analyse

### Compute

- [Compute Engine](notes/Compute%20Engine.md)
- [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md)
- [App Engine](notes/App%20Engine.md)

### Large Scale

- [Dataproc](notes/Dataproc.md)—Hadoop, Spark etc.
- [Dataflow](notes/Dataflow.md)—Apache Beam
- [Dataprep](notes/Dataprep.md)

### Analyse

- [BigQuery](notes/BigQuery.md)—PBs of data analysis at speed

## Explore / Visualize

### Science

- Cloud Datalab—Jupyter notebooks

### Visualize

- BigQuery BI
- [Looker Studio](notes/Google%20Looker%20Studio.md)
- [Looker](notes/Looker.md)

## References

- [Data Lifecycle](notes/Data%20Lifecycle.md)
