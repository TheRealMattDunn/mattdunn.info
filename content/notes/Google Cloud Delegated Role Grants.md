---
title: Google Cloud Delegated Role Grants
date: 2023-07-26
last-modified: 2023-10-23
tags:
  - google-cloud
  - iam
  - security
---

## Overview

- Fine-grained [access control](notes/Cloud%20IAM.md)
- Set limits on the roles that a project admin can grant
- Uses IAM conditions with `iam.googleapis.com/modifiedGrantsByRole` API attributes
	- Set attribute when assigning role with `resourcemanager.projects.setIamPolicy` permission, e.g. Project IAM Admin
- Use to e.g. restrict access to GCE and GCS only:

![[files/google_cloud_delegated_role_grants.svg]]

## Considerations

- IAM bindings applied additively
	- Conditional role binding can be overridden by the same role applied unconditionally—either directly or indirectly through the resource hierarchy
	- Ensure that `resourcemanager.projects.setIamPolicy` is not bound to the admin unconditionally—the user could then grant any role to themselves, and bypass the conditional role binding
	- Ensure that none of the delegated roles include `resourcemanager.projects.setIamPolicy`—also allow the user to grant any role to themselves
	- Admins should not be allowed to modify any custom roles they can grant—otherwise they could add any permission to the custom role, and grant it to themselves
