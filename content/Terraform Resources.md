---
title: "Terraform Resources"
date: "2022-05-19"
tags:
- terraform
- iac
---

## Overview

- Describes one or more infrastructure objects
- Access attributes via `<RESOURCE_TYPE>.<NAME>.<ATTRIBUTE>`

## Meta-Arguments

- `depends_on`—specify hidden dependencies
- `count`
- `for_each`
- `provider`—select non-default provider config
- `lifecycle`—lifecycle customizations
- `provisioner`—take extra actions after resource creation

## Verbs

- Create
- Destroy
- Update in-place
- Destroy and recreate

## Addressing

### With `count`

- Address via: `<RESOURCE_TYPE>.<NAME>[<INDEX>]`
- e.g.

```hcl
resource "google_compute_instance" "instance" {
  count = 4

  #...
}
```

- Last element: `google_compute_instance.instance[3]`

### With `for_each`

- Address via: `<RESOURCE_TYPE>.<NAME>[KEY]`
- e.g.

```hcl
resource "google_compute_instance" "instance" {
  for_each = {
    foo   = "bar"
    hello = "world"
  }

  #...
}
```

- Last element: `google_compute_instance.instance["hello"]`
