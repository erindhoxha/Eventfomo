"use client";

import { Button } from "@/components/ui/button";
import supabase from "@/supabase";

const ButtonWithSubscribe = ({
  user,
  subscribed,
}: {
  user: any;
  subscribed: boolean;
}) => {
  const subscribe = async () => {
    const data =
      user?.id &&
      (await supabase
        .from("user_game_subscriptions")
        .insert({ user_id: user?.id, game_id: "chess" }));

    if (data && data.error) {
      console.error("Error subscribing to chess events", data.error);
    }
  };

  return (
    <Button
      variant={subscribed ? "success" : "default"}
      className="w-full md:w-auto"
      onClick={() => subscribe()}
    >
      {subscribed ? "Subscribed ✓" : "Subscribe to Chess events"}
    </Button>
  );
};

export default ButtonWithSubscribe;
