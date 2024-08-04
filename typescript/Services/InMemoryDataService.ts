import IDataService from "./IDataService.js";
import data from "../../data.json"
import City from "../Model/city.js";


export default class InMemoryDataService implements IDataService {
    private citiesArray;

    constructor() {
        this.citiesArray = data.citiesList
    }

    getAllCities(): City[] {
        return this.citiesArray;
    }

    getCity(city: string): City {
        const found = this.citiesArray.find(ele => ele.name.toLowerCase().includes(city.toLowerCase()))
        console.log(city)
        console.log(found)
        if (found) return found
        throw new Error("City not found")
    }
}