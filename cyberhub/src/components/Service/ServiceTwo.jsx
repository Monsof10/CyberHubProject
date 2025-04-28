import { serviceTwo as data } from "@/data/service";
export default function ServiceTwo() {
  return (
    <section className="service__area-4 pt-130 pb-130">
      <div className="container">
        {data.title && (
          <div className="service__titleWrap-4">
            <h2 className="section-title-4 text-center move-line-3d">
              {data.title}
            </h2>
          </div>
        )}
        {data.services && data.services.length > 0 && (
          <div className="row gy-4 justify-content-md-center">
            {data.services.map((service, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                {/* <!-- Service item --> */}
                <div
                  className={`service__item-4 ${service.animation.name}`}
                  data-delay={service.animation.delay}
                >
                  {service.image && (
                    <img
                      className="service__img-4"
                      src={service.image}
                      alt="Service"
                    />
                  )}
                  {service.title && (
                    <h2 className="service__title-4">{service.title}</h2>
                  )}
                  {service.description && (
                    <p className="service__content-4">{service.description}</p>
                  )}
                  {service.shape && (
                    <img
                      className="service__shape-4 zoom-in-out"
                      src={service.shape}
                      alt="Shape"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
