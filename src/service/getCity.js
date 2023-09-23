import { ajax } from "./ajax";

export const getCity = async () => {
    const options = {
        method: 'GET',
        url: 'https://spott.p.rapidapi.com/places',
        params: {
            type: 'CITY',
            skip: '0',
            country: 'US,CA',
            limit: '10',
            q: 'New York'
        },
        headers: {
            'X-RapidAPI-Key': 'd923f0d2bcmsh7d1b2b4fa14cbdfp158810jsne3093fdcd23f',
            'X-RapidAPI-Host': 'spott.p.rapidapi.com'
        }
    };
    return await ajax(options);
}

/*
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  headers: {
    'X-RapidAPI-Key': 'd923f0d2bcmsh7d1b2b4fa14cbdfp158810jsne3093fdcd23f',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}*/ 