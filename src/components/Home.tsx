import { useRef, useState, useEffect } from 'react'
import 'daisyui/dist/full.css'
import '../App.css'
import '../index.css'
import Hero from './Hero'
import Document from './Document'
import Timeline from './Timeline'
import TimelineItem from './TimelineItem'
import Carousel from './Carousel'
import TestDocument from './TestDocument'
import axiosFetchData from './ApiHandler'
import RenderBlock from './RenderBlock'

interface Block {
  type: string
  value: any // 'any' can be replaced with a more specific type
}

function Home() {
  //new axios functionality, not completely set up but this is the form
  const [currentPage, setCurrentPage] = useState(null)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentDocument, setCurrentDocument] = useState(null)
  const [currentLoading, setLoading] = useState(true)

  // Function to fetch the first item or next item in a category
  const fetchData = async (type, nextId) => {
    console.log('We are now fetching data, in the fetchData function')
    try {
      const data = await axiosFetchData(type, nextId) // Modified to fetch by type and optional nextId
      console.log('Data is: ', data)
      console.log(
        'Data media link',
        data.meta.download_url ? data.meta.download_url : data,
      )
      // Assuming data structure contains items array for simplicity
      if (data && data.length > 0) {
        const item = data.items[0] // Get the first item
        console.log('type is :', item)
        if (type === data.meta.type) setCurrentPage(item)
        if (type === data.meta.type) setCurrentImage(item)
        if (type === data.meta.type) setCurrentDocument(item)
      }
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData('wagtailcore.Page', 2) // Initially load the first page
    fetchData('wagtailimages.Image', 2) // Initially load the first image
    fetchData('wagtaildocs.Documents', 12) // Initially load the first document
  }, [])

  const renderBlocks = () => {
    if (loading) {
      return <p>Loading Content...</p>
    }
    return blocks.map((block, index) => (
      <RenderBlock key={index} block={block} />
    ))
  }

  // a click handler to load the next page (need to track and update IDs accordingly)
  const handleNextPage = () => {
    if (currentPage) {
      fetchData('pages', currentPage.id + 1)
    }
  }

  // Initialize an array of image URLs
  const timelineRef = useRef<HTMLDivElement>(null) // Create a ref for the Timeline component

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      const top = timelineRef.current.offsetTop // Get the top position of the timeline component
      const offset = 100 // Adjust this value to whatever works for your layout
      window.scrollTo({
        top: top - offset, // Subtract the offset from the top position
        behavior: 'smooth',
      })
    }
  }
  const [items, setItems] = useState([
    <Document
      key="1"
      title="THIRD Document Title"
      subtitle="This is a subtitle"
      author="John Doe"
      date="Jan 1, 2023"
      body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
    />,
    // Add more items as you wish, even other components!
  ])

  // when the documents are set, a
  const timelineDetails = [
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    // ... Add more items as needed
    {
      icon: '/additional-logo.png',
      content: <div>Your second content component or text here</div>,
    },
    {
      icon: '/additional-logo.png',
      content: <div>Your second content component or text here</div>,
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title number 2"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
  ]

  return (
    <>
      <Hero onButtonClick={scrollToTimeline} />
      <Timeline ref={timelineRef}>
        {timelineDetails.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            content={item.content}
            showConnectingLine={index < timelineDetails.length - 1} // Show connecting line except for the last item
          />
        ))}
      </Timeline>
      <div>
        {currentPage && (
          <div>
            <h2>{currentPage.title}</h2>
            {/* Display current page content */}
            <p>{currentPage.body}</p>
            <button onClick={handleNextPage}>NextPage</button>
          </div>
        )}
        {/* Similar rendering for images and documents */}
      </div>
      {currentImage && (
        <div>
          {/* Assuming 'url' is the property where the image URL is stored */}
          <img src={currentImage.url} alt="Current Image" />
        </div>
      )}
      {currentDocument && (
        <div>
          {/* Assuming 'url' is the property where the document URL is stored */}
          <a href={currentDocument.url}>View Document</a>
        </div>
      )}

      {/* ... other components or content */}
    </>
  )
}
export default Home
