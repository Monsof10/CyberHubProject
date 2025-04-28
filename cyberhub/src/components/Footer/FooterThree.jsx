import socials from "@/data/social";
import { footerThree as footer } from "@/data/footer";
import { Link } from "react-router-dom";

export default function FooterThree() {
  return (
    <footer className="footer__area-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer__widget-6 footer__widget-subscribe">
              <h3 className="widget-title-6 style-2">
                {footer.title.sliceOne} <span>{footer.title.sliceTwo}</span>{" "}
                {footer.title.sliceThree}
              </h3>
              <form action="/" className="footer__form-6">
                <div className="single-input-inner">
                  <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 12.1465C0 9.62174 2.0467 7.57506 4.57143 7.57506C7.09617 7.57506 9.14286 9.62174 9.14286 12.1465H8C8 10.2529 6.46497 8.71791 4.57143 8.71791C2.67788 8.71791 1.14286 10.2529 1.14286 12.1465H0ZM4.57143 7.00363C2.67714 7.00363 1.14286 5.46934 1.14286 3.57506C1.14286 1.68077 2.67714 0.146484 4.57143 0.146484C6.46571 0.146484 8 1.68077 8 3.57506C8 5.46934 6.46571 7.00363 4.57143 7.00363ZM4.57143 5.86077C5.83429 5.86077 6.85714 4.83791 6.85714 3.57506C6.85714 2.3122 5.83429 1.28934 4.57143 1.28934C3.30857 1.28934 2.28571 2.3122 2.28571 3.57506C2.28571 4.83791 3.30857 5.86077 4.57143 5.86077Z"
                      fill="#34B082"
                    />
                  </svg>
                  <input
                    className="footer__input"
                    type="text"
                    placeholder="Full Name"
                    name="search"
                  />
                </div>
                <div className="single-input-inner">
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.6 0.146484H11.4C11.7314 0.146484 12 0.415116 12 0.746484V10.3465C12 10.6779 11.7314 10.9465 11.4 10.9465H0.6C0.268632 10.9465 0 10.6779 0 10.3465V0.746484C0 0.415116 0.268632 0.146484 0.6 0.146484ZM10.8 2.68924L6.04308 6.94929L1.2 2.67605V9.74648H10.8V2.68924ZM1.50688 1.34648L6.03714 5.34368L10.5006 1.34648H1.50688Z"
                      fill="#34B082"
                    />
                  </svg>
                  <input
                    className="footer__input"
                    type="text"
                    placeholder="Email"
                    name="search"
                  />
                </div>
                <button
                  className="btn-style-6 btn-hover-effect border-radius-50 mt-2"
                  type="submit"
                >
                  {footer.btnText}
                  <svg
                    className="ms-2"
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7105 0.557175L9.24683 0.146484L9.14665 0.490865C8.84962 1.51183 8.739 3.09155 9.48545 4.45633C9.67065 4.79494 9.90432 5.11237 10.1915 5.39902L0 5.39902V6.89395L10.1915 6.89395C9.90432 7.1806 9.67065 7.49803 9.48545 7.83664C8.739 9.20142 8.84962 10.7811 9.14665 11.8021L9.24683 12.1465L10.7105 11.7358L10.6103 11.3914C10.3788 10.5959 10.3307 9.45038 10.8264 8.54404C11.2824 7.71031 12.3023 6.89507 14.6307 6.89395L14.6352 6.89399L14.6409 6.89391L15 6.88851V5.39902H14.6353C12.3035 5.39902 11.2827 4.58319 10.8264 3.74893C10.3307 2.84259 10.3788 1.69708 10.6103 0.901552L10.7105 0.557175Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-8 footer__right-area">
            {footer.widgets && footer.widgets.length > 0 && (
              <div className="row">
                {footer.widgets.map((widget, index) => (
                  <div key={index} className="col-lg-4 col-sm-3">
                    <div className="footer__widget-6">
                      {widget.name && (
                        <h3 className="widget-title-6">{widget.name}</h3>
                      )}
                      {widget.menus && widget.menus.length > 0 && (
                        <ul className="footer__menu-6">
                          {widget.menus.map((menu, index) => (
                            <li key={index} className="footer__menu-item-6">
                              <Link
                                to={menu.link}
                                className={menu.className ? menu.className : ""}
                              >
                                {menu.icon && (
                                  <img
                                    className="btn-icon"
                                    src={menu.icon}
                                    alt="Icon"
                                    style={{ width: "auto" }}
                                  />
                                )}
                                {menu.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="footer__copyright">
              <div className="row">
                <div className="col-md-6 align-self-center">
                  <p className="mb-md-0 mb-3">
                    © Cyberhub 2024, Designed Academine
                  </p>
                </div>
                <div className="col-md-6 text-md-end">
                  {socials && socials.length > 0 && (
                    <ul className="footer__socail-6">
                      {socials.map((social, index) => (
                        <li key={index} className="social-item">
                          <Link className="social-link" to={social.link}>
                            <img src={social.icon} alt="Icon" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
