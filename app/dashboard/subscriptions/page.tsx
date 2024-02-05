import SwitchBox from "@/app/components/SwitchBox/SwitchBox";
import getSession from "@/app/hooks/getSession";
import useSubscriptions from "@/app/hooks/useSubscriptions";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import React from "react";

const subscriptionTypes = [
  {
    id: "chess",
    name: "Chess",
  },
  {
    id: "dota",
    name: "Dota 2",
  },
  {
    id: "lol",
    name: "League of Legends",
  },
  {
    id: "csgo",
    name: "CS:GO 2",
  },
  {
    id: "wow",
    name: "World of Warcraft",
  },
];

const Page = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  const subscriptions = await useSubscriptions({
    id: user.id,
  });

  const isSubscribed = (gameId: string) => {
    return subscriptions.data?.some((sub) => sub.game_id === gameId) || false;
  };

  return (
    <div>
      <div className="mb-2">
        <h1>Subscriptions</h1>
        <p className=" text-sm text-muted-foreground">
          Subscribe to your favourite games and get notified about upcoming
          events.
        </p>
      </div>
      <div>
        {subscriptionTypes.map((item) => (
          <>
            <SwitchBox
              key={item.id}
              user={user}
              gameId={item.id}
              gameName={item.name}
              checked={isSubscribed(item.id)}
            />
            <Separator />
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
