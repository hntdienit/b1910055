import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../helpers/MenuContext.js";

import className from "classnames/bind";
import styles from "./AdminSideBar.module.scss";

/* import FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSquarePlus,
  faListDots,
  faListSquares,
  faCaretRight,
  faCaretDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

/* import assets */
import images from "../../assets/images";

/* import components */
import Image from "../Image";

const cl = className.bind(styles);

function SideBar() {
  const { logo, setLogo } = useContext(MenuContext);

  const [subMenu, setSubMenu] = useState([false, false]);

  const logoChange = () => {
    if (logo === true) {
      /* do nothing */ setLogo(false);
    }
    if (logo === false) {
    }
  };

  const menuChange = (IntMenu) => {
    if (subMenu[IntMenu] === true) {
      setSubMenu((datas) => ({
        ...datas,
        [IntMenu]: false,
      }));
    }
    if (subMenu[IntMenu] === false) {
      setSubMenu((datas) => ({
        ...datas,
        [IntMenu]: true,
      }));
    }
  };

  return (
    <>
      <div className={cl("vertical-menu", logo === true ? "vertical-menu-on" : "vertical-menu-off")}>
        <div className={cl("vertical-menu-height")}>
          <div className={cl("sidebar-menu")}>
            <div className={cl("navbar-brand-box")}>
              <Link to={"/admin"} className={cl("logo")}>
                <span className={cl("logo-lg")}>
                  <Image src={images.logo} alt="Trang chu" className={""} />
                </span>
              </Link>
            </div>

            <ul className={cl("metismenu", "list-unstyled")} id="side-menu">
              <li className={cl("menu-title")}>Main</li>

              <li>
                <Link
                  to={"/admin/category"}
                  className={cl("waves-effect")}
                  onClick={() => {
                    logoChange();
                  }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className={""} />

                  <span className={cl("badge rounded-pill bg-primary float-end")}>2</span>
                  <span className={cl("ms-3")}>Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => {
                    logoChange();
                    menuChange(0);
                  }}
                  className={cl("waves-effect")}
                >
                  <div className={cl("")}>
                    <FontAwesomeIcon icon={faListSquares} className={""} />
                    <span className={cl("ms-3")}>
                      Variation
                      {subMenu[0] === true ? (
                        <FontAwesomeIcon icon={faCaretDown} className={"align-middle float-end"} />
                      ) : (
                        <FontAwesomeIcon icon={faCaretRight} className={"float-end"} />
                      )}
                    </span>
                  </div>
                </Link>
                {subMenu[0] === true ? (
                  <ul className={cl("sub-menu")}>
                    <li>
                      <Link to={"/admin/variation"}>
                        <FontAwesomeIcon icon={faSquarePlus} className={"me-2 text-success"} />
                        New variation
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin/listcategory"}>
                        <FontAwesomeIcon icon={faListDots} className={"me-2 text-success"} />
                        List categories
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li>
                <Link
                  onClick={() => {
                    logoChange();
                    menuChange(0);
                  }}
                  className={cl("waves-effect")}
                >
                  <div className={cl("")}>
                    <FontAwesomeIcon icon={faListSquares} className={""} />
                    <span className={cl("ms-3")}>
                      Category
                      {subMenu[0] === true ? (
                        <FontAwesomeIcon icon={faCaretDown} className={"align-middle float-end"} />
                      ) : (
                        <FontAwesomeIcon icon={faCaretRight} className={"float-end"} />
                      )}
                    </span>
                  </div>
                </Link>
                {subMenu[0] === true ? (
                  <ul className={cl("sub-menu")}>
                    <li>
                      <Link to={"/admin/category"}>
                        <FontAwesomeIcon icon={faSquarePlus} className={"me-2 text-success"} />
                        New category
                      </Link>
                    </li>
                    <li>
                      <Link to={"/admin/listcategory"}>
                        <FontAwesomeIcon icon={faListDots} className={"me-2 text-success"} />
                        List categories
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
