---
title: GCP Vertex AI
date: 2022-02-16
last-modified: 2023-08-25
tags:
  - ai
  - ml
  - gcp
  - moc
---

## Workflow

- [GCP Vertex AI ML Workflow](GCP%20Vertex%20AI%20ML%20Workflow.md)

## Components

- Data sets
	- Managed by Vertex AI—can be linked to a model
- Feature store
	- Ingest, serve and share [Machine Learning](Machine%20Learning.md) features
- Labelling tasks
	- Request human labelling of video, image or text data
- [Vertex AI Workbench](GCP%20Vertex%20AI%20Workbench.md)
	- Jupyter Notebook development environment
	- Can process data in [Dataproc](GCP%20Dataproc.md), train models etc.
	- Use the [Vertex AI Python SDK](Vertex%20AI%20Python%20SDK.md)
- Pipelines
	- Automate, monitor, govern ML systems
	- Orchestrate workflow
	- Store workflow artefacts using Vertex AI metadata—analyse lineage of workflow artefacts e.g. training data, hyperparameters, code etc.
- Training
	- [AutoML](GCP%20AutoML.md)
	- Custom training
- Experiments
	- Vertex Visia—optimization, tune hyperparameters
	- TensorBoard—compare studies
- Models
	- Manage models on [Google Cloud](Google%20Cloud.md)
- Endpoints
	- Deploy models for serving predictions
	- Models trained in and out of Vertex AI
- Batch predictions
	- Group prediction requests
	- Asynchronous
- Metadata
	- Stores pipeline metadata