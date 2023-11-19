import supabase from '@/supabase';

const useAllPreviousEvents = async () => {
 const previousEvents = await supabase.from('all-previous-events').select('*');
 return {
  data: previousEvents.data,
  error: previousEvents.error,
 };
};

export default useAllPreviousEvents;
