import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseCardOne.propTypes = {
  course: PropTypes.object,
};

export default function CourseCardOne({ course }) {
  return (
    <div className="course__item">
      <div className="course__thumb-wrap">
        <img className="course__thumb" src={course.image} alt="Course" />
      </div>
      {course.categories && course.categories.length > 0 && (
        <Link className="btn-trending" to={course.categories[0].link}>
          <i className="ph ph-fire-simple"></i>
          {course.categories[0].name}
        </Link>
      )}
      {course.wishlistIcon && (
        <span className="course__wishlist">
          <img src={course.wishlistIcon} alt="Icon" />
        </span>
      )}
      {course.price && (
        <div className="course__price-wrap">
          <span className="course__price">{course.price}</span>
        </div>
      )}
      {course.instructor && (
        <div className="course__instructor d-flex align-items-center gap-2">
          {course.instructor.image && (
            <img src={course.instructor.image} alt="Instructors" />
          )}
          {course.instructor && (
            <p className="course__instructor-name">{course.instructor.name}</p>
          )}
        </div>
      )}
      {course.meta && (
        <ul className="course__meta d-flex gap-3">
          {course.meta.map((metaItem, index) => (
            <li key={index} className="course__meta-item">
              {metaItem.icon && <img src={metaItem.icon} alt="Icon" />}
              {metaItem.description && <span>{metaItem.description}</span>}
            </li>
          ))}
        </ul>
      )}
      {course.title && <h3 className="course__title">{course.title}</h3>}
      <Link className="btn-enroll btn-hover-shadow" to={course.link}>
        {course.enrollBtnText}
        <img className="btn-enroll-icon" src={course.arrowIcon} alt="Icon" />
      </Link>
    </div>
  );
}
