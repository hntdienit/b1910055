import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "./helpers/AuthContext.js";

import routes from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";

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
              {routes.map((item, index) => {
                let Layout = DefaultLayout;
                if (item.layout) Layout = item.layout;
                if (item.layout === null) Layout = Fragment;
                let Page = item.component;
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      item.role ? (
                        <ProtectedRoute role={item.role}>
                          <Layout>
                            <Page></Page>
                          </Layout>
                        </ProtectedRoute>
                      ) : (
                        <Layout>
                          <Page></Page>
                        </Layout>
                      )
                    }
                  ></Route>
                );
              })}
            </Routes>
          </div>
        </Router>
      </AuthContext.Provider>
      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default App;
