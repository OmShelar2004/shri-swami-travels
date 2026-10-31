# Troubleshooting

If the application does not start, verify that dependencies are installed with `npm install` and that you are using a supported Node.js release. If Supabase or Razorpay features fail after they are added, first check that the matching `.env.local` values are present and that no secret has been prefixed with `NEXT_PUBLIC_`.
