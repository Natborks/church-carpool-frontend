import React from "react";
import styles from "./button.module.css";

function Button({ children, onClick, disabled = false, type = "button" }) {
  return <button className={styles.button} onClick={onClick} disabled=
  {disabled} type={type}>
    {children}</button>;
}

export default Button;
