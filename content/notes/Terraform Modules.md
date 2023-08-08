---
title: "Terraform Modules"
date: "2022-05-16"
tags:
- terraform
- iac
---

## Using Modules

### Public Modules – Terraform Registry

- Terraform registry integration into core Terraform
- e.g.

```hcl
module "consul" {
  source  = "hashicorp/consul/aws"
  version = "0.1.0"
}
```

- `terraform init` downloads and caches any included modules

### Private Modules

- Supplied by Terraform Cloud or any third party registry which implements the [API](https://www.terraform.io/registry/api-docs)
- e.g.

```hcl
module "vpc" {
  source  = "app.terraform.io/example_corp/vpc/aws"
  version = "0.9.3"
}
```

### Other Options

- Local path
- GitHub
- BitBucket
- Git
- Mercurial
- HTTP URLs
- S3 Buckets
- [Google Cloud Storage](notes/GCP%20Cloud%20Storage.md)

## Meta-Arguments

- `count`
- `for_each`
- `providers`—allows provider config to be passed to the child module
	- Default: module inherits all default (un-aliased) provider configurations from the parent module
- `depends_on`

## Publishing Modules

### Requirements

- Must be in a public GitHub repo
- Repo must be named `terraform-<PROVIDER>-<NAME>`
- Must have a repo description
- Must adhere to the standard module structure
- Must have at least one release tag, following semantic versioning, i.e. `x.y.z`
	- Optionally prefixed with `v`
