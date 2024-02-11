import supabase from "@/supabase";

const useUser = async () => {
  const user = await supabase.auth.getUser();

  if (!user) {
    console.log("No user found.");
  }

  return {
    data: user.data.user,
    error: user.error,
  };
};

export default useUser;
