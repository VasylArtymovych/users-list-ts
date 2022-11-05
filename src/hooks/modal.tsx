import { useState } from "react";

function useModal(open: boolean = false) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(open);
  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);
  const toggleModal = (): void => setIsModalOpen((state) => !state);

  return { isModalOpen, openModal, closeModal, toggleModal };
}

export default useModal;
