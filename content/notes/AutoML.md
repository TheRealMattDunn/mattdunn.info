---
title: AutoML
date: 2023-08-01
last-modified: 2023-10-23
tags:
  - google cloud
  - machine learning
  - ml
---

## Overview

- Problem statement: training and deploying [ML](notes/Machine%20Learning.md) models is time-consuming
- No-code solution
- Allows fast prototyping, or exploration of new datasets before investing in development
- Supports: tabular data, images, video, text
- Solves different types of problems (objectives)
- Upload data from [Cloud Storage](notes/Cloud%20Storage.md), [BigQuery](notes/BigQuery.md) or local storage

## Model Options

### Image

- Classification—list of categories
- Object detection—labels and bounding boxes

### Tabular

- Classification—list of categories
- Regression—returns numeric values
- Forecasting—time-dependent, predict series of numeric values in the future

### Text

- Classification—list of categories
- Entity extraction—extract and label known entities
- Sentiment analysis—identify emotional opinion

## Video

- Classification—list of categorized shots and segments
- Object tracking—list of shots and segments where objects are detected
- Action recognition—list of categorized actions with moments they happened

## Key Technologies

- Transfer learning
	- Uses a small dataset alongside model pretrained on a large, similar dataset
- Neural architecture search
	- Trains and evaluates multiple models, compares, and chooses best one
