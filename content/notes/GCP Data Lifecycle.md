---
title: "GCP Data Lifecycle"
date: "2022-02-08"
tags:
- cloud architecture
- gcp
---

## Ingest

### Stream

- [Pub/Sub](notes/Google%20Cloud%20Pub%20Sub.md)

### Batch

- [Cloud Storage](notes/Google%20Cloud%20Storage.md)
	- Storage Transfer Service—moving large amounts of data from on-prem
- [BigQuery](notes/Google%20BigQuery.md)
	- BigQuery Transfer Service—moving from SaaS e.g., YouTube, Google Ads
- Big Data (e.g., PBs)
	- Storage Transfer Appliance

### Application

- Cloud Logging
- [Pub/Sub](notes/Google%20Cloud%20Pub%20Sub.md)
- [Cloud SQL](notes/Google%20Cloud%20SQL.md)
- Cloud Firestore—noSQL
- [Bigtable](notes/Google%20Cloud%20Bigtable.md)—large amounts of noSQL
- [Cloud Spanner](notes/Google%20Cloud%20Spanner.md)—large amounts of structured data

## Storage

### Objects

- [Cloud Storage](notes/Google%20Cloud%20Storage.md)
- Cloud Storage for Firebase

### Databases

- SQL
	- [Cloud SQL](notes/Google%20Cloud%20SQL.md)
	- [Cloud Spanner](notes/Google%20Cloud%20Spanner.md)
- noSQL
	- [Bigtable](notes/Google%20Cloud%20Bigtable.md)
	- Cloud Firestore

### Warehouse

- [BigQuery](notes/Google%20BigQuery.md)

## Process / Analyse

### Compute

- [Compute Engine](notes/Google%20Compute%20Engine.md)
- [Kubernetes Engine](notes/Google%20Kubernetes%20Engine.md)
- [App Engine](notes/Google%20App%20Engine.md)

### Large Scale

- [Dataproc](notes/Google%20Cloud%20Dataproc.md)—Hadoop, Spark etc.
- [Dataflow](notes/Google%20Cloud%20Dataflow.md)—Apache Beam
- [Dataprep](notes/Google%20Cloud%20Dataprep.md)

### Analyse

- [BigQuery](notes/Google%20BigQuery.md)—PBs of data analysis at speed

## Explore / Visualize

### Science

- Cloud Datalab—Jupyter notebooks

### Visualize

- BigQuery BI
- Cloud Data Studio
- Looker

# References

- [Data Lifecycle](notes/Data%20Lifecycle.md)
- [Google Cloud Certified Professional Cloud Architect](notes/Google%20Cloud%20Certified%20Professional%20Cloud%20Architect.md)
