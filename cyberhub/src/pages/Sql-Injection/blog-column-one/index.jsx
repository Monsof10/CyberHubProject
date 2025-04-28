import BlogContentOne from "@/components/BlogContent/BlogContentOne";
import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function BlogColumnOnePage() {
  const data = {
    title: "Blog Column One",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog Column One",
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
            <div className="row justify-content-center gy-5">
              <div className="col-xl-10 col-lg-8 col-md-12">
                <BlogContentOne column={1} imageClass="w-100" />
              </div>
            </div>
          </div>
        </div>
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
