---
title: "GCP BigQuery ML"
date: "2022-09-07"
tags:
- gcp
- data
- ai
- ml
---

## Supported Model Types

![BigQuery ML Models](files/bigquery_ml_models.svg)

## Steps

1. ETL into [BigQuery](notes/GCP%20BigQuery.md)
2. Select and pre-process features—BigQuery does some of this, e.g. one-hot encoding
3. Create model—`CREATE MODEL`
	- Hyperparameters—tune model to achieve best result
	- Manual or automatic
4. Evaluate model—`ML.EVALUATE`
5. Get predictions—`ML.PREDICT`

## Key Commands

- Create model: `CREATE OR REPLACE MODEL`
	- `OPTIONS`—`model_type` required
- Training progress: `ML.TRAINING_INFO`
- Inspect what a model learned: `ML.WEIGHTS`
	- Output: weight -1 to 1 for each feature—magnitude of weight indicates relevance of feature to model
- Stats/metrics about features/columns: `ML.FEATURE_INFO`
- Evaluate performance against evaluation data set: `ML.EVALUATE`
- Batch predictions: `ML.PREDICT`
	- Pass data to make predictions on

## Supervised Models

- Require column called `label`, or specify label column in model options
- Features are columns in select statement
- Model object—object in [BigQuery](notes/GCP%20BigQuery.md) data set
