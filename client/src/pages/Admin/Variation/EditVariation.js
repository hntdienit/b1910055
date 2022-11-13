import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import AdminPageTitle from "../../../components/AdminPageTitle";
import AdminCardHeader from "../../../components/AdminCardHeader";
import Loading from "../../Public/Loading";
function EditCategory() {
  const { EditId } = useParams();
  const [variation, setvariation] = useState({});
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/categories/getall`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setCategories(response.data);
      }
    });
    axios.get(`${process.env.REACT_APP_URL_API}/variations/${EditId}`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setvariation(response.data);
      }
    });
  }, []);
  const editForm = async (data) => {
    await axios
      .patch(`${process.env.REACT_APP_URL_API}/variations/${EditId}`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          toast.success("Update variation successfully!", {});
          navigate("/admin/listvariation");
        }
      });
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "The variation names need more than 3 characters!")
      .max(15, "The variation names need less than 15 characters!")
      .required("The variation name cannot be empty!"),
    categoryId: yup.string().required("you haven't selected a variation!"),
  });
  const formik = useFormik({
    initialValues: {
      name: undefined,
      categoryId: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editForm(values);
    },
  });
  if (!!variation.name) {
    if (!!!formik.values.name) {
      formik.setFieldValue("name", variation.name);
      formik.setFieldValue("categoryId", variation.categoryId);
    }
    return (
      <>
        <AdminPageTitle>Variation</AdminPageTitle>
        <Card elevation={4}>
          <AdminCardHeader edit title={"Variation"} to={"/admin/listvariation"}></AdminCardHeader>
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
                    select
                    label="category"
                    id="categoryId"
                    name="categoryId"
                    value={formik.values.categoryId}
                    onChange={formik.handleChange}
                    error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
                    helperText={formik.touched.categoryId && formik.errors.categoryId}
                  >
                    {categories.map(
                      (option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      )
                    )}
                  </TextField>
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
    return <Loading />;
  }
}
export default EditCategory;