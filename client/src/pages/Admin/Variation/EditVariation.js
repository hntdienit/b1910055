import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import className from "classnames/bind";
import styles from "./Variation.module.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SaveIcon from "@mui/icons-material/Save";

//  xoa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cl = className.bind(styles);

function EditCategory() {
  const { EditId } = useParams();
  const [category, setCategory] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/categories/${EditId}`).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setCategory(response.data);
      }
    });
  }, []);

  const initialValues = {
    name: category.name,
  };

  const editForm = async (data) => {
    console.log("vao ham")
    // await axios
    //   .patch(`${process.env.REACT_APP_URL_API}/categories/${EditId}`, data, {
    //     headers: {
    //       accessToken: localStorage.getItem("accessToken"),
    //     },
    //   })
    //   .then((response) => {
    //     if (response.data.error) {
    //       alert(response.data.error);
    //     } else {
    //       navigate("/admin/listcategory");
    //     }
    //   });
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
      name: "",
      categoryId: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      editForm(values);
    },
  });

  if (category.name !== undefined) {
    return (
      <>
        <div className={cl("page-breadcrumb", "d-none d-sm-flex align-items-center mb-3")}>
          <div className={cl("breadcrumb-title", "pe-2")}>
            <Link to={"/admin"}>
              <FontAwesomeIcon icon={faHouse} className={""} />
            </Link>
          </div>
          <div className={cl("ps-3")}>
            <nav>
              <ol className={cl("breadcrumb", "mb-0 p-0")}>
                <li className={cl("breadcrumb-item")}>Thể loại</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className={cl("row")}>
          <div className={cl("col mx-auto")}>
            <div className={cl("card")}>
              <div className={cl("card-body")}>
                <div className={cl("p-4 rounded")}>
                  <div className={cl("card-title d-flex align-items-center")}>
                    <h4 className={cl("mb-0")}>Sửa thể loại sản phẩm</h4>
                  </div>
                  <hr />
                  <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                      editForm(values);
                    }}
                    validationSchema={validationSchema}
                  >
                    {(props) => (
                      <div className={cl("mt-5")}>
                        <Form className={cl("form-test")} onSubmit={props.handleSubmit}>
                          <div className={cl("row mb-3")}>
                            <label className={cl("col-sm-3 col-form-label")}>Tên thể loại:</label>
                            <div className={cl("col-sm-9")}>
                              <Field
                                type="text"
                                class="form-control"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                id="name"
                                name="name"
                              />

                              <div className={"mt-1"}>
                                <ErrorMessage name="name" component={"span"} />
                              </div>
                            </div>
                          </div>

                          <div className={cl("row")}>
                            <label className={cl("col-sm-3 col-form-label")}></label>
                            <div className={cl("col-sm-9")}>
                              <button type="submit" className={cl("btn btn-primary px-5")}>
                                Lưu
                              </button>
                            </div>
                          </div>
                        </Form>
                      </div>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>loading..............</div>;
  }
}

export default EditCategory;
