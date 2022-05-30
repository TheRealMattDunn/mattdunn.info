---
title: "AWS Service Control Policies (SCPs)"
date: "2022-02-23"
tags:
- aws
- security
---

## Overview

- SCPs
- Applied at the [OU](notes/AWS%20Organization%20Hierarchy.md) level
- Controlled by the organization master account
- Restrict actions which can be taken in an AWS account
- Control which AWS APIs are accessible
	- Allowlist/denylist
- Invisible to users in the child accounts
