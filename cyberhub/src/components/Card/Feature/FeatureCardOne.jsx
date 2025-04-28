import PropTypes from "prop-types";
import { Link } from "react-router-dom";

FeatureCardOne.propTypes = {
  feature: PropTypes.object,
};

export default function FeatureCardOne({ feature }) {
  return (
    <>
      <div
        className={`features__item-4 ${feature.animation.name} ${
          feature.classNames ?? ""
        } text-center`}
        data-delay={feature.animation.delay}
        data-duration="1.5"
      >
        {feature.title && (
          <h3 className="title text-white">
            {feature.title.sliceOne} <br /> {feature.title.sliceTwo}
          </h3>
        )}
        <div className="thumb">
          {feature.image && (
            <img className="main-img" src={feature.image} alt="img" />
          )}
          {feature.shapeOne && (
            <img
              className="animate-img-1 rotate"
              src={feature.shapeOne}
              alt="img"
            />
          )}
        </div>
        <div className="details">
          {feature.description && (
            <p className="content">{feature.description}</p>
          )}
          <Link
            className="btn-primary btn-hover-effect border-radius-50"
            to={feature.btn.link ?? "contact"}
          >
            {feature.btn.text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7232 0.162518C13.4923 1.60825 13.5146 2.98729 14.1881 4.09046C14.8525 5.17887 16.2313 6.12479 19 6.51014L18.9374 7L19 7.48986C16.2313 7.87521 14.8525 8.82113 14.1881 9.90954C13.5146 11.0127 13.4923 12.3917 13.7232 13.8375L12.7892 14C12.5466 12.4806 12.5243 10.7956 13.3896 9.37836C13.8463 8.63012 14.5282 7.99139 15.4907 7.4942H14.203H0V6.5058H14.203H15.4907C14.5282 6.00861 13.8463 5.36988 13.3896 4.62164C12.5243 3.20441 12.5466 1.51944 12.7892 0L13.7232 0.162518Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        {feature.shapeTwo && (
          <img
            className="animate-img-bottom-left moveBottom2"
            src={feature.shapeTwo}
            alt="img"
          />
        )}
        {feature.shapeThree && (
          <img
            className="animate-img-top-right moveBottom"
            src={feature.shapeThree}
            alt="img"
          />
        )}
      </div>
    </>
  );
}
