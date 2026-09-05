
import { FaArrowTurnDown } from "react-icons/fa6";
import SocialHandles from "../../components/SocialHandles";
import "./Header.css";
import { Link } from "react-scroll";
import { hero } from "../../assets";
import WhyChooseUs from "../../components/WhyChooseUs";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Header() {
  const container = useRef();
  useGSAP(()=>{
    gsap.timeline({delay:0.2})
    .fromTo([".heading", "description"],
      {y:-30, opacity:0},
      {y:0,opacity:1,stagger:0.15}
    )
    .fromTo([".social__handles"]
      ,{x:-50, opacity:0}
      ,{x:0,opacity:1,stagger:0.5}
    )
    .fromTo(".image__container",{x:50, opacity: 0},{x:0, opacity:1})
    .fromTo([".why__choose__us",".why__item"],
      {y:10,opacity:0},
      {y:0,opacity:1,stagger:0.15}
    )
  },{scope:container})
  return (
    <section id="header" className="blur__effect" ref={container}>
      <div className="overlay">
        <div className="container">

          <div className="grid">

            <div className="content">
              <h1 className="heading">
                We Construct Your Dream Spaces.
              </h1>

              <p className="description">
                We deliver complete construction solutions, Interior Designs and Executions & ensuring quality
                and reliability from start to finish.
              </p>

              <SocialHandles />

              <Link
                to="contact"
                smooth={true}
                className="btn primary"
              >
                Get a quote <FaArrowTurnDown />
              </Link>
            </div>

            <div className="image__contain">
              <img src={hero} alt="" />
            </div>

          </div>

          <WhyChooseUs />

        </div>
      </div>
    </section>
  );
}

export default Header;

