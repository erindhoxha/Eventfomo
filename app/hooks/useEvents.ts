import supabase from '@/supabase';

interface EventsQuery {
 limit?: number;
}

const useEvents = async ({ limit = 10 }: EventsQuery = {}) => {
 const events = await supabase.from('events').select('*').limit(limit);

 if (!events) {
  throw new Error('No events found');
 }

 return {
  data: events.data,
  error: events.error,
 };
};

export default useEvents;
