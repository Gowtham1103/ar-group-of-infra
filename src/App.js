
import './App.css';
import Navbar from './Sections/Navbar';
import Header from './Sections/Header';
import "swiper/css"
import Services from './Sections/Services';
import About from './Sections/About';
import Testimonial from './Sections/Testimonial';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';

function App() {
  return (
   <>
   
   <Navbar/>
   <Header/>
   <Services/>
   <About/>
   <Testimonial/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
