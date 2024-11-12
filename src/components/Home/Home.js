import React from 'react';
import './Home.css';    
import myImage from '../../assets/me.jpg';


function Home() {
    return(
        <section className='home-section'>
            <div className='text-content'>
                <span className='welcome-body-heading'>Welcome!</span>
                <span className='welcome-body-text'>This is my portfolio website! I hope you enjoy. I created this portfolio
                    website using React, HTML, and CSS.
                </span>
            </div>
            {/** I stole this code from this website: https://codepen.io/januaryofmine/pen/wbOqEm */}
            <div className="carousel-wrapper">
                <div className="carousel-container">
                    <div className="carousel">
                        <div className="image-one"></div>
                        <div className="image-two"></div>
                        <div className="image-three"></div>
                    </div>
                </div>
            </div>
        </section>
    )
} export default Home;