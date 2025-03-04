import express, { application } from "express";
const app = express();
import auth from "./src/routes/auth";
import { AppDataSource } from "./src/config/data-source";
import { DataSource } from "typeorm";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger";
import cors from "cors";
import bodyParser from "body-parser";
import activity from "./src/routes/activity";
import telegramBot from "node-telegram-bot-api";
import { handleMessage } from "./src/service/telegram.service";
import workoutplan from "./src/routes/workoutplan";
import { WorkoutPlan } from "./src/entity/workoutPlan";
import axios from "axios";
import { Workout } from "./src/entity/workout.entity";
import { Exercise } from "./src/entity/exercise.entity";
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN || "";


var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data
app.use(bodyParser.json());

// Swagger setup
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes setup
app.use("/api/auth", auth);
app.use("/api/activity", activity);
app.use("/api/workoutPlan", workoutplan);
app.use("/api/promotion", CreatePromotion);

// Create a bot that uses 'polling' to fetch new updates
const bot = new telegramBot(token, { polling: true });

// Define the command list
const commands = [
  { command: "/start", description: "Start the bot and get command list" },
  { command: "/help", description: "Get help and usage instructions" },
  { command: "/contact", description: "Get contact information" },
  { command: "/promotion", description: "See current promotions" },
  { command: "/feedback", description: "Submit feedback" },
  { command: "/image", description: "Send an image" },
  { command: "/text", description: "Send a text message" },
  { command: "/link", description: "Send a link" },
  { command: "/list", description: "Send a list" },
  { command: "/table", description: "Send a table" },
  { command: "/options", description: "Send options" },
  { command: "/workoutplan", description: "Send workplan" },
];

// Set bot commands in Telegram
bot
  .setMyCommands(commands)
  .then(() => console.log("Commands set successfully"));

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  let response = "Welcome! Here are the available commands:\n\n";
  commands.forEach((cmd) => {
    response += `${cmd.command} - ${cmd.description}\n`;
  });
  bot.sendMessage(chatId, response);
});

// /workout_plan command
bot.onText(/\/workoutplan/, async (msg) => {
  try {
    const workoutplans: { id: number; name: string }[] = await AppDataSource.query('SELECT * FROM public."workoutPlan"');
    console.log(workoutplans)

    if (workoutplans.length === 0) {
      return bot.sendMessage(msg.chat.id, "No workout plans found.");
    }

    const display = workoutplans.map((workout) => [
      {
        text: `🔥 ${workout.name}`,
        callback_data: `workoutPlan_${workout.id}`,
      },
    ]);

    bot.sendMessage(msg.chat.id, "Choose a Workout Plan:", {
      reply_markup: {
        inline_keyboard: display,
      },
    });
  } catch (err) {
    console.error("Error fetching workout plans:", err);
    bot.sendMessage(msg.chat.id, "Failed to fetch workout plans. Please try again later.");
  }
});

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (!msg || !data) {
    return bot.sendMessage(callbackQuery.from.id, "Invalid selection. Please try again.");
  }

  if (data.startsWith("workoutPlan_")) {
    const workoutplanId = data.split("_")[1]; // Extract workoutPlan_id

    try {
      const workouts: { id: number; type: string }[] = await AppDataSource.query(
        `SELECT * FROM public."workout" WHERE "workoutPlan_id" = '${workoutplanId}'`
      );
      console.log(workouts);

      if (workouts.length === 0) {
        return bot.sendMessage(msg.chat.id, "No workouts found for this plan.");
      }

      // Create inline buttons for each workout
      const buttons = workouts.map((workout) => [
        {
          text: `${workout.type}`,
          callback_data: `workout_${workout.id}`, // Ensure consistency
        },
      ]);

      bot.sendMessage(msg.chat.id, `Workouts in this plan:`, {
        reply_markup: {
          inline_keyboard: buttons,
        },
      });
    } catch (err) {
      console.error("Error fetching workouts:", err);
      bot.sendMessage(msg.chat.id, "Failed to fetch workouts. Please try again later.");
    }
  }
});

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (!msg || !data) {
    return bot.sendMessage(callbackQuery.from.id, "Invalid selection. Please try again.");
  }

  if (data.startsWith("workout_")) {
    const workoutId = data.split("_")[1]; // Extract workoutPlan_id

    try {
      const exercises: { id: number; name: string; }[] = await AppDataSource.query(
        `SELECT * FROM public.exercise WHERE "workout_id" = '${workoutId}'`
      );
      console.log(exercises);

      if (exercises.length === 0) {
        return bot.sendMessage(msg.chat.id, "No exercises found for this plan.");
      }

      // Create inline buttons for each workout
      const buttons = exercises.map((exercise) => [
        {
          text: `${exercise.name}`,
          callback_data: `exercise_${exercise.id}`, 
        },
      ]);

      bot.sendMessage(msg.chat.id, `Exercises in this plan:`, {
        reply_markup: {
          inline_keyboard: buttons,
        },
      });
    } catch (err) {
      console.error("Error fetching exercise:", err);
      bot.sendMessage(msg.chat.id, "Failed to fetch exercise. Please try again later.");
    }
  }

  if (data.startsWith("exercise_")) {
    const exerciseId = data.split("_")[1]; // Extract exercise_id

    try {
      const exerciseDetails: { id: number; name: string; sets: number; weight_lbs: string; reps: string; calories: string }[] = await AppDataSource.query(
        `SELECT * FROM public.exercise WHERE id = '${exerciseId}'`
      );

      if (exerciseDetails.length === 0) {
        return bot.sendMessage(msg.chat.id, "Exercise not found.");
      }

      const exercise = exerciseDetails[0]; 

      bot.sendMessage(msg.chat.id, 
        `*Exercise: ${exercise.name}*\n\n` +
        `Sets: ${exercise.sets}\n` +
        `Weight (lbs): ${exercise.weight_lbs}\n` +
        `Reps: ${exercise.reps}\n` +
        `Calories Burned: ${exercise.calories}`,
        { parse_mode: "Markdown" }
      );

    } catch (err) {
      console.error("Error fetching exercise details:", err);
      bot.sendMessage(msg.chat.id, "Failed to fetch exercise details. Please try again later.");
    }
  }
});


// Handle other commands
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "This bot allows you to access various features. Use /start to see available commands."
  );
});

// Handle /contact command
bot.onText(/\/contact/, (msg) => {
  bot.sendMessage(msg.chat.id, "You can contact us at support@example.com.");
});

bot.onText(/\/promotion/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Check out our latest promotions at https://example.com/promotions"
  );
});

bot.onText(/\/feedback/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Please send your feedback here, and we will review it."
  );
});

// Handle /image command
bot.onText(/\/image/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://picsum.photos/seed/picsum/200/300", {
    caption: "Here is an image for you!",
  });
});

// Handle /text command
bot.onText(/\/text/, (msg) => {
  bot.sendMessage(msg.chat.id, "This is a sample text message.");
});

// Handle /link command
bot.onText(/\/link/, (msg) => {
  bot.sendMessage(msg.chat.id, "Check out this link: https://example.com");
});

// Handle /list command
bot.onText(/\/list/, (msg) => {
  const list = "- Item 1\n- Item 2\n- Item 3\n- Item 4";
  bot.sendMessage(msg.chat.id, `Here is your list:\n${list}`);
});

// Handle /table command
bot.onText(/\/table/, (msg) => {
  const table = `
  <pre>
  | Tables   |      Are      |  Cool |
  |----------|:-------------:|------:|
  | col 1 is |  left-aligned | $1600 |
  | col 2 is |    centered   |   $12 |
  | col 3 is | right-aligned |    $1 |
  </pre>
  `;
  bot.sendMessage(msg.chat.id, `Here is a table:\n${table}`, {
    parse_mode: "HTML",
  });
});

// Listen for any kind of message.
bot.on("message", (msg) => {
  try {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    const message = handleMessage(msg) || "";
    console.log("------ ", msg);
    if (message.length > 0) bot.sendMessage(chatId, message);
  } catch (err) {
    console.log(err);
  }
});

// Handle /options command with inline buttons
bot.onText(/\/options/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Option 1", callback_data: "option_1" },
          { text: "Option 2", callback_data: "option_2" },
        ],
        [{ text: "Option 3", callback_data: "option_3" }],
      ],
    },
  };
  bot.sendMessage(chatId, "Please select an option:", options);
});

// Handle callback queries from inline buttons
bot.on("callback_query", (callbackQuery) => {
  const msg = callbackQuery.message;
  if (msg) {
    bot.sendMessage(msg.chat.id, `You selected: ${callbackQuery.data}`);
    bot.answerCallbackQuery(callbackQuery.id);
  }
});

// Start server
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
