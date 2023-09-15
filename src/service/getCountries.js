import { ajax } from "./ajax";

export const getCountries = async () => {
    const optionsRequest = {
        method: "GET",
        url: " https://restcountries.com/v3.1/name/argentina",
        contentType: "application/json"
    };
    return await ajax(optionsRequest);
}


//FULL NAME
//Search by country’s full name. It can be the common or official value
// https://restcountries.com/v3.1/name/{name}?fullText=true
// https://restcountries.com/v3.1/name/aruba?fullText=true