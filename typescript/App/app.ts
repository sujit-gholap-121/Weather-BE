import express, { Express, Router } from "express";
import cors from "cors"
import config from "../../config.json"
import WeatherRouter from "./../Router/WeatherRouter.js";
import InMemoryDataService from "../Services/InMemoryDataService.js";

export default class App {
    private server: Express;

    constructor() {
        this.server = express();
        this.server.listen(config.port, () => {
            console.log(`Server listening on port: ${config.port}`)
        })
        this.loadMiddlewares()
        this.loadRouter()
    }

    loadMiddlewares() {
        this.server.use(express.json())
        this.server.use(express.urlencoded({
            extended: true
        }))
        this.server.use(cors())
    }

    loadRouter() {
        console.log("done")
        this.server.use("/weather", (new WeatherRouter(new InMemoryDataService())).router);
    }
}