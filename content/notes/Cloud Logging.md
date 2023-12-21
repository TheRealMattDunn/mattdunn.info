---
title: Cloud Logging
date: 2022-02-25
last-modified: 2023-12-21
tags:
  - google-cloud
  - operations
---

## Overview

- Store, view and interact with logs
- Export logs
- Create metrics from logs

## Log Categories

- Security logs
	- Audit logs
	- Access Transparency logs—log Google access to services
- Non-security logs
	- User logs
	- Platform logs
	- VPC flow logs
	- Firewall logs
- Always enabled
	- No charge
	- 400 day retention
- Manually enabled
	- Charged based on volume
	- 30 day retention

### Audit Logs

- What/what did what
- Admin activity logs
	- User initiated resource configuration e.g. [Compute Engine](notes/Compute%20Engine.md) instance created by user
	- Always enabled
- System events
	- Non-user initiated resource configuration
	- Always enabled
- Data access
	- Configuration of resource data
	- Not applicable for public resources
	- Manually enabled (except for [BigQuery](notes/BigQuery.md))

### Non-Security Logs

- All chageable
- User logs—software, app logs
	- Agent required
- Platform logs
	- Google Cloud services e.g. Compute Engine startup scripts
- VPC flow logs
	- Sample of packets sent/received by VPC resources
	- ~1/10 packets recorded—can't adjust rate
- Firewall logs
	- Enable individually for each firewall rule

## Log Retention Periods

![Google Cloud Log Retention](files/google_cloud_log_retention.svg)

- Admin activity, system event, access transparecy
	- 400 days
	- Non-chargeable
- All others
	- 30 days (default)—configurable (increases cost)
	- Chargeable

## Exporting Logs

![Google Cloud Logs Router](files/google_cloud_logs_router.svg)

1. Create sink—filter/destination pairing
2. Define filter—filter/exclude logs
3. Choose destination

## Log-Based Metrics

- [Cloud Monitoring](notes/Cloud%20Monitoring.md) metrics based on log entries
- Example: number of denied connection attempts from firewall logs
- Based on log queries
- System (auto-created)
- User-defined (custom)
- Types:
	- Counter—number of log entries matching query
	- Distribution—Statistical distribution of extracted log values into histogram buckets
