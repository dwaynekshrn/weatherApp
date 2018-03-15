import axios from 'axios';
const API_KEY = '9afc40be91dc8982498da7d6ce9881e4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const req = axios.get(url);
    console.log('Request ', req);
    return{ type: FETCH_WEATHER, payload: req }
}
