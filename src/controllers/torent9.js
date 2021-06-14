
const puppeteer = require('puppeteer')

const torrent9 = async (msg) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://torrent9.to/search_torrent/${msg}.html`)
    await page.$$eval('a',(data)=>{
        console.log(data.href);
        return data
    })
    //await page.screenshot({ path: 'example.png' });
    //await bot.sendPhoto(msg.chat.id, fs.createReadStream('example.png'));
    await browser.close();
}
torrent9('salut')
