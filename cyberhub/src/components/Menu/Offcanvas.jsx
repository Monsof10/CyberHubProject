import menus from "@/data/menu";
import { useThemeContext } from "@/context/ThemeContext";

import CanvasAbout from "/assets/imgs/bg/canvas-about.png";
import MenuIconOne from "/assets/imgs/menu-icon/s1.svg";
import MenuIconTwo from "/assets/imgs/menu-icon/s2.svg";
import MenuIconThree from "/assets/imgs/menu-icon/s3.svg";
import MenuIconFour from "/assets/imgs/menu-icon/s4.svg";
import MenuIconFive from "/assets/imgs/menu-icon/s5.svg";
import { Link } from "react-router-dom";

export default function Offcanvas() {
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
  } = useThemeContext();
  const pathName = "/";
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

  const checkActiveMenu = (menu) => {
    if (menu.to == "#" && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.to == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.to ? "active" : "";
  };

  const hideMobileMenu = (index = null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index);
  };
  return (
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight">
      <div className="c-backdrop" onClick={toggleMobileMenu}></div>
      <button
        type="button"
        className="offcanvas-icon"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        onClick={toggleMobileMenu}
      >
        <i className="ph ph-x" />
      </button>
      <div className="offcanvas-inner">
        <div className="offcanvas-body">
          <div className="mobile_menu_nav">
            {menus && menus.length > 0 && (
              <ul className="menu_list">
                {menus.map((menu, index) => (
                  <li
                    key={index}
                    className={`menu-item ${
                      menu.subMenus && menu.subMenus.length > 0
                        ? "menu-item-has-children"
                        : ""
                    } ${openSubMenuIndex === index ? "show" : ""}`}
                  >
                    <Link
                      to={
                        menu.subMenus && menu.subMenus.length > 0
                          ? "#"
                          : menu.link
                      }
                      onClick={(event) =>
                        menu.subMenus && menu.subMenus.length > 0
                          ? toggleSubMenu(index, event)
                          : hideMobileMenu(null)
                      }
                      className={`${checkActiveMenu(menu)}`}
                    >
                      {(menu.subMenus || menu.megaMenu) && (
                        <span>{`(0${menu.subMenus.length})`}</span>
                      )}
                      {menu.name}
                    </Link>
                    {menu.subMenus && menu.subMenus.length > 0 && (
                      <ul
                        className={`sub-menu ${
                          openSubMenuIndex === index ? "open" : ""
                        }`}
                      >
                        {menu.subMenus.map((subMenu, key) => (
                          <li key={key} className="menu-item">
                            <Link
                              to={subMenu.link ?? "#"}
                              className={`${
                                routePath == subMenu.link ? "current" : ""
                              }`}
                              onClick={() => hideMobileMenu(index)}
                            >
                              {subMenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="offcanvas-about">
          <div className="offcanvas-about-inner">
            <h4>About Us</h4>
            <p>
              Academe, study, and life on campus are interconnected aspects that
              shape the of experience
            </p>
            <div
              className="thumb"
              style={{
                maskImage: 'url("../assets/imgs/bg/canvas-about-bg.png")',
              }}
            >
              <img className="w-100" src={CanvasAbout} alt="img" />
            </div>
          </div>
        </div>
        <div className="offcanvas-social">
          <Link to="#">
            <img src={MenuIconOne} alt="img" />
          </Link>
          <Link to="#">
            <img src={MenuIconTwo} alt="img" />
          </Link>
          <Link to="#">
            <img src={MenuIconThree} alt="img" />
          </Link>
          <Link to="#">
            <img src={MenuIconFour} alt="img" />
          </Link>
          <Link to="#">
            <img src={MenuIconFive} alt="img" />
          </Link>
        </div>
        <div className="offcanvas-copyright">
          <p className="mb-0 text-center">MNacefZ
          </p>
        </div>
      </div>
    </div>
  );
}
