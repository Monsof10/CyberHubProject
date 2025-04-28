import { whatYouCanAcheive as data } from "@/data/feature";
export default function WhatYouCanAcheive() {
  return (
    <div className="achieve__area-6 pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-sm-10 text-center pb-60">
            {data.title && (
              <h2 className="section-title-6  move-line-3d">{data.title}</h2>
            )}
          </div>
        </div>
        {data.features && data.features.length > 0 && (
          <div className="achieve__item-wrap-6">
            {data.features.map((feature, index) => (
              <div key={index} className="achieve__item-6 text-center">
                <div className="icon">
                  {feature.icon && <img src={feature.icon} alt="Icon" />}
                </div>
                {feature.name && <h3 className="title">{feature.name}</h3>}
                {feature.description && (
                  <p className="content">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
