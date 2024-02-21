import React, { useRef, useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

// Custom hook to detect current breakpoint based on window width
const useBreakpoint = () => {
  const [size, setSize] = useState('sm')

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setSize('sm')
      else if (window.innerWidth >= 640 && window.innerWidth < 855)
        setSize('md')
      else if (window.innerWidth >= 855 && window.innerWidth < 950)
        setSize('md-plus')
      else if (window.innerWidth >= 950 && window.innerWidth < 1024)
        setSize('lg')
      else if (window.innerWidth >= 1024 && window.innerWidth < 1125)
        setSize('0.5xl')
      else if (window.innerWidth >= 1024 && window.innerWidth < 1200)
        setSize('xl')
      else if (window.innerWidth >= 1200 && window.innerWidth < 1240)
        setSize('1.5xl')
      else if (window.innerWidth >= 1240) setSize('2xl')
    }
    window.addEventListener('resize', updateSize)
    updateSize() // Call once to set initial size
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

interface SlideOutWrapperProps {
  children: React.ReactNode
}

const SlideOutWrapper: React.FC<SlideOutWrapperProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const breakpoint = useBreakpoint() // Use the custom hook

  // Adjusting the slideOutProps based on the breakpoint
  const slideOutProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? `translate3d(${
          breakpoint === 'sm'
            ? '0.5%'
            : breakpoint === 'md'
              ? '0.5%'
              : breakpoint === 'md-plus'
                ? '0.5%'
                : breakpoint === 'lg'
                  ? '5%'
                  : breakpoint === '0.5xl'
                    ? '10%'
                    : breakpoint === 'xl'
                      ? '20%'
                      : breakpoint === '1.5xl'
                        ? '20%'
                        : breakpoint === '2xl'
                          ? '21%'
                          : '21%' // New value for 3xl breakpoint
        },0,0)`
      : 'translate3d(-5%,0,0)',
    config: { duration: 700 },
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.5, 1],
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <animated.div ref={ref} style={slideOutProps} className="content-slide">
      {children}
    </animated.div>
  )
}

export default SlideOutWrapper
