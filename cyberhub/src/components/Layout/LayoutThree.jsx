import Offcanvas from "../Menu/Offcanvas";
import HeaderThree from "../Header/HeaderThree";
import FooterThree from "../Footer/FooterThree";
import AnimationClient from "../Client/AnimationClient";
import PropTypes from "prop-types";
import "../../assets/scss/health-coach.scss";

LayoutThree.propTypes = {
  children: PropTypes.node,  // Changed from object to node since children can be any renderable content
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
