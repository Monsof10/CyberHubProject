import { heroOne as hero } from "@/data/hero";

import ShapeLeft from "/assets/imgs/shape/shape-left.webp";
import ShapeRight from "/assets/imgs/shape/shape-right.webp";
import ShapeBottom from "/assets/imgs/shape/shape-btm.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

export default function HeroOne() {
  const swiperOptions = {
    direction: "vertical",
    effect: "slide",
    slidesPerView: "auto",
    speed: 0,
    loop: false,
    autoHeight: true,
    autoplay: false,
    allowTouchMove: false,
    modules: [FreeMode],
  };
  return (
    <section className="hero__area">
      <div className="hero__wrapper">
        <div className="hero__left">
          {hero.title && (
            <h1 className="hero__title move-line-3d">
              {hero.title.sliceOne}
              <span className="course-shape"> {hero.title.sliceTwo} </span>
              {hero.title.sliceThree} <span> {hero.title.sliceFour}</span>
            </h1>
          )}
          {hero.description && (
            <p className="hero__content fade-slide top" data-slide-amount="20">
              {hero.description}
            </p>
          )}
          {hero.btn && (
            <div className="fade-slide bottom">
              <Link
                className="btn-primary btn-hover-shadow"
                data-slide-amount="20"
                to={hero.btn.link}
              >
                {hero.btn.title}
                <img
                  className="btn-arrow-icon"
                  src={hero.btn.icon}
                  alt="Icon"
                />
              </Link>
            </div>
          )}
          {/* <!-- Reveiw  --> */}
          {hero.review && (
            <div className="hero__review fade-slide bottom" data-delay="0.8">
              {hero.review.icon && <img src={hero.review.icon} alt="Icon" />}
              {hero.review.title && (
                <p className="hero__review-text">{hero.review.title}</p>
              )}
              {hero.review.feedbackIcon && (
                <img src={hero.review.feedbackIcon} alt="Icon" />
              )}
            </div>
          )}
        </div>

        <Swiper
          {...swiperOptions}
          className="swiper verticle-slider hero__right"
        >
          {hero.slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="verticle-slide-inner">
                {slide.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`hero_img_height hero__img-${idx + 1}`}
                  >
                    {item.image && (
                      <img className="main-img" src={item.image} alt="Image" />
                    )}
                    {item.widget && (
                      <img
                        className={`${item.widget.classNames}`}
                        src={item.widget.image}
                        alt="Shape"
                      />
                    )}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <!-- Shape image  --> */}
      <img className="hero__shape-left moveBottom" src={ShapeLeft} alt="Icon" />
      <img
        className="hero__shape-right moveBottom"
        src={ShapeRight}
        alt="Icon"
      />
      <img className="hero__shape-btm moveLeft" src={ShapeBottom} alt="Icon" />
    </section>
  );
}
