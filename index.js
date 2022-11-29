const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36")
    await page.goto("https://store.nvidia.com/en-us/geforce/store/?page=1&limit=9&locale=en-us&search=4090")
    await page.screenshot({path: "4090WebsiteQuery.png"})

    const names = await page.evaluate(() => {
        return Array.from(document.querySelector("div > a")).map(x => x.textContent)
    })
    await fs.writeFile("names.txt", names.join("\r\n"))

    await browser.close()
}

start()