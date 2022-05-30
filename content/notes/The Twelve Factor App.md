---
title: "The Twelve Factor Appp"
date: "2022-04-14"
tags:
- archtecture
- software
- development
---

## Codebase

> Single codebase, many deployments

- One-to-one relationship between codebase and app

## Dependencies

> Explicitly declare and isolate dependencies

- Bundle dependencies into app via manifest, e.g. Maven
- Isolate from external dependency leak-in from surrounding system, e.g. Virtualenv
	- Never rely on system-wide packages

## Config

> Store config in the environment, not the codebase

- Everything that varies between environments, e.g. DB credentials
- Litmus test: could the app be made open source at any minute without compromising credentials?
- Don't: simply put config in code, but not checked in—prone to error (could be accidentally checked in), and difficult to maintain
- Do: store config in env vars
	- No code change required
	- Language/OS-agnostic
	- Can't be accidentally checked in

## Backing Services

> Treat backing services as attached resources

- Any service consumed over the network, e.g. DBs, messaging systems
- No distinction between local and 3rd party resources—all accessed by URLs/credentials stored in config
- Ability to switch backing services without code changes, e.g. switch from local MySQL to Google [Cloud SQL](notes/GCP%20Cloud%20SQL.md)

## Build, Release, Run

> Strictly separate build, release and run stages

- Build stage
	- Transforms code into executable
	- Includes dependencies
- Release stage
	- Combines build with config
	- Release is ready for execution
- Run stage
	- Application runs in execution environment
- Strict separation—can't change code in run stage, as no way to propagate back to the build stage
- Every release has a unique immutable ID

## Processes

> Execute apps as one or more stateless processes

- Stateless—all persistent data should be stored in a backing database
- Nothing shared with other apps
- Assumed nothing in memory or disk is available for future requests
- Sticky sessions are a violation of the twelve factor app

## Port Binding

> Export services via port binding

- App completely self-contained—doesn't depend on e.g. injection of a webserver
- HTTP exported as a service by binding to a port
- Done via dependency declaration—add webserver libraries to app e.g. Jetty
- Also other services apart from HTTP e.g. Redis

## Concurrency

> Scale out app via process model

- Processes are first-class citizens
- Scale out by increasing the number of processes—horizontal scaling

## Disposability

> Fast startup/graceful shutdown

- Processes disposable—can be started/stopped at a moment't notice
- Fast elastic scaling, rapid deployments
- Minimise startup time
- Shutdown gracefull on SIGTERM
- Also handle non-graceful termination
	- Use queing mechanism to prevent data loss—job returned to queue on timeout

## Dev/Prod Parity

> Keep the development, staging and production environments as similar as possible

- Gaps between dev/prod:
	- Time (to write code)
	- Personnel (devs code, ops deploy)
	- Tools (different stacks in dev vs prod)
- Keep gaps as small as possible
	- Time gap—deploy quickly after coding (hrs/mins)
	- Personnel—keep devs closely involved in deployment and monitoring
	- Use as similar tools as possible—avoid lightweight versions of resources in dev
		- e.g. SQLite vs PostreSQL—easier to install than previously due to modern packaging systems or containers

## Logs

> Treat logs as event streams

- App should not concern itself with storage of the log stream
- Write logs unbuffered to `stdout`
	- Captured by execution environment and routed to final destination for viewing and archival

## Admin Processes

> Run admin tasks as one-off processes

- Run in the same environment a regular processes
- Use the same codebase
- Ship with application code
	- Prevent drift/synchronization issues

# References

- [The Twelve Factor App](https://12factor.net/)
