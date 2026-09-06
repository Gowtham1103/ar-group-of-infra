import { FaArrowRight } from "react-icons/fa";
import SocialHandles from "../../components/SocialHandles";
import "./Header.css";
import { Link } from "react-router-dom";
import { hero } from "../../assets";
import WhyChooseUs from "../../components/WhyChooseUs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Header() {
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({ delay: 0.2 })

        .fromTo(
          [".heading", ".description"],
          {
            y: -30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
          }
        )

        .fromTo(
          ".social__handles",
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )

        .fromTo(
          ".image__contain",
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )

        .fromTo(
          [".why__choose__us", ".why__item"],
          {
            y: 10,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
          }
        );
    },
    {
      scope: container,
    }
  );

  return (
    <section
      id="header"
      className="blur__effect"
      ref={container}
    >
      <div className="overlay">
        <div className="container">

          <div className="grid">

            <div className="content">

              <h1 className="heading">
                We Construct Your Dream Spaces.
              </h1>

              <p className="description">
                We deliver complete construction solutions, ensuring quality
                and reliability from start to finish.
              </p>

              <SocialHandles />

              <Link
                to="/portfolio"
                className="btn primary header__portfolio__btn"
              >
                <span>Check our Portfolio</span>

                <FaArrowRight className="header__portfolio__icon" />
              </Link>

            </div>


            <div className="image__contain">

              <img
                src={hero}
                alt="AR INFRA GROUP Construction"
              />

            </div>

          </div>

          <WhyChooseUs />

        </div>
      </div>
    </section>
  );
}

export default Header;