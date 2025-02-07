import React, { useState, useEffect } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa'
import { FaChevronCircleDown } from 'react-icons/fa'
import './WorkComponent.css'
import cn from 'classnames'
import { RiArrowDropLeftFill } from 'react-icons/ri'

const data = [
  {
    title: 'Freq Software Developer',
    company: 'Labs at UMass Amherst',
    date: 'Spring 2025',
    about: 'More info coming soon. Stay tuned!',
    location: 'Amherst, MA'
  },
  {
    title: 'IT Help Desk Intern',
    company: 'Tunnell Consulting',
    date: 'Summer 2024',
    about:
      '• Supported the IT Help Desk of Tunnell Consulting, a life science consulting company. • Responsible for maintaining supporting data and IT documentation, as well as documentation for customer projects. • Provided support to other projects as needed, including assistance for customer orientation and IT training that helped customers and employees access essential enterprise software. • Engineered scripts to organize IT data and customer project data, allowing customers to gather analytics regarding performance and activity.',
    location: 'Newton, MA'
  },
  {
    title: 'Cable Technician',
    company: 'KTS Inc.',
    date: 'Summer 2023',
    about:
      '• Assisted experienced technicians with the installation of data cables. • Practiced the installation of Cat6, Cat6a, and Fiber Optic cable in hospitals and schools. • Learned the basics of data closet management.',
    location: 'Stoneham, MA'
  },
  {
    title: 'STEM Instructor',
    company: 'KidzToPros',
    date: 'Summer 2022',
    about:
      '• Taught students from ages 4-11 interdisciplinary concepts in Science, Technology, Engineering, and Mathematics. • Created lesson plans that supplemented student learning and enjoyment. • Instructed outdoor, recreational activities such as tennis, basketball, and soccer.',
    location: 'Newton, MA'
  }
]

function WorkComponent () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const [ballPosition, setBallPosition] = useState(isMobile ? 85 : 60) // Adjust starting position (mobile is %)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleBubbleClick = index => {
    if (index === currentIndex) return

    setPrevIndex(currentIndex) // Store the previous index

    setTimeout(() => {
      setPrevIndex(null) // Remove the `deselecting` state after animation
    }, 500) // Match this with your CSS transition time

    setCurrentIndex(index)

    if (isMobile) {
      setBallPosition(85 - index * 25) // Moves horizontally on mobile
    } else {
      setBallPosition(60 + index * 110) // Moves vertically on desktop
    }
  }

  return (
    <div className='wc-container'>
      <div className='wc-selection-half'>
        <div className='wc-selection-dates'>
          {data.map((item, index) => (
            <div key={index} className='wc-selection-date'>
              <span className='wc-selection-date-text'>{item.date}</span>
            </div>
          ))}
        </div>
        <div className='wc-selection-bubbles'>
          <div className='wc-selection-line' />
          <div
            className='wc-selection-line-ball'
            style={
              isMobile
                ? { left: `${ballPosition}%` }
                : { top: `${ballPosition}px` }
            }
          />
          {data.map((item, index) => (
            <div key={index} className='wc-selection-bubble-holder'>
              <div className='wc-selection-bubble-top'>
                <div
                  className={`wc-selection-bubble ${
                    currentIndex === index ? 'selected' : ''
                  } ${prevIndex === index ? 'deselecting' : ''}`}
                  onClick={() => handleBubbleClick(index)}
                />
                <div className='wc-selection-bubble-title'>
                  <span
                    className={`wc-selection-bubble-title-text ${
                      currentIndex === index ? 'highlighted' : ''
                    }`}
                  >
                    {data[index].title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='wc-content-half'>
        <div className='wc-content-header'>
          <span>{data[currentIndex].title}</span>
          <span>{data[currentIndex].company}</span>
          <span>{data[currentIndex].location}</span>
        </div>
        <ul className='wc-content-data'>
          {data[currentIndex].about
            .split('•')
            .filter(item => item.trim() !== '')
            .map((point, idx) => (
              <li key={idx}>{`${point.trim()}`}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkComponent
