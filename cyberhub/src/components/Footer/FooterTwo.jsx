import { footerTwo as footer } from "@/data/footer";
import { socialTwo as socials } from "@/data/social";
import { Link } from "react-router-dom";

export default function FooterTwo() {
  return (
    <footer className="footer__area-4">
      <div className="footer__top-4">
        <img className="microbus run" src={footer.microBusImage} alt="Bus" />
        <div className="footer__topInner-4">
          <Link to="children-education">
            <img src={footer.footerTwoLogo} alt="Logo" />
          </Link>
          <h2 className="footer__title-4 show-lg">Helpful Link</h2>
          <h2 className="footer__title-4 show-lg">Courses</h2>
          <h2 className="footer__title-4 show-lg">Newsletter</h2>
        </div>
      </div>
      <div className="footer__main-4">
        {/* <!-- Footer widget  --> */}
        <div className="footer__widget-4">
          <h3 className="footer__widgetTtile-4">Download our app</h3>
          <div className="footer__btnWrap-4">
            <Link className="btn-appStore-2 btn-hover-bubble" to="/">
              <img
                className="apple-icon"
                src={footer.appleStoreIcon}
                alt="Icon"
              />
              Apps Store
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <Link className="btn-playstor-2 btn-hover-bubble" to="#">
              <img
                className="playstor-icon"
                src={footer.playStoreIcon}
                alt="Icon"
              />
              Play Store
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
        </div>
        {/* <!-- Footer widget  --> */}
        <div className="footer__widget-4">
          <h2 className="footer__title-4 show-sm">Helpful Link</h2>
          <ul className="footer__menu-4">
            <li className="footer__menu-item-4">
              <Link to="about">About Us</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="blog">Event & News</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="instructors">Our Team</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="courses">Our Course</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* <!-- Footer widget  --> */}
        <div className="footer__widget-4">
          <h2 className="footer__title-4 show-sm">Courses</h2>
          <ul className="footer__menu-4">
            <li className="footer__menu-item-4">
              <Link to="course-detail">Spoofing</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="course-detail">Assessement</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="course-detail">Prevention</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="course-detail">Exploitation</Link>
            </li>
            <li className="footer__menu-item-4">
              <Link to="course-detail">Maintain</Link>
            </li>
          </ul>
        </div>
        {/* <!-- Footer widget  --> */}
        <div className="footer__widget-4">
          <h2 className="footer__title-4 show-sm">Newsletter</h2>
          <p className="footer__content-4">
            Get to know all features you can get with us. Let’s begin!
          </p>
          <form action="/" className="search-from-4">
            <input
              className="serach-input-4"
              type="email"
              placeholder="Your email..."
              name="email"
            />
            <button className="btn-join btn-hover-bubble" type="submit">
              Join Now
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
        {/* <!-- Footer widget  --> */}
      </div>
      <div className="footer__btm-4">
        <p className="footer__copyrightText-4">
          © CyberHub 2024, Designed{" "}
          <Link to="https://codexshaper.com">MohamedNacef</Link>
        </p>
        {/* <!-- Footer socail  --> */}
        <ul className="footer__social-4">
          {socials.map((social, index) => (
            <li key={index} className="footer__social-item-4">
              <Link to={social.link}>
                <img
                  className="footer__socaiIcon-4"
                  src={social.icon}
                  alt="Icon"
                />
              </Link>
            </li>
          ))}
        </ul>
        {/* <!-- Footer socail  --> */}
      </div>
      {/* <!-- Shape  --> */}
      <img
        className="footer__shapeFour-1 rotate"
        src={footer.starRedShape}
        alt="Shape"
      />
      <img
        className="footer__shapeFour-2 moveLeft"
        src={footer.shapeGreen}
        alt="Shape"
      />
      <img
        className="footer__shapeFour-3 zoom-in-out"
        src={footer.ftShape}
        alt="Shape"
      />
    </footer>
  );
}