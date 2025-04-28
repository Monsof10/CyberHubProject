import CtaOne from "@/components/CTA/CtaOne";
import CourseOne from "@/components/Course/CourseOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function CooursesPage() {
  const data = {
    title: "Courses",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Courses",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <CourseOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
