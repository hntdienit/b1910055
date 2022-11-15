import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import className from "classnames/bind";
import styles from "./TrendingProduct.module.scss";

// import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHeart, faLock, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

// import components
import Button from "../../Public/Button";
import Image from "../../Public/Image";

const cl = className.bind(styles);

function TrendingProduct(sliderOneP) {
  const [data, setData] = useState(sliderOneP.data);

  const customeSlider = useRef();

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    speed: 600,
    initialSlide: 0,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 2700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={cl("wrapper")}>
        <div className={cl("section__title-wrapper", "d-sm-flex align-items-start")}>
          <div className={cl("me-5")}>
            <h3 className={cl("section__title")}>Special Offer</h3>
          </div>
          <div className={cl("product__tab")}>
            <ul className={cl("nav", "nav-tabs")}>
              <li className={cl("")}>
                <button className={cl("nav-link", "active")} type="button">
                  New
                </button>
              </li>
              <li className={cl("")}>
                <button className={cl("nav-link")} type="button">
                  Featured
                </button>
              </li>
              <li className={cl("")}>
                <button className={cl("nav-link")} type="button">
                  Top Sellers
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Slider ref={customeSlider} {...settings}>
            {data.map((item) => (
              <div key={item.id} className={cl("product__tab-content px-3")}>
                <div className={cl("tab-content")}>
                  <div className={cl("mb-3")}>
                    <div className={cl("product__item")}>
                      <div className={cl("product__thumb", "overflow-hidden")}>
                        <Link href="/">
                          <Image src={item.img} />
                        </Link>
                        <div className={cl("product__action", "transition-3")}>
                          <ul>
                            <li>
                              <Button to={"/"}>
                                <FontAwesomeIcon icon={faHeart} className={""} />
                              </Button>
                            </li>
                            <li>
                              <Button to={"/"}>
                                <FontAwesomeIcon icon={faHeart} className={""} />
                              </Button>
                            </li>
                            <li>
                              <Button to={"/"}>
                                <FontAwesomeIcon icon={faHeart} className={""} />
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 text-center">
                      <Link className={cl("product__tag")} href="#">
                        Wooden
                      </Link>
                      <h3 className={cl("product__title")}>
                        <a href="product-details.html">Mauris volutpat id lorem ut efficitur</a>
                      </h3>
                      <div className={cl("product__price")}>
                        <span>$150.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={cl("slider__next")}>
          <Button
            rightIcon={<FontAwesomeIcon icon={faChevronLeft} />}
            className={cl("slider__btn")}
            onClick={next}
          ></Button>
          <Button
            rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
            className={cl("slider__btn")}
            onClick={previous}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default TrendingProduct;
