import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ApiHandler from './ApiHandler'
import LoadingScreen from './LoadingScreen'
import MiscCard from './MiscCard'

const Research = () => {
  const location = useLocation()
  const { id } = useParams() // Provide a fallback object to avoid destructuring undefined
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
  const id_dictionary: { [key: number]: string } = {
    39: 'miscellaneous',
  }

  useEffect(() => {
    let effectiveTag = courseCode
    if (!effectiveTag && id) {
      // Convert id from URL to number and look up tag in dictionary
      const numericId = parseInt(id, 10)
      effectiveTag = id_dictionary[numericId]
    }
    console.log('<Classes.tsx> The effective tag is: ', effectiveTag)
    if (effectiveTag) {
      fetchAllPages(effectiveTag) // Use effectiveTag instead of courseCode
    } else {
      console.log('No effective tag found for fetching.')
      setLoading(false) // Ensure loading is set to false if there's no tag to fetch data for
    }
  }, [id, courseCode])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <div>
        {idList?.map((itemId) => <MiscCard key={itemId} id={itemId} />)}
      </div>
      <div>
        <MiscCard id="39" />
      </div>
    </>
  )
}

export default Research
