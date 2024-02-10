// a component for handling API calls using axios

import axios from 'axios'

// Create an axios instance
const api = axios.create({
  baseURL: 'https://seedlingbackend-production.up.railway.app/api/v2',
  timeout: 10000, // Adjusted timeout for more flexibility
  headers: { 'Content-Type': 'application/json' },
})

// Set the endpoint type based on the type provided
const setEndpointType = (type, id) => {
  let endpoint_type = ''
  switch (type) {
    case 'core.ContentBlock':
      endpoint_type = `/pages/${id}`
      return endpoint_type
    case 'wagtailimages.Image':
      endpoint_type = `/images/${id}`
      return endpoint_type
    case 'wagtaildocs.Documents':
      endpoint_type = `/documents/${id}`
      return endpoint_type
    default:
      console.error('Invalid type provided: ', type)
      return []
  }
}

// Function to fetch data from Wagtail's v2 API endpoints
// type: "pages", "images", or "documents"
export default async function axiosFetchData(
  type: 'core.ContentBlock' | 'wagtailimages.Image' | 'wagtaildocs.Documents',
  id?: number,
) {
  try {
    const endpoint = setEndpointType(type, id)
    console.log('Fetching data from: ', endpoint)
    const response = await api.get(endpoint)
    return response.data // Return the data from the response
  } catch (error) {
    console.error('Error fetching data: ', error)
    return [] // Return an empty array to prevent further errors
  }
}
