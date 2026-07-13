---
title: "Application Development Strategies on Kubernetes"
date: "2022-10-17"
tags:
- development
- kubernetes
---

## Breaking Down the Problem

- How are the lives of developers going to change when adopting [Kubernetes](notes/moc/Kubernetes.md)?

![[files/k8s_pipeline.svg]]

- Kubernetes is quite far towards the ops side
	- Usual response is that developers shouldn't care where the application is deployed!
	- Correct answer—it depends!
		- Depends on which parts of the process devs have ownership of

## Three Patterns

### Traditional Local Development

- App devs responsible for code up to check in
- Still needs to be built etc.—not responsibility of devs
- Usual dev role in most orgs
- Devs not impacted by runtime
- Downside: difficult for second team to containerize code—didn't write it, devs know dependencies best

### Development in Containers

- Devs own responsibility of containerization
- Need new tools e.g. Dockerfiles, Buildpacks
- Move devs towards ops side—closer to DevOps-style shared ownership
- Still not a lot to do with Kubernetes!

### Developing Directly on Kubernetes

- Devs own responsibility to define how apps run on Kubernetes
	- YAML manifests
- Need Kubernetes development environment e.g. Minikube, GKE
- Tools: Cloud Code IDE plugin, Skaffold
