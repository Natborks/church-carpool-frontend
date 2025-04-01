"use client";
import { Provider } from "@radix-ui/react-toast";
const ToastProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default ToastProvider;
