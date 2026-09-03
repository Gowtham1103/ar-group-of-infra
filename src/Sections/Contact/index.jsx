import React from "react";
import "./Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <form className="form">
          <div className="form__top">
            <h3 className="sub__heading">Get in Touch</h3>
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
            />

            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="control"
            />

            <input
              type="tel"
              placeholder="Phone number"
              name="phoneNumber"
              className="control"
            />

            <textarea
              name="message"
              placeholder="Your message"
              className="control"
            ></textarea>
          </div>

          <div className="form__bottom">
            <button className="btn primary">Send Message</button>
          </div>
        </form>

        <div className="contact__infos">
          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <MdOutlineAlternateEmail />
            </div>

            <div className="details">
              <h4>Email Us</h4>
              <p className="muted">Fast and Reliable Support</p>
              <p>
              <a href="mailto:mradinuba@gmail.com">infoargroup@gmail.com</a>
            </p>
            </div>

            
          </div>

          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <FaLocationCrosshairs />
            </div>

            <div className="details">
              <h4>Located in</h4>
              <p className="muted">For enquiries, connect with us through call or email.</p>
              <p>
               Chennai, Tamilnadu
            </p>
            </div>

            
          </div>

          <div className="flex contact__info">
            <div className="flex__center icon__container">
              <FiPhoneCall />
            </div>

            <div className="details">
              <h4>Phone number</h4>
              <p className="muted">Give Us a call</p>
              <p>+91 93613 09107</p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;