import { footerOne as footer } from "@/data/footer";
import socials from "@/data/social";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function FooterOne() {
  return (
    <footer className="footer__area">
      <div className="footer__socail-wrap">
        <div className="footer__social-inner">
          <div className="footer__logo">
            <Link to="/">
              <img src={footer.logo} alt="Logo" />
            </Link>
          </div>
          <div className="footer__btn d-flex align-items-center gap-3">
            {footer.title && (
              <h3 className="footer__app-title">{footer.title}</h3>
            )}
            <Link className="btn-appStore" to={footer.appleLink}>
              <img
                className="btn-icon"
                src={footer.appleIcon}
                alt="Icon"
                style={{ width: "auto", height: "auto" }}
              />
              {footer.appleTitle}
            </Link>
            <Link className="btn-playstor" to={footer.playLink}>
              <img
                className="btn-icon"
                src={footer.playIcon}
                alt="Icon"
                style={{ width: "auto", height: "auto" }}
              />
              {footer.playTitle}
            </Link>
          </div>
          {/* <!-- Footer social  -->  */}
          {socials && socials.length > 0 && (
            <ul className="footer__socail">
              {socials.map((social, index) => (
                <li key={index} className="footer__social-item">
                  <Link className="footer__social-link" to={social.link}>
                    <img src={social.icon} alt="Icon" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* <!-- Footer social  --> */}
        </div>
      </div>
      <div className="footer__btm">
        {/* <!-- Footer widget  --> */}

        <div className="footer__widget">
          <h3 className="footer__widget-title">
            Get our newsletter, event invites, plus
            <span>Product Insights</span>
          </h3>
          <form action="/" className="footer__form">
            <input
              className="footer__input"
              type="text"
              placeholder="Write your mail here..."
              name="search"
            />
            <button className="btn-submit" type="submit">
              <PaperPlaneTilt size={18} />
            </button>
          </form>
        </div>

        {/* <!-- Footer widget  --> */}
        {footer.widgets &&
          footer.widgets.map((widget, index) => (
            <div key={index} className="footer__widget">
              {widget.title && (
                <h3 className="footer__widget-title">{widget.title}</h3>
              )}
              {widget.menus && widget.menus.length > 0 && (
                <ul className="footer__menu">
                  {widget.menus.map((menu, idx) => (
                    <li
                      key={idx}
                      className={`${
                        menu.icon ? "footer__info-item" : "footer__menu-item"
                      }`}
                    >
                      {menu.icon && (
                        <span className="footer__info-icon">
                          <img src={menu.icon} alt="Icon" />
                        </span>
                      )}
                      {menu.link ? (
                        <Link to={menu.link}>{menu.name}</Link>
                      ) : (
                        menu.name
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
      <div className="footer__copyright text-center">
        <p className="footer__copyright-text">
          {footer.copyrightText}
          <Link to={footer.copyrightLink}>{footer.companyName}</Link>
        </p>
      </div>
    </footer>
  );
}
