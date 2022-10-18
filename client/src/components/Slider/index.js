import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import className from "classnames/bind";
import styles from "./Slider.module.scss";

// import FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// import components
import Button from "../Button";
import Image from "../Image";

const cl = className.bind(styles);

function SliderM(slider) {

  const [data, setData] = useState(slider.data)

  const customeSlider = useRef();

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };

  return (
    <div className={cl("swiper-wrapper")}>
      <Slider ref={customeSlider} {...settings}>
        {data.map((item, index) => (
          <div key={index} className={cl("swiper-slide", "d-flex align-items-center include-bg")}>
            <div className={cl("slider__height")}>
              <Image src={item.img} alt={item.title} />
            </div>
            <div className={cl("content")}>
              <div className={"container"}>
                <div className={"row"}>
                  <div className={"col-6"}>
                    <div className={cl("slider__content", "p-relative z-index-11")}>
                      <span className={cl("slider__span")} data-animation="fadeInUp" data-delay=".3s">
                        {item.category}
                      </span>
                      <h3 className={cl("slider__title")} data-animation="fadeInUp" data-delay=".5s">
                        {item.title}
                      </h3>
                      <div className={cl("slider__btn")} data-animation="fadeInUp" data-delay=".4s">
                        <Button
                          to={"/"}
                          rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                          className={cl("slider__btn")}
                        >
                          Discover Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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

export default SliderM;
