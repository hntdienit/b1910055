import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Grid, Card, CardContent, TextField, Button, Typography, MenuItem } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AdminPageTitle from "../../../components/Admin/AdminPageTitle";
import AdminCardHeader from "../../../components/Admin/AdminCardHeader";
function CreateItem() {
  const [variations, setVariations] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/variations/getAll`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setVariations(response.data);
      }
    });
  }, []);
  const postForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/variationoptions`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`Add new variation option failed! - error: ${response.data.error}`, {});
        } else {
          toast.success("Add new variation option successfully!", {});
          navigate("/admin/listvariationoption");
        }
      });
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "The variation option names need more than 2 characters!")
      .max(15, "The variation option names need less than 15 characters!")
      .required("The variation option name cannot be empty!"),
    variationId: yup.string().required("you haven't selected a variation!"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      variationId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });
  return (
    <>
      <AdminPageTitle>Variation Option</AdminPageTitle>
      <Card elevation={4}>
        <AdminCardHeader add title={"Variation Option"} to={"/admin/listvariationoption"}></AdminCardHeader>
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
                  label="variation"
                  id="variationId"
                  name="variationId"
                  value={formik.values.variationId}
                  onChange={formik.handleChange}
                  error={formik.touched.variationId && Boolean(formik.errors.variationId)}
                  helperText={formik.touched.variationId && formik.errors.variationId}
                >
                  {variations.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
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
}
export default CreateItem;
