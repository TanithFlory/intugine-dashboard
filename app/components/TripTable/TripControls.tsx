"use client";
import useModal from "@/app/custom-hooks/useModal";
import Modal from "@/app/utils/Modal";
import PrimaryButton from "@/app/utils/PrimaryButton";
import AddTrip from "../AddTrip/AddTrip";
import { MouseEvent, useState } from "react";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import { useTripContext } from "@/app/context/TripContext";

type ModalComponentMap = {
  addTrip: JSX.Element;
  updateStatus: JSX.Element;
};

export default function TripControls() {
  const { isModalOpen, openModal, closeModal, handleCloseModal, onClickClose } =
    useModal();
  const { selectedTripIds } = useTripContext();
  const components: ModalComponentMap = {
    addTrip: (
      <AddTrip
        handleCloseModal={handleCloseModal}
        onClickClose={onClickClose}
      />
    ),
    updateStatus: (
      <UpdateStatus
        handleCloseModal={handleCloseModal}
        onClickClose={onClickClose}
      />
    ),
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
      <div className="flex items-center justify-end gap-[17px] w-[210px]">
        {selectedTripIds.length > 0 ? (
          <PrimaryButton
            text="Update status"
            className="max-w-[96px] bg-white border-[1px] border-buttonColor text-buttonColor"
            type="button"
            onClick={controlClickHandler}
            name="updateStatus"
          />
        ) : null}
        <PrimaryButton
          text="Add trip"
          type="button"
          name="addTrip"
          onClick={controlClickHandler}
          className="max-w-[96px] bg-buttonColor text-white"
        />
      </div>
      {isModalOpen && modalComponent ? (
        <Modal closeModalHandler={closeModal}>{modalComponent}</Modal>
      ) : null}
    </>
  );
}
