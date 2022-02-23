---
title: "Event Threat Detection"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

- [CSCC](notes/Cloud%20Security%20Command%20Center.md) premium feature
- Analyse logs from Cloud Logging in near real-time
	- [VPCs](notes/GCP%20VPCs.md) flow logs
	- Firewall logs
	- Cloud NAT logs
	- [DNS](notes/Cloud%20DNS.md) logs
	- Linux system logs
- 25+ rules, e.g.:
	- Malware
	- Crypto mining
	- Outgoing DDoS attacks
	- Port scanning
	- IAM anomalous grants—roles given to members outside the organization
	- Brute force SSH
- Custom rules—run queries on log data exported to BigQuery

# References

- [Cloud Security Command Center](notes/Cloud%20Security%20Command%20Center.md)
- [GCP Services](notes/GCP%20Services.md)
