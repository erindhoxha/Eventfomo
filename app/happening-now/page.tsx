import { Metadata } from "next";
import { DataTable } from "../games/data-table";
import { columns } from "../games/columns";
import { H3 } from "../components/Typography/Typography";
import useCurrentEvents from "../hooks/useCurrentEvents";
import EventTemplate from "../templates/EventTemplate";

export const metadata: Metadata = {
  title: "Happening now: Events and tournaments",
  description: "Sync your calendar with your favourite games.",
};

export default async function HappeningNowPage() {
  const currentEvents = await useCurrentEvents({
    limit: 100,
  });
  return <EventTemplate title="Happening now" games={currentEvents.data} />;
}
