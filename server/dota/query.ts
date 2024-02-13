import axios from "axios";
const fs = require("fs");
import { promisify } from "util";

const writeFileAsync = promisify(fs.writeFile);

const url =
  "https://liquipedia.net/dota2/api.php?action=parse&page=Portal:Tournaments&format=json";

axios
  .get(url)
  .then((response) => {
    const data = response.data;
    return writeFileAsync("data.json", JSON.stringify(data, null, 2));
  })
  .then(() => {
    console.log("Data has been written to data.json");
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
