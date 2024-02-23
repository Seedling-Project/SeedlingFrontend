import { useEffect, useState } from 'react'
import ApiHandler from './ApiHandler'
import StaticCard from './StaticCard'

const Accordion: React.FC<number> = ({ id }) => {
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

  useEffect(() => {
    fetchData(id)
    console.log('<Accordian.tsx> The Card Props are: ', cardProps)
  }, [id])
  return (
    <div className="flex justify-center w-full w-30 lg-w-100">
      <div id="accordian" className="collapse bg-base-200 w-3/4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          <i className="fas fa-angle-down mr-2"></i>
          {cardProps?.title}
        </div>
        <div className="collapse-content flex items-center w-full overflow-hidden">
          <iframe
            src={cardProps?.documentUrls}
            title={cardProps?.title}
            className=" border-none aspect-video"
          />
        </div>
      </div>
    </div>
  )
}

export default Accordion
