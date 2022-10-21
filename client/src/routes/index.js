import axios from "axios";

// Layouts
// import { HeaderOnly } from './Layouts';

/* Pages */
import Register from "../pages/Register";
import Login from "../pages/Login";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Posts from "../pages/Profile/Posts.js";
import Post from "../pages/Profile/Post.js";
// import Search from '../pages/Search';
import P404 from "../pages/P404";
import { useState } from "react";

function checkLogin() {
  let role = 'user';

  // axios
  //   .post(
  //     `${process.env.REACT_APP_URL_API}/auth/checkAuth`,
  //     {},
  //     {
  //       headers: {
  //         accessToken: sessionStorage.getItem("accessToken"),
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     if (response.data.error) {
  //       alert(response.data.error);
  //     } else {
  //       console.log("tren return", response.data.role);
  //       return role = response.data.role;
  //       console.log("duoi return", role);
  //     }
  //   });

  return role;
}

console.log("cai ham", checkLogin());

/* not login */
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/register",
    component: Register,
    layout: null,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/search",
    component: Posts,
    // layout: null,
  },
  {
    path: "/post/:id",
    component: Post,
    // layout: null,
  },
  {
    path: "/*",
    component: P404,
    layout: null,
  },
];

/* login */
const privateRoutes = [
  {
    path: "/following",
    component: Following,
    role: checkLogin(),
  },
];

export { publicRoutes, privateRoutes };
