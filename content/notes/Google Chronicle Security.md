---
title: "Google Chronicle Security"
date: "2023-02-16"
tags:
- security
- google cloud
---

## Overview

- Designed for enterprises to retain, analyse, and search security and network telemetry
- Specialized layer on top of core [Google](notes/moc/Google%20Cloud.md) infrastructure
- Normalizes, indexes, correlates, and analyses security data
	- Instant analysis and context of risky activity
- Provides the ability to search back months or longer

## Data Collection

- Forwarder
	- Software component deployed in the customer's network
	- Forwards syslog, packet capture, existing SIEM data (e.g. Splunk)
- Ingestion APIs
	- Send logs directly to Chronicle
- Third-party integrations
	- e.g. Office 365, [Azure](notes/moc/Azure.md) AD

## Data Analysis

- Browser-based app
- Read APIs

## Features

- Search
	- Raw log scan
	- Regex search
- Investigative views
	- Enterprise insights
	- Asset view
	- IP address view
	- Hash view
	- Domain view
	- User view
	- Procedural filtering
- Curated info
	- Asset Insight blocks
	- Prevalence graph
	- Alerts from popular security products
- Detection engine
	- Automate process of searching fata for security issues

### Data Processing

- Ingested by data forwarder (e.g. Chronicle Forwarder) or read from object storage—[Cloud Storage](notes/GCP%20Cloud%20Storage.md), S3
	- Encrypted in transit
- Encrypted at rest
- Parsed and indexed
- Checked against 3rd party feeds and internal tools
- Checked against VirusTotal DB
