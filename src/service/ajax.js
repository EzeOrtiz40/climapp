import axios from "axios";

export const ajax = async (options) => axios.request(options)
    .then(response => response.data);





