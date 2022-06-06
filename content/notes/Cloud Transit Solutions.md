---
title: "Cloud Transit Solutions"
date: "2022-06-06"
tags:
- aviatrix
- cloud
---

## Native Solutions

| CSP                                                     | Transit Solution                                                   | Limitations                                                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [AWS](notes/AWS.md)                                     | [AWS Transit Gateway](notes/AWS%20Transit%20Gateway%20(TGW).md)    | Lack of visibility<br>No peering within region<br>No security controls<br>Limited BGP support |
| [Azure](notes/Azure.md)                                 | [Via ExpressRoute Edge Router](notes/Azure%20Transit%20Options.md) | Lack of visibility<br>Lack of control<br>Noisy neighbours                                     |
| Azure                                                   | Azure Firewall                                                     | Lack of visibility<br>Requires NAT and load balancer                                          |
| Azure                                                   | Virtual WAN                                                        | Lack of visibility<br>Lack of control<br>Limited to 200 BGP routes to on-prem<br>Cost         |
| [GCP](notes/GCP.md)                                     | None                                                               | No native transit solutions<br>Single global VPC                                              |
| [OCI](notes/Oracle%20Cloud%20Infrastructure%20(OCI).md) | Limited                                                            | No native east-west and north-south transit solution<br>Promotes third party appliances       |

## Third-Party Solutions

- Legacy hardware vendors (e.g. Cisco etc.)
- Manual setup/management
- Not fully cloud aware—e.g. no IaC
- Large blast radius
