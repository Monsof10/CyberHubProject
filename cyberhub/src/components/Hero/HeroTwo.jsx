import { heroTwo as hero } from "@/data/hero";
import { useEffect } from "react";

import { moveOnMouse } from "@/components/Client/AnimationClient";
import { Link } from "react-router-dom";

export default function HeroTwo() {
  useEffect(() => {
    moveOnMouse(".banner-bg-img");
  }, []);
  return (
    <section className="hero__area-4">
      <div className="container-lg">
        <div className="hero__wrapper-4">
          <div className="hero__left-4">
            {hero.title && (
              <h1
                className="hero__title-4 split_chars"
                data-duration="0.5"
                data-stagger="0.05"
              >
                {hero.title.sliceOne}{" "}
                <span className="hero__children-shape">
                  {hero.title.sliceTwo}
                </span>
                {hero.title.sliceThree}
              </h1>
            )}
            <div className="hero__contentWrap-4">
              <Link to={hero.link} className="hero__btn-4">
                <img className="rotate" src={hero.badgeImage} alt="Text" />
                <span className="hero__btnIcon-4">
                  <img src={hero.badgeTextIcon} alt="Icon" />
                </span>
              </Link>
              <p
                className="hero__content-4 split_chars"
                data-duration="0.2"
                data-translate-x="20"
                data-translate-y="20"
                data-stagger="0.03"
              >
                {hero.description}
              </p>
            </div>
          </div>
          <div className="hero__right-4 moveBottom">
            <img className="hero__banner-4" src={hero.imageOne} alt="Image" />
          </div>
        </div>
      </div>
      <img className="hero__btmImg-4" src={hero.shapeOne} alt="Shape" />
      <img
        className="hero__childImg-4 moveLeft"
        src={hero.imageTwo}
        alt="Image"
      />
      {/* <!-- Shape  --> */}
      <img className="hero__shapeFour-1" src={hero.shapeTwo} alt="Shape" />
      <img className="hero__shapeFour-4" src={hero.shapeThree} alt="Shape" />
      <img className="hero__shapeFour-5" src={hero.shapeFour} alt="Shape" />
      <img className="hero__shapeFour-8" src={hero.shapeFive} alt="Shape" />
      <img className="hero__shapeFour-9" src={hero.shapeSix} alt="Shape" />
      <img className="hero__shapeFour-11" src={hero.shapeSeven} alt="Shape" />

      <img className="banner-bg-img" src={hero.shapeEight} alt="Shape" />
      {/* <!-- Shape  --> */}
    </section>
  );
}
