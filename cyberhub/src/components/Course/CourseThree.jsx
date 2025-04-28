import { courseThree as data } from "@/data/course";
import CourseCardThree from "@/components/Card/Course/CourseCardThree";
export default function CourseThree() {
  return (
    <div className="course__area-6 pt-120 pb-100">
      <div className="container">
        {data.title && (
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-10 text-center">
              <h2 className="section-title-6 pb-60 move-line-3d">
                {data.title}
              </h2>
            </div>
          </div>
        )}
        {data.courses && data.courses.length > 0 && (
          <div className="row">
            {data.courses.map((course, index) => (
              <div
                key={index}
                className={`col-lg-6 col-sm-6 ${course.animation.name}`}
                data-delay={course.animation.delay}
              >
                <CourseCardThree course={course} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
