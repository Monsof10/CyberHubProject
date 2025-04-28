import CtaOne from "@/components/CTA/CtaOne";
import ContactFormOne from "@/components/Form/ContactFormOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function ContactPage() {
  const data = {
    title: "Contact",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Contact",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <InnerHeroOne data={data} />
        <ContactFormOne />
        <CtaOne />
      </main>
    </LayoutOne>
  );
}
