import "./Services.css";

import { Link } from "react-scroll";
import { sketch } from "../../assets";
import { services } from "../../source";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {

  const container = useRef();

  useGSAP(() => {

    gsap.timeline({
      delay: 0.5,

      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    })

      // Heading - Left to Right
      .fromTo(
        ".services__header .section__header .sub__heading",
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1
        }
      )

      // Description - Left to Right
      .fromTo(
        ".services__header .section__header .description",
        {
          x: -50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1
        },
        "<0.2"
      )

      // Contact Button - Bottom to Top
      .fromTo(
        ".services__header .section__header .btn",
        {
          y:0,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1
        }
      )

      // Image - Right to Left
      .fromTo(
        ".image__contain",
        {
          x: 50,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1
        },
        "<"
      )

      // Service Cards - Bottom to Top
      .fromTo(
        ".service",
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.5
        }
      );

  }, { scope: container });


  return (
    <section id="services" ref={container}>

      <div className="overlay">

        <div className="container">

          {/* Services Header */}

          <div className="grid services__header">

            <div className="section__header">

              <h2 className="sub__heading">
                Our Services.
              </h2>

              <p className="description">
                At{" "}
                <span style={{ color: "#ff4400" }}>
                  AR Infra Group,
                </span>{" "}
                we are driven by a passion for creating outstanding
                construction projects that stand the test of time.
                Whether you’re envisioning a luxury residential home,
                a cutting-edge commercial space, or an industrial facility,
                we bring expertise, innovation, and attention to detail
                to every project.
              </p>

              <Link
                to="contact"
                smooth={true}
                className="btn primary"
              >
                Contact us
              </Link>

            </div>


            <div className="image__contain">

              <img
                src={sketch}
                alt="Construction sketch"
              />

            </div>

          </div>


          {/* Services Cards */}

          <div className="grid services">

            {services.map((service, index) => (

              <div
                className="service"
                key={index}
              >

                <div className="flex top">

                  <div className="flex__center icon__container">
                    {service.icon}
                  </div>

                  <h4 className="title">
                    {service.title}
                  </h4>

                </div>


                <div className="middle">

                  <p className="description">
                    {service.description}
                  </p>

                </div>


                <div className="flex bottom">

                  <Link
                    to="contact"
                    smooth={true}
                    className="btn"
                  >
                    Reach out
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;