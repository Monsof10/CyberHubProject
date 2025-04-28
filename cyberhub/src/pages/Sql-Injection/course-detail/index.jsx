import CtaOne from "@/components/CTA/CtaOne";
import CourseDetailOne from "@/components/CourseDetail/CourseDetailOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function CourseDetails() {
  const data = {
    title: "Course Details",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Course Details",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <CourseDetailOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
