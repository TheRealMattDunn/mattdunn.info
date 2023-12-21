---
title: Web Security Scanner
date: 2022-02-22
last-modified: 2023-12-21
tags:
  - google-cloud
  - security
---

## Overview

- Detects vulnerabilities in:
	- [App Engine](notes/App%20Engine.md)
	- [Compute Engine](notes/Compute%20Engine.md)
	- [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md)
- Crawler-based—crawls public URLs and IPs not behind firewalls
- [CSCC](notes/Security%20Command%20Center.md) standard—custom manual scans
- CSCC premium—managed scans (defaults to weekly)
- Examples:
	- XSS
	- Flash injection
	- Mixed content (HTTP + HTTPS)
	- Insecure JavaScript libraries
	- Readable passwords
