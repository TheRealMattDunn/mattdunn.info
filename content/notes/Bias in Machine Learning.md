---
title: Bias in Machine Learning
date: 2023-09-05
last-modified: 2023-09-05
tags:
  - machine-learning
  - ai
  - responsible-ai
---

## Types of Bias

- Reporting bias
	- Frequency of events/properties/outcomes in data set does not accurately reflect real-world frequency
	- e.g. People reporting unusual circumstances, ignoring the ordinary
- Interaction bias
	- Algorithm biased due to the way users interact with it
- Latent bias
	- Incorrectly identifying something based on historical data, or a preexisting stereotype in the data e.g. correlating "doctor" with men, because of stock imagery
- Selection bias
	- Data not chosen in a way reflected of real-world distribution
	- Coverage bias—Data not selected in a representative fashion
	- Non-response bias—Unrepresentative due to participation gaps
	- Sampling bias—Proper randomization not used during data collection
- Automation bias
	- Tendency to favour results generated by automated systems over those generated by non-automated systems
	- e.g. Favouring model when humans perform with better [precision and recall](notes/Precision%20and%20Recall.md)
- Group attribution bias
	- Tendency to generalize what is true of individuals to an entire group which they belong
	- In-group bias—A preference for members of a group to which *you also belong*
	- Out-group homogeneity bias—Stereotyping of members of groups to which *you do not belong*
- Implicit bias
	- Assumptions made based on own mental models and personal experiences
	- Confirmation bias—Data processed in such a way that it affirms preexisting beliefs and hypotheses, e.g. keep training model until it produces result that aligns with original hypothesis

## Affects

- Affects entire pipeline
- Can appear at every point of pipeline:
	- Collection
	- Labelling
	- Model

## Checklist for Bias-Related Issues

- Check for use case using any of the following:
	- Biometrics
	- Race
	- Skin colour
	- Religion
	- Sexual orientation
	- Socioeconomic status
	- Income
	- Country
	- Location
	- Health
	- Language
	- Dialect
- Also check for data likely to be correlated with the above, e.g. postcodes/zip codes etc. correlated with socioeconomic status and income

## Evaluating Metrics with Inclusion

- Look at performance of model across subgroups to ensure no unconscious bias
- Use [Confusion Matrix](notes/Confusion%20Matrix.md) on subgroups (classification problems only)
- Concentrate on false negative and false positive rates to see how adversely a subgroup is performing
- Calculate e.g. [Precision and Recall](notes/Precision%20and%20Recall.md) for subgroups
- Example: whether to blur an image of a face on Street View
		- More false positives (annoying) vs more false negatives (PII issue)
- Compare false positive and false negative rates across subgroups
