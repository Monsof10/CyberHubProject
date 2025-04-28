import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BlogCardOne.propTypes = {
  blog: PropTypes.object,
  style: PropTypes.number,
  className: PropTypes.string,
};

export default function BlogCardOne({ blog, style = 1, className = "" }) {
  return (
    <article className={`blog__item style-${style} ${className}`}>
      <img className="blog__thumb" src={blog.image} alt="Post" />
      <ul className="blog__meta d-flex gap-2 items-center">
        <li className="blog__meta-list">
          {blog.artRedIcon && <img src={blog.artRedIcon} alt="Icon" />}
          {blog.category.link && (
            <Link to={blog.category.link}>{blog.category.name}</Link>
          )}
        </li>
        <li className="blog__meta-list">
          {blog.timeSquareIcon && <img src={blog.timeSquareIcon} alt="Icon" />}
          {blog.time}
        </li>
      </ul>
      {blog.link && (
        <Link to={blog.link}>
          {blog.title && <h3 className="blog__title">{blog.title}</h3>}
        </Link>
      )}
      {blog.link && (
        <Link className="btn-readmore" to={blog.link}>
          {blog.moreBtn.text}
          {blog.moreBtn.icon && (
            <img
              className="btn-arrow-icon"
              src={blog.moreBtn.icon}
              alt="Icon"
            />
          )}
        </Link>
      )}
    </article>
  );
}
