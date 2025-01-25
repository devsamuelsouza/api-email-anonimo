import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import routes from "./routes.js";
import bodyParser from "body-parser";

configDotenv();

const corsConfig = {
    origin: "*",
    methods: "GET",
    allowedHeaders: "Content-Type, Authorization",
}

const server = express();

//Server Config
server.use(routes);
server.use(cors(corsConfig));
server.use(bodyParser.json());

//Server Running
server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

