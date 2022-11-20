import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useFormik} from "formik";
import * as yup from "yup";
import { Box, Grid, TextField} from "@mui/material";
import className from "classnames/bind";
import { toast } from "react-toastify";

import PageTitle from "../../../components/User/PageTitle";

import styles from "./Checkout.module.scss";

// import images from "../../../assets/images";

const cl = className.bind(styles);

function Checkout() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/orders/checkout`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`Data fetch failed - error: ${response.data.error}`, {});
        } else {
          setData(response.data);
        }
      });
  }, []);

  const postForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/products`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          // toast.error(`Add new product failed! - error: ${response.data.error}`, {});
        } else {
          console.log(response.data.hinh);
          // setHinh(response.data.hinh)
          // toast.success("Add new product successfully!", {});
          // navigate("/admin/listproduct");
        }
      });
  };

  const validationSchema = yup.object({});

  const formik = useFormik({
    initialValues: {
      address: "",
      paymentmethod: "",
      shippingmethod: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });

  return (
    <>
      <PageTitle title={"Your Checkout"} pagename={"Checkout"}></PageTitle>
      <div className={cl("checkout-area", "pb-5")}>
        <div className={cl("container")}>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid container spacing={2} paddingX={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <h4>Billing Details</h4>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="address"
                      name="address"
                      label="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      error={formik.touched.address && Boolean(formik.errors.address)}
                      helperText={formik.touched.address && formik.errors.address}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="paymentmethod"
                      name="paymentmethod"
                      label="paymentmethod"
                      value={formik.values.paymentmethod}
                      onChange={formik.handleChange}
                      error={formik.touched.paymentmethod && Boolean(formik.errors.paymentmethod)}
                      helperText={formik.touched.paymentmethod && formik.errors.paymentmethod}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="shippingmethod"
                      name="shippingmethod"
                      label="shippingmethod"
                      value={formik.values.shippingmethod}
                      onChange={formik.handleChange}
                      error={formik.touched.shippingmethod && Boolean(formik.errors.shippingmethod)}
                      helperText={formik.touched.shippingmethod && formik.errors.shippingmethod}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={cl("your-order", "mb-3")}>
                  <h4>Your order</h4>
                  <div className={cl("your-order-table", "table-responsive")}>
                    <table>
                      <thead>
                        <tr>
                          <th className={cl("product-name")}>Product</th>
                          <th className={cl("product-total")}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.CartItems?.map((item) => {
                          return (
                            <tr key={item.id} className={cl("cart_item")}>
                              <td className={cl("product-name")}>
                                {item.ProductItem.Product.name}{" "}
                                <strong className={cl("product-quantity")}> × {item.quantity}</strong>
                                <div>
                                  ({item.ProductItem.color}) - ({item.ProductItem.size})
                                </div>
                              </td>
                              <td className={cl("product-total")}>
                                <span className={cl("amount")}>${item.quantity * item.ProductItem.price}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr className={cl("cart-subtotal")}>
                          <th>Cart Subtotal</th>
                          <td>
                            <span className={cl("amount")}>$215.00</span>
                          </td>
                        </tr>
                        <tr className={cl("shipping")}>
                          <th>Shipping</th>
                          <td>
                            <span>asdfasf</span>
                          </td>
                        </tr>
                        <tr className={cl("order-total")}>
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className={cl("amount")}>$323</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className={cl("order-button-payment", "mt-2")}>
                    <button type="submit" className={cl("btn")}>
                      Place order
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Checkout;
