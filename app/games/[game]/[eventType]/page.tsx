import useEvents from "@/app/hooks/useEvents";
import usePreviousEvents from "@/app/hooks/usePreviousEvents";
import EventTemplate from "@/app/templates/EventTemplate";
import { EventType, GamesType } from "@/app/types/global";
import getCurrentEvents from "@/app/utils/getCurrentEvents";
import { getEventsByEventType } from "@/app/utils/getEventsByEventType";
import getUpcomingEvents from "@/app/utils/getFutureEvents";
import getGameById from "@/app/utils/getGameById";
import getRecentEvents from "@/app/utils/getPreviousEvents";
import { getTitleByEvent } from "@/app/utils/getTitleByEvent";
import { Metadata, ResolvingMetadata } from "next";

type EventMetadataType = { game: GamesType; eventType: EventType };

export const revalidate = 3600;

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

  const event = getEventsByEventType(eventType, allGames.data);
  const title = getTitleByEvent(eventType, game);

  return <EventTemplate title={title} games={event} />;
}
