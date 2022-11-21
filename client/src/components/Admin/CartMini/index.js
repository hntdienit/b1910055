import React from "react";
import className from "classnames/bind";
import { useQuery } from "react-query";
import { getCartMiniOrder, getCartMiniUser } from "../../../services/statistical";
import styles from "./CartMini.module.scss";
const cl = className.bind(styles);

function CartMini(props) {
  const { bg__color, icon, name, api } = props;

  let fetchAPI = getCartMiniOrder;
  if (api === "getCartMiniOrder") fetchAPI = getCartMiniOrder;
  if (api === "getCartMiniUser") fetchAPI = getCartMiniUser;

  const { data, error, isError, isLoading } = useQuery([api], fetchAPI);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Have an errors: {error.message}</span>;
  }

  return (
    <>
      <div className={cl("card", "mini-stat", bg__color)}>
        <div className={cl("card-body", "")}>
          <div className={cl("mini-stat-icon")}>
            <i className={cl("float-end")}>{icon}</i>
          </div>
          <div className={cl("text-white")}>
            <h6 className={cl("text-uppercase mb-3 font-size-16 text-white")}>{name}</h6>
            <h2 className={cl("mb-4 text-white")}>{data.newGrowth}</h2>
            <span className={cl("badge bg-info")}>
              {parseFloat(data.growth) >= 0 ? "+" + parseFloat(data.growth) : parseFloat(data.growth)}%{" "}
            </span>{" "}
            <span className={cl("ms-2")}>From previous period</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartMini;
