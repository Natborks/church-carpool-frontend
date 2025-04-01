import React from "react";
import styles from "./center.module.css";

function Center({ children, centerText = false, maxContentSize }) {
  return <div className={styles.center}>{children}</div>;
}

export default Center;
