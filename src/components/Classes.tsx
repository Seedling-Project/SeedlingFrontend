import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import TestCard from './TestCard'

export function Classes() {
  const location = useLocation()
  const { id } = location.state || {} // Provide a fallback object to avoid destructuring undefined

  return (
    <>
      <TestCard id={id}></TestCard>
    </>
  )
}

export default Classes
