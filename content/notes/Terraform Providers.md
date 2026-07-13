---
title: "Terraform Providers"
date: "2022-05-11"
tags:
- terraform
- iac
---

## Overview

- Allow Terraform to interact with cloud providers, SaaS providers and other APIs
- Must declare which providers will be used in the config
	- So Terraform can install

## Configuration

- Belong in root module
	- Child modules receive config from root module
- Can use expressions in config arguments, but values must be known at apply-time (e.g. input variables)

### Meta-Arguments

- Available to all providers
- `alias`—for using the same provider with different config for different resources
- `version`—deprecated (use provider requirements instead)

#### Example: `alias`

```hcl
provider "aws" {
  region = "us-east-1"
}

provider "aws" {
  alias = "west"
  region = "us-west-2"
}

resource "aws_instance" "foo" {
  provider = aws.west

  # ...
}

resource "aws_instance" "bar" {
  # Uses default provider, i.e. us-east-1

  # ...
}
```
