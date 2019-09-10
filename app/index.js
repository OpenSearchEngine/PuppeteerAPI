var express = require('express');
var app = express();
const fs = require('fs');
const puppeteer = require('puppeteer');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async function (req, res) {

    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });

    const page = await browser.newPage();

    await page.goto(req.query.url, {waitUntil: 'networkidle2'});

    await page.screenshot({
        path: '/screenshots/test.png',
        fullPage: true
    });

    res.send(JSON.stringify({
        'html': await page.evaluate(() => document.body.parentNode.outerHTML),
        'screenshot': new Buffer(fs.readFileSync('/screenshots/test.png')).toString('base64')
    }));

    await browser.close();
});

app.listen(3000, () => console.log('Listening on port 3000'));