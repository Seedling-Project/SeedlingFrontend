import { useEffect, useState } from 'react'
import ApiHandler from './ApiHandler'
import TestCard from './TestCard'

const Accordian: React.FC<number> = ({ id }) => {
  const [cardProps, setCardProps] = useState()

  // grab the data from the API
  const fetchData = async (type, pageID) => {
    try {
      const data = await ApiHandler.apiFetchPage(type, pageID)
      console.log('The Data for the Accordian is: ', data)
      setCardProps(data)
    } catch (error) {
      console.error('Error in fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData('core.ContentBlock', id)
    console.log('The Card Props are: ', cardProps)
  }, [])
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <i className="fas fa-angle-down mr-2"></i>
        {cardProps?.title}
      </div>
      <div className="collapse-content">
        <TestCard id={id} />
        <TestCard id={id + 1} />
      </div>
    </div>
  )
}

export default Accordian