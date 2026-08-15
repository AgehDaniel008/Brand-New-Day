import { useState } from 'react';
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
    </div>
  );
}

export default App;
