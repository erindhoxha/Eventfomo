import useEvents from "@/app/hooks/useEvents";
import usePreviousEvents from "@/app/hooks/usePreviousEvents";
import EventTemplate from "@/app/templates/EventTemplate";
import { EventType, GamesType } from "@/app/types/global";
import getCurrentEvents from "@/app/utils/getCurrentEvents";
import getUpcomingEvents from "@/app/utils/getFutureEvents";
import getGameById from "@/app/utils/getGameById";
import getRecentEvents from "@/app/utils/getPreviousEvents";
import { Metadata, ResolvingMetadata } from "next";

type EventMetadataType = { game: GamesType; eventType: EventType };

const getTitleByEvent = (event: EventType, game: GamesType) => {
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

export async function generateMetadata({
  params,
}: {
  params: EventMetadataType;
}): Promise<Metadata> {
  const title = getTitleByEvent(params.eventType, params.game);

  return {
    title: `Eventfomo - ${title}`,
  };
}

export default async function Page({ params }: { params: EventMetadataType }) {
  const { game, eventType } = params;

  const allGames = await useEvents({
    limit: 200,
    gameId: game,
  });

  if (allGames.error) {
    throw new Error("Game type doesn't exist. Please try again");
  }

  const getByEvent = (e: EventType) => {
    switch (e) {
      case "recent":
        return getRecentEvents(allGames.data);
      case "current":
        return getCurrentEvents(allGames.data);
      case "upcoming":
        return getUpcomingEvents(allGames.data);
      default:
        throw new Error("Event type doesn't exist");
    }
  };

  const event = getByEvent(eventType);
  const title = getTitleByEvent(eventType, game);

  return <EventTemplate title={title} games={event} />;
}
