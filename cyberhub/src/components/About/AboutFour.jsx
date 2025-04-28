import { aboutFour as about } from "@/data/about";
import { Link } from "react-router-dom";

export default function AboutFour() {
  return (
    <section className="about__area-4 pt-130 pb-130">
      <div className="container-md">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-12">
            <div className="about__left-4">
              {about.title && (
                <h2 className="about__title-4 move-line-3d">
                  {about.title.sliceOne}
                  {about.title.sliceTwo && (
                    <span className="about__title-shape-4">
                      {about.title.sliceTwo}
                    </span>
                  )}
                </h2>
              )}
              {about.description && (
                <p className="about__content-4 move-line-3d" data-delay="0.4">
                  {about.description}
                </p>
              )}
              <div
                className="btn-wrap fade-slide bottom"
                data-delay="0.4"
                data-duration="1.5"
              >
                <Link
                  className="btn-primary btn-hover-shadow "
                  to={about.btn.link}
                >
                  {about.btn.text}
                  {about.btn.icon && (
                    <img
                      className="btn-arrow-right"
                      src={about.btn.icon}
                      alt="Icon"
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-12">
            <div className="about__right-4 text-right">
              <img className="about__img-4" src={about.image} alt="About" />
              <img
                className="about__shapeFour-1 moveLeft"
                src={about.shapeOne}
                alt="Shape"
              />
              <img
                className="about__shapeFour-2 moveBottom"
                src={about.shapeTwo}
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
