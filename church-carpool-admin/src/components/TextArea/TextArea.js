import React from "react";
import styles from "./textArea.module.css";
function TextArea({ name }) {
  return <textarea name={name} className={styles.textarea} />;
}

export default TextArea;
