import { Router } from 'lucide-react'
import AboutUs from './About-us/AboutUs'
import SmoothScroll from './component/SmoothScroll'
import Home from './Homepage/Home'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Contact from './component/Contact';

function App() {

  return (
    <>
    <SmoothScroll/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
     {/* <Home/> */}
     {/* <AboutUs/> */}
     

     
    </>
  )
}

export default App
