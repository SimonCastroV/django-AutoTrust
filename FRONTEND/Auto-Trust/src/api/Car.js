import axios from 'axios';

const CarsApi= axios.create({
    baseURL: "http://127.0.0.1:8000/api/Car/"
});

export const getCars = () => CarsApi.get();

export const createCar = (car) => CarsApi.post("/", car);