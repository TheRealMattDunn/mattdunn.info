---
title: "Data Lifecycle"
date: "2022-02-08"
tags:
- cloud architecture
---

# Data Lifecycle

![Data Lifecycle](/files/data_lifecycle.svg)

## Ingest

### Stream

- Cloud Pub/Sub

### Batch

- Cloud Storage
	- Storage Transfer Service - moving large amounts of data from on-prem
- BigQuery
	- BigQuery Transfer Service - moving from SaaS e.g. YouTube, Google Ads
- Big Data (e.g. PBs)
	- Storage Transfer Appliance

### Application

- Cloud Logging
- Cloud Pub/Sub
- Cloud SQL
- Cloud Firestore - noSQL
- Bigtable - large amounts of noSQL
- Cloud Spanner - large amounts of structured data

## Storage

### Objects

- Cloud Storage
- Cloud Storage for Firebase

### Databases

- SQL
	- Cloud SQL
	- Cloud Spanner
- noSQL
	- Bigtable
	- Cloud Firestore

### Warehouse

- BigQuery

## Process / Analyse

### Compute

- Compute Engine
- Google Kubernetes Engine
- App Engine

### Large Scale

- Dataproc - Hadoop, Spark etc.
- Dataflow - Apache Beam
- Dataprep

### Analyse

- BigQuery - PBs of data analysis at speed

## Explore / Visualize

### Science

- Cloud Datalab - Jupyter notebooks

### Visualize

- BigQuery BI
- Cloud Data Studio
- Looker

# References

- [Google Cloud Certified Professional Cloud Architect](<./Google Cloud Certified Professional Cloud Architect.md>)
