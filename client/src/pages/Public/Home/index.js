import { slider, category, sliderOneP, category1, banner } from "./data";
import Category from "../../../components/User/Category";
import SliderM from "../../../components/User/Slider";
import SliderOneP from "../../../components/User/SliderOneP";
import TrendingProduct from "../../../components/User/TrendingProduct";
import Banner from "../../../components/User/Banner";
import Features from "../../../components/User/Features";
import NewProduct from "../../../components/User/NewProduct"

function Home() {
  return (
    <>
      <SliderM data={slider}></SliderM>
      <Category data={category}></Category>
      <div className={"container"}>
        <div className={"row py-4"}>
          <div className={"col-xxl-5 col-xl-12 col-lg-12"}>
            <SliderOneP data={sliderOneP}></SliderOneP>
          </div>
          <div className={"col-xxl-7 col-xl-12 col-lg-12"}>
            <TrendingProduct></TrendingProduct>
          </div>
        </div>
        <div className={"row py-4"}>
          <Banner data={banner}></Banner>
        </div>
        <div className={"row py-4"}>
          <Features data={banner}></Features>
        </div>
        <div className={"row py-4"}>
          <NewProduct></NewProduct>
        </div>
      </div>
    </>
  );
}

export default Home;
