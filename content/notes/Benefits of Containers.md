---
title: Benefits of Containers
date: 2022-04-12
tags:
  - containers
  - docker
  - opinion
last-modified: 2023-10-23
---

## Containers

- Method of packaging applications and all dependencies
- Portable
- Lightweight—doesn't contain entire OS
- Standardized format

## VM Downsides

- Generally an application per VM:
	- bleeding over of dependencies—different apps need different versions of same library
- Complicated rollout
- Underutilized hardware—resources required for OS

## Container Upsides

- Optimize infrastructure—bin-packing of applications
- Optimize licence costs—multiple applications per VM/OS
- Scalabilty
- Portability
- Agility
- Customers want to leverage same tech on cloud as on-prem—familiarity

## Container Candidates

### Good Candidates

- Web/logic tiers
	- LAMP, WordPress
	- J2EE middleware—WebSphere, Tomcat, JBoss
- Low duty-cycle and burst workloads
	- Windows services, console apps
	- Batch jobs

### Candidates Requiring Investigation

- Dependency on specialized hardware—e.g. GPUs, [TPUs](notes/Google%20Cloud%20TPUs.md)s
- Requirement for elevated privileges
- COTS software

### Bad Candidates

- Low-level networking requirements
- Desktop apps—RDP, VDI

## Why Containers for Legacy Apps?

- Less risky—fewer code changes
- Quick—days/weeks
