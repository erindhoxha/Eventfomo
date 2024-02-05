import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";

export const metadata: Metadata = {
  title: "World of Warcraft games",
  description:
    "Sync your calendar with your favourite World of Warcraft games.",
};

export default async function WowPage() {
  return (
    <GameTemplate
      gameName="World of Warcraft"
      gameId="wow"
      title="World of Warcraft events and tournaments"
      description="We will send you emails about ongoing and upcoming World of Warcraft events."
    />
  );
}
