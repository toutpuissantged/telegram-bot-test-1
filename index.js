const TelegramBot = require('node-telegram-bot-api');
const puppeteer = require('puppeteer');
const fs = require('fs')

// replace the value below with the Telegram token you receive from @BotFather
const token = '998194791:AAFdsutpabnnENrd6zlaCpdcNkkCs_SK9bA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

const scraping  = async (bot,msg) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(msg.text);
  await page.screenshot({ path: 'example.png' });
  // other actions...
  await browser.close();
  await bot.sendPhoto(msg.chat.id, fs.createReadStream('example.png'));
}

const torent9 = async (bot,msg) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://torrent9.to/search_torrent/${msg.text}.html`)
    await page.$$eval('a',(data)=>{
        console.log(data.href);
        return data
    })
    //await page.screenshot({ path: 'example.png' });
    //await bot.sendPhoto(msg.chat.id, fs.createReadStream('example.png'));
    await browser.close();
}

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  torent9(bot,msg)
  //console.log(msg);

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'wait ...');
});
