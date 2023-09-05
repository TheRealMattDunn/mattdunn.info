---
title: Machine Learning
date: 2022-09-07
last-modified: 2023-09-05
tags:
  - ml
---

## Introduction

- Usage of algorithms to derive predictive insights from data and make repeated decisions
- Scaling up business intelligence and decision making
- Forwards looking—compare with analytics (backwards looking)
	- Predictions/inferences
- A computer writes a program for another computer
	- Computer figures out best program by looking at examples

### Vs AI

- AI
	- Discipline (c.f. Physics)
	- Abilities of computers to mimic human behaviours
- ML
	- Methodology
	- Generally refers to supervised and unsupervised learning

## What Problems Can ML Solve?

- Things currently done via 'rules'
- Scale, automate, personalise
- Not for problems were one set of rules fits all—generic
	- Personalisation—lots of data required

## Best Practices

- Break problems down into multiple ML models
	- Avoid trap of building monolithic models/solutions
- Avoid [Training-Serving Skew](Training-Serving%20Skew.md)
- Avoid [Common Pitfalls of Machine Learning](Common%20Pitfalls%20of%20Machine%20Learning.md)
- Avoid [Bias in Machine Learning](notes/Bias%20in%20Machine%20Learning.md)

## Concepts and Definitions

| Term                         | Definition                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| Example/instance/observation | Row in data set                                                                                       |
| Label                        | Value to predict. Can be numeric (requires regression model) or categorical (requires logistic model) |
| Features                     | Columns which aren't labels.                                                                          |
| Feature engineering          | Combine/transform features.                                                                           |
| One-hot encoding             | Transform categorical data to numeric. 1 or 0 to indicate whether category applies to the observation |
| Hyperparameters              | User-defined parameter used to control the learning process.                                          |

## Model Types

- Supervised learning—task driven, identifies a goal
	- Classification—predict a category
	- Regression—predict a continuous number
- Unsupervised learning—data-driven, identifies a pattern
	- Clustering
	- Association—identify underlying relationships
	- Dimensionality reduction—transform data from a high-dimensional space to a low-dimensional space

### Model Architectures

- Convolutional Neural Networks (CNNs)—image classification, object detection, recommendation systems
- Recurrent Neural Networks (RNNs)—sequence modelling, next word prediction, translation, speech-to-text
- Sorting/clustering—anomaly detection, pattern recognition
- Generational Adversarial Networks (GANs)—anomaly detection, cyber security, self-driving cars, reinforced learning

## Strategy

- Follow [The Path to Machine Learning](The%20Path%20to%20Machine%20Learning.md)
- Starts as data strategy
- Start with manual data analysis
	- Fail fast, try new ideas in an agile way
	- Then move to ML
- Data collection is the longest/hardest part—most likely to fail
- If you can't do analytics, you can't do ML

### ML Effort Allocation

![[files/ml_effort_allocation.svg]]

- Expectation:
	- Optimizing ML algorithm is most significant effort—practitioners focus on latest 'shiny' thing
- Reality:
	- Data collection and building infrastructure often overlooked
	- By spending time collecting data, KPIs often become apparent—rather than relying on intuition
