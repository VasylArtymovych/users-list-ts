import React, { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { BackdropContainer } from "./Modal.styled";

const modalRootElement = document.getElementById("modal")!;

interface IModalProps {
  children?: React.ReactNode;
}
function Modal({ children }: IModalProps) {
  const element = useMemo((): HTMLDivElement => {
    return document.createElement("div");
  }, []);

  useEffect(() => {
    modalRootElement.appendChild(element);

    return () => {
      modalRootElement.removeChild(element);
    };
  }, [element]);

  return createPortal(
    <BackdropContainer>{children}</BackdropContainer>,
    element
  );
}

export default Modal;
