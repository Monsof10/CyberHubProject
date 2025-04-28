import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseCardTwo.propTypes = {
  course: PropTypes.object,
};

export default function CourseCardTwo({ course }) {
  return (
    <div
      className={`course__item-4 ${course.animation.name}`}
      data-delay={course.animation.delay}
    >
      {course.image && (
        <img className="course__thumb-4" src={course.image} alt="Course" />
      )}
      <div className="course__priceWrap-4 text-center">
        {course.price && <p className="course__price-4">{course.price}</p>}
        {course.discount && (
          <span className="course__offer-4">{course.discount} off</span>
        )}
      </div>
      {course.title && (
        <h3 className="course__title-4">
          <Link to={course.link}>{course.title}</Link>
        </h3>
      )}
      {course.description && (
        <p className="course__content-4">{course.description}</p>
      )}
      {course.btn.link && (
        <Link
          className="btn-course-4 text-white btn-hover-bubble"
          to={course.btn.link}
        >
          {course.btn.text}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Link>
      )}
    </div>
  );
}
