import React from 'react';
import './Contact.css';
import linkedIn from '../../assets/linkedin_logo.png';
import email from '../../assets/email_logo.png';
import phone from '../../assets/icons8-phone-48.png';
import github from '../../assets/github_logo.png';
import xLogo from '../../assets/x_logo.png';

function Contact() {
    return(
        <section className='contact-section'>
            <div className='contact-container'>
                <span className='contact-heading'>Contact</span>
                <div className='list-of-contacts'>
                    <span className='contact-name'>
                        <img className='contact-image' src={email} /> <p className='contact-text'>Email: </p> <a className='contact-link' href='mailto:thomasmwalsh217@gmail.com'>thomasmwalsh217@gmail.com</a>
                    </span>
                    <span className='contact-name'>
                        <img className='contact-image' src={phone} /> <p className='contact-text'>Phone:</p> <a className='contact-link' href='tel: 781-605-5122'>781-605-5122</a>
                    </span>
                    <span className='contact-name'>
                        <img className='contact-image-github' src={github} /> <p className='contact-text'>Github:</p> <a className='contact-link' href='https://github.com/ThomasWalsh1'>github.com/ThomasWalsh1</a>
                    </span>
                    <span className='contact-name'>
                        <img className='contact-image' src={linkedIn} /> <p className='contact-text'> LinkedIn:</p> <a className='contact-link' href='https://www.linkedin.com/in/twalsh23/'>linkedin.com/in/twalsh23/</a>
                    </span>
                    <span className='contact-name'>
                        <img className='contact-image' src={xLogo} /> <p className='contact-text'>X:</p> <a className='contact-link' href='https://x.com/twalshdev'>x.com/twalshdev</a>
                    </span>
                </div>
            </div>
        </section>
    )
} export default Contact;