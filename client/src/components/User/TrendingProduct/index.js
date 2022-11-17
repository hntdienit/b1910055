import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";
import { toast } from "react-toastify";
import className from "classnames/bind";
import styles from "./TrendingProduct.module.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHeart, faLock, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import Button from "../../Public/Button";
import Image from "../../Public/Image";

const cl = className.bind(styles);

function TrendingProduct(sliderOneP) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/products/newproduct`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setData(response.data);
      }
    });
  }, []);

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
            <h3 className={cl("section__title")}>Trending Product</h3>
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
                        <Image src={item.ProductItems[0].Images[0].url} />
                        <div className={cl("product__action", "transition-3")}>
                          <ul>
                            <li>
                              <Button to={`/product/${item.id}`}>
                                <VisibilityIcon />
                              </Button>
                            </li>
                            <li>
                              <Button to={"/"}>
                                <FavoriteBorderIcon />
                              </Button>
                            </li>
                            <li>
                              <Button to={"/"}>
                                <AddShoppingCartIcon />
                              </Button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 text-center">
                      <Link className={cl("product__tag")} href="#">
                        {item.Category.name}
                      </Link>
                      <h3 className={cl("product__title")}>
                        <a href="product-details.html">{item.name}</a>
                      </h3>
                      <div className={cl("product__price")}>
                        <span>${item.ProductItems[0].price}</span>
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
