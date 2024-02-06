const useSubscribe = async ({
  gameId,
  userId,
}: {
  gameId: string;
  userId: string;
}) => {
  const response = await fetch(`/api/subscribe`, {
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

export default useSubscribe;
