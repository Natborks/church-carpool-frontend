import { Title } from "@radix-ui/react-toast";
import React from "react";

function useToast() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [toatsMessage, setToastMessage] = React.useState({
    title: "",
    message: "",
  });

  return {
    isOpen,
    setIsOpen,
    toatsMessage,
    setToastMessage,
  };
}

export { useToast };
