import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import Button from "../../Button";

import styles from "./Menu.module.scss";

const cl = className.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cl("header")}>
      <Button
        className={cl("header-btn")}
        leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        onClick={onBack}
      ></Button>
      <h5 className={cl("header-title")}>{title}</h5>
    </header>
  );
}

export default Header;
