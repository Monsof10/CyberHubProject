import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BlogCardTwo.propTypes = {
  blog: PropTypes.object,
};

export default function BlogCardTwo({ blog }) {
  return (
    <article
      className={`blog__item-3 ${blog.animation.name}`}
      data-delay={blog.animation.delay}
    >
      <img className="blog__thumb-3" src={blog.image} alt="Article" />
      {blog.meta && blog.meta.length > 0 && (
        <ul className="blog__meta-3">
          {blog.meta.map((metaItem, key) => (
            <li key={key} className="blog__metaItem-3">
              {metaItem.link ? (
                <Link to={metaItem.link}>{metaItem.name}</Link>
              ) : (
                `${metaItem.name}`
              )}
            </li>
          ))}
        </ul>
      )}
      {blog.title && (
        <h3 className="blog__title-3">
          <Link to={blog.link ?? "blog-detail"}>{blog.title}</Link>
        </h3>
      )}
      <Link className="btn-blog-3" to={blog.btn.link ?? "blog-detail"}>
        {blog.btn.text}
        {blog.btn.icon && (
          <img className="arrow-right-thin" src={blog.btn.icon} alt="Icon" />
        )}
      </Link>
    </article>
  );
}
