import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export function Classes() {
  const { id } = useParams()
  const location = useLocation()
  const { className } = location.state || {} // Provide a fallback object to avoid destructuring undefined

  useEffect(() => {
    console.log(`ID: ${id}, ClassName: ${className}`)
  }, [id, className]) // Dependency array, re-run the effect when `id` or `className` changes

  return (
    <>
      <h2> {className || 'No class name provided'}</h2>
    </>
  )
}

export default Classes
