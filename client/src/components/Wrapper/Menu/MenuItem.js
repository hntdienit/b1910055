import className from "classnames/bind";

import styles from "./Menu.module.scss";

import Button from "../../Button";

const cl = className.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cl("menu-item", {
    separate: data.separate,
  });

  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
