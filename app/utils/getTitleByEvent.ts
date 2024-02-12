import { EventType, GamesType } from "../types/global";
import getGameById from "./getGameById";

export const getTitleByEvent = (event: EventType, game: GamesType) => {
  const gameTitleById = getGameById(game);
  switch (event) {
    case "current":
      return `Current ${gameTitleById} tournaments`;
    case "recent":
      return `Recent ${gameTitleById} tournaments`;
    case "upcoming":
      return `Upcoming ${gameTitleById} tournaments`;
    default:
      throw new Error("Event type doesn't exist");
  }
};
