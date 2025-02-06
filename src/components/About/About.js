import React from 'react'
import './About.css'
import SkillTable from './skillstable/SkillTable'

function About () {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <span className='about-heading'>About Me</span>
        <br></br>
        <span className='about-body'>
          Welcome to my website! My name is Thomas Walsh, and I’m a computer
          science student at UMass Amherst as a member of the class of 2027. I
          have been interested in computer science and programming since I was
          little, as my first experience programming was developing video games.
          My current goal is to become a software or web developer with the
          skills to create easy-to-use applications accessible to everyone.
        </span>
      </div>
      <div className='skills-container'>
        <span className='about-heading'>Skills</span>
        <span className='about-body' style={{ marginBottom: "3rem"}}>
          As a continuous learner, I have picked up many skills in software and web development.
          Here are some of the well-known libraries and tools I have used when creating applications.
        </span>
        <br></br>
        <SkillTable />
      </div>
    </section>
  )
}
export default About
