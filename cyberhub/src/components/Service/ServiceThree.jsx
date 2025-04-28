import { serviceThree as data } from "@/data/service";

export default function ServiceThree() {
  return (
    <section className="abservice__area pt-70 pb-120">
      <div className="container">
        {data.title && (
          <div className="abservice__title-wrap text-center">
            <h2 className="section-title move-line-3d"> {data.title} </h2>
          </div>
        )}
        {data.services && data.services.length > 0 && (
          <div className="row">
            {data.services.map((service, index) => (
              <div
                key={index}
                className={`col-xl-3 col-lg-3 col-md-6 abservice__border  ${service.animation.name}`}
              >
                <div className="abservice__item">
                  {service.icon && (
                    <div className="abservice__icon">
                      <img src={service.icon} alt="Icon" />
                    </div>
                  )}
                  {service.title && (
                    <h3 className="abservice__title">{service.title}</h3>
                  )}
                  {service.description && (
                    <p className="abservice__text">{service.description}</p>
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
