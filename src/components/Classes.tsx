import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Accordian from './Accordian'
import ApiHandler from './ApiHandler'
import LoadingScreen from './LoadingScreen'
import Sidebar from './Sidebar'
import StaticCard from './StaticCard'

export function Classes() {
  const location = useLocation()
  const { id } = location.state || {} // Provide a fallback object to avoid destructuring undefined
  const [loading, setLoading] = useState(true)
  const [idList, setIdList] = useState()
  const [tag, setTag] = useState('MATH-172')

  const fetchAllPages = async (tag: string) => {
    try {
      const response = await ApiHandler.apiFetchPages()
      const list = response
        .filter((item) => item.id !== 2)
        .map((item) => item.id)

      console.log('The first list before tag filter is: ', list)
      // Set the id list to the global state of the component so you can
      // access it anywhere within the component
      const filteredResponse = await ApiHandler.apiFetchSpecificPages(list, tag)

      const filteredList = filteredResponse?.map((item) => item.id)
      console.log('The filterdList list is: ', filteredList)
      setIdList(filteredList)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPages(tag)
    console.log(`Loading is ${loading}`)
  }, [tag])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div id="top-of-page">
      <Sidebar />
      {idList?.map((id) => <StaticCard id={id} />)}
      <Accordian id={id} />
    </div>
  )
}

export default Classes
