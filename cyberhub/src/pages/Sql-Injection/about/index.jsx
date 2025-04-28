import AboutFour from "@/components/About/AboutFour";
import CtaOne from "@/components/CTA/CtaOne";
import CounterTwo from "@/components/Counter/CounterTwo";
import HeroFour from "@/components/Hero/HeroFour";
import InstructorOne from "@/components/Instructor/InstructorOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import ServiceThree from "@/components/Service/ServiceThree";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";

export default function AboutPage() {
  return (
    <LayoutOne>
      <main>
        <HeroFour />
        <ServiceThree />
        <CounterTwo />
        <AboutFour />
        <TestimonialOne />
        <InstructorOne type="2" spacingclassName="pt-120 pb-130" />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
