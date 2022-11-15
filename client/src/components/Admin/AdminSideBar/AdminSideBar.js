import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "../../../helpers/MenuContext.js";

import className from "classnames/bind";
import styles from "./AdminSideBar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faListDots, faListSquares, faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import images from "../../../assets/images";

import Image from "../../Public/Image";

const cl = className.bind(styles);

function SideBar() {
  const { logo, setLogo } = useContext(MenuContext);

  const [subMenu, setSubMenu] = useState([false, false, false, false, false, false]);

  const menu = [
    {
      name: "Main",
      data: [
        {
          intMenu: 5,
          subMenuitem: true,
          iconMenu: <FontAwesomeIcon icon={faListSquares} />,
          nameMenu: "Product",
          linkCreate: "/admin/product",
          linkList: "/admin/listproduct",
        },
        {
          intMenu: 0,
          subMenuitem: false,
          iconMenu: <FontAwesomeIcon icon={faListSquares} />,
          nameMenu: "Home",
          linkMenu: "/admin",
        },
        {
          intMenu: 1,
          subMenuitem: true,
          iconMenu: <FontAwesomeIcon icon={faListSquares} />,
          nameMenu: "Variation",
          linkCreate: "/admin/variation",
          linkList: "/admin/listvariation",
        },
        {
          intMenu: 2,
          subMenuitem: true,
          iconMenu: <FontAwesomeIcon icon={faListSquares} />,
          nameMenu: "Variation Option",
          linkCreate: "/admin/variationoption",
          linkList: "/admin/listvariationoption",
        },
        {
          intMenu: 3,
          subMenuitem: true,
          iconMenu: <FontAwesomeIcon icon={faListSquares} />,
          nameMenu: "Category",
          linkCreate: "/admin/category",
          linkList: "/admin/listcategory",
        },
        {
          intMenu: 4,
          subMenuitem: true,
          iconMenu: <FontAwesomeIcon icon={faListSquares} />,
          nameMenu: "Shipping Method",
          linkCreate: "/admin/shippingmethod",
          linkList: "/admin/listshippingmethod",
        },
        
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
                                      <FontAwesomeIcon icon={faCaretDown} className={"align-middle float-end"} />
                                    ) : (
                                      <FontAwesomeIcon icon={faCaretRight} className={"float-end"} />
                                    )}
                                  </span>
                                </div>
                              </Link>
                              {subMenu[item.intMenu] === true ? (
                                <ul className={cl("sub-menu")}>
                                  <li>
                                    <Link to={item.linkCreate}>
                                      <FontAwesomeIcon icon={faSquarePlus} className={"me-2 text-success"} />
                                      New {item.nameMenu}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to={item.linkList}>
                                      <FontAwesomeIcon icon={faListDots} className={"me-2 text-success"} />
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
