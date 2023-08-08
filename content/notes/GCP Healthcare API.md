---
title: "GCP Healthcare API"
date: "2022-09-06"
tags:
- gcp
- healthcare
---

## Overview

- Manages solution for storing/accessing healthcare data
- Bridge between existing healthcare systems and apps hosted on GCP
- Interfaces:
	- FHIR
	- HL7v2
	- DICOM
- Backed by standards complient data store
- Interface to [Pub/Sub](notes/GCP%20Pub%20Sub.md)
	- Transform in [Dataflow](notes/GCP%20Dataflow.md)
	- Trigger [Cloud Functions](notes/GCP%20Cloud%20Functions.md)
	- Stream to [BigQuery](notes/GCP%20BigQuery.md)
	- Send to [Vertex AI](notes/moc/GCP%20Vertex%20AI.md)

## Key Features

- Standards conformance
- Compiance with privacy regulartions
- Data location control
- Security via IAM
- Open source proxies available for Apigee
	- Thread detection
	- Traffic management
- Bulk import/export via [Cloud Storage](notes/GCP%20Cloud%20Storage.md)
- De-identification
- Auditing via [Cloud Logging](notes/GCP%20Cloud%20Logging.md)
- High availability

## Implementation Details

- Datasets—regional
- Store—modality specific i.e. HL7v2, DICOM, FHIR

![Healthcare API Datastores](files/healthcare_api_datastores.svg)
