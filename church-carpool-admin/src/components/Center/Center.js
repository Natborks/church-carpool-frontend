import React from "react";
import styles from "./center.module.css";

function Center({ children, centerText = false, maxContentSize }) {
  const customStyles = {
    textAlign: centerText ? "center" : null,
    maxInlineSize: maxContentSize ? `${maxContentSize}px` : "60%",
  };

  return (
    <div className={styles.center} style={customStyles}>
      {children}
    </div>
  );
}

export default Center;
