const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu'
        ],
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(process.argv[2]);
    //await page.setViewport({width: 1920, height: 1024});
    const links = await page.$$('a');
    for (let i = 0; i < links.length; i++) {
        const linkHref = await page.evaluate((link) => link.href, links[i]);
        console.log(linkHref);
    }
    console.log('Array links length: "%d".', links.length);
    await browser.close();
})();