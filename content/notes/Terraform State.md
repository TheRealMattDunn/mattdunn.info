---
title: "Terraform State"
date: "2022-05-11"
tags:
- example
- terraform
---

## Overview

- Database to map configuration resources to real world remote objects
- Recommendation: use remote state to allow multiple users to apply updates against the same environment

### Reasons for State

- Contains metadata, e.g. resource dependencies
	- Required if resource removed from config—Terraform needs to know how to destroy (as no longer present in the config)
- Performance
	- Default behaviour—refresh state with every `plan` and `apply`
	- Can disable with `-refresh=false`—forces state to become single source of truth
