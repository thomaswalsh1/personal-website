import React, { useState, useEffect } from 'react';
import './Navi.css';
import T from '../../assets/T.png';
import drop from '../../assets/dropdown.jpg';
import { Link, scrollTo } from 'react-scroll';

function Navi() {
    const [showMenu, setShowMenu] = useState(false);
    // const [show, setShow] = useState(true);

    // const [lastScrollY, setLastScrollY] = useState(0);

    // const controlNavbar = () => {
    //     if (window.scrollY < lastScrollY) { // if scroll down hide the navbar
    //         setShow(false); 
    //     } else { // if scroll up show the navbar
    //         setShow(true);  
    //     }
    //     // remember current page location to use in the next move
    //     setLastScrollY(window.scrollY); 
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavbar);

    //     // cleanup function
    //     return () => {
    //         window.removeEventListener('scroll', controlNavbar);
    //     };
    // }, [lastScrollY]);

    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
    } 
    return(
        <div className='navbar-container' id='navbar'>
            <div className='logo-text'>
                <img src={T} className='logo-image'/>
                <span>homas Walsh</span>
            </div>
            <div className='nav-buttons'>
                <Link className='nav-button' to='home-section' spy={true} smooth={true}>Home</Link>
                <Link className='nav-button' to='about-section' spy={true} smooth={true}>About</Link>
                <Link className='nav-button' to='about-section' spy={true} smooth={true}>Skills</Link>
                <Link className='nav-button' to='projects-section' spy={true} smooth={true}>Projects</Link>
                <Link className='nav-button' to='contact-section' spy={true} smooth={true}>Contact</Link>
            </div>

            <img src={drop} className={`mobile-dropdown ${showMenu ? 'rotate' : ''}`} onClick={() => setShowMenu(!showMenu)}/>
            <div className={`mobile-nav-buttons ${showMenu ? 'show' : ''}`}>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='home-section' spy={true} smooth={true}>Home</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='about-section' spy={true} smooth={true}>About</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='skills-container' spy={true} smooth={true}>Skills</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='projects-section' spy={true} smooth={true}>Projects</Link>
                <Link className='mobile-nav-button' href='/' onClick={() => setShowMenu(!showMenu)} to='contact-section' spy={true} smooth={true}>Contact</Link>
            </div>
            
            <div className='logo-text'> 
            {/* This is just for the navbar being centered */}
            </div>
        </div>
    )
} export default Navi;