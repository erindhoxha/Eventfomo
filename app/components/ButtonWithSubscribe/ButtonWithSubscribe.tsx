"use client";

import { Button } from "@/components/ui/button";
import supabase from "@/supabase";
import { User } from "@supabase/supabase-js";
import { useState } from "react";

const ButtonWithSubscribe = ({
  user,
  subscribed,
  gameId,
  gameName,
}: {
  user: User | undefined;
  subscribed: boolean;
  gameId: string;
  gameName: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [subscribedState, setSubscribed] = useState(subscribed);

  const subscribe = async () => {
    if (loading) return;
    setLoading(true);

    let data;
    if (user?.id) {
      if (subscribedState) {
        // If the user is already subscribed, delete the subscription
        data = await supabase
          .from("user_game_subscriptions")
          .delete()
          .eq("user_id", user.id)
          .eq("game_id", gameId);
      } else {
        // If the user is not subscribed, insert the subscription
        data = await supabase
          .from("user_game_subscriptions")
          .insert({ user_id: user.id, game_id: gameId });
      }
    }

    setLoading(false);
    if (data && data.error) {
      console.error("Error updating subscription", data.error);
      return;
    }
    // Toggle the subscribed state
    setSubscribed(!subscribedState);
  };

  return (
    <Button
      variant={subscribedState ? "success" : "default"}
      className="w-full md:w-auto"
      onClick={() => subscribe()}
    >
      {loading
        ? "Loading..."
        : subscribedState
        ? "Subscribed ✓"
        : `Subscribe to ${gameName} events`}
    </Button>
  );
};

export default ButtonWithSubscribe;
