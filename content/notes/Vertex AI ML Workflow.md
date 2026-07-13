---
title: Vertex AI ML Workflow
date: 2023-08-03
last-modified: 2023-10-23
tags:
  - google-cloud
  - ai
  - machine-learning
---

## Data Preparation

1. Upload data
	- Check data requirements
	- Label data—manually, or pay for Google to do this via the [Vertex AI](notes/moc/Vertex%20AI.md) console
	- Upload—local, [BigQuery](notes/BigQuery.md) or [Cloud Storage](notes/Cloud%20Storage.md)
2. Feature engineers
	- Data prep before training—time-consuming and tedious
	- Vertex AI Feature Store
		- Organize, store and server [ML](notes/Machine%20Learning.md) features
		- Engineers can use features available in Feature Store dictionary to build a dataset
		- Benefits: features shareable, reusable and scalable, easy to use

## Model Training

- Supervised learning—task driven, identifies a goal
	- Classification—predict a category
	- Regression—predict a continuous number
- Unsupervised learning—data-driven, identifies a pattern
	- Clustering
	- Association—identify underlying relationships
	- Dimensionality reduction—transform data from a high-dimensional space to a low-dimensional space
- Hyperparameters—user-defined training parameters

## Model Evaluation

- [Confusion Matrix](notes/Confusion%20Matrix.md)
	- [Precision and Recall](notes/Precision%20and%20Recall.md)
- Feature importance
	- Bar chart shown in Vertex AI showing which features are important to the model—explainable AI

## Model Deployment and Monitoring

- Model serving
	1. Model deployment
	2. Model monitoring

### MLOps

- Solves pain point—data and code continuously evolving
- MLOps ~ DevOps
	- Continuous integration
	- Continuous training
	- Continuous delivery
- Automate serving of model
- Monitoring at every step of ML workflow

### Model Deployment

- Deploy to endpoint—when immediate results and low latency required, e.g. recommendations
- Batch prediction—no immediate response required
- Offline prediction—deploy outside of [Google Cloud](notes/moc/Google%20Cloud.md)

### Monitoring

- Vertex AI Pipelines
	- Automates, monitors, governs ML systems
	- Orchestrates workflow
	- Serverless
	- Triggers alerts
