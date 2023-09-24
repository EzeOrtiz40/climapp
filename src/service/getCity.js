import { ajax } from "./ajax";

export const getCity = async () => {
  const options = {
    method: 'GET',
    url: 'https://climapp-4bd71-default-rtdb.europe-west1.firebasedatabase.app/api/v1/ciudades.json',
    contentType: "application/json"
  };
  return await ajax(options);
}


