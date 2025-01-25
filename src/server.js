import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import router from "./routes.js";
import bodyParser from "body-parser";

const server = express();

configDotenv();

const corsConfig = {
    origin: "*",
    methods: ["GET"],
}

//Server Config
server.use(router);
server.use(cors(corsConfig));
server.use(bodyParser.json());

//Server Running
server.listen(process.env.PORT, () => {
    console.log(`Server running on  http://localhost:${process.env.PORT}/cotacao/coins`);
});