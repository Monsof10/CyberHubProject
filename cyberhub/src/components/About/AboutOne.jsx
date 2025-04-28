import { aboutOne as about } from "@/data/about";

export default function AboutOne() {
  return (
    <section className="features__area pb-50">
      <div className="container">
        <div className="features__wrapper">
          {about.title && (
            <div className="features__title-wrap">
              <h2 className="section-title move-line-3d">
                {about.title.sliceOne} <em>{about.title.sliceTwo}</em>
                {about.title.sliceThree} <span>{about.title.sliceFour}</span>
              </h2>
            </div>
          )}
          {about.description && (
            <p className="features__content fade-slide bottom">
              {about.description}
            </p>
          )}
          <div className="features__img-wrap">
            {about.video && (
              <div className="features__video-wrap">
                <video
                  className="features__video"
                  src={about.video.src}
                  loop
                  preload="auto"
                  muted
                  autoPlay
                ></video>
              </div>
            )}
            {about.widgets.map((widget, index) => (
              <img
                key={index}
                className={`${widget.classNames}`}
                src={widget.shape}
                alt="Shape"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
