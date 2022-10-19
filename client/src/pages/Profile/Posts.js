import React from "react";
import axios from "axios";
import className from "classnames/bind";
import styles from "../../components/GlobalStyles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const cl = className.bind(styles);

function Posts() {
  const initialValues = {
    name: "",
    description: "",
    content: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("hahahahha"),
    description: yup.string().required(),
    content: yup.string().min(6, "max 6 cai thoi may").max(12).required(),
  });

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_URL_API}/posts`, data)
      .then((response) => {
        navigate(`/`);
      });
  };

  let navigate = useNavigate();

  return (
    <div className={"container mb-5 mt-5"}>
      <h1>create posts</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={cl("form-test")}>
          <label>name: </label>
          <ErrorMessage name="name" component={"span"} />
          <Field id="name" name="name" placeholder="name ....." />

          <label>description: </label>
          <ErrorMessage name="description" component={"span"} />
          <Field
            id="description"
            name="description"
            placeholder="description ....."
          />

          <label>content: </label>
          <ErrorMessage name="content" component={"span"} />
          <Field id="content" name="content" placeholder="content ....." />
          <button type="submit">create</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Posts;
