import React from "react";
import styles from "./button.module.css";
import Button from "../Button/Button";

function ButtonPrimary({ children, onClick }) {
  const buttonStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
  };
  return (
    <Button
      style={buttonStyle}
      onClick={onClick}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.9)")
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
    >
      {children}
    </Button>
  );
}

export default ButtonPrimary;
