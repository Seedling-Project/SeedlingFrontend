import { useRef, useState, useEffect } from 'react'
import 'daisyui/dist/full.css'
import '../App.css'
import '../index.css'
import Hero from './Hero'
import Document from './Document'
import { axiosFetchData } from './ApiHandler'; 
import Timeline from './Timeline'
import TimelineItem from './TimelineItem'
import Carousel from './Carousel'
import TestDocument from './TestDocument'
import RenderBlock from './RenderBlock'

interface Block {
  type: string
  value: any // 'any' can be replaced with a more specific type
}

function Home() {
  const [currentPage, setCurrentPage] = useState(null)
  const [currentImage, setCurrentImage] = useState(null)
  const [currentDocument, setCurrentDocument] = useState(null)
  const [currentLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pageData = await axiosFetchData('core.ContentBlock', 3);
        setCurrentPage(pageData);
        // If you need to fetch images and documents similarly, do it here or in separate calls
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // a click handler to load the next page (need to track and update IDs accordingly)
  const handleNextPage = async () => {
    if (currentPage) {
      try {
        const nextPageData = await axiosFetchData('core.ContentBlock', currentPage.id + 1);
        setCurrentPage(nextPageData);
      } catch (error) {
        console.error('Failed to fetch next page:', error);
      }
    }
  };

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
      {/* <Timeline ref={timelineRef}> */}
      {/*   {timelineDetails.map((item, index) => ( */}
      {/*     <TimelineItem */}
      {/*       key={index} */}
      {/*       icon={item.icon} */}
      {/*       content={item.content} */}
      {/*       showConnectingLine={index < timelineDetails.length - 1} // Show connecting line except for the last item */}
      {/*     /> */}
      {/*   ))} */}
      {/* </Timeline> */}
      <div>
        {currentPage && (
          <div>
            <h2>{currentPage.title}</h2>
            {/* Display current page content */}
            <p>{currentPage.meta.html_url}</p>
            <button onClick={handleNextPage}>NextPage</button>
          </div>
        )}
        {/* Similar rendering for images and documents */}
      </div>
      {currentPage &&
      <TestDocument
                  subtitle={currentPage.subtitle}
                  author={currentPage.author}
                  date={currentPage.date}
                  body={currentPage.body}
                />}
                
      {/* ... other components or content */}
    </>
  )
}
export default Home
