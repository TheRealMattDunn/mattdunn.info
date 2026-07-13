---
title: "Terraform Resource Factories"
date: "2023-07-26"
tags:
- terraform
- architecture
- best-practices
---

## Overview

- Opinionated, purpose built [Terraform](moc/Terraform.md) [Modules](Terraform%20Modules.md)
- Implement specific requirements and best-practices
- Codify business logic and policies
- Standardize, automate and centralise repetitive creation of [Terraform Resources](Terraform%20Resources.md)
- Configuration in YAML files rather than [Terraform Variables](Terraform%20Variables.md)
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
- Breaks infrastructure code up into multiple modules/[state files](Terraform%20State.md)
