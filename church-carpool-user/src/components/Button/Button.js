import React from "react";
import styles from "./button.module.css";

function Button({ children, onClick, ...rest }) {
  return (
    <button onClick={onClick} className={styles.button} {...rest}>
      {children}
    </button>
  );
}

export default Button;
