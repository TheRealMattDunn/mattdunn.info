---
title: "GCP BigQuery"
date: "2022-02-16"
tags:
- gcp
- data
- data warehouse
- analytics
- ml
---

## Overview

- Data warehouse
- Storage plus analytics
- SQL queries
- Serverless
- Multi-regional
- SQL column store
- Terabytes to petabytes
- [BigQuery ML](notes/GCP%20BigQuery%20ML.md), geospatial analysis and BI
- Public datasets available
- Real-time analytics
- Automatic replication, 7 day storage of changes
- [Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md)—e.g. number of jobs running, bytes scanned during a query, distribution of query times
- Encrypted at rest
- Built in [machine learning](notes/Machine%20Learning.md)
	- Write [ML](notes/Machine%20Learning.md) models directly in BigQuery using SQL

### Pricing

- Two options:
	- Pay by amount of data queries process
	- BigQuery Slots
		- Up-front purchase of processing capacity
		- Flat-rate pricing
		- Useful for CapEx optimization model

## Data Ingestion

![BigQuery Data Ingestion](files/bigquery_data_ingestion.svg)

- Data sources:
	- Internal data
	- External data
	- Multi-cloud data—[AWS](notes/moc/AWS.md), [Azure](notes/moc/Azure.md)
	- Public datasets
- Replicated
- Backed up
- Autoscaled

### External Data Sources

- Query data stored in other locations, e.g.
	- [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
	- [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md)
	- [Cloud SQL](notes/GCP%20Cloud%20SQL.md)
	- CSV
- No need to ingest into BigQuery
- Note: inconsistencies could form from saving and processing data separately
	- Consider using [Dataflow](notes/GCP%20Dataflow.md) to build streaming pipeline

## Query Jobs

### Interactive Query Jobs

- Default
- Query run as soon as possible
- Count towards concurrent rate limit and daily limit

### Batch Query Jobs

- Queued by BigQuery
- Query started as soon as idle resources available in shared resource pool
- If not started within 24 hours—automatically changed to interactive
- Don't count towards concurrent rate limit

## Authorized Views

- Grant specific users access to subsets of data via authorized views
- Source dataset contains the source data
- Create separate dataset to container authorized view
	- Users granted access to authorized view, but not underlying source dataset
- Authorized view granted access to the source dataset

## Policy Tags

- Apply to columns
- Define access to data when using:
	- Column-level access control
	- Dynamic data masking, e.g. PII, financial data, customer order history

# References

- [AI ML Lifecycle](notes/AI%20ML%20Lifecycle.md)
- [GCP Database Connections](notes/GCP%20Database%20Connections.md)
