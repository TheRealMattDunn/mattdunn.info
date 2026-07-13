---
title: "AWS IAM Identity Center"
date: "2022-09-08"
tags:
- aws
- iam
- security
---

## Overview

- Successor to AWS SSO
- Expands capabilities of IAM
	- Central administration of users across AWS accounts

### Features

- Workforce identities
	- Human users—workforce users
	- Groups—workforce groups
	- Create in IAM Identity Center
- Application assignments for SAML applications
	- Grant SSE access to SAML 2.0 applications, e.g. Microsoft 365
- Identity Center enabled applications
	- SSO to AWS applications and services, e.g. Amazon Managed Grafana
- Multi-account permissions
	- Centralized IAM across multiple AWS accounts
- AWS access portal
	- Web portal
	- One-click access to assigned AWS accounts

## Concepts

- Usernames
	- Must be unique
	- Usually email addresses—but not mandatory
- Groups
	- Logical combination of users
	- Nested groups not supported—nested groups synced from identity sources flattened
- Permission sets
	- Template—collection of one or more IAM policies
	- Assign to users or groups
	- Predefined
		- Common permission policies—e.g. AdministratorAccess, ReadOnlyAccess
		- Job function policies—e.g. Billing, DatabaseAdministrator
	- Custom
		- Combine any AWS, custom or inline managed policies
		- Set permissions boundary—maximum possible permissions that any other policy can grant to users of permission set

## Identity Sources

- IAM Identity Center identity store—default
- Active Directory
	- AWS or self-managed
	- Uses AWS Directory Service
- External Identity Provider
	- e.g. Okta, Azure Active Directory

### Connecting to Self-managed Microsoft Active Directory

- Uses AWS Directory Service
	- Create two-way trust relationship
	- Create AD Connector—directory gateway, redirects request to self-managed AD without caching
- Configure attribute mappings, e.g. `${dir:email}`

#### Provision Users

- IAM Identity Center configurable AD sync (recommended)
	- Control data boundaries—explicitly define users and groups in AD to be synced into IAM Identity Center
	- Control sync process—pause/resume
		- Reduce load on systems
- IAM Identity Center AD sync
	- Assign users and groups in AD access to AWS accounts and applications
	- All IDs with assignments auto synced

## Delegated Admin

- IAM Identity Center created in [Organization](notes/AWS%20Organization%20Hierarchy.md) management account
- Can delegate admin to Organization member account
	- Reduced number of people who require access to management account
- Best practices:
	- Grant least privilege to management account
	- Create permissions sets for use only in management account—differentiates from permissions sets in delegated accounts
