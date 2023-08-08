---
title: "AWS App2Container (A2C)"
date: "2022-04-29"
tags:
- aws
- containers
---

## Overview

- Migrate legacy apps into containers
	- ASP.NET on IIS/Linux
	- .NET Windows services
	- Java on Linux—Tomcat, JBoss
- CLI tool—runs locally on instance
- Portable—on-prem, AWS
- Automated
- Scaleable—standard steps for all apps
- Source code not required—binaries packaged
- Follows AWS best practices for containerization

## Process

- Analysis of app:
	- Dependencies
	- Files
	- Ports
- Containerizes with Docker
- Creates Artefacts
	- [ECS](notes/AWS%20Elastic%20Container%20Service%20(ECS).md) task definitions
	- [Kubernetes](notes/moc/Kubernetes.md) manifests
	- CI/CD pipeline—AWS Developer Tools, Jenkins
	- Cloud Formation templates
- Deploy to AWS
	- Store image in ECR
	- Deploy to ECS/EKS
