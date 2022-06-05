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

// Matches /help
bot.onText(/\/help/, function onEditableText(msg) {
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
  bot.sendMessage(msg.from.id, 'pin', opts);
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
    text = 'Pin

All the pin related commands can be found here; keep your chat up to date on the latest news with a simple pinned message!

User commands:
- /pinned: Get the current pinned message.

Admin commands:
- /pin: Pin the message you replied to. Add 'loud' or 'notify' to send a notification to group members.
- /permapin <text>: Pin a custom message through the bot. This message can contain markdown, buttons, and all the other cool features.
- /unpin: Unpin the current pinned message. If used as a reply, unpins the replied to message.
- /unpinall: Unpins all pinned messages.
- /antichannelpin <yes/no/on/off>: Don't let telegram auto-pin linked channels. If no arguments are given, shows current setting.
- /cleanlinked <yes/no/on/off>: Delete messages sent by the linked channel.

Note: When using antichannel pins, make sure to use the /unpin command, instead of doing it manually. Otherwise, the old message will get re-pinned when the channel sends any messages.';
  }

  bot.editMessageText(text, opts);
});

bot.onText(/\/mlmod/, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!\n🔰NEW ML MOD MENU CHEAT🔰
📩 Apk mod menu Download link :
https://youtu.be/A6TtiS0tV1U

👇MOD MENU FEATURES👇
•UNLOCK ALL SKIN ONLY

👉Note: 
If you want 100% safe modz, use VIP modz.
If you want to buy a VIP modz PM this man Telegram: https://t.me/izizxc
---------------------------------------------------
If you have a question, just join this group chat https://t.me/neverendlessmodz`);
})

bot.onText(/\/hax/, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `⚠️, ${msg.from.first_name}!\nUnknown Command`);
})

bot.onText(/\/woiden/, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `⚠️, ${msg.from.first_name}!\nUnknown Command`);
})

bot.onText(/\//, async (msg, match) => {
  await bot.sendMessage(msg.chat.id, `⚠️, ${msg.from.first_name}!\nUnknown Command`);
})

