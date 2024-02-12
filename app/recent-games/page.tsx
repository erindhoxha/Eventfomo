import { Metadata } from "next";
import usePreviousEvents from "../hooks/usePreviousEvents";
import EventTemplate from "../templates/EventTemplate";

export const metadata: Metadata = {
  title: "Recent events and tournaments",
  description: "Sync your calendar with your favourite games.",
};

export default async function HappeningNowPage() {
  const previousGames = await usePreviousEvents({
    limit: 100,
  });
  return (
    <EventTemplate title="Recent tournaments" games={previousGames.data} />
  );
}
