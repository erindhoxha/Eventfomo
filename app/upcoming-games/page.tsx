import { Metadata } from "next";
import { DataTable } from "../games/data-table";
import { columns } from "../games/columns";
import { H3 } from "../components/Typography/Typography";
import usePreviousEvents from "../hooks/usePreviousEvents";
import useFutureEvents from "../hooks/useFutureEvents";

export const metadata: Metadata = {
  title: "Upcoming: Events and tournaments",
  description: "Sync your calendar with your favourite games.",
};

export default async function HappeningNowPage() {
  const futureGames = await useFutureEvents({
    limit: 100,
  });
  return (
    <div className="mt-12 sm:mt-24 w-full">
      <div className="flex flex-col mb-5">
        <H3>Recent tournaments</H3>
      </div>
      {futureGames.data && (
        <DataTable pageSize={50} columns={columns} data={futureGames.data} />
      )}
    </div>
  );
}
