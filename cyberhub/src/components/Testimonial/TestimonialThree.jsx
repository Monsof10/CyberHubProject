import { testimonialThree as data } from "@/data/testimonial";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialThree() {
  const swiperOptions = {
    slidesPerView: 1,
    speed: 2000,
    loop: true,
    autoplay: false,
    navigation: {
      prevEl: ".testimonial-6-button-prev",
      nextEl: ".testimonial-6-button-next",
    },
    modules: [Navigation, Pagination],
  };
  return (
    <div className="testimonial__area-6 pt-110 pb-120">
      <div className="container">
        {data.title && (
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-6 text-center">
              <h2 className="section-title-6 pb-60 move-line-3d">
                {data.title}
              </h2>
            </div>
          </div>
        )}
        <div className="testimonial-slider-6-wrap">
          {data.testimonials && data.testimonials.length > 0 && (
            <Swiper {...swiperOptions} className="swiper testimonial-slider-6">
              {data.testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="swiper-slide testimonial__item-wrap-6"
                >
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      {testimonial.image && (
                        <div
                          className="thumb"
                          style={{
                            maskImage:
                              "url('./assets/imgs/thumb/testimonial-6-mask.webp')",
                          }}
                        >
                          <img
                            className="testimonial__author-img-6"
                            src={testimonial.image}
                            alt="Icon"
                          />
                        </div>
                      )}
                    </div>
                    <div className="col-lg-8 align-self-center">
                      <div className="details">
                        {testimonial.title && (
                          <h3 className="title text-white">
                            {testimonial.title}
                          </h3>
                        )}
                        {testimonial.name && (
                          <h4 className="name text-white">
                            {testimonial.name}
                          </h4>
                        )}
                        {testimonial.designation && (
                          <span className="designation">
                            {testimonial.designation}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {data.shapeOne && (
            <img
              className="position-absolute shape-img-1"
              src={data.shapeOne}
              alt="shape"
            />
          )}
          {data.shapeTwo && (
            <img
              className="position-absolute shape-img-2 moveLeft"
              src={data.shapeTwo}
              alt="shape"
            />
          )}
          {data.shapeThree && (
            <img
              className="position-absolute shape-img-3 moveBottom"
              src={data.shapeThree}
              alt="shape"
            />
          )}
          {data.shapeFour && (
            <img
              className="position-absolute shape-img-4 moveLeft"
              src={data.shapeFour}
              alt="shape"
            />
          )}
        </div>
        <div className="testimonial__btnWrap mb-md-0 mb-4 text-center mt-4">
          <button className="testimonial-6-button-prev testimonial-6-button">
            <svg
              width="31"
              height="27"
              viewBox="0 0 31 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.74913 1.6866L11.7225 0.810547L11.9261 1.54515C12.5295 3.72298 12.7542 7.0927 11.2378 10.0039C10.8616 10.7262 10.3868 11.4033 9.8035 12.0148L30.5078 12.0148V15.2036L9.8035 15.2036C10.3868 15.8151 10.8616 16.4922 11.2378 17.2145C12.7542 20.1257 12.5295 23.4955 11.9261 25.6733L11.7225 26.4079L8.74913 25.5318L8.95267 24.7972C9.42284 23.1003 9.52059 20.6568 8.51353 18.7235C7.58716 16.945 5.51529 15.206 0.785048 15.2036L0.775824 15.2037L0.764334 15.2036L0.0347862 15.192V12.0148H0.775673C5.51285 12.0148 7.58656 10.2745 8.51353 8.49497C9.52059 6.56164 9.42284 4.11813 8.95267 2.42119L8.74913 1.6866Z"
                fill="#555555"
              />
            </svg>
          </button>
          <button className="testimonial-6-button-next testimonial-6-button">
            <svg
              width="31"
              height="27"
              viewBox="0 0 31 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.8993 1.6866L18.9259 0.810547L18.7224 1.54515C18.1189 3.72298 17.8942 7.0927 19.4106 10.0039C19.7869 10.7262 20.2616 11.4033 20.8449 12.0148L0.140625 12.0148V15.2036L20.8449 15.2036C20.2616 15.8151 19.7869 16.4922 19.4106 17.2145C17.8942 20.1257 18.1189 23.4955 18.7224 25.6733L18.9259 26.4079L21.8993 25.5318L21.6958 24.7972C21.2256 23.1003 21.1279 20.6568 22.1349 18.7235C23.0613 16.945 25.1331 15.206 29.8634 15.2036L29.8726 15.2037L29.8841 15.2036L30.6137 15.192V12.0148H29.8728C25.1356 12.0148 23.0619 10.2745 22.1349 8.49497C21.1279 6.56164 21.2256 4.11813 21.6958 2.42119L21.8993 1.6866Z"
                fill="#555555"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
