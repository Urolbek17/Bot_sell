console.log("test nodemon 2025 ana ishladi");
// console.log("bu ikkinchisi2");

const TelegramBot = require("node-telegram-bot-api");
const token = "7965659644:AAGgra9K9yKSW3-zAlCMUzzTVHD7Lm5UUsA";

const express = require("express"); // Express kutubxonasini chaqirish
const app = express();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const bot = new TelegramBot(token, { polling: true });
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // send a message to the chat acknowledging receipt of their message
  if (text == "salom" || text == "/start") {
    return bot.sendMessage(
      chatId,
      "Assalomu alaykum! botimizga xush kelibsiz!"
    );
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
    const searchQuery = query.query.toLowerCase(); // Qidiruv so'zini kichik harflarga o'zgartirish
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

    // Qidiruvga mos keluvchi natijalarni filtrdan o'tkazish
    const filteredResults = results.filter(
      (item) => item.title.toLowerCase().includes(searchQuery) // Qidiruvga mos kelishini tekshirish
    );

    // Inline query javobini yuborish
    bot.answerInlineQuery(query.id, filteredResults);
  });

  console.log("Bot ishga tushdi...");
});
