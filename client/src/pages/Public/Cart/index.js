import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// import { AuthContext } from "../../helpers/AuthContext.js";
import PageTitle from "../../../components/User/PageTitle";

import styles from "./Cart.module.scss";

import images from "../../../assets/images";

const cl = className.bind(styles);

function Cart() {
  useEffect(() => {}, []);

  return (
    <>
      <PageTitle title={"Your Cart"} pagename={"Cart"}></PageTitle>
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
                        <th className={cl("product-quantity")}>Quantity</th>
                        <th className={cl("product-subtotal")}>Total</th>
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
                          <div className={cl("cart-plus-minus")}>
                            <input type="text" />
                            <div className={cl("dec", "qtybutton")}>-</div>
                            <div className={cl("inc", "qtybutton")}>+</div>
                            <div className={("dec", "qtybutton")}>-</div>
                            <div className={cl("inc", "qtybutton")}>+</div>
                          </div>
                        </td>
                        <td className={cl("product-subtotal")}>
                          <span className={cl("amount")}>$130.00</span>
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
                <div className={cl("row")}>
                  <div className={cl("col-12")}>
                    <div className={cl("coupon-all")}>
                      <div className={cl("coupon")}>
                        <input
                          className={cl("input-text", "coupon_code")}
                          name="coupon_code"
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button className={cl("btn")} name="apply_coupon" type="submit">
                          Apply coupon
                        </button>
                      </div>
                      <div className={cl("coupon2")}>
                        <button className={cl("btn")} name="update_cart" type="submit">
                          Update cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cl("row justify-content-end")}>
                  <div className={cl("col-md-5")}>
                    <div className={cl("cart-page-total")}>
                      <h2>Cart totals</h2>
                      <ul className={cl("mb-4")}>
                        <li>
                          Subtotal <span>$250.00</span>
                        </li>
                        <li>
                          Total <span>$250.00</span>
                        </li>
                      </ul>
                      <Link className={cl("btn")} to={"/"}>
                        Proceed to checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
