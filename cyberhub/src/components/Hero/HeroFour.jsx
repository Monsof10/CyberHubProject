import { heroFour as hero } from "@/data/hero";
import { Link } from "react-router-dom";
export default function HeroFour() {
  return (
    <section className="abhero__area">
      <div className="container-md">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-md-6">
            <div className="abhero__left">
              <ul className="breadcrumbs">
                <li className="breadcrumbs-list">
                  <Link className="breadcrumbs-item" to="#">
                    Home
                  </Link>
                </li>
                <li className="breadcrumbs-list">
                  <Link className="breadcrumbs-item" to="#">
                    About
                  </Link>
                </li>
              </ul>

              {hero.title && (
                <h1 className="abhero__title move-line-3d">
                  {hero.title.sliceOne}
                  <span className="abhero__title-shape">
                    {hero.title.sliceTwo}
                  </span>
                </h1>
              )}
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-6">
            <div className="abhero__right">
              {hero.descriptionOne && (
                <p className="abhero__content  move-line-3d" data-delay="0.6">
                  {hero.descriptionOne}
                </p>
              )}
              {hero.descriptionTwo && (
                <p className="abhero__content  move-line-3d" data-delay="0.8">
                  {hero.descriptionTwo}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="abhero__video-wrap">
              <video
                className="abhero__video"
                src="../assets/media/videos/features-video.mp4"
                loop
                preload="auto"
                muted
                autoPlay
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
