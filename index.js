const Telegraf = require('telegraf');

const token = process.env.TOKEN;
const host = process.env.HOST;
const port = process.env.PORT || 8443;

const bot = new Telegraf(token);

bot.hears(/фр(о|o)нт(е|e)нд/i, (ctx, next) => {
  ctx.reply('Фронетнд работает. Всегда. Без исключений. Если у вас что-то не получается, вытащите руки из жопы, плес.', {
    reply_to_message_id: ctx.message.message_id
  });
  return next();
});

bot.hears(/тун(о|o)п(е|e)т/i, (ctx, next) => {
  ctx.reply('Чо?');
  return next();
});

bot.hears(/т(е|e)кст(а|a)йл/i, (ctx, next) => {
  ctx.reply('Все нормально. В большом светлом будущем возможно будет маркдаун', {
    reply_to_message_id: ctx.message.message_id
  });
  return next();
});

bot.hears(/м(а|a)т(е|e)рх(о|o)(с|c)т/i, (ctx, next) => {
  ctx.reply('Метромост');
  return next();
});

bot.hears(/в(е|e)р(с|c)(у|y)(с|c)/i, (ctx, next) => {
  ctx.reply('Антихайп', {
    reply_to_message_id: ctx.message.message_id
  });
  return next();
});

bot.hears(/(с|c)л(о|o)м(а|a)л(с|c)я/i, (ctx, next) => {
  ctx.reply('Знаете, скорее всего, всё дело во мне. Я притягиваю неисправности, как магнит. Так как ваши жестянки рядом со мной глючат напропалую.', {
    reply_to_message_id: ctx.message.message_id
  });
  return next();
});

bot.hears(/(б|b|\s)+(а?|a?|o?|о?|\s?)+(т|t|\s)+(у?|y?|\s?)+(т|t|\s)+/i, (ctx) => {
  ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
});

bot.hears(/дв(а|a)ч/i, (ctx) => {
  ctx.reply('Иди на хуй!', {
    reply_to_message_id: ctx.message.message_id
  });
});

bot.telegram.setWebhook(host);
bot.startWebhook('/', null, port);
