import { aboutTwo as about } from "@/data/about";
import { Link } from "react-router-dom";

export default function AboutTwo() {
  return (
    <section className="about__area-3 pt-160 pb-60">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="about__left-3 fade-slide left show-lg">
              {about.image && (
                <img className="about__img-3" src={about.image} alt="About" />
              )}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="about__right-3">
              {about.title && (
                <h2
                  className="section-title-4 split_chars"
                  data-duration="0.5"
                  data-stagger="0.04"
                >
                  {about.title}
                </h2>
              )}
              {about.description && (
                <p
                  className="about__content-3 split_chars"
                  data-duration="0.2"
                  data-translate-x="20"
                  data-translate-y="20"
                  data-stagger="0.03"
                >
                  {about.description}
                </p>
              )}
              {about.features && about.features.length > 0 && (
                <div className="about__list-3">
                  {about.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`about__listItem-3 ${feature.animation.name}`}
                      data-delay={feature.animation.delay}
                    >
                      <div className="about__icon-3">
                        {feature.icon && <img src={feature.icon} alt="Icon" />}
                      </div>
                      <div className="about__content-3">
                        {feature.name && (
                          <h3 className="about__title-3">{feature.name}</h3>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="btn-wrap fade-slide bottom" data-delay="1.2">
                {about.btn.link && (
                  <Link
                    className="btn-primary-3 text-white btn-hover-bubble"
                    to={about.btn.link}
                  >
                    {about.btn.text}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shape  --> */}
      {about.shapeOne && (
        <img className="about__shapeThree-1" src={about.shapeOne} alt="Shape" />
      )}
      {about.shapeTwo && (
        <img
          className="about__shapeThree-2 moveBottom"
          src={about.shapeTwo}
          alt="Shape"
        />
      )}
      {about.shapeThree && (
        <img
          className="about__shapeThree-3 rotate"
          src={about.shapeThree}
          alt="Shape"
        />
      )}
      {about.shapeFour && (
        <img
          className="about__shapeThree-4 moveLeft"
          src={about.shapeFour}
          alt="Shape"
        />
      )}
      {about.shapeFive && (
        <img
          className="about__shapeThree-5 moveBottom"
          src={about.shapeFive}
          alt="Shape"
        />
      )}
      {about.shapeSix && (
        <img
          className="about__shapeThree-6 moveBottom"
          src={about.shapeSix}
          alt="Shape"
        />
      )}
      {about.shapeSeven && (
        <img
          className="about__shapeThree-7 moveRight"
          src={about.shapeSeven}
          alt="Shape"
        />
      )}
      {about.shapeEight && (
        <img
          className="about__shapeThree-8"
          src={about.shapeEight}
          alt="Shape"
        />
      )}
    </section>
  );
}
