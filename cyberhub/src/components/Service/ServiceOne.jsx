import { serviceOne as data } from "@/data/service";

export default function ServiceOne() {
  return (
    <section className="service__area pt-110 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service__title-wrap">
              {data.title && (
                <h2 className="section-title move-line-3d">
                  {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
                </h2>
              )}
            </div>
          </div>
        </div>
        {data.services && data.services.length && (
          <div className="row gy-4">
            {data.services.map((service, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-3 col-md-6 ${service.animation.name}`}
              >
                <div className={`service__item ${service.classNames}`}>
                  <div className="service__icon">
                    {service.icon && <img src={service.icon} alt="Icon" />}
                  </div>
                  <h3 className="service__title">{service.title}</h3>
                  {service.description && <p>{service.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
