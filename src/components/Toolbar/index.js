import { Button } from "../Button";
import React, { useState } from "react";
import styles from "./Toolbar.module.css";

export const Toolbar = ({ handlers }) => {
  const [selectedBtn, setSelectedBtn] = useState('3');

  const handleClick = (item) => {
    setSelectedBtn(item.key)
  };

  return (
    <div className={styles.toolbar}>
      {handlers.map(item => {
        const { text, selected, onClick, ...btnProps } = item;
        return (
          <Button
            selected={selected || selectedBtn === item.key}
            key={item.key}
            onClick={() => {
              handleClick(item);

              if (onClick)
                onClick();
            }}
            {...btnProps}
          >
            {text}
          </Button>
        );
      })}
    </div>
  );
};
