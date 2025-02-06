import React, { useState, useEffect } from 'react';
import './Navi.css';
import T from '../../assets/T.png';
import drop from '../../assets/dropdown.jpg';
import { Link } from 'react-scroll';

function Navi() {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {

        let prevScrollPos = window.scrollY; 

        const handleScroll = () => {
            let currentScrollPos = window.scrollY;

            const navbar = document.getElementById("navbar");

            if (currentScrollPos >= 0 && currentScrollPos <= 70) {
                navbar.style.top = "0";
            } else if (prevScrollPos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-100%";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
        

    return (
        <div className='navbar-container' id='navbar'>
            <div className='logo-text'>
                <img src={T} className='logo-image' alt="Logo" />
                <span>homas Walsh</span>
            </div>
            <div className='nav-buttons'>
                <Link className='nav-button' to='home-section' spy={true} smooth={true}>Home</Link>
                <Link className='nav-button' to='about-section' spy={true} smooth={true}>About</Link>
                <Link className='nav-button' to='about-section' spy={true} smooth={true}>Skills</Link>
                <Link className='nav-button' to='projects-section' spy={true} smooth={true}>Projects</Link>
                <Link className='nav-button' to='contact-section' spy={true} smooth={true}>Contact</Link>
            </div>

            <img src={drop} alt="dropdown" className={`mobile-dropdown ${showMenu ? 'rotate' : ''}`} onClick={() => setShowMenu(!showMenu)} />
            <div className={`mobile-nav-buttons ${showMenu ? 'show' : ''}`}>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='home-section' spy={true} smooth={true}>Home</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='about-section' spy={true} smooth={true}>About</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='skills-container' spy={true} smooth={true}>Skills</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='projects-section' spy={true} smooth={true}>Projects</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='contact-section' spy={true} smooth={true}>Contact</Link>
            </div>

            <div className='logo-text-pushback'>
                {/* This is just for the navbar being centered */}
                
            </div>
        </div>
    )
} export default Navi;