"use client";

import useDeleteSubscription from "@/app/hooks/useDeleteSubscription";
import useSubscribe from "@/app/hooks/useSubscribe";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ButtonWithSubscribe = ({
  subscribed,
  gameId,
  userId,
}: {
  subscribed?: boolean;
  gameId: string;
  userId?: string;
}) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(subscribed);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const channel = supabase
      .channel("realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "user_game_subscriptions",
        },
        (data) => {
          console.log("Change received!", data);
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);

  const subscribe = async () => {
    setLoading(true);
    setActive(!active);
    setError("");
    try {
      let response;
      if (userId) {
        if (subscribed) {
          response = await useDeleteSubscription({
            gameId,
            userId,
          });
        } else {
          response = await useSubscribe({
            gameId,
            userId,
          });
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong on our end. Please try again.");
      setActive(subscribed);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Button
        variant={active ? "outline" : "success"}
        className="max-w-[150px] min-w-[150px] md:ml-auto"
        onClick={subscribe}
        disabled={loading}
      >
        {loading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : active ? (
          loading ? (
            "Subscribing..."
          ) : (
            "Unsubscribe"
          )
        ) : (
          "Subscribe"
        )}
      </Button>
      {error && (
        <p className="text-red-500 md:text-right text-sm mt-2">{error}</p>
      )}
    </>
  );
};

export default ButtonWithSubscribe;
