import React from "react";
import PropTypes from "prop-types";
import "./BreadCrumbs.scss";

const BreadCrumbs = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  isDarkMode,
  isStyle1,
  isArrow,
}) => {
  const breadcrumbClass = `breadcrumb ${
    isDarkMode ? "dark-mode" : "light-mode"
  }`;
  // const style = `${isArrow ? ">" : "/"}`;
  // const breadCrumbsUl = `breadcrumb-ul [style]`;
  return (
    <div className={breadcrumbClass}>
      {isStyle1 ? (
        <div>
          <a className="breadcrumbs-link">{link1}</a>
          <a className="breadcrumbs-link">{link2}</a>
          <a className="breadcrumbs-link">{link3}</a>
          <a className="breadcrumbs-link">{link4}</a>
          <a className="breadcrumbs-link">{link5} </a>
        </div>
      ) : (
        <div>
          {isArrow ? (
            <div>
              <a className="breadcrumbs-link-style2">{link1}</a>
              <a className="breadcrumbs-link-style2">{link2}</a>
              <a className="breadcrumbs-link-style2">{link3}</a>
              <a className="breadcrumbs-link-style2">{link4}</a>
              <a className="breadcrumbs-link-style2">{link5} </a>
            </div>
          ) : (
            <div>
              <a className="breadcrumbs-link-style2 forward-slash">{link1}</a>
              <a className="breadcrumbs-link-style2 forward-slash">{link2}</a>
              <a className="breadcrumbs-link-style2 forward-slash">{link3}</a>
              <a className="breadcrumbs-link-style2 forward-slash">{link4}</a>
              <a className="breadcrumbs-link-style2 forward-slash">{link5} </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

BreadCrumbs.propTypes = {
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string.isRequired,
  link4: PropTypes.string.isRequired,
  link5: PropTypes.string.isRequired,
  isArrow: PropTypes.bool,
  isDarkMode: PropTypes.bool,
  isStyle1: PropTypes.bool,
};
export default BreadCrumbs;
