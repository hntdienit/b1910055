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

import AdminPageTitle from "../../../components/Admin/AdminPageTitle";
import AdminCardHeader from "../../../components/Admin/AdminCardHeader";

function CreatePromotion() {
  const date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();

  let navigate = useNavigate();

  const [productItemAPI, setProductItemAPI] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/products/getallproductitem`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setProductItemAPI(response.data);
      }
    });
  }, []);

  const postForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/promotions`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Add new Promotion successfully!", {});
          navigate("/admin/listpromotion");
        }
      });
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Promotion names need more than 3 characters!")
      .max(15, "Promotion names need less than 15 characters!")
      .required("Promotion names cannot be empty!"),
    discount: yup
      .number("Promotion discounts must be the number")
      .integer("Promotion discount should be an integer")
      .min(1, "Promotion discounts must be greater than or equal to 1")
      .max(99, "Promotional discount must be less than or equal to 99")      
      .required("Promotion discounts cannot be empty!"),
    startdate: yup
      .date()
      .min(`${y}-${m + 1}-${d}`, "Date cannot be less than current date!")
      .required(),
    enddate: yup.date().min(yup.ref("startdate"), "End date cannot be before start date").required(),
    productItem: yup.array().min(1),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      discount: "",
      startdate: `${y}-${m + 1}-${d}`,
      enddate: `${y}-${m + 1}-${d + 3}`,
      productItem: [],
    },
    validationSchema: validationSchema,
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
                <Box color={"red"}>{formik.errors.productItem}</Box>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  paddingX={2}
                  flex={1}
                  overflow="auto"
                >
                  {productItemAPI.map((item) => (
                    <Grid key={item.id} item xs={12} sm={12} md={6} lg={3} xl={3} textAlign="center">
                      <input
                        id={item.id}
                        type="checkbox"
                        name={item.id}
                        checked={formik.values.productItem.includes(item.id)}
                        onChange={handleChangeProductItem}
                      />
                      <label htmlFor={item.id}>
                        &nbsp;&nbsp;{item.Product.name}({item.color})
                      </label>
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
                  label="discount (%)"
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
