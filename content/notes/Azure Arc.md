---
title: "Azure Arc"
date: "2022-10-25"
tags:
- azure
- multi-cloud
- hybrid-cloud
- kuebrnetes
---

## Overview

- Extends Azure Resource Manager (ARM) to automate resource lifecycle to resources running outside of Azure
- Managed resource types:
	- Servers—Windows/Linux, physical/VMs
	- [Kubernetes](notes/moc/Kubernetes.md) clusters
	- Azure Data Services—run on-prem or at the edge in Kubernetes
		- SQL Managed Instances
		- PostgreSQL
	- SQL Server
	- VMs—lifecycle management
		- vSphere, Azure Stack HCI

### Benefits

- Manage resources outside of Azure through same control plane
	- Automation
	- Azure API
- Apply RBAC, tagging etc. to on-prem resources
- Azure Security Center—ensure compliance of all resources
	- OS patching
	- Enforce encryption
	- Policies across cloud/on-prem
- Send all logs to central Azure Monitor
- Interact via Azure Portal, CLI, SDK, and [Terraform](notes/moc/Terraform.md)
- Manage legacy hardware in the cloud
