import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller } from "swiper/modules";
import { categoryOne as categories } from "@/data/category";
import { useEffect } from "react";

export default function CategoryOne() {
  let swiperController = null;
  function setSwiperInstance(swiper) {
    swiperController = swiper;
  }
  const swiperOption = {
    slidesPerView: 8,
    spaceBetween: 30,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Controller],
    onSwiper: setSwiperInstance,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 9,
        spaceBetween: 30,
      },
    },
  };

  useEffect(() => {
    if (swiperController) {
      swiperController.slides.forEach((slide) => {
        slide.style.width = "auto";
        slide.style.display = "flex";
        slide.style.gap = "30px";
      });
    }
  }, [swiperController]);
  return (
    <section className="rollslider__area">
      {categories && categories.length > 0 && (
        <div className="rollslider__wrapper">
          <Swiper {...swiperOption} className="swiper roll-slider-active">
            {categories.map((category, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide rollslider__slide"
              >
                {category.title && (
                  <h2 className="rollslider__title">{category.title}</h2>
                )}
                {category.image && <img src={category.image} alt="Icon" />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
