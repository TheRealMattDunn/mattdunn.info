---
title: Google Cloud Machine Learning
date: 2023-08-01
last-modified: 2023-10-23
tags:
  - google cloud
  - machine learning
  - ml
  - moc
---

## AI Portfolio

![[files/google_cloud_ai_portfolio.svg]]

## Big Data and AI/ML Products

| Ingestion and Process         | Storage                                       | Analytics                                          | [Machine Learning](notes/Machine%20Learning.md) |
| ----------------------------- | --------------------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| [Pub Sub](notes/Pub%20Sub.md) | [Cloud Storage](notes/Cloud%20Storage.md)     | [BigQuery](notes/BigQuery.md)                      | [Vertex AI](notes/moc/Vertex%20AI.md)           |
| [Dataflow](notes/Dataflow.md) | [Cloud SQL](notes/Cloud%20SQL.md)             | [Looker Studio](notes/Google%20Looker%20Studio.md) |                                                 |
| [Dataproc](notes/Dataproc.md) | [Cloud Spanner](notes/Cloud%20Spanner.md)     | [Looker](notes/Looker.md)                          |                                                 |
| Cloud Data Fusion             | [Cloud Bigtable](notes/Cloud%20Bigtable.md)   |                                                    |                                                 |
|                               | [Cloud Firestore](notes/Cloud%20Firestore.md) |                                                    |                                                 |

## Options for Building ML Models in Google Cloud

- [BigQuery ML](notes/BigQuery%20ML.md)
- [Prebuilt APIs](notes/Google%20Cloud%20Prebuilt%20AI%20APIs.md)
- [AutoML](notes/AutoML.md)—no-code solution in [Vertex AI](notes/moc/Vertex%20AI.md)
- [Custom training](notes/Vertex%20AI%20Workbench.md)—control over ML pipelines in Vertex AI

### Comparison

|                                     | BigQuery ML    | Prebuilt APIs                | AutoML                       | Custom Training              |
| ----------------------------------- | -------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| Data types                          | Tabular        | Tabular, images, video, text | Tabular, images, video, text | Tabular, images, video, text |
| Training data size                  | Medium – large | N/A                          | Small – medium               | Medium – large               |
| ML and coding expertise             | Medium         | Low                          | Low                          | High                         |
| Flexibility to tune hyperparameters | Medium         | None                         | None                         | High                         |
| Time to train                       | Medium         | None                         | Medium                       | Long                             |

### Choosing

| Considerations                              | Best Choice     |
| ------------------------------------------- | --------------- |
| Familiar with SQL, and data in BigQuery     | BigQuery ML     |
| Little ML experience                        | Prebuilt APIs   |
| Custom models with own data, minimal coding | AutoML          |
| Full control of ML workflow                 | Custom Training |
