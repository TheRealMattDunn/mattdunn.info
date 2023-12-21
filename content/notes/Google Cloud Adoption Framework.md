---
title: Google Cloud Adoption Framework
date: 2022-02-23
last-modified: 2023-10-23
tags:
  - google cloud
  - cloud architecture
---

## Introduction

- Framework for organizations to migrate to the cloud
- Agnostic of cloud provider
- Formed of four themes, and three phases
- Cloud maturity scale allows for measurement of progress
- Predefined epics serve as a starting point for adoption of the framework

## Themes

### Learn

- What is the quality and scale of learning programmes?
- How are teams upskilled?

### Lead

- How IT trams are supported in cloud migration by leadership—exec sponsorship?
- Are teams cross-functional, collaborative and self-motivated?
- What is the team structure?
- How are budgets allocated?
- What governance is in place?

### Scale

- What is the current extent of [cloud native](notes/The%20Path%20to%20Cloud%20Native.md) services?
- How are updates handled?
- How is capacity allocated?

### Secure

- How are services protected from unauthorized access?
- Is an identity-centric model used?
- What security controls, technology and strategies are in place?

## Phases

### Tactical

- Individual workloads in place in the cloud
- Not strategy for future migration
- Focus on quick wins and cost reduction of individual systems
- Unable to scale
- Not necessarily pejorative—a crucial stepping in the process of reaching the transformation phase
	- Allows experimentation, and lessons to be learnt
- Benefits from TCO analysis first—a jump straight to the strategic phase could be beneficial if the ROI of this phase is minimal

### Strategic

- A broader vision governs individual workloads—workloads designed for future scale/needs
- People/processes now involved in the strategy
- Effective IT teams
- Can be applied to a subset of the organization—used as a blueprint to other departments

### Transformational

- Cloud operations running smoothly—cloud-first strategy
- IT becomes an engine of innovation—no longer a cost-centre, but a partner to the business
- Now able to integrate data and insights into the wider business gathered from working in the cloud
	- Existing data shared
	- New data collected and analysed—AI/[ML](notes/Machine%20Learning.md)

## The Cloud Maturity Scale

![cloud_maturity_scale](files/cloud_maturity_scale.svg)

## Epics

- Epics in coloured segments most important
- Use as starting point for creating user stories to implement the framework

![google_cloud_adoption_epics](files/google_cloud_adoption_epics.svg)

## References

- [Google Cloud Adoption Framework Whitepaper](https://services.google.com/fh/files/misc/google_cloud_adoption_framework_whitepaper.pdf)
