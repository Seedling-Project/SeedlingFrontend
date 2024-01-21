// a component for handling API calls using axios

import axios from "axios";

// create an axios instance
const api = axios.create({
    baseURL: "https://seedlingbackend-production.up.railway.app/api",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

// a function for fetching data from the backend
// can be called like this: axiosFetchData("document", 1)
// this will fetch the document with id 1
// if no id is provided, all documents will be fetched
export default async function axiosFetchData(type: string, id: number = -1) {
    try {
        if (id === -1) { // if no id is provided, fetch all documents
            const response = await api.get(`/${type}`);
            return response.data;
        }
        else {
            const response = await api.get(`/${type}/${id}`);
            return response.data;
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        // return an empty array to prevent further errors
        return [];
    }
}