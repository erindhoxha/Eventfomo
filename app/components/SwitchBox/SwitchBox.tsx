"use client";

import getSession from "@/app/hooks/getSession";
import useDeleteSubscription from "@/app/hooks/useDeleteSubscription";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import supabase from "@/supabase";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SwitchBoxProps {
  gameId: string;
  gameName: string;
  checked: boolean;
  user?: User;
}

const SwitchBox = ({ gameId, gameName, user, checked }: SwitchBoxProps) => {
  const router = useRouter();

  const subscribe = async () => {
    if (checked) {
      await fetch(`/api/delete_subscription`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          game_id: gameId,
          user_id: user?.id,
        }),
      });
      router.refresh();
      return;
    }
    await fetch(`/api/subscribe`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        game_id: gameId,
        user_id: user?.id,
      }),
    });
    router.refresh();
  };

  return (
    <div className="flex items-center justify-between">
      <Label
        htmlFor={gameId}
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
        checked={checked}
        onClick={() => {
          subscribe();
        }}
      />
    </div>
  );
};

export default SwitchBox;
