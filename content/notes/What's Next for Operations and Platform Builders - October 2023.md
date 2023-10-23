---
title: What's Next for Operations and Platform Builders - October 2023
date: 2023-10-23
last-modified: 2023-10-23
tags:
  - google cloud
  - conference
---

## Three Categories of Workloads

### AI Workloads

- [Vertex AI](notes/moc/Vertex%20AI.md)—foundation model consumers
- AI IaaS—foundation model providers
	- [Compute Engine](notes/Compute%20Engine.md), [Kubernetes Engine (GKE)](notes/Kubernetes%20Engine%20(GKE).md) etc.
	- Roll you own AI stack

#### GKE for AI

- Open standard API
	- Port workloads from data scientist workstation to cloud—reliably reproduce results
- Hugely horizontally scalable
- Autopilot—opinionated config
	- Increase productivity—don't need to worry about infrastructure
- [TPU](TPU) v4—GA
- [TPU](TPU) v5e—preview

### Modern Workloads

- By 2027—90% production apps on containers
	- In post-VM era
- Choices—right tool for job
	- [Cloud Run](notes/Cloud%20Run.md)
		- Deploy microservices in seconds
		- No infrastructure
		- Rapid autoscaling
		- [Sidecars support](notes/Cloud%20Run%20Sidecars.md)
	- [Kubernetes Engine (GKE)](notes/Kubernetes%20Engine%20(GKE).md)

### Enterprise Workloads

- Challenges:
	- Multiple environments/teams
	- Increase risk of compliance
	- Speed

### GKE Enterprise

- RBAC across clusters 
- Vulnerability scanning
- Policies/guardrails—GitOps

### GKE Interactive Troubleshooting Playbooks

- SRE practices
- Opinionated path to diagnose problems

## Loveholidays

- Uptime is an antipattern
- 200+ [Compute Engine](notes/Compute%20Engine.md) instances created per hour
- Peaks—150x normal traffic
- Ripley—tool to replay realistic HTTPS traffic
- OwlBot—simulated autoscaling overnight
	- Identifies bottlenecks
- FinOps metric—$ cost to serve 1000 users

### Continuous Disaster Recovery

- Create copies of prod—GKE fleets
- Balance load between clusters in multiple regions—Gateway API
- Scaling clusters—on-demand clusters