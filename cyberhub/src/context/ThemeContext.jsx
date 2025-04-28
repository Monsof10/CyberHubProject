import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
import PropTypes from "prop-types";

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  ThemeProvider.propTypes = {
    children: PropTypes.object,
  };
  const [isFixedTop, setIsFixedTop] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector(".skillhub-header");
      if (el) {
        const navbarHeight = el.offsetHeight;
        if (window.scrollY > navbarHeight + 150) {
          setIsFixedTop(true);
        } else if (window.scrollY < navbarHeight) {
          setIsFixedTop(false);
        }
        if (window.scrollY > window.innerHeight) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubMenu = (index, event) => {
    event.preventDefault();
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const popupMobileMenu = document.querySelector(".offcanvas");
    if (popupMobileMenu) {
      if (!isMobileMenuOpen) {
        popupMobileMenu.classList.add("show");
      } else {
        popupMobileMenu.classList.remove("show");
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isFixedTop,
        openSubMenuIndex,
        setOpenSubMenuIndex,
        toggleSubMenu,
        toggleMobileMenu,
        showScrollTop,
        scrollToTop,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
