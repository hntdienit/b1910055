import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import className from "classnames/bind";

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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

// import { AuthContext } from "../../helpers/AuthContext.js";
import PageTitle from "../../../components/User/PageTitle";

import styles from "./Profile.module.scss";

import images from "../../../assets/images";

const cl = className.bind(styles);

function Profile() {
  const [address, setAddress] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/addresses`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          setAddress(response.data);
        }
      });
  }, []);

  const postFormAddress = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/addresses`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Add new address successfully!", {});
          navigate("/");
        }
      });
  };

  const postFormUserInformation = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_URL_API}/addresses`, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Add new address successfully!", {});
          navigate("/");
        }
      });
  };

  const validationSchemaUserInformation = yup.object({
    name: yup
      .string()
      .min(3, "Category names need more than 3 characters!")
      .max(15, "Category names need less than 15 characters!")
      .required("Category names cannot be empty!"),
  });

  const formikUserInformation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
    },
    validationSchema: validationSchemaUserInformation,
    onSubmit: (values) => {
      postFormUserInformation(values);
    },
  });

  const validationSchemAddress = yup.object({
    address: yup
      .string()
      .min(3, "Address need more than 3 characters!")
      .max(150, "Address names need less than 150 characters!")
      .required("Address names cannot be empty!"),
  });

  const formikAddress = useFormik({
    enableReinitialize: true,
    initialValues: {
      address: "",
    },
    validationSchema: validationSchemAddress,
    onSubmit: (values) => {
      postFormAddress(values);
    },
  });

const editAddress = async (id) => {
  formikAddress.setFieldValue("address", data.variationId);
}

  return (
    <>
      <div className={cl("container")}>
        <div className={cl("timeline")}>
          <div className={cl("timeline-cover")}>
            <div className={cl("title")}>
              <PageTitle title={"Your Profile"} pagename={"Profile"}></PageTitle>
            </div>
            <div className={cl("timeline-nav-bar")}>
              <div className={cl("row")}>
                <div className={cl("col-md-3")}>
                  <div className={cl("profile-info")}>
                    <div className={cl("profile__info")}>
                      <img src={images.category_1} alt="" className={cl("img-responsive", "profile-photo")} />
                      <div className={cl("")}>
                        <h3>username</h3>
                        <p className={cl("text-muted")}>email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cl("page-contents")}>
            <div className={cl("row")}>
              <div className={cl("col-md-3")}></div>
              <div className={cl("col-md-4")}>
                <div className={cl("about-profile")}>
                  <div className={cl("about-content-block")}>
                    <h4 className={cl("grey")}>Personal Information</h4>
                    <p>fullname</p>
                    <p>phone</p>
                    <p>birthday</p>
                    <p>gender</p>
                    <p>cccd</p>
                  </div>
                  <div className={cl("about-content-block")}>
                    <h4>Your Address</h4>
                    {address?.map((item, index) => {
                      return (
                        <div key={item.id} className={cl("organization", "d-flex justify-content-start mt-3")}>
                          <img src={images.category_1} alt="" className={cl("pull-left", "img-org")} />
                          <div className={cl("work-info", "ps-3")}>
                            <h6>Address {index + 1}</h6>
                            <p>
                              {item.address}
                            </p>
                          </div>
                          <div className={cl("work-info", "ps-4")}>
                            <button type="button" className="text-warning" onClick={() => {editAddress(item.id)}}>
                              <EditIcon />
                            </button>{" "}
                            |
                            <button type="button" className="text-danger">
                              <DeleteOutlineIcon />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={cl("col-md-5")}>
                <div className={cl("about-profile")}>
                  <div className={cl("about-content-block")}>
                    <h4 className={cl("grey")}>Update Personal Information</h4>
                    <Card elevation={4}>
                      <CardContent>
                        <Box
                          component={"form"}
                          sx={{ flexGrow: 1 }}
                          onSubmit={formikUserInformation.handleSubmit}
                          autoComplete="off"
                          paddingTop={1}
                        >
                          <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                              <TextField
                                fullWidth
                                margin="normal"
                                id="name"
                                name="name"
                                label="name"
                                value={formikUserInformation.values.name}
                                onChange={formikUserInformation.handleChange}
                                error={formikUserInformation.touched.name && Boolean(formikUserInformation.errors.name)}
                                helperText={formikUserInformation.touched.name && formikUserInformation.errors.name}
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
                  </div>
                  <div className={cl("about-content-block")}>
                    <h4>New Address</h4>
                    <Card elevation={4}>
                      <CardContent>
                        <Box
                          component={"form"}
                          sx={{ flexGrow: 1 }}
                          onSubmit={formikAddress.handleSubmit}
                          autoComplete="off"
                          paddingTop={1}
                        >
                          <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                              <TextField
                                fullWidth
                                margin="normal"
                                id="address"
                                name="address"
                                label="New address"
                                value={formikAddress.values.address}
                                onChange={formikAddress.handleChange}
                                error={formikAddress.touched.address && Boolean(formikAddress.errors.address)}
                                helperText={formikAddress.touched.address && formikAddress.errors.address}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
