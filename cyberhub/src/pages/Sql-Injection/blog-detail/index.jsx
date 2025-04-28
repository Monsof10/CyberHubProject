import BlogDetailOne from "@/components/BlogDetail/BlogDetailOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function BlogDetailsPage() {
  const data = {
    title: "Blog Details",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog Details",
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
            <div className="row justify-content-center gy-5">
              <div className="col-xl-8 col-lg-8 col-md-12">
                <BlogDetailOne />
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutOne>
  );
}
