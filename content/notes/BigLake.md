---
title: BigLake
date: 2023-06-19
last-modified: 2023-10-23
tags:
  - google-cloud
  - data
  - analytics
  - data-warehouse
  - data-lake
---

## Overview

- Access engine for data in [BigQuery](notes/BigQuery.md) (data warehouse) and [Cloud Storage](notes/Cloud%20Storage.md) (data lake)
	- Single interface/semantics irrespective of storage/format
- Expects GCS data to be structured, e.g. CSV, JSON, Parquet, ORC, Avro

### Process

- Create table in BigQuery—point to GCS as underlying data source
	- Can now query BigQuery interface to access GCS data—storage abstract from consumer

## Alternatives

- BigQuery External Tables
	- Differences:
		- BigLake allows fine-grained access control at row/column level
		- External tables—user performing query needs authorization to underlying data e.g. GCS bucket
		- With BigLake, it's BigLake that has access authorization
