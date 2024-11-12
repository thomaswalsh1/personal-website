import React, {useRef, useState} from 'react';
import './Accordion.css';

const data = [
    {
        project: 'ThomasHelper',
        about: 'Proident laborum cupidatat dolore qui non occaecat dolor reprehenderit in anim quis eu. Id enim id in veniam sint est occaecat exercitation adipisicing non excepteur reprehenderit eu fugiat. Do elit excepteur voluptate culpa esse eiusmod aute id. Nisi incididunt sunt pariatur sit laborum ex et nostrud velit non veniam.',
        link: 'https://github.com/thomaswalsh1/ThomasHelper'
    },
    {
        project: 'Climate Diplomacy Game Theory Simulation',
        about: 'Proident laborum cupidatat dolore qui non occaecat dolor reprehenderit in anim quis eu. Id enim id in veniam sint est occaecat exercitation adipisicing non excepteur reprehenderit eu fugiat. Do elit excepteur voluptate culpa esse eiusmod aute id. Nisi incididunt sunt pariatur sit laborum ex et nostrud velit non veniam.',
        link: 'https://www.linkedin.com/posts/twalsh23_icons-case-study-activity-7199406971911880704-T-S9?utm_source=share&utm_medium=member_desktop'
    },
    {
        project: 'IBM FullStack Developer Capstone',
        about: 'Proident laborum cupidatat dolore qui non occaecat dolor reprehenderit in anim quis eu. Id enim id in veniam sint est occaecat exercitation adipisicing non excepteur reprehenderit eu fugiat. Do elit excepteur voluptate culpa esse eiusmod aute id. Nisi incididunt sunt pariatur sit laborum ex et nostrud velit non veniam.',
        link: 'https://github.com/thomaswalsh1/xrwvm-fullstack_developer_capstone'
    },
    {
        project: 'Portfolio Website (here!)',
        about: 'Proident laborum cupidatat dolore qui non occaecat dolor reprehenderit in anim quis eu. Id enim id in veniam sint est occaecat exercitation adipisicing non excepteur reprehenderit eu fugiat. Do elit excepteur voluptate culpa esse eiusmod aute id. Nisi incididunt sunt pariatur sit laborum ex et nostrud velit non veniam.',
        link: 'null'
    },
    {
        project: 'SuperAI',
        about: 'My team’s submission for HackUMass XII, SuperAI is a website designed to provide users with an easy method of switching between different LLMs as well as gathering analytics. Upon entering a prompt, the prompt will be passed to four different LLMs and SuperAI’s backend API will analyze these responses for completeness, correctness, relevance, coherence, and a final aggregate score for each LLM. We created SuperAI using Javascript, Typescript, CSS, Tailwind, Svelte, Sveltekit, FastAPI, HTML, Groq, Huggingface, Cloudflare and other tools.',
        link: 'https://github.com/thomaswalsh1/super-ai'    
    }
]

const AccordionItem = ({ project, about, link, isOpen, onClick }) => {
    const contentHeight = useRef();
    return(
        <div className='wrapper'>
            <button className={`project-name-container ${isOpen ? 'active' : ''}`} onClick={onClick}>
                <span className='project-name-content'>{project}</span>
            </button>
            <div ref={contentHeight} className='about-project-container' style={
                isOpen
                ? { height: contentHeight.current.scrollHeight }
                : { height: "0px" }
            }>
                <span className='about-project-content'>{about}</span>
                <br/>
                <a className='github-project-link' href={link}>See on Github</a>
            </div>
        </div>
    )
}


function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return(
        <div className='container'>
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    project={item.project}
                    about={item.about}
                    link={item.link}
                    isOpen={activeIndex === index}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    )
} export default Accordion;