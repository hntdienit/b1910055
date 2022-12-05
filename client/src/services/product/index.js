import axios from "axios";
import { toast } from "react-toastify";

export async function productDetail(props) {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/products/getproductdetail/${props.id}`);
  return res.data;
  //   return [];
}

export async function newProduct() {
  const res = await axios.get(`${process.env.REACT_APP_URL_API}/products/newproduct`);
  return res.data;
}



// useEffect(() => {
    // axios.get(`${process.env.REACT_APP_URL_API}/products/newproduct`).then((response) => {
    //   if (response.data.error) {
    //     toast.error(`Data fetch failed - error: ${response.data.error}`, {});
    //   } else {
    //     setData(response.data);
    //   }
    // });
  // }, []);