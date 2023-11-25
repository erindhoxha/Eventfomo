import supabase from '@/supabase';

const useEvents = async () => {
 const events = await supabase.from('events').select('*').limit(10);

 if (!events) {
  throw new Error('No events found');
 }

 return {
  data: events.data,
  error: events.error,
 };
};

export default useEvents;
