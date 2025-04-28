import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseCardThree.propTypes = {
  course: PropTypes.object,
};

export default function CourseCardThree({ course }) {
  return (
    <div className="course-item-6 text-center">
      <div
        className="thumb"
        style={{
          maskImage: "url('./assets/imgs/shape/course-6.webp')",
        }}
      >
        {course.image && (
          <img
            className="course__thumb w-100"
            src={course.image}
            alt="Course"
          />
        )}
      </div>
      <div className="details">
        {course.title && (
          <h3 className="title">
            <Link to={course.link ?? "course-detail"}>{course.title}</Link>
          </h3>
        )}
        {course.description && <p className="content">{course.description}</p>}
        {course.categories && course.categories.length > 0 && (
          <ul className="cat-list">
            {course.categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        )}
        {course.btn.text && (
          <Link
            className="btn-style-6 btn-hover-effect border-radius-50"
            to={course.btn.link ?? "course-detail"}
          >
            {course.btn.text}
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0009 0.15091C12.7822 1.49338 12.8033 2.77392 13.4413 3.79829C14.0708 4.80895 15.377 5.6873 18 6.04513L17.9407 6.5L18 6.95487C15.377 7.3127 14.0708 8.19105 13.4413 9.20171C12.8033 10.2261 12.7822 11.5066 13.0009 12.8491L12.1161 13C11.8862 11.5891 11.8652 10.0245 12.6848 8.70848C13.1176 8.01368 13.7636 7.42058 14.6754 6.9589H13.4555H0V6.0411H13.4555H14.6754C13.7636 5.57942 13.1176 4.98632 12.6848 4.29152C11.8652 2.97553 11.8862 1.41091 12.1161 0L13.0009 0.15091Z"
                fill="white"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
