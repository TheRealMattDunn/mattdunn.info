---
title: "Trunk-Based Development"
date: "2022-09-06"
tags:
- development
- git
---

## Overview

- Version control management practice—Git
- Developers merge small, frequent updates to main “trunk” branch
- No long-lived branches e.g. GitFlow
	- Less complex to manage
	- More suited to CI
- Trunk always assumed to be stable

## Benefits

- Continuous integration
	- Requires automated tests, code coverage monitoring, reviews
- Continuous code reviews
	- More efficient—smaller changes
- Consecutive production code releases
	- Frequent daily merges to main branch
	- Keep trunk “green”—ready to deploy
		- Automated testing etc.
	- Agility—daily prod releases

## Best Practices

- Develop in small batches
	- A few lines of code per commit
	- Lower cognitive overhead, faster decisions
- Feature flags
	- Reduces need for feature branches
- Comprehensive automated testing
	- Unit
	- Integration
	- E2E
- Asynchronous code reviews
- Fewer than three active branches
	- Delete branches once merged
- Merge branches to trunk at least once per day
	- Tag main branch at end of day as release
- Reduce number of code freezes and integration phases
	- Plan accordingly
- Build fast and execute immediately
	- Optimize build and test execution times
	- Leverage caching layers in CI/CD

# References

- [Atlassian blog - Trunk-Based Development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development)
