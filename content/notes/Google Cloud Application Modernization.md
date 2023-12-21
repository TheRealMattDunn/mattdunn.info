---
title: Google Cloud Application Modernization
date: 2022-03-28
last-modified: 2023-10-23
tags:
  - google-cloud
  - application-modernization
  - cloud
  - architecture
---

## Why?

- Business challenges and opportunities
- Financial inflexibility—legacy licences e.g. Windows, IBM etc.
- Improve security posture—old tech, unpatched
- Retain and attract talented staff
- Exploit existing systems in new products—e.g. expose APIs to new customers
- Avoid just lift-and-shift to cloud—also bring value

## Challenges

- Always harder than it looks
- “Good enough” reigns supreme
- Many choices of target software and platforms
- Deeply entangled systems
- Organizational culture
- Unrealistic expectations—not always about cost saving

## Six Traits of a Successful Application Modernization

### Business Case Oriented Around Value

- Involve the entire organization—avoid business cases that are simply IT-based vanity projects
- Use Google fit assessment tool, `mfit`
	- Works offline, so no connection to Google Cloud required
- Leverage Forrester TEI reports for cost impact

### Use a Mixture of Approaches

- Retire
- Refactor
- SaaS
- Migrate in-place
- Rewrite
- Containers—Google Cloud container-based cloud
	- Can move containers *within the cloud*—difficult to do with other vendors, let alone migrate between clouds
	- Can run containers on: [Cloud Run](notes/Cloud%20Run.md), [Kubernetes Engine](notes/Kubernetes%20Engine%20(GKE).md), [Compute Engine](notes/Compute%20Engine.md), [Cloud Functions](notes/Cloud%20Functions.md) and [App Engine](notes/App%20Engine.md)

### Take a Holistic Platform View

- Make use of other platform components, e.g. [Pub/Sub](notes/Pub%20Sub.md)
- Otherwise it is just IaaS
- More value

### Maintain Familiarity

- Tools—Cloud Code, Cloud Shell, Cloud Workstation (hosted dev environments)
	- Security—code is in the cloud, not on the laptop
- Managed Prometheus
- Anthos connected clusters—bring existing clusters under Anthos management

### Push the Envelope

- Embrace e.g. event-driven architecture
- Cost optimize
- Utilize Kubernetes Resource Model (KRM) to provision infrastructure
	- Manage services as through they are [Kubernetes](notes/moc/Kubernetes.md) resources, e.g. [Cloud Spanner](notes/Cloud%20Spanner.md) with ~10 lines of YAML

### Team Effort

- Utilise expertise from partners/vendors
- CAMP and DORA

## References

- [The economic benefits of Anthos](https://cloud.google.com/anthos/forrester-tei-report)
- [Cost savings and business benefits of Cloud Run](https://cloud.google.com/resources/forrester-cloudrun-benefits-report)
