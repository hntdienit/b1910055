import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

import { useFormik, Field } from "formik";
import * as yup from "yup";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// // import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import SaveIcon from "@mui/icons-material/Save";

import AdminPageTitle from "../../../components/Admin/AdminPageTitle";
import AdminCardHeader from "../../../components/Admin/AdminCardHeader";

function CreatePromotion() {
  let navigate = useNavigate();

  const postForm = async (data) => {
    console.log("a", data);
    // await axios
    //   .post(`${process.env.REACT_APP_URL_API}/promotions`, data, {
    //     headers: {
    //       accessToken: localStorage.getItem("accessToken"),
    //     },
    //   })
    //   .then((response) => {
    //     if (response.data.error) {
    //       toast.error(`Add new shipping method failed! - error: ${response.data.error}`, {});
    //     } else {
    //       toast.success("Add new shipping method successfully!", {});
    //       navigate("/admin/listshippingmethod");
    //     }
    //   });
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "The shipping method names need more than 3 characters!")
      .max(15, "The shipping method names need less than 15 characters!")
      .required("The shipping method name cannot be empty!"),
    discount: yup.number().required("The shipping method discount cannot be empty!"),
  });

  const tags1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ,19, 20, 21, 22, 23];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      discount: "",
      startdate: "2022-12-24",
      enddate: "2022-12-24",
      productItem: [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });

  const handleChangeProductItem = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      formik.setFieldValue("productItem", [...formik.values.productItem, parseInt(name)]);
    } else {
      formik.setFieldValue(
        "productItem",
        formik.values.productItem.filter((v) => v !== parseInt(name))
      );
    }
  };

  return (
    <>
      <AdminPageTitle>Promotion</AdminPageTitle>
      <Card elevation={4}>
        <AdminCardHeader add title={"Promotion"} to={"/admin/listpromotion"}></AdminCardHeader>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off" paddingTop={1}>
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} height="200px" display="flex" flexDirection="column">
                <h5>Product item | selected ({formik.values.productItem.length})</h5>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  paddingX={2}
                  flex={1}
                  overflow="auto"
                >
                  {tags1.map((item) => (
                    <Grid key={item} item xs={12} sm={12} md={6} lg={3} xl={3} textAlign="center">
                      <input
                        id={item}
                        type="checkbox"
                        name={item}
                        checked={formik.values.productItem.includes(item)}
                        onChange={handleChangeProductItem}
                      />
                      <label htmlFor={item}>san pham 2(xanh)</label>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
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
                  id="discount"
                  name="discount"
                  label="discount"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                  error={formik.touched.discount && Boolean(formik.errors.discount)}
                  helperText={formik.touched.discount && formik.errors.discount}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="startdate"
                  name="startdate"
                  label="startdate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formik.values.startdate}
                  onChange={formik.handleChange}
                  error={formik.touched.startdate && Boolean(formik.errors.startdate)}
                  helperText={formik.touched.startdate && formik.errors.startdate}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="enddate"
                  name="enddate"
                  label="enddate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formik.values.enddate}
                  onChange={formik.handleChange}
                  error={formik.touched.enddate && Boolean(formik.errors.enddate)}
                  helperText={formik.touched.enddate && formik.errors.enddate}
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

export default CreatePromotion;
