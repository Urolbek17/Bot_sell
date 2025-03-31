console.log("test nodemon 2025 ana ishladi");
// console.log("bu ikkinchisi2");
const TelegramBot = require("node-telegram-bot-api");
const token = "7965659644:AAGgra9K9yKSW3-zAlCMUzzTVHD7Lm5UUsA";

const bot = new TelegramBot(token, { polling: true });
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // send a message to the chat acknowledging receipt of their message
  if (text == "salom") {
    return bot.sendMessage(chatId, "Xabaringiz qabul qilindi");
  }
  const jsonData = JSON.stringify(msg, null, 2);

  //   const fs = require("fs").promises;

  //   async function yozish() {
  //     try {
  //       return fs.writeFile("malumot.json", jsonData);
  //       console.log("Ma'lumot muvaffaqiyatli yozildi!");
  //     } catch (err) {
  //       console.error("Xatolik yuz berdi:", err);
  //     }
  //   }

  //   yozish();
  bot.on("inline_query", (query) => {
    const results = [
      {
        type: "article",
        id: "1",
        title: "Natija 1",
        input_message_content: {
          message_text: "Bu birinchi natija!",
        },
        thumb_url: "https://t.me/Yaxshi_Yomon/47882", // Rasmning kichik ko'rinishi uchun URL
        description: "Bu birinchi rasmli javob!",
      },
      {
        type: "article",
        id: "2",
        title: "Natija 2",
        input_message_content: {
          message_text: "Bu ikkinchi natija!",
        },
      },
      {
        type: "photo",
        id: "3",
        photo_url: "https://t.me/Yaxshi_Yomon/47882", // Asosiy rasm URL
        thumb_url: "https://t.me/Yaxshi_Yomon/47882", // Kichik ko'rinish (thumbnail)
        title: "Bu Rasm Natijasi",
        caption: "Bu uchinchi rasmli javob!",
      },
    ];

    bot.answerInlineQuery(query.id, results);
  });

  console.log("Bot ishga tushdi...");
});
