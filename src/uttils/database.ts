import dotenv from "dotenv";
import logger from "./logger";
import mongoose from "mongoose";
dotenv.config();

const databaseConnect = async (): Promise<void> => {
  try {
    const dbUrl = process.env.DATABASE_URL as string
    const connect = await mongoose.connect(dbUrl);
    logger.info(`Database connected to ${connect.Connection.name}`);

  } catch (error) {
    logger.error("Error: " + (error as Error).message);
    process.exit(1);
  }
}

export default databaseConnect;
