import Offcanvas from "@/components/Menu/Offcanvas";
import HeaderThree from "@/components/Header/HeaderThree";
import FooterThree from "@/components/Footer/FooterThree";
import AnimationClient from "@/components/Client/AnimationClient";
import PropTypes from "prop-types";
import "@/assets/scss/health-coach.scss";

LayoutThree.propTypes = {
  children: PropTypes.object,
  options: PropTypes.object,
};

export default function LayoutThree({
  children,
  options = { header: true, footer: true, offcanvas: true, animation: true },
}) {
  return (
    <>
      {options.header && <HeaderThree />}
      {options.offcanvas && <Offcanvas />}
      {children}
      {options.animation && <AnimationClient />}
      {options.footer && <FooterThree />}
    </>
  );
}
