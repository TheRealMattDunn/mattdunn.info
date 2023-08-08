---
title: "Terraform Data Sources"
date: "2022-05-19"
tags:
- terraform
- iac
---

## Overview

- Read-only data from [provider](notes/Terraform%20Providers.md) API
- Don't cause Terraform to make any infrastructure changes

### Local-Only Data Sources

- e.g. file—read local file
- Local only—temporary, recalculated on each run

## Dependencies

- Dependencies resolved as for other [resources](notes/Terraform%20Resources.md)
- Can use `depends_on`

## Lifecycle

- Data source read during refresh phase if no dependencies/references to computed values e.g. resource attributes
- Otherwise read during apply phase
