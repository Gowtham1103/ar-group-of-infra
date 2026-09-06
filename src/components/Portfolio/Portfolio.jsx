// src/components/Portfolio/Portfolio.jsx

import "./Portfolio.css";

import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa6";

import designImage from "../../assets/design.jpg";
import projectImage from "../../assets/project.jpg";


function Portfolio() {

  const portfolioCards = [
    {
      id: 1,

      title: "Our Designs",

      image: designImage,

      description:
        "Explore our thoughtfully planned architectural designs created to combine modern style, functionality, and comfortable living.",

      path: "/portfolio/designs",
    },

    {
      id: 2,

      title: "Our Projects",

      image: projectImage,

      description:
        "Take a look at our completed and ongoing construction projects that showcase our quality, workmanship, and attention to detail.",

      path: "/portfolio/projects",
    },
  ];


  return (
    <>

      {/* Portfolio Navbar */}

      <nav className="portfolio__navbar">

        <Link
          to="/"
          className="portfolio__home"
        >
          <FaArrowLeft />

          <span>Home</span>
        </Link>


        <h2 className="portfolio__nav__title">
          Portfolio
        </h2>


        <div className="portfolio__nav__spacer"></div>

      </nav>


      {/* Portfolio Page */}

      <main className="portfolio__page">

        <div className="container">


          {/* Heading */}

          <div className="portfolio__header">

            <span>
              OUR DESIGN'S & PROJECT'S
            </span>

            <h1>
              Explore Our Gallery
            </h1>

            <p>
              Discover our designs, construction projects, interiors,
              renovations, and the quality we bring to every space we create.
            </p>

          </div>


          {/* Cards */}

          <div className="portfolio__grid">

            {portfolioCards.map((item) => (

              <div
                className="portfolio__card"
                key={item.id}
              >

                {/* Image */}

                <div className="portfolio__image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div>


                {/* Content */}

                <div className="portfolio__content">

                  <h2>
                    {item.title}
                  </h2>


                  <p>
                    {item.description}
                  </p>


                  <Link
                    to={item.path}
                    className="portfolio__view"
                  >
                    View More

                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>


      {/* Footer */}

      <footer className="portfolio__footer">

        <p>
          © {new Date().getFullYear()} AR INFRA GROUP. All Rights Reserved.
        </p>

      </footer>

    </>
  );
}


export default Portfolio;