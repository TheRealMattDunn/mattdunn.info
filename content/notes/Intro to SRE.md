---
title: "Intro to SRE"
date: "2022-06-20"
tags:
- sre
---

## Introduction

> SRE is what happens when a software engineer is tasked with what used to be called operations.

- 40–90% of total cost of a system incurred post-delivery
- Reliability—primary concern
	- Probability the system will perform the required function without failure under stated conditions for a stated period of time
- Hire software engineers to run products and create systems to accomplish work previously performed manually by sysadmins
	- At Google, SREs: 50–60% software engineers; 40-60% have most software engineer skills, but additional expertise, e.g. UNIX, networking
	- Create team that becomes bore performing manual sysadmin tasks, and has skills to create software to replace manual work
- Team focussed on engineering
	- 50% cap on ops work—upper limit
	- Remainder spend on development to automate processes
	- Prevent team from becoming sysadmins
	- Goal: automated system that runs itself
- Responsible for: availability, latency, performance and efficiency

### Downsides of Sysadmin Approach

- Previously: systems run by sysadmins
- Discrete teams: development and ops
- Easy to implement—precedent
- Pitfalls:
	- Direct costs: manual intervention—team must scale as system scales, proportional to load on system
	- Indirect costs: different backgrounds between teams—language, skill sets, assumptions
	- Split between teams—conflict
	- Example: dev teams want to release to prod as quickly as possible; ops teams want to ensure system is up—most issues caused by changes
		- Teams' goals are opposed

## Tenets

### Focus on Engineering

- 50% time cap on ops work
- When reached—redirect work to dev team
	- Reassign bugs/tickets
	- Integrate devs into on-call rotas
- Ends when ops load drops below 50%
- Need to monitor
- Org needs to understand why mechanism exists
- Max 2 events per 8–12hr on-call shift
	- Handle event, clean up, restore service, conduct post-mortem
	- Always conduct post-mortem—blameless culture

### Error Budgets

- Reconcile goals of devs and ops
- 100% reliability wrong for most things
	- Users unable to notice differences between 99.999% and 100% uptime—no benefit of last 0.001%
- Business question to determine correct reliability target
	- What will users be happy with?
	- Alternative services?
	- What happens to usage at different availability levels?

![cost_vs_reliability](files/cost_vs_reliability.svg)

- `error_budget = 1 - availability_target`
	- e.g. 99.999% availability = 0.001% error budget
- Spend on e.g. launching new features
- Outages non longer “bad”—just an expected part of the process of innovation

### Monitoring

- Primary means to track system health
- Traditionally—alert on value/condition
	- Not effective—don't rely on humans to decide on required action
	- Automate interpretation
	- Only alert humans if action required
- Valid outputs:
	- Alerts—immediate action required
	- Tickers—(non-immediate) action required
	- Logging—recorded for diagnostic purposes, expectation not read unless prompted to

### MTTR

- Mean time to repair
	- How quickly team can restore service
- Use playbooks top record best practices
	- 3x improvement on MTTR than “winging it”

### Change Management

- 70% of outages due to changes in live system
- Best practices:
	- Progression rollouts
	- Quickly and accurately detect problems
	- Rollback when problems occur
- Remove humans from loop

### Capacity Planning

- Ensure sufficient capacity/redundancy
- Incorporate organic and inorganic growth:
	- Organic—natural product adoption
	- Inorganic—e.g. marketing campaigns, new features etc.
	- Regular load testing

### Provisioning

- Add new capacity when required

### Efficiency and Performance

- Function of demand (load), capacity and software efficiency
- SREs—predict demand, provision capacity, modify software
- Provision to meet target response speed
- Monitor performance

# References

- [Beyer, B, Jones, C, Petoff, J, and Murphy, N R (eds.) (2019), *Site Reliability Engineering*, O'Reilly](https://sre.google/workbook/table-of-contents/)
