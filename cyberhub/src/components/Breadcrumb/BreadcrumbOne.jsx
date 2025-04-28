import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BreadcrumbOne.propTypes = {
  breadcrumbs: PropTypes.array,
};

export default function BreadcrumbOne({ breadcrumbs }) {
  return (
    <ul className="breadcrumbs-2">
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index} className="breadcrumbs-list-2">
          <Link className="breadcrumbs-item-2" to={breadcrumb.link}>
            {breadcrumb.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
