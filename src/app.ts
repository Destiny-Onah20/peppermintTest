import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./uttils/logger";
import databaseConnect from "./uttils/database";
import routes from "./routers";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/", routes());

const startApp = async ()=>{
    await databaseConnect();
    app.listen(port, () => {
        logger.info(`Server is running on port: ${port}`);
    });     
}

startApp();
