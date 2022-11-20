import axios from "axios";

export const onAddCart = (cartItems, setCartItems, product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)));
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

export const onRemoveCart = (cartItems, setCartItems, product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)));
  }
};

export const onRemoveAllCart = (cartItems, setCartItems, product) => {
  setCartItems(cartItems.filter((x) => x.id !== product.id));
};

export async function fetchingPosts() {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/carts`, {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  });

  return res.data.CartItems;
}

