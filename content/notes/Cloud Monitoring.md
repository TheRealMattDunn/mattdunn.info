---
title: Cloud Monitoring
date: 2022-02-25
last-modified: 2023-12-21
tags:
  - google-cloud
  - operations
---

## Overview

- Collects and visualizes metrics from Google Cloud resources—how well are resources performing?
- Track [SLOs and SLAs](notes/SLIs,%20SLOs%20and%20SLAs.md)
- Alerting—identify issues as they happen

## Metrics Scopes

- Previously known as workspaces
- Host for monitored projects—multiple projects can be monitored in a Metric Scope, but a project can only be in one Metric Scope
- Best practice: create a central Metric Scope project—single pane of glass for all projects

## Monitoring Agents

- Required for monitoring of [Compute Engine](notes/Compute%20Engine.md) and AWS EC2 instances—most monitoring is baked into the Google Cloud services
- More detailed and granular metrics
- Can gather metrics from 3rd party apps, e.g. NGINX
- Monitoring agent: collectd
- Logging agent: Fluentd

## Metrics

- Types: bool, int64, double, string
- Kinds:
	- Gauge—instant in time e.g. CPU usage
	- Delta—change in value since last recording
	- Cumulative—sum over time e.g. sent bytes
- Examples: latency, number of SQL records, disk space
- 1500+ pre-created metrics
- Custom metrics, define via built in Monitoring API or OpenCensus
	- Best practice: use built-in metrics if possible before creating custom metrics

## Integration

- Cloud Monitoring API
- Export to [BigQuery](notes/BigQuery.md) or external tools via Service Account authentication, e.g. Grafana

## Uptime Checks

- HTTP GET/POST to application—requires FQDN
- Looks for successful response
- Can check for expired SSL certificates
- Alerts—email, SMS, Slack, PagerDuty, [Pub/Sub](notes/Pub%20Sub.md)
