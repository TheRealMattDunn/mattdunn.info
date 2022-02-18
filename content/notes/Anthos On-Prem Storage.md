---
title: "Anthos On-Prem Storage"
date: "2022-02-18"
tags:
- gcp
- anthos
- kubernetes
---

## Overview

- Block/file storage is exposed to Anthos clusters via the Container Storage Interface (CSI)
- This is required for PersistentVolumes on Anthos on bare metal (and VMware—although the choice here might be easier)
- Google partners have developed CSI drivers that have been verified against Anthos:
	- Dell EMC
	- Hitachi
	- HPE
	- NetApp
	- Portworx
	- Pure Storage
	- Robin.io
	- VMware

# References
