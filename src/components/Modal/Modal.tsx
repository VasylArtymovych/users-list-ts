import { createPortal } from "react-dom";
import { BackdropContainer } from "./Modal.styled";

const modalRootElement = document.getElementById("modal")!;

interface IModalProps {
  children?: React.ReactNode;
}

function Modal({ children }: IModalProps) {
  return createPortal(
    <BackdropContainer>{children}</BackdropContainer>,
    modalRootElement
  );
}
export default Modal;
