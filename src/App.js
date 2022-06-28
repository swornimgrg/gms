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


function App() {
  return (
    <div className="App">
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" index element={<SlideShow/>} />
        <Route path="/about-us" element={<Aboutus/>} />
      </Routes>
      <Footer/>
    </Router> 
      
    </div>
  );
}

export default App;
