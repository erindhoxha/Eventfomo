import useCurrentEvents from "@/app/hooks/useCurrentEvents";
import EventTemplate from "@/app/templates/EventTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happening now: Events and tournaments",
  description: "Sync your calendar with your favourite games.",
};

export default async function HappeningNowPage() {
  const currentEvents = await useCurrentEvents({
    limit: 100,
    gameId: "dota",
  });
  return <EventTemplate title="Happening now" games={currentEvents.data} />;
}
