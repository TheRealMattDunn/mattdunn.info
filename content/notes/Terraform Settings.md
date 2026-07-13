---
title: "Terraform Settings"
date: "2022-05-13"
tags:
- terraform
- iac
---

## Terraform Block

```hcl
terraform {
  #...
}
```

Sub-elements:
- `cloud`—configures Terraform Cloud
- `backend`—configures the [Terraform state](notes/Terraform%20State.md) [backends](notes/Terraform%20Backends.md)
- `required_version`—constrains the Terraform version
	- Constraints of all child modules must also be satisfied
- `required_providers`—specifies providers required by the module
	- Includes `address` and `version` constraint
