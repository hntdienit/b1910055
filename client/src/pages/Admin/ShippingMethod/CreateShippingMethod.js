import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

import { useFormik } from "formik";
import * as yup from "yup";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SaveIcon from "@mui/icons-material/Save";

import AdminPageTitle from "../../../components/AdminPageTitle";
import AdminCardHeader from "../../../components/AdminCardHeader";

function CreateShippingMethod() {
  let navigate = useNavigate();

  const postForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/shippingmethods`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`Add new shipping method failed! - error: ${response.data.error}`, {});
        } else {
          toast.success("Add new shipping method successfully!", {});
          navigate("/admin/listshippingmethod");
        }
      });
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "The shipping method names need more than 3 characters!")
      .max(15, "The shipping method names need less than 15 characters!")
      .required("The shipping method name cannot be empty!"),
    price: yup
      .number()
      .required("The shipping method price cannot be empty!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });

  return (
    <>
      <AdminPageTitle>Shipping Method</AdminPageTitle>
      <Card elevation={4}>
        <AdminCardHeader add title={"Shipping Method"} to={"/admin/listshippingmethod"}></AdminCardHeader>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
            <Typography component="div" marginTop={2} paddingLeft={2}>
              <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
                Save
              </Button>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default CreateShippingMethod;
