---
title: "AWS Elastic Container Service (ECS)"
date: "2022-04-29"
tags:
- aws
- compute
- containers
---

## Overview

- Orchestration for containers
- Deploy, manage, scale

## Task Definitions

- Describes application—cf. [Kubernetes](notes/moc/Kubernetes.md) manifest
- JSON file
- Up to 10 containers
- Includes ports, data volumes, launch type etc.

### Launch Types

- Fargate—fully managed, no instances
- EC2—self-managed infrastructure, EC2 instances
- External—self-managed, on-prem instances

## Tasks

- Instantiation of task definition with cluster (logical grouping of container instances—EC2 instances)
- Tasks placed on instances via selection of strategies, e.g.
	- Binpack
	- Spread
	- Random
- Configure number of instances of task—load balance

## Updates

- Create new revision
- Deployment strategies:
	- Rolling update
	- Blue/green
	- External—any third party deployment controller
