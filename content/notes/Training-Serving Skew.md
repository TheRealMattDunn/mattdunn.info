---
title: Training-Serving Skew
date: 2023-08-18
last-modified: 2023-08-18
tags:
  - machine learning
  - ML
---

## Overview

- Discrepancy in how data is handled during training and security predictions
- e.g. Difference in pipelines—maintained by different teams
	- Use same code for training and prediction
	- Need to handle both batch (training) and streaming (predictions)—[Dataflow](GCP%20Dataflow.md)
- Common reason ML projects fail