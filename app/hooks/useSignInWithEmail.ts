import supabase from '@/supabase';

async function useSignInWithEmail(email: string) {
 const { data, error } = await supabase.auth.signInWithOtp({
  email: email,
  options: {
   emailRedirectTo: 'https://localhost:3000/',
  },
 });
 return {
  data,
  error,
 };
}

export default useSignInWithEmail;
