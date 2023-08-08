---
title: "GCP Machine Learning"
date: "2023-08-01"
tags:
- gcp
- machine learning
- ml
- moc
---

## AI Portfolio

![[files/gcp_ai_portfolio.svg]]

## Big Data and AI/ML Products

| Ingestion and Process               | Storage                                             | Analytics                                          | [Machine Learning](notes/Machine%20Learning.md) |
| ----------------------------------- | --------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| [Pub Sub](notes/GCP%20Pub%20Sub.md) | [Cloud Storage](notes/GCP%20Cloud%20Storage.md)     | [BigQuery](notes/GCP%20BigQuery.md)                | [Vertex AI](notes/moc/GCP%20Vertex%20AI.md)     |
| [Dataflow](notes/GCP%20Dataflow.md) | [Cloud SQL](notes/GCP%20Cloud%20SQL.md)             | [Looker Studio](notes/Google%20Looker%20Studio.md) |                                                 |
| [Dataproc](notes/GCP%20Dataproc.md) | [Cloud Spanner](notes/GCP%20Cloud%20Spanner.md)     | [Looker](notes/Google%20Looker.md)                 |                                                 |
| Cloud Data Fusion                   | [Cloud Bigtable](notes/GCP%20Cloud%20Bigtable.md)   |                                                    |                                                 |
|                                     | [Cloud Firestore](notes/GCP%20Cloud%20Firestore.md) |                                                    |                                                 |

## Options for Building ML Models in GCP

- [BigQuery ML](notes/GCP%20BigQuery%20ML.md)
- [Prebuilt APIs](notes/GCP%20Prebuilt%20AI%20APIs.md)
- [AutoML](notes/GCP%20AutoML.md)—no-code solution in [Vertex AI](notes/moc/GCP%20Vertex%20AI.md)
- [Custom training](notes/GCP%20Vertex%20AI%20Workbench.md)—control over ML pipelines in Vertex AI

### Comparison

|                                     | BigQuery ML    | Prebuilt APIs                | AutoML                       | Custom Training              |
| ----------------------------------- | -------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| Data types                          | Tabular        | Tabular, images, video, text | Tabular, images, video, text | Tabular, images, video, text |
| Training data size                  | Medium – large | N/A                          | Small – medium               | Medium – large               |
| ML and coding expertise             | Medium         | Low                          | Low                          | High                         |
| Flexibility to tune hyperparameters | Medium         | None                         | None                         | High                         |
| Time to train                       | Medium         | None                         | Medium                       | Long                             |

### Choosing

| Considerations                              | Best Choice   |
| ------------------------------------------- | ------------- |
| Familiar with SQL, and data in BigQuery     | BigQuery ML   |
| Little ML experience                        | Prebuilt APIs |
| Custom models with own data, minimal coding | AutoML        |
| Full control of ML workflow                 | Custom Training              |
