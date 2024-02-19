import { useParams, useLocation } from 'react-router-dom'
import Accordian from './Accordian'
import Carousel from './Carousel'
import Sidebar from './Sidebar'
import StaticCard from './StaticCard'

export function Classes() {
  const location = useLocation()
  const { id } = location.state || {} // Provide a fallback object to avoid destructuring undefined

  return (
    <div id="top-of-classes">
      <Sidebar />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <StaticCard id={id} />
      <Accordian id={id} />
    </div>
  )
}

export default Classes
