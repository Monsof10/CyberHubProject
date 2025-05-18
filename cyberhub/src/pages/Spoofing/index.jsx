import AboutTwo from "@/components/About/AboutTwo";
import BlogTwo from "@/components/Blog/BlogTwo";
import CtaTwo from "@/components/CTA/CtaTwo";
import CategoryOne from "@/components/Category/CategoryOne";
import CourseTwo from "@/components/Course/CourseTwo";
import FaqOne from "@/components/Faq/FaqOne";
import HeroTwo from "@/components/Hero/HeroTwo";
import LayoutTwo from "@/components/Layout/LayoutTwo";
import ServiceTwo from "@/components/Service/ServiceTwo";
import TestimonialTwo from "@/components/Testimonial/TestimonialTwo";

export default function ChildrenEducationPage() {
  return (
    <LayoutTwo>
      <main>
        <HeroTwo />
        <CategoryOne />
        <ServiceTwo />
        <AboutTwo />
        <CourseTwo />
        <CtaTwo />
        <FaqOne />
        
        
      </main>
    </LayoutTwo>
  );
}
