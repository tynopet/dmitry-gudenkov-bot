const Telegraf = require("telegraf");

const token = process.env.TOKEN;
const host = process.env.HOST;
const port = process.env.PORT || 8443;

const bot = new Telegraf(token);
const timeout = 60000;
const maxCount = 2;
let censor = false;
let count = 0;

bot.on("edited_message", (ctx, next) => {
  if (
    ctx.update.edited_message.chat.id !== "-1001074297259" &&
    ctx.update.edited_message.text.match(
      /(6|б|b)+(\s|\.|_|\,)*(0|@|а|a|o|о|у|y|Fl|FI)*(\s|\.|_|\,)*(т|t)+(\s|\.|_|\,)*(¥|у|y|u)*(\s|\.|_|\,)*(т|t)+(\s|\.|_|\,)*/i
    )
  ) {
    ctx.telegram.deleteMessage(
      ctx.update.edited_message.chat.id,
      ctx.update.edited_message.message_id
    );
  } else if (
    ctx.update.edited_message.from.id === 242046536 &&
    ctx.update.edited_message.text.match(
      /(6|б|b)+(\s|\.|_|\,)*(0|@|а|a|o|о|у|y|Fl|FI)*(\s|\.|_|\,)*(т|t)+(\s|\.|_|\,)*(¥|у|y|u)*(\s|\.|_|\,)*(т|t)+(\s|\.|_|\,)*/i
    )
  ) {
    count = count + 1;
    if (count >= maxCount) {
      censor = true;
      setTimeout(() => {
        censor = false;
        count = 0;
      }, timeout);
    }
    if (censor) {
      ctx.telegram.deleteMessage(
        ctx.update.edited_message.chat.id,
        ctx.update.edited_message.message_id
      );
    }
  }
});

bot.hears(
  /(6|б|b)+(\s|\.|_|\,)*(0|@|а|a|o|о|у|y|Fl|FI)*(\s|\.|_|\,)*(т|t)+(\s|\.|_|\,)*(¥|у|y|u)*(\s|\.|_|\,)*(т|t)+(\s|\.|_|\,)*/i,
  ctx => {
    if (ctx.chat.id !== "-1001074297259") {
      ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    } else if (ctx.update.message.from.id === 242046536) {
      count = count + 1;
      if (count >= maxCount) {
        censor = true;
        setTimeout(() => {
          censor = false;
          count = 0;
        }, timeout);
      }
      if (censor) {
        ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
      }
    }
  }
);

bot.hears(/(\)){2,}/, (ctx, next) => {
  if (ctx.chat.id == "-1001074297259") {
    if (Math.random() > 0.65) {
      ctx.reply(")))0))0)", {
        reply_to_message_id: ctx.message.message_id
      });
    }
    return next();
  }
});

bot.hears(/фр(о|o)нт(е|e)нд/i, (ctx, next) => {
  if (ctx.chat.id == "-1001074297259") {
    ctx.reply(
      "Фронетнд работает. Всегда. Без исключений. Если у вас что-то не получается, вытащите руки из жопы, плес.",
      {
        reply_to_message_id: ctx.message.message_id
      }
    );
  }
  return next();
});

bot.hears(/тун(о|o)п(е|e)т/i, (ctx, next) => {
  if (ctx.chat.id == "-1001074297259") {
    ctx.reply("Чо?");
    return next();
  }
});

bot.hears(/т(е|e)кст(а|a)йл/i, (ctx, next) => {
  if (ctx.chat.id == "-1001074297259") {
    ctx.reply(
      "Все нормально. В большом светлом будущем возможно будет маркдаун",
      {
        reply_to_message_id: ctx.message.message_id
      }
    );
    return next();
  }
});

bot.hears(/м(а|a)т(е|e)рх(о|o)(с|c)т/i, (ctx, next) => {
  if (ctx.chat.id == "-1001074297259") {
    ctx.reply("Метромост");
    return next();
  }
});

bot.hears(/в(е|e)р(с|c)(у|y)(с|c)/i, (ctx, next) => {
  ctx.reply("Антихайп", {
    reply_to_message_id: ctx.message.message_id
  });
  return next();
});

bot.hears(/(с|c)л(о|o)м(а|a)л(с|c)я/i, (ctx, next) => {
  ctx.reply(
    "Знаете, скорее всего, всё дело во мне. Я притягиваю неисправности, как магнит. Так как ваши жестянки рядом со мной глючат напропалую.",
    {
      reply_to_message_id: ctx.message.message_id
    }
  );
  return next();
});

bot.hears(/дв(а|a)ч/i, (ctx, next) => {
  if (ctx.chat.id == "-1001074297259") {
    ctx.reply("Иди на хуй!", {
      reply_to_message_id: ctx.message.message_id
    });
  }
});

bot.telegram.setWebhook(host);
bot.startWebhook("/", null, port);
