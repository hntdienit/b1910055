import React, { useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import className from "classnames/bind";
import styles from "./Login.module.scss";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { AuthContext } from "../../../helpers/Context/AuthContext";

import { Box } from "@mui/material";

const cl = className.bind(styles);

function Login() {
  const { setAuth } = useContext(AuthContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
    .string()
    .min(6, "Username must be more than 6 characters!")
    .max(15, "Username must be less than 15 characters!")
    .required("Username cannot be empty!"),
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
  });

  let navigate = useNavigate();

  const login = async (data) => {
    await axios.post(`${process.env.REACT_APP_URL_API}/auth/login`, data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.accessToken);
        setAuth({
          username: response.data.username,
          id: response.data.id,
          status: true,
          role: response.data.role,
        });
        if (response.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    });
  };

  return (
    <>
      <Box component={"div"}>
        <div className={"container py-5"}>
          <div className={"row"}>
            <div className={"col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2"}>
              {/* <Card elevation={6}> */}
              <div className={cl("sign__wrapper", "text-star")}>
                <div className={"sign__header"}>
                  <div className={cl("sign__in", "text-center")}>
                    <Link to={"/"} className={cl("sign__social-f", "mb-3")}>
                      <FontAwesomeIcon icon={faFacebook} className={"me-2"} />
                      Sign Up With Facebook
                    </Link>
                    <Link to={"/"} className={cl("sign__social-g", "mb-3")}>
                      <FontAwesomeIcon icon={faGoogle} className={"me-2"} />
                      Sign Up With Google
                    </Link>
                    <p>
                      <span>........</span> Or,&nbsp;
                      <Link to={"/login"} className={cl("")}>
                        Sign up&nbsp;
                      </Link>
                      with your account<span> ........</span>
                    </p>
                  </div>
                </div>
                <div className={cl("sign__form")}>
                  {/* <Formik></Formik> */}
                  <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
                    {({ value, setFieldValue }) => (
                      <div className={cl("mt-5")}>
                        <Form className={cl("form-test")}>
                          <div className={"my-4"}>
                            <h5>Username</h5>
                            <div className={cl("sign__input")}>
                              <Field
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Your username ..."
                                // onChange={(event) => {
                                //   setPassword(event.target.value);
                                // }}
                              />
                              <i>
                                <AccountCircleIcon />
                              </i>
                            </div>
                            <div className={"mt-1"}>
                              <ErrorMessage name="username" component={"span"} />
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
                                <VpnKeyIcon />
                              </i>
                            </div>
                            <div className={"mt-1"}>
                              <ErrorMessage name="password" component={"span"} />
                            </div>
                          </div>

                          <div className={"d-sm-flex justify-content-between mb-4"}>
                            <div className={"d-flex align-items-center"}>
                              <input className={"m-check-input"} type="checkbox" id="m-agree" />
                              <label className={"m-check-label"}>&nbsp;Remember me</label>
                            </div>
                            <div className={cl("sign__forgot")}>
                              <Link to={"#"} className={cl("")}>
                                Forgot password?
                              </Link>
                            </div>
                          </div>
                          <button className={cl("btn-tp", "w-100")} type="submit">
                            <span></span> Sign in
                          </button>
                          <div className={cl("sign__new", "text-center mt-3")}>
                            <p>
                              Do not have an account?&nbsp;
                              <Link to={"/register"} className={cl("")}>
                                Sign up
                              </Link>
                            </p>
                          </div>
                        </Form>
                      </div>
                    )}
                  </Formik>
                </div>
              </div>
              {/* </Card> */}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Login;
