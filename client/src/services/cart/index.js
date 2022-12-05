import axios from "axios";

export const onAddCart = (CartDetails, setCartDetails, product) => {
  const exist = CartDetails.find((x) => x.id === product.id);
  if (exist) {
    setCartDetails(CartDetails.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
  } else {
    setCartDetails([...CartDetails, { ...product, qty: 1 }]);
  }
};

export const onRemoveCart = (CartDetails, setCartDetails, product) => {
  const exist = CartDetails.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartDetails(CartDetails.filter((x) => x.id !== product.id));
  } else {
    setCartDetails(CartDetails.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)));
  }
};

export const onRemoveAllCart = (CartDetails, setCartDetails, product) => {
  setCartDetails(CartDetails.filter((x) => x.id !== product.id));
};

export async function fetchingPosts() {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/carts`, {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  });

  return res.data;
}

