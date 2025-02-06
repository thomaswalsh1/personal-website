import React from 'react'
import './SkillTable.css'

function SkillTable () {
  return (
    <div id='skilltable-body'>
      <div className='skilltable-content'>
        <div className='skilltable-content-item'>
          <div className='skilltable-content-header first'>
            <span>Front End</span>
          </div>
          <ul className="skilltable-content-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Django</li>
            <li>SvelteKit</li>
            <li>ShadCN</li>
            <li>RadixUI</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className='skilltable-content-item'>
          <div className='skilltable-content-header'>
            <span>Back End</span>
          </div>
          <ul className="skilltable-content-list">
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Kubernetes</li>
            <li>Java</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Microservices</li>
            <li>Serverless</li>
            <li>JWT</li>
            <li>Cloudflare</li>
            <li>Vercel</li>
            <li>Express</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className='skilltable-content-item'>
          <div className='skilltable-content-header'>
            <span>Other</span>
          </div>
          <ul className="skilltable-content-list">
            <li>Postman</li>
            <li>Linux</li>
            <li>Windows</li>
            <li>MacOS</li>
            <li>Powerpoint</li>
            <li>G-Suite</li>
            <li>Cloud Computing</li>
            <li>Excel</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SkillTable
