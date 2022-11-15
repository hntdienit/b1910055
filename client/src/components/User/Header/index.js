import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";

import { toast } from "react-toastify";

import { AuthContext } from "../../../helpers/AuthContext.js";
import styles from "./Header.module.scss";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";

// import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faLanguage,
  faSackDollar,
  faGraduationCap,
  faBook,
  faDollarSign,
  faHome,
  faUser,
  faSearch,
  faBasketShopping,
  faTimes,
  faShoppingBasket,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

// import assets
import images from "../../../assets/images";

// import components
// import Button from "../Button";
// import { Menu, Search } from "../Wrapper";
import Image from "../../Public/Image";

const cl = className.bind(styles);

const LANGUAGE = [
  {
    code: "en",
  },
  {
    code: "vi",
  },
];

const PRICE = [
  {
    code: "dollar",
  },
  {
    code: "vnd",
  },
];

const currentUser = true;

function Header() {
  const { auth, setAuth } = useContext(AuthContext);

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {}, []);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        console.log(menuItem);
        break;
      default:
    }
  };

  const logout = () => {
    toast.info("byle", {});
    localStorage.removeItem("accessToken");
    setAuth({ username: "", id: 0, status: false, role: "" });
  };

  return (
    <>
      <header>
        <div className={cl("header__area")}>
          <div className={cl("header__middle", ["header__border", "d-none d-md-block"])}>
            <div className={"container"}>
              <div className={"row align-items-center"}>
                <div className={"col-xxl-6 col-xl-6 col-lg-8 col-md-8"}>
                  <div className={cl("header__social")}>
                    <ul>
                      <li>
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faGraduationCap} className={"me-2"} />
                          B1910055
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faBook} className={"me-2"} />
                          THUD_TN408
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"col-xxl-6 col-xl-6 col-lg-4 col-md-4"}>
                  <div className={cl("header__middle-right", "d-flex align-items-center justify-content-end")}>
                    <div className={cl("main-menu", "main-menu-border", "main-menu-4")}>
                      <nav id="mobile-menu">
                        <ul>
                          <li className={cl("has-dropdown")}>
                            <Link to={"/"} className={"d-inline me-5"}>
                              <FontAwesomeIcon icon={faHome} className={"me-2"} />
                              Trang chủ
                            </Link>
                          </li>
                          <li className={cl("has-dropdown")}>
                            {currentUser ? (
                              <Link to={"/"} className={"d-inline"}>
                                <FontAwesomeIcon icon={faUser} className={"me-2"} />
                                Tài khoản
                              </Link>
                            ) : (
                              <Link to={"/"} className={"d-inline"}>
                                <FontAwesomeIcon icon={faUser} className={"me-2"} />
                                Đăng nhập
                              </Link>
                            )}
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className={cl("header__select", "d-flex align-items-center")}>
                      <div className={cl("header__lang", "header__select-item", "me-2")}>
                        <select>
                          {LANGUAGE.map(item => (
                            <option key={item.code}>{item.code}</option>
                          ))}
                        </select>
                      </div>
                      <div className={cl("header__currency", "header__select-item")}>
                        <select>
                        {PRICE.map(item => (
                            <option key={item.code}>{item.code}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cl("header__bottom")}>
            <div className={"container"}>
              <div className={"row align-items-center"}>
                <div className={"col-xxl-2 col-xl-2 col-lg-3 col-6"}>
                  <div className={cl("logo")}>
                    <Link to={"/"} className={cl("logo")}>
                      <Image src={images.logo} alt="Trang chủ" className={"img-fluid"} />
                    </Link>
                  </div>
                </div>
                <div className={"col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block"}>
                  <div className={cl("category__menu", "d-flex justify-content-center align-items-center")}>
                    <nav>
                      <ul>
                        {auth.role !== "" ? (
                          <>
                            <li>
                              <Link onClick={logout}>dang xuat</Link>
                            </li>
                            <li>{auth.username}</li>
                            <li>quyen: {auth.role}</li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link to={"/register"}>dang ky</Link>
                            </li>
                            <li>
                              <Link to={"/login"}>dang nhap</Link>
                            </li>
                          </>
                        )}

                        {/* <li>
                          <Link to={"/following"}>Gỗ</Link>
                        </li>
                        <li>
                          <Link to={"/admin"}>Admin</Link>
                        </li>
                        <li>
                          <Link to={"/profile"}>Ghế</Link>
                        </li>
                        <li>
                          <Link to={"/search"}>Bàn</Link>
                        </li>
                        <li>
                          <Link to={"/post/:id"}>Trang trí</Link>
                        </li>
                        <li>
                          <Link to={"/"}>khác</Link>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className={"col-xxl-5 col-xl-5 col-lg-4 d-none d-lg-block"}>
                  <div className={cl("header__search")}>
                    <form action="#">
                      <div className={cl("header__search-input")}>
                        <input type="text" placeholder="Search anything.." />
                        <button type="submit">
                          <FontAwesomeIcon icon={faSearch} className={"me-2"} />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={"col-xxl-2 col-xl-2 col-lg-1 col-6"}>
                  <div
                    className={cl("header__bottom-right-wrapper", "d-flex justify-content-center align-items-center")}
                  >
                    <div
                      className={cl("header__bottom-right", "d-none d-xl-flex align-items-center justify-content-end")}
                    >
                      <div className={cl("header__action", "ml-30")}>
                        <ul>
                          <li>
                            <Link to={"/"} className={""}>
                              <FontAwesomeIcon icon={faHeart} className={""} />
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon icon={faBasketShopping} className={""} />
                              <span className={cl("cart-count")}>3</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon icon={faBasketShopping} className={""} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
