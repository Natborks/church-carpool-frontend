import React from "react";
import Button from "../Button/Button";

function ButtonSecondary({ children, onClick }) {
  const buttonStyle = {
    color: "#000000",
    border: "1px solid #d1d5db",
  };
  return (
    <Button
      style={buttonStyle}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f3f4f6")}
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = "transparent")
      }
    >
      {children}
    </Button>
  );
}

export default ButtonSecondary;
