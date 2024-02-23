import React from 'react';
 import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
//  import Menubar from './Components/Menubar/Menubar';
 import Home from './Components/Home/Home';
import About from './Components/About/About';
// import { BrowserRouter } from 'react-router-dom';
//  import Skills from './Components/About/MySkills/Skills';
// import Education from './Components/About/Education/Education';
// import Experience from './Components/About/Experience/Experience';
// import NoPage from './Components/NoPage/NoPage';

//  import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Skills from './Components/About/MySkills/Skills'
//  import Education from './Components/About/Education/Education';
// import Experience from './Components/About/Experience/Experience';
// import NoPage from './Components/NoPage/NoPage';

import {  Routes , Route } from 'react-router-dom'

import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import NoPage from './Components/NoPage/NoPage';
import DashBoard from './Components/DashBoard/DashBoard';

import SkillWork from './Components/About/MySkills/SkillWork';
import Education from './Components/About/Education/Education';
import Experience from './Components/About/Experience/Experience';
// import MySkillsData from './Components/About/MySkills/MySkillsData';
import AllApplication from './Components/Portfolio/AllApplication.jsx'
import All from './Components/Portfolio/All.jsx'
import WebDesgin from './Components/Portfolio/WebDesgin.jsx'
import GraphicsDesign from './Components/Portfolio/GraphicsDesign.jsx'
import Networking from './Components/Portfolio/Networking.jsx'

function App() {
 
  return (
    <div className="App">
  
   + <Header /> 
     <Navbar /> 
    
     <Routes>
          <Route path="/" element={<Home />}/>

          
          <Route path="/About/*" className='bg-info' element={<About />}>
         
          <Route path="SkillWork" element={<SkillWork />}/>
          
        
          
          <Route path="Experience" element={<Experience />} />
          <Route path="Education" element={<Education />} /> 
          <Route path="*" element={<NoPage />} />
          </Route>
        

          <Route path="/Services" element={<Services />} />

          <Route path="/portfolio/*" element={<Portfolio />} >
          <Route path="AllApplication" element={<AllApplication />}/>
          <Route path="All" element={<All />}/>
          <Route path="WebDesgin" element={<WebDesgin />} />
          <Route path="GraphicsDesign" element={<GraphicsDesign />} /> 
          <Route path="Networking" element={<Networking />} /> 
          </Route>


          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Contact" element={<Contact />} />


          <Route path="/DashBoard/*" element={<DashBoard />} >
          <Route path="SkillWork" element={<SkillWork />}/>
          <Route path="Experience" element={<Experience />} />
          <Route path="Education" element={<Education />} /> 
          </Route>
          
          <Route path="*" element={<NoPage />} />
        

          
      </Routes>
    
             
      </div>
  );
}

export default App;
