import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import CartMini from "../../../components/Admin/CartMini";
import AdminPieChart from "../../../components/Admin/AdminPieChart";


function Home() {
  return (
    <>
      <div className="row pb-2">
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 pb-2">
          <CartMini
            bg__color={"bg__lightblue"}
            icon={<AddShoppingCartIcon />}
            name={"New Orders"}
            api={`getCartMiniOrder`}
          ></CartMini>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 pb-2">
          <CartMini
            bg__color={"bg__green"}
            icon={<CheckCircleOutlineIcon />}
            name={"Successful delivery"}
            api={`cartMiniOrder`}
          ></CartMini>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 pb-2">
          <CartMini
            bg__color={"bg__orange"}
            icon={<HighlightOffIcon />}
            name={"Failed delivery"}
            api={`cartMiniOrder`}
          ></CartMini>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 pb-2">
          <CartMini bg__color={"bg__blue"} icon={<PersonAddIcon />} name={"New user"} api={`getCartMiniUser`}></CartMini>
        </div>
      </div>

      <div>home admin page</div>
      <AdminPieChart></AdminPieChart>
    </>
  );
}

export default Home;
