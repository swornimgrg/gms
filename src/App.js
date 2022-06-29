import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import SlideShow from './components/SlideShow/SlideShow';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import OurValues from './components/OurValues/OurValues';
import Contactus from './components/Contactus/Contactus';
import ServiceCard from './components/ServiceCard/ServiceCard';
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" index element={<SlideShow/>} />
        <Route path="/our-values/" element={<OurValues/>}/>
        <Route path="/about-us/" element={<Aboutus/>} />
        <Route path="/contact-us/" element={<Contactus/>} />
      </Routes>
      <Footer/>
    </Router> 
      
    </div>
  );
}

export default App;
