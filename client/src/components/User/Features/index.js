import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./Features.module.scss";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import ThreePIcon from "@mui/icons-material/ThreeP";

// import components
import Button from "../../Public/Button";
import Image from "../../Public/Image";

const cl = className.bind(styles);

function Features(sliderOneP) {
  const [data, setData] = useState(sliderOneP.data);

  const items = [
    {
      icon: <LocalShippingIcon />,
      title: "Free Shipping",
      content: "Capped $39 per order",
    },
    {
      icon: <CreditCardIcon />,
      title: "Securety Payments",
      content: "Up to 12 months installments",
    },
    {
      icon: <RepeatOnIcon />,
      title: "14-Day Returns",
      content: "Shop with confidence",
    },
    {
      icon: <ThreePIcon />,
      title: "24/7 Support",
      content: "Capped $39 per order",
    },
  ];

  return (
    <>
      <div className={cl("pb-5")}>
        <div className={cl("row")}>
          {items.map((item) => (
            <div key={item.title} className={cl("col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6")}>
              <div className={cl("features__item", "text-center mb-4", "features__item-border")}>
                <div className={cl("features__icon")}>{item.icon}</div>
                <div className={cl("features__content")}>
                  <h3 className={cl("features__title")}>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
