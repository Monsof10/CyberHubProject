import BlogDetailOne from "@/components/BlogDetail/BlogDetailOne";
import BlogSidebarOne from "@/components/BlogSidebar/BlogSidebarOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function BlogDetailsPage() {
  const data = {
    title: "Blog Details Right Sidebar",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog Details Right Sidebar",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <section className="postDetails__area pt-130 pb-130">
          <div className="container">
            <div className="row gy-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <BlogDetailOne />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <BlogSidebarOne />
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutOne>
  );
}
