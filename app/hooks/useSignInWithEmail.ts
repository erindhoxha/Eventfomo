import supabase from '@/supabase';

async function useSignInWithEmail(email: string) {
 const { data, error } = await supabase.auth.signInWithOtp({
  email: email,
  options: {
   emailRedirectTo: `${location.origin}`,
  },
 });

 return {
  data,
  error,
 };
}

export default useSignInWithEmail;
