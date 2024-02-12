import { Metadata } from "next";
import GameTemplate from "@/app/templates/GameTemplate";

export const metadata: Metadata = {
  title: "World of Warcraft games",
  description:
    "Sync your calendar with your favourite World of Warcraft games.",
};

export const revalidate = 3600;

export default async function WowPage() {
  return (
    <GameTemplate
      gameId="wow"
      title="World of Warcraft events and tournaments"
      description="We will send you emails about ongoing and upcoming World of Warcraft events."
    />
  );
}
