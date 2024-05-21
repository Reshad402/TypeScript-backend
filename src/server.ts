import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "./config";
dotenv.config();

async function main() {
  try {
    console.log(config.port);
    await mongoose.connect(config.db_url as string);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
