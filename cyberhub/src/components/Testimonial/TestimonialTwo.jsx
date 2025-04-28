import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ShapeOne from "/assets/imgs/team/ts-man.webp";
import ShapeTwo from "/assets/imgs/shape/ts-shape-btm.webp";
import ShapeThree from "/assets/imgs/shape/ts-sky-1.webp";
import ShapeFour from "/assets/imgs/shape/ts-sky-2.webp";
import ShapeFive from "/assets/imgs/shape/ts-sky-3.webp";
import ShapeSix from "/assets/imgs/shape/ts-sky-4.webp";

import { testimonialTwo as testimonials } from "@/data/testimonial";
import { partnerTwo as partners } from "@/data/partner";
export default function TestimonialTwo() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    modules: [Autoplay],
  };
  return (
    <section className="testimonial__area-4">
      <div className="container">
        <div className="testimonial__wrapper-4">
          {testimonials && testimonials.length > 0 && (
            <Swiper
              {...swiperOptions}
              className="swiper testimonial__activeFour"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  {testimonial.shapeOne && (
                    <img
                      className="testimonial__review-4"
                      src={testimonial.shapeOne}
                      alt="Icon"
                    />
                  )}
                  {testimonial.description && (
                    <p className="testimonial__content-4">
                      {testimonial.description}
                    </p>
                  )}
                  {testimonial.shapeTwo && (
                    <img
                      className="testimonial__border-4"
                      src={testimonial.shapeTwo}
                      alt="Shape"
                    />
                  )}
                  <div className="testimonial__clientInfo-4 d-flex align-items-center justify-content-md-center gap-3">
                    <div className="Testimonial__clientImage-4">
                      {testimonial.image && (
                        <img src={testimonial.image} alt="Team" />
                      )}
                    </div>
                    <div className="testimonial__text-4">
                      {testimonial.name && (
                        <h2 className="testimonial__clientName-4">
                          {testimonial.name}
                        </h2>
                      )}
                      {testimonial.designation && (
                        <h3 className="testimonial__designation-4">
                          {testimonial.designation}
                        </h3>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {/* <!-- Testimonial bottom  --> */}
          {partners && partners.length > 0 && (
            <div className="testimonial__btm-4">
              {partners.map((partner, index) => (
                <img key={index} src={partner} alt="Image" />
              ))}
            </div>
          )}
        </div>
      </div>
      <img className="testimonial__man-img" src={ShapeOne} alt="Image" />
      <img className="testimonial__btm-img" src={ShapeTwo} alt="Shape" />
      {/* <!-- Shape  --> */}
      <img
        className="testimonial__shapeFour-1 moveBottom"
        src={ShapeThree}
        alt="Shape"
      />
      <img
        className="testimonial__shapeFour-2 moveRight"
        src={ShapeFour}
        alt="Shape"
      />
      <img
        className="testimonial__shapeFour-3 moveLeft"
        src={ShapeFive}
        alt="Shape"
      />
      <img
        className="testimonial__shapeFour-4 moveBottom"
        src={ShapeSix}
        alt="Shape"
      />
    </section>
  );
}
