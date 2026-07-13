---
title: Citrix DaaS on Google Cloud
date: 2022-04-26
last-modified: 2023-10-23
tags:
  - architecture
  - citrix
  - google-cloud
---

## Components

- Citrix Cloud Connector
	- Responsible for communication to/from Citrix cloud
	- Auto-updated/maintained by Citrix
- Virtual Delivery Agent (VDA)
	- Apps/Desktops running on Windows/Linux VM instances
- Citrix Gateway (optional)
	- Session brokering, load management, image management, monitoring, cost/capacity management
- Citrix Workspace Service
	- UI
- Analytics Service
	- [ML](Machine%20Learning.md)—security, performance, user behavioural analytics/reporting

## Cloud Forward Design Pattern

- For customers who are “all-in” on [Google Cloud](notes/moc/Google%20Cloud.md)
- Commonly used for new deployments, POCs etc
- Requires no additional infrastructure
- [Google Deployment Manager templates available](https://github.com/GoogleCloudPlatform/citrix-on-gcp), but appear to be no longer maintained
- Provides HA
- Creates a Citrix Cloud "resource location"

![Cloud Forward](files/citrix_google_cloud_cloud_forward.svg)

## Hybrid Design Pattern

- Customer-managed access layer components—advanced use-cases

![Hybrid](files/citrix_google_cloud_hybrid.svg)

## Cloud Migration Design Pattern

- As per Hybrid Design Pattern, but with legacy workloads on existing on-prem infrastructure
- Migrate workloads gradually to the cloud

![Cloud Migration](files/citrix_google_cloud_cloud_migration.svg)

## References

- [Reference Architecture - Citrix virtualization on Google Cloud](https://docs.citrix.com/en-us/tech-zone/design/reference-architectures/citrix-google-virtualization.html)
