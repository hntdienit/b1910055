import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { useNavigate, Link, useParams } from "react-router-dom";
import className from "classnames/bind";

import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";

// import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./ProductDetail.module.scss";

import PageTitle from "../../../components/User/PageTitle";
import Loading from "../../../components/Public/Loading";

import images from "../../../assets/images";

import { useQuery } from "react-query";
import { productDetail } from "../../../services/product";

const cl = className.bind(styles);

function ProductDetail() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/products/getproductdetail/${id}`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setData(response.data);
      }
    });
  }, []);

  const incQuantity = (stock) => {
    if (quantity >= stock) {
      toast.error("Quantity must not be greater than stock quantity", {});
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decQuantity = (stock) => {
    if (quantity === 1) {
      toast.error("Quantity must be greater than 0", {});
    } else {
      setQuantity(quantity - 1);
    }
  };

  const addProductToCart = async (productId, productQuantity) => {
    await axios
      .post(
        `${process.env.REACT_APP_URL_API}/carts/addproducttocart`,
        {
          productId: productId,
          productQuantity: productQuantity,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Product added to cart successfully!", {});
          navigate("/cart");
        }
      });
  };

  const customeSlider = useRef();

  const settings = {
    infinite: true,
    slidesToShow: 1,
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

  if (!!!data.id) {
    return (
      <>
        <div>loading.....</div>
      </>
    );
  } else {
    // const { data, error, isError, isLoading } = useQuery(["productdetail"], () => productDetail({ id: id }), {
    //   cacheTime: 30000,
    //   refetchOnWindowFocus: false,
    //   staleTime: 10000,
    // });

    // if (isLoading) {
    //   return <span>Loading...</span>;
    // }

    // if (isError) {
    //   return <span>Have an errors: {error.message}</span>;
    // }
    return (
      <>
        <PageTitle title={"Product Details"} pagename={"Product Details"}></PageTitle>
        <div className={cl("container py-5")}>
          <div className={cl("row")}>
            <div className={cl("col-xl-6 col-lg-6")}>
              <div className={cl("row", "product_main")}>
                <div className={cl("col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3")}>
                  <div className={cl("d-block")}>
                    <Slider ref={customeSlider} {...settings}>
                      {data.ProductDetails?.map((item) => {
                        return (
                          <div>
                            <Link key={item.id} className={cl("nav-item", "nav-link active")} to={`/product/${item.id}`}>
                              <div className={cl("product__nav-img")}>
                                <img src={item.Images[0].url} alt="" />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                      {/* {data.ProductDetails[0].Images?.map((item) => {
                      return (
                        <Link key={item.id} className={cl("nav-item", "nav-link active")} to={"#"}>
                          <div className={cl("product__nav-img")}>
                            <img src={item.url} alt="" />
                          </div>
                        </Link>
                      );
                    })} */}
                    </Slider>
                  </div>
                </div>

                <div className={cl("col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8")}>
                  <div className={cl("product__modal-img", "product__thumb")}>
                    <img src={data.ProductDetails[0].Images[0].url} alt="" />
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
                  <Link to={"#"}>{data.name}</Link>
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
                  <span>${data.ProductDetails[0].price}</span>
                  <span className={cl("old-price")}>$96.00</span>
                </div>
                <div className={cl("product__modal-des", "mb-3")}>
                  <p>{data.description}</p>
                </div>
                <div className={cl("product__details-color", "d-sm-flex align-items-center mb-3")}>
                  <span>Color:</span>
                  <ul>
                    {data.ProductDetails.map((item) => {
                      return <li key={item.id}>{item.color}</li>;
                    })}
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
                    {data.ProductDetails.map((item) => {
                      return <li key={item.id}>{item.size}</li>;
                    })}
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
                      <input
                        type="text"
                        value={quantity}
                        readOnly
                        // onChange={(event) => {
                        //   if (event.target.value <= 0) {
                        //     toast.error("Quantity must be greater than 0", {});
                        //     setQuantity(1);
                        //   } else {
                        //     if (event.target.value > product.ProductDetails[0].stock) {
                        //       setQuantity(1);
                        //       toast.error("Quantity must not be greater than stock quantity", {});
                        //     }
                        //     else {
                        //       setQuantity(event.target.value);
                        //     }
                        //   }
                        // }}
                      />
                      <div
                        className={cl("dec", "qtybutton")}
                        onClick={() => {
                          decQuantity(data.ProductDetails[0].stock);
                        }}
                      >
                        -
                      </div>
                      <div
                        className={cl("inc", "qtybutton")}
                        onClick={() => {
                          incQuantity(data.ProductDetails[0].stock);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className={cl("pro-cart-btn")}>
                    <button
                      type="button"
                      onClick={() => {
                        addProductToCart(data.ProductDetails[0].id, quantity);
                      }}
                      className={cl("add-cart-btn", "mb-2")}
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
                <div className={cl("product__share", "mt-3")}>
                  <span>Stock :</span>
                  <ul>
                    <li>
                      <Link to={"#"}>{data.ProductDetails[0].WarehouseDetails?.reduce((a, c) => a + c.stock, 0)}</Link>
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
                    <h6>Name</h6>
                    <span>{data?.name}</span>
                  </li>
                  <li>
                    <h6>Description</h6>
                    <span>{data?.description}</span>
                  </li>
                  <li>
                    <h6>Color</h6>
                    <span>{data.ProductDetails?.map((item) => item.color + " ")}</span>
                  </li>
                  <li>
                    <h6>Size</h6>
                    <span>{data.ProductDetails?.map((item) => item.size + " ")}</span>
                  </li>
                  <li>
                    <h6>Total stock</h6>
                    <span>{data.ProductDetails[0].WarehouseDetails?.reduce((a, c) => a + c.stock, 0)}</span>
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
      </>
    );
  }
}

export default ProductDetail;
