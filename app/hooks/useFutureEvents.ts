import supabase from "@/supabase";

interface EventsQuery {
  limit?: number;
}

const useFutureEvents = async ({ limit = 10 }: EventsQuery = {}) => {
  const now = new Date().toISOString();

  let query = await supabase
    .from("events")
    .select("*")
    .filter("starts_at", "gt", now)
    .order("starts_at", { ascending: true })
    .limit(limit);

  const { data, error } = await query;

  if (!data) {
    console.log("No events found.");
  }

  return {
    data,
    error,
  };
};

export default useFutureEvents;
