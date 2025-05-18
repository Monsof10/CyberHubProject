import HeroThree from "../../components/Hero/HeroThree";
import VideoOne from "../../components/Video/VideoOne";
import FeatureOne from "../../components/Feature/FeatureOne";
import AboutThree from "../../components/About/AboutThree";
import CourseThree from "../../components/Course/CourseThree";
import TestimonialThree from "../../components/Testimonial/TestimonialThree";
import WhatYouCanAcheive from "../../components/Feature/WhatYouCanAcheive";
import BlogThree from "../../components/Blog/BlogTheree";
import LayoutThree from "../../components/Layout/LayoutThree";

export default function DosMainPage() {
  return (
    <LayoutThree>
      <main>
        <HeroThree />
        <VideoOne />
        <FeatureOne />
        <AboutThree />
        <CourseThree />
        <TestimonialThree />
        <WhatYouCanAcheive />
        <BlogThree />
      </main>
    </LayoutThree>
  );
}
