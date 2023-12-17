import { Database } from '@/database.generated.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

async function useSignInWithEmail(email: string) {
  const supabase = createClientComponentClient<Database>();

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: `${location.origin}/auth/callback`,
    },
  });

  return {
    data,
    error,
  };
}

export default useSignInWithEmail;
