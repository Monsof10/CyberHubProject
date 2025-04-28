import { innerHeroOne as hero } from "@/data/hero";
import BreadcrumbOne from "@/components/Breadcrumb/BreadcrumbOne";
import PropTypes from "prop-types";

InnerHeroOne.propTypes = {
  data: PropTypes.object,
};

export default function InnerHeroOne({ data }) {
  return (
    <div className="banner__area pb-120">
      <div className="container">
        <div className="banner__wrapper text-center">
          {data.title && <h1 className="banner-title">{data.title}</h1>}
          <BreadcrumbOne breadcrumbs={data.breadcrumbs} />
        </div>
      </div>

      <img
        className="banner__shape-1 moveBottom"
        src={hero.shapeOne}
        alt="Shape"
      />
      <img
        className="banner__shape-2 zoom-in-out"
        src={hero.shapeTwo}
        alt="Shape"
      />
      <img
        className="banner__shape-3 zoom-in-out"
        src={hero.shapeThree}
        alt="Shape"
      />
      <img
        className="banner__shape-4 moveLeft"
        src={hero.shapeFour}
        alt="Shape"
      />
      <img
        className="banner__shape-5 moveRight"
        src={hero.shapeFive}
        alt="Shape"
      />
      <img
        className="banner__shape-6 moveLeft"
        src={hero.shapeSix}
        alt="Shape"
      />
      <img
        className="banner__shape-7 zoom-in-out"
        src={hero.shapeSeven}
        alt="Shape"
      />
    </div>
  );
}
