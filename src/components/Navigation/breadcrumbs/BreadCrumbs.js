import React from "react";
import PropTypes from "prop-types";
import "./BreadCrumbs.scss";
const BreadCrumbs = ({ link1, link2, link3, link4,link5, isDarkMode }) => {
  const breadcrumbClass = `breadcrumb ${
    isDarkMode ? "dark-mode" : "light-mode"
  }`;
  return (
    <div className={breadcrumbClass}>
      <ul className="breadcrumb-ul">
        <li className="breadcrumb-li">
          <a className="breadcrumbs-link">{link1}</a>
          {/* <FontAwesomeIcon icon="fa-light fa-greater-than" /> */}
        </li>
        <li>
          <a className="breadcrumbs-link">{link2}</a>
        </li>
        <li>
          <a className="breadcrumbs-link">{link3}</a>
        </li>
        <li>
          <a className="breadcrumbs-link">{link4}</a>
        </li>
        <li>
          <a className="breadcrumbs-link">{link5} </a>
        </li>
      </ul>
    </div>
  );
};

BreadCrumbs.propTypes = {
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string.isRequired,
  link4: PropTypes.string.isRequired,
  link5: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
};

export default BreadCrumbs;
