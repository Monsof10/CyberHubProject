import Instructor from "/assets/imgs/team/instructor.webp";
import StarRedIcon from "/assets/imgs/icon/star-red.svg";
import StatusIcon from "/assets/imgs/icon/status-icon.svg";
import CourseVideo from "/assets/imgs/thumb/course-video.webp";
import PlayBtnIconWhite from "/assets/imgs/icon/play-white.webp";
import UserStarIcon from "/assets/imgs/icon/user-star.webp";
import UserTwoIcon from "/assets/imgs/icon/user-two.webp";
import TimeCircleIcon from "/assets/imgs/icon/time-circel.webp";
import ChartIcon from "/assets/imgs/icon/chart-icon.webp";
import GlobalIcon from "/assets/imgs/icon/global.webp";
import CertificateIcon from "/assets/imgs/icon/cirtificate.webp";
import CheckmarkIcon from "/assets/imgs/icon/checkmark-icon.webp";
import LessonIcon from "/assets/imgs/icon/lessons.webp";
import FileIcon from "/assets/imgs/icon/file.webp";
import QuizIcon from "/assets/imgs/icon/quiz.webp";
import ReviewerImage from "/assets/imgs/team/review-avatar.webp";
import ReviewerStarIcon from "/assets/imgs/icon/instr-review.webp";
import YouTubeIconSmall from "/assets/imgs/icon/youtube-icon-sm.webp";
import ReviewIconBold from "/assets/imgs/icon/review-bold.webp";
import StarIcon from "/assets/imgs/icon/single-star.webp";
import CommentorOne from "/assets/imgs/team/comment-1.webp";
import CommentorTwo from "/assets/imgs/team/comment-2.webp";
import CommentorThree from "/assets/imgs/team/comment-3.webp";
import ShareIcon from "/assets/imgs/icon/share-icon.webp";
import { Link } from "react-router-dom";

export default function CourseDetailOne() {
  return (
    <div className="courseDetails__area pt-130 pb-130">
      <div className="container">
        <h2 className="courseDetails__title">
        User Enumeration: From Basic Techniques to Advanced Exploitation and Mitigation Strategies..
        </h2>
        <ul className="courseDetails__meta-list d-flex align-items-center gap-3">
          <li className="courseDetails__meta-item">
            <img src={Instructor} alt="Instructors" />
            <p>Jackie Rippin</p>
          </li>
          <li className="courseDetails__meta-item">
            <img src={StarRedIcon} alt="Icon" />
            <p>4.9 Rating</p>
          </li>
          <li className="courseDetails__meta-item">
            <img src={StatusIcon} alt="Icon" />
            <p>Beginner</p>
          </li>
        </ul>
        <div className="courseDetails__inner">
          <div className="courseDetails__left">
            <div className="courseDetails__video-wrap">
              <img
                className="courseDetails__video-thumb"
                src={CourseVideo}
                alt="Course"
              />
              <Link
                to="../assets/media/videos/features-video.mp4"
                className="courseDetails__video-icon popup_video"
              >
                <img src={PlayBtnIconWhite} alt="Icon" />
              </Link>
            </div>
            <div className="price-show-tab">
              <div className="courseDetails__price-wrap mt-4">
                <div className="courseDetails__price-inner d-flex align-items-center justify-content-between">
                  <div>
                    <p className="courseDetails__price">$19.00</p>
                    <p className="courseDetails__discount">
                      90% Disc.&nbsp;Original price <span>$99.99</span>
                    </p>
                    <Link className="btn-buyNow btn-hover-secondary" to="#!">
                      Buy Now
                    </Link>
                  </div>
                  <div>
                    <ul className="courseDetails__price-list">
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={UserStarIcon} alt="Icon" />
                          Review :
                        </span>
                        <span className="courseDetails__duration">
                          95% positive
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={UserTwoIcon} alt="Icon" />
                          Student :
                        </span>
                        <span className="courseDetails__duration">2,480</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={TimeCircleIcon} alt="Icon" />
                          Duration :
                        </span>
                        <span className="courseDetails__duration">2h 30m</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={ChartIcon} alt="Icon" />
                          Level :
                        </span>
                        <span className="courseDetails__duration">
                          Beginner
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={GlobalIcon} alt="Icon" />
                          Language :
                        </span>
                        <span className="courseDetails__duration">English</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={CertificateIcon} alt="Icon" />
                          Certificate :
                        </span>
                        <span className="courseDetails__duration">Yes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <ul className="courseDetails__tab-wrap">
              <li>
                <Link className="courseDetails__tab-list" to="#course">
                  Course Overview
                </Link>
              </li>
              <li>
                <Link className="courseDetails__tab-list" to="#curriculum">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link className="courseDetails__tab-list" to="#instructor">
                  Instructor
                </Link>
              </li>
              <li>
                <Link className="courseDetails__tab-list" to="#reeviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="courseDetails__tab-list" to="#comment">
                  Comment
                </Link>
              </li>
            </ul>
            <div className="course" id="course">
              <h3 className="courseDetails__overview-title">
                Description Details
              </h3>
              <p className="courseDetails__overview-content">
              In this investigation, we&apos;ll employ a systematic methodology to perform user enumeration against a target system. Starting with initial reconnaissance to identify potential user identifiers, we&apos;ll progress through low and mid-level scanning techniques. Moving forward, we&apos;ll craft customized payloads using tools like Burp Suite and Nmap, later exporting them as formatted request files. These payloads will then be seamlessly integrated into our enumeration scripts, where we&apos;ll leverage Python to automate requests and analyze responses. Finally, we&apos;ll compile the validated user list and document our findings.
              </p>
              <h3 className="courseDetails__overview-title">
                In this course, You&apos;ll learn:
              </h3>
              <ul className="courseDetails__overview-list">
                <li className="courseDetails__overview-item">
                  <img src={CheckmarkIcon} alt="Icon" />
                  Basic principles of user enumeration.
                </li>
                <li className="courseDetails__overview-item">
                  <img src={CheckmarkIcon} alt="Icon" />
                  Advanced techniques for exploiting enumeration vulnerabilities.
                </li>
                <li className="courseDetails__overview-item">
                  <img src={CheckmarkIcon} alt="Icon" />
                  How to craft payloads and conduct credential stuffing attacks.
                </li>
                <li className="courseDetails__overview-item">
                  <img src={CheckmarkIcon} alt="Icon" />
                  Tools and software, with a focus on Hydra for this assessment.
                </li>
                <li className="courseDetails__overview-item">
                  <img src={CheckmarkIcon} alt="Icon" />
                  Principles of username format discovery and authentication bypass techniques.
                </li>
                <li className="courseDetails__overview-item">
                  <img src={CheckmarkIcon} alt="Icon" />
                  Strategies for log analysis and post-enumeration exploitation.
                </li>
              </ul>
            </div>
            <div className="curriculum" id="curriculum">
              <p className="courseDetails__overview-title">Table of contents</p>
              <ul className="courseDetails__curriculum-list">
                <li className="courseDetails__curriculum-listItem">
                  <span className="courseDetails__curriculum-icon">
                    <img src={LessonIcon} alt="Icon" />
                  </span>
                  <span className="courseDetails__curriculum-text">
                    20 lessons(3h 43m)
                  </span>
                </li>
                <li className="courseDetails__curriculum-listItem">
                  <span className="courseDetails__curriculum-icon">
                    <img src={FileIcon} alt="Icon" />
                  </span>
                  <span className="courseDetails__curriculum-text">
                    23 downloads (18 files)
                  </span>
                </li>
                <li className="courseDetails__curriculum-listItem">
                  <span className="courseDetails__curriculum-icon">
                    <img src={QuizIcon} alt="Icon" />
                  </span>
                  <span className="courseDetails__curriculum-text">
                    Quiz and 30+ exercises
                  </span>
                </li>
              </ul>
            </div>
            <div className="faq">
              <p className="courseDetails__faq-title">Getting Started</p>
              <div className="accordion_item">
                <button
                  className="accordion_title course-open popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  Course Intro <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <p className="courseDetails__final-title">
                Final and Bonus lesson
              </p>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                 User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
              <div className="accordion_item">
                <button
                  className="accordion_title course-lock popup_video"
                  data-mfp-src="../assets/media/videos/features-video.mp4"
                >
                  User Enumeration: Unveiling Hidden Accounts
                  <span className="accordion_durations">2.04</span>
                </button>
              </div>
            </div>
            <div className="courseDetails__instractor-wrap" id="instructor">
              <div className="courseDetails__instractor-inner">
                <div className="courseDetails__instractor-left">
                  <img src={ReviewerImage} alt="Avatar" />
                </div>
                <div className="courseDetails__instractor-right">
                  <h4 className="courseDetails__instractor-name">
                    Bessie Wiegand
                  </h4>
                  <p className="courseDetails__instractor-designation">
                    Cyber Security Expert
                  </p>
                  <ul className="courseDetails__instractor-meta d-flex align-items-center gap-3">
                    <li className="courseDetails__instractor-item">
                      <img src={ReviewerStarIcon} alt="Icon" />
                      <span>(50 Reviews)</span>
                    </li>
                    <li className="courseDetails__instractor-item">
                      <img src={UserTwoIcon} alt="Icon" />
                      2,480 Student
                    </li>
                    <li className="courseDetails__instractor-item">
                      <img src={YouTubeIconSmall} alt="Icon" />
                      05 Course
                    </li>
                  </ul>
                </div>
              </div>
              <p className="courseDetails__instractor-content">
                Quis vel eros donec ac odio. Nunc mattis enim ut tellus
                elementum sagittis vitae. Lacus viverra vitae congue eu
                consequat ac felis. Tellus at urna condimentum mattis
                pellentesque.
              </p>
            </div>
            <div className="courseDetails__review-wrap" id="reeviews">
              <div className="courseDetails__rating-inner">
                <div className="courseDetails__rating-left">
                  <span className="courseDetails__rating-title">4.9</span>
                  <img src={ReviewIconBold} alt="Icon" />
                  <p className="courseDetails__rating-count">09 Reviews</p>
                </div>
                <div className="courseDetails__rating-right">
                  <ul className="courseDetails__rating-list">
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        80%
                      </span>
                      <span>
                        <img src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" />
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        60%
                      </span>
                      <span>
                        <img src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" />
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        40%
                      </span>
                      <span>
                        <img src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" />
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        30%
                      </span>
                      <span>
                        <img src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" />
                    </li>
                    <li className="courseDetails__rating-item">
                      <span className="courseDetails__rating-purchent">
                        10%
                      </span>
                      <span>
                        <img src={StarIcon} alt="Icon" />
                      </span>
                      <span className="courseDetails__rating-progress" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="courseDetails__comment" id="comment">
              <p className="courseDetails__comment-title">Reviews</p>
              <div className="courseDetails__comment-item">
                <div className="courseDetails__left">
                  <img src={CommentorOne} alt="Review" />
                </div>
                <div className="courseDetails__right">
                  <p className="courseDetails__comment-date">01 Jan 2026</p>
                  <h5 className="courseDetails__comment-name">
                    Bradford Windler
                  </h5>
                  <img src={ReviewIconBold} alt="Icon" />
                  <p className="courseDetails__comment-text">
                    Magna ac placerat vestibulum lectus. Est ullamcorper eget
                    nulla facilisi etiam dignissim diam quis enim. Nunc vel
                    risus commodo viverra maecenas accumsan lacus
                  </p>
                  <Link className="btn-share btn-hover-secondary" to="#">
                    <img src={ShareIcon} alt="Icon" />
                    Replay
                  </Link>
                </div>
              </div>
              <div className="courseDetails__comment-item">
                <div className="courseDetails__left">
                  <img src={CommentorTwo} alt="Review" />
                </div>
                <div className="courseDetails__right">
                  <p className="courseDetails__comment-date">01 Jan 2026</p>
                  <h5 className="courseDetails__comment-name">Anna Franecki</h5>
                  <img src={ReviewIconBold} alt="Icon" />
                  <p className="courseDetails__comment-text">
                    Magna ac placerat vestibulum lectus. Est ullamcorper eget
                    nulla facilisi etiam dignissim diam quis enim. Nunc vel
                    risus commodo viverra maecenas accumsan lacus
                  </p>
                  <Link className="btn-share btn-hover-secondary" to="#">
                    <img src={ShareIcon} alt="Icon" />
                    Replay
                  </Link>
                </div>
              </div>
              <div className="courseDetails__comment-item border-0 mb-1">
                <div className="courseDetails__left">
                  <img src={CommentorThree} alt="Review" />
                </div>
                <div className="courseDetails__right">
                  <p className="courseDetails__comment-date">01 Jan 2026</p>
                  <h5 className="courseDetails__comment-name">
                    Annette Deckow
                  </h5>
                  <img src={ReviewIconBold} alt="Icon" />
                  <p className="courseDetails__comment-text">
                    Magna ac placerat vestibulum lectus. Est ullamcorper eget
                    nulla facilisi etiam dignissim diam quis enim. Nunc vel
                    risus commodo viverra maecenas accumsan lacus
                  </p>
                  <Link className="btn-share btn-hover-secondary" to="#">
                    <img src={ShareIcon} alt="Icon" />
                    Replay
                  </Link>
                </div>
              </div>
              <div className="courseDetails__form">
                <form>
                  <h6 className="courseDetails__addreview">Add a review</h6>
                  <p className="courseDetails__like-title">
                    What is it like to Course?
                    <img src={ReviewerStarIcon} alt="Icon" />
                  </p>
                  <div className="form-block-wrap">
                    <div className="form-block">
                      <input
                        type="text"
                        className="single-input"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-block">
                      <input
                        type="email"
                        className="single-input"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-block">
                    <textarea
                      className="single-input single-textarea"
                      id="exampleFormControlTextarea1"
                      placeholder="Write your message..."
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-form btn-hover-secondary"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="courseDetails__right">
            <div className="md-none">
              <div className="courseDetails__price-wrap mt-4">
                <div className="courseDetails__price-inner">
                  <div>
                    <p className="courseDetails__price">$19.00</p>
                    <p className="courseDetails__discount">
                      90% Disc.&nbsp;Original price <span>$99.99</span>
                    </p>
                    <Link className="btn-buyNow btn-hover-secondary" to="#">
                      Buy Now
                    </Link>
                  </div>
                  <div>
                    <ul className="courseDetails__price-list">
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={UserStarIcon} alt="Icon" />
                          Review :
                        </span>
                        <span className="courseDetails__duration">
                          95% positive
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={UserTwoIcon} alt="Icon" />
                          Student :
                        </span>
                        <span className="courseDetails__duration">2,480</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={TimeCircleIcon} alt="Icon" />
                          Duration :
                        </span>
                        <span className="courseDetails__duration">2h 30m</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={ChartIcon} alt="Icon" />
                          Level :
                        </span>
                        <span className="courseDetails__duration">
                          Beginner
                        </span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={GlobalIcon} alt="Icon" />
                          Language :
                        </span>
                        <span className="courseDetails__duration">English</span>
                      </li>
                      <li className="courseDetails__price-item">
                        <span className="courseDetails__info">
                          <img src={CertificateIcon} alt="Icon" />
                          Certificate :
                        </span>
                        <span className="courseDetails__duration">Yes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
