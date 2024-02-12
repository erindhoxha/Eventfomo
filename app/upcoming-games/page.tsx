import { Metadata } from "next";
import useFutureEvents from "../hooks/useFutureEvents";
import EventTemplate from "../templates/EventTemplate";

export const metadata: Metadata = {
  title: "Upcoming: Events and tournaments",
  description: "Sync your calendar with your favourite games.",
};

export default async function HappeningNowPage() {
  const futureGames = await useFutureEvents({
    limit: 100,
  });
  return (
    <EventTemplate title="Upcoming tournaments" games={futureGames.data} />
  );
}
