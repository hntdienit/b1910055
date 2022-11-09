/* Layouts */
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

/* Pages Public */
import Home from "../pages/Home";

/* Pages Error */
import Page404 from "../pages/PageError/Page404";
import Page403 from "../pages/PageError/Page403";

/* Pages */
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

/* Pages Admin */
import AdminHome from "../pages/Admin/Home";
import { CreaterCategory, ListCategory, EditCategory } from "../pages/Admin/Category";
import { CreateVariation, ListVariation, EditVariation } from "../pages/Admin/Variation";
import { CreateShippingMethod, ListShippingMethod, EditShippingMethod } from "../pages/Admin/ShippingMethod";
import { CreateVariationOption, ListVariationOption, EditVariationOption } from "../pages/Admin/VariationOption";
import { CreateProduct, ListProduct, EditProduct } from "../pages/Admin/Product";

const routes = [
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },

  { path: "/admin/category", component: CreaterCategory, layout: AdminLayout, role: "admin" },
  { path: "/admin/listcategory", component: ListCategory, layout: AdminLayout, role: "admin" },
  { path: "/admin/editcategory/:EditId", component: EditCategory, layout: AdminLayout, role: "admin" },

  { path: "/admin/variation", component: CreateVariation, layout: AdminLayout, role: "admin" },
  { path: "/admin/listvariation", component: ListVariation, layout: AdminLayout, role: "admin" },
  { path: "/admin/editvariation/:EditId", component: EditVariation, layout: AdminLayout, role: "admin" },

  { path: "/admin/variationoption", component: CreateVariationOption, layout: AdminLayout, role: "admin" },
  { path: "/admin/listvariationoption", component: ListVariationOption, layout: AdminLayout, role: "admin" },
  { path: "/admin/editvariationoption/:EditId", component: EditVariationOption, layout: AdminLayout, role: "admin" },

  { path: "/admin/shippingmethod", component: CreateShippingMethod, layout: AdminLayout, role: "admin" },
  { path: "/admin/listshippingmethod", component: ListShippingMethod, layout: AdminLayout, role: "admin" },
  { path: "/admin/editshippingmethod/:EditId", component: EditShippingMethod, layout: AdminLayout, role: "admin" },

  { path: "/admin/product", component: CreateProduct, layout: AdminLayout, role: "admin" },
  { path: "/admin/listproduct", component: ListProduct, layout: AdminLayout, role: "admin" },
  { path: "/admin/editproduct/:EditId", component: EditProduct, layout: AdminLayout, role: "admin" },

  { path: "/P403", component: Page403, layout: null },
  { path: "/admin", component: AdminHome, layout: AdminLayout, role: "admin" },
  { path: "/", component: Home },
  { path: "*", component: Page404, layout: null },
];

export default routes;
