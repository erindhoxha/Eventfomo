import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";

export const metadata: Metadata = {
  title: "Dota 2 games",
  description: "Sync your calendar with your favourite Dota 2 games.",
};

export default async function DotaPage() {
  return (
    <GameTemplate
      gameId="dota"
      title={`Dota 2 events and tournament`}
      description="We will send you emails about ongoing and upcoming Dota 2 events."
    />
  );
}
