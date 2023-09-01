import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Feature from './Feature';
import Banner from './Banner';
import Exclusive from './Exclusive';
import BannerBox from './BannerBox';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import { Link } from 'react-router-dom'
function App() {

  
  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Feature />
          <Banner />
          <Exclusive />
          <BannerBox />
          <NewsLetter />
          <Footer /> 
    
    </div>
  );
}

export default App;