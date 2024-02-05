import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";

export const metadata: Metadata = {
  title: "League of Legends games",
  description:
    "Sync your calendar with your favourite League of Legends games.",
};

export default async function LeagueGames() {
  return (
    <GameTemplate
      gameName="League of Legends"
      gameId="lol"
      title="League of Legends events and tournaments"
      description="We will send you emails about ongoing and upcoming League of Legends events."
    />
  );
}
