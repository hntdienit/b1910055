import React from "react";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import styles from "./PageTitle.module.scss";

const cl = className.bind(styles);

function PageTitle({ title, pagename }) {
  return (
    <>
      <div className={cl("page__title", "p-relative d-flex align-items-center")}>
        <div className={cl("container")}>
          <div className={cl("row")}>
            <div className={cl("col-xl-12")}>
              <div className={cl("page__title-inner", "text-center")}>
                <h3>{title}</h3>
                <ol className={cl("breadcrumb justify-content-center")}>
                  <li className={cl("breadcrumb-item")}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className={cl("breadcrumb-item")}>{pagename}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageTitle;
