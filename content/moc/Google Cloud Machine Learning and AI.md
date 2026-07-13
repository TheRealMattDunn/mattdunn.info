---
title: Google Cloud Machine Learning
date: 2023-08-01
last-modified: 2023-10-23
tags:
  - google-cloud
  - machine-learning
  - moc
---

## AI Portfolio

![[files/google_cloud_ai_portfolio.svg]]

## Big Data and AI/ML Products

| Ingestion and Process         | Storage                                       | Analytics                                          | [Machine Learning](Machine%20Learning.md) |
| ----------------------------- | --------------------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| [Pub Sub](Pub%20Sub.md) | [Cloud Storage](Cloud%20Storage.md)     | [BigQuery](BigQuery.md)                      | [Vertex AI](moc/Vertex%20AI.md)           |
| [Dataflow](Dataflow.md) | [Cloud SQL](Cloud%20SQL.md)             | [Looker Studio](Google%20Looker%20Studio.md) |                                                 |
| [Dataproc](Dataproc.md) | [Cloud Spanner](Cloud%20Spanner.md)     | [Looker](Looker.md)                          |                                                 |
| Cloud Data Fusion             | [Cloud Bigtable](Cloud%20Bigtable.md)   |                                                    |                                                 |
|                               | [Cloud Firestore](Cloud%20Firestore.md) |                                                    |                                                 |

## Options for Building ML Models in Google Cloud

- [BigQuery ML](BigQuery%20ML.md)
- [Prebuilt APIs](Google%20Cloud%20Prebuilt%20AI%20APIs.md)
- [AutoML](AutoML.md)—no-code solution in [Vertex AI](moc/Vertex%20AI.md)
- [Custom training](Vertex%20AI%20Workbench.md)—control over ML pipelines in Vertex AI

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
