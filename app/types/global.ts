export interface Event {
  description: string | null;
  ends_at: string | null;
  game_id: string;
  id: number;
  name: string;
  starts_at: string;
}

export type EventType = "recent" | "upcoming" | "current";

export type GamesType = "dota" | "wow" | "chess" | "csgo" | "lol";
