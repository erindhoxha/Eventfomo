import { Metadata } from "next";
import { DataTable } from "../games/data-table";
import { columns } from "../games/columns";
import { H3 } from "../components/Typography/Typography";
import useCurrentEvents from "../hooks/useCurrentEvents";

export const metadata: Metadata = {
  title: "Happening now: Events and tournaments",
  description: "Sync your calendar with your favourite games.",
};

export default async function HappeningNowPage() {
  const currentEvents = await useCurrentEvents({
    limit: 100,
  });
  return (
    <div className="mt-12 sm:mt-24 w-full">
      <div className="flex flex-col mb-5">
        <H3>Happening now</H3>
      </div>
      {currentEvents.data && (
        <DataTable pageSize={15} columns={columns} data={currentEvents.data} />
      )}
    </div>
  );
}
