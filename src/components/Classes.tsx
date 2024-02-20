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
  const { courseCode } = location.state || {}
  const [loading, setLoading] = useState(true)
  const [idList, setIdList] = useState()

  const fetchAllPages = async (tag: string) => {
    try {
      const response = await ApiHandler.apiFetchSpecificPages(tag)
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
    console.log('<Classes.tsx> The tag is: ', courseCode)
    fetchAllPages(courseCode)
    console.log(`<Classes.tsx> Loading is ${loading}`)
  }, [])

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
