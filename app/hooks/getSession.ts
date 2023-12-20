import { Database } from '@/database.generated.types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getSession = async () => {
 const supabase = createServerComponentClient<Database>({ cookies });

 const {
  data: { session },
 } = await supabase.auth.getSession();

 return session;
};

export default getSession;
