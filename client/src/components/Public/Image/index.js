import { useState, forwardRef } from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";
import images from "../../../assets/images";

const Image = forwardRef(
  (
    { src, alt, className, fallback: SFallback = images.logo, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(SFallback);
    };

    return (
      <img
        className={classNames(className, styles.wrapper)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
