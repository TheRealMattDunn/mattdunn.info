---
title: "BigQuery"
date: "2022-02-16"
tags:
- gcp
- data
- data warehouse
- ml
---

## Overview

- Data warehouse
- SQL queries
- Serverless
- Multi-regional
- SQL column store
- Terabytes to petabytes
- ML and BI
- Public datasets available
- Real-time analytics
- Automatic replication, 7 day storage of changes
- BigQuery Slots
	- Up-front purchase of processing capacity
	- Flat-rate pricing
	- Useful for CapEx optimization model
- [Cloud Monitoring](notes/Cloud%20Monitoring.md)—e.g. number of jobs running, bytes scanned during a query, distribution of query times

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

# References

- [AI ML Lifecycle](notes/AI%20ML%20Lifecycle.md)
- [GCP Database Connections](notes/GCP%20Database%20Connections.md)
