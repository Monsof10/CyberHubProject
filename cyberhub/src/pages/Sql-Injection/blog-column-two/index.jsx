import BlogContentOne from "@/components/BlogContent/BlogContentOne";
import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function BlogColumnTwoPage() {
  const data = {
    title: "Blog Column Two",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Blog Column Two",
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
            <BlogContentOne column={2} />
          </div>
        </div>
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
