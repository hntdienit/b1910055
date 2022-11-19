import className from "classnames/bind";
import styles from "./Loading.module.scss";

const cl = className.bind(styles);

function Loading() {
  return (
    <div className={cl("")}>
      <h1>Loading.............</h1>
    </div>
  );
}

export default Loading;
