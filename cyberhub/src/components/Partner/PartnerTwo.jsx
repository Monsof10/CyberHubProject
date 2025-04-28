import { partnerThree as partner } from "@/data/partner";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PartnerTwo() {
  const swiperOptions = {
    slidesPerView: 4,
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
        slidesPerView: 1,
        spaceBetween: 20,
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 100,
      },
    },
  };
  return (
    <div className="partner__area-6 pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 text-md-start text-center mb-md-0 mb-4">
            <h4 className="title">
              {partner.title.sliceOne} <br /> {partner.title.sliceTwo}
            </h4>
          </div>
          <div className="col-lg-9 col-md-8 align-self-center">
            {partner.clients && partner.clients.length > 0 && (
              <Swiper {...swiperOptions} className="swiper client-slider-six">
                {partner.clients.map((client, index) => (
                  <SwiperSlide
                    key={index}
                    className="swiper-slide client__slide text-center"
                  >
                    {client && <img src={client} alt="Logo" />}
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
