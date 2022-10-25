/* Layouts */
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
// import { HeaderOnly } from './Layouts';

/* Pages */
import Register from "../pages/Register";
import Login from "../pages/Login";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Posts from "../pages/Profile/Posts.js";
import Post from "../pages/Profile/Post.js";

/* Pages Admin */
import AdminHome from "../pages/Admin/Home";

// import Search from '../pages/Search';
import P404 from "../pages/P404";
import P403 from "../pages/P403";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/admin",
    component: AdminHome,
    layout: AdminLayout,
    role: "admin",
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/following",
    component: Following,
    role: "admin",
  },
  {
    path: "/register",
    component: Register,
    layout: null,
  },
  {
    path: "/profile",
    component: Profile,
    role: "user",
  },
  {
    path: "/search",
    component: Posts,
    role: "user",
    // layout: null,
  },
  {
    path: "/post/:id",
    component: Post,
    // layout: null,
  },
  {
    path: "/P403",
    component: P403,
    layout: null,
  },
  {
    path: "*",
    component: P404,
    layout: null,
  },
];

export default routes;
