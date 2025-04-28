import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BlogContentCardOne.propTypes = {
  blog: PropTypes.object,
  imageClass: PropTypes.string,
};

export default function BlogContentCardOne({ blog, imageClass = "" }) {
  return (
    <article className="post__item">
      <img
        className={`post__thumb ${imageClass}`}
        src={blog.image}
        alt="Post"
      />
      <ul className="post__meta d-flex gap-3 items-center">
        <li className="post__meta-list">
          {blog.artRedIcon && <img src={blog.artRedIcon} alt="Icon" />}
          {blog.category.link && (
            <Link to={blog.category.link}> {blog.category.name} </Link>
          )}
        </li>
        <li className="post__meta-list">
          {blog.timeSquareIcon && <img src={blog.timeSquareIcon} alt="Icon" />}
          {blog.time}
        </li>
      </ul>
      {blog.link && (
        <Link to={blog.link}>
          {blog.title && <h2 className="post__title">{blog.title}</h2>}
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
