import MenuOne from "@/components/Menu/MenuOne";

import { headerThree as header } from "@/data/header";

import menus from "@/data/menu";
import { useThemeContext } from "@/context/ThemeContext";
import SearchOne from "@/components/Search/SearchOne";
import { Link } from "react-router-dom";

export default function HeaderThree() {
  const { toggleMobileMenu } = useThemeContext();
  const data = {
    classNames: {
      header: "header__main m-auto",
      menu: "",
      item: "",
    },
    menus: menus,
  };
  return (
    <header className="cyberhub-header header__area-6">

      <div className="header__wrapper-6">
        {/* <!-- Header logo  --> */}
        <div className="header__logo">
          <Link to="/">
            <img src={header.logo} alt="Logo" />
          </Link>
        </div>
        {/* <!-- Header menu  --> */}
        <MenuOne data={data} />
        {/* <!-- Header social  --> */}
        <div className="header__social">
          <SearchOne textclassName="text-white" />
          <div className="header__shopicon">
            <span className="header__cartIcon">
              <img src={header.cartIcon} alt="Icon" />
            </span>
            <span className="header__notification">0</span>
          </div>
        </div>
        {/* <!-- Offcanvas icon  --> */}
        <div
          className="offcanvas-icon offcanvas-icon-2"
          onClick={toggleMobileMenu}
        >
          <i className="ph ph-list"></i>
        </div>
        {/* <!-- Header Button  --> */}
        <div className="header__btn">
            <Link className="btn-login" to="/Login">
              Login
            </Link>
            <Link className="btn-signUp btn-hover-effect border-radius-50" to="/Signup">
              Sign up free
            </Link>

        </div>
      </div>
    </header>
  );
}
