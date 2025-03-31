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
});
