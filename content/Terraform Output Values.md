---
title: "Terraform Output Values"
date: "2022-05-16"
tags:
- terraform
- iac
---

## Overview

- Return values from modules
- Display information about infrastructure on the command line
- Exposes information for other Terraform configurations to use
	- Via the `terraform_remote_state` data source
- e.g.
```hcl
output "ip_addr" {
  value = google_compute_instance.server.network_interface.0.network_ip
}
```
- Access via `module.<MODULE_NAME><OUTPUT_NAME>`

### Optional Arguments

- `description`
- `sensitive`
- `depends_on`
	- Dependencies that cannot be recognised implicitly
	- Last resort
