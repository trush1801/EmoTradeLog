const mongoose = require('mongoose');

const uri = "mongodb+srv://EmoTradeLog:Preet%408049@cluster0.r6jg3hr.mongodb.net/?retryWrites=true&w=majority&appName=EmoTradeLog";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB via SRV!");
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
