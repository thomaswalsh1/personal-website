import React, { useState, useEffect } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa'
import { FaChevronCircleDown } from 'react-icons/fa'
import './WorkCarousel.css'
import cn from 'classnames'
import { RiArrowDropLeftFill } from 'react-icons/ri'

const data = [
  {
    title: 'Freq Software Developer',
    company: 'Labs at UMass Amherst',
    date: 'Spring 2025',
    about:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit justo ex mattis parturient ultrices euismod scelerisque maximus. Finibus egestas egestas condimentum mattis aliquam libero sodales dictumst. Cras maximus sapien amet enim feugiat a tempor vestibulum. Fringilla eget est finibus cursus, nec curae lectus metus. Ad semper adipiscing ultrices; quis taciti lacinia. Alectus donec aptent vehicula pulvinar varius est quam. Consectetur suscipit proin iaculis; pellentesque ullamcorper ante. ',
    location: 'Amherst, MA'
  },
  {
    title: 'IT Help Desk Intern',
    company: 'Tunnell Consulting',
    date: 'Summer 2024',
    about:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit justo ex mattis parturient ultrices euismod scelerisque maximus. Finibus egestas egestas condimentum mattis aliquam libero sodales dictumst. Cras maximus sapien amet enim feugiat a tempor vestibulum. Fringilla eget est finibus cursus, nec curae lectus metus. Ad semper adipiscing ultrices; quis taciti lacinia. Alectus donec aptent vehicula pulvinar varius est quam. Consectetur suscipit proin iaculis; pellentesque ullamcorper ante. ',
    location: 'Newton, MA'
  },
  {
    title: 'Cable Technician',
    company: 'KTS Inc.',
    date: 'Summer 2023',
    about:
      'Vitae at ultrices augue fusce donec adipiscing. Lobortis nascetur nullam parturient venenatis primis turpis netus. Sapien sodales integer in; fermentum enim cubilia. Sollicitudin sem turpis morbi viverra sollicitudin mattis mus. Suspendisse maximus ullamcorper netus lacinia interdum. Arcu conubia iaculis imperdiet fermentum nibh placerat natoque pellentesque. Morbi torquent sodales est per nostra luctus molestie porttitor. Suspendisse rhoncus convallis; purus in litora facilisis mus. Fames etiam hac finibus egestas tempus curae hendrerit rutrum.',
    location: 'Stoneham, MA'
  },
  {
    title: 'STEM Instructor',
    company: 'KidzToPros',
    date: 'Summer 2022',
    about:
      'Sit dui ultrices consequat ornare vivamus dis vivamus. Duis lobortis dui penatibus vel class cubilia aliquam sollicitudin. Turpis sociosqu luctus consectetur non morbi. Magna malesuada litora laoreet aliquam pulvinar pharetra tincidunt malesuada. Libero nunc aptent laoreet lobortis netus odio. Vel aliquam per ultrices netus erat finibus. Maximus imperdiet himenaeos nibh; efficitur dui purus mus. Rutrum donec fermentum conubia lacus ultricies dictum habitant.',
    location: 'Newton, MA'
  }
]

function WorkCarousel () {
  const [activeIndex, setActiveIndex] = useState(0)

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2)

  // Usd to determine the height/spacing of each item
  const itemHeight = 52

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2

  const determinePlacement = itemIndex => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight
      }
      return -(activeIndex - itemIndex) * itemHeight
    }
  }

  const handleClick = direction => {
    setActiveIndex(prevIndex => {
      if (direction === 'next') {
        if (prevIndex + 1 > data.length - 1) {
          return 0
        }
        return prevIndex + 1
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1
      }

      return prevIndex - 1
    })
  }

  const carouselRef = React.useRef(null)

  useEffect(() => {
    const handleScroll = (event) => {
      if (!carouselRef.current) return
  
      // Prevent page scrolling
      event.preventDefault()
  
      if (event.deltaY > 0) {
        handleClick('next')
      } else if (event.deltaY < 0) {
        handleClick('prev')
      }
    }
  
    const handleKeyDown = (event) => {
      if (!carouselRef.current) return
  
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault() // Prevent page scrolling
      }
  
      if (event.key === 'ArrowDown') {
        handleClick('next')
      } else if (event.key === 'ArrowUp') {
        handleClick('prev')
      }
    }
  
    const enableScroll = () => {
      document.addEventListener('wheel', handleScroll, { passive: false })
      document.addEventListener('keydown', handleKeyDown)
    }
  
    const disableScroll = () => {
      document.removeEventListener('wheel', handleScroll)
      document.removeEventListener('keydown', handleKeyDown)
    }
  
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('mouseenter', enableScroll)
      carousel.addEventListener('mouseleave', disableScroll)
    }
  
    return () => {
      disableScroll()
      if (carousel) {
        carousel.removeEventListener('mouseenter', enableScroll)
        carousel.removeEventListener('mouseleave', disableScroll)
      }
    }
  }, [])
  


  return (
    <div className='wc-container'>
      <section className='wc-outer-container'>
        <div className='wc-wrapper'>
          <button
            type='button'
            className='wc-button prev'
            onClick={() => handleClick('prev')}
          >
            <FaChevronCircleUp />
          </button>
          <div className='wc'>
            <div className='wc-date'>
              <div className='wc-data-text'>{data[activeIndex].date}</div>
              <RiArrowDropLeftFill className='rotated-stopper' />
            </div>
            <div className='wc-slides'>
              <div className='wc-inner' ref={carouselRef}>
                {data.map((item, i) => (
                  <button
                    type='button'
                    onClick={() => setActiveIndex(i)}
                    className={cn('wc-item', {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <= visibleStyleThreshold
                    })}
                    key={i}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type='button'
            className='wc-button next'
            onClick={() => handleClick('next')}
          >
            <FaChevronCircleDown />
          </button>
        </div>
        <div className='wc-content'>
          <div className='wc-content-header'>
            <span className='job-title'>{data[activeIndex].title}</span>
            <span className='job-company'>{data[activeIndex].company}</span>
            <span className='job-location'>{data[activeIndex].location}</span>
          </div>
          <span className='job-about'>{data[activeIndex].about}</span>
        </div>
      </section>
    </div>
  )
}

export default WorkCarousel
