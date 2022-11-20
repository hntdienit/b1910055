import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";

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

function EditCategory() {
  const { EditId } = useParams();
  const [category, setCategory] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/categories/${EditId}`).then((response) => {
      if (response.data.error) {
        toast.error(`${response.data.error}`, {});
      } else {
        setCategory(response.data);
      }
    });
  }, [EditId]);

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Category names need more than 3 characters!")
      .max(15, "Category names need less than 15 characters!")
      .required("Category names cannot be empty!"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editForm(values);
    },
  });

  const editForm = async (data) => {
    await axios
      .patch(`${process.env.REACT_APP_URL_API}/categories/${EditId}`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Edit category successfully!", {});
          navigate("/admin/listcategory");
        }
      });
  };
  if (!!category.name) {
    if (!!!formik.values.name) {
      formik.setFieldValue("name", category.name);
    }
    return (
      <>
      <AdminPageTitle>Category</AdminPageTitle>
      <Card elevation={4}>
        <AdminCardHeader add title={"Category"} to={"/admin/listcategory"}></AdminCardHeader>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off" paddingTop={1}>
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
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
  } else {
    return <div>loading..............</div>;
  }
}

export default EditCategory;
