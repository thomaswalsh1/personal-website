import React from "react";
import './Splash.css';
import Logo from './assets/T.png'

function Splash() {
    return(
        <div className="splash ">
            <div className="splash-container">
                <img src={Logo} alt="my logo" className="splash-image"/>
                <span className="splash-text">homas Walsh</span>
            </div>
        </div>
    )
} export default Splash;