import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import className from "classnames/bind";
import styles from "../../components/GlobalStyles";

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
