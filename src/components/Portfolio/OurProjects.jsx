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

import pimg10 from "../../assets/pimg10.jpeg";

// Ongoing project images
import ogp1 from "../../assets/ogp1.jpeg";
import ogp2 from "../../assets/ogp2.jpeg";
import ogp3 from "../../assets/ogp3.jpeg";
import ogp4 from "../../assets/ogp4.jpeg";
import ogp5 from "../../assets/ogp5.jpeg";

import ogp7 from "../../assets/ogp7.jpeg";
import ogp8 from "../../assets/ogp8.jpeg";
import ogp9 from "../../assets/ogp9.jpeg";
import ogp10 from "../../assets/ogp10.jpeg";

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

    pimg10,
  ];

  const ongoingProjectImages = [
    ogp1,
    ogp2,
    ogp3,
    ogp4,
    ogp5,
  
    ogp7,
    ogp8,
    ogp9,
    ogp10,
  ];

  const handleImageLoad = (key) => {
    setLoadedImages((previous) => ({
      ...previous,
      [key]: true,
    }));
  };

  const renderGallery = (images, type) => {
    return (
      <div className="projects__gallery">
        {images.map((image, index) => {
          const imageKey = `${type}-${index}`;

          return (
            <div className="projects__image" key={imageKey}>
              {!loadedImages[imageKey] && (
                <div className="projects__image__loader">
                  <div className="projects__spinner"></div>
                  <span>Loading...</span>
                </div>
              )}

              <img
                src={image}
                alt={
                  type === "ongoing"
                    ? `AR INFRA GROUP ongoing project ${index + 1}`
                    : `AR INFRA GROUP completed project ${index + 1}`
                }
                loading="lazy"
                className={
                  loadedImages[imageKey]
                    ? "projects__loaded"
                    : "projects__loading"
                }
                onLoad={() => handleImageLoad(imageKey)}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="projects__page">
      <nav className="projects__navbar">
        <Link to="/portfolio" className="projects__back">
          <FaArrowLeft />
          <span>Back</span>
        </Link>

        <h2 className="projects__nav__title">Our Work's</h2>

        <div className="projects__nav__spacer"></div>
      </nav>

      <main className="projects__main">
        <div className="projects__container">
          {/* Completed Projects */}
          <div className="projects__header">
            <span>OUR CONSTRUCTION & INTERIOR WORKS</span>

            <h1>Explore Our Work</h1>

            <p>
              Explore our completed construction and interior projects that
              reflect our commitment to quality, precision, and reliable
              workmanship.
            </p>
          </div>

          {renderGallery(projectImages, "completed")}

          {/* Ongoing Projects */}
          <section className="projects__ongoing">
            <div className="projects__header projects__ongoing__header">
              <span>WORK IN PROGRESS</span>

              <h2>On Going Projects</h2>

             
            </div>

            {renderGallery(ongoingProjectImages, "ongoing")}
          </section>

          {/* Contact Section */}
          <div className="projects__custom">
            <span className="projects__custom__label">
              YOUR PROJECT, OUR RESPONSIBILITY
            </span>

            <h2>Planning Your Next Project?</h2>

            <p>
              Whether you are planning a new construction, interior work,
              renovation, or alteration, AR INFRA GROUP provides reliable
              solutions tailored to your requirements, space, and budget.
            </p>

            <Link to="/" className="projects__custom__btn">
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <footer className="projects__footer">
        <p>
          © {new Date().getFullYear()} AR INFRA GROUP. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default OurProjects;