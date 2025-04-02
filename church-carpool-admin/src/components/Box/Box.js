import React from "react";
import styles from "./box.module.css";
function Box({ children, padding, height }) {
  const customStyles = {
    padding: padding ? `var(--${padding})` : null,
    backgroundColor: "white",
    height: height ? `${height}px` : null,
    overflowY: "auto",
  };

  return (
    <div data-background="default" className={styles.box} style={customStyles}>
      {children}
    </div>
  );
}

export default Box;
