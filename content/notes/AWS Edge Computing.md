---
title: "AWS Edge Computing"
date: "2022-05-03"
tags:
- aws
- architecure
- hybrid cloud
- edge
---

## Why?

- Low latency
- Local data processing
- Data residency
- Use case:
	- Online betting in the US—local regulations for data processing/storage locations

## AWS Hybrid Cloud Services

- [Local Zones](notes/AWS%20Local%20Zones.md)
- [Outposts](notes/AWS%20Outposts.md)
- [Wavelength](notes/AWS%20Wavelength.md)

## How to Approach

### Questions to Ask

- Why can't the workload go in region (i.e. in AWS)?
	- Simpler
	- Full functionality available
- What am I trying to acheive?
- How little can I deploy to the edge?
	- Use Outposts etc. to assist, not as the full solution
