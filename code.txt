import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import className from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import styles from "./Login.module.scss";
import { AuthContext } from "../../helpers/AuthContext.js";

import Button from "../../components/Button";

const cl = className.bind(styles);

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const { setAuth } = useContext(AuthContext);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Tài khoản cần nhiều hơn 3 ký tự!")
      .max(15, "Tài khoản cần ít hơn 15 ký tự!")
      .required("Tài khoản không được trống!"),
    password: yup
      .string()
      .min(6, "Mật khẩu cần nhiều hơn 6 ký tự!")
      .max(20, "Mật khẩu cần ít hơn 20 ký tự!")
      .required("Mật khẩu không được trống!"),
  });

  let navigate = useNavigate();

  const login = async (data) => {
    // const data = { username: username, password: password };
    await axios
      .post(`${process.env.REACT_APP_URL_API}/auth/login`, data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.accessToken);
          // console.log(response.data.role)
          setAuth({
            username: response.data.username,
            id: response.data.id,
            status: true,
            role: response.data.role,
          });
          console.log("trong login", response.data.role)
          if(response.data.role === "admin"){
            navigate("/admin");
          } else {
            navigate("/");
          }
          
        }
      });
  };

  return (
    // <div className={"container mb-5 mt-5"}>
    //   <h1>Login page</h1>
    //   <div>
    //     <div>
    //       <input
    //         type="text"
    //         onChange={(event) => {
    //           setUsername(event.target.value);
    //         }}
    //       />
    //     </div>
    //     <div>
    //       <input
    //         type="password"
    //         onChange={(event) => {
    //           setPassword(event.target.value);
    //         }}
    //       />
    //     </div>
    //     <button onClick={login}>Login</button>
    //   </div>
    // </div>

    // className={cl(
    //   "category__menu",
    //   "d-flex justify-content-center align-items-center"
    // )}

    <div className={"py-5"}>
      <div className={"container"}>
        <div className={"row"}>
          <div
            className={
              "col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2"
            }
          >
            <div className={cl("sign__wrapper", "text-star")}>
              <div className={"sign__header"}>
                <div className={cl("sign__in", "text-center")}>
                  <Link to={"/"} className={cl("sign__social-f", "mb-3")}>
                    <FontAwesomeIcon icon={faFacebook} className={"me-2"} />
                    Đăng nhập bằng Facebook
                  </Link>
                  <Link to={"/"} className={cl("sign__social-g", "mb-3")}>
                    <FontAwesomeIcon icon={faGoogle} className={"me-2"} />
                    Đăng nhập bằng Google
                  </Link>
                  <p>
                    <span>........</span> hoặc,&nbsp;
                    <Link to={"/login"} className={cl("")}>
                      đăng nhập&nbsp;
                    </Link>
                    bằng tài khoản<span> ........</span>
                  </p>
                </div>
              </div>
              <div className={cl("sign__form")}>
                <Formik
                  initialValues={initialValues}
                  onSubmit={login}
                  validationSchema={validationSchema}
                >
                  <div className={cl("mt-5")}>
                    <Form className={cl("form-test")}>
                      <h5>Tài khoản</h5>
                      <div className={cl("sign__input")}>
                        <Field
                          id="username"
                          name="username"
                          placeholder="Tài khoản của bạn ..."
                          // onChange={(event) => {
                          //   setUsername(event.target.value);
                          // }}
                        />
                        {/* <i class="fal fa-envelope"></i> */}
                        {/* <FontAwesomeIcon icon={faFacebook} className={"me-2"} /> */}
                        <div className={"mt-1"}>
                          <ErrorMessage name="username" component={"span"} />
                        </div>
                      </div>

                      <div className={"my-4"}>
                        <h5>Mật khẩu</h5>
                        <div className={cl("sign__input")}>
                          <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Mật khẩu của bạn ..."
                            // onChange={(event) => {
                            //   setPassword(event.target.value);
                            // }}
                          />
                          {/* <i class="fal fa-lock"></i> */}
                        </div>
                        <div className={"mt-1"}>
                          <ErrorMessage name="password" component={"span"} />
                        </div>
                      </div>
                      <div className={"d-sm-flex justify-content-between mb-4"}>
                        <div className={"d-flex align-items-center"}>
                          <input
                            className={"m-check-input"}
                            type="checkbox"
                            id="m-agree"
                          />
                          <label className={"m-check-label"}>
                            &nbsp;Ghi nhớ đăng nhập
                          </label>
                        </div>
                        <div className={cl("sign__forgot")}>
                          <Link to={"#"} className={cl("")}>
                            Quên mật khẩu?
                          </Link>
                        </div>
                      </div>
                      <button className={cl("btn-tp", "w-100")} type="submit">
                        <span></span> Đăng nhập
                      </button>
                      <div className={cl("sign__new", "text-center mt-3")}>
                        <p>
                          Bạn chưa có tài khoản?&nbsp;
                          <Link to={"/register"} className={cl("")}>
                            Đăng ký
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
