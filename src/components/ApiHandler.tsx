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

// Main object/class with methods to fetch data based on what data is needed
// TODO: Define a way to not try to map a document and image to every page, even
// if the page doesn't have a document and/or image
const ApiHandler = {
  apiFetchPage: async (id) => {
    try {
      // Define the type of content block to fetch, in this case
      // 'core.ContentBlock' is the page type
      const type = 'core.ContentBlock'
      // Fetch page data
      const response = await api.get(`/pages/${id}/`)
      const pageData = response.data

      // Check if pageData.body exists
      if (!pageData?.body) {
        console.log('No Body in pageData')
        return
      }

      // Filter and map image IDs from pageData.body
      const imageIds = pageData.body
        .filter((item: any) => item.type === 'image')
        .map((item: any) => item.value)

      // Process image IDs to get URLs
      let imageUrls = []
      if (imageIds.length > 0) {
        imageUrls = await Promise.all(imageIds.map(handleImage))
        console.log(`The image URLs are ${imageUrls}`)
      } else {
        console.log('No images found in pageData')
      }

      // Filter and map document IDs from pageData.body
      const documentIds = pageData.body
        .filter((item: any) => item.type === 'document')
        .map((item: any) => item.value)

      // Process document IDs to get URLs
      let documentUrls = []
      if (documentIds.length > 0) {
        documentUrls = await Promise.all(documentIds.map(handleDocument))
        console.log(`The document URLs are ${documentUrls}`)
      } else {
        console.log('No documents found in pageData')
      }

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
  // Fetch all the page data at the /pages endpoint
  apiFetchPages: async () => {
    try {
      const response = await api.get('/pages')
      console.log(
        'The API handler is returning the following items: ',
        response.data.items,
      )
      return response.data.items
    } catch (error) {
      console.log(`Error retrieving pages: ${error}`)
    }
  },
  // Fetch specific pages based on a list of IDs and a tag (e.g. 'Calc1') which
  // wagtail uses 'seo_title'
  apiFetchSpecificPages: async (list: number[], type: any) => {
    try {
      const pages = []
      for (let i = 0; i < list.length; i++) {
        const response = await api.get(`/pages/${list[i]}/`)
        // console.log('Fetched Page: ', response.data)
        pages.push(response.data)
      }
      console.log('Pages Before Filtering: ', pages)
      const filteredPages = pages.filter(
        (page: any) => page.meta.seo_title === type,
      )
      console.log('Filtered Pages: ', filteredPages)
      return filteredPages
    } catch (error) {
      console.log(`Error retrieving pages: ${error}`)
    }
  },
}

export default ApiHandler
