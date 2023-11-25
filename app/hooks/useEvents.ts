import supabase from '@/supabase';

const useEvents = async () => {
 const useEvents = await supabase.from('events').select('*');
 return {
  data: useEvents.data,
  error: useEvents.error,
 };
};

export default useEvents;
