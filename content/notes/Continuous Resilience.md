---
title: "Continuous Resilience"
date: "2022-04-29"
tags:
- sre
- devops
---

## Introduction

- Cost of downtime: $5,600/min—Gartner

![continuous_resilience](files/continuous_resilience.svg)

- Companies don't like fear of outages
- Results in process and rules (e.g. change management) to try and reduce outages
	- E2E testing
	- Advisory board
	- Code freezes
	- Planned deployments
	- Strict SLAs
- Not realistic!

> "Everything fails all the time."
> Werner Vogels

- Embrace failure—continuous resilience

## Resilience

- Ability for system to bounce back from failure
- Four essential capabilities:
	- Anticipate
	- Monitor
	- Respond
	- Learn

## Anticipate

### Code Reviews and Profile

- Good code:
	- Does what it should
	- Consistent style
	- Easy to understand
	- Well documented
- Improve with code reviews and profiling
	- Human-based—not reliable
	- Amazon CodeGuru—AI, automatically find bugs and issues

### Resilient Application Patterns

- API-based architecture
	- Clients
		- Set timeouts
		- Retries with back-off, jitter and max retries
		- Limit queue sizes
	- Back end
		- Rate limiting
		- Load shedding

### Simple Designs and Constant Work

- Less strenuous to pull vs push messages e.g. write messages to S3, then pull

### Limit Impact of Failures with Cells

- Impact of once cell doesn't impact adjacent cells
	- Control blast radius
	- e.g. regions

### Immutable Deployments Vs In-Place

- Blue/green and canaries, split on:
	- Internal/external
	- Paying/non-paying
	- Geographical
	- Random
- Zero downtime

## Monitor

### Steady State

- Monitor key external metrics, not just e.g. CPU
	- Customer experience
	- e.g. orders per second
	- Helps to confirm system is back to normal

### Observability

- Three pillars:
	- Logs—record of change of state
	- Metrics—point-in-time numeric data
	- [Traces](notes/Distributed%20Tracing.md)—single user's journey accross multiple applications and systems (e.g. microservices)
- Correlate with AWS ServiceLens

## Respond

- Fast recovery more important than fewer failures
- Process:
	- Map dependencies—rank in terms in crticalness
	- Create response plan

### Automated Response

- Event-driven
- e.g. Business requirement: S3 buckets should never be public
	- AWS EventBridge listens to event changing bucket to public
	- Lambda function reverts the bucket back to private, and sends an alert notifiction

## Learn

### Correctoion of Errors (COE)

- Post-mortem—what happened, not who
	- Technical/process/organisation
	- Missing documentation
	- No blame
- COE:
	- What happened?
	- What data do we have?
	- Impact?
	- Contributing factors?
	- Learnings?

### Chaos Engineering

- Perform experiments
- Observe what happens
- Improve
	- Uncover hidden issues
- AWS Fault Injection Simulator

# References

- [Towards continuous resilience](https://medium.com/the-cloud-architect/towards-continuous-resilience-3c7fbc5d232b)
