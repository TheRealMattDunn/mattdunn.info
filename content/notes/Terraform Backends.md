---
title: "Terraform Backends"
date: "2022-05-15"
tags:
- terraform
- iac
---

## Overview

- Define where [Terraform State](notes/Terraform%20State.md) snapshots are stored.
- Options:
	- Local (default)—stored on local filesystem
	- Remote—e.g. AWS S3, [GCP Cloud Storage](notes/GCP%20Cloud%20Storage.md)
	- Terraform Cloud

## Configuration

```
terraform {
  backend "remote" {
    organisation = "example"
  }
}
```

- Not every argument required in backend config—partial configuration
	- Supply remaining arguments by:
		- File—supply configuration file (name: `*.backendname.tfbackend`) to `init` command via `-backend-config=PATH`
		- Command-line key/value pairs to `init` command via `-backend-confing="KEY=VALUE"`
		- Interactively
