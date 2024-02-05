"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import supabase from "@/supabase";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useState } from "react";

interface SwitchBoxProps {
  gameId: string;
  gameName: string;
  checked: boolean;
  user?: User;
}

const SwitchBox = ({ gameId, gameName, checked, user }: SwitchBoxProps) => {
  const [loading, setLoading] = useState(false);
  const [checkedState, setChecked] = useState(checked);

  const subscribe = async () => {
    if (loading) return;
    setLoading(true);

    let data;
    if (user?.id) {
      if (checkedState) {
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
    setChecked(!checkedState);
  };

  return (
    <div className="flex items-center justify-between">
      <Label
        htmlFor="chess"
        className="flex items-center w-full cursor-pointer py-4"
      >
        <Image
          src={`/img/icons/${gameId}.png`}
          width={24}
          height={24}
          alt={gameName}
        />
        <p className="text-sm ml-1">{gameName}</p>
      </Label>
      <Switch
        id={gameId}
        checked={checkedState}
        onClick={() => {
          subscribe();
        }}
      />
    </div>
  );
};

export default SwitchBox;
