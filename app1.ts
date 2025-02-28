import express from "express";
const app = express();
import auth from "./src/routes/auth";
import { AppDataSource } from "./src/config/data-source";
import { DataSource } from "typeorm";
import cors from "cors";
import bodyParser from "body-parser";
import activity from "./src/routes/activity";
import telegramBot from "node-telegram-bot-api";

const token = process.env.TELEGRAM_TOKEN || "";

var corsOptions = {
  origin: "*",
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.use("/api/auth", auth);
app.use("/api/activity", activity);

const bot = new telegramBot(token, { polling: true });

const commands = [
  { command: "/start", description: "Start the bot and get command list" },
  { command: "/showtext", description: "Send a text message" },
  { command: "/showimage", description: "Send a message with an image" },
  { command: "/showoptions", description: "Send options" },
  { command: "/askquestions", description: "Send questions" },
];

bot
  .setMyCommands(commands)
  .then(() => console.log("Commands set successfully"));

  bot.onText(/\/showtext/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      "Welcome to WMAD Class"
    );
  });

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};


export default app;