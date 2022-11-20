import axios from "axios";
import { toast } from "react-toastify";

export async function productDetail(props) {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/products/getproductdetail/${props.id}`);
  return res.data;
  //   return [];
}
