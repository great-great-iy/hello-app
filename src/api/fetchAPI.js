import axios from "axios";

// const REQUEST_URL = 'https://learn-reactjs-aht-default-rtdb.firebaseio.com/';

export const fetchAPI = async (method, url, data) => {
    const repuestConfig = {
        method,
        url,
        data,
        headers: { "Content-Type": "application/json" }
    }

    try {
        const response = await axios(repuestConfig);
        return response;
    } catch (error) {
        if (error.response) {

            throw (error.response.message)

        } else if (error.request) {

            throw (error.request.message)

        } else {

            return { message: "opps! something went wrong while setting up request" };
        }
    }

}