import HeroOne from "@/components/Hero/HeroOne";
import PartnerOne from "@/components/Partner/PartnerOne";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import ServiceOne from "@/components/Service/ServiceOne";
import InstructorOne from "@/components/Instructor/InstructorOne";
import CounterOne from "@/components/Counter/CounterOne";
import BlogOne from "@/components/Blog/BlogOne";
import CtaOne from "@/components/CTA/CtaOne";
import AboutOne from "@/components/About/AboutOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function HomePage() {
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        <PartnerOne />
        <AboutOne />
        
        <TestimonialOne />
        <ServiceOne />
        <InstructorOne />
        <CounterOne />
        <BlogOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
