import { blogOne as data } from "@/data/blog";
import BlogCardOne from "@/components/Card/Blog/BlogCardOne";
export default function BlogOne() {
  return (
    <section className="blog__area pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {data.title && (
              <div className="blog__title-wrap text-center move-line-3d">
                <h2 className="section-title">
                  {data.title.sliceOne} <span>{data.title.sliceTwo}</span>
                </h2>
              </div>
            )}
          </div>
        </div>
        {data.blogs && data.blogs.length > 0 && (
          <div className="row gy-4">
            {data.blogs.map((blog, index) => (
              <div
                key={index}
                className={`col-xl-4 col-lg-4 col-md-6 ${blog.animation.name}`}
                data-delay={blog.animation.delay}
              >
                <BlogCardOne blog={blog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
