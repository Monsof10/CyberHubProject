import { headerTwo as header } from "@/data/header";
import MenuOne from "@/components/Menu/MenuOne";

import menus from "@/data/menu";
import { useThemeContext } from "@/context/ThemeContext";
import SearchOne from "@/components/Search/SearchOne";
import { Link } from "react-router-dom";

export default function HeaderTwo() {
  const { toggleMobileMenu } = useThemeContext();
  const data = {
    classNames: {
      header: "header__main-4",
      menu: "mainmenu-4",
      item: "menu-item-4",
    },
    menus: menus,
  };
  return (
    <header className="cyberhub-header header__area-4">

      <div className="container">
        <div className="header__wrapper-4">
          {/* <!-- Logo  --> */}
          {header.link && (
            <div className="header__logo-4">
              <Link to="/">
                <img src={header.logo} alt="Logo" />
              </Link>
            </div>
          )}
          {/* <!-- Menu  --> */}

          <MenuOne data={data} />
          {/* <!-- Menu --> */}
          <div className="header__right-4 d-flex align-items-center gap-4">
            <div className="header__social-4 d-flex align-items-center gap-3">
              <SearchOne />
              <div className="header__shopicon-4 d-flex gap-3 align-items-center">
                <span>
                  <img src={header.cartIcon} alt="Icon" />
                </span>
                <span className="header__notification-4">0</span>
              </div>
            </div>
            {/* <!-- Offcanvas icon  --> */}
            <div className="offcanvas-icon" onClick={toggleMobileMenu}>
              <i className="ph ph-list"></i>
            </div>
            {/* <!-- Offcanvas icon  --> */}
            <div className="header__btn-4 d-flex align-items-center gap-3">
              <Link className="btn-login" to="/Login">
                Login
              </Link>
              <Link
                className="btn-signUp-4 btn-hover-secondary btn-hover-bubble"
                to="/Signup"
              >
                Sign up free
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
