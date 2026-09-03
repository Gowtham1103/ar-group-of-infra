import { about } from "../../assets";
import "./About.css";
import { keypoints } from "../../source";
import { FaCheck } from "react-icons/fa";
import Achievement from "../../components/Achievement";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";


function About() {
    const container = useRef();

  useGSAP(() => {

    gsap.timeline({
      delay: 0.3,

      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    })

     .fromTo(".about__image",{x: -50, opacity:0},{x:0,opacity:1})
     .fromTo([".title","sub__heading",".section__header .description","keypoint"],
      {opacity:0},
      {opacity:1, stagger:0.15}
     )

  }, { scope: container });
  return (
    <section id="about" ref={container}>
      <div className="container">

        <div className="grid about__content">

          {/* Image */}
          <div className="about__image">
            <img src={about} alt="AR Group of Infra" />
          </div>

          {/* Content */}
          <div className="about__info">

            <h3 className="title primary">About Us</h3>

            <h2 className="sub__title">
              Creating spaces, building futures
            </h2>

            <p className="description">
              <span style={{ color: "red" }}>
                At AR Group of Infra,
              </span>{" "}
              We have successfully completed 75+ projects, delivering quality
              construction solutions with precision, innovation, and dedication.
              With a growing community of happy and trusted clients, we continue
              to build lasting relationships and turn visions into remarkable
              spaces.
            </p>

            <h3 className="sub__title">What We Stand For</h3>

            {keypoints.map((keypoint, index) => (
              <div className="flex point" key={index}>

                <div className="flex__center primary icon__container">
                  <FaCheck />
                </div>

                <div>
                  <h4>{keypoint.title}</h4>
                  <p className="muted">
                    {keypoint.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Achievements */}
        <div className="achieve">

          <div className="overlay grid">

            <div className="section__header">
              <h3 className="title primary">
                Our Achievements
              </h3>

              <h2 className="sub__heading">
                Transforming Vision into Reality
              </h2>
            </div>

            <div>
              <Achievement />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;