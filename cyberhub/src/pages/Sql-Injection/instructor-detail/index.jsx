import CtaOne from "@/components/CTA/CtaOne";
import InstructorHeroCardOne from "@/components/Card/Instructor/InstructorHeroCardOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import InstructorCourseOne from "@/components/Instructor/InstructorCourseOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import { instructorDetailsOne as instructor } from "@/data/instructor";

export default function InstructorDetails() {
  const data = {
    title: "Instructor Details",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Instructor Details",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <InstructorHeroCardOne instructor={instructor} />
        <InstructorCourseOne data={{ ...instructor.course }} />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
