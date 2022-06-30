import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Aboutus from './components/Aboutus/Aboutus';
import OurValues from './components/OurValues/OurValues';
import Contactus from './components/Contactus/Contactus';
import Services from './components/Services/Services';
import Homepage from './components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" index element={<Homepage/>} />
        <Route path="/our-values/" element={<OurValues/>}/>
        <Route path="/services/" element={<Services/>}/>
        <Route path="/about-us/" element={<Aboutus/>} />
        <Route path="/contact-us/" element={<Contactus/>} />
      </Routes>
      <Footer/>
    </Router> 
      
    </div>
  );
}

export default App;
