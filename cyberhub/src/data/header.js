import LogoOne from "/assets/imgs/logo/header-logo-black.svg";
import LogoTwo from "/assets/imgs/logo/logo-children.webp";
import LogoThree from "/assets/imgs/logo/health-coach-logo.svg";
import SearchIcon from "/assets/imgs/icon/search-icon.svg";
import CartIcon from "/assets/imgs/icon/cart-icon.svg";

import CategoryMenuOneIconOne from "/assets/imgs/menu-icon/2.svg";
import CategoryMenuOneIconTwo from "/assets/imgs/menu-icon/3.svg";
import CategoryMenuOneIconThree from "/assets/imgs/menu-icon/4.svg";
import CategoryMenuOneIconFour from "/assets/imgs/menu-icon/5.svg";
import CategoryMenuOneIconFive from "/assets/imgs/menu-icon/6.svg";
import CategoryMenuOneIconSix from "/assets/imgs/menu-icon/7.svg";

const HeaderOne = {
  logo: LogoOne,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  categories: [
    {
      name: "Web Exploitation",
      link: "courses",
      icon: CategoryMenuOneIconOne,
    },
    {
      name: "Cryptography",
      link: "courses",
      icon: CategoryMenuOneIconTwo,
    },
    {
      name: "Reverse Engineering",
      link: "courses",
      icon: CategoryMenuOneIconThree,
    },
    {
      name: "Forensics",
      link: "courses",
      icon: CategoryMenuOneIconFour,
    },
    {
      name: "General Skills",
      link: "courses",
      icon: CategoryMenuOneIconFive,
    },
    {
      name: "Binary Exploitation",
      link: "courses",
      icon: CategoryMenuOneIconSix,
    },
  ],
};

const headerTwo = {
  logo: LogoTwo,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "Spoofing",
};

const headerThree = {
  logo: LogoThree,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "Spoofing",
};
export { HeaderOne, headerTwo, headerThree };
