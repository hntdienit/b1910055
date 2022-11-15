import { useState } from "react";

import Header from "../../components/Admin/AdminHeader/AdminHeader.js";
import SideBar from "../../components/Admin/AdminSideBar/AdminSideBar.js";

import { MenuContext } from "../../helpers/MenuContext.js";

import className from "classnames/bind";
import styles from "./AdminLayout.module.scss";

const cl = className.bind(styles);

function AdminLayout({ children }) {

  const [logo, setLogo] = useState(false)

  return (
    <MenuContext.Provider value={{ logo, setLogo }}>
      <div className={cl("wrapper", "mt-5")}>
      <Header />
      <SideBar />
      <div className={cl(logo === true ? "page-content-on" : "page-content-off")}>
        <div className={cl("content")}>{children}</div>
      </div>
    </div>
    </MenuContext.Provider>
    
  );
}

export default AdminLayout;
