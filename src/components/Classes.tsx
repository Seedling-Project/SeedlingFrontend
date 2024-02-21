import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Accordian from './Accordian'
import AnimatedCard from './AnimatedCard'
import ApiHandler from './ApiHandler'
import LoadingScreen from './LoadingScreen'
import Sidebar from './Sidebar'
import StaticCard from './StaticCard'

export function Classes() {
  const location = useLocation()
  const { id } = useParams // Provide a fallback object to avoid destructuring undefined
  const courseCode = location.state?.courseCode
  const [loading, setLoading] = useState(true)
  const [idList, setIdList] = useState([])
  const [tag, setTag] = useState(courseCode)

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
      <StaticCard id={idList[0]} />
      {idList
        ?.filter((id) => id !== idList[0])
        .map((id) => <Accordian id={id} />)}
    </div>
  )
}

export default Classes
