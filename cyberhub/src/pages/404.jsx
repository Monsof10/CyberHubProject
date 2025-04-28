import "@/assets/scss/online-course.scss";

import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Offcanvas from "@/components/Menu/Offcanvas";

import BannerShapeOne from "@/assets/imgs/shape/banner-shape-1.webp";
import BannerShapeTwo from "@/assets/imgs/shape/banner-shape-2.webp";
import BannerShapeThree from "@/assets/imgs/shape/banner-shape-3.webp";
import BannerShapeFour from "@/assets/imgs/shape/banner-shape-4.webp";
import BannerShapeFive from "@/assets/imgs/shape/banner-shape-5.webp";
import BannerShapeSix from "@/assets/imgs/shape/banner-shape-6.webp";
import BannerShapeSeven from "@/assets/imgs/shape/banner-shape-7.webp";

import Thumb404 from "@/assets/imgs/thumb/404.webp";
import CtaOne from "@/components/CTA/CtaOne";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <HeaderOne />
      <Offcanvas />
      <main>
        <div className="banner__area pt-130 pb-120">
          <div className="container">
            <div className="banner__wrapper text-center">
              <h1 className="banner-title">404 Error</h1>
              <ul className="breadcrumbs-2">
                <li className="breadcrumbs-list-2">
                  <Link className="breadcrumbs-item-2" to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumbs-list-2">
                  <Link className="breadcrumbs-item-2" to="#">
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="banner__shape-1 moveBottom"
            src={BannerShapeOne}
            alt="Shape"
          />
          <img
            className="banner__shape-2 zoom-in-out"
            src={BannerShapeTwo}
            alt="Shape"
          />
          <img
            className="banner__shape-3 zoom-in-out"
            src={BannerShapeThree}
            alt="Shape"
          />
          <img
            className="banner__shape-4 moveLeft"
            src={BannerShapeFour}
            alt="Shape"
          />
          <img
            className="banner__shape-5 moveRight"
            src={BannerShapeFive}
            alt="Shape"
          />
          <img
            className="banner__shape-6 moveLeft"
            src={BannerShapeSix}
            alt="Shape"
          />
          <img
            className="banner__shape-7 zoom-in-out"
            src={BannerShapeSeven}
            alt="Shape"
          />
        </div>
        <section className="error__area pt-130 pb-130">
          <div className="container">
            <div className="error__wrapper text-center">
              <img className="error__img" src={Thumb404} alt="404" />
              <h2 className="error__title"> 404 Error </h2>
              <p className="error__text">
                Oops! Something went Wrong, We can’t find this page
              </p>
              <Link className="btn-error btn-hover-shadow" to="/">
                Back to home
              </Link>
            </div>
          </div>
        </section>

        <CtaOne />
      </main>
      <FooterOne />
    </>
  );
}
