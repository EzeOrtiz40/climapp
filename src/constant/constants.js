import { ajax } from "../service/ajax"

export const countriQuery = ajax({
  method: "GET",
  url: " https://restcountries.com/v3.1/all"
})

export const cities = ajax({
  method: "GET",
  url: "https://spott.p.rapidapi.com/places",

  headers: {
    'X-RapidAPI-Key': 'd923f0d2bcmsh7d1b2b4fa14cbdfp158810jsne3093fdcd23f',
    'X-RapidAPI-Host': 'spott.p.rapidapi.com'
  }
})



/*
const axios = require('axios');

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

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}*/