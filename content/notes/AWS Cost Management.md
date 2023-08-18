---
title: AWS Cost Management
date: 2022-12-12
tags:
  - aws
  - finops
last-modified: 2023-08-18
---

## Overview

- Console for budgeting and forecasting costs
- Methods to optimize pricing—reduce overall AWS bill
- Integrated closely with billing console

## AWS Cost Explorer

- Detailed, allocable cost data
- View data for up to 12 months
- Forecast for next 12 months
- Recommendations on Reserved Instances
- Free of charge

## AWS Budgets

- Track and take action on AWS costs and usage
- Types:
	- Cost budgets
	- Usage budgets
	- Reserved Instances utilization budgets—alert when RI usage falls below threshold
	- Reserved Instances coverage budgets—alert when number of instance hours covered by RIs falls below threshold
	- Savings Plans utilization budgets—alert when Savings Plan usage falls below threshold
	- Savings Plans coverage budgets—alert when Savings Plan eligible usage falls below threshold
- Examples:
	- Monthly cost with fixed amount within account—alert on actual and forecasted spends
	- Monthly cost with variable amount—e.g. each month growing 5%.
	- Budgets for a specific service—e.g. ensure staying within free tier
	- Daily utilization or coverage budget for Reserved Instances or savings plans—alert when utilization drops below e.g. 80%

## AWS Cost Anomaly Detection

- Monitor cost and usage to detect unusual spends
	- [Machine Learning](notes/Machine%20Learning.md)
- Receive alerts via email or SNS
- Determine root cause of anomaly
- Configurable—analyze via service, account, tags, cost categories
