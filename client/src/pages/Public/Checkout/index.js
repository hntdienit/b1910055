import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useNavigate, Link } from "react-router-dom";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box, Grid, Card, CardContent, TextField, Button, Typography, MenuItem } from "@mui/material";
import className from "classnames/bind";

import PageTitle from "../../../components/User/PageTitle";

import styles from "./Checkout.module.scss";

// import images from "../../../assets/images";

const cl = className.bind(styles);

function Checkout() {
  useEffect(() => {}, []);

  const postForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/products`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
          "Content-Type": "multipart/form-data",
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

  const validationSchema = yup.object({
    categoryId: yup
      .string()
      .matches(/[1-9]+/, "Is not in correct format")
      .required("you haven't selected a variation!"),
    name: yup
      .string()
      .min(3, "The product name needs more than 3 characters!")
      .max(15, "The product name needs less than 15 characters!")
      .required("The product name cannot be empty!"),
    description: yup
      .string()
      .min(3, "The product description needs more than 3 characters!")
      .max(30, "The product description needs less than 30 characters!")
      .required("The product description cannot be empty!"),
    color: yup
      .string()
      .min(3, "The product color needs more than 3 characters!")
      .max(30, "The product color needs less than 30 characters!")
      .required("The product color cannot be empty!"),
    size: yup
      .string()
      .min(3, "The product size needs more than 3 characters!")
      .max(30, "The product size needs less than 30 characters!")
      .required("The product size cannot be empty!"),
    stock: yup.number().required("The product stock cannot be empty!"),
    price: yup.number().required("The product price cannot be empty!"),
    // image: yup
    //   .mixed()
    //   .nullable()
    //   .required()
    //   .test("FILE_SIZE", "qua lon", (value) => !value || (value && value.size <= 1024 * 1024))
    //   .test(
    //     "FILE_FORMAT",
    //     "khong dung dang hinh",
    //     (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    //   ),
  });

  const formik = useFormik({
    initialValues: {
      categoryId: "",
      name: "",
      description: "",
      color: "",
      size: "",
      stock: "",
      price: "",
      image: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formDataToSend = new FormData();
      formDataToSend.append("name", values.name);
      formDataToSend.append("categoryId", values.categoryId);
      formDataToSend.append("description", values.description);
      formDataToSend.append("color", values.color);
      formDataToSend.append("size", values.size);
      formDataToSend.append("stock", values.stock);
      formDataToSend.append("price", values.price);
      postForm(formDataToSend);
    },
  });

  return (
    <>
      <PageTitle title={"Your Checkout"} pagename={"Checkout"}></PageTitle>
      <div className={cl("checkout-area", "pb-5")}>
        <div className={cl("container")}>
          <Box
            component={"form"}
            sx={{ flexGrow: 1 }}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            encType="multipart/form-data"
          >
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
                      id="name"
                      name="name"
                      label="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </Grid>
                 
                  
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="size"
                      name="size"
                      label="size"
                      value={formik.values.size}
                      onChange={formik.handleChange}
                      error={formik.touched.size && Boolean(formik.errors.size)}
                      helperText={formik.touched.size && formik.errors.size}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="stock"
                      name="stock"
                      label="stock"
                      value={formik.values.stock}
                      onChange={formik.handleChange}
                      error={formik.touched.stock && Boolean(formik.errors.stock)}
                      helperText={formik.touched.stock && formik.errors.stock}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="price"
                      name="price"
                      label="price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      error={formik.touched.price && Boolean(formik.errors.price)}
                      helperText={formik.touched.price && formik.errors.price}
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
                        <tr className={cl("cart_item")}>
                          <td className={cl("product-name")}>
                            Vestibulum suscipit <strong className={cl("product-quantity")}> × 1</strong>
                          </td>
                          <td className={cl("product-total")}>
                            <span className={cl("amount")}>$165.00</span>
                          </td>
                        </tr>
                        <tr className={cl("cart_item")}>
                          <td className={cl("product-name")}>
                            Vestibulum suscipit <strong className={cl("product-quantity")}> × 1</strong>
                          </td>
                          <td className={cl("product-total")}>
                            <span className={cl("amount")}>$165.00</span>
                          </td>
                        </tr>
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
                              <span className={cl("amount")}>$215.00</span>
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
