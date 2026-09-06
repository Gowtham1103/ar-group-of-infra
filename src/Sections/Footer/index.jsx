import Logo from "../../components/Logo";
import "./Footer.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__container">

        {/* Brand */}
        <div className="footer__brand">
          <Logo />

          <p className="footer__description">
            Building quality spaces with thoughtful design,
            reliable workmanship, and attention to every detail.
          </p>
        </div>


        {/* CTA */}
        <div className="footer__cta">

          <span className="footer__label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <p>
            Tell us about your construction, interior,
            renovation, or restoration requirements.
          </p>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="footer__button"
          >
            Start Your Project
            <FiArrowUpRight />
          </Link>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer__bottom">

        <p>
          © {new Date().getFullYear()} AR INFRA GROUP. All Rights Reserved.
        </p>

        <p className="footer__tagline">
          Building Dreams. Creating Spaces.
        </p>

      </div>
    </footer>
  );
}

export default Footer;