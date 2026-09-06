import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Sections/Navbar";
import Header from "./Sections/Header";
import Services from "./Sections/Services";
import About from "./Sections/About";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

import Portfolio from "./components/Portfolio/Portfolio";
import OurDesigns from "./components/Portfolio/OurDesigns";
import OurProjects from "./components/Portfolio/OurProjects";

import ScrollToTop from "./components/ScrollToTop";

import "swiper/css";


function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}


function PortfolioPage() {
  return (
    <>
      <Portfolio />
    </>
  );
}


function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/portfolio"
          element={<PortfolioPage />}
        />

        <Route
          path="/portfolio/designs"
          element={<OurDesigns />}
        />

        <Route
          path="/portfolio/projects"
          element={<OurProjects />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;