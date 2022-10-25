import Header from "../../components/AdminHeader/AdminHeader.js";
import SideBar from "../../components/AdminSideBar/AdminSideBar.js";

import className from "classnames/bind";
import styles from "./AdminLayout.module.scss";

const cl = className.bind(styles);

function AdminLayout({ children }) {
  return (
    <div className={cl("wrapper", "container mt-5")}>
      <div className={cl("top-header")}>
        <Header />
      </div>
      <div className={cl("sidebar-wrapper")}>
        <SideBar />
      </div>
      <div className={cl("page-content")}>
        <div className={cl("content")}>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
