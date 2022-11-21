import axios from "axios";

export async function getCartMiniOrder() {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/orders/cartminiorder`, {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  });

  return res.data;
}

export async function getCartMiniUser() {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/auth/cartminiuser`, {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  });

  return res.data;
}
