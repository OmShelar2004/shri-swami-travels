import { createClient } from "@supabase/supabase-js";
import { getServerSupabaseEnvironment } from "@/lib/env";

/** Server-only client for privileged jobs and webhook processing. Never import into client code. */
export function createSupabaseAdminClient() {
  const environment = getServerSupabaseEnvironment();
  return createClient(
    environment.NEXT_PUBLIC_SUPABASE_URL,
    environment.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } },
  );
}
