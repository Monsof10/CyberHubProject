import { blogDetailOne as blog } from "@/data/blog";
import InstructorDetailCardOne from "@/components/Card/Instructor/InstructorDetailCardOne";
import CommentCardOne from "../Card/Comment/CommentCardOne";
import { Link } from "react-router-dom";

export default function BlogDetailOne() {
  return (
    <div className="postDetails__left">
      <div className="postDetails__left-inner">
        {/* Article  */}
        <div className="postDetails__item">
          {blog.image && (
            <img className="postDetails__thumb" src={blog.image} alt="Post" />
          )}
          {blog.meta && (
            <ul className="postDetails__meta d-flex gap-3 items-center">
              {blog.meta.map((metaItem, index) => (
                <li key={index} className="postDetails__meta-list">
                  {metaItem.icon && <img src={metaItem.icon} alt="Icon" />}
                  <Link to={metaItem.link ?? "#"}>{metaItem.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Post content  */}
        <div className="postDetails__content-wrap">
          {blog.title.one && (
            <h2 className="postDetails__title">{blog.title.one}</h2>
          )}
          {blog.description.one && (
            <p className="postDetails__content">{blog.description.one}</p>
          )}
          {blog.description.two && (
            <p className="postDetails__content">{blog.description.two}</p>
          )}
          {blog.title.two && (
            <h3 className="postDetails__subtitle">{blog.title.two}</h3>
          )}
          {blog.description.three && (
            <p className="postDetails__content">{blog.description.three}</p>
          )}
          {blog.quote && (
            <blockquote className="postDetails__quote">
              {blog.quote.icon && <img src={blog.quote.icon} alt="Icon" />}
              {blog.quote.text && (
                <h4 className="postDetails__quote-content">
                  {blog.quote.text}
                </h4>
              )}
              {blog.quote.name && (
                <p className="postDetails__quote-name">{blog.quote.name}</p>
              )}
            </blockquote>
          )}
          {blog.description.four && (
            <p className="postDetails__content">{blog.description.four}</p>
          )}
          {blog.galleries && blog.galleries.length > 0 && (
            <div className="postDetails__gallery d-flex align-items-center gap-3">
              {blog.galleries.map((gallery, index) => (
                <img key={index} src={gallery} alt="Galler" />
              ))}
            </div>
          )}
          {/* Post tag  */}
          <div className="postDetails__tag-wrap">
            <div className="d-flex align-items-center gap-2">
              {blog.tag.title && (
                <p className="postDetails__tag-title">{blog.tag.title}</p>
              )}
              {blog.tag && blog.tag.items.length > 0 && (
                <ul className="postDetails__tags">
                  {blog.tag.items.map((item, index) => (
                    <li key={index}>
                      <Link className="postDetails__tag-link" to={item.link}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="d-flex align-items-center gap-2">
              {blog.share.title && (
                <p className="postDetails__tag-title">{blog.share.title}</p>
              )}
              {blog.share.items && blog.share.items.length > 0 && (
                <ul className="postDetails__share-list">
                  {blog.share.items.map((item, index) => (
                    <li key={index}>
                      <Link className="postDetails__share-link" to={item.link}>
                        <img
                          className="share-icon"
                          src={item.icon}
                          alt="Icon"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <InstructorDetailCardOne instructor={blog.instructor} />
      {/* Comment section*/}
      <CommentCardOne comment={blog.comment} />
    </div>
  );
}
