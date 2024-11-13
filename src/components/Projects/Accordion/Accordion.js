import React, {useRef, useState} from 'react';
import './Accordion.css';

const data = [
    {
        project: 'ThomasHelper',
        about: 'ThomasHelper is a desktop GUI application that performs a variety of actions such as opening all browser tabs related to schoolwork or running its own built-in To-Do list application. I created ThomasHelper using Java, Swing, JavaFX, and other tools. ',
        link: 'https://github.com/thomaswalsh1/ThomasHelper'
    },
    {
        project: 'Climate Diplomacy Game Theory Simulation',
        about: 'The Climate Diplomacy Game Theory Simulation is a project I created as part of the ICons program at UMass Amherst. This project was created in Python to analyze and simulate climate diplomacy using various parameters and concepts of game theory.',
        link: 'https://www.linkedin.com/posts/twalsh23_icons-case-study-activity-7199406971911880704-T-S9?utm_source=share&utm_medium=member_desktop'
    },
    {
        project: 'IBM FullStack Developer Capstone',
        about: 'The IBM Full Stack Developer Capstone is a project that I completed as part of the IBM Full Stack Developer Professional Certification. This project is a mock dealership website created using Django, React, MongoDB, and other libraries and tools. The website also implements microservices with the use of an AI Sentiment Analyzer provided by IBM. It is also capable of deployment using Docker and Kubernetes. ',
        link: 'https://github.com/thomaswalsh1/xrwvm-fullstack_developer_capstone'
    },
    {
        project: 'Portfolio Website (here!)',
        about: 'This is my portfolio website. I created my portfolio website using CSS, HTML, Javascript, React, and some other tools. I deployed this website on Cloudflare and tested it on browsers such as Chrome, Firefox, and Safari on a variety of different screen sizes.',
        link: 'https://github.com/thomaswalsh1/personal-website'
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