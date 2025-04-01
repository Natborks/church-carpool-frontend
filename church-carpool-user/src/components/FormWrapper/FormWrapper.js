import React from "react";
import styles from "./FormWrapper.module.css";
function FormWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default FormWrapper;
