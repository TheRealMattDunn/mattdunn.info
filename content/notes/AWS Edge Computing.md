---
title: "AWS Edge Computing"
date: "2022-05-03"
tags:
- aws
- architecure
- hybrid cloud
---

## Why?

- Low latency
- Local data processing
- Data residency
- Use case:
	- Online betting in the US—local regulations for data processing/storage locations

## AWS Hybrid Cloud Services

- [Local Zones](notes/Local%20Zones.md)
- [Outposts](notes/Outposts.md)
- [Wavelength](notes/Wavelength.md)

## How to Approach

### Questions to Ask

- Why can't the workload go in region (i.e. in AWS)?
	- Simpler
	- Full functionality available
- What am I trying to acheive?
- How little can I deploy to the edge?
	- Use Outposts etc. to assist, not as the full solution
