import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ApiHandler from './ApiHandler'
import LoadingScreen from './LoadingScreen'
import StaticCard from './StaticCard'

export function TimelinePages() {
  const location = useLocation()
  const { id } = useParams() // Provide a fallback object to avoid destructuring undefined
  const [loading, setLoading] = useState(true)

  return (
    <div id="top-of-page">
      <StaticCard id={id} />
    </div>
  )
}

export default TimelinePages
