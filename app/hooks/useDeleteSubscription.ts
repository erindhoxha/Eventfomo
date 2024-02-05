import supabase from "@/supabase";

const useDeleteSubscription = async ({
  user_id,
  game_id,
}: {
  user_id: string;
  game_id: string;
}) => {
  const { data, error } = await supabase
    .from("user_game_subscriptions")
    .delete()
    .eq("user_id", user_id)
    .eq("game_id", game_id);

  return {
    data,
    error,
  };
};

export default useDeleteSubscription;
