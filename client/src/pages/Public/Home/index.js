import Category from "../../../components/Category";
import SliderM from "../../../components/Slider";
import SliderOneP from "../../../components/SliderOneP";
import OneProductCard from "../../../components/OneProductCard";
import Banner from "../../../components/Banner";
import Features from "../../../components/Features";
import { slider, category, sliderOneP, category1, banner } from "./data";

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
            <OneProductCard data={category1}></OneProductCard>
          </div>
        </div>
        <div className={"row py-4"}>
          <Banner data={banner}></Banner>
        </div>
        <div className={"row py-4"}>
          <Features data={banner}></Features>
        </div>

      </div>
    </>
  );
}

export default Home;
