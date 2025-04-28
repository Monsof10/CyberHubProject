import { blogSidebarOne as sidebar } from "@/data/blog";
import { Link } from "react-router-dom";

export default function BlogSidebarOne() {
  return (
    <div className="post__right">
      <div className="post__sidebar">
        <aside className="post__blcok-item">
          {/* Search */}
          {sidebar.search && (
            <span className="post__sidebar-title">
              {" "}
              {sidebar.search.title}{" "}
            </span>
          )}
          <form action="/" className="sidebar-search">
            <input
              className="sidebar-input"
              type="text"
              placeholder="Search here...."
              name="search"
            />
            {sidebar.search.icon && (
              <button className="btn-sidebar" type="submit">
                <img src={sidebar.search.icon} alt="Icon" />
              </button>
            )}
          </form>
        </aside>
        <aside className="post__blcok-item">
          {/* Post */}
          {sidebar.post.title && (
            <span className="post__sidebar-title"> {sidebar.post.title} </span>
          )}
          {sidebar.post && sidebar.post.items.length > 0 && (
            <div className="post__latstPost-wrap">
              {sidebar.post.items.map((post, index) => (
                <article key={index} className="post__latstPost-item">
                  {post.image && (
                    <div className="post__latstPost-thumb">
                      <img src={post.image} alt="Post" />
                    </div>
                  )}
                  <div className="post__latstPost-content">
                    <p className="post__latstPost-date">
                      {post.icon && <img src={post.icon} alt="Icon" />}
                      {post.date}
                    </p>
                    {post.title && (
                      <h3>
                        <Link
                          className="post__latstPost-title"
                          to={post.link ?? "#"}
                        >
                          {post.title}
                        </Link>
                      </h3>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </aside>
        <aside className="post__blcok-item">
          {/* Categories */}
          {sidebar.category.title && (
            <span className="post__sidebar-title">
              {" "}
              {sidebar.category.title}{" "}
            </span>
          )}
          {sidebar.category && sidebar.category.items.length > 0 && (
            <ul className="post__categories">
              {sidebar.category.items.map((category, index) => (
                <li key={index} className="post__categories-item">
                  <Link
                    className="post__categories-link"
                    to={category.link ?? "#"}
                  >
                    {category.name}
                  </Link>
                  <span> {category.count} </span>
                </li>
              ))}
            </ul>
          )}
        </aside>
        <aside className="post__blcok-item">
          {/* Tags */}
          {sidebar.tag.title && (
            <span className="post__sidebar-title"> {sidebar.tag.title} </span>
          )}
          {sidebar.tag && sidebar.tag.items.length > 0 && (
            <ul className="post__tags">
              {sidebar.tag.items.map((tag, index) => (
                <li key={index}>
                  <Link className="post__tag-link" to={tag.link ?? "#"}>
                    {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
