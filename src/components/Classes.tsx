import { useParams, useLocation } from 'react-router-dom'
import Accordian from './Accordian'
import Carousel from './Carousel'
import TestCard from './TestCard'

export function Classes() {
  const location = useLocation()
  const { id } = location.state || {} // Provide a fallback object to avoid destructuring undefined

  return (
    <>
      <Accordian id={id} />
      <TestCard id={id} />
    </>
  )
}

export default Classes
