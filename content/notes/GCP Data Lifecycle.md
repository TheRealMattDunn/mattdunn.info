---
title: "GCP Data Lifecycle"
date: "2022-02-08"
tags:
- cloud architecture
- gcp
---

## Ingest

### Stream

- [Pub/Sub](notes/GCP%20Pub%20Sub.md)

### Batch

- [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
	- Storage Transfer Service—moving large amounts of data from on-prem
- [BigQuery](notes/GCP%20BigQuery.md)
	- BigQuery Transfer Service—moving from SaaS e.g. YouTube, Google Ads
- Big Data (e.g. PBs)
	- Storage Transfer Appliance

### Application

- [Cloud Logging](notes/GCP%20Cloud%20Logging.md)
- [Pub/Sub](notes/GCP%20Pub%20Sub.md)
- [Cloud SQL](notes/GCP%20Cloud%20SQL.md)
- [Cloud Firestore](notes/GCP%20Cloud%20Firestore.md)—noSQL
- [Cloud Bigtable](notes/GCP%20Cloud%20Bigtable.md)—large amounts of noSQL
- [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md)—large amounts of structured data

## Storage

### Objects

- [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
- Cloud Storage for Firebase

### Databases

- SQL
	- [Cloud SQL](notes/GCP%20Cloud%20SQL.md)
	- [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md)
- noSQL
	- [Cloud Bigtable](notes/GCP%20Cloud%20Bigtable.md)
	- [Cloud Firestore](notes/GCP%20Cloud%20Firestore.md)

### Warehouse

- [BigQuery](notes/GCP%20BigQuery.md)

## Process / Analyse

### Compute

- [Compute Engine](notes/GCP%20Compute%20Engine.md)
- [Kubernetes Engine](notes/GCP%20Kubernetes%20Engine%20(GKE).md)
- [App Engine](notes/GCP%20App%20Engine.md)

### Large Scale

- [Dataproc](notes/GCP%20Dataproc.md)—Hadoop, Spark etc.
- [Dataflow](notes/GCP%20Dataflow.md)—Apache Beam
- [Dataprep](notes/GCP%20Dataprep.md)

### Analyse

- [BigQuery](notes/GCP%20BigQuery.md)—PBs of data analysis at speed

## Explore / Visualize

### Science

- Cloud Datalab—Jupyter notebooks

### Visualize

- BigQuery BI
- [Looker Studio](notes/Google%20Looker%20Studio.md)
- [Looker](notes/Google%20Looker.md)

# References

- [Data Lifecycle](notes/Data%20Lifecycle.md)
