import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import className from "classnames/bind";
import styles from "./Authverify.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box } from "@mui/material";

import KeyIcon from '@mui/icons-material/Key';

const cl = className.bind(styles);

function Authverify() {
  let navigate = useNavigate();

  const initialValues = {
    verifycode: "",
  };

  const validationSchema = yup.object().shape({
    verifycode: yup
      .number()
      // .min(100000, "Username must be more than 6 characters!")
      // .max(6, "Username must be less than 15 characters!")
      .required("Username cannot be empty!"),
  });

  const onSubmit = (data) => {
    // axios.post(`${process.env.REACT_APP_URL_API}/auth/verify`, data).then((response) => {
    //   if (response.data.error) {
    //     toast.error(`${response.data.error}`, {});
    //   } else {
    //     toast.success("Sign up account successfully!", {});
    //     navigate("/login");
    //   }
    // });
  };

  return (
    <>
      <Box component={"div"}>
        <div className={"container py-5"}>
          <div className={"row"}>
            <div className={"col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2"}>
              <div className={cl("sign__wrapper", "text-star")}>
                <div className={"sign__header"}>
                  <div className={cl("sign__in", "text-center")}>
                    <h3>Account verification</h3>
                  </div>
                </div>
                <div className={cl("sign__form")}>
                  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {({ value, setFieldValue }) => (
                      <div className={cl("mt-5")}>
                        <Form className={cl("form-test")}>
                          <div className={"my-4"}>
                            <h5>code</h5>
                            <div className={cl("sign__input")}>
                              <Field type="text" id="verifycode" name="verifycode" placeholder="Your verification code..." />
                              <i>
                                <KeyIcon />
                              </i>
                            </div>
                            <div className={"mt-1"}>
                              <ErrorMessage name="username" component={"span"} />
                            </div>
                          </div>
                          <button className={cl("btn-tp", "w-100")} type="submit">
                            <span></span> Sign up
                          </button>
                          <div className={cl("sign__new", "text-center mt-3")}>
                            <p>
                              Do you already have an account?&nbsp;
                              <Link to={"/login"} className={cl("")}>
                                Sign in
                              </Link>
                            </p>
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
      </Box>
    </>
  );
}

export default Authverify;
