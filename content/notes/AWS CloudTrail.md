---
title: "AWS CloudTrail"
date: "2022-10-25"
tags:
- aws
- security
- logging
- monitoring
---

## Overview

- Activity in AWS account recorded in CloudTrail
- Enabled on AWS account when created
	- Default: logs management events, 90 day retention, not logged to S3
- View events in event history console
- Download CSV/JSON export
- Create CloudTrail to archive/analyze changes to AWS
	- Delivered to S3 bucket, CloudWatch, EventBridge
- Global (default) or regional
- Organization trails
	- Log all events for [Organization](notes/AWS%20Organization%20Hierarchy.md)
	- Create in management account
	- Member accounts have no access by default
	- [Control Tower](notes/moc/AWS%20Control%20Tower.md) sets up organization level trail by default
- Log files encrypted using S3 server-side-encryption (SSE)
	- Can also encrypt with KMS
- Organize with S3 lifecycle rules e.g. archive, delete automatically
- Event logs delivered on average within 15 mins of API call (not guaranteed)
- Subscribe to trail—SNS topic

## Events

- Record of activity in account
- Triggered by user, role or service
- API and non-API activity
	- console, APIs, SDKs, CLI

### Management Events

- Control plane operations
- Info about management operations
- Examples:
	- Configuration of security
	- Registration of devices
	- Configuration of rules for routing data
	- Configuration of logging
- Also non-API events e.g. user log-in to account

### Data Events

- Data plane operations
- Info about resource operations
- Examples:
	- S3 object-level API operations
	- Lambda execution
	- DynamoDB object-level API activity
- Not logged by default—explicitly add resources to trail when creating
- High volume
- Charges apply

### Insights Events

- Unusual API call/error rates
- Logged to a different prefix in S3 bucket
- Only logged when unusual activity detected
- Examples:
	- Increase in S3 `deleteBucket` API calls (e.g. 20 per min to 100 per min)
	- Increase in IAM API `AccessDeniedException` response codes (e.g. <1 per day to 12 per minute)
- Disabled by defaults

## Monitoring

- Send CloudTrail events to CloudWatch logs
	- Trigger alarm according to metric filter

## Security Best Practices

### Detective

- Create a trail
	- Required to archive >90 days of events in S3
	- Configure for all management events in all regions (organization level if applicable)
- Log events in all regions
- Enable CloudTrail log file integrity
	- Generates digest files—contain hashes of every log file
	- Use to ensure logs haven't been modified
- Integrate with CloudWatch logs
	- Enables monitoring and alerting of events
	- Enable detective control `cloud-trail-cloud-watch-logs-enabled` in AWS Config to ensure all trails send events

### Preventative

- Log to dedicated central S3 bucket
	- Enforce security controls, access, and segregation of duties
	- Log archive account
- Use SSE with AWS KMS managed keys
	- Rather than S3-managed encryption keys (SSE-S3)
	- Directly manageable
	- More secure—uses need bucket permission and policy to use key to decrypt
- Add a condition key to default SNS topic policy
	- Add `aws:SourceArn` condition key to SNS policy statement—prevent unauthorised access to topic
- Implement least privilege access to log archive S3 bucket
- Enable MFA delete on log archive S3 bucket
- Confiogure S3 object lifecycle management on log archive
- Limit access to the AWSCloudTrail_FullAccess policy
