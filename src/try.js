const puppeteer = require('puppeteer');

const getQuotes = async (url) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'domcontentloaded',
  });

  await page.evaluate(() => {
    const { title } = document;
    const shortonedTitle = `${title.slice(0, 80)}...`;
    return shortonedTitle;
  });
  await browser.close();
};

export default getQuotes;