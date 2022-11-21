/* Layouts */
import AdminLayout from "../layouts/AdminLayout";

/* Pages Public */
import Home from "../pages/Public/Home";
import ProductDetail from "../pages/Public/ProductDetail";
import ProductList from "../pages/Public/ProductList";
import Cart from "../pages/Public/Cart"
import Checkout from "../pages/Public/Checkout"
import Profile from "../pages/User/Profile"

/* Pages User */
import Wishlist from "../pages/User/Wishlist"

/* Pages Error */
import Page404 from "../pages/PageError/Page404";
import Page403 from "../pages/PageError/Page403";

/* Pages Auth */
import Register from "../pages/Auth/Register";
import Authverify from "../pages/Auth/Authverify";
import Login from "../pages/Auth/Login";

/* Pages Admin */
import AdminHome from "../pages/Admin/Home";
import { CreaterCategory, ListCategory, EditCategory } from "../pages/Admin/Category";
import { CreateShippingMethod, ListShippingMethod, EditShippingMethod } from "../pages/Admin/ShippingMethod";
import { CreateProduct, ListProduct, EditProduct } from "../pages/Admin/Product";
import { CreatePromotion, ListPromotion, EditPromotion } from "../pages/Admin/Promotion";

const routes = [
  { path: "/register", component: Register, layout: null },
  { path: "/authverify", component: Authverify, layout: null },
  { path: "/login", component: Login, layout: null },

  { path: "/product/:id", component: ProductDetail },
  { path: "/productlist", component: ProductList },
  { path: "/cart", component: Cart},
  { path: "/wishlist/:id", component: Wishlist },
  { path: "/checkout", component: Checkout },
  { path: "/profile", component: Profile, roll: "user" },

  { path: "/admin/category", component: CreaterCategory, layout: AdminLayout, role: "admin" },
  { path: "/admin/listcategory", component: ListCategory, layout: AdminLayout, role: "admin" },
  { path: "/admin/editcategory/:EditId", component: EditCategory, layout: AdminLayout, role: "admin" },

  { path: "/admin/shippingmethod", component: CreateShippingMethod, layout: AdminLayout, role: "admin" },
  { path: "/admin/listshippingmethod", component: ListShippingMethod, layout: AdminLayout, role: "admin" },
  { path: "/admin/editshippingmethod/:EditId", component: EditShippingMethod, layout: AdminLayout, role: "admin" },

  { path: "/admin/product", component: CreateProduct, layout: AdminLayout, role: "admin" },
  { path: "/admin/listproduct", component: ListProduct, layout: AdminLayout, role: "admin" },
  { path: "/admin/editproduct/:EditId", component: EditProduct, layout: AdminLayout, role: "admin" },

  { path: "/admin/promotion", component: CreatePromotion, layout: AdminLayout, role: "admin" },
  { path: "/admin/listpromotion", component: ListPromotion, layout: AdminLayout, role: "admin" },
  { path: "/admin/editpromotion/:EditId", component: EditPromotion, layout: AdminLayout, role: "admin" },

  { path: "/P403", component: Page403, layout: null },
  { path: "/admin", component: AdminHome, layout: AdminLayout, role: "admin" },
  { path: "/", component: Home },
  { path: "*", component: Page404, layout: null },
];

export default routes;
