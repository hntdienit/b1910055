import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Footer.module.scss";

// import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// import assets
import images from "../../../assets/images";

// import components
// import Button from "../Button";
// import { Menu, Search } from "../Wrapper";
import Image from "../../Public/Image";

const cl = className.bind(styles);

function Footer() {
  return (
    <footer>
      <div className={cl("footer__area", "footer-bg")}>
        <div className={cl("footer__top", "footer__top-space", "pb-4")}>
          <div className={cl("container")}>
            <div className={"row"}>
              <div
                className={cl("col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6")}
              >
                <div
                  className={cl(
                    "footer__widget",
                    "footer__widget-border",
                    "footer-col-1"
                  )}
                >
                  <div className={cl("footer__info")}>
                    <div className={cl("logo", "footer__logo")}>
                      <Link to={"/"} className={cl("logo")}>
                        <Image src={images.logo} alt="Trang chu" />
                      </Link>
                    </div>
                    <div className={cl("footer__subscribe")}>
                      <p>
                        Complete equipment for your home workshop or company!
                      </p>
                      <form action="#">
                        <div className={cl("footer__subscribe-input")}>
                          <input
                            type="email"
                            placeholder="Enter Email ID ..."
                          />
                          <button type="submit">
                            <FontAwesomeIcon
                              icon={faPaperPlane}
                              className={"me-2"}
                            />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cl("col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6")}
              >
                <div className={cl("footer__widget", "footer-col-2")}>
                  <h3 className={cl("footer__widget-title")}>Need help</h3>
                  <div className={cl("footer__widget-content")}>
                    <div className={cl("footer__contact")}>
                      <h3 className={cl("footer__contact-phone")}>
                        <a href="tel:1234-5678-90">(+80) 1234 5678 90</a>
                      </h3>
                      <div className={cl("footer__opening")}>
                        <p>Monday - Friday: 9:00-20:00</p>
                        <p>Saturady: 11:00 - 15:00</p>
                      </div>
                      <div className={cl("footer__contact-email")}>
                        <p>
                          <Link to={"#"} className={cl("")}>
                            <span>[email&#160;protected]</span>
                          </Link>
                        </p>
                      </div>
                      <div className={cl("footer__social")}>
                        <ul>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon
                                icon={faFacebook}
                                className={"me-2"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon
                                icon={faTwitter}
                                className={"me-2"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon
                                icon={faInstagram}
                                className={"me-2"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon
                                icon={faYoutube}
                                className={"me-2"}
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to={"#"} className={""}>
                              <FontAwesomeIcon
                                icon={faPinterest}
                                className={"me-2"}
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cl(
                  "col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
                )}
              >
                <div className={cl("footer__widget", "footer-col-3")}>
                  <h3 className={cl("footer__widget-title")}>Useful Links</h3>
                  <div className={cl("footer__widget-content")}>
                    <div className={cl("footer__links")}>
                      <ul>
                        <li>
                          <Link to={"/"} className={""}>
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Returns
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Terms Conditions
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Latest News
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Our Sitemap
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cl(
                  "col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6"
                )}
              >
                <div className={cl("footer__widget", "footer-col-4")}>
                  <h3 className={cl("footer__widget-title")}>Our Stores</h3>
                  <div className={cl("footer__widget-content")}>
                    <div className={cl("footer__links")}>
                      <ul>
                        <li>
                          <Link to={"/"} className={""}>
                            New York
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            London SF
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Cockfosters BP
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Los Angeles
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Chicago
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"} className={""}>
                            Las Vegas
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
        <div className={cl("footer__offer")}>
          <div className={cl("container")}>
            <div className={cl("footer__offer-inner")}>
              <div className={cl("row")}>
                <div className={cl("col-xxl-12")}>
                  <div
                    className={cl(
                      "footer__offer-content",
                      "d-sm-flex align-items-center justify-content-center"
                    )}
                  >
                    <p>Copyright B1910055 | Huynh Nguyen Thanh Dien</p>
                    <p>NL THUD(TN408)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
