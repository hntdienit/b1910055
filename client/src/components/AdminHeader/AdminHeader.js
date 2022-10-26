import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";

import styles from "./AdminHeader.module.scss";

/* import FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faIdCard,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

/* import assets */
import images from "../../assets/images";

/* import components */
import Image from "../Image";

const cl = className.bind(styles);

function Header() {
  return (
    <>
      <div className={cl("page-topbar")}>
        <div className={cl("navbar-header")}>
          <div className={cl("d-flex")}>
            <div className={cl("navbar-brand-box")}>
              <Link to={"/admin"} className={cl("logo")}>
                <span className={cl("logo-lg")}>
                  <Image src={images.logo} alt="Trang chu" className={""} />
                </span>
              </Link>
            </div>

            <button
              type="button"
              className={cl(
                "btn btn-sm px-3 header-item pt-2",
                "font-size-24",
                "header-custom",
                "waves-effect",
                "vertical-menu-btn"
              )}
            >
              <i>
                <FontAwesomeIcon icon={faBars} className={""} />
              </i>
            </button>
          </div>

          <div className={cl("d-flex")}>
            <form className={cl("app-search", "d-none d-lg-block pt-4")}>
              <div className={cl("position-relative")}>
                <input
                  type="text"
                  className={cl("form-control", "form-control-custom")}
                  placeholder="Search..."
                />
                <button
                  type="button"
                  onClick={() => {
                    alert("tim");
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={""} />
                  </span>
                </button>
              </div>
            </form>
            <div className={cl("app-search", "d-none d-lg-block")}></div>

            <div
              className={cl(
                "dropdown-custom",
                "dropdown d-none d-md-block ms-2 pt-3 pe-3"
              )}
            >
              <button
                type="button"
                className={cl(
                  "btn header-item waves-effect",
                  "header-item-custom",
                  "waves-effect-custom"
                )}
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className={cl("text-center pt-2")}>
                  <Image
                    src={images.logo}
                    alt="Trang chu"
                    className={cl("me-1 d-inline", "language")}
                  />
                  <span className={cl("")}> Italian </span>
                </div>
              </button>
              <div
                className={cl(
                  "dropdown-menu-custom",
                  "dropdown-menu dropdown-menu-end"
                )}
              >
                <div className={cl("text-center pt-2")}>
                  <Link
                    href="#"
                    className={cl("dropdown-item notify-item", "d-inline")}
                  >
                    <Image
                      src={images.logo}
                      alt="Trang chu"
                      className={cl("me-1 d-inline", "language")}
                    />
                    <span className={cl("")}> Italian </span>
                  </Link>
                </div>
                <hr />

                <div className={cl("text-center pb-2")}>
                  <Link
                    href="#"
                    className={cl("dropdown-item notify-item", "d-inline")}
                  >
                    <Image
                      src={images.logo}
                      alt="Trang chu"
                      className={cl("me-1 d-inline", "language")}
                    />
                    <span className={cl("")}> Italian </span>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={cl(
                "dropdown-custom",
                "dropdown d-inline-block ms-1 py-3 pe-3"
              )}
            >
              <button
                type="button"
                className={cl(
                  "btn header-item noti-icon waves-effect position-relative",
                  "header-item-custom",
                  "font-size-24",
                  "waves-effect-custom"
                )}
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i>
                  <FontAwesomeIcon icon={faBell} className={""} />
                </i>
                <div className={cl("badge", "rounded-circle")}>3</div>
              </button>
              <div
                className={cl(
                  "dropdown-menu-custom",
                  "dropdown-menu-lg",
                  "dropdown-menu-end",
                  "p-0 dropdown-menu"
                )}
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className={cl("p-3", "notification-custom")}>
                  <div className={cl("row align-items-center")}>
                    <div className={cl("col")}>
                      <h5 className={cl("m-0")}> Notifications (258) </h5>
                    </div>
                  </div>
                </div>
                <div data-simplebar className={cl("notification-view")}>
                  <Link
                    href="#"
                    className={cl("text-reset", "notification-item")}
                  >
                    <div className={cl("d-flex", "d-flex-custom")}>
                      <div className={cl("flex-shrink-0 me-3")}>
                        <div className={cl("avatar-xs")}>
                          <span
                            className={cl(
                              "avatar-title",
                              "border-success rounded-circle"
                            )}
                          >
                            <i>
                              <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className={""}
                              />
                            </i>
                          </span>
                        </div>
                      </div>
                      <div className={cl("flex-grow-1")}>
                        <h6 className={cl("mb-1")}>Your order is placed</h6>
                        <div className={cl("text-muted")}>
                          <p className={cl("mb-1")}>
                            If several languages coalesce the grammar
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={cl("p-2", "border-top")}>
                  <Link
                    className={cl(
                      "btn btn-sm btn-link",
                      "font-size-14",
                      "w-100",
                      "text-center"
                    )}
                  >
                    View all
                  </Link>
                </div>
              </div>
            </div>

            <div
              className={cl(
                "dropdown-custom",
                "dropdown d-inline-block py-3 pe-5"
              )}
            >
              <button
                type="button"
                className={cl(
                  "btn header-item waves-effect",
                  "header-item-custom",
                  "waves-effect-custom"
                )}
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className={cl("rounded-circle", "header-profile-user")}>
                  <Image src={images.logo} alt="Trang chu" />
                </div>
              </button>
              <div
                className={cl(
                  "dropdown-menu-custom",
                  "dropdown-menu dropdown-menu-end text-center"
                )}
              >
                <Link className={cl("dropdown-item")} href="#">
                  <i
                    className={cl(
                      "font-size-17",
                      "text-muted align-middle me-1"
                    )}
                  >
                    <FontAwesomeIcon icon={faIdCard} className={"me-2"} />
                  </i>
                  Profile
                </Link>
                <div className={cl("dropdown-divider")}></div>
                <Link className={cl("dropdown-item", "text-danger")} href="#">
                  <i
                    className={cl(
                      "font-size-17",
                      "text-muted align-middle me-1 text-danger"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className={"me-2"}
                    />
                  </i>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
