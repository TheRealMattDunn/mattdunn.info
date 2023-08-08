---
title: "AWS Application Modernization with A2C"
date: "2022-05-03"
tags:
- aws
- application modernization
- containers
---

## Modernization Goals

- Accelerate business transformation
- Agility
- Costs
- Cloud performance

## Strategies

- 7 Rs:
	- Refactor
	- Replatform
	- Rehost
	- Repurpose
	- Relocate

### Refactor

- Often default, but not always best approach
	- Expensive—cost and time

### Replatform

- More cost-effective and faster
- Gain cloud experience in the process
- Refactor later
- Utilize [containers](notes/Benefits%20of%20Containers.md)

## Challenges of Containerization

- Technology
	- Existing build processes—manual
	- Lack of documentation
- Staff
	- Lack of knowledge
	- Low priority
- Operations
	- Lack of expertise in containers/cloud

## Migration Steps

| Discover     | Prepare                                           | Build      | Launch                                             |
| ------------ | ------------------------------------------------- | ---------- | -------------------------------------------------- |
| Libraries    | Source code                                       | Dockerfile | Infrastructure                                     |
| Dependencies | e.g. Remove passwords, DB connection strings etc. | Build      | VPC etc.                                           |
| Networking   |                                                   | CI/CD      | CloudFormation/[Terraform](notes/moc/Terraform.md) |

# References

- [App2Container (A2C)](notes/AWS%20App2Container%20(A2C).md)
