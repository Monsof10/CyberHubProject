import { instructorListOne as data } from "@/data/instructor";
import InstructorCardOne from "@/components/Card/Instructor/InstructorCardOne";
import { Link } from "react-router-dom";

export default function InstructorListOne() {
  return (
    <section className="team__area-2 pt-120 pb-130">
      <div className="container">
        {data.title && (
          <div className="team__top-wrap-2 justify-content-center text-center">
            <h2 className="section-title">
              {data.title.sliceOne}{" "}
              {data.title.sliceTwo && <span>{data.title.sliceTwo}</span>}
            </h2>
          </div>
        )}
        {data.instructors && (
          <div className="row gy-4">
            {data.instructors.map((instructor, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6">
                <InstructorCardOne type={"2"} instructor={instructor} />
              </div>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-center pt-50">
          {data.moreBtn && (
            <div className="fade-slide bottom show-lg">
              <Link
                className="btn-veiwMore btn-hover-shadow"
                to={data.moreBtn.link}
              >
                {data.moreBtn.title}
                <img
                  className="btn-arrow-icon"
                  src={data.moreBtn.icon}
                  alt="Icon"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
