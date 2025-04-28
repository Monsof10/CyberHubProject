import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CommentCardOne.propTypes = {
  comment: PropTypes.object,
};

export default function CommentCardOne({ comment }) {
  return (
    <div className="postDetails__comment-wrap">
      {comment.title && (
        <p className="courseDetails__comment-title">{comment.title}</p>
      )}
      {/* Comment list  */}
      {comment.items.map((commentItem, index) => (
        <div key={index} className="courseDetails__comment-list">
          <div className="courseDetails__comment-item">
            {commentItem.image && (
              <div className="courseDetails__left">
                <img src={commentItem.image} alt="Review" />
              </div>
            )}
            <div className="courseDetails__right">
              {commentItem.date && (
                <p className="courseDetails__comment-date">
                  {commentItem.date}
                </p>
              )}
              {commentItem.author && (
                <h5 className="courseDetails__comment-name">
                  {commentItem.author}
                </h5>
              )}
              {commentItem.reviewImage && (
                <img src={commentItem.reviewImage} alt="Icon" />
              )}
              {commentItem.description && (
                <p className="courseDetails__comment-text">
                  {commentItem.description}
                </p>
              )}
              {commentItem.replyBtn && (
                <Link
                  className="btn-comment"
                  to={commentItem.replyBtn.link ?? "#"}
                >
                  <img
                    className="comment-icon"
                    src={commentItem.replyBtn.icon}
                    alt="Icon"
                  />
                  {commentItem.replyBtn.text}
                </Link>
              )}
            </div>
          </div>
          {/* Comment reply */}
          {commentItem.replies &&
            commentItem.replies.map((reply, index) => (
              <div
                key={index}
                className="courseDetails__comment-item comment-reply"
              >
                {reply.image && (
                  <div className="courseDetails__left">
                    {reply.image && <img src={reply.image} alt="Review" />}
                  </div>
                )}
                <div className="courseDetails__right">
                  {reply.date && (
                    <p className="courseDetails__comment-date">{reply.date}</p>
                  )}
                  {reply.author && (
                    <h5 className="courseDetails__comment-name">
                      {reply.author}
                    </h5>
                  )}
                  {reply.reviewImage && (
                    <img src={reply.reviewImage} alt="Icon" />
                  )}
                  {reply.description && (
                    <p className="courseDetails__comment-text">
                      {reply.description}
                    </p>
                  )}
                  {reply.btn && (
                    <Link
                      className="btn-reply btn-hover-shadow"
                      to={reply.btn.link ?? "#"}
                    >
                      <img src={reply.btn.icon} alt="Icon" />
                      {reply.btn.text}
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </div>
      ))}

      {/* Comment form  */}
      <form action="/">
        <h6 className="form-title">Write your comment</h6>
        <p className="courseDetails__like-title">
          Your email address will not be published. Required fields are marked *
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
            <input type="email" className="single-input" placeholder="Email" />
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
        <button type="submit" className="btn-submitNow btn-hover-shadow">
          Submit Now
        </button>
      </form>
    </div>
  );
}
