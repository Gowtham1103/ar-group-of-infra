import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_lmdcw3q",
        "template_d778aks",
        form.current,
        {
          publicKey: "daUYDqtxCSfhPkvof",
        }
      )
      .then(
        () => {
          console.log("Email sent successfully!");

          setStatus("success");

          form.current.reset();
        },
        (error) => {
          console.error("Email failed:", error);

          setStatus("error");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">

        {/* ================= FORM ================= */}

        <form
          ref={form}
          className="form"
          onSubmit={sendEmail}
        >
          <div className="form__top">
            <span className="contact__label">
              CONTACT US
            </span>

            <h3 className="sub__heading">
              Get in Touch
            </h3>

            <p className="muted">
              Have a project in mind or need expert advice? We're here to help.
              Share your requirements with us and our team will get back to you.
            </p>
          </div>

          <div className="form__middle">
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              className="control"
              required
            />

            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="control"
              required
            />

            <input
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              className="control"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              className="control"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form__bottom">
            <button
              type="submit"
              className="btn primary"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </button>
          </div>

          {status === "success" && (
            <p className="form__success">
              ✓ Message sent successfully! We'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="form__error">
              ✕ Something went wrong. Please try again.
            </p>
          )}
        </form>


        {/* ================= CONTACT DETAILS ================= */}

        <div className="contact__panel">

          <div className="contact__panel__top">
            <span className="contact__label">
              LET'S TALK
            </span>

            <h2>
              Start a Conversation About Your Project.
            </h2>

            <p>
              From new construction and interiors to renovation and
              restoration, our team is ready to understand your requirements
              and help you plan the right solution.
            </p>
          </div>


          <div className="contact__details">

            {/* Phone */}
            <div className="contact__detail">

              <div className="contact__detail__icon">
                <FiPhoneCall />
              </div>

              <div className="contact__detail__content">
                <span className="contact__detail__label">
                  CALL US
                </span>

                <a href="tel:+919361309107">
                  +91 93613 09107
                </a>

                <a href="tel:+918754437544">
                  +91 87544 37544
                </a>
              </div>

              <FiArrowUpRight className="contact__arrow" />

            </div>


            {/* Email */}
            <div className="contact__detail">

              <div className="contact__detail__icon">
                <MdOutlineAlternateEmail />
              </div>

              <div className="contact__detail__content">
                <span className="contact__detail__label">
                  EMAIL
                </span>

                <a href="mailto:infoargroupofinfra@gmail.com">
                  infoargroupofinfra@gmail.com
                </a>
              </div>

              <FiArrowUpRight className="contact__arrow" />

            </div>


            {/* Location */}
            <div className="contact__detail">

              <div className="contact__detail__icon">
                <FaLocationDot />
              </div>

              <div className="contact__detail__content">
                <span className="contact__detail__label">
                  SERVICE LOCATION
                </span>

                <p>
                  Chennai, Tamil Nadu
                </p>
              </div>

            </div>

          </div>


          <div className="contact__note">
            <div className="contact__note__line"></div>

            <p>
              Tell us what you're planning. We'll help you understand the
              possibilities, requirements, and next steps for your project.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;