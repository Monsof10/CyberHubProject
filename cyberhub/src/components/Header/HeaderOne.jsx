import { HeaderOne as header } from "@/data/header";
import MenuOne from "@/components/Menu/MenuOne";

import menus from "@/data/menu";
import { useThemeContext } from "@/context/ThemeContext";
import SearchOne from "@/components/Search/SearchOne";
import { Link } from "react-router-dom";

export default function HeaderOne() {
  const { toggleMobileMenu } = useThemeContext();
  const data = {
    classNames: {
      header: "header__main",
      menu: "",
      item: "",
    },
    menus: menus,
  };

  return (
    <header className="cyberhub-header header__area">

      <div className="header__wrapper">
        {/* <!-- Header logo  --> */}
        <div className="header__logo">
          <Link to="/">
            <img src={header.logo} alt="Logo" />
          </Link>
          <div className="header__select-wrap">
            <span className="header__circel-icon">
              <i className="ph ph-circles-four"></i>
              All Categories
            </span>

            {header.categories && (
              <ul className="header__select" aria-label="All Categories">
                {header.categories.map((category, index) => (
                  <li key={index}>
                    <Link to={category.link}>
                      <img src={category.icon} alt="img" /> {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* <!-- Header menu  --> */}
        <MenuOne data={data} />
        {/* <!-- Header social  --> */}
        <div className="header__social">
          <SearchOne />
          <div className="header__shopicon">
            <span className="header__cartIcon">
              <img src={header.cartIcon} alt="Icon" />
            </span>
            <span className="header__notification">0</span>
          </div>
        </div>
        {/* <!-- Offcanvas icon  --> */}
        <div className="offcanvas-icon" onClick={toggleMobileMenu}>
          <i className="ph ph-list"></i>
        </div>
        {/* <!-- Header Button  --> */}
        <div className="header__btn">
            <Link className="btn-login" to="/Login">
              Login
            </Link>
            <Link className="btn-signUp btn-hover-shadow" to="/Signup">
              Sign up free
            </Link>

        </div>
      </div>
      {/* <!-- Header Search  --> */}
    </header>
  );
}
