import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BlogCardThree.propTypes = {
  blog: PropTypes.object,
};

export default function BlogCardThree({ blog }) {
  return (
    <div className="blog__item-list">
      <div className="row">
        <div className="col-md-4">
          <div
            className="blog__thumb-4"
            style={{
              maskImage: "url('./assets/imgs/thumb/blog-6-mask.webp')",
            }}
          >
            {blog.image && (
              <img className="blog__author-img-6" src={blog.image} alt="Icon" />
            )}
          </div>
        </div>
        <div className="col-md-8 align-self-center">
          <div className="blog__details-4">
            <ul className="blog__meta-4">
              {blog.category && (
                <li>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.38463 0L13.0481 0.95192L14 7.61541L7.8125 13.8028C7.54965 14.0658 7.1235 14.0658 6.86059 13.8028L0.197152 7.13945C-0.0657175 6.87653 -0.0657175 6.45039 0.197152 6.18747L6.38463 0ZM6.86059 1.42788L1.62504 6.66343L7.33654 12.375L12.5721 7.13945L11.8582 2.14182L6.86059 1.42788ZM8.28852 5.71151C7.76276 5.1858 7.76276 4.33342 8.28852 3.80769C8.81422 3.28196 9.66658 3.28196 10.1923 3.80769C10.718 4.33342 10.718 5.1858 10.1923 5.71151C9.66658 6.23728 8.81422 6.23728 8.28852 5.71151Z"
                      fill="#C3B9FF"
                    />
                  </svg>
                  {blog.category}
                </li>
              )}
              {blog.date && (
                <li>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.9 0V1.4H9.1V0H10.5V1.4H13.3C13.6866 1.4 14 1.7134 14 2.1V13.3C14 13.6866 13.6866 14 13.3 14H0.7C0.313404 14 0 13.6866 0 13.3V2.1C0 1.7134 0.313404 1.4 0.7 1.4H3.5V0H4.9ZM12.6 7H1.4V12.6H12.6V7ZM3.5 2.8H1.4V5.6H12.6V2.8H10.5V4.2H9.1V2.8H4.9V4.2H3.5V2.8Z"
                      fill="#C3B9FF"
                    />
                  </svg>
                  {blog.date}
                </li>
              )}
            </ul>
            {blog.title && (
              <h3 className="blog__title-4 text-white">
                <Link to={blog.link ?? "#"}>{blog.title}</Link>
              </h3>
            )}
            <div className="btn-wrap d-flex justify-content-between">
              <Link
                className="btn-style-6 btn-hover-effect border-radius-50"
                to={blog.btn.link ?? "#"}
              >
                {blog.btn.text}
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.16825 3.90593C0.244634 2.51785 0.0195312 0.913975 0.0195312 0H0.942608C0.942608 0.800311 1.14608 2.20629 1.93675 3.39457C2.70764 4.55313 4.06236 5.54773 6.4793 5.53846L6.48284 6.46153C3.75692 6.47198 2.11164 5.32372 1.16825 3.90593Z"
                    fill="#F4F4F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.16825 8.09407C0.244634 9.48215 0.0195312 11.086 0.0195312 12H0.942608C0.942608 11.1997 1.14608 9.79371 1.93675 8.60543C2.70764 7.44687 4.06236 6.45227 6.4793 6.46154L6.48284 5.53847C3.75692 5.52802 2.11164 6.67628 1.16825 8.09407Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </Link>
              <span className="read-meta align-self-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6 10.8V12H5.4V10.8H0.6C0.268632 10.8 0 10.5314 0 10.2V0.6C0 0.268632 0.268632 0 0.6 0H4.2C4.91682 0 5.56026 0.31425 6 0.812508C6.43974 0.31425 7.08318 0 7.8 0H11.4C11.7314 0 12 0.268632 12 0.6V10.2C12 10.5314 11.7314 10.8 11.4 10.8H6.6ZM10.8 9.6V1.2H7.8C7.13724 1.2 6.6 1.73726 6.6 2.4V9.6H10.8ZM5.4 9.6V2.4C5.4 1.73726 4.86276 1.2 4.2 1.2H1.2V9.6H5.4Z"
                    fill="#B5A9FF"
                  />
                </svg>
                {blog.duration}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
