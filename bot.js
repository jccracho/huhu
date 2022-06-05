const rp = require('request-promise');
const HTMLParser = require('node-html-parser');
const TelegramBot = require('node-telegram-bot-api');
const token = '5501659865:AAF_mxLAjrTpvmcsu3fGx1FSuDNHdwxLpA0';
const bot = new TelegramBot(token, {polling: true});

// Matches /audio
bot.onText(/\/audio/, function onAudioText(msg) {
  // From HTTP request
  const url = 'https://youtu.be/M8sOXu-0VYE';
  const audio = request(Youtube.com);
  bot.sendAudio(msg.chat.id, audio);
});

// Matches /love
bot.onText(/\/love/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['/mlbb mod'],
        ['/woiden'],
        ['/hax']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
});

// Matches /echo
bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
  const resp = match[1];
  bot.sendMessage(msg.chat.id, resp);
});

// Matches /editable
bot.onText(/\/editable/, function onEditableText(msg) {
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '/start',
            // we shall check for this value when we listen
            // for "callback_query"
            callback_data: 'start'
          }
        ]
      ]
    }
  };
  bot.sendMessage(msg.from.id, '😳😳', opts);
});

// Handle callback queries
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  if (action === 'start') {
    text = '/start';
  }

  bot.editMessageText(text, opts);
});

bot.onText(/\/start/, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `Hello كونتشيوا , ${msg.from.first_name}!\nNEW ML MOD MENU CHEAT
 Apk mod menu Download link :
https://youtu.be/A6TtiS0tV1U

MOD MENU FEATURES
•UNLOCK ALL SKIN ONLY

Note: 
If you want 100% safe modz, use VIP modz.
If you want to buy a VIP modz PM this man Telegram: https://t.me/izizxc

If you have a question, just join this group chat https://t.me/neverendlessmodz

bot.onText(/\/hax/, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `Unknow كونتشيوا , ${msg.from.first_name}!\nCommand
