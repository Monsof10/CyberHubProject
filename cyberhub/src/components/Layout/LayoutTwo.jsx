import Offcanvas from "@/components/Menu/Offcanvas";
import HeaderTwo from "@/components/Header/HeaderTwo";
import FooterTwo from "@/components/Footer/FooterTwo";
import AnimationClient from "@/components/Client/AnimationClient";
import PropTypes from "prop-types";
import "@/assets/scss/children-education.scss";

LayoutTwo.propTypes = {
  children: PropTypes.object,
  options: PropTypes.bool,
};

export default function LayoutTwo({
  children,
  options = { header: true, footer: true, offcanvas: true, animation: true },
}) {
  return (
    <>
      {options.header && <HeaderTwo />}
      {options.offcanvas && <Offcanvas />}
      {children}
      {options.animation && <AnimationClient />}
      {options.footer && <FooterTwo />}
    </>
  );
}
