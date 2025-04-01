import React from "react";
import styles from "./spread.module.css";

function Spread({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Spread;
