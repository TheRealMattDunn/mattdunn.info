---
title: "GCP ML Best Practices"
date: "2022-02-16"
tags:
- gcp
- ai
- ml
---

## Environment Setup

- Use Jupyter notebooks for development
	- One instance per teammate per project
- Store prepared data and model in the same project

## Development

- Prepare a good amount of training data
	- More accurate models
- Store tabular data in [BigQuery](notes/GCP%20BigQuery.md)
- Store unstructured data in [Cloud Storage](notes/GCP%20Cloud%20Storage.md)

## Processing

- Use TensorFlow Extended for TensorFlow projects
- Process tabular data [BigQuery](notes/GCP%20BigQuery.md)
- Process unstructured data with:
	- [Dataflow](notes/GCP%20Dataflow.md)—General use cases, Apache Bean
	- [Dataproc](notes/GCP%20Dataproc.md)—Apache Hadoop or Spark use cases
- Link data to model with managed datasets

## Production

- Specify hardware appropriate for model
	- CPUs vs GPUs
- Plan for additional inputs to model
- Enable autoscaling

# References

- [Machine Learning](notes/Machine%20Learning.md)
- [Vertex AI](notes/moc/GCP%20Vertex%20AI.md)
