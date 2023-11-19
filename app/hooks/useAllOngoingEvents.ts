import supabase from '@/supabase';

const useAllOngoingEvents = async () => {
 const ongoingEvents = await supabase.from('all-ongoing-events').select('*');
 return {
  data: ongoingEvents.data,
  error: ongoingEvents.error,
 };
};

export default useAllOngoingEvents;
