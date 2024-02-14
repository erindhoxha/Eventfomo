import * as cheerio from "cheerio";
const path = require("path");
const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"),
);

const html = data.parse.text["*"];
const $ = cheerio.load(html);

const rows = $(".tournamentCard .gridRow");
const tournaments = rows
  .map((_, row) => {
    const dateRange = $(row).find(".gridCell.Header.EventDetails.Date").text();

    function parseDateRange(dateRange: string) {
      if (!dateRange) return { starts_at: "", ends_at: "" };
      const parts = dateRange.split(" - ");
      const year = new Date().getFullYear(); // Get the current year
      const starts_at = new Date(`${parts[0]}, ${year}`);

      let ends_at;
      if (parts[1]) {
        if (isNaN(Date.parse(parts[1]))) {
          const monthYear = parts[0].split(" ").slice(0, -1).join(" ");
          ends_at = new Date(`${monthYear} ${parts[1]}, ${year}`);
        } else {
          ends_at = new Date(parts[1]);
        }
      } else {
        ends_at = new Date(parts[0]);
      }
      return { starts_at, ends_at };
    }

    const { starts_at, ends_at } = parseDateRange(dateRange || "");

    return {
      name:
        $(row).find(".gridCell.Header.Tournament > a")?.text()?.trim() ||
        $(row).find(".gridCell.Header.Tournament > a")?.attr("title"),
      game_id: "dota",
      starts_at: new Date(starts_at).toISOString(),
      ends_at: new Date(ends_at).toISOString(),
    };
  })
  .get();

fs.writeFile(
  "dota-tournaments-from-cheerio.json",
  JSON.stringify(tournaments, null, 2),
  (err: Error) => {
    if (err) throw err;
    console.log("Tournaments data has been saved!");
  },
);
