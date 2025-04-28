import { contactOne as contact } from "@/data/contact";
import { Link } from "react-router-dom";

export default function ContactFormOne() {
  return (
    <section className="contact__area pt-130 pb-130">
      <div className="container">
        <div className="contact__form-wrap">
          {/* <!-- Form  --> */}
          <form action="/">
            {contact.form.title && (
              <h2 className="contact__title">{contact.form.title}</h2>
            )}
            <div className="contact__form-blockWrap">
              <div className="contact__form-block">
                <label htmlFor="name">Full name *</label>
                <input
                  type="text"
                  className="contact__input"
                  name="name"
                  id="name"
                  placeholder="Jonthon don"
                />
              </div>
              <div className="contact__form-block">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  className="contact__input"
                  name="email"
                  id="email"
                  placeholder="info@skillhub.info"
                />
              </div>
              <div className="contact__form-block">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="text"
                  className="contact__input"
                  name="phone"
                  id="phone"
                  placeholder="(00) 123 456 789"
                />
              </div>
            </div>
            <div className="contact__form-block">
              <label htmlFor="message">Messages</label>
              <textarea
                className="contact__textarea"
                name="message"
                id="message"
                placeholder="Tell us more about project..."
                rows="4"
              ></textarea>
              <div className="contact__checkbox-wrap">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value="checkbox"
                />
                <label className="checkbox-label" htmlFor="checkbox">
                  Preserve my name, email, and website for future comments by
                  storing them in this browser.
                </label>
              </div>
            </div>
            <button type="submit" className="btn-sendMessage btn-hover-shadow">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact__socail-wrap">
          {/* <!-- Item  --> */}
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <img
                className="contact__socail-icon"
                src={contact.form.phoneIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              <p className="contact__social-title">Call Us</p>
              <Link
                className="contact__social-subtitle"
                to={`tel:${contact.form.phoneNumber}`}
              >
                {contact.form.phoneNumber}
              </Link>
            </div>
          </div>
          {/* <!-- Item  --> */}
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <img
                className="contact__socail-icon"
                src={contact.form.mailIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              <p className="contact__social-title">Email</p>
              <Link
                className="contact__social-subtitle"
                to={`mailto:${contact.form.email}`}
              >
                {contact.form.email}
              </Link>
            </div>
          </div>
          {/* <!-- Item  --> */}
          <div className="contact__social-item">
            <div className="contact__social-iconWrap">
              <img
                className="contact__socail-icon"
                src={contact.form.locationIcon}
                alt="Icon"
              />
            </div>
            <div className="contact__social-content">
              {contact.form.locationTitle && (
                <p className="contact__social-title">
                  {contact.form.locationTitle}
                </p>
              )}
              {contact.form.address && (
                <p className="contact__social-subtitle">
                  {contact.form.address}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
