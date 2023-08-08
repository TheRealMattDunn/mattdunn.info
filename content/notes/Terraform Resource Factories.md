---
title: "Terraform Resource Factories"
date: "2023-07-26"
tags:
- terraform
- architecture
- best practices
---

## Overview

- Opinionated, purpose built [Terraform](notes/moc/Terraform.md) [Modules](notes/Terraform%20Modules.md)
- Implement specific requirements and best-practices
- Codify business logic and policies
- Standardize, automate and centralise repetitive creation of [Terraform Resources](notes/Terraform%20Resources.md)
- Configuration in YAML files rather than [Terraform Variables](notes/Terraform%20Variables.md)
- Single module call parses YAML files for multiple instantiations, e.g.:

```
module "subnets" {
  source = "./cloud_foundation_fabric/factories/subnets"
  config_folder = "./subnets"
}
```

### Rationale

- Enable contribution from teams with no Terraform knowledge
- Repetitive creation of resources
- Breaks infrastructure code up into multiple modules/[state files](notes/Terraform%20State.md)
