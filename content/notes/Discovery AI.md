---
title: Discovery AI
date: 2023-12-22
last-modified: 2024-01-05
tags:
  - google-cloud
  - ai
  - ml
  - search
  - recommendations
  - e-commerce
  - retail
---

## Overview

- Goal: significantly enhance shopping experience of individual buyers on e-commerce sites
- Highly relevant and personalised product recommendations and search results
- Multi-modal:
	- Recommendations AI
	- Retail Search
	- Vision API Product Search
		- Use images as search query

### Recommendations AI

- Improve conversion, click through rates, conversion
- Looks at: browsing behaviour on-site, current context, SKUs available in catalog

### Retail Search

- Personalised and relevant search results
	- Understands intent and context
- Features:
	- Advanced query understanding—returns product and category pages for broad queries, including non-product searches
	- Semantic search—extract product attributes and match with website content, classify products and grouping of info
	- Optimise and control—optimise results, ranking, meet business goals
	- Security and privacy—all data isolated and private

### Retail API

- Required to understand recommendations and search
- Common endpoint
- Ingest and manage input data
- Request predictions based on data
- Same ingested data used for recommendations and search
- Fully managed
- Global

![[files/retail_api_architecture.svg]]

## Project Phases and Timelines

1. Collect customer data
	- Obtain product catalog data
	- Capture user event data
	- 90 days
2. Ingest customer data
	- Ingest catalog
	- Ingest historical events
	- Configure real-time events (GTM, JS pixel)
	- Duration varies
3. Train models
	- Select models
	- Train
	- 1–4 days
4. Integrate predictions
	- Integrate API into site, emails etc.
	- Set up recommendations token and experiment ID
	- Duration varies
5. A/B testing
	- Duration varies

## Reference Architecture

![[files/retail_api_reference_arch.svg]]