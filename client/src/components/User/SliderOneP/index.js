import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import className from "classnames/bind";
import styles from "./SliderOneP.module.scss";

// import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHeart, faLock, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

// import components
import Button from "../../Public/Button";
import Image from "../../Public/Image";

const cl = className.bind(styles);

function SliderOneP(sliderOneP) {
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
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };

  return (
    <div className={cl("product__sale-wrapper")}>
      <div className={"mb-2"}>
        <h3 className={cl("section__title")}>Sale Products</h3>
      </div>
      <div className={cl("product__sale-slider", "common-nav")}>
        <Slider ref={customeSlider} {...settings}>
          {data.map((item) => (
            <div key={item.id} className={cl("product__sale-item")}>
              <div className={cl("product__sale-thumb", "d-flex justify-content-center")}>
                <Button to={"#"} className={cl("btn-img", "d-flex justify-content-center")}>
                  <Image src={item.img} />
                </Button>
                <div className={cl("product__sale-flash")}>
                  <span>{item.sale}</span>
                </div>
                <div className={cl("product__action", "transition-3")}>
                  <ul>
                    <li>
                      <Button to={"/"}>
                        <FontAwesomeIcon icon={faShoppingBag} className={""} />
                      </Button>
                    </li>
                    <li>
                      <Button to={"/"}>
                        <FontAwesomeIcon icon={faHeart} className={""} />
                      </Button>
                    </li>
                    <li>
                      <Button to={"/"}>
                        <FontAwesomeIcon icon={faLock} className={""} />
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cl("text-center mt-2")}>
                <span className={cl("product__sale-tag")}>
                  <Button to={"#"}>{item.tag}</Button>
                </span>
                <h3 className={cl("product__sale-title")}>
                  <Button to={"#"}>{item.title}</Button>
                </h3>
                <div className={cl("product__sale-price")}>
                  <span className={cl("price", "old-price")}>{item.oldPrice}</span>
                  <span className={cl("price", "new-price")}>{item.newPrice}</span>
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
  );
}

export default SliderOneP;
