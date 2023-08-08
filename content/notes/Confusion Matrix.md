---
title: "Confusion Matrix"
date: "2023-08-03"
tags:
- machine learning
- classification
---

## Introduction

- Table layout to visualize performance of a classification algorithm
- Foundation for many other metrics, e.g. [Precision and Recall](notes/Precision%20and%20Recall.md)
![[files/confusion_matrix.svg]]

## Examples

- True Positive (TP):
	- $Actual = Cat$
	- $Predicted = Cat$
- False Positive (FP):
	- $Actual = Dog$
	- $Predicted = Cat$
- True Negative (TN):
	- $Actual = Dog$
	- $Predicted = !Cat$
- False Negative (FN):
	- $Actual = Cat$
	- $Predicted = !Cat$
