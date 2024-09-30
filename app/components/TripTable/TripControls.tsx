"use client";
import useModal from "@/app/custom-hooks/useModal";
import Modal from "@/app/utils/Modal";
import PrimaryButton from "@/app/utils/PrimaryButton";
import AddTrip from "../AddTrip/AddTrip";
import { MouseEvent, useState } from "react";

type ModalComponentMap = {
  addTrip: JSX.Element;
  updateStatus: JSX.Element;
};

export default function TripControls() {
  const { isModalOpen, openModal, closeModal, handleCloseModal } = useModal();
  const components: ModalComponentMap = {
    addTrip: <AddTrip handleCloseModal={handleCloseModal} />,
    updateStatus: <AddTrip handleCloseModal={handleCloseModal} />,
  };
  const [modalComponent, setModalComponent] = useState<JSX.Element | null>(
    null
  );

  function controlClickHandler(e: MouseEvent<HTMLButtonElement>) {
    const buttonName = e.currentTarget.name as keyof ModalComponentMap;

    setModalComponent(components[buttonName] as JSX.Element);
    openModal();
  }
  return (
    <>
      <div className="flex items-center gap-[17px] w-[210px]">
        <PrimaryButton
          text="Update status"
          className="max-w-[96px] bg-white border-[1px] border-buttonColor text-buttonColor"
          type="button"
          onClick={controlClickHandler}
          name="addTrip"
        />
        <PrimaryButton
          text="Add trip"
          type="button"
          name="updateStatus"
          onClick={controlClickHandler}
          className="max-w-[96px] bg-buttonColor"
        />
      </div>
      {isModalOpen && modalComponent ? (
        <Modal closeModalHandler={closeModal}>{modalComponent}</Modal>
      ) : null}
    </>
  );
}
