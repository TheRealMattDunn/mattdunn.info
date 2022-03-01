---
title: "Web Security Scanner"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- Detects vulnerabilities in:
	- [App Engine](notes/App%20Engine.md)
	- [Compute Engine](notes/Compute%20Engine.md)
	- [Kubernetes Engine](notes/Kubernetes%20Engine.md)
- Crawler-based—crawls public URLs and IPs not behind firewalls
- [CSCC](notes/Cloud%20Security%20Command%20Center.md) standard—custom manual scans
- CSCC premium—managed scans (defaults to weekly)
- Examples:
	- XSS
	- Flash injection
	- Mixed content (HTTP + HTTPS)
	- Insecure JavaScript libraries
	- Readable passwords
