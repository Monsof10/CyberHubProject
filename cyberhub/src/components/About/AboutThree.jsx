import { aboutThree as about } from "@/data/about";
import { Link } from "react-router-dom";
export default function AboutThree() {
  return (
    <div className="about__area-6 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-9 align-self-center text-lg-start text-center pb-lg-0 pb-4">
            {about.title && (
              <h2 className="section-title-6 move-line-3d">{about.title}</h2>
            )}
            {about.descriptionOne && (
              <p
                className="section-content mb-xl-4 mb-3 fade-slide bottom"
                data-delay="0.6"
              >
                {about.descriptionOne}
              </p>
            )}
            {about.descriptionTwo && (
              <p className="section-content fade-slide bottom" data-delay="0.8">
                {about.descriptionTwo}
              </p>
            )}
            {about.subTitle && (
              <div className="fade-slide bottom" data-delay="1">
                <Link
                  className="btn-style-6 btn-hover-effect border-radius-50"
                  to={about.link}
                >
                  {about.subTitle}
                </Link>
              </div>
            )}
          </div>
          <div className="col-lg-6 col-sm-9 mt-lg-0 mt-5">
            <div className="thumb-6 fade ps-xl-5">
              {about.image && (
                <img className="w-100" src={about.image} alt="img" />
              )}

              {/* <!-- shape image --> */}
              {about.shapeOne && (
                <img
                  className="position-absolute animate-img-1 hand-shake-anim fade"
                  src={about.shapeOne}
                  alt="img"
                />
              )}
              {about.shapeTwo && (
                <img
                  className="position-absolute animate-img-2 fade-slide left"
                  src={about.shapeTwo}
                  alt="img"
                />
              )}
              {about.shapeThree && (
                <img
                  className="position-absolute animate-img-3 moveBottom"
                  src={about.shapeThree}
                  alt="img"
                />
              )}
              {about.shapeFour && (
                <img
                  className="position-absolute animate-img-4 moveBottom2 fade-slide left"
                  src={about.shapeFour}
                  alt="img"
                />
              )}
              {about.shapeFive && (
                <img
                  className="position-absolute animate-img-5"
                  src={about.shapeFive}
                  alt="img"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
