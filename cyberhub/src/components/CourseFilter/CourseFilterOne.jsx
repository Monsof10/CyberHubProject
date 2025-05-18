import StarOne from "/assets/imgs/icon/star-one.webp";
import StarTwo from "/assets/imgs/icon/star-two.webp";
import StarThree from "/assets/imgs/icon/star-three.webp";
import StarFour from "/assets/imgs/icon/star-four.webp";
import ArrowRightDark from "/assets/imgs/icon/arrow-right-dark.svg";

import { courseOne as data } from "@/data/course";
import CourseCardOne from "../Card/Course/CourseCardOne";
import { Link } from "react-router-dom";

export default function CourseFilterOne() {
  return (
    <section className="coursegrid__area pt-100 pb-100">
      <div className="container">
        <div className="coursegrid__wrapper">
          <div className="coursegrid__left">
            <div className="filter-item">
              <span className="filter-title">Price</span>
              <ul className="filter-list">
                <li className="filter-list-item">
                  <span className="d-flex align-items-center justify-content-between">
                    <span>
                      <input
                        type="checkbox"
                        className="checkbox-icon"
                        defaultValue="course"
                        id="all"
                        name="all"
                      />
                      <label className="filter-label" htmlFor="all">
                        All course
                      </label>
                    </span>
                    <span className="filter-count">(300)</span>
                  </span>
                </li>
                <li className="filter-list-item">
                  <span className="d-flex align-items-center justify-content-between">
                    <span>
                      <input
                        type="checkbox"
                        className="checkbox-icon"
                        id="free"
                        name="free"
                        defaultValue="free"
                      />
                      <label className="filter-label" htmlFor="free">
                        Free
                      </label>
                    </span>
                    <span className="filter-count">(300)</span>
                  </span>
                </li>
                <li className="filter-list-item">
                  <span className="d-flex align-items-center justify-content-between">
                    <span>
                      <input
                        type="checkbox"
                        className="checkbox-icon"
                        id="paid"
                        name="paid"
                        defaultValue="paid"
                      />
                      <label className="filter-label" htmlFor="paid">
                        Paid
                      </label>
                    </span>
                    <span className="filter-count">(300)</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="filter-item">
              <span className="filter-title">Review</span>
              <ul className="filter-list">
                <li className="filter-list-item">
                  <span className="filter-review">
                    <input
                      type="checkbox"
                      className="checkbox-round"
                      defaultValue="course"
                    />
                    <img src={StarFour} alt="Icon" />
                    <span className="filter-count">
                      <strong>4.5</strong> (5k+ Review)
                    </span>
                  </span>
                </li>
                <li className="filter-list-item">
                  <span className="filter-review">
                    <input
                      type="checkbox"
                      className="checkbox-round"
                      defaultValue="course"
                    />
                    <img src={StarTwo} alt="Icon" />
                    <span className="filter-count">
                      <strong>4.0</strong> (250 Review)
                    </span>
                  </span>
                </li>
                <li className="filter-list-item">
                  <span className="filter-review">
                    <input
                      type="checkbox"
                      className="checkbox-round"
                      defaultValue="course"
                    />
                    <img src={StarThree} alt="Icon" />
                    <span className="filter-count">
                      <strong>3.5</strong> (2k+ Review)
                    </span>
                  </span>
                </li>
                <li className="filter-list-item">
                  <span className="filter-review">
                    <input
                      type="checkbox"
                      className="checkbox-round"
                      defaultValue="course"
                    />
                    <img src={StarOne} alt="Icon" />
                    <span className="filter-count">
                      <strong>2.0</strong> (150+ Review)
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="filter-item">
              <span className="filter-title">Categories</span>
              <ul className="filter-list">
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Product"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Product">
                    Spoofing
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    id="web"
                    className="checkbox-round"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="web">
                    Forensics
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Business"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Business">
                    Cryptography
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Digital"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Digital">
                    General Skills
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Software"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Software">
                    Penetration Testing 
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Professional"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Professional">
                    Program Security
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Datas"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Datas">
                    Ddos and Dos
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Health"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Health">
                    Privelage Escalation
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-item">
              <span className="filter-title">Categories</span>
              <ul className="filter-list">
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Design"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Design">
                    Product Design
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Development"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Development">
                    Web Development
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Dev"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Dev">
                    Business Development
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Digitals"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Digitals">
                    Digital Marketing
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="And"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="And">
                    It and Software
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Photography"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Photography">
                    Professional Photography
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Science"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Science">
                    Data Science
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Wellness"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Wellness">
                    Health and Wellness
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-item">
              <span className="filter-title">Level</span>
              <ul className="filter-list">
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Levels"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Levels">
                    All Levels
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Beginner"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Beginner">
                    Beginner
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Intermediate"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Intermediate">
                    Intermediate
                  </label>
                </li>
                <li className="filter-list-item">
                  <input
                    type="checkbox"
                    className="checkbox-round"
                    id="Expert"
                    defaultValue="course"
                  />
                  <label className="filter-label" htmlFor="Expert">
                    Expert
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {data.courses && data.courses.length > 0 && (
            <div className="coursegrid__right">
              {data.courses.map((course, index) => (
                <div key={index}>
                  {index < 6 && <CourseCardOne course={course} />}
                </div>
              ))}

              {/* Pagination */}
              <ul className="pagination mt-4">
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
                    <img
                      className="pagination-icon"
                      src={ArrowRightDark}
                      alt="Icon"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
