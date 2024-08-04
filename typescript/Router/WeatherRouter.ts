import { Router, Request, Response } from "express";
import IDataService from "../Services/InMemoryDataService.js";

export default class WeatherRouter {
    public router = Router();
    private service: IDataService;

    constructor(service: IDataService) {
        this.service = service;
        this.loadRoutes.call(this);
    }


    loadRoutes() {
        this.router.get("/", async (req: Request, res: Response) => {
            console.log("requested")
            try {
                const data = await this.service.getAllCities()
                res.send({ data: data })
            } catch (error) {
                console.log(error)
            }
        })

        this.router.get("/:name", async (req: Request, res: Response) => {
            try {
                console.log(req.params.name)
                const data = await this.service.getCity(req.params.name)
                res.send({ data: data })
            } catch (error) {
                console.log(error)
                res.send({ data: [], error: true })
            }
        })
    }
}