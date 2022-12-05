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
import MenuItem from "@mui/material/MenuItem";

import SaveIcon from "@mui/icons-material/Save";

import AdminPageTitle from "../../../components/Admin/AdminPageTitle";
import AdminCardHeader from "../../../components/Admin/AdminCardHeader";

function CreateImportBills() {
  const date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let navigate = useNavigate();

  const [listwarehouse, setListImportBills] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/warehouses/getAll`).then((response) => {
      if (response.data.error) {
        toast.error(`Data fetch failed - error: ${response.data.error}`, {});
      } else {
        setListImportBills(response.data);
      }
    });
  }, []);

  const postForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/importbills`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Add new importbill successfully!", {});
          navigate("/admin/listimportbill");
        }
      });
  };

  const validationSchema = yup.object({
    warehouseId: yup
      .string()
      .matches(/[1-9]+/, "Is not in correct format")
      .required("you haven't selected a warehouse!"),
    total: yup
      .number("Total must be the number")
      .integer("Total discount should be an integer")
      .min(0, "Total must be greater than 0")
      .required("Total cannot be empty!"),
    date: yup
      .date()
      .max(`${y}-${m + 1}-${d}`, "Date cannot be more than current date!")
      .required(),
    note: yup
      .string()
      .min(3, "Note need more than 3 characters!")
      .max(55, "Note need less than 55 characters!")
      .required("Note cannot be empty!"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      warehouseId: "",
      total: "",
      date: "",
      note: "",
      product: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formDataToSend = new FormData();
      // formDataToSend.append("name", values.name);
      for (let i = 0; i < product.length; i++) {
        formDataToSend.append("product", product[i]);
      }
      postForm(formDataToSend);
      // console.info(formDataToSend)
      // postForm(values);
    },
  });

  ///////////////////////////////////////

  const handleFilesChange = (e) => {
    console.log(e.target.value)
    setProduct(e.target.value);
  };
  const AddImportBillDetail = () => {
    const imageSection = document.querySelector("#product-section");
    const div = document.createElement("div");
    div.className = "flex";
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "product[]");
    input.setAttribute("onChange", "{handleFilesChange}");
    // onChange={handleFilesChange}
    input.className = "form-control mt-2";

    const close = document.createElement("button");
    close.className = "btn btn-default";
    close.setAttribute("type", "button");
    close.textContent = "Remove";
    close.onclick = () => {
      input.value = null;
      imageSection.removeChild(div);
    };
    div.appendChild(input);
    div.appendChild(close);
    imageSection.appendChild(div);
  };

  ////////////////////////////////

  return (
    <>
      <AdminPageTitle>ImportBill</AdminPageTitle>
      <Card elevation={4}>
        <AdminCardHeader add title={"ImportBill"} to={"/admin/listimportbill"}></AdminCardHeader>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off" paddingTop={1}>
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  select
                  label="warehouse"
                  id="warehouseId"
                  name="warehouseId"
                  value={formik.values.warehouseId}
                  onChange={formik.handleChange}
                  error={formik.touched.warehouseId && Boolean(formik.errors.warehouseId)}
                  helperText={formik.touched.warehouseId && formik.errors.warehouseId}
                >
                  {listwarehouse.length === 0 ? (
                    <MenuItem value="a">You need to add warehouse first!</MenuItem>
                  ) : (
                    listwarehouse.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))
                  )}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="total"
                  name="total"
                  label="total"
                  value={formik.values.total}
                  onChange={formik.handleChange}
                  error={formik.touched.total && Boolean(formik.errors.total)}
                  helperText={formik.touched.total && formik.errors.total}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="date"
                  name="date"
                  label="date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="note"
                  name="note"
                  label="note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  error={formik.touched.note && Boolean(formik.errors.note)}
                  helperText={formik.touched.note && formik.errors.note}
                />
              </Grid>
            </Grid>
            <div id="product-section" className="form-group mt-2">
              <label htmlFor="images">Images</label>
              <input type="text" name="product[]" className="form-control" id="images" onChange={handleFilesChange} />
            </div>
            <div>
              <button id="add-image" onClick={AddImportBillDetail} type="button" className="btn btn-secondary mt-1">
                Add Product Detail
              </button>
            </div>

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

export default CreateImportBills;
