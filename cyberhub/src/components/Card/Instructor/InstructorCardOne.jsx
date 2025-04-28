import PropTypes from "prop-types";
import { Link } from "react-router-dom";

InstructorCardOne.propTypes = {
  type: PropTypes.string,
  instructor: PropTypes.object,
};

export default function InstructorCardOne({ type, instructor }) {
  return (
    <div className={`team__item${type ? `-${type}` : ""}`}>
      {instructor.image && (
        <div className={`team__img${type ? `-${type}` : ""}`}>
          <img src={instructor.image} alt="Team" />
        </div>
      )}
      {instructor.shareIcon && (
        <span className={`team__share-icon${type ? `-${type}` : ""}`}>
          <img src={instructor.shareIcon} alt="Icon" />
        </span>
      )}
      {instructor.socials && instructor.socials.length > 0 && (
        <ul className={`team__social${type ? `-${type}` : ""}`}>
          {instructor.socials.map((social, idx) => (
            <li key={idx}>
              <Link
                className={`team__socail-item${type ? `-${type}` : ""}`}
                to={social.link}
              >
                <img
                  className={`team__social-icon${type ? `-${type}` : ""}`}
                  src={social.icon}
                  alt="Icon"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {instructor.title && (
        <h3 className={`team__name${type ? `-${type}` : ""}`}>
          {instructor.title}
        </h3>
      )}
      {instructor.designation && (
        <h4 className={`team__designation${type ? `-${type}` : ""}`}>
          {instructor.designation}
        </h4>
      )}
    </div>
  );
}
