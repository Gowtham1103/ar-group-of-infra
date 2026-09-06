import { useState } from "react";
import "./OurProjects.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import pimg1 from "../../assets/pimg1.jpeg";
import pimg2 from "../../assets/pimg2.jpeg";
import pimg3 from "../../assets/pimg3.jpeg";
import pimg4 from "../../assets/pimg4.jpeg";
import pimg5 from "../../assets/pimg5.jpeg";
import pimg6 from "../../assets/pimg6.jpeg";
import pimg7 from "../../assets/pimg7.jpeg";
import pimg8 from "../../assets/pimg8.jpeg";
import pimg9 from "../../assets/pimg9.jpeg";
import pimg10 from "../../assets/pimg10.jpeg";
import pimg11 from "../../assets/pimg11.jpeg";

const OurProjects = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const projectImages = [
    pimg1,
    pimg2,
    pimg3,
    pimg4,
    pimg5,
    pimg6,
    pimg7,
    pimg8,
    pimg9,
    pimg10,
    pimg11,
  ];

  const handleImageLoad = (index) => {
    setLoadedImages((previous) => ({
      ...previous,
      [index]: true,
    }));
  };

  return (
    <div className="projects__page">

      {/* Navbar */}
      <nav className="projects__navbar">

        <Link
          to="/portfolio"
          className="projects__back"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Link>

        <h2 className="projects__nav__title">
          Our Projects
        </h2>

        <div className="projects__nav__spacer"></div>

      </nav>


      {/* Main */}
      <main className="projects__main">

        <div className="projects__container">

          {/* Header */}
          <div className="projects__header">

            <span>
              OUR CONSTRUCTION & INTERIOR WORKS
            </span>

            <h1>
              Explore Our Work
            </h1>

            <p>
              Explore our completed and ongoing construction and interior
              projects that reflect our commitment to quality, precision,
              and reliable workmanship.
            </p>

          </div>


          {/* Gallery */}
          <div className="projects__gallery">

            {projectImages.map((image, index) => (

              <div
                className="projects__image"
                key={index}
              >

                {/* Loading placeholder */}
                {!loadedImages[index] && (
                  <div className="projects__image__loader">

                    <div className="projects__spinner"></div>

                    <span>Loading...</span>

                  </div>
                )}


                <img
                  src={image}
                  alt={`AR INFRA GROUP project ${index + 1}`}
                  loading="lazy"

                  className={
                    loadedImages[index]
                      ? "projects__loaded"
                      : "projects__loading"
                  }

                  onLoad={() => handleImageLoad(index)}
                />

              </div>

            ))}

          </div>


          {/* Bottom Message */}
          <div className="projects__custom">

            <span className="projects__custom__label">
              YOUR PROJECT, OUR RESPONSIBILITY
            </span>

            <h2>
              Planning Your Next Project?
            </h2>

            <p>
              Whether you are planning a new construction, interior work,
              renovation, or alteration, AR INFRA GROUP provides reliable
              solutions tailored to your requirements, space, and budget.
            </p>

            <Link
              to="/"
              className="projects__custom__btn"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </main>


      {/* Footer */}
      <footer className="projects__footer">

        <p>
          © {new Date().getFullYear()} AR INFRA GROUP. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
};

export default OurProjects;