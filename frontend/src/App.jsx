import AboutUs from './About-us/AboutUs'
import Home from './Homepage/Home'
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Gallery from './Homepage/Gallery';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
