import { Swiper, SwiperSlide } from "swiper/react";
import CourseCardOne from "../Card/Course/CourseCardOne";
import { Navigation } from "swiper/modules";
import PropTypes from "prop-types";

InstructorCourseOne.propTypes = {
  data: PropTypes.object,
};

export default function InstructorCourseOne({ data }) {
  const swiperOptions = {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1500,
    Centered: true,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    modules: [Navigation],
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="course__area pb-100">
      <div className="container">
        {data.title && <h2 className="course-title-5">{data.title}</h2>}
        <div className="swiper course__sliderActive">
          {data.courses && data.courses.length > 0 && (
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {data.courses.map((course, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <CourseCardOne course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
