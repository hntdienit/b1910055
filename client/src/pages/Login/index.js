import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import className from "classnames/bind";
import styles from "../../components/GlobalStyles";

const cl = className.bind(styles);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const login = () => {
    const data = { username: username, password: password };
    axios
      .post(`${process.env.REACT_APP_URL_API}/auth/login`, data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          sessionStorage.setItem("accessToken", response.data);
          navigate(`/`);
        }
      });
  };

  return (
    <div className={"container mb-5 mt-5"}>
      <h1>Login page</h1>
      <div>
        <div>
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;
