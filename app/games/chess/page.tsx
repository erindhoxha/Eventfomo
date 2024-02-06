import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";
import getSession from "@/app/hooks/getSession";

export const metadata: Metadata = {
  title: "Chess games",
  description: "Sync your calendar with your favourite chess games.",
};

export default async function ChessPage() {
  return (
    <GameTemplate
      gameId="chess"
      title="Chess events and tournaments"
      description="We will send you emails about ongoing and upcoming Chess events."
    />
  );
}
