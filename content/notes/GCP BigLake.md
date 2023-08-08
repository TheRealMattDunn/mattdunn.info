---
title: "GCP BigLake"
date: "2023-06-19"
tags:
- gcp
- data
- analytics
- data warehouse
- data lake
---

## Overview

- Access engine for data in [BigQuery](notes/GCP%20BigQuery.md) (data warehouse) and [Cloud Storage](notes/GCP%20Cloud%20Storage.md) (data lake)
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
