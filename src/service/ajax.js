import axios from "axios";

export const ajax = async (options) => {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
}
