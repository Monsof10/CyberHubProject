import { blogTwo as data } from "@/data/blog";
import BlogCardTwo from "../Card/Blog/BlogCardTwo";
export default function BlogTwo() {
  return (
    <section className="blog__area-3 pb-135">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="blog__titleWrap-3">
              {data.title && (
                <h2 className="section-title-4 move-line-3d">{data.title}</h2>
              )}
            </div>
          </div>
        </div>
        {data.blogs && data.blogs.length > 0 && (
          <div className="row gy-4">
            {data.blogs.map((blog, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-4">
                <BlogCardTwo blog={blog} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
