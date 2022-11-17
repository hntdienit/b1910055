import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";

import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";

// import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./ProductList.module.scss";

import PageTitle from "../../../components/User/PageTitle";

import images from "../../../assets/images";

const cl = className.bind(styles);

function ProductList() {
  useEffect(() => {}, []);

  return (
    <>
      <PageTitle title={"Product List"} pagename={"Product List"}></PageTitle>

      <div className={cl("shop-details", "py-5")}>
        <div className={cl("container")}>
          <div className={cl("row")}>
            <div className={cl("col-xxl-3 col-xl-4")}>
              <div className={cl("pproduct-sidebar-area", "mr-5")}>
                <div className={cl("product-widget", "mb-3")}>
                  <h5 className={cl("pt-title", "mb-2")}>Product categories</h5>
                  <div className={cl("widget-category-list")}>
                    <form action="#">
                      <div className={cl("single-widget-category")}>
                        <input type="checkbox" id="cat-item-1" name="cat-item" />
                        <label htmlFor={"cat-item-1"}>
                          Clothing &amp; Apparel <span>(12)</span>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="product-widget mb-30">
                  <div className="single-widget">
                    <h5 className="pt-title pb-20">Filter By Price</h5>
                    <form action="#">
                      <div className="ui-price-slider">
                        <div className="slider-range">
                          <div
                            id="slider-range"
                            className="mb-20 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                          >
                            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                            <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default"></span>
                          </div>
                          <div className="row">
                            <div className="col-9">
                              <p>
                                <label for="amount">Price :</label>
                                <input type="text" id="amount" readonly="" />
                              </p>
                            </div>
                            <div className="col-3">
                              <div className="text-end">
                                <Link to={"#"} className="sm-filter-title">
                                  Filter
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="product-widget mb-30">
                  <div className="single-widget">
                    <h5 className="pt-title mb-20">Filter By Choose Color</h5>
                    <div className="widget-color-list widget-color-box scroll-box-default">
                      <form action="#">
                        <div className="single-widget-category">
                          <input type="checkbox" id="color-item-1" name="cat-item" />
                          <label for="color-item-1" className="color-black-bg">
                            Black <span>(12)</span>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="product-widget mb-30">
                  <h5 className="pt-title mb-20">Choose Color</h5>
                  <div className="widget-category-list scroll-box-default">
                    <form action="#">
                      <div className="single-widget-category">
                        <input type="checkbox" id="size-item-1" name="cat-item" />
                        <label for="size-item-1">
                          S <span>(02)</span>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="product-widget mb-50">
                  <h5 className="pt-title mb-20">Choose Color</h5>
                  <div className="tagcloud">
                    <Link href="#">Lighting</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8">
              <div className="shop-top-area mb-20">
                <div className="row">
                  <div className="col-xxl-4 col-xl-2 col-md-3 col-sm-3">
                    <div className="shop-top-left">
                      <span className="label mr-15">View:</span>
                      <div className="nav d-inline-block tab-btn-group" id="nav-tab" role="tablist">
                        <button className="active" data-bs-toggle="tab" data-bs-target="#tab1" type="button">
                          <i className="fas fa-border-none"></i>
                        </button>
                        <button data-bs-toggle="tab" data-bs-target="#tab2" type="button" className="">
                          <i className="fas fa-list"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-6 col-md-6 col-sm-6">
                    <p className="show-total-result text-sm-center">Showing 1–12 of 24 results</p>
                  </div>
                  <div className="col-xl-4 col-xl-4 col-md-3 col-sm-3">
                    <div className="text-sm-end">
                      <div className="select-default">
                        <select name="short" id="short" className="shorting-select">
                          <option value="">Default sorting</option>
                          <option value="">ASC</option>
                          <option value="">DEC</option>
                        </select>
                        <div className="nice-select shorting-select" tabindex="0">
                          <span className="current">Default sorting</span>
                          <ul className="list">
                            <li data-value="" className="option selected focus">
                              Default sorting
                            </li>
                            <li data-value="" className="option">
                              ASC
                            </li>
                            <li data-value="" className="option">
                              DEC
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-main-area mb-40">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade active show" id="tab1">
                    <div className="row">
                      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                        <div className="product__item mb-20">
                          <div className="product__thumb w-img fix">
                            <a href="product-details.html">
                              <img src="assets/img/products/product-2/product-1.jpg" alt="" />
                            </a>
                            <div className="product__flash-4">
                              <span>20%</span>
                            </div>
                            <div className="product__action transition-3">
                              <ul>
                                <li>
                                  <Link href="#">
                                    <FacebookIcon />
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <FacebookIcon />
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <FacebookIcon />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product__content">
                            <div className="product__tag product__tag-4">
                              <span>
                                <a href="shop.html">Furniture</a>
                              </span>
                            </div>
                            <h3 className="product__title">
                              <a href="product-details.html">Wooden Single Drawer</a>
                            </h3>
                            <div className="product__price product__price-4 mb-10">
                              <span className="price">$125.00</span>
                            </div>
                            <div className="product__select-button">
                              <a href="product-details.html" className="select-btn w-100">
                                Select Options
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-pagination">
                <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li>
                        <a href="shop.html">
                          <i className="far fa-angle-left"></i>
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">1</a>
                      </li>
                      <li>
                        <a href="shop.html" className="active">
                          2
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">3</a>
                      </li>
                      <li>
                        <a href="shop.html">
                          <i className="far fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
