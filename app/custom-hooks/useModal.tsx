"use client";
import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal(e: React.MouseEvent<HTMLDivElement>) {
    const isBackdrop =
      e.currentTarget.getAttribute("aria-label") === "backdrop";
    return !isBackdrop && setIsModalOpen(false);
  }

  function handleCloseModal(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  }

  return { isModalOpen, openModal, closeModal, handleCloseModal };
}
