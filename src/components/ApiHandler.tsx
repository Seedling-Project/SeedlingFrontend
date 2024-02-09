// a component for handling API calls using axios

import axios from 'axios'

// Create an axios instance
const api = axios.create({
  baseURL: 'https://seedlingbackend-production.up.railway.app/api/v2',
  timeout: 10000, // Adjusted timeout for more flexibility
  headers: { 'Content-Type': 'application/json' },
})

// Function to fetch data from Wagtail's v2 API endpoints
// type: "pages", "images", or "documents"
export default async function axiosFetchData(
  type: 'pages' | 'images' | 'documents',
  id?: number,
) {
  try {
    const endpoint = id ? `/${type}/${id}/` : `/${type}/` // If an ID is provided, fetch a specific item, otherwise fetch all items of the type
    const response = await api.get(endpoint)
    return response.data // Return the data from the response
  } catch (error) {
    console.error('Error fetching data: ', error)
    return [] // Return an empty array to prevent further errors
  }
}
