import React, {useState, useEffect} from 'react';

import Navi from './components/Navi/Navi';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Splash from './Splash';
import './App.css';

function App() {
  
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {splashVisible && <Splash />}
      <Navi />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
