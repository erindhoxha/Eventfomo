import supabase from "@/supabase";

const useSubscription = async ({
  id,
  game_id,
}: {
  id?: string;
  game_id: string;
}) => {
  const { data, error } = await supabase
    .from("user_game_subscriptions")
    .select("game_id")
    .eq("user_id", id || "")
    .eq("game_id", game_id);

  return {
    data,
    error,
  };
};

export default useSubscription;
