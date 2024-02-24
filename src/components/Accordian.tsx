import { useEffect, useState } from 'react'
import ApiHandler from './ApiHandler'
import StaticCard from './StaticCard'

const Accordian: React.FC<number> = ({ id }) => {
  const [cardProps, setCardProps] = useState()

  // grab the data from the API
  const fetchData = async (pageID) => {
    try {
      const data = await ApiHandler.apiFetchPage(pageID)
      console.log('<Accordian.tsx> The Data for the Accordian is: ', data)
      setCardProps(data)
    } catch (error) {
      console.error('Error in fetching data:', error)
    }
  }

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    fetchData(id)
    console.log('<Accordian.tsx> The Card Props are: ', cardProps)
  }, [id])

  return (
    <div className="flex justify-center w-full w-30 lg-w-100 ">
      <div
        id="accordian"
        className="collapse bg-base-200 w-3/4 border-b-2 border-black"
      >
        <input type="checkbox" className="peer" />
        {windowWidth < 1096 ? (
          <a
            href={cardProps?.documentUrls}
            target="_blank"
            className=" text-gray:800 visited:text-gray-800"
          >
            <div className="collapse-title text-xl font-medium">
              <i className="fas fa-angle-down mr-2"></i>
              {cardProps?.title}
            </div>
          </a>
        ) : (
          <div className="collapse-title text-xl font-medium">
            <i className="fas fa-angle-down mr-2"></i>
            {cardProps?.title}
          </div>
        )}

        {windowWidth > 1096 ? (
          <div className="collapse-content flex items-center w-full overflow-hidden ">
            <iframe
              src={cardProps?.documentUrls}
              title={cardProps?.title}
              className=" w-full h-full min-h-[75vh] min-w-full border-none aspect-video"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Accordian
