const puppeteer = require('puppeteer')

async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://store.nvidia.com/en-us/geforce/store/?page=1&limit=9&locale=en-us&search=4090")
    await page.screenshot({path: "4090WebsiteQuery.png"})
    await browser.close()
}

start()