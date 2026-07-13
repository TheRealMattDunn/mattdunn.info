---
title: Vertex AI Search for Retail
date: 2023-12-22
last-modified: 2024-01-19
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

- (Formerly: Discovery AI)
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

## Data Ingestion

### Catalog

- Collection of product object
- Catalog branches—test new data before promoting to live
	- Up to 3—named 0, 1 and 2
	- Live site points to default_branch—can change to 0, 1 or 2

#### Schema

- Required:
	- id
	- title
- Optional (partial list):
	- name
	- type
	- categories
	- description
	- attributes
	- tags
	- priceinfo

##### Attributes

- Key-value pairs
	- e.g. store name, colour etc.
	- Strong signals for recommendations model—highly recommended
- System attributes
	- Predefined product fields
	- More info about product
	- e.g. size, colour, brand
- Custom attributes
	- User-defined
- Inventory-level attributes
	- Store-level info
	- Use for products where properties significantly change between stores and regions

#### Product Levels

- Hierarchy
- Choice: single of two-level catalog
- Types:
	- Primary items
		- Can be individual items
		- Or groups of similar items (e.g. groups of sizes/colours)
	- Variant items
		- Can only be individual items (e.g. SKUs)
	- Collection items
		- Bundles of primary or variant items (Retail Search only)
- Type is immutable
- Considerations:
	- Current catalog structure
	- User events—primary or variant product IDs passed?
		- If primary, use single level catalog
		- If variant, consider how many user events will be recorded for each—need to ensure enough data for each
	- What is most useful to return in search results/recommendations? Primary or variant items?

#### Inventory

- Price—current and original
- Availability—in stock, out of stock, back ordered, pre-ordered
- Quantity available
- Fulfilment info—click and collect, next day etc.
- Levels:
	- Product—online inventory only
	- Local—brick and mortar store inventory

#### Importing

##### Google Merchant Center (GMC)

- Why?
	- If already using
	- Minimal dev work
- Caveats:
	- Lacks important attributes
	- Lack of custom fields
- Use BigQuery Data Transfer Service to stage it BigQuery—daily

##### [BigQuery](notes/BigQuery.md)

- Why?
	- Data already in BigQuery, or can easily export to
- Caveats:
	- Tricky get schema format correct

##### [Cloud Storage](notes/Cloud%20Storage.md)

- Why?
	- Easiest to implement
	- Preferred if not GMC or BigQuery
- Caveats:
	- [JSONL](https://jsonlines.org/) format—File is not a JSON file, one JSON structure per line, each line is a product, no line breaks allowed

##### Direct Ingest—API

- Why?
	- Fast—no need to schedule
- Caveats:
	- Limit to number of products
	- Not suitable for large catalogs

### User Events

- Examples:
	- add-to-cart
	- category-page-view
	- detail-page-view
	- home-page-view
	- purchase-complete
	- search
	- shopping-cart-page-view
- Recommended to log all events
- visitorId
	- Unique to each customer
	- Across sessions and devices
	- Don't create manually
	- Options:
		- E-commerce user ID
		- GA client ID (device-scoped)

#### Importing

- Need to record historical and real time user events
- Bulk import historical events:
	- Cloud Storage
	- BigQuery
	- GA360
	- Inline—API
	- GA4 with BigQuery
- Real time:
	- Javascript pixel
	- Google Tag Manager
	- Direct API call
- Send in near-real time where possible
	- Personalisation of search <1 hr, recommendations much quicker
- Unjoined events
	- Events with product ID not in the catalog
	- Common problem
	- Monitor—keep <5%
- Alerts
	- Cloud monitoring predefined alerts
	- e.g. User event recording reduction, high events unjoined

### How much Data?

- Depends on recommendations model type and optimisation objective
- <100 products
	- Not a good fit—not enough variety
- 3 months' events—all model types
	- Product page views
	- Home page views
	- Add to cart
- "Frequently bought together"
	- 1–2 years purchase history
- 1 year of data for seasonality and trends in the model

## Building Recommendation Models

### Optimisation Objectives

- Types:
	- Click through rate (CTR)
	- Conversion rate (CVR)
	- Revenue per session
- Can't change once model is trained—training takes up to 2 days, so need to decide early
- Config options:
	- Diversification
		- Disabled by default
		- Maximum number of items recommended from each category
	- Price reranking
		- Order by relevance and price
	- Category matching
		- Only show products which share 1+ categories with context product
		- Can truncate deeply nested hierarchies to help match better
- Serving configurations
	- Use to change advanced model configurations options
		- Even after training
		- Near-real time changes
		- e.g. edit diversification and price reranking config in near-real time

### Model Types

- Others you may like
	- Default objective: Click through rate (can change to conversion rate)
	- Can add price ranking and diversification
	- Display on product details, add-to-cart and cart pages
- Frequently bought together
	- Not personalised
	- Works for single or lists of products
	- Default objective: revenue per order
	- Can add diversification (not recommended)
	- Display on add-to-cart and cart pages
- Recommended for you
	- Predicts next product user most likely to interact with or purchase
	- Most personalised
	- Default objective: Click through rate (can change to conversion rate)
	- Can add price ranking and diversification
	- Display on all pages
- Recently viewed
	- Not ML model
	- Chronological order of products viewed
- Similar items
	- Products with similar attributes
	- Only uses info from catalog
	- Default objective: CTR
	- Not customisable
- Buy it again
	- Predicts products customer bought once, and often bought on a regular cadence
	- Not customisable
	- Display on any page
- On sale
	- Personalised
	- Encourage users to purchase discounted items
	- Default objective: CTR (can change to conversion)
- Page-level optimisation
	- Optimises an entire page
	- Automatically selects content of each panel and determines order on page

## Reference Architecture

![[files/discovery_ai_reference_arch.svg]]