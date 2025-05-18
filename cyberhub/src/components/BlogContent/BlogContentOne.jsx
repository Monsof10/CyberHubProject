import { blogContentOne as blogs } from "../../data/blog";
import BlogContentCardOne from "../Card/Blog/BlogContentCardOne";

import ArrowRightDark from "/assets/imgs/icon/arrow-right-dark.svg";
import BlogCardOne from "../Card/Blog/BlogCardOne";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

BlogContentOne.propTypes = {
  column: PropTypes.number,
  imageClass: PropTypes.string,
};

export default function BlogContentOne({ column = 1, imageClass = "" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = column == 1 ? 4 : column * 2;
  
  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  // Get current page items
  const currentItems = blogs.slice(startIndex, endIndex);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < 2) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="row post__left">
      {currentItems.map((blog, index) => (
        <div key={index} className={`col-md-${12 / column}`}>
          {column < 3 ? (
            <BlogContentCardOne blog={blog} imageClass={imageClass} />
          ) : (
            <BlogCardOne blog={blog} style={2} className="mb-4" />
          )}
        </div>
      ))}

      <ul className="pagination mt-3">
        <li>
          <Link 
            className={`pagination-link ${currentPage === 1 ? 'active' : ''}`} 
            to="#"
            onClick={() => handlePageChange(1)}
          >
            01
          </Link>
        </li>
        <li>
          <Link 
            className={`pagination-link ${currentPage === 2 ? 'active' : ''}`} 
            to="#"
            onClick={() => handlePageChange(2)}
          >
            02
          </Link>
        </li>
        <li>
          <Link 
            className="pagination-link" 
            to="#"
            onClick={handleNextPage}
          >
            <img className="pagination-icon" src={ArrowRightDark} alt="Icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
