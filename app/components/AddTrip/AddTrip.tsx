import PrimaryButton from "@/app/utils/PrimaryButton";
import { AddTripForm, CloseModalType, Transporter } from "@/types";
import CloseModal from "@/app/utils/CloseModal";
import InputFields from "./InputFields";
import { ChangeEvent, FormEvent, useState } from "react";
import { validateForm } from "./validationForm";
import { useApiCall } from "@/app/custom-hooks/useApiCall";
import clearCachesByServerAction from "@/app/utility-functions/revalidate";

export default function AddTrip({
  handleCloseModal,
  onClickClose,
}: {
  handleCloseModal: (e: CloseModalType) => void;
  onClickClose: () => void;
}) {
  const [formData, setFormData] = useState<AddTripForm>({
    tripId: "",
    transporter: "",
    source: "",
    dest: "",
    phoneNumber: 0,
  });
  const [errors, setErrors] = useState<{ [key: string]: string } | null>(null);

  const { sendRequest, loading, apiError, response, setApiError } =
    useApiCall();

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    setApiError(" ");
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    await sendRequest("/api/trips/add-trip", "POST", formData);
    clearCachesByServerAction("/");
    setTimeout(() => {
      if (!apiError) {
        onClickClose();
      }
    }, 1500);
  }

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

  function setTransporter(transporter: Transporter) {
    console.log(transporter);
    setFormData((prev) => ({ ...prev, transporter }));
  }

  return (
    <form
      className="bg-white pt-[20px] w-[648px] pb-[16px] max-h-[480px] h-full relative rounded-[8px]"
      onSubmit={submitHandler}
    >
      <div className="px-[24px]">
        <h3 className="text-fs-20 font-bold mb-[36px]">Add Trip</h3>
        <InputFields
          onChangeHandler={onChangeHandler}
          setTransporter={setTransporter}
          formData={formData}
          errors={errors}
        />
      </div>

      <div className="flex items-center gap-4 pt-4 border-t-borderColor border-t-[1px] pr-[32px] justify-end">
        <PrimaryButton
          text="Cancel"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[98px] text-black"
          type="reset"
          isDisabled={loading}
          onClick={onClickClose}
        />
        <PrimaryButton
          text="Add trip"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[77px] text-buttonColor"
          type="submit"
          isLoading={loading}
          isDisabled={loading}
        />
      </div>
      {(apiError || response) && (
        <div
          className={`text-fs-12 text-center ${
            apiError ? "text-red-500" : "text-green-500"
          }`}
        >
          {apiError ? apiError : response}
        </div>
      )}
      <CloseModal handleCloseModal={handleCloseModal} />
    </form>
  );
}
