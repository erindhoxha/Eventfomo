import useEvents from "@/app/hooks/useEvents";
import usePreviousEvents from "@/app/hooks/usePreviousEvents";
import EventTemplate from "@/app/templates/EventTemplate";
import { EventType, GamesType } from "@/app/types/global";
import getCurrentEvents from "@/app/utils/getCurrentEvents";
import getUpcomingEvents from "@/app/utils/getFutureEvents";
import getRecentEvents from "@/app/utils/getPreviousEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A",
  description: "123.",
};

export default async function Page({
  params,
}: {
  params: { game: GamesType; eventType: EventType };
}) {
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

  const getTitleByEvent = (e: EventType) => {
    switch (e) {
      case "current":
        return "Current tournaments";
      case "recent":
        return "Recent tournaments";
      case "upcoming":
        return "Upcoming tournaments";
      default:
        throw new Error("Event type doesn't exist");
    }
  };

  const event = getByEvent(eventType);
  const title = getTitleByEvent(eventType);

  return <EventTemplate title={title} games={event} />;
}
