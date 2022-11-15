import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Box, Card, CardContent, Grid, TextField, Button, MenuItem, Typography } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AdminPageTitle from "../../../components/Admin/AdminPageTitle";
import AdminCardHeader from "../../../components/Admin/AdminCardHeader";
import Loading from "../../Public/Loading";
function EditItem() {
  const { EditId } = useParams();
  const [variations, setVariations] = useState([]);
  const [data, setData] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/variations/getAll`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setVariations(response.data);
      }
    });
    axios.get(`${process.env.REACT_APP_URL_API}/variationoptions/${EditId}`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setData(response.data);
      }
    });
  }, []);
  const editForm = async (data) => {
    await axios
      .patch(`${process.env.REACT_APP_URL_API}/variationoptions/${EditId}`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`Data fetch failed - error: ${response.data.error}`, {});
        } else {
          toast.success("Update variation option successfully!", {});
          navigate("/admin/listvariationoption");
        }
      });
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "The variation option names need more than 3 characters!")
      .max(15, "The shipping method names need less than 15 characters!")
      .required("The shipping method name cannot be empty!"),
    variationId: yup.string().required("you haven't selected a variation!"),
  });
  const formik = useFormik({
    initialValues: {
      name: undefined,
      variationId: undefined,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editForm(values);
    },
  });
  if (!!data.name) {
    if (!!!formik.values.name) {
      formik.setFieldValue("name", data.name);
      formik.setFieldValue("variationId", data.variationId);
    }
    return (
      <>
        <AdminPageTitle>Variation Option</AdminPageTitle>
        <Card elevation={4}>
          <AdminCardHeader edit title={"Variation Option"} to={"/admin/listvariationoption"}></AdminCardHeader>
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
  } else {
    return <Loading />;
  }
}
export default EditItem;
