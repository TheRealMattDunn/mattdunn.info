---
title: GCP Cloud Run Sidecars
date: 2023-09-04
last-modified: 2023-09-04
tags:
  - gcp
  - compute
  - serverless
  - containers
---

## Features

- Add additional containers in [Cloud Run](notes/GCP%20Cloud%20Run.md) instances—up to 10
	- Complement main container
- In-memory shared volumes
- Healthchecks
- Startup/shutdown ordering

## Use Cases

### APM

![cloud_run_sidecar_apm](files/cloud_run_sidecar_apm.svg)

### Migrate Existing Workloads to Cloud Run

- Logic run in proxy before main app
	- e.g. NGINX, Envoy
- Let code specializing in specific job handle task, e.g. use Envoy to transform HTTP/1.1 to HTTP/2

### Serverless Gateway

- Perform action on traffic before sending on to backend
	- e.g. Analysis
- Service mesh

![cloud_run_sidecar_gateway](files/cloud_run_sidecar_gateway.svg)

### Proxy to Backend Database

- Enforce secure connections
- No need to reconfigure main application
- Accelerated performance e.g. by using Cloud SQL proxy
- Startup order important—proxy needs to start before app

![cloud_run_sidecar_db_proxy](files/cloud_run_sidecar_db_proxy.svg)

### Multiple Sidecars

- e.g. Envoy + Open Policy Agent
- Can separate responsibilities e.g. between teams

![cloud_run_sidecar_multi](files/cloud_run_sidecar_multi.svg)