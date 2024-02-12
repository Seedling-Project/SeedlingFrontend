// Import axios to make HTTP requests
import axios from 'axios'

// Create an axios instance with predefined base URL and headers
const api = axios.create({
  baseURL: 'https://seedlingbackend-production.up.railway.app/api/v2',
  timeout: 10000, // Adjusted timeout for more flexibility
  headers: { 'Content-Type': 'application/json' },
})

// Function to fetch image data based on the provided ID (Value from pages maps
// to the ID of the image or document)
const handleImage = async (id) => {
  try {
    const response = await api.get(`/images/${id}/`)
    // Assuming the URL is directly accessible in the response, adjust based on actual API structure
    return response.data.meta.download_url // Or whatever field holds the URL
  } catch (error) {
    console.error('Error fetching image: ', error)
    throw error
  }
}

// Function to fetch document data based on the provided ID (Value from pages maps
// to the ID of the image or document)
const handleDocument = async (id) => {
  try {
    const response = await api.get(`/documents/${id}/`)
    // Adjust the field access as needed based on your API's response structure
    return response.data.meta.download_url // Adjust this path to wherever the document URL is stored
  } catch (error) {
    console.error('Error fetching document: ', error)
    throw error
  }
}

const ApiHandler = {
  apiFetchData: async (type, id) => {
    try {
      if (type !== 'core.ContentBlock') {
        // If not fetching a page, throw error
        throw error
      }
      // Fetch page data
      const pageResponse = await api.get(`/pages/${id}/`)
      const pageData = pageResponse.data

      // Assume pageData includes arrays of image and document IDs; adjust these paths as necessary
      const imageIds =
        pageData.body
          .filter((item) => item.type === 'image') // Keep only items where type is 'image'
          .map((item) => item.value) || // Extract the 'value' from those items
        []
      console.log(`the image ID is ${imageIds}`)
      const documentIds =
        pageData.body
          .filter((item) => item.type === 'document') // Keep only items where type is 'image'
          .map((item) => item.value) || // Extract the 'value' from those items
        []
      console.log(`the document ID is ${documentIds}`)

      // Fetch URLs for all images and documents
      const imageUrls = await Promise.all(imageIds.map(handleImage))
      const documentUrls = await Promise.all(documentIds.map(handleDocument))

      // Enrich the original page data with the fetched URLs
      const enrichedPageData = {
        ...pageData,
        imageUrls,
        documentUrls,
      }

      return enrichedPageData
    } catch (error) {
      console.error('Error fetching data: ', error)
      throw error
    }
  },
}
// Main function to fetch data based on the provided type and ID
export async function apiFetchData(type, id) {}

export default apiFetchData
