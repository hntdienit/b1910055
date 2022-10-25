import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";

import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./AdminHeader.module.scss";

/* import FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* import assets */
// import images from "../../assets/images";

/* import components */

const cl = className.bind(styles);

function Header() {
  //   const { auth, setAuth } = useContext(AuthContext);

  //   const [searchResult, setSearchResult] = useState([]);

  //   useEffect(() => {
  //     // setTimeout(() => {
  //     //   setSearchResult([1, 2, 3]);
  //     // }, 0);
  //   }, []);

  //   const handleMenuChange = (menuItem) => {
  //     switch (menuItem.type) {
  //       case "language":
  //         console.log(menuItem);
  //         break;
  //       default:
  //     }
  //   };

  //   const logout = () => {
  //     localStorage.removeItem("accessToken");
  //     setAuth({ username: "", id: 0, status: false, role: ""});
  //   };

  return (
    <>
      <header className={cl("top-header")}>


        <nav className={cl("navbar", "navbar-expand")}>
        <div><Link to={"/admin/category"}>category</Link></div>
        <div><Link to={"/admin/listcategory"}>listcategory</Link></div>
          <div className={cl("mobile-toggle-icon", "d-xl-none")}>
            <i class="bi bi-list"></i>
            {/* 123 */}
          </div>
          {/* <div className={cl("top-navbar", "d-none d-xl-block")}>
            <ul className={cl("navbar-nav", "align-items-center")}>
              <li className={cl("nav-item")}>
                <a className={cl("nav-link")} href="index.html">
                  Dashboard
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="app-emailbox.html">
                  Email
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:;">
                  Projects
                </a>
              </li>
              <li class="nav-item d-none d-xxl-block">
                <a class="nav-link" href="javascript:;">
                  Events
                </a>
              </li>
              <li class="nav-item d-none d-xxl-block">
                <a class="nav-link" href="app-to-do.html">
                  Todo
                </a>
              </li>
            </ul>
          </div> */}
          <div className={cl("search-toggle-icon", "d-xl-none ms-auto")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={""} />
          </div>
          <form className={cl("searchbar", "d-none d-xl-flex ms-auto")}>
            <div
              className={cl(
                "position-absolute top-50 translate-middle-y search-icon ms-3"
              )}
            >
              <i class="bi bi-search"></i>
              {/* 123 */}
            </div>
            <input
              className={cl("form-control")}
              type="text"
              placeholder="Type here to search"
            />
            <div
              className={cl(
                "position-absolute top-50 translate-middle-y d-block d-xl-none",
                "search-close-icon"
              )}
            >
              <i class="bi bi-x-lg"></i>
              {/* 123 */}
            </div>
          </form>
        </nav>
      </header>
    </>
  );
}

export default Header;
