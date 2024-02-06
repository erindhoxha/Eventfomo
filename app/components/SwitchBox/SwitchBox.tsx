"use client";

import useDeleteSubscription from "@/app/hooks/useDeleteSubscription";
import useSubscribe from "@/app/hooks/useSubscribe";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SwitchBoxProps {
  gameId: string;
  gameName: string;
  checked: boolean;
  user?: User;
}

const SwitchBox = ({ gameId, gameName, user, checked }: SwitchBoxProps) => {
  const router = useRouter();

  const subscribe = async () => {
    if (user?.id) {
      if (checked) {
        await useDeleteSubscription({
          gameId,
          userId: user.id,
        });
        router.refresh();
        return;
      }
      await useSubscribe({
        gameId,
        userId: user.id,
      });
      router.refresh();
    }
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
