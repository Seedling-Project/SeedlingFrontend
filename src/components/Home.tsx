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
import TestCard from './TestCard'
import ApiHandler from './ApiHandler'

function Home() {
  const timelineRef = useRef<HTMLDivElement>(null) // Create a ref for the Timeline component
  //new axios functionality, not completely set up but this is the form
  const [pageData, setPageData] = useState(null) // Holds the entire page data
  const [loading, setLoading] = useState(true)
  const [id, setID] = useState(7)
  const [index, setIndex] = useState(0)
  const [pagesIdList, setPagesIdList] = useState()
  // Initialize an array of image URLs

  // Function for grabbing all the pages
  const fetchAllPages = async (type) => {
    const testPages = await ApiHandler.apiFetchPages('core.ContentBlock')
    const idList = testPages
      .filter((item) => item.id !== 2)
      .map((item) => item.id)

    console.log('The idList is: ', idList)
    // Set the id list to the global state of the component so you can
    // access it anywhere within the component
    setPagesIdList(idList)
    setLoading(false)
  }

  // Populate the pagesIdList
  useEffect(() => {
    fetchAllPages('core.ContentBlock')
    console.log(`Loading is ${loading}`)
  }, [])

  if (loading) {
    return <p>Loading Content...</p>
  }

  // TODO: Fix this function for a next page button
  const handleNextPage = () => {
    setIndex((i) => i + 1)
    setID(() => pagesIdList[index % pagesIdList.length])
    console.log(
      `This is the pagesIdList: ${pagesIdList[index % pagesIdList.length]}`,
    )
    console.log(`This is the ID: ${id}`)
  }

  // TODO: Fix this function for a previous page button
  const handlePrevPage = () => {
    setIndex((i) => i - 1)
    setID(() => pagesIdList[index % pagesIdList.length])
    console.log(
      `This is the pagesIdList: ${pagesIdList[index % pagesIdList.length]}`,
    )
    console.log(`This is the ID: ${id}`)
  }

  // Was used to test the Api handler, now same functionality being handled in
  // useEffect
  const testAPIFunction = async () => {
    const testPages = await ApiHandler.apiFetchPages('core.ContentBlock')
    const pagesIDList = testPages.map((i) => i.id)

    // Set the id list to the global state of the component so you can
    // access it anywhere within the component
    setPagesIdList(pagesIDList)

    // for stuff in pagesIDList {
    //     append pagesIDList[i] 'pages/${pagesIDList[i]}'
    // }
    console.log(pagesIDList)
    console.log(testPages)
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
      {/* <div> */}
      {/*   <button className="btn btn-wide btn-accent" onClick={testAPIFunction}> */}
      {/*     Test Api Function */}
      {/*   </button> */}
      {/* </div> */}
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
      {pagesIdList.map((item) => (
        <TestCard id={item} />
      ))}
      {/* Add a button or mechanism to fetch next page or content */}
      <div>
        <button className="btn btn-wide btn-neutral" onClick={handleNextPage}>
          Next page
        </button>
      </div>
      <div>
        <button className="btn btn-wide btn-neutral" onClick={handlePrevPage}>
          Previous page
        </button>
      </div>
    </>
  )
}
export default Home
