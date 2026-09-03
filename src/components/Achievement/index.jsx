import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

import "./Achievement.css";

import { useState, useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Achievement() {

  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [experience, setExperience] = useState(0);

  const container = useRef();

  const updateData = () => {
    setProjects(75);
    setSatisfaction(93);
    setExperience(5);
  };

  useGSAP(() => {

    gsap.timeline({
      delay: 0.5,

      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
        onEnter: updateData,
        once: true,
      },
    })

      .fromTo(
        ".achievement__card",
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
        }
      );

  }, { scope: container });


  return (
    <div className="flex achievements" ref={container}>

      {/* 1 */}
      <div className="achievement__card">

        <h3 className="title">
          Completed
        </h3>

        <div className="flex">

          <ReactOdometer
            value={projects}
            className="heading"
          />

          <h1 className="heading">
            +
          </h1>

        </div>

        <p>
          Projects Across Diverse Sectors
        </p>

      </div>


      {/* 2 */}
      <div className="achievement__card">

        <h3 className="title">
          Achieved
        </h3>

        <div className="flex">

          <ReactOdometer
            value={satisfaction}
            className="heading"
          />

          <h1 className="heading">
            %
          </h1>

        </div>

        <p>
          Client Satisfaction Rate
        </p>

      </div>


      {/* 3 */}
      <div className="achievement__card">

        <h3 className="title">
          Over
        </h3>

        <div className="flex">

          <ReactOdometer
            value={experience}
            className="heading"
          />

          <h1 className="heading">
            +
          </h1>

        </div>

        <p>
          Years of Operations
        </p>

      </div>

    </div>
  );
}

export default Achievement;