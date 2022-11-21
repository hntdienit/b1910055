import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import className from "classnames/bind";
import styles from "./Register.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Box } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import KeyIcon from "@mui/icons-material/Key";

const cl = className.bind(styles);

function Register() {
  let navigate = useNavigate();

  const [verify, setVerify] = useState("");
  const [resUsername, setResUsername] = useState("");

  const initialValues = {
    username: "dien123",
    email: "hntdienit@gmail.com",
    password: "Abc123!",
    repassword: "Abc123!",
    toggle: true,
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(6, "Username must be more than 6 characters!")
      .max(15, "Username must be less than 15 characters!")
      .required("Username cannot be empty!"),
    email: yup.string().email("Email is not valid").required("Email cannot be empty!"),
    password: yup
      .string()
      .min(6, "Password must be more than 6 characters!")
      .max(15, "Password must be less than 15 characters!")
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!"
      )
      .required("Password cannot be empty!"),
    repassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match!"),
    toggle: yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const onSubmit = (data) => {
    axios.post(`${process.env.REACT_APP_URL_API}/auth/register`, data).then((response) => {
      if (response.data.error) {
        toast.error(`${response.data.error}`, {});
      } else {
        toast.success("Sign up account successfully!", {});
        setVerify(response.data.verify);
        setResUsername(response.data.username);
      }
    });
  };

  const initialValuesVerify = {
    verifycode: "",
  };

  const validationSchemaVerify = yup.object().shape({
    verifycode: yup
      .string()
      .min(6, "Username must be more than 6 characters!")
      .max(6, "Username must be less than 6 characters!")
      .required("Username cannot be empty!"),
  });

  const onSubmitVerify = (data) => {
    data.username = resUsername;
    axios.post(`${process.env.REACT_APP_URL_API}/auth/verify`, data).then((response) => {
      if (response.data.error) {
        toast.error(`${response.data.error}`, {});
      } else {
        toast.success("Account verification successful, you can log in!", {});
        navigate("/login");
      }
    });
  };

  if (verify !== "") {
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
                    <Formik></Formik>
                    <Formik
                      initialValues={initialValuesVerify}
                      enableReinitialize={true}
                      onSubmit={onSubmitVerify}
                      validationSchema={validationSchemaVerify}
                    >
                      {(props) => (
                        <div className={cl("mt-5")}>
                          <form onSubmit={props.handleSubmit} className={cl("form-test")}>
                            <div className={"my-4"}>
                              <h5>code</h5>
                              <div className={cl("sign__input")}>
                                <Field
                                  type="text"
                                  id="verifycode"
                                  name="verifycode"
                                  placeholder="Your verification code..."
                                />
                                <i>
                                  <KeyIcon />
                                </i>
                              </div>
                              <div className={"mt-1"}>
                                <ErrorMessage name="verifycode" component={"span"} />
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
                          </form>
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
  } else {
    return (
      <>
        <Box component={"div"}>
          <div className={"container py-5"}>
            <div className={"row"}>
              <div className={"col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2"}>
                <div className={cl("sign__wrapper", "text-star")}>
                  <div className={"sign__header"}>
                    <div className={cl("sign__in", "text-center")}>
                      <Link to={"#"} className={cl("sign__social-f", "mb-3")}>
                        <i className={"me-2"}>
                          <FacebookIcon />
                        </i>
                        Sign Up With Facebook
                      </Link>
                      <Link to={"#"} className={cl("sign__social-g", "mb-3")}>
                        <i className={"me-2"}>
                          <GoogleIcon />
                        </i>
                        Sign Up With Google
                      </Link>
                      <p>
                        <span>........</span> Or,&nbsp;
                        <Link to={"/login"} className={cl("")}>
                          sign up&nbsp;
                        </Link>
                        with your account<span> ........</span>
                      </p>
                    </div>
                  </div>
                  <div className={cl("sign__form")}>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                      {({ value, setFieldValue }) => (
                        <div className={cl("mt-5")}>
                          <Form className={cl("form-test")}>
                            <div className={"my-4"}>
                              <h5>UserName</h5>
                              <div className={cl("sign__input")}>
                                <Field type="text" id="username" name="username" placeholder="Your usename..." />
                                <i>
                                  <PersonPinIcon />
                                </i>
                              </div>
                              <div className={"mt-1"}>
                                <ErrorMessage name="username" component={"span"} />
                              </div>
                            </div>
                            <div className={"my-4"}>
                              <h5>Email</h5>
                              <div className={cl("sign__input")}>
                                <Field
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="abc@mail.com"
                                  // onChange={(event) => {
                                  //   setPassword(event.target.value);
                                  // }}
                                />
                                <i>
                                  <EmailIcon />
                                </i>
                              </div>
                              <div className={"mt-1"}>
                                <ErrorMessage name="email" component={"span"} />
                              </div>
                            </div>
                            <div className={"my-4"}>
                              <h5>Password</h5>
                              <div className={cl("sign__input")}>
                                <Field
                                  type="password"
                                  id="password"
                                  name="password"
                                  placeholder="Your password ..."
                                  // onChange={(event) => {
                                  //   setPassword(event.target.value);
                                  // }}
                                />
                                <i>
                                  <LockIcon />
                                </i>
                              </div>
                              <div className={"mt-1"}>
                                <ErrorMessage name="password" component={"span"} />
                              </div>
                            </div>
                            <div className={"my-4"}>
                              <h5>Re-Password</h5>
                              <div className={cl("sign__input")}>
                                <Field
                                  type="password"
                                  id="repassword"
                                  name="repassword"
                                  placeholder="Your password ..."
                                  // onChange={(event) => {
                                  //   setPassword(event.target.value);
                                  // }}
                                />
                                <i>
                                  <LockIcon />
                                </i>
                              </div>
                              <div className={"mt-1"}>
                                <ErrorMessage name="repassword" component={"span"} />
                              </div>
                            </div>

                            <div className={"d-sm-flex justify-content-between mb-4"}>
                              <div className={"d-flex align-items-center"}>
                                <label>
                                  <Field type="checkbox" name="toggle" />
                                  &nbsp;I agree to the Terms & Conditions
                                </label>
                              </div>
                              <div className={"mt-1"}>
                                <ErrorMessage name="toggle" component={"span"} />
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
}

export default Register;
