import React from 'react'
import './Work.css'
import WorkComponent from './WorkComponent/WorkComponent'

function Work() {
  return (
    <section id='work-section'>
        <div className='work-container'>
            <div className='work-heading'>
                Experience
            </div>
        </div>
        <div className='work-body-container'>
            <WorkComponent />
        </div>
    </section>
  )
}

export default Work