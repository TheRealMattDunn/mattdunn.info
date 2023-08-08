---
title: "GCP Cloud Foundation Fabric"
date: "2023-07-26"
tags:
- gcp
- terraform
- foundations
---

## Overview

- End-to-end [Terraform](notes/moc/Terraform.md) blueprints and [Modules](notes/Terraform%20Modules.md)
- Organization-wide landing zone blueprint—Fabric FAST
- Reference blueprints—network patterns, product features
- Set of lean modules
- Makes extensive use of [Terraform Resource Factories](notes/Terraform%20Resource%20Factories.md)

## Data Landing Zones

### Fabric Shielded Folder

- Problem:
	- Typical presales path:
		1. Demo
		2. Share demo with customer—turn into MVP
		3. But doesn't comply with customer's security policies—needs rework before taking to production

- Solution:
	- [Fabric Shielded Folder](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/blueprints/data-solutions/shielded-folder)
	- Opinionated folder configuration—best practices
	- Mini-landing zone
		- Organization Policies
		- Hierarchical Firewall Rules
		- [Audit log sink](notes/GCP%20Cloud%20Logging.md)
		- [CMEK](notes/GCP%20CMEK%20and%20CSEK.md)
		- VCP Service Controls
	- Single module—fast to set up
		- Not staged like FAST
	- Can move workloads into main landing zone after MPV
	- Why folder-level?
		- Doesn't interfere with org-level landing zone
		- Host workloads inherit constraints from folder they belong to
		- Ready to be moved once foundation is implemented
		- Also use case for rapid landing zone

### Minimal Data Platform

- [Module to create MVP data platform](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric/tree/master/blueprints/data-solutions/data-platform-minimal)
- Includes Airflow pipelines to verify and test setup

# References

- [GitHub](https://github.com/GoogleCloudPlatform/cloud-foundation-fabric)
