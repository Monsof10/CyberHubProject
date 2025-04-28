import { featureOne as data } from "@/data/feature";
import FeatureCardOne from "@/components/Card/Feature/FeatureCardOne";
import FeatureCardTwo from "@/components/Card/Feature/FeatureCardTwo";
import FeatureCardThree from "@/components/Card/Feature/FeaturteCardThree";
export default function FeatureOne() {
  return (
    <div className="features__area-3 pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-8 text-center">
            {data.title && (
              <h2 className="section-title-6 pb-60 move-line-3d">
                {data.title}
              </h2>
            )}
          </div>
        </div>
        {data.features && data.features.length > 0 && (
          <div className="row justify-content-center">
            {data.features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                {index == 0 && <FeatureCardOne feature={feature} />}
                {index == 1 && <FeatureCardTwo feature={feature} />}
                {index == 2 && <FeatureCardThree feature={feature} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
