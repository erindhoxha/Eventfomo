import supabase from "@/supabase";

interface EventsQuery {
  limit?: number;
}

const usePreviousEvents = async ({ limit = 10 }: EventsQuery = {}) => {
  const now = new Date().toISOString();

  let query = await supabase
    .from("events")
    .select("*")
    .filter("starts_at", "lt", now)
    .filter("ends_at", "lt", now)
    .order("starts_at", { ascending: false })
    .limit(limit);

  const { data, error } = await query;

  if (!data) {
    throw new Error("No events found");
  }

  return {
    data,
    error,
  };
};

export default usePreviousEvents;
