import React from 'react';
import Accordion from './Accordion/Accordion';
import './Projects.css';

function Projects() {
    return(
        <section className='projects-section'>
            <div className='projects-about'>
                <span className='projects-about-heading'>
                    Projects
                </span>
                <span className='projects-about-body'>
                    
Here, I have listed some of the projects I’ve completed outside of the classroom. I believe that projects are important for any computer science student to have because they allow employers to see how you have applied you learning experiences from class.

                </span>
            </div>
            <div className='projects-accordion-container'>
                <Accordion />
            </div>
        </section>
    )
} export default Projects;