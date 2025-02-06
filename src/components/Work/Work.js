import React from 'react'
import './Work.css'
import WorkCarousel from './WorkCarousel/WorkCarousel'

function Work() {
  return (
    <section id='work-section'>
        <div className='work-container'>
            <div className='work-heading'>
                Experience
            </div>
        </div>
        <div className='work-body-container'>
            <WorkCarousel />
        </div>
    </section>
  )
}

export default Work