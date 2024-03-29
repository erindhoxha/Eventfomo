const useDeleteSubscription = async ({
  gameId,
  userId,
}: {
  gameId: string;
  userId: string;
}) => {
  const response = await fetch(`/api/delete_subscription`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      game_id: gameId,
      user_id: userId,
    }),
  });
  return response;
};

export default useDeleteSubscription;
