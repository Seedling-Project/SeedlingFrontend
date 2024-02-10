// Import axios to make HTTP requests
import axios from 'axios'

// Create an axios instance with predefined base URL and headers
const api = axios.create({
  baseURL: 'https://seedlingbackend-production.up.railway.app/api/v2',
  timeout: 10000, // Adjusted timeout for more flexibility
  headers: { 'Content-Type': 'application/json' },
})

// Helper function to determine the endpoint based on the provided type and ID
const setEndpointType = (type, id) => {
  switch (type) {
    case 'core.ContentBlock':
      return `/pages/${id}`
    case 'wagtailimages.Image':
      return `/images/${id}`
    case 'wagtaildocs.Documents':
      return `/documents/${id}`
    default:
      console.error('Invalid type provided: ', type)
      throw new Error('Invalid endpoint type provided')
  }
}

// Utility function to fetch data from the API
export async function axiosFetchData(type, id) {
  try {
    const endpoint = setEndpointType(type, id)
    console.log('Fetching data from: ', endpoint)
    const response = await api.get(endpoint)
    return response.data // Return the data from the response
  } catch (error) {
    console.error('Error fetching data: ', error)
    throw error // Rethrow the error to be handled by the caller
  }
}
