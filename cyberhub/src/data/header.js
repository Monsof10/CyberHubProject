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


const HeaderOne = {
  logo: LogoOne,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  categories: [
    {
      name: "Penetration Testing",
      link: "/SkillPaths/PenetrationTesting",
      icon: CategoryMenuOneIconOne,
    },
    {
      name: "Program Security",
      link: "/skillpaths/program-security",
      icon: CategoryMenuOneIconTwo,
    },
    {
      name: "System Security",
      link: "/skillpaths/system-security",
      icon: CategoryMenuOneIconThree,
    },
    {
      name: "Software Exploitation",
      link: "/skillpaths/software-exploitation",
      icon: CategoryMenuOneIconFour,
    },
    {
      name: "Blue/Red team",
      link: "/skillpaths/blue-red-team",
      icon: CategoryMenuOneIconFive,
    },
    
  ],
};

const headerTwo = {
  logo: LogoTwo,
  link: "Spoofing",
};

const headerThree = {
  logo: LogoThree,
  searchIcon: SearchIcon,
  cartIcon: CartIcon,
  link: "Spoofing",
};
export { HeaderOne, headerTwo, headerThree };
