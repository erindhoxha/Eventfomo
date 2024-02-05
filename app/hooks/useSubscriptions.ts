import supabase from "@/supabase";

const useSubscriptions = async ({ id }: { id: string }) => {
  const { data, error } = await supabase
    .from("user_game_subscriptions")
    .select("*")
    .eq("user_id", id);

  return {
    data,
    error,
  };
};

export default useSubscriptions;
