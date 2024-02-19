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
  const [tag, setTag] = useState('MATH-191')

  const fetchAllPages = async (tag: string) => {
    try {
      const response = await ApiHandler.apiFetchSpecificPages(tag)
      const list = response?.map((item) => item.id)
      console.log('Classes: The ID list is: ', list)
      setIdList(list)
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
