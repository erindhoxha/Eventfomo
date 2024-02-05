import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";

export const metadata: Metadata = {
  title: "CS:GO 2 games",
  description: "Sync your calendar with your favourite CSGO games.",
};

export default async function CSGOPage() {
  return (
    <GameTemplate
      gameName="CS:GO 2"
      gameId="csgo"
      title="CS:GO 2 events and tournaments"
      description="We will send you emails about ongoing and upcoming CS:GO 2 events."
    />
  );
}
