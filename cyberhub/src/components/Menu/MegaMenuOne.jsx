import PropTypes from "prop-types";
import { Link } from "react-router-dom";

MegaMenuOne.propTypes = {
  menus: PropTypes.array,
};

export default function MegaMenuOne({ menus }) {
  return (
    <div className="row g-0">
      <div className="col-lg-3">
        {/* <!-- mega menu left bar --> */}
        <div className="menu-left-bar-inner">
          {menus && menus.length > 0 && (
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {menus.map((menu, index) => (
                <button
                  key={index}
                  className={`nav-link ${index == 0 ? "active" : ""}`}
                  id={`nav-tab-${index + 1}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-tab-${index + 1}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-tab-${index + 1}`}
                  aria-selected="true"
                >
                  {menu.name} <span>({menu.items.length})</span>
                </button>
              ))}
            </div>
          )}
          <p className="copyright">@CyberHub 2024</p>
        </div>
      </div>
      <div className="col-lg-9 menu-right-side-inner">
        {/* <!-- mega menu right demo --> */}
        {menus && menus.length > 0 && (
          <div className="tab-content" id="nav-tabContent">
            {menus.map((menu, index) => (
              <div
                key={index}
                className={`tab-pane fade show ${index == 0 ? "active" : ""}`}
                id={`nav-tab-${index + 1}`}
                role="tabpanel"
                aria-labelledby={`nav-tab-${index + 1}-tab`}
              >
                {menu.items && menu.items.length > 0 && (
                  <div className="demo-list-wrap">
                    {menu.items.map((item, key) => (
                      <div key={key} className="single-demo-list text-center">
                        <div className="thumb">
                          {item.image && (
                            <Link to={item.link ?? "#"}>
                              <img src={item.image} alt="img" />
                            </Link>
                          )}
                        </div>
                        {item.title && (
                          <h4>
                            {item.title && (
                              <Link to={item.link ?? "#"}>{item.title}</Link>
                            )}
                          </h4>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
