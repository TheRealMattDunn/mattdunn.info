---
title: Running AI at the Edge
date: 2023-10-23
last-modified: 2023-10-23
tags:
  - google-cloud
  - ai
---

## [Google Distributed Cloud Edge](notes/Google%20Distributed%20Cloud%20Edge.md)

### Why?

- YouTube—growth in 2002 greater than capacity of the internet
	- Solution: build edge infrastructure across globe—early CDN

### Problems Solved

- Developer/ops productivity
	- Managed same as cloud
	- Containers
	- Declarative
- HA
	- Wave-based rollouts
	- No single point of failure
- Secure by default
	- Zero trust
- Hardware supply chain
	- Google-scale—integrated with hardware vendors
	- Abstracted hardware—multiple vendors

## Where to Run Apps

- Cloud
	- Best when per-user/application bandwidth low
	- Blast radius of outages small
- Edge
	- HA when network/internet unreliable or slower than aggregate bandwidth

## Example Use Cases

- Retail
	- Checkout
	- Predictive inventory planning and analytics
	- Warehouse surveillance
- Public sector
	- Video-based traffic control
	- Surveillance
	- Smart ports/docks
- Media and entertainment
	- AR/VR
	- Media caching/streaming
	- AI gaming analysis
- Telco
	- 5G network modernisation
	- Private 5G
	- 5G edge
- Manufacturing
	- Vision-based QC
	- Robotics
	- Remote control
- Financial
	- Cyber and fraud detection
	- Data locality for branch security and banking
- Healthcare
	- AI-driven imaging diagnostics
	- Remote assisted surgery
	- Patient remote monitoring

### Not All Workloads Can Use Public Cloud

- Regulations
- Data volume
- Connection durability
- Link speed

### Analysing Data at Scale

- Telco
	- Sensitive data
	- PiBs of data—want to keep in [BigQuery](notes/BigQuery.md) for [Machine Learning](notes/Machine%20Learning.md)
- Healthcare
	- Patient data coming from edge locations
	- Regulations
	- Cloud stream to cloud—but value comes from real-time analytics
		- Streaming to cloud too slow e.g. large MRI scan files

### Challenges

- Financial services
	- Complex systems—disparate systems doing similar things
	- 30% of data to stay on-prem
	- Want consistent platform

### How to Approach Security at the Edge

- Telco
	- GDC Boundary Proxy—Google need to prove they can't tamper with critical infrastructure
	- Sniff everything going between cloud and edge

### Edge AI in the Future

- Healthcare
	- Remote patient care
	- Specialists not in every location—postcode lottery
	- AI-assisted/remote surgery
- Financial services
	- Data sovereignty
	- Fraud detection
	- How to run AI within regulatory frameworks around the globe?
		- Edge