# AWS architecture target

CloudFront -> S3 (frontend) -> API Gateway -> ECS/Fargate or Lambda -> SQS -> scanner workers -> RDS PostgreSQL.

Secrets Manager stores provider credentials. CloudWatch collects logs and metrics. IAM follows least privilege. S3 can store sanitized scan reports. WAF protects the public API.

For the academic prototype, local Docker is enough; AWS deployment is the production-oriented extension.
