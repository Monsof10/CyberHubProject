import BlogContentOne from "@/components/BlogContent/BlogContentOne";
import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function BlogColumnThreePage() {
  const data = {
    title: "Blog CVolumn Three",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog Column Three",
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
            <BlogContentOne column={3} />
          </div>
        </div>
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
