import axios from "axios";
import * as cheerio from "cheerio";

const scrapeWebsite = async () => {
  try {
    const { data } = await axios.get("https://quotes.toscrape.com/");

    const $ = cheerio.load(data);

    $(".quote").each((i, elem) => {
      const text = $(elem).find(".text").text();
      const author = $(elem).find(".author").text();
      console.log({ text, author });
    });
  } catch (err) {
    console.error("Error scraping site:", err.message);
  }
};

scrapeWebsite();
