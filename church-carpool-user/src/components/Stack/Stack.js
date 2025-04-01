import React from "react";
import styles from "./stack.module.css";

function Stack({ children, gap }) {
  const space = gap ? `--${gap}` : null;
  const customStyles = {
    "--space": `var(${space})`,
    overFlow: "hidden",
  };

  return (
    <div className={styles.stack} style={customStyles}>
      {children}
    </div>
  );
}

export default Stack;
