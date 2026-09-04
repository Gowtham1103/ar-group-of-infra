
import React, { useRef, useState } from "react";
import "./Contact.css";

import emailjs from "@emailjs/browser";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

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

        <form
          ref={form}
          className="form"
          onSubmit={sendEmail}
        >

          <div className="form__top">

            <h3 className="sub__heading">
              Get in Touch
            </h3>

            <p className="muted">
              Have a project in mind or need expert advice? We're here to help!
              Reach out to our team for personalized consultations, inquiries,
              or to start your next big project today.
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
              placeholder="Your message"
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

        <div className="contact__infos">

          <div className="flex contact__info">

            <div className="flex__center icon__container">
              <MdOutlineAlternateEmail />
            </div>

            <div className="details">

              <h4>Email Us</h4>

              <p className="muted">
                Fast and Reliable Support
              </p>

              <p>
                <a href="mailto:infoargroupofinfra@gmail.com">
                  infoargroupofinfra@gmail.com
                </a>
              </p>

            </div>

          </div>

          <div className="flex contact__info">

            <div className="flex__center icon__container">
              <FaLocationCrosshairs />
            </div>

            <div className="details">

              <h4>Located in</h4>

              <p className="muted">
                For enquiries, connect with us through call or email.
              </p>

              <p>
                Chennai, Tamil Nadu
              </p>

            </div>

          </div>

          <div className="flex contact__info">

            <div className="flex__center icon__container">
              <FiPhoneCall />
            </div>

            <div className="details">

              <h4>Phone number</h4>

              <p className="muted">
                Give Us a call
              </p>

              <p>
                +91 93613 09107 <div>
                  +91 87544 37544
                </div>
                
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

