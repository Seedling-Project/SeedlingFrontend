//can be used as a base component for the component for the blogs
//guides etc.
//make it seem like a piece of parchment paper

import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { MathJax, MathJaxContext } from 'better-react-mathjax'
import ApiHandler from './ApiHandler'

const config = {
  loader: { load: ['input/asciimath', 'output/chtml'] },
  asciimath: { delimiters: [['$$', '$$']] },
}

declare global {
  interface Window {
    MathJax: any // You can replace 'any' with a more specific type if available
  }
}

const StaticCard: React.FC<number> = ({ id }) => {
  const [cardProps, setCardProps] = useState()
  console.log('<StaticCard.tsx> The TestCard ID is: ', id)

  const fetchData = async (pageID) => {
    try {
      const data = await ApiHandler.apiFetchPage(pageID)
      console.log('<StaticCard.tsx> The Data is: ', data)
      setCardProps(data)
    } catch (error) {
      console.error('<StaticCard.tsx> Error fetching data:', error)
    }
  }

  const renderBlock = (block: any) => {
    switch (block.type) {
      case 'math':
        return <MathJax>{block.value}</MathJax>
      case 'paragraph':
        return <p dangerouslySetInnerHTML={{ __html: block.value }} />
      case 'list-item':
        return <li dangerouslySetInnerHTML={{ __html: block.value }} />
      case 'unordered-list':
        return <ul>{block.children.map(renderBlock)}</ul>
      // Handle other types as needed
      default:
        return null
    }
  }
  useEffect(() => {
    fetchData(id)
    console.log('<StaticCard.tsx> The Card Props are: ', cardProps)
    if (cardProps?.body) {
      renderBlock(cardProps.body)
    }
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useSpring(() => ({ value: 0 }))
  const [hoverProps, setHoverProps] = useSpring(() => ({
    transform: 'scale(1)',
    config: { mass: 1, tension: 200, friction: 60 }, // Adjusted values to reduce bounciness
  }))

  return (
    <MathJaxContext config={config}>
      <animated.div
        ref={ref}
        className="bg-white charter text-gray-800 max-w-3xl mx-auto mt-5 mb-8 p-8 rounded-lg shadow-lg shadow-top-bottom"
        style={hoverProps}
      >
        <div className="text-center mb-4 charter">
          <h1 className="text-3xl font-bold mb-2 charter">
            {cardProps?.title}
          </h1>
          <p className="text-md mb-4 font-accent charter text-lg">
            {`${cardProps?.author}- ${cardProps?.date}`}
          </p>
        </div>
        <div className="text-left charter text-lg">
          {/* Render each block */}
          {cardProps?.body.map((block: any, index: number) => (
            <React.Fragment key={index}>{renderBlock(block)}</React.Fragment>
          ))}
        </div>
        <div>
          <div>
            {cardProps?.imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt="" />
            ))}
            {/* Iterate over enriched document URLs if they exist */}
            {cardProps?.documentUrls.map((documentUrl, index) => (
              <a key={index} href={documentUrl}>
                View Document
              </a>
            ))}
          </div>
        </div>
      </animated.div>
    </MathJaxContext>
  )
}

export default StaticCard
