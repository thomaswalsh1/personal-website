import React from 'react';
import './About.css';

function About() {
    return (
        <section className='about-section'>
            <div className='about-container'>
                <span className='about-heading'>
                    About Me
                </span>
                <br></br>
                <span className='about-body'>
                Welcome to my website! My name is Thomas Walsh, and I’m a computer science student at UMass Amherst as a member of the class of 2027. I have been interested in computer science and programming since I was little, as my first experience programming was developing video games. My current goal is to become a software or web developer with the skills to create easy-to-use applications accessible to everyone.

                </span>
            </div>
            <div className='skills-container'>
            <span className='about-heading'>
                    Skills
                </span>
                <br></br>
                <span className='skills-body' id="skills-section">
                    <table className='skills-table'>
                        <tr>
                            <th>Front-End</th>
                            <th>Back-End</th>
                            <th>Other</th>
                        
                        </tr>
                        <tr className='row-of-skills'>
                            <td>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>SCSS</li>
                                    <li>JavaScript</li>
                                    <li>Typescript</li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind</li>
                                    <li>Django</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>MongoDB</li>
                                    <li>SQL</li>
                                    <li>Kubernetes</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>Microservices</li>
                                    <li>Serverless</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Postman</li>
                                    <li>Linux</li>
                                    <li>Windows</li>
                                    <li>MacOS</li>
                                    <li>Powerpoint</li>
                                    <li>G-Suite</li>
                                    <li>Cloud Computing</li>
                                    <li>Excel</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </span>
            </div>
        </section>
    )
} export default About;