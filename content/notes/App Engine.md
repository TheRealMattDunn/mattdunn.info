---
title: "App Engine"
date: "2022-02-16"
tags:
- gcp
- compute
- serverless
---

## Overview

- PaaS serverless
- Regional
- No server management/config
- Comes in two flavours:
	- App Engine Standard—first generation
	- App Engine Flexible—second generation

## App Engine Standard

- Instantaneous scale-up
	- Scales down to zero—15 minute scale down period (paid for)
- Runtimes:
	- Python 3
	- Java 11
	- Node.js
	- PHP 7
	- Ruby
	- Go 1.12+

## App Engine Flexible

- Containerized apps
	- Deploy from Dockerfile or Container Registry/Artifact Registry
- Best for consistent traffic—gradual scaling
- Runtimes:
	- Python 2.7/3.6
	- Java 8
	- PHP 5/7
	- Ruby
	- Go
	- .Net
	- Custom runtimes

## References

- [GCP Decision Trees](notes/GCP%20Decision%20Trees.md)
