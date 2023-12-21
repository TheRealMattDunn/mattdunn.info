---
title: Common Pitfalls of Machine Learning
date: 2023-08-18
last-modified: 2023-09-05
tags:
  - machine-learning
---

1. Expecting [Machine Learning](Machine%20Learning.md) model training to be faster than writing software
	- Stills needs lots of supporting software and infrastructure
		- Need to ensure robust, scalable etc.
	- Also pipelines etc. for data collection, prep, training
	- Push people to start with software solution first
1. No data collected yet
	- Also need to regularly using this data, e.g. to generate reports—otherwise likely to be stale
1. Keep humans in the loop
	- For core/critical systems especially
	- Curate training data, handle edge cases, review data
1. Product launch focused on ML algorithm
2. ML optimized for the wrong thing
	- e.g. search optimized for engagement (clicks)
		- Might learn to serve bad results—cause users to click back and try other links
1. Is your ML improving things in the real world?
	- Need to show impact to stakeholders
1. Using a custom algorithm vs pre-trained
	- Expectation—ease of use of pre-trained models means building own is easy—false
1. Not retraining algorithms
	- Invest in making process seamless
1. Don't design your own perception or NLP algorithm
	- Seem much easier than they really are
	- Optimized from decades of research
	- Always use off the shelf models
