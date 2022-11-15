import { forwardRef } from "react";
import { Link } from "react-router-dom";

import className from "classnames/bind";
import styles from "./Button.module.scss";

const cl = className.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      href,
      primary = false,
      noprimary = false,
      children,
      className,
      leftIcon,
      rightIcon,
      onClick,
      ...passProps
    },
    ref
  ) => {
    let Comp = "button";
    const props = {
      onClick,
      ...passProps,
    };

    if (to) {
      props.to = to;
      Comp = Link;
    } else if (href) {
      props.href = href;
      Comp = "a";
    }

    const classes = cl("wrapper", {
      [className]: className,
      primary,
      noprimary,
    });

    return (
      <Comp ref={ref} className={classes} {...props}>
        {leftIcon && <span className={cl("icon")}>{leftIcon}</span>}
        <span className={cl("title")}>{children}</span>
        {rightIcon && <span className={cl("icon")}>{rightIcon}</span>}
      </Comp>
    );
  }
);

export default Button;
