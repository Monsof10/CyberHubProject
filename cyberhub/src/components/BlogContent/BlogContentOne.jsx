import { blogContentOne as blogs } from "@/data/blog";
import BlogContentCardOne from "@/components/Card/Blog/BlogContentCardOne";

import ArrowRightDark from "/assets/imgs/icon/arrow-right-dark.svg";
import BlogCardOne from "@/components/Card/Blog/BlogCardOne";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BlogContentOne.propTypes = {
  column: PropTypes.number,
  imageClass: PropTypes.string,
};

export default function BlogContentOne({ column = 1, imageClass = "" }) {
  const items = column == 1 ? 4 : column * 2;
  return (
    <div className="row post__left">
      {blogs.map((blog, index) => (
        <div key={index} className={`col-md-${12 / column}`}>
          {index < items && (
            <>
              {column < 3 ? (
                <BlogContentCardOne blog={blog} imageClass={imageClass} />
              ) : (
                <BlogCardOne blog={blog} style={2} className="mb-4" />
              )}
            </>
          )}
        </div>
      ))}

      <ul className="pagination mt-3">
        <li>
          <Link className="pagination-link" to="#">
            01
          </Link>
        </li>
        <li>
          <Link className="pagination-link active" to="#">
            02
          </Link>
        </li>
        <li>
          <Link className="pagination-link" to="#">
            03
          </Link>
        </li>
        <li>
          <Link className="pagination-link" to="#">
            04
          </Link>
        </li>
        <li>
          <Link className="pagination-link" to="#">
            <img className="pagination-icon" src={ArrowRightDark} alt="Icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
