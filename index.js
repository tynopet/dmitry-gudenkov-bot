const Telegraf = require('telegraf');

const token = process.env.TOKEN;
const host = process.env.HOST;
const port = process.env.PORT || 8443;

const bot = new Telegraf(token);

bot.hears(/фронтенд/i, (ctx, next) => {
  ctx.reply('Фронетнд работает. Всегда. Без исключений. Если у вас что-то не получается, вытащите руки из жопы, плес.');
  return next();
});

bot.hears(/тунопет/i, (ctx, next) => {
  ctx.reply('Чо?');
  return next();
});

bot.hears(/текстайл/i, (ctx, next) => {
  ctx.reply('Устиц, все нормально. В большом светлом будущем возможно будет маркдаун');
  return next();
});

bot.hears(/сломался/i, (ctx, next) => {
  ctx.reply('Знаете, скорее всего, всё дело во мне. Я притягиваю неисправности, как магнит. Так как ваши жестянки рядом со мной глючат напропалую.');
  return next();
});

bot.hears(/батут/i, (ctx, next) => {
  ctx.reply('Я никогда не пойду с тобой на батуты.');
  return next();
});

bot.hears(/двач/i, (ctx) => {
  ctx.reply('Камай, иди на хуй!');
});

bot.telegram.setWebhook(host);
bot.startWebhook('/', null, port);
