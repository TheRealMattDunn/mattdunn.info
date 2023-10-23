---
title: GKE Security Best Practices
date: 2022-03-28
last-modified: 2023-10-23
tags:
  - google cloud
  - gke
  - security
  - kubernetes
---

- Automate CIS Benchmarking
	- kube-bench
	- [Anthos](notes/Anthos.md) Config Management with CIS benchmark policies
- Google Groups for RBAC
- Run nodes with least privilege SA—avoid [Compute Engine](notes/Compute%20Engine.md) default service account
	- `roles/monitoring.viewer`
	- `roles/monitoring.metricWriter`
	- `roles/logging.logWriter`
	- `roles/stackdriver.resourceMetadata.write`
- Use Workload Identity to access Google Cloud APIs—don't use underlying node service account
- Enable private access only on control plane API
- Create a private cluster (no external IP addresses)—use bastion host for access
- Use Container-Optimized OS for nodes images—hardened OS
- Use shielded [GKE](notes/Kubernetes%20Engine%20(GKE).md) nodes—protects against node impersonation
- Enable GKE sandbox—protects against privilege escalation and unstrusted code from affecting the host kernel
- Enforce network policies—ensure prod Pods can only communicate with allowed resources
- Ensure audit logging is enabled—export logs to [BigQuery](notes/BigQuery.md)
- Enable Binary Authorization—allow trusted container images only
- Enable container image vulnerability scanning
- Use GKE autopilot if possible—includes hardened setup by default

## References

- [kube-bench](https://github.com/aquasecurity/kube-bench)
- [Use CIS Kubernetes Benchmark policy constraints](https://cloud.google.com/anthos-config-management/docs/how-to/using-cis-k8s-benchmark)
