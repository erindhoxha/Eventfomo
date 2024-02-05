import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";
import useSubscription from "@/app/hooks/useSubscription";
import getSession from "@/app/hooks/getSession";
import useEvents from "@/app/hooks/useEvents";

export const metadata: Metadata = {
  title: "World of Warcraft games",
  description:
    "Sync your calendar with your favourite World of Warcraft games.",
};

export default async function WowPage() {
  const session = await getSession();
  const user = session?.user;

  const subscription = await useSubscription({
    id: user?.id,
    game_id: "wow",
  });

  const allEvents = await useEvents({
    gameId: "wow",
  });

  return (
    <GameTemplate
      gameName="World of Warcraft"
      gameId="wow"
      title="World of Warcraft events and tournaments"
      description="We will send you emails about ongoing and upcoming World of Warcraft events."
      subscribed={
        subscription.data && subscription.data?.length > 0 ? true : false
      }
      user={user}
      events={allEvents.data}
    />
  );
}
