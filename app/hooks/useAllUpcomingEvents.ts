import supabase from '@/supabase';

const useAllUpcomingEvents = async () => {
 const upcomingEvents = await supabase.from('all-upcoming-events').select('*');
 return {
  data: upcomingEvents.data,
  error: upcomingEvents.error,
 };
};

export default useAllUpcomingEvents;
