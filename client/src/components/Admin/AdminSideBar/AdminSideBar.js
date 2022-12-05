import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../../helpers/MenuContext.js";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WarehouseIcon from '@mui/icons-material/Warehouse';

import className from "classnames/bind";
import styles from "./AdminSideBar.module.scss";

import images from "../../../assets/images";

import Image from "../../Public/Image";

const cl = className.bind(styles);

function SideBar() {
  const { logo, setLogo } = useContext(MenuContext);

  const [subMenu, setSubMenu] = useState([false, false, false, false, false]);

  const menu = [
    {
      name: "Main",
      data: [
        {
          intMenu: 0,
          subMenuitem: false,
          iconMenu: <HomeIcon />,
          nameMenu: "Home",
          linkMenu: "/admin",
        },
        {
          intMenu: 1,
          subMenuitem: true,
          iconMenu: <CategoryIcon />,
          nameMenu: "Category",
          linkCreate: "/admin/category",
          linkList: "/admin/listcategory",
        },
        {
          intMenu: 2,
          subMenuitem: true,
          iconMenu: <InventoryIcon />,
          nameMenu: "Product",
          linkCreate: "/admin/product",
          linkList: "/admin/listproduct",
        },
        {
          intMenu: 3,
          subMenuitem: true,
          iconMenu: <LocalOfferIcon />,
          nameMenu: "Promotion",
          linkCreate: "/admin/promotion",
          linkList: "/admin/listpromotion",
        },
        {
          intMenu: 4,
          subMenuitem: true,
          iconMenu: <WarehouseIcon />,
          nameMenu: "Warehouse",
          linkCreate: "/admin/warehouse",
          linkList: "/admin/listwarehouse",
        },
        // {
        //   intMenu: 5,
        //   subMenuitem: true,
        //   iconMenu: <WarehouseIcon />,
        //   nameMenu: "ImportBill",
        //   linkCreate: "/admin/importbill",
        //   linkList: "/admin/listimportbill",
        // },
      ],
    },
  ];

  const logoChange = () => {
    if (logo === true) {
      setLogo(false);
    }
    if (logo === false) {
      /* do nothing */
    }
  };

  const menuChange = (IntMenu) => {
    if (subMenu[IntMenu] === true) {
      setSubMenu((datas) => ({
        ...datas,
        [IntMenu]: false,
      }));
    }
    if (subMenu[IntMenu] === false) {
      setSubMenu((datas) => ({
        ...datas,
        [IntMenu]: true,
      }));
    }
  };

  return (
    <>
      <div className={cl("vertical-menu", logo === true ? "vertical-menu-on" : "vertical-menu-off")}>
        <div className={cl("vertical-menu-height")}>
          <div className={cl("sidebar-menu")}>
            <div className={cl("navbar-brand-box")}>
              <Link to={"/admin"} className={cl("logo")}>
                <span className={cl("logo-lg")}>
                  <Image src={images.logo} alt="Trang chu" className={""} />
                </span>
              </Link>
            </div>

            <ul className={cl("metismenu", "list-unstyled")} id="side-menu">
              {menu.map((itemParent, indexParent) => {
                return (
                  <div key={indexParent}>
                    <li className={cl("menu-title")}>{itemParent.name}</li>
                    {itemParent.data.map((item, index) => {
                      return (
                        <div key={index}>
                          {item.subMenuitem === false ? (
                            <li>
                              <Link
                                to={item.linkMenu}
                                className={cl("waves-effect")}
                                onClick={() => {
                                  logoChange();
                                }}
                              >
                                {item.iconMenu}
                                <span className={cl("ms-3")}>{item.nameMenu}</span>
                              </Link>
                            </li>
                          ) : (
                            <li>
                              <Link
                                onClick={() => {
                                  logoChange();
                                  menuChange(item.intMenu);
                                }}
                                className={cl("waves-effect")}
                              >
                                <div className={cl("")}>
                                  {item.iconMenu}
                                  <span className={cl("ms-3")}>
                                    {item.nameMenu}
                                    {subMenu[item.intMenu] === true ? (
                                      <ArrowDropDownIcon className={"align-middle float-end"} />
                                    ) : (
                                      <ArrowRightIcon className={"float-end"} />
                                    )}
                                  </span>
                                </div>
                              </Link>
                              {subMenu[item.intMenu] === true ? (
                                <ul className={cl("sub-menu")}>
                                  <li>
                                    <Link to={item.linkCreate}>
                                      <AddToPhotosIcon className={"me-2 text-success"} />
                                      New {item.nameMenu}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={item.linkList}>
                                      <ListAltIcon className={"me-2 text-success"} />
                                      List {item.nameMenu}
                                    </Link>
                                  </li>
                                </ul>
                              ) : (
                                ""
                              )}
                            </li>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
