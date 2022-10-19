import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
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
import images from "../../assets/images";

// import components
import Button from "../Button";
import { Menu, Search } from "../Wrapper";
import { Kinh } from "../Icons";
import Image from "../Image";

const cl = className.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "tieng anh",
    children: {
      title: "cap 1",
      data: [
        {
          code: "en",
          title: "tieng anh",
          children: {
            title: "cap 1",
            data: [
              {
                type: "language",
                code: "en",
                title: "tieng anh 1",
                separate: true,
              },
              {
                type: "language",
                code: "vi",
                title: "tieng viet 1",
              },
            ],
          },
        },
        {
          code: "vi",
          title: "tieng viet",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faSackDollar} />,
    title: "loai tien",
    to: "/following",
  },
  {
    icon: <FontAwesomeIcon icon={faSackDollar} />,
    title: "phan hoi",
  },
];

const LANGUAGE = [
  {
    code: "en",
    title: "EN",
    content: "Language",
  },
  {
    code: "vi",
    title: "VI",
    content: "Tiếng Việt",
  },
];

const PRICE = [
  {
    code: "dollar",
    title: "Dollar",
    icon: <FontAwesomeIcon icon={faDollarSign} />,
  },
  {
    code: "vnd",
    title: "VNĐ",
    icon: <FontAwesomeIcon icon={faDollarSign} />,
  },
];

const currentUser = true;

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   setSearchResult([1, 2, 3]);
    // }, 0);
  }, []);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        console.log(menuItem);
        break;
      default:
    }
  };

  return (
    <>
      <header>
        <div className={cl("header__area")}>
          <div
            className={cl("header__middle", [
              "header__border",
              "d-none d-md-block",
            ])}
          >
            <div className={"container"}>
              <div className={"row align-items-center"}>
                <div className={"col-xxl-6 col-xl-6 col-lg-8 col-md-8"}>
                  <div className={cl("header__social")}>
                    <ul>
                      <li>
                        <Link to={"/"}>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className={"me-2"}
                          />
                          B1910055
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <FontAwesomeIcon icon={faBook} className={"me-2"} />
                          Niên luận Ngành THƯD
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={"col-xxl-6 col-xl-6 col-lg-4 col-md-4"}>
                  <div
                    className={cl(
                      "header__middle-right",
                      "d-flex align-items-center justify-content-end"
                    )}
                  >
                    <div
                      className={cl(
                        "main-menu",
                        "main-menu-border",
                        "main-menu-4"
                      )}
                    >
                      <nav id="mobile-menu">
                        <ul>
                          <li className={cl("has-dropdown")}>
                            <Link to={"/"} className={"d-inline me-5"}>
                              <FontAwesomeIcon
                                icon={faHome}
                                className={"me-2"}
                              />
                              Trang chủ
                            </Link>
                          </li>
                          <li className={cl("has-dropdown")}>
                            {currentUser ? (
                              <Link to={"/"} className={"d-inline"}>
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className={"me-2"}
                                />
                                Tài khoản
                              </Link>
                            ) : (
                              <Link to={"/"} className={"d-inline"}>
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className={"me-2"}
                                />
                                Đăng nhập
                              </Link>
                            )}
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div
                      className={cl(
                        "header__select",
                        "d-flex align-items-center"
                      )}
                    >
                      <div
                        className={cl(
                          "header__lang",
                          "header__select-item",
                          "me-2"
                        )}
                      >
                        <select>
                          <option>EN</option>
                          <option>BN</option>
                          <option>IN</option>
                          <option>CH</option>
                          <option>AM</option>
                        </select>
                      </div>
                      <div
                        className={cl(
                          "header__currency",
                          "header__select-item"
                        )}
                      >
                        <select>
                          <option>USD</option>
                          <option>Euro</option>
                          <option>Yen</option>
                          <option>Rupee</option>
                          <option>Sterlin</option>
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
                      <Image
                        src={images.logo}
                        alt="Trang chủ"
                        className={"img-fluid"}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={"col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block"}
                >
                  <div
                    className={cl(
                      "category__menu",
                      "d-flex justify-content-center align-items-center"
                    )}
                  >
                    <nav>
                      <ul>
                        <li>
                          <Link to={"/register"}>dang ky</Link>
                        </li>
                        <li>
                          <Link to={"/login"}>dang nhap</Link>
                        </li>
                        <li>
                          <Link to={"/following"}>Gỗ</Link>
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
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div
                  className={"col-xxl-5 col-xl-5 col-lg-4 d-none d-lg-block"}
                >
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
                    className={cl(
                      "header__bottom-right-wrapper",
                      "d-flex justify-content-center align-items-center"
                    )}
                  >
                    <div
                      className={cl(
                        "header__bottom-right",
                        "d-none d-xl-flex align-items-center justify-content-end"
                      )}
                    >
                      <div className={cl("header__action", "ml-30")}>
                        <ul>
                          <li>
                            <Link to={"/"} className={""}>
                              <FontAwesomeIcon icon={faHeart} className={""} />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"#"}
                              className={""}
                              data-bs-toggle="modal"
                              data-bs-target="#cartMiniModal"
                            >
                              <FontAwesomeIcon
                                icon={faBasketShopping}
                                className={""}
                              />
                              <span className={cl("cart-count")}>3</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={cl("header-bar", "ml-20 d-xl-none")}>
                      <button
                        type="button"
                        className={cl("header-bar-btn")}
                        data-bs-toggle="modal"
                        data-bs-target="#offCanvasModal"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div className={cl("cartmini__area")}>
        <div
          className={cl("modal", "fade")}
          id="cartMiniModal"
          tabIndex="-1"
          aria-labelledby="cartMiniModal"
          aria-hidden="true"
        >
          <div className={cl("modal-dialog")}>
            <div className={cl("modal-content")}>
              <div className={cl("cartmini__wrapper")}>
                <div
                  className={cl(
                    "cartmini__top",
                    "d-flex align-items-center justify-content-between"
                  )}
                >
                  <h4>Your Cart</h4>
                  <div className={cl("cartminit__close")}>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      data-bs-target="#cartMiniModal"
                      className={cl("cartmini__close-btn")}
                    >
                      <FontAwesomeIcon icon={faTimes} className={""} />
                    </button>
                  </div>
                </div>
                <div className={cl("cartmini__list")}>
                  <ul>
                    <li
                      className={cl(
                        "cartmini__item",
                        "p-relative d-flex align-items-start"
                      )}
                    >
                      <div className={cl("cartmini__thumb", "me-2")}>
                        <Link to={"#"} className={cl("")}>
                          <Image src={images.logo} alt="Trang chu" />
                        </Link>
                      </div>
                      <div className={cl("cartmini__content")}>
                        <h3 className={cl("cartmini__title")}>
                          <Link to={"#"} className={cl("")}>
                            Form Armchair Walnut Base
                          </Link>
                        </h3>
                        <span className={cl("cartmini__price")}>
                          <span className={cl("price")}>1 × $70.00</span>
                        </span>
                      </div>
                      <Link href={"#"} className={cl("cartmini__remove")}>
                        <FontAwesomeIcon icon={faTimes} className={""} />
                      </Link>
                    </li>
                    <li
                      className={cl(
                        "cartmini__item",
                        "p-relative d-flex align-items-start"
                      )}
                    >
                      <div className={cl("cartmini__thumb", "me-2")}>
                        <Link href={"#"} className={cl("")}>
                          <Image src={images.logo} alt="Trang chu" />
                        </Link>
                      </div>
                      <div className={cl("cartmini__content")}>
                        <h3 className={cl("cartmini__title")}>
                          <Link href={"#"} className={cl("")}>
                            Form Armchair Simon Legald
                          </Link>
                        </h3>
                        <span className={cl("cartmini__price")}>
                          <span className={cl("price")}>1 × $95.99</span>
                        </span>
                      </div>
                      <Link href={"#"} className={cl("cartmini__remove")}>
                        <FontAwesomeIcon icon={faTimes} className={""} />
                      </Link>
                    </li>
                    <li
                      className={cl(
                        "cartmini__item",
                        "p-relative d-flex align-items-start"
                      )}
                    >
                      <div className={cl("cartmini__thumb", "me-2")}>
                        <Link href={"#"} className={cl("")}>
                          <Image src={images.logo} alt="Trang chu" />
                        </Link>
                      </div>
                      <div className={cl("cartmini__content")}>
                        <h3 className={cl("cartmini__title")}>
                          <Link href={"#"} className={cl("")}>
                            Antique Chinese Armchairs
                          </Link>
                        </h3>
                        <span className={cl("cartmini__price")}>
                          <span className={cl("price")}>1 × $120.00</span>
                        </span>
                      </div>
                      <Link href={"#"} className={cl("cartmini__remove")}>
                        <FontAwesomeIcon icon={faTimes} className={""} />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className={cl(
                    "cartmini__total",
                    "d-flex align-items-center justify-content-between"
                  )}
                >
                  <h5>Total</h5>
                  <span>$180.00</span>
                </div>
                <div className={cl("cartmini__bottom")}>
                  <Link href={"#"} className={cl("b-btn w-100 mb-20")}>
                    view cart
                  </Link>
                  <Link href={"#"} className={cl("b-btn-2 w-100")}>
                    checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cl("body-overlay")}></div>

      <section className={cl("offcanvas__area")}>
        <div
          className={cl("modal", "fade")}
          id="offCanvasModal"
          tabIndex="-1"
          aria-labelledby="offCanvasModal"
          aria-hidden="true"
        >
          <div className={cl("modal-dialog")}>
            <div className={cl("modal-content")}>
              <div className={cl("offcanvas__wrapper")}>
                <div
                  className={cl(
                    "offcanvas__top",
                    "d-flex align-items-center mb-60 justify-content-between"
                  )}
                >
                  <div className={cl("logo")}>
                    <Link to={"/"} className={cl("logo")}>
                      <Image src={images.logo} alt="Trang chu" />
                    </Link>
                  </div>
                  <div className={cl("offcanvas__close")}>
                    <button
                      className={cl("offcanvas__close-btn")}
                      data-bs-dismiss="modal"
                      data-bs-target="#offCanvasModal"
                    >
                      <svg viewBox="0 0 22 22">
                        <path
                          d="M12.41,11l5.29-5.29c0.39-0.39,0.39-1.02,0-1.41s-1.02-0.39-1.41,0L11,9.59L5.71,4.29c-0.39-0.39-1.02-0.39-1.41,0
                                            s-0.39,1.02,0,1.41L9.59,11l-5.29,5.29c-0.39,0.39-0.39,1.02,0,1.41C4.49,17.9,4.74,18,5,18s0.51-0.1,0.71-0.29L11,12.41l5.29,5.29
                                            C16.49,17.9,16.74,18,17,18s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L12.41,11z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={cl("sidebar__search", "mb-25")}>
                  <form action="#">
                    <input
                      type="text"
                      placeholder="What are you searching for?"
                    />
                    <button type="submit">
                      <FontAwesomeIcon icon={faTimes} className={""} />
                    </button>
                  </form>
                </div>
                <div
                  className={cl("offcanvas__content", "p-relative z-index-1")}
                >
                  <div className={cl("canvas__menu")}>
                    <div className={cl("mobile-menu", "fix")}></div>
                  </div>
                  <div className={cl("offcanvas__action", "mt-40 mb-15")}>
                    <Link to={"/"} className={cl("")}>
                      Login
                    </Link>
                    <Link to={"/wishlist"} className={cl("has-tag")}>
                      <Image src={images.logo} alt="Trang chu" />
                      <span className="tag">2</span>
                    </Link>

                    <Link to={"/cart"} className={cl("has-tag")}>
                      <FontAwesomeIcon icon={faShoppingBag} className={""} />
                      <span className="tag">3</span>
                    </Link>

                    <div
                      className={cl(
                        "header__select",
                        "header__select-d",
                        "d-flex align-items-center mt-10"
                      )}
                    >
                      <div
                        className={cl(
                          "header__lang",
                          "header__select-item",
                          "me-2"
                        )}
                      >
                        <select>
                          <option>EN</option>
                          <option>BN</option>
                          <option>IN</option>
                          <option>CH</option>
                          <option>AM</option>
                        </select>
                        <div className={cl("nice-select")} tabIndex="0">
                          <span className={cl("current")}>EN</span>
                          <ul className={cl("list", "list-2")}>
                            <li
                              data-value="EN"
                              className={"option selected focus"}
                            >
                              EN
                            </li>
                            <li data-value="BN" className={"option"}>
                              BN
                            </li>
                            <li data-value="IN" className={"option"}>
                              IN
                            </li>
                            <li data-value="CH" className={"option"}>
                              CH
                            </li>
                            <li data-value="AM" className={"option"}>
                              AM
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className={cl(
                          "header__currency",
                          "header__select-item"
                        )}
                      >
                        <select>
                          <option>USD</option>
                          <option>Euro</option>
                          <option>Yen</option>
                          <option>Rupee</option>
                          <option>Sterlin</option>
                        </select>
                        <div className={cl("nice-select")} tabIndex="0">
                          <span className={cl("current")}>USD</span>
                          <ul className={cl("list", "list-2")}>
                            <li
                              data-value="USD"
                              className={"option selected focus"}
                            >
                              USD
                            </li>
                            <li data-value="Euro" className={"option"}>
                              Euro
                            </li>
                            <li data-value="Yen" className={"option"}>
                              Yen
                            </li>
                            <li data-value="Rupee" className={"option"}>
                              Rupee
                            </li>
                            <li data-value="Sterlin" className={"option"}>
                              Sterlin
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cl("offcanvas__social", "mt-15")}>
                    <ul>
                      <li>
                        <Link href={"#"} className={cl("has-tag")}>
                          facebook
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className={cl("has-tag")}>
                          twitter
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className={cl("has-tag")}>
                          instagram
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className={cl("has-tag")}>
                          google
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className={cl("has-tag")}>
                          linkedin
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Header;
