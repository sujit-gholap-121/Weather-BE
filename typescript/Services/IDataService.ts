import City from "../Model/city.js";

export default interface IDataService {
    getAllCities(): City[];
    getCity(city: string): City;
}