const getGameById = (game_id: string) => {
  switch (game_id) {
    case "dota":
      return "Dota 2";
    case "wow":
      return "World of Warcraft";
    case "lol":
      return "League of Legends";
    case "chess":
      return "Chess";
    case "csgo":
      return "CS:GO 2";
  }
};

export default getGameById;
