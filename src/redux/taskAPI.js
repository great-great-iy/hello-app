import { fetchAPI } from "../api/fetchAPI";


const REQUEST_URL = process.env.REACT_APP_BASE_URL;

export const taskAPI = {
    setData: (uri, data) => {
        const url = `${REQUEST_URL}\\${uri}`
        return fetchAPI('post', url, data);
    },

    getData: (uri) => {
        const url = `${REQUEST_URL}\\${uri}`;
        return fetchAPI('get', url);
    },

    updateData: (uri, id, data) => {
        // console.log(id);
        const url = `${REQUEST_URL}\\${uri}\\${id}`
        return fetchAPI('patch', url, data);
    },

    deleteData: (uri, id) => {
        const url = `${REQUEST_URL}\\${uri}\\${id}`
        return fetchAPI('delete', url);
    }
}

