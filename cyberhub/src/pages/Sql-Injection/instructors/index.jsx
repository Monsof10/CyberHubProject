import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import InstructorListOne from "@/components/Instructor/InstructorListOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function InstructorsPage() {
  const data = {
    title: "Instructor",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Instructor",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <InstructorListOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
