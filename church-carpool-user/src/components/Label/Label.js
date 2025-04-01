import React from "react";
import styles from "./label.module.css";
function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
}

export default Label;
