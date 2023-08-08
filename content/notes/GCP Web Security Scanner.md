---
title: "GCP Web Security Scanner"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- Detects vulnerabilities in:
	- [App Engine](notes/GCP%20App%20Engine.md)
	- [Compute Engine](notes/GCP%20Compute%20Engine.md)
	- [Kubernetes Engine](notes/GCP%20Kubernetes%20Engine%20(GKE).md)
- Crawler-based—crawls public URLs and IPs not behind firewalls
- [CSCC](notes/GCP%20Cloud%20Security%20Command%20Center.md) standard—custom manual scans
- CSCC premium—managed scans (defaults to weekly)
- Examples:
	- XSS
	- Flash injection
	- Mixed content (HTTP + HTTPS)
	- Insecure JavaScript libraries
	- Readable passwords
