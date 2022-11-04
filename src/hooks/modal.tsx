import { useState } from "react";

function useModal(open: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);
  const toggleModal = (): void => setIsOpen((state) => !state);

  return { isOpen, openModal, closeModal, toggleModal };
}

export default useModal;
