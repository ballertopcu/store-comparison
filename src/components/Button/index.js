import React from "react";
import styles from "./Button.module.css";
import Utils from "../../Utils/Utils";
import Divider from "./Divider";
import classNames from "classnames";

export const Button = ({
  children,
  icon,
  selected,
  endIcon,
  divider,
  noPadding,
  variant = "contained",
  iconSize = 25,
  ...props
}) => {
  const classes = classNames({
    [styles.buttonContainer]: true,
    [styles.disabled]: props.disabled,
    [styles.noPadding]: noPadding,
    [styles.outlined]: variant === "outlined",
    [styles.selected]: selected,
  });

  return (
    <>
      <button className={classes} {...props}>
        {icon && Utils.getIcon(icon, iconSize)}
        {children}
        {endIcon && Utils.getIcon(endIcon, iconSize)}
      </button>
      {divider && <Divider />}
    </>
  );
};
