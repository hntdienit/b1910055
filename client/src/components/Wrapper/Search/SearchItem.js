import className from "classnames/bind";
import styles from "./Search.module.scss";

const cl = className.bind(styles);

function SearchItem() {
  return (
    <div className={cl("search-item")}>
      <h4>ket qua tim kiem</h4>
    </div>
  );
}

export default SearchItem;
