import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";
import { toast } from "react-toastify";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { CartContext } from "../../../helpers/Context/CartContext";

import PageTitle from "../../../components/User/PageTitle";
import Loading from "../../../components/Public/Loading";

import { useQuery } from "react-query";
import { fetchingPosts } from "../../../services/cart";

import styles from "./Cart.module.scss";
const cl = className.bind(styles);

function Cart() {
  const { setCartDetails } = useContext(CartContext);
  const [data1, setData1] = useState([]);
  // const [data, setData] = useState([]);

  const { data, error, isError, isLoading, refetch } = useQuery(["productCart"], fetchingPosts);

  // console.info(data)
  // useEffect(() => {
  //   // axios
  //   //   .get(`${process.env.REACT_APP_URL_API}/carts`, {
  //   //     headers: {
  //   //       accessToken: localStorage.getItem("accessToken"),
  //   //     },
  //   //   })
  //   //   .then((response) => {
  //   //     if (response.data.error) {
  //   //       toast.error(`${response.data.error}`, {});
  //   //     } else {
  //   //       setData1(data);
  //   //       setCartDetails(response.data.CartDetails.length);
  //   //     }
  //   //   });
  //   refetch()
  // }, [data]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Have an errors: {error.message}</span>;
  }
  // console.log(data)

  // useLayoutEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_URL_API}/carts`, {
  //       headers: {
  //         accessToken: localStorage.getItem("accessToken"),
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         toast.error(`${response.data.error}`, {});
  //       } else {
  //         setData(response.data.CartDetails);
  //         setCartDetails(response.data.CartDetails.length);
  //       }
  //     });
  // }, []);

  const removeProductFromCart = (ProductDetailid) => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/carts/${ProductDetailid}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        axios
          .get(`${process.env.REACT_APP_URL_API}/carts`, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          })
          .then((response) => {
            if (response.data.error) {
              toast.error(`${response.data.error}`, {});
            } else {
              // setData(response.data.CartDetails);
              setCartDetails(response.data.CartDetails.length);
            }
          });
      });
  };

  const onAdd = (ProductDetailid, quantity) => {
    axios
      .patch(
        `${process.env.REACT_APP_URL_API}/carts/${ProductDetailid}`,
        { quantity: quantity },
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
          axios
            .get(`${process.env.REACT_APP_URL_API}/carts`, {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            })
            .then((response) => {
              if (response.data.error) {
                toast.error(`${response.data.error}`, {});
              } else {
                // setData1(data);
              }
            });
        }
      });
  };

  const onRemove = (ProductDetailid, quantity) => {
    axios
      .patch(
        `${process.env.REACT_APP_URL_API}/carts/${ProductDetailid}`,
        { quantity: quantity },
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
          axios
            .get(`${process.env.REACT_APP_URL_API}/carts`, {
              headers: {
                accessToken: localStorage.getItem("accessToken"),
              },
            })
            .then((response) => {
              if (response.data.error) {
                toast.error(`${response.data.error}`, {});
              } else {
                // setData(response.data.CartDetails);
              }
            });
        }
      });
  };

  // const totalPrice = data.reduce((a, c) => a + c.ProductItem.price * c.quantity, 0);
  // const totalPrice = 0;
  return (
    <>
      <PageTitle title={"Your Cart"} pagename={"Cart"}></PageTitle>
      <div className={cl("cart-area", "pb-5")}>
        <div className={cl("container")}>
          {data.length === 0 && (
            <div className={cl("row")}>
              <div className={cl("col-12")}>
                <h3>Cart is empty</h3>
              </div>
            </div>
          )}

          {data?.length !== 0 && (
            <div className={cl("row")}>
              <div className={cl("col-12")}>
                <form action="#">
                  <div className={cl("table-content", "table-responsive")}>
                    <table className={cl("table")}>
                      <thead>
                        <tr>
                          <th className={cl("product-thumbnail")}>Images</th>
                          <th className={cl("cart-product-name")}>Name</th>
                          <th className={cl("cart-product-name")}>Color</th>
                          <th className={cl("cart-product-name")}>Size</th>
                          <th className={cl("product-price")}>Unit Price</th>
                          <th className={cl("product-quantity")}>Quantity</th>
                          <th className={cl("product-subtotal")}>Total</th>
                          <th className={cl("product-remove")}>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td className={cl("product-thumbnail")}>
                                <Link to={`/product/${item.ProductDetail.Product.id}`}>
                                  <img src={item.ProductDetail.Images[0].url} alt="" />
                                </Link>
                              </td>
                              <td className={cl("product-name")}>
                                <Link to={`/product/${item.ProductDetail.Product.id}`}>
                                  {item.ProductDetail.Product.name}
                                </Link>
                              </td>
                              <td className={cl("product-name")}>
                                <Link to={"#"}>{item.ProductDetail.color}</Link>
                              </td>
                              <td className={cl("product-name")}>
                                <Link to={"#"}>{item.ProductDetail.size}</Link>
                              </td>
                              <td className={cl("product-price")}>
                                <span className={cl("amount")}>${item.ProductDetail.price}</span>
                              </td>
                              <td className={cl("product-quantity")}>
                                <div className={cl("cart-plus-minus")}>
                                  <input type="text" value={item.quantity} readOnly />
                                  <div
                                    className={cl("dec", "qtybutton")}
                                    onClick={() => {
                                      onRemove(item.ProductDetail.id, item.quantity - 1);
                                    }}
                                  >
                                    -
                                  </div>
                                  <div
                                    className={cl("inc", "qtybutton")}
                                    onClick={() => {
                                      onAdd(item.ProductDetail.id, item.quantity + 1);
                                    }}
                                  >
                                    +
                                  </div>
                                </div>
                              </td>
                              <td className={cl("product-subtotal")}>
                                <span className={cl("amount")}>${item.ProductDetail.price * item.quantity}</span>
                              </td>
                              <td className={cl("product-remove")}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    removeProductFromCart(item.ProductDetail.id);
                                  }}
                                >
                                  <DeleteOutlineIcon />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* <div className={cl("row")}>
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
                    </div> */}
                  <div className={cl("row justify-content-end")}>
                    <div className={cl("col-md-5")}>
                      <div className={cl("cart-page-total")}>
                        <h2>Cart totals</h2>
                        <ul className={cl("mb-4")}>
                          <li>
                            Subtotal <span>$250.00</span>
                          </li>
                          <li>
                            {/* Total <span>${totalPrice.toFixed(2)}</span> */}
                          </li>
                        </ul>
                        <Link className={cl("btn")} to={"/checkout"}>
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
