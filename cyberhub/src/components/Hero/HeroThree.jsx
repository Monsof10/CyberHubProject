import { heroThree as hero } from "@/data/hero";
import { Link } from "react-router-dom";

export default function HeroThree() {
  return (
    <div className="hero__area-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11">
            <div className="hero__inner-6 text-center">
              {hero.title && (
                <h1 className="hero__title-6">
                  {hero.title.sliceOne}
                  <span className="split_chars">{hero.title.sliceTwo}</span>
                  {hero.shapeOne && (
                    <img
                      className="shape-image-1 fade"
                      src={hero.shapeOne}
                      alt="img"
                    />
                  )}
                  {hero.shapeTwo && (
                    <img
                      className="shape-image-2 rotate"
                      src={hero.shapeTwo}
                      alt="img"
                    />
                  )}
                </h1>
              )}
              {hero.description && (
                <p className="hero__content-6 fade-slide bottom">
                  {hero.description}
                </p>
              )}
              {hero.btn && (
                <div className="fade-slide bottom" data-delay="0.8">
                  <Link
                    className="btn-primary btn-hover-effect border-radius-50"
                    to={hero.btn.link}
                  >
                    {hero.btn.text}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {hero.shapeThree && (
        <img
          className="hero-shape-image-6-1 moveBottom"
          src={hero.shapeThree}
          alt="img"
        />
      )}
      {hero.shapeFour && (
        <img
          className="hero-shape-image-6-2 moveBottom"
          src={hero.shapeFour}
          alt="img"
        />
      )}
    </div>
  );
}
