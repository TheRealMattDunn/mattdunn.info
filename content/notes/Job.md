---
title: "Job"
date: "2022-02-09"
tags:
- kubernetes
---

- For running batch workloads
- Each Job spins up one or more Pods to process the work
- Can be run in serial or parallel
	- Often pulling work items from a queue

### Parallel Patterns

- Queue with Pod per work item
	- Use to process all work items at once
	- Set `.spec.completions` to the number of work items
	- Set `.spec.parallelism` to max number of concurrent Pods
- Queue with variable pod count
	- Use when there are more work items than desired Pods
	- Set `.spec.completions` to null
	- Set `.spec.parallelism` to max number of concurrent Pods
- Indexed Job with static work assignment
	- Use when each Pod needs to identify which part of the task it should be working on
	- Set `.spec.completions` to the number of work items
	- Set `.spec.parallelism` to max number of concurrent Pods
- Job template expansion
	- Use when creating multiple Jobs based on a single template (e.g. with scripted variable substitution in the YAML)
	- Set `.spec.completions` to 1
	- Set `.spec.parallelism` to 1

# References

- [Official documentation](https://kubernetes.io/docs/concepts/workloads/controllers/job/)
