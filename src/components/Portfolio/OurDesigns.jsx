import { useState } from "react";
import "./OurDesigns.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import dimg1 from "../../assets/dimg1.jpg";
import dimg2 from "../../assets/dimg2.jpg";
import dimg3 from "../../assets/dimg3.jpg";
import dimg4 from "../../assets/dimg4.jpg";
import dimg5 from "../../assets/dimg5.jpg";
import dimg6 from "../../assets/dimg6.jpg";
import dimg7 from "../../assets/dimg7.jpg";
import dimg8 from "../../assets/dimg8.jpg";
import dimg9 from "../../assets/dimg9.jpg";
import dimg10 from "../../assets/dimg10.jpg";
import dimg11 from "../../assets/dimg11.jpeg";
import dimg12 from "../../assets/dimg12.jpeg";
import dimg13 from "../../assets/dimg13.jpg";
import dimg14 from "../../assets/dimg14.jpg";
import dimg15 from "../../assets/dimg15.jpg";
import dimg16 from "../../assets/dmig16.jpg";

const OurDesigns = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const designImages = [
    {
      id: 1,
      image: dimg1,
      title: "Elegant Modular Kitchen",
    },
    {
      id: 2,
      image: dimg2,
      title: "Contemporary Wooden Kitchen",
    },
    {
      id: 3,
      image: dimg3,
      title: "Minimalist Living Space",
    },
    {
      id: 4,
      image: dimg4,
      title: "Classic Heritage Kitchen",
    },
    {
      id: 5,
      image: dimg5,
      title: "Modern Bathroom Retreat",
    },
    {
      id: 6,
      image: dimg6,
      title: "Luxury Living Lounge",
    },
    {
      id: 7,
      image: dimg7,
      title: "Contemporary Dining Space",
    },
    {
      id: 8,
      image: dimg8,
      title: "Traditional Family Living",
    },
    {
      id: 9,
      image: dimg9,
      title: "Pastel Modular Kitchen",
    },
    {
      id: 10,
      image: dimg10,
      title: "Premium Modern Kitchen",
    },
    {
      id: 11,
      image: dimg11,
      title: "Warm Wooden Kitchen",
    },
    {
      id: 12,
      image: dimg12,
      title: "Elegant Classic Living",
    },
    {
      id: 13,
      image: dimg13,
      title: "Modern Luxury Interior",
    },
    {
      id: 14,
      image: dimg14,
      title: "Contemporary Urban Interior",
    },
    {
      id: 15,
      image: dimg15,
      title: "Modern Bathroom Interior",
    },
    {
      id: 16,
      image: dimg16,
      title: "Classic Traditional Interior",
    },
  ];

  const handleImageLoad = (id) => {
    setLoadedImages((previous) => ({
      ...previous,
      [id]: true,
    }));
  };

  return (
    <div className="designs__page">

      {/* Navbar */}
      <nav className="designs__navbar">

        <Link
          to="/portfolio"
          className="designs__back"
        >
          <FaArrowLeft />
          <span>Back</span>
        </Link>

        <h2 className="designs__nav__title">
          Our Designs
        </h2>

        <div className="designs__nav__spacer"></div>

      </nav>


      {/* Main */}
      <main className="designs__main">

        <div className="designs__container">

          {/* Header */}
          <div className="designs__header">

            <span>
              OUR DESIGNS
            </span>

            <h1>
              Explore Our Designs
            </h1>

            <p>
              Explore our collection of architectural designs created
              with functionality, creativity, and modern living in mind.
            </p>

          </div>


          {/* Designs Grid */}
          <div className="designs__grid">

            {designImages.map((design) => (

              <div
                className="designs__card"
                key={design.id}
              >

                {/* Loading */}
                {!loadedImages[design.id] && (
                  <div className="designs__image__loader">

                    <div className="designs__spinner"></div>

                    <span>Loading...</span>

                  </div>
                )}


                {/* Image */}
                <img
                  src={design.image}
                  alt={design.title}
                  loading="lazy"

                  className={
                    loadedImages[design.id]
                      ? "designs__loaded"
                      : "designs__loading"
                  }

                  onLoad={() => handleImageLoad(design.id)}
                />


                {/* Title Overlay */}
                {loadedImages[design.id] && (
                  <div className="designs__overlay">

                    <h3>
                      {design.title}
                    </h3>

                  </div>
                )}

              </div>

            ))}

          </div>


          {/* Custom Designs */}
          <div className="designs__custom">

            <span className="designs__custom__label">
              CUSTOM DESIGNS
            </span>

            <h2>
              Have Something Different in Mind?
            </h2>

            <p>
              We also provide customized designs based on your specific
              requirements, preferences, available space, and budget.
              Share your ideas with us, and AR INFRA GROUP will help
              transform your vision into a design made especially for you.
            </p>

            <Link
              to="/"
              className="designs__custom__btn"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </main>


      {/* Footer */}
      <footer className="designs__footer">

        <p>
          © {new Date().getFullYear()} AR INFRA GROUP. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
};

export default OurDesigns;