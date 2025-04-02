import React from "react";
import Center from "../Center";
import Cover from "../Cover";
function FormWrapper({ children }) {
  return (
    <Center maxContentSize={450}>
      <Cover>{children} </Cover>
    </Center>
  );
}

export default FormWrapper;
