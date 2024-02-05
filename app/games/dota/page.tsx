import MiniTable from "@/app/components/MiniTable/MiniTable";
import { H3, SmallMutedText } from "@/app/components/Typography/Typography";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import useEvents from "@/app/hooks/useEvents";
import getSession from "@/app/hooks/getSession";
import supabase from "@/supabase";

export const metadata: Metadata = {
  title: "Dota 2 games",
  description: "Sync your calendar with your favourite Dota 2 games.",
};

export default async function DotaPage() {
  const allEvents = await useEvents({
    gameId: "dota",
  });

  const session = await getSession();
  const user = session?.user;

  const { data, error } = await supabase
    .from("user_game_subscriptions")
    .select("game_id")
    .eq("user_id", user?.id || "")
    .eq("game_id", "dota");

  if (error) {
    console.error("Error fetching subscription:", error);
    return false;
  }

  console.log(data);

  return (
    <>
      <div className="mt-12 sm:mt-24 w-full">
        <div className="flex flex-col">
          <H3>Dota events and tournaments</H3>
          <div className="flex mt-4 max-w-sm">
            <Button variant="default">Subscribe</Button>
            <SmallMutedText marginLeft="2" marginTop="0">
              We will send you emails about ongoing and upcoming Chess events.
            </SmallMutedText>
          </div>
        </div>
        <div className="mt-4">
          <MiniTable title="Popular ongoing events" items={allEvents.data} />
        </div>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <MiniTable title="Recent Tournaments" items={allEvents.data} />
          <MiniTable title="Upcoming Tournaments" items={allEvents.data} />
        </div>
      </div>
    </>
  );
}
