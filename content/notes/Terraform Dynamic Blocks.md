---
title: "Terraform Dynamic Blocks"
date: "2022-05-19"
tags:
- terraform
- iac
---

## Overview

- Construct repeated nested blocks
- Valid in [resource](notes/Terraform%20Resources.md), [data](notes/Terraform%20Data%20Sources.md), [provider](notes/Terraform%20Providers.md) and [provisioner](notes/Terraform%20Provisioners.md) blocks
- e.g.

```hcl
resource "foo" "example" {
  #...

  dynamic "settings" {
    for_each = var.settings

    content {
      name = settings.value["name"]

      #...
    }
  }
}
```

- Can specify an iterator name—defaults to the name of the dynamic block:

```hcl
resource "foo" "example" {
  #...

  dynamic "settings" {
    for_each = var.settings
    iterator = "bar"

    content {
      name = bar.value["name"]

      #...
    }
  }
}
```
