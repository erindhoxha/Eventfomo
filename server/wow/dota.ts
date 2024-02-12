import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
const fs = require("fs");

puppeteer.use(StealthPlugin());

const url = "https://liquipedia.net/dota2/Portal:Tournaments"; // <-- Replace with your actual URL

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const tournaments = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(".tournamentCard .gridRow"),
    );
    return rows.map((row) => {
      const dateRange = row.querySelector(
        ".gridCell.Header.EventDetails.Date",
      )?.textContent;

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
          row
            .querySelector(".gridCell.Header.Tournament > a")
            ?.textContent?.trim() ||
          row
            .querySelector(".gridCell.Header.Tournament > a")
            ?.getAttribute("title"),
        game_id: "dota",
        starts_at: new Date(starts_at).toISOString(),
        ends_at: new Date(ends_at).toISOString(),
      };
    });
  });

  fs.writeFile(
    "dota-tournaments.json",
    JSON.stringify(tournaments, null, 2),
    (err: Error) => {
      if (err) throw err;
      console.log("Tournaments data has been saved!");
    },
  );

  await browser.close();
};

main();
