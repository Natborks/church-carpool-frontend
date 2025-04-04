import React from "react";
import styles from "./input.module.css";
import Label from "../Label";
function Input({ type, name, onChange, ...rest }) {
  return (
    <>
      <input
        {...rest}
        className={styles.input}
        type={type}
        name={name}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
