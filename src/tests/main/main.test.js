const puppeteer = require('puppeteer');

describe("Main Page", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: 'new' });
        page = await browser.newPage();
        await page.goto("http://localhost:3000/main");
    });

    afterAll(() => {
        browser.close();
    });

    it('should display "Hello World!" text on button click', async () => {
        const buttonSelector = '[data-testid="custom-button"]';
        await page.waitForSelector(buttonSelector);
        await page.click(buttonSelector);

        await page.waitForFunction(
            'document.querySelector("h1").innerText.includes("Hello World!")'
        );

        const header = await page.$eval('h1', e => e.innerHTML);
        expect(header).toContain('Hello World!');
    });
});
