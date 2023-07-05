import React, { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BsArrowRight, BsBorderWidth } from 'react-icons/bs';
import { PiBowlFoodBold } from 'react-icons/pi';
import { ImPacman } from 'react-icons/im';
import { GiStarProminences } from 'react-icons/gi';

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";
import "../../components/VerticalLayout/sidebar.scss";

const SidebarContent = props => {
  const ref = useRef();
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const path = useLocation();
  const activeMenu = useCallback(() => {
    const pathName = path.pathname;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="bx bx-home-circle"></i>
                <span>{props.t("Dashboards")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/home" ><BsArrowRight className="arroesubmenu" /> {props.t("Main Menu")}</Link>
                </li>
                <li>
                  <Link to="/foodOrder" ><BsArrowRight className="arroesubmenu" /> {props.t("Food Order")}</Link>
                </li>
                <li>
                  <Link to="/favoriteMenu" ><BsArrowRight className="arroesubmenu" /> {props.t("Favorite Menu")}</Link>
                </li>
                <li>
                  {/* <Link to="#" ><BsArrowRight className="arroesubmenu" /> {props.t("Message")}</Link> */}
                </li>
                <li>
                  <Link to="/order-history" ><BsArrowRight className="arroesubmenu" /> {props.t("Order History")}</Link>
                </li>
                <li>
                  {/* <Link to="#" ><BsArrowRight className="arroesubmenu" /> {props.t("Notification")}</Link> */}
                </li>
                <li>
                  <Link to="/bill-order" ><BsArrowRight className="arroesubmenu" /> {props.t("Bill-Order")}</Link>
                </li>
                <li>
                  {/* <Link to="#" ><BsArrowRight className="arroesubmenu" /> {props.t("Setting")}</Link> */}
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <PiBowlFoodBold className="Restaurant-icons" />
                <span>{props.t("Restaurant")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/menu-data" ><BsArrowRight className="arroesubmenu" /> {props.t("Menu")}</Link>
                </li>
                <li>
                  <Link to="/activeOrder" ><BsArrowRight className="arroesubmenu" /> {props.t("Order-Menu")}</Link>
                </li>
                <li>
                  <Link to="/orderPayment" ><BsArrowRight className="arroesubmenu" /> {props.t("Order Payment")}</Link>
                </li>
                <li>
                  <Link to="/orderListing" ><BsArrowRight className="arroesubmenu" /> {props.t("Order Listing")}</Link>
                </li>
                <li>
                  <Link to="/setting" ><BsArrowRight className="arroesubmenu" /> {props.t("Setting")}</Link>
                </li>
              </ul>

            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <ImPacman className="Management-icons" />
                <span>{props.t("Management")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/requestedMenuItems" ><BsArrowRight className="arroesubmenu" /> {props.t("Requested Menu Items")}</Link>
                </li>
                <li>
                  <Link to="/roles" ><BsArrowRight className="arroesubmenu" /> {props.t("Roles")}</Link>
                </li>
                <li>
                  <Link to="/Staff" ><BsArrowRight className="arroesubmenu" /> {props.t("Staff")}</Link>
                </li>
              </ul>

            </li>
            {/* <li>
              <Link to="/#" className="has-arrow">
                <BsBorderWidth className="Orders-icons" />
                <span>{props.t("Orders")}</span>
              </Link>
              <ul className="sub-menu"> */}
                {/* <li>
                  <Link to="/activeOrder" ><BsArrowRight className="arroesubmenu" /> {props.t("Order-Menu")}</Link>
                </li> */}
                {/* <li>
                  <Link to="/pastOrder" ><BsArrowRight className="arroesubmenu" /> {props.t("Past Order")}</Link>
                </li> */}
                {/* <li>
                  <Link to="/orderPayment" ><BsArrowRight className="arroesubmenu" /> {props.t("Order Payment")}</Link>
                </li> */}
                {/* <li>
                  <Link to="/orderListing" ><BsArrowRight className="arroesubmenu" /> {props.t("Order Listing")}</Link>
                </li> */}
              {/* </ul>

            </li> */}

            <li>
              <Link to="/promotioneZone">
                <GiStarProminences className="Restaurant-icons" />
                <span>{props.t("Promotione Zone")}</span>
              </Link>

            </li>
            {/* <li className="menu-title">{props.t("Apps")}</li> */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
