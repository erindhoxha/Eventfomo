import MiniTable from "@/app/components/MiniTable/MiniTable";
import { H3, SmallMutedText } from "@/app/components/Typography/Typography";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import useEvents from "@/app/hooks/useEvents";
import getSession from "@/app/hooks/getSession";
import supabase from "@/supabase";
import ButtonWithSubscribe from "@/app/components/ButtonWithSubscribe/ButtonWithSubscribe";

export const metadata: Metadata = {
  title: "Chess games",
  description: "Sync your calendar with your favourite chess games.",
};

export default async function ChessPage() {
  const allEvents = await useEvents({
    gameId: "chess",
  });

  const session = await getSession();
  const user = session?.user;

  const { data, error } = await supabase
    .from("user_game_subscriptions")
    .select("game_id")
    .eq("user_id", user?.id || "")
    .eq("game_id", "chess");

  if (error) {
    console.error("Error fetching subscription:", error);
    return false;
  }

  console.log(data);

  return (
    <>
      <div className="mt-12 sm:mt-24 w-full">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col">
            <H3>Chess events and tournaments</H3>
            <SmallMutedText>
              We will send you emails about ongoing and upcoming Chess events.
            </SmallMutedText>
          </div>
          <div className="flex mt-4 max-w-4xl">
            <ButtonWithSubscribe user={user} subscribed={data.length > 0} />
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
