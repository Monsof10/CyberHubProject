import BlogContentOne from "@/components/BlogContent/BlogContentOne";
import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function BlogColumnFourPage() {
  const data = {
    title: "Blog Column Four",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog Column Four",
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
            <BlogContentOne column={4} />
          </div>
        </div>
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
