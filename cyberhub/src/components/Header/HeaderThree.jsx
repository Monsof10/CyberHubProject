import MenuOne from "../Menu/MenuOne";
import { headerThree as header } from "../../data/header";
import menus from "../../data/menu";
import { useThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import SearchOne from "../Search/SearchOne";
import { Link } from "react-router-dom";
import GoogleTranslateLanguageSelector from '../GoogleTranslateLanguageSelector';

export default function HeaderThree() {
  const { toggleMobileMenu } = useThemeContext();
  const { user } = useAuth();
  
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
        {/* Removed SearchOne and shop icon as per user request */}
        {/* <div className="header__social">
          <SearchOne textclassName="text-white" />
          <div className="header__shopicon">
            <span className="header__cartIcon">
              <img src={header.cartIcon} alt="Icon" />
            </span>
            <span className="header__notification">0</span>
          </div>
        </div> */}
        {/* <!-- Offcanvas icon  --> */}
        <div
          className="offcanvas-icon offcanvas-icon-2"
          onClick={toggleMobileMenu}
        >
          <i className="ph ph-list"></i>
        </div>
        {/* <!-- Header Button  --> */}
        <div className="header__btn" style={{ display: 'flex', alignItems: 'center' }}>
          {user ? (
            <>
              <div style={{ marginRight: '8px', transform: 'scale(0.8)' }}>
                <GoogleTranslateLanguageSelector />
              </div>
              <Link 
                className="btn-signUp btn-hover-effect border-radius-50" 
                to="/Profile"
                style={{
                  fontSize: '14px',
                  padding: '10px 45px',
                  backgroundColor: '#F1C40F',
                  color: '#000'
                }}
              >
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link 
                className="btn-login" 
                to="/Login"
                style={{
                  fontSize: '14px',
                  padding: '8px 16px'
                }}
              >
                Login
              </Link>
              <Link 
                className="btn-signUp btn-hover-effect border-radius-50" 
                to="/Signup"
                style={{
                  fontSize: '14px',
                  padding: '8px 16px'
                }}
              >
                Sign up free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
