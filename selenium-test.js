const {Builder, By} = require('selenium-webdriver');
const url = require("url");
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(process.argv[2]);
        let elements = await driver.findElements(By.tagName("a"));
        for(let e of elements) {
            console.log(await e.getText());
        }
    }
    finally {
        await driver.quit();
    }
})();

