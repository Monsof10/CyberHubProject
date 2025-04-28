import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogThree as blogs } from "@/data/blog";
import BlogCardThree from "../Card/Blog/BlogCardThree";
import { Link } from "react-router-dom";

export default function BlogThree() {
  const swiperOptions = {
    slidesPerView: 1,
    speed: 4000,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    modules: [Autoplay, Pagination],
  };
  return (
    <div className="blog__area-4 pt-120 pb-110">
      <div className="container">
        <div className="blog__item-list-wrap">
          <Swiper {...swiperOptions} className="swiper blog-slider-6">
            <div className="swiper-wrapper">
              {blogs.map((blog, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <BlogCardThree blog={blog} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="blog__post-count-4">
          <div className="count-number">
            <span className="swiper-pagination"></span>
          </div>
          <div className="btn-wrap">
            <Link className="read-more-btn" to="blogs">
              <span>
                View <br /> All Post
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50259 2.55623L1.05882 9L0 7.94119L6.44378 1.4974H0.764291V0H9V8.23573H7.50259V2.55623Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
