# Razorpay integration plan

Development will use Razorpay test mode. The server will calculate the payable amount from trusted departure and pricing data, create the order, and retain the provider order ID.

After checkout, the server will verify the signature. A signed Razorpay webhook will provide the durable reconciliation path. Events will be recorded idempotently, so duplicate delivery cannot confirm or refund a booking twice.

Production credentials may be configured only after merchant onboarding and owner approval.
