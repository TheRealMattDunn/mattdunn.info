---
title: "Operating Applications on Compute Engine"
date: "2022-04-20"
tags:
- gcp
- compute engine
- development
---

## Service Accounts

- Instance runs with [Service Account](notes/GCP%20Cloud%20IAM.md)—represents the instance's identity and roles
- Default Service Account available—has `roles/editor` role
	- Large attack vector
	- Best practice: create custom Service Account with granular permissions—least privilege principle

## Deploying to [Compute Engine](notes/GCP%20Compute%20Engine.md)

- Startup script
	- Supported by both Linux and Windows
	- Define in metadata
	- Or store in [Cloud Storage](notes/GCP%20Cloud%20Storage.md) and add metadata key `startup-script-url` with the value of the GCS URL for the script
		- Instance requires `roles/storage.objectViewer` role
		- Security implications: if bucket is less secure than the instance metadata, could result in privilege escalation, as the script runs as root
- Custom image as boot disk

## Service Discovery

- Method for service to call other services without hard-coded IPs etc.
- Two options:
	1. Use metadata server to store project-level key/value pairs, e.g. `service_a = 10.192.0.12`
	2. Use a Managed Instance Group fronted by a [load balancer](notes/GCP%20Load%20Balancing.md) configured with a static DNS name

## Operations Suite

### [Cloud Logging](notes/GCP%20Cloud%20Logging.md)

- Cloud logging agent must be manually installed on VMs—based on Fluentd
- Collects syslogs, plus standard app logs, e.g. Redis, MySQL, Apache etc.
- Also can be configured with custom log locations

### [Cloud Monitoring](notes/GCP%20Cloud%20Monitoring.md)

- System metrics—CPU, disk, network
- User-defined metrics—from any app logs
	- Create alerts

## Debugging

- First check serial console—startup script errors
- If startup script stored in Cloud Storage—check instance Service Account has correct read permissions on the bucket/object
- For instance access issues—check network tags and corresponding firewall rules
- Issues with Managed Instance Groups:
	- Template issues—source image doesn't exist? Disk mounted in read/write mode onto multiple instances?
	- Instances being recreated—health check issues: broken template, health check firewall rule missing
