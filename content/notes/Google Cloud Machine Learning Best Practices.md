---
title: Google Cloud Machine Learning Best Practices
date: 2022-02-16
last-modified: 2023-12-21
tags:
  - google-cloud
  - ai
  - ml
---

## Development

- Use Jupyter notebooks for development and experimentation
	- One instance per teammate per project
	- [Secure PII data in notebooks](https://github.com/GoogleCloudPlatform/notebooks-blueprint-security)
- Store prepared data and model in the same project
- Optimize performance and costs

### Vertex AI Workbench Notebooks

- Use What-If-Tool (WIT)—Analyse models for bias
- Use Language Interpretability Tool (LIT)—Understand NLP model behaviour (visual interactive tool)

### TensorBoard

- Find and compare experiments, e.g. based on hyperparameters
- Enterprise service—aimed at data scientists and ML researchers
	- Collaboration
	- Track, share and compare experiments
	- e.g. Track loss and accuracy over time, visual model graph, project embeddings to a lower-dimensional space

## Data Prep/Storage

- Prepare a good amount of training data
	- More accurate models
- Store tabular data in [BigQuery](notes/BigQuery.md)
- Store unstructured data in [Cloud Storage](notes/Cloud%20Storage.md)
	- Combine images/video/audio clips into large files
		- Improves read/write throughput
		- Aim for files >= 100MiB, 100–10,000 shards
- Avoid storing data in block storage

### Vertex AI Feature Store

- When training a new model:
	1. Search [Vertex AI](notes/moc/Vertex%20AI.md) Feature Store for existing features meeting requirements
		- Fetch features for training labels using Feature Store's batch serving capability
	1. If no existing features, create new features
		- Cloud Storage, BigQuery or raw data from data lake
		- Create periodic job to merge into Feature Store

## Processing

- Use TensorFlow Extended for TensorFlow projects
- Process tabular data with [BigQuery](notes/BigQuery.md)
- Process unstructured data with:
	- [Dataflow](notes/Dataflow.md)—General use cases, Apache Bean
	- [Dataproc](notes/Dataproc.md)—Apache Hadoop or Spark use cases
- Link data to model with Vertex AI Managed Datasets
	- Optional
	- Clear link between data and custom trained models
	- Automatic or manual splitting into train, test and validation data sets

## Training

- Small datasets—Train in [Jupyter notebooks](notes/Vertex%20AI%20Workbench.md)
- Large datasets—Use Vertex AI Training Service
	- Also use for prod, or small datasets with scheduled training

### Hyperparameter Tuning

- Use Automated Model Enhancer—Removes need to manually adjust hyperparameters

## Production

- Specify hardware appropriate for model
	- CPUs vs GPUs
- Plan for additional inputs to model
- Enable autoscaling

## References

- [Machine Learning](notes/Machine%20Learning.md)
- [Vertex AI](notes/moc/Vertex%20AI.md)
