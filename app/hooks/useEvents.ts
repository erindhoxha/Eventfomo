import supabase from "@/supabase";
import { GamesType } from "../types/global";
import { Games } from "../constants/constants";

interface EventsQuery {
  limit?: number;
  gameId?: GamesType;
}

const useEvents = async ({ limit = 10, gameId }: EventsQuery = {}) => {
  if (gameId && !Games.includes(gameId)) {
    throw new Error(
      `Invalid game ID: ${gameId}. It must be one of these games: ${Games}`,
    );
  }

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
