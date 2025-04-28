import BlogContentOne from "@/components/BlogContent/BlogContentOne";
import BlogSidebarOne from "@/components/BlogSidebar/BlogSidebarOne";
import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function Blogs() {
  const data = {
    title: "Blog",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <div className="post__area pt-130 pb-130">
          <div className="container">
            <div className="row gy-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <BlogContentOne />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <BlogSidebarOne />
              </div>
            </div>
          </div>
        </div>
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
