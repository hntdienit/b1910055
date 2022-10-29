import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import className from "classnames/bind";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// import { AuthContext } from "../../helpers/AuthContext.js";
import styles from "./Category.module.scss";

/* import FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/* import assets */
// import images from "../../assets/images";

/* import components */

const cl = className.bind(styles);

function EditCategory() {
  const { EditId } = useParams();
  const [category, setCategory] = useState({});

  let navigate = useNavigate();

  useLayoutEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/categories/${EditId}`)
      .then((response) => {
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

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Tên thể loại cần nhiều hơn 3 ký tự!")
      .max(15, "Tên thể loại cần ít hơn 15 ký tự!")
      .required("Tên thể loại không được trống!"),
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
          alert(response.data.error);
        } else {
          navigate("/admin/listcategory");
        }
      });
  };
  if (category.name !== undefined)
    return (
      <>
        <div
          className={cl(
            "page-breadcrumb",
            "d-none d-sm-flex align-items-center mb-3"
          )}
        >
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
                        <Form
                          className={cl("form-test")}
                          onSubmit={props.handleSubmit}
                        >
                          <div className={cl("row mb-3")}>
                            <label className={cl("col-sm-3 col-form-label")}>
                              Tên thể loại:
                            </label>
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
                            <label
                              className={cl("col-sm-3 col-form-label")}
                            ></label>
                            <div className={cl("col-sm-9")}>
                              <button
                                type="submit"
                                className={cl("btn btn-primary px-5")}
                              >
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
}

export default EditCategory;
