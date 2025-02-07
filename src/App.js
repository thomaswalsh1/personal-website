import React, {useState, useEffect} from 'react';

import Navi from './components/Navi/Navi';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Splash from './Splash';
import './App.css';

function App() {
  
  const [splashVisible, setSplashVisible] = useState(true);
  const [showScrollbar, setShowScrollbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // show scrollbar after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollbar(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${!showScrollbar ? "HideAppBar" : "" }`}>
      {splashVisible && <Splash />}
      <Navi />
      <Home />
      <About />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
