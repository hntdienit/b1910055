import React, { useEffect, useState, useRef } from "react";
import className from "classnames/bind";
import styles from "./Category.module.scss";

// import components
import Image from "../../Public/Image";
import Button from "../../Public/Button";

const cl = className.bind(styles);

function Category(category) {
  const [data, setData] = useState(category.data)

  return (
    <div className={"container pt-4"}>
      <div className={"row"}>
        <div className={"col-xxl-12"}>
          <div className={cl("section__title-line", "mb-4")}>
            <h3 className={cl("section__title")}>Top Categories</h3>
          </div>
        </div>
      </div>
      <div className={"row"}>
        {data.map((item) => (
          <div key={item.id} className={"col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-sm-6"}>
            <div className={cl("category__item", "mb-4")}>
              <div className={cl("category__thumb", "w-img fix")}>
                <Button to={"/"}>
                  <Image src={item.img} alt={item.title} />
                </Button>
              </div>
              <div className={cl("category__content", "text-center")}>
                <h3 className={cl("category__title")}>
                  <Button href={"#"}>{item.title}</Button>
                </h3>
                <span className={cl("category__quantity")}>({item.quantity})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
