import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partnerOne as partner } from "@/data/partner";

export default function PartnerOne() {
  const swiperOptions = {
    slidesPerView: 6,
    spaceBetween: 100,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 100,
      },
    },
  };
  return (
    <section className="client__area">
      <div className="container-lg">
        <div className="client__wrapper">
          {partner.items && partner.items.length > 0 && (
            <h2 className="client__title fade-slide bottom">{partner.title}</h2>
          )}
          {/* <!-- client slider--> */}
          {partner.items && partner.items.length > 0 && (
            <div className="client__inner">
              <Swiper {...swiperOptions} className="swiper client-slider">
                {partner.items.map((partner, index) => (
                  <SwiperSlide
                    key={index}
                    className="swiper-slide client__slide"
                  >
                    <img src={partner} alt="Logo" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
