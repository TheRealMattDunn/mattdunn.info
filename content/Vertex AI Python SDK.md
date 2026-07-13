---
title: Vertex AI Python SDK
date: 2023-08-25
last-modified: 2023-08-25
tags:
  - example
---

## Basic Usage

```python
from google.cloud import aiplatform

# Initialise
aiplatform.init(...)

# Create datasets - e.g. tabular
tabular_dataset = aiplatform.TabularDataset.create(...)

# Start training job
custom_job = aiplatform.CustomTrainingJob(...)
automl_tabular_job = aiplatform.AutoMLTabularTrainingJob(...)

model = automl_tabular_job.run(...)

# Deploy a model
endpoint = model.deploy(...)

# Batch prediction
batch_prediction_job = model.batch_predict(...)

# Predict with endpoint
prediction = endpoint.predict(...)

# Clean up
endpoint.undeploy_all()
endpoint.delete()
```

## References

- [Documentation](https://cloud.google.com/python/docs/reference/aiplatform/latest)