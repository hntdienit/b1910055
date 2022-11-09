import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import className from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const cl = className.bind(styles);

function Register() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "nhieu hon 3")
      .max(15, "it hon 15")
      .required("nhap tai khoan"),
    password: yup
      .string()
      .min(6, "nhieu hon 6")
      .max(20, "it hon 20")
      .required("nhap mat khau"),
  });

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_URL_API}/auth/register`, data)
      .then((response) => {
        // navigate(`/`);
        console.log(data);
      });
  };

  return (
    // <div className={cl("py-5")}>
    //   <div className={"container"}>
    //     <div className={"row"}>
    //       <div
    //         className={
    //           "col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2"
    //         }
    //       >
    //         <div className={cl("sign__wrapper")}>
    //           <div className={cl("sign__heade", "mb-3")}>
    //             <div className={cl("sign__in", "text-center")}>
    //               <Link
    //                 to={"#"}
    //                 className={cl("sign__social", "text-start mb-2")}
    //               >
    //                 <FontAwesomeIcon icon={faGoogle} className={"me-2"} />
    //                 Đăng ký với Google
    //               </Link>
    //               <p>
    //                 <span>........</span> hoặc, <Link to={"#"}>đăng ký</Link>{" "}
    //                 với tài khoản<span> ........</span>
    //               </p>
    //             </div>
    //           </div>
    //           <div className={cl("sign__form")}>
    //             <Formik
    //               initialValues={initialValues}
    //               onSubmit={onSubmit}
    //               validationSchema={validationSchema}
    //             >
    //               <Form className={cl("form-test")}>
    //                 <div className={"mb-3"}>
    //                   <label>username: </label>
    //                   <div>
    //                     <ErrorMessage name="username" component={"span"} />
    //                   </div>
    //                   <div>
    //                     <Field
    //                       id="username"
    //                       name="username"
    //                       placeholder="username ....."
    //                     />
    //                   </div>
    //                   <div class="sign__input-wrapper mb-25">
    //                     <h5>Full Name</h5>
    //                     <div class="sign__input">
    //                       <input type="text" placeholder="Full name" />
    //                       <i class="fal fa-user"></i>
    //                     </div>
    //                   </div>
    //                 </div>

    //                 <button type="submit">register</button>
    //               </Form>
    //             </Formik>

    //             <form action="#">
    //               <div class="sign__input-wrapper mb-25">
    //                 <h5>Full Name</h5>
    //                 <div class="sign__input">
    //                   <input type="text" placeholder="Full name" />
    //                   <i class="fal fa-user"></i>
    //                 </div>
    //               </div>
    //               <div class="sign__input-wrapper mb-25">
    //                 <h5>Work email</h5>
    //                 <div class="sign__input">
    //                   <input type="text" placeholder="e-mail address" />
    //                   <i class="fal fa-envelope"></i>
    //                 </div>
    //               </div>
    //               <div class="sign__input-wrapper mb-25">
    //                 <h5>Password</h5>
    //                 <div class="sign__input">
    //                   <input type="text" placeholder="Password" />
    //                   <i class="fal fa-lock"></i>
    //                 </div>
    //               </div>
    //               <div class="sign__input-wrapper mb-10">
    //                 <h5>Re-Password</h5>
    //                 <div class="sign__input">
    //                   <input type="text" placeholder="Re-Password" />
    //                   <i class="fal fa-lock"></i>
    //                 </div>
    //               </div>
    //               <div class="sign__action d-flex justify-content-between mb-30">
    //                 <div class="sign__agree d-flex align-items-center">
    //                   <input
    //                     class="m-check-input"
    //                     type="checkbox"
    //                     id="m-agree"
    //                   />
    //                   <label class="m-check-label" for="m-agree">
    //                     I agree to the <a href="#">Terms &amp; Conditions</a>
    //                   </label>
    //                 </div>
    //               </div>
    //               <button class="btn-tp w-100">
    //                 <span></span> Sign Up
    //               </button>
    //               <div class="sign__new text-center mt-20">
    //                 <p>
    //                   Already in Markit ? <a href="sign-in.html"> Sign In</a>
    //                 </p>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={"container mb-5 mt-5"}>
      <h1>register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={cl("form-test")}>
          <label>username: </label>
          <div>
            <ErrorMessage name="username" component={"span"} />
          </div>
          <div>
            <Field id="username" name="username" placeholder="username ....." />
          </div>

          <label>password: </label>
          <div>
            <Field type="password" id="password" name="password" placeholder="password ....." />
          </div>
          <div>
            <ErrorMessage name="password" component={"span"} />
          </div>

          <button type="submit">register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
