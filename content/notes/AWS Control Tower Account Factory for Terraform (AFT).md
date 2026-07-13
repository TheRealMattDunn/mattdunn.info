---
title: "AWS Control Tower Account Factory for Terraform"
date: "2023-01-17"
tags:
- aws
- management
- iac
- terraform
---

## Overview

- Provision [Control Tower](notes/moc/AWS%20Control%20Tower.md) accounts via [Terraform](notes/moc/Terraform.md)
- Compatible with [Terraform Cloud](notes/Terraform%20Cloud.md), Enterprise, and open source
- GitOps model

## High-Level Components

- AFT pipeline—account vending and customization
- AFT feature options—optional features, e.g.
	- Cloud trail data events—S3 and Lambda
	- Automatic Enterprise Support enrolment
	- Deletion of default [VPCs](notes/AWS%20VPCs.md) for all regions
- AFT customizations—customize accounts with public/private modules, e.g.
	- Additional [Controls](notes/AWS%20Control%20Tower%20Controls.md)
	- Default firewalls
- Need to provision AFT management account in Control Tower first