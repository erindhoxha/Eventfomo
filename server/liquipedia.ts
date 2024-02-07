const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const fs = require("fs");

puppeteer.use(StealthPlugin());

const url = "https://liquipedia.net/dota2/Portal:Tournaments"; // <-- Replace with your actual URL

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Scrape the tournament data
  const tournaments = await page.evaluate(() => {
    const rows = Array.from(
      document.querySelectorAll(".tournamentCard .gridRow"),
    );
    return rows.map((row) => {
      console.log(row);
      return {
        tier: row
          .querySelector(".gridCell.Header.Tier a")
          ?.getAttribute("title"),
        title: row
          .querySelector(".gridCell.Header.Tournament a")
          ?.getAttribute("title"),
        date: row.querySelector(".gridCell.Header.EventDetails.Date")
          ?.textContent,
      };
    });
  });

  console.log(tournaments);

  // Save to JSON file
  fs.writeFile(
    "tournaments.json",
    JSON.stringify(tournaments, null, 2),
    (err: Error) => {
      if (err) throw err;
      console.log("Tournaments data has been saved!");
    },
  );

  await browser.close();
};

main();
