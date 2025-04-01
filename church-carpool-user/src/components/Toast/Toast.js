import * as React from "react";
import styles from "./Toast.module.css";
import * as Toast from "@radix-ui/react-toast";

const ToastDemo = ({ open, setOpen, title, message }) => {
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  console.log(title, message);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <>
      <Toast.Root
        className={styles.ToastRoot}
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className={styles.ToastTitle}>{title}</Toast.Title>
        <Toast.Description asChild>{message}</Toast.Description>
        <Toast.Action className={styles.ToastAction} asChild altText={message}>
          <button className={styles["Button small green"]}>Undo</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className={styles.ToastViewport} />
    </>
  );
};

function prettyDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default ToastDemo;
