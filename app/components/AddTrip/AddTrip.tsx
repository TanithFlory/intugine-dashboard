import PrimaryButton from "@/app/utils/PrimaryButton";
import { CloseModalType } from "@/types";
import CloseModal from "@/app/utils/CloseModal";
import InputFields from "./InputFields";

export default function AddTrip({
  handleCloseModal,
}: {
  handleCloseModal: (e: CloseModalType) => void;
}) {
  return (
    <form className="bg-white px-[24px] pt-[20px] w-[648px] h-[392px] relative">
      <h3 className="text-fs-20 font-bold mb-[36px]">Add Trip</h3>
      <InputFields />
      <div className="flex items-center gap-4 py-4 border-t-borderColor border-t-[1px] justify-end">
        <PrimaryButton
          text="Cancel"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[98px] text-black"
          type="reset"
        />
        <PrimaryButton
          text="Add trip"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[77px] text-black"
          type="submit"
        />
      </div>
      <CloseModal handleCloseModal={handleCloseModal} />
    </form>
  );
}
