import { ctaOne as data } from "@/data/cta";
import { Link } from "react-router-dom";
export default function CtaOne() {
  return (
    <section className="cta__area">
      <div className="cta__wrapper">
        {data.title && (
          <h2 className="cta__title move-line-3d">
            {data.title.sliceOne}
            <span>
              {data.title.sliceTwo}
              <img src={data.footerTitleVector} alt="Shape" />
            </span>
          </h2>
        )}
        <div className="fade-slide bottom">
          <Link
            className="btn-getstarted btn-hover-shadow"
            to={data.action.link}
          >
            {data.action.name}
            {data.action.icon && (
              <img
                className="btn-arrow-icon"
                src={data.action.icon}
                alt="Icon"
              />
            )}
          </Link>
        </div>
        {/* <!-- Shape  --> */}
        <img className="cta__shape-1" src={data.shapeOne} alt="Shape" />
        <img className="cta__shape-2 rotate" src={data.shapeTwo} alt="Shape" />
        <img
          className="cta__shape-3 moveLeft"
          src={data.shapeThree}
          alt="Shape"
        />
        <img className="cta__shape-4" src={data.shapeFour} alt="Shape" />
        <img className="cta__shape-5" src={data.shapeFive} alt="Shape" />
        <img
          className="cta__shape-6 moveLeft"
          src={data.shapeSix}
          alt="Shape"
        />
      </div>
    </section>
  );
}
