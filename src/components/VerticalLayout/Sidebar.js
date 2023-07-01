import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import withRouter from "components/Common/withRouter";

//i18n
import { withTranslation } from "react-i18next";
import SidebarContent from "./SidebarContent";

import { Link } from "react-router-dom";

// import logo from "../../assets/images/logo.svg";

import logoLightPng from "../../assets/foodImages/signup/logo-white.png";
import iconLightSvg from "../../assets/foodImages/signup/iconWhite.png";
// import logoDark from "../../assets/images/logo-dark.png";
import logoDark from "../../assets/foodImages/signup/mainLogo.png";
import logoicon from "../../assets/foodImages/signup/mainLogoIcon.png"

const Sidebar = props => {

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={iconLightSvg} alt="" style={{width: "40px", height: "40px",  marginLeft: "-20px"}} />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt=""  style={{width: "163px", height: "43px"}} />
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoicon} alt="" style={{width: "40px", height: "40px", marginLeft: "-20px"}} />
            </span>
            <span className="logo-lg">
              <img src={logoDark} alt="" style={{width: "160px", height: "60px"}} />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  type: PropTypes.string,
};

const mapStatetoProps = state => {
  return {
    layout: state.Layout,
  };
};
export default connect(
  mapStatetoProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
