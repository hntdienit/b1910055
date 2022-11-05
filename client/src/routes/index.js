/* Layouts */
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

/* Pages Public */
import P404 from "../pages/P404";
import P403 from "../pages/P403";

/* Pages */
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";

/* Pages Admin */
import AdminHome from "../pages/Admin/Home";
import { CreaterCategory, ListCategory, EditCategory } from "../pages/Admin/Category";
import { CreateVariation, ListVariation, EditVariation } from "../pages/Admin/Variation";
import { CreateShippingMethod, ListShippingMethod, EditShippingMethod } from "../pages/Admin/ShippingMethod";


const routes = [
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },

  { path: "/admin/category", component: CreaterCategory, layout: AdminLayout, role: "admin" },
  { path: "/admin/listcategory", component: ListCategory, layout: AdminLayout, role: "admin" },
  { path: "/admin/editcategory/:EditId", component: EditCategory, layout: AdminLayout, role: "admin" },

  { path: "/admin/variation", component: CreateVariation, layout: AdminLayout, role: "admin" },
  { path: "/admin/listvariation", component: ListVariation, layout: AdminLayout, role: "admin" },
  { path: "/admin/editvariation/:EditId", component: EditVariation, layout: AdminLayout, role: "admin" },

  { path: "/admin/shippingmethod", component: CreateShippingMethod, layout: AdminLayout, role: "admin" },
  { path: "/admin/listshippingmethod", component: ListShippingMethod, layout: AdminLayout, role: "admin" },
  { path: "/admin/editshippingmethod/:EditId", component: EditShippingMethod, layout: AdminLayout, role: "admin" },


  { path: "/P403", component: P403, layout: null },
  { path: "/admin", component: AdminHome, layout: AdminLayout, role: "admin" },
  { path: "/", component: Home },
  { path: "*", component: P404, layout: null },
];

export default routes;
