"use client";

import useDeleteSubscription from "@/app/hooks/useDeleteSubscription";
import useSubscribe from "@/app/hooks/useSubscribe";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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

  const [active, setActive] = useState(checked);
  const [error, setError] = useState("");

  const subscribe = async () => {
    setError("");
    setActive(!active);
    try {
      let response;
      if (user?.id) {
        if (checked) {
          response = await useDeleteSubscription({
            gameId,
            userId: user.id,
          });
        } else {
          response = await useSubscribe({
            gameId,
            userId: user.id,
          });
        }
      }
      if (!response?.ok) {
        throw new Error(`HTTP error! status: ${response?.status}`);
      }
      router.refresh();
    } catch (err) {
      setError("Something went wrong on our end. Please try again.");
      setActive(checked);
    }
  };

  return (
    <>
      {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
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
          checked={active}
          onClick={() => {
            subscribe();
          }}
        />
      </div>
    </>
  );
};

export default SwitchBox;
