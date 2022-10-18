import Category from "../../components/Category";
import SliderM from "../../components/Slider";
import SliderOneP from "../../components/SliderOneP";
import { slider, category, sliderOneP } from "./data";

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
        </div>
      </div>
    </>
  );
}

export default Home;
