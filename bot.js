const rp = require('request-promise');
const HTMLParser = require('node-html-parser');
const TelegramBot = require('node-telegram-bot-api');
const token = '5501659865:AAF_mxLAjrTpvmcsu3fGx1FSuDNHdwxLpA0';
const bot = new TelegramBot(token, {polling: true});

// Matches /audio
bot.onText(/\/audio/, function onAudioText(msg) {
  // From HTTP request
  const url = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Example.ogg';
  const audio = request(url);
  bot.sendAudio(msg.chat.id, audio);
});

// Matches /love
bot.onText(/\/love/, function onLoveText(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [
        ['Yes, you are the bot of my life ❤'],
        ['No, sorry there is another one...']
      ]
    })
  };
  bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
});

// Matches /echo [whatever]
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
            text: 'Edit Text',
            // we shall check for this value when we listen
            // for "callback_query"
            callback_data: 'edit'
          }
        ]
      ]
    }
  };
  bot.sendMessage(msg.from.id, 'Original Text', opts);
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

  if (action === 'edit') {
    text = 'Edited Text';
  }

  bot.editMessageText(text, opts);
});

bot.onText(/\/start/, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!\nIn this bot you can fuck all. \nAvailable commands:\n/audio - Prints free seats for pornhub.com\n/editable - Prints free seats for edit\n/echo fuck - Prints free fuck for you.\nYou can also use this bot in inline mode. Good luck and, please, do not abuse it. =)`);
})
