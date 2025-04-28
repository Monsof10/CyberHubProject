import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import CtaOne from "@/components/CTA/CtaOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import CourseFilterOne from "@/components/CourseFilter/CourseFilterOne";

export default function CourseFilter() {
  const data = {
    title: "Course Filter",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Course Filter",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <InnerHeroOne data={data} />
      <CourseFilterOne />
      <CtaOne />
    </LayoutOne>
  );
}
