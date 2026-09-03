import { Link } from "react-scroll";
import "./Testimonial.css";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../source";
import { Autoplay } from "swiper/modules";

function Testimonial() {
    return (
        <section id="testimonials">
            <div className="container">

                <div className="section__header">
                    <h3 className="title">
                        Building with Excellence
                    </h3>

                    <p className="description">
                        Meet the experts who bring excellence and innovation to every project.
                        Get to know our dedicated team making your vision a reality.
                    </p>

                    <Link
                        to="contact"
                        className="btn primary"
                    >
                        Let's Talk Now <FaArrowRight />
                    </Link>
                </div>

                <div>
                    <Swiper 
                    grabCursor={true}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    speed={5000}
                    spaceBetween={15}
                    modules={[Autoplay]}
                    breakpoints={{
                        600:{slidesPerView:2}
                    }}
                    className="testimonialas"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide
                                className="testimonial__card"
                                key={index}
                            >
                                <div className="flex top">

                                    <div className="profile">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </div>

                                    <div className="details">
                                        <h4>{item.name}</h4>

                                        <div className="flex star__container">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>

                                </div>

                                <div className="bottom">
                                    <p className="muted">
                                        {item.review}
                                    </p>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}

export default Testimonial;