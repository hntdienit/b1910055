import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "./helpers/AuthContext.js";

import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout, AdminLayout } from "./layouts";

function App() {
  const [auth, setAuth] = useState({
    username: "",
    id: 0,
    status: false,
    role: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/auth/login`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuth({ username: "", id: 0, status: false, role: "" });
        } else {
          // console.log("user id", response.data.role)
          setAuth({
            username: response.data.username,
            id: response.data.id,
            status: true,
            role: response.data.role,
          });
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                let Layout = DefaultLayout;
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
              {privateRoutes.map((route, index) => {
                let Layout = DefaultLayout;
                if (auth.role === "admin") {
                  Layout = AdminLayout;
                }
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = Fragment;
                }
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
