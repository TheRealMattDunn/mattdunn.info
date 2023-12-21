---
title: Vertex AI
date: 2022-02-16
last-modified: 2023-12-07
tags:
  - ai
  - ml
  - google cloud
  - moc
---

## Workflow

- [Vertex AI ML Workflow](notes/Vertex%20AI%20ML%20Workflow.md)

## Components

- Data sets
	- Managed by Vertex AI—can be linked to a model
- Feature store
	- Ingest, serve and share [Machine Learning](Machine%20Learning.md) features
- Labelling tasks
	- Request human labelling of video, image or text data
- [Vertex AI Workbench](notes/Vertex%20AI%20Workbench.md)
	- Jupyter Notebook development environment
	- Can process data in [Dataproc](notes/Dataproc.md), train models etc.
	- Use the [Vertex AI Python SDK](Vertex%20AI%20Python%20SDK.md)
- Pipelines
	- Automate, monitor, govern ML systems
	- Orchestrate workflow
	- Store workflow artefacts using Vertex AI metadata—analyse lineage of workflow artefacts e.g. training data, hyperparameters, code etc.
- Training
	- [AutoML](notes/AutoML.md)
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

### Generative AI

- [Gemini](notes/Gemini.md)

## Tools

- Connected to [Cloud Logging](notes/Cloud%20Logging.md) and [Cloud Monitoring](notes/Cloud%20Monitoring.md)
- Client libraries—native libraries (Python, Node.js, Java), and API libraries for other languages
- REST API
- Deep Learning VM Images—[Compute Engine](notes/Compute%20Engine.md) images with tools pre-installed e.g. TensorFlow, PyTorch
- Deep Learning Containers