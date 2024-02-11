import supabase from "@/supabase";

interface EventsQuery {
  limit?: number;
  gameId?: string;
}

const useEvents = async ({ limit = 10, gameId }: EventsQuery = {}) => {
  let query = supabase.from("events").select("*").limit(limit);

  if (gameId) {
    query = query.eq("game_id", gameId);
  }

  const { data, error } = await query;

  if (!data) {
    console.log("No events found.");
  }

  return {
    data,
    error,
  };
};

export default useEvents;
