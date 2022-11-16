import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// import { AuthContext } from "../../helpers/AuthContext.js";
import PageTitle from "../../../components/User/PageTitle";

import styles from "./Wishlist.module.scss";

import images from "../../../assets/images";

const cl = className.bind(styles);

function Wishlist() {
  useEffect(() => {}, []);

  return (
    <>
      <PageTitle title={"Your Wishlist"} pagename={"Wishlist"}></PageTitle>
      <div className={cl("cart-area", "pb-5")}>
        <div className={cl("container")}>
          <div className={cl("row")}>
            <div className={cl("col-12")}>
              <form action="#">
                <div className={cl("table-content", "table-responsive")}>
                  <table className={cl("table")}>
                    <thead>
                      <tr>
                        <th className={cl("product-thumbnail")}>Images</th>
                        <th className={cl("cart-product-name")}>Product</th>
                        <th className={cl("product-price")}>Unit Price</th>
                        <th className={cl("product-cartitem")}>cartitem</th>
                        <th className={cl("product-remove")}>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={cl("product-thumbnail")}>
                          <Link to={"/product/2"}>
                            <img src={images.category_1} alt="" />
                          </Link>
                        </td>
                        <td className={cl("product-name")}>
                          <Link to={"/product/2"}>Jacket light</Link>
                        </td>
                        <td className={cl("product-price")}>
                          <span className={cl("amount")}>$130.00</span>
                        </td>
                        <td className={cl("product-quantity")}>
                          <Link to={"#"} className={cl("btn")}>
                            Add To Cart
                          </Link>
                        </td>

                        <td className={cl("product-remove")}>
                          <Link to={"#"}>
                            <DeleteOutlineIcon />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
