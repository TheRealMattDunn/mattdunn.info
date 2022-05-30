---
title: "GCP Event Threat Detection"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- [CSCC](notes/GCP%20Cloud%20Security%20Command%20Center.md) premium feature
- Analyse logs from Cloud Logging in near real-time
	- [VPCs](notes/GCP%20VPCs.md) flow logs
	- Firewall logs
	- [Cloud NAT](notes/GCP%20Cloud%20NAT.md) logs
	- [DNS](notes/GCP%20Cloud%20DNS.md) logs
	- Linux system logs
- 25+ rules, e.g.:
	- Malware
	- Crypto mining
	- Outgoing DDoS attacks
	- Port scanning
	- IAM anomalous grants—roles given to members outside the organization
	- Brute force SSH
- Custom rules—run queries on log data exported to BigQuery
