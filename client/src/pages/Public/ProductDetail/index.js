import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";

import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";

// import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./ProductDetail.module.scss";

import images from "../../../assets/images";

const cl = className.bind(styles);

function ProductDetail() {
  useEffect(() => {}, []);

  const customeSlider = useRef();

  const settings = {
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2700,
        settings: {
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <>
      <div class="page__title p-relative d-flex align-items-center mt-4">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page__title-inner text-center">
                <h3>Product Details</h3>
                <div class="page__title-breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item active">
                        Product Details
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cl("container py-5")}>
        <div className={cl("row")}>
          <div className={cl("col-xl-6 col-lg-6")}>
            <div className={cl("row", "product_main")}>
              <div className={cl("col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3")}>
                <div className={cl("d-block")}>
                  <Slider ref={customeSlider} {...settings}>
                    <Link className={cl("nav-item", "nav-link active")} href="#">
                      <div className={cl("product__nav-img")}>
                        <img src={images.category_1} alt="" />
                      </div>
                    </Link>
                    <Link className={cl("nav-item", "nav-link")} href="#">
                      <div className={cl("product__nav-img")}>
                        <img src={images.category_1} alt="" />
                      </div>
                    </Link>
                    <Link className={cl("nav-item", "nav-link")} href="#">
                      <div className={cl("product__nav-img")}>
                        <img src={images.category_1} alt="" />
                      </div>
                    </Link>
                  </Slider>
                </div>
              </div>

              <div className={cl("col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8")}>
                <div className={cl("product__modal-img", "product__thumb")}>
                  <img src={images.slider_1} alt="" />
                  <div className={cl("product__sale")}>
                    <span>new</span>
                    <span className={cl("percent")}>-20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cl("col-xl-6 col-lg-6")}>
            <div className={cl("product__modal-content-2")}>
              <h4>
                <Link href="#">Wooden container Bowl</Link>
              </h4>
              <div className={cl("rating", "rating-shop", "mb-2")}>
                <ul>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                </ul>
                <span className={cl("rating-no", "ms-2", "rating-left")}>3 rating(s)</span>
                <span className={cl("review", "rating-left")}>
                  <Link href="#">Add your Review</Link>
                </span>
              </div>
              <div className={cl("product__price", "mb-3")}>
                <span>$96.00</span>
                <span className={cl("old-price")}>$96.00</span>
              </div>
              <div className={cl("product__modal-des", "mb-3")}>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                  notare quam littera gothica, quam nunc putamus parum claram.
                </p>
              </div>
              <div className={cl("product__details-color", "d-sm-flex align-items-center mb-3")}>
                <span>Color:</span>
                <ul>
                  <li>
                    <Link href="#" className={cl("black")}></Link>
                  </li>
                  <li>
                    <Link href="#" className={cl("active brown")}></Link>
                  </li>
                  <li>
                    <Link href="#" className={cl("blue")}></Link>
                  </li>
                  <li>
                    <Link href="#" className={cl("red")}></Link>
                  </li>
                  <li>
                    <Link href="#" className={cl("white")}></Link>
                  </li>
                </ul>
              </div>
              <div className={cl("product__details-size", "d-sm-flex align-items-center mb-3")}>
                <span>Size: </span>
                <ul className={cl("me-3")}>
                  <li>
                    <Link href="#" className={cl("unavailable")}>
                      S
                    </Link>
                  </li>
                  <li>
                    <Link href="#">M</Link>
                  </li>
                  <li>
                    <Link href="#">L</Link>
                  </li>
                  <li>
                    <Link href="#">XL</Link>
                  </li>
                  <li>
                    <Link href="#">2XL</Link>
                  </li>
                  <li>
                    <Link href="#">3XL</Link>
                  </li>
                </ul>
              </div>
              <div className={cl("pro-quan-area", "d-sm-flex align-items-center")}>
                <div className={cl("product-quantity-title", "mb-2")}>
                  <label>Quantity</label>
                </div>
                <div className={cl("product-quantity", "me-2 mb-2")}>
                  <div className={cl("cart-plus-minus")}>
                    <input type="text" />
                    <div className={cl("dec", "qtybutton")}>-</div>
                    <div className={cl("inc", "qtybutton")}>+</div>
                  </div>
                </div>
                <div className={cl("pro-cart-btn")}>
                  <Link href="#" className={cl("add-cart-btn", "mb-2")}>
                    + Add to Cart
                  </Link>
                </div>
              </div>
              <div className={cl("product__tag", "mb-2")}>
                <span className={cl("me-2")}>Category:</span>
                <span>
                  <Link href="#">Accessories,</Link>
                </span>
                <span>
                  <Link href="#">Gaming,</Link>
                </span>
                <span>
                  <Link href="#">PC Computers,</Link>
                </span>
                <span>
                  <Link href="#">Ultrabooks</Link>
                </span>
              </div>

              <div className={cl("product__share")}>
                <span>Share :</span>
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={cl("row mt-5")}>
          <div className={cl("col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6")}>
            <div className="text-center mb-3">
              <h4>Additional Information</h4>
            </div>
            <div className={cl("product__desc-info", "mb-3")}>
              <ul>
                <li>
                  <h6>Weight</h6>
                  <span>2 lbs</span>
                </li>
                <li>
                  <h6>Dimensions</h6>
                  <span>12 × 16 × 19 in</span>
                </li>
                <li>
                  <h6>Product</h6>
                  <span>Purchase this product on rag-bone.com</span>
                </li>
                <li>
                  <h6>Color</h6>
                  <span>Gray, Black</span>
                </li>
                <li>
                  <h6>Size</h6>
                  <span>S, M, L, XL</span>
                </li>
                <li>
                  <h6>Model</h6>
                  <span>Model </span>
                </li>
                <li>
                  <h6>Shipping</h6>
                  <span>Standard shipping: $5,95</span>
                </li>
                <li>
                  <h6>Care Info</h6>
                  <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                </li>
                <li>
                  <h6>Brand</h6>
                  <span>Kazen</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={cl("col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6")}>
            <div className={cl("product__details-review", "mb-3")}>
              <div className={cl("mb-3")}>
                <h5>Reviews (03)</h5>
              </div>
              <div className={cl("latest-comments", "mb-3")}>
                <ul>
                  <li>
                    <div className={cl("comments-box")}>
                      <div className={cl("comments-avatar")}>
                        <img src={images.category_1} alt="" />
                      </div>
                      <div className={cl("comments-text")}>
                        <div className={cl("avatar-name")}>
                          <h6>Siarhei Dzenisenka</h6>
                          <span> - 3 months ago </span>
                        </div>
                        <div className={cl("user-rating")}>
                          <ul>
                            <li>
                              <span>
                                <StarIcon />
                              </span>
                            </li>
                            <li>
                              <span>
                                <StarIcon />
                              </span>
                            </li>
                            <li>
                              <span>
                                <StarIcon />
                              </span>
                            </li>
                            <li>
                              <span>
                                <StarIcon />
                              </span>
                            </li>
                            <li>
                              <span>
                                <StarIcon />
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                          model text, and a search for
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={cl("")}>
                <div className={cl("mb-3")}>
                  <h5>Your Review</h5>
                  <div className={cl("post-rating")}>
                    <span>Your Rating :</span>
                    <ul className={cl("me-5")}>
                      <li>
                        <span>
                          <StarIcon />
                        </span>
                      </li>
                      <li>
                        <span>
                          <StarIcon />
                        </span>
                      </li>
                      <li>
                        <span>
                          <StarIcon />
                        </span>
                      </li>
                      <li>
                        <span>
                          <StarIcon />
                        </span>
                      </li>
                      <li>
                        <span>
                          <StarIcon />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <form className={cl("conatct-post-form")} action="#">
                  <div className={cl("row")}>
                    <div className={cl("col-12")}>
                      <div className={cl("contacts-message")}>
                        <textarea name="comments" id="comments" cols="90" placeholder="Comments"></textarea>
                      </div>
                    </div>
                    <div className={cl("col-12")}>
                      <button className={cl("add-cart-btn")} type="submit">
                        Post comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-xl-12">
            <div className="product__details-tab">
              <div className="product__details-tab-nav text-center mb-45">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-start justify-content-sm-center"
                    id="pro-details"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="des-tab"
                      data-bs-toggle="tab"
                      href="#des"
                      role="tab"
                      aria-controls="des"
                      aria-selected="true"
                    >
                      Description
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="add-tab"
                      data-bs-toggle="tab"
                      href="#add"
                      role="tab"
                      aria-controls="add"
                      aria-selected="false"
                    >
                      Additional Information
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="review-tab"
                      data-bs-toggle="tab"
                      href="#review"
                      role="tab"
                      aria-controls="review"
                      aria-selected="false"
                    >
                      Reviews (3)
                    </a>
                  </div>
                </nav>
              </div>
              <div className="tab-content" id="pro-detailsContent">
                <div className="tab-pane fade active show" id="des" role="tabpanel"></div>
                <div className="tab-pane fade" id="add" role="tabpanel">
                  
                </div>
                <div className="tab-pane fade" id="review" role="tabpanel">
                  <div className="product__details-review mb-35">
                    <div className="postbox__comments">
                      <div className="postbox__comment-title mb-30">
                        <h3>Reviews (03)</h3>
                      </div>
                      <div className="latest-comments mb-30">
                        <ul>
                          <li>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img src="assets/img/author/avater-1.png" alt="" />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>Siarhei Dzenisenka</h5>
                                  <span> - 3 months ago </span>
                                </div>
                                <div className="user-rating">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fal fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                  default model text, and a search for <span>“lorem ipsum”</span> will uncover many web
                                  sites still in their infancy. Various versions have evolved over the years, sometimes
                                  by accident, sometimes on purpose.
                                </p>
                                <a className="reply-2" href="#">
                                  Leave Reply
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="children">
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img src="assets/img/author/avater-2.png" alt="" />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>Julias Roy</h5>
                                  <span> - 6 months ago </span>
                                </div>
                                <div className="user-rating">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fal fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                  default model text, and a search for <span>“lorem ipsum”</span> will uncover many web
                                  sites still in their infancy.{" "}
                                </p>
                                <a className="reply-2" href="#">
                                  Leave Reply
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comments-box">
                              <div className="comments-avatar">
                                <img src="assets/img/author/avater-3.png" alt="" />
                              </div>
                              <div className="comments-text">
                                <div className="avatar-name">
                                  <h5>Arista Williamson</h5>
                                  <span> - 6 months ago </span>
                                </div>
                                <div className="user-rating">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fal fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                                  default model text, and a search for <span>“lorem ipsum”</span> will uncover many web
                                  sites still in their infancy. Various versions have evolved over the years, sometimes
                                  by accident, sometimes on purpose.
                                </p>
                                <a className="reply-2" href="#">
                                  Leave Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-comments-form">
                      <div className="post-comments-title mb-30">
                        <h3>Your Review</h3>
                        <div className="post-rating">
                          <span>Your Rating :</span>
                          <ul className="ml-5">
                            <li>
                              <a href="#">
                                <i className="fal fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fal fa-star"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <form id="contacts-form" className="conatct-post-form" action="#">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contact-icon p-relative contacts-name">
                              <input type="text" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="contact-icon p-relative contacts-name">
                              <input type="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon p-relative contacts-email">
                              <input type="text" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="contact-icon p-relative contacts-message">
                              <textarea
                                name="comments"
                                id="comments"
                                cols="30"
                                rows="10"
                                placeholder="Comments"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <button className="add-cart-btn" type="submit">
                              Post comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
    </>
  );
}

export default ProductDetail;
