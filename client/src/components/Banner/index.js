import React, { useState } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Banner.module.scss";

// import components
import Button from "../Button";
import Image from "../Image";

const cl = className.bind(styles);

function Banner(sliderOneP) {
  const [data, setData] = useState(sliderOneP.data);

  return (
    <>
      <div className={cl("pb-5")}>
        <div className={cl("")}>
          <div className={cl("row gx-0")}>
            <div className={cl("col-xxl-8 col-xl-8 col-lg-8")}>
              <div className={cl("banner__thumb")}>
                <Image src={data[0].img} />
              </div>
            </div>
            <div className={cl("col-xxl-4 col-xl-4 col-lg-4")}>
              <div className={cl("banner__content", "text-center", "grey-bg-4")}>
                <div className={cl("banner__top")}>
                  <h3 className={cl("banner__title")}>Most Popular</h3>
                  <p>Lorem ipsum dolor amet, consectetur elit, eiusmod tempor incididunt</p>
                </div>
                <div className={cl("banner__content-img")}>
                  <div className={cl("banner__thumb")}>
                    <Image src={data[0].img} />
                  </div>
                </div>
                <div className={cl("product__tag")}>
                  <span>
                    <Link href="#">Wooden</Link>
                  </span>
                </div>
                <h3 className={cl("product__title")}>
                  <Link href="#">Haiku 2-Seater Sofa</Link>
                </h3>
                <div className={cl("product__price")}>
                  <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
