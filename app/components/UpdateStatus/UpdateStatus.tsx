import PrimaryButton from "@/app/utils/PrimaryButton";
import { CloseModalType, TripStatus } from "@/types";
import CloseModal from "@/app/utils/CloseModal";
import InputFields from "./InputFields";
import { ChangeEvent, FormEvent, useState } from "react";
import { useApiCall } from "@/app/custom-hooks/useApiCall";
import { validateForm } from "./validationForm";
import clearCachesByServerAction from "@/app/utility-functions/revalidate";
import { useTripContext } from "@/app/context/TripContext";

export default function UpdateStatus({
  handleCloseModal,
  onClickClose,
}: {
  handleCloseModal: (e: CloseModalType) => void;
  onClickClose: () => void;
}) {
  const [formData, setFormData] = useState({
    tripStatus: "Update Status" as TripStatus,
    dateTime: "",
  });
  const { selectedTripIds, setSelectedTripIds } = useTripContext();

  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);
  const { loading, apiError, response, sendRequest, setApiError } =
    useApiCall();

  function onChangeHandler(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const target = e.target;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));

    if (errors) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[target.name];
        return Object.keys(newErrors).length > 0 ? newErrors : null;
      });
    }
  }

  function setTripStatus(tripStatus: TripStatus) {
    setFormData((prev) => ({ ...prev, tripStatus }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    setApiError(" ");
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    await sendRequest("/api/trips/update-trip", "POST", {
      ...formData,
      tripIds: selectedTripIds,
    });
    clearCachesByServerAction("/");
    setTimeout(() => {
      setSelectedTripIds([]);
      onClickClose();
    }, 1500);
  }

  return (
    <form
      className="bg-white pt-[20px] pb-[16px] w-[328px] h-full rounded-[8px] relative"
      onSubmit={onSubmit}
    >
      <div className="px-[24px]">
        <h3 className="text-fs-20 font-bold mb-[36px]">Update status</h3>
        <InputFields
          onChangeHandler={onChangeHandler}
          errors={errors}
          formData={formData}
          setTripStatus={setTripStatus}
        />
      </div>
      <div className="flex items-center gap-4 py-4 border-t-borderColor border-t-[1px] pr-[32px] justify-end">
        <PrimaryButton
          text="Cancel"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[98px] text-black"
          type="reset"
          isDisabled={loading}
          onClick={handleCloseModal}
        />
        <PrimaryButton
          text="Update status"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[111px] text-black"
          type="submit"
          isLoading={loading}
          isDisabled={loading}
        />
      </div>
      <div className="text-center">
        {(apiError || response) && (
          <div
            className={`${
              apiError ? "text-red-500" : "text-green-500"
            } text-fs-12`}
          >
            {apiError ? apiError : response}
          </div>
        )}
        {errors && (
          <div className="text-fs-12 text-red-500 text-center">
            {errors.global || errors.tripStatus || errors.dateTime}
          </div>
        )}
      </div>
      <CloseModal handleCloseModal={handleCloseModal} />
    </form>
  );
}
