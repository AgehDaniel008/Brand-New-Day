import { useState, useRef, useEffect } from 'react';  
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services'
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';


function App() {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for the custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-black dark:text-white">
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>

      {/* Custom Cursor Ring*/}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounde-full border border-primary pointer-events-none z-[9999]'></div>

      {/*Custom Cursor Dot*/}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounde-full border border-primary pointer-events-none z-[9999]'></div>

    </div>
  );
}

export default App;
