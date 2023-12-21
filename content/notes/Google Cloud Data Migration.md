---
title: Data Migration
date: 2022-02-28
last-modified: 2023-10-23
tags:
  - google-cloud
  - cloud-architecture
---

## Best Practices

- Does the data need to be transformed?
	- ETL—[Dataflow](notes/Dataflow.md)
- Is the data relational?
	- [Cloud Spanner](notes/Cloud%20Spanner.md), [Cloud SQL](notes/Cloud%20SQL.md)
	- Database Migration Service
- Is the migration HBase (Hadoop database) to noSQL?
	- [Cloud Bigtable](notes/Cloud%20Bigtable.md)
- Do VM instances need migration?
	- Migrate for Compute Engine

## Data as Objects Migration

| Step                            | Description                                                                 |
| ------------------------------- | --------------------------------------------------------------------------- |
| 1. Organize team                | Identify approvers and execution teams                                      |
| 2. Requirements and resources   | Which data? Where to?                                                       |
| 3. Choose transfer options      | How long? Cost? Offline vs online, security                                 |
| 4. Execute prep and testing     | Calculate costs and ROI, functional and performance tests                   |
| 5. Certify transfer's integrity | Enable versioning and backup and destination, validate data prior to moving |

## Big Data Migration Decision Tree

![Google Cloud Big Data Migration Decision Tree](files/google_cloud_big_data_migration_decision_tree.svg)
