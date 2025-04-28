import { testimonialOne as data } from "@/data/testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import shapeOne from "/assets/imgs/shape/ts-shape-1.webp";
import shapeTwo from "/assets/imgs/shape/ts-shape-2.webp";
import shapeThree from "/assets/imgs/shape/ts-shape-3.webp";
import shapeFour from "/assets/imgs/shape/ts-shape-4.webp";

export default function TestimonialOne() {
  const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 2000,
    freeMode: true,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        lidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="testimonial__area pt-110 pb-130">
      <div className="testimonial__wrapper">
        <div className="testimonial__title-wrap text-center">
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title}
              {data.highlightedTitle && <span> {data.highlightedTitle}</span>}
            </h2>
          )}
        </div>
        {data.testimonials && data.testimonials.length > 0 && (
          <Swiper {...swiperOptions} className="swiper testimonial__slider">
            {data.testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide testimonial__slide"
              >
                <img src={testimonial.quoteTopIcon} alt="Icon" />
                <p className="testimonial__content">
                  {testimonial.description}
                </p>
                <div className="testimonial__client-info">
                  <div className="testimonial__client-img">
                    <img src={testimonial.image} alt="Image" />
                  </div>
                  <div className="testimonil__text">
                    <h3 className="testimonial__client-name">
                      {testimonial.name}
                    </h3>
                    <h4 className="testimonial__designation">
                      {testimonial.designation}
                    </h4>
                  </div>
                </div>
                <img
                  className="testimonial__icon-btm"
                  src={testimonial.quoteBottomIcon}
                  alt="Icon"
                />
              </SwiperSlide>
            ))}
            {/* <!-- Naviagation  --> */}
            <div className="testimonial__btnWrap">
              <button className="testimonial__btn testimonial-button-prev">
                <img
                  className="testimonial__Navicon"
                  src={data.navigation.leftIcon}
                  alt="Icon"
                />
              </button>
              <button className="testimonial__btn testimonial-button-next">
                <img
                  className="testimonial__Navicon"
                  src={data.navigation.rightIcon}
                  alt="Icon"
                />
              </button>
            </div>
            {/* <!-- Naviagation  --> */}
          </Swiper>
        )}
      </div>
      {/* <!-- Tetimonial Shape   --> */}
      <img className="testimonial__shape-1" src={shapeOne} alt="Shape" />
      <img
        className="testimonial__shape-2 moveBottom"
        src={shapeTwo}
        alt="Shape"
      />
      <img
        className="testimonial__shape-3 moveBottom"
        src={shapeThree}
        alt="Shape"
      />
      <img className="testimonial__shape-4" src={shapeFour} alt="Shape" />
    </section>
  );
}
