---
title: "GCP Cloud IAM"
date: "2022-02-22"
tags:
- gcp
- security
---

## Overview

### Who

- Who is allowed access to resources
- Principals / members:
	- Google accounts
	- Service accounts
	- Google Groups
	- Google Workspace accounts
	- Cloud Identity domains
	- All authenticated users
	- All users

### Access

- What access principals have
- Roles:
	- Groups of permissions
	- Can't assign individual permissions to principals—must assign a role
- Security Admin Role—role which allows management of any IAM policy

### Which

- Which resources a principal can access
- e.g, VM instances, GKE clusters
- Organizations, folders and projects are also resources

## Roles

### Primitive Roles

- Original pre-IAM roles
- Course-grained
- Owner, Editor, Viewer

### Predefined Roles

- Predefined by Google
- Granular
- Target specific resources

### Custom Roles

- Unique set of permissions
- Tailor permissions for principle of least privilege

## Policies

![gcp_iam_policies](files/gcp_iam_policies.svg)

## See Also

- [Delegated Role Grants](notes/GCP%20Delegated%20Role%20Grants.md)
