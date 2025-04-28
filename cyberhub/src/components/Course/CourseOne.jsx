import { courseOne as data } from "@/data/course";
import imagesLoaded from "imagesloaded";
import { useEffect, useRef, useState } from "react";
import CourseCardOne from "@/components/Card/Course/CourseCardOne";
import { Link } from "react-router-dom";
import Isotope from "isotope-layout";

export default function CourseOne() {
  const isotope = useRef();
  const [filterType, setFilterType] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".course__wrapper", {
      itemSelector: ".course_item_wrapper",
      percentPosition: true,
      masonry: {
        columnWidth: 0,
      },
      transitionDuration: "0.5s",
    });

    // Initialize imagesLoaded
    imagesLoaded(".course__wrapper").on("progress", () => {
      isotope.current.layout();
    });
  }, []);
  // handling filter key change
  useEffect(() => {
    if (isotope.current) {
      filterType === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterType}` });
    }
  }, [filterType]);

  const handleFilterTypeChange = (key) => () => setFilterType(key);
  return (
    <section className="course__area pt-110 pb-130">
      <div className="container">
        <div className="course__top-wrap">
          {data.title && (
            <h2 className="section-title move-line-3d">
              {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
            </h2>
          )}
          {/* <!-- Tab button   --> */}
          {data.filterOptions && data.filterOptions.length > 0 && (
            <div className="course__tab-wrap fade-slide right">
              {data.filterOptions.map((option, index) => (
                <button
                  key={index}
                  className={`course__btn ${
                    filterType == option.target ? "active" : ""
                  }`}
                  data-filter={`.${option.target}`}
                  onClick={handleFilterTypeChange(option.target)}
                >
                  {option.name}
                </button>
              ))}
            </div>
          )}
          {/* <!-- Tab button   --> */}
        </div>
        <div className="row course__wrapper fade-slide bottom">
          {data.courses.map((course, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-md-6 course_item_wrapper ${course.filterClass}`}
            >
              <CourseCardOne course={course} />
            </div>
          ))}
        </div>
        {data.more && (
          <div className="course__btm">
            <Link
              className="btn-primary btn-hover-shadow"
              to={data.more.link ?? "#"}
            >
              {data.more.name}
              {data.more.icon && (
                <img
                  className="btn-arrow-icon"
                  src={data.more.icon}
                  alt="Icon"
                />
              )}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
