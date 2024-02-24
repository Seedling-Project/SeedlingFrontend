import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Accordion from './Accordion'
import AnimatedCard from './AnimatedCard'
import ApiHandler from './ApiHandler'
import LoadingScreen from './LoadingScreen'
import Sidebar from './Sidebar'
import StaticCard from './StaticCard'

const Transfer = () => {
  const location = useLocation()
  const { id } = useParams() // Provide a fallback object to avoid destructuring undefined
  const [loading, setLoading] = useState(true)
  const [idList, setIdList] = useState([])

  const fetchAllPages = async (tag: string) => {
    try {
      const response = await ApiHandler.apiFetchTag(tag)
      const list = response?.map((item) => item.id)
      console.log('<Classes.tsx> The ID list is: ', list)
      setIdList(list)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    let effectiveTag = 'transfer'
    console.log('<Transfer.tsx> The effective tag is: ', effectiveTag)
    if (effectiveTag) {
      fetchAllPages(effectiveTag) // Use effectiveTag instead of courseCode
    } else {
      console.log('No effective tag found for fetching.')
      setLoading(false) // Ensure loading is set to false if there's no tag to fetch data for
    }
  }, [id])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div id="top-of-page">
      <StaticCard id="28" />
      {idList
        ?.filter((itemId) => itemId !== idList[0])
        .map((itemId) => <Accordion key={itemId} id={itemId} />)}
    </div>
  )
}

export default Transfer
