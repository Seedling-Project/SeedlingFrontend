import { useRef, useState, useEffect } from 'react'
import 'daisyui/dist/full.css'
import '../App.css'
import '../index.css'
import Hero from './Hero'
import Card from './Card'
import Timeline from './Timeline'
import TimelineItem from './TimelineItem'
import Carousel from './Carousel'
import TestDocument from './TestDocument'
import apiFetchData from './ApiHandler'

function Home() {
  const timelineRef = useRef<HTMLDivElement>(null) // Create a ref for the Timeline component
  //new axios functionality, not completely set up but this is the form
  const [pageData, setPageData] = useState(null) // Holds the entire page data
  const [loading, setLoading] = useState(true)
  const [i, set_i] = useState(7)
  // Initialize an array of image URLs

  const fetchData = async (type, id) => {
    setLoading(true)
    try {
      const data = await apiFetchData(type, id)
      console.log(`The fetched data's title is: ${data.title}`)

      setPageData(data) // Set the entire page data, including images and documents
      if (pageData) {
        console.log(`We successfully set Page Data ${pageData}`)
      } else {
        console.log(`We failed to set Page Data: ${pageData}`)
      }
      console.log(`The document URL is: ${pageData.documentUrls}`)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  // Fetch the initial page data
  useEffect(() => {
    fetchData('core.ContentBlock', i) // Assuming '3' is your starting page ID
    console.log(`Loading is ${loading}`)
  }, [i])

  if (loading) {
    return <p>Loading Content...</p>
  }

  const handleNextPage = () => {
    set_i(i + 1)
    console.log(i)
  }

  const handlePrevPage = () => {
    set_i(i - 1)
    console.log(i)
  }

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

  const timelineDetails = [
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Card
          title="Card Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the Card. This text can be multiple paragraphs long and contain detailed content."
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
        <Card
          title="Card Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the Card. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Card
          title="Card Title"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the Card. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Card
          title="Card Title number 2"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the Card. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: '/team_image.png', // Replace with actual icon paths or import statements
      content: (
        <Card
          title="Card Title"
          subtitle="This is a subtitle as well"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the card. This text can be multiple paragraphs long and contain detailed content."
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
        <TestDocument
          key={pageData.id}
          title={pageData.title}
          subtitle={pageData.subtitle}
          author={pageData.author}
          date={pageData.date}
          body={pageData.body}
        />
      </div>
      <div>
        <button onClick={handleNextPage}>Next page </button>
      </div>
      <div>
        <button onClick={handlePrevPage}>Previous page</button>
      </div>
      <div>
        {pageData && (
          <div>
            {pageData.imageUrls &&
              pageData.imageUrls.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Image ${index}`} />
              ))}
            {/* Iterate over enriched document URLs if they exist */}
            {pageData.documentUrls &&
              pageData.documentUrls.map((documentUrl, index) => (
                <a key={index} href={documentUrl}>
                  View Document {index}
                </a>
              ))}
          </div>
        )}
      </div>
      {/* Add a button or mechanism to fetch next page or content */}
    </>
  )
}
export default Home
