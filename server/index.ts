const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
import { Browser } from "puppeteer";
const fs = require("fs");

puppeteer.use(StealthPlugin());

const url = "https://books.toscrape.com/";

const main = async () => {
  const browser: Browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({
    path: "bot2.jpg",
  });

  const bookData = await page.evaluate(() => {
    const bookPods = Array.from(document.querySelectorAll(".product_pod"));
    const data = bookPods.map((bookPod: any) => {
      const title = bookPod.querySelector("h3 > a").getAttribute("title");
      const price = bookPod.querySelector(".price_color").textContent;
      return { title, price };
    });
    return data;
  });

  await browser.close();

  fs.writeFile("data.json", JSON.stringify(bookData), (err: any) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

main();
