const puppeteer = require('puppeteer');
const fs = require('fs')

async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--incognito',
        ],
    });
    const url = 'https://en.wikipedia.org/wiki/List_of_airlines_of_the_United_States';
    const page = await browser.newPage();
    await page.goto(url);
    console.log('AAAA');

    const urls = await page.evaluate(() => {
        const table = document.querySelector('.wikitable');
        console.log(table)
        return Array.from(table
            .querySelectorAll('td:first-child a'))
            .map(element => element.href);
    });

    const images = [];
    for (const url1 of urls) {
        try {
            await page.goto(url1 + '');
            const src = await page.evaluate(() => {
                const a = document.querySelector('.image')
                return a.querySelector('img').getAttribute('src');
            });
            images.push(src);
        } catch (e) {
            console.log(e)
        }
    }

    const imgString = images
        .map(img => `'${img}'`)
        .join(', \n');

    const data = `const images = [ ${imgString} ] \n\n module.exports = {images}`;

    fs.writeFile('airlines.js', data, err => {
        if (err) return console.error(err);
        console.log('success')
    })
    await browser.close();
}

run();
