import React from "react";
import styles from "./input.module.css";

function Input({ type, name, value, onChange, placeholder = "", required }) {
  return <input 
  className={styles.input} 
  type={type} 
  name={name} 
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  required = {required}
  />;
}

export default Input;
