import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import TestCard from './TestCard'

export function Classes() {
  const { id } = useParams()
  const location = useLocation()
  const { className } = location.state || {} // Provide a fallback object to avoid destructuring undefined
  useEffect(() => {
    console.log(`ID: ${id}, ClassName: ${className}`)
  }, [id, className]) // Dependency array, re-run the effect when `id` or `className` changes

  return (
    <>
      <TestCard id="20"></TestCard>
    </>
  )
}

export default Classes
