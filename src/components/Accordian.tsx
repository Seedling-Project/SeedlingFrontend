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

  useEffect(() => {
    fetchData(id)
    console.log('<Accordian.tsx> The Card Props are: ', cardProps)
  }, [])
  return (
    <div id="accordian" className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <i className="fas fa-angle-down mr-2"></i>
        {cardProps?.title}
      </div>
      <div className="collapse-content">
        <StaticCard id={id} />
        <StaticCard id={id + 1} />
      </div>
    </div>
  )
}

export default Accordian
