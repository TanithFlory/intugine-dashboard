import { CloseModalType } from "@/types";
import { images } from "../constants/constants";
import Image from "next/image";

export default function CloseModal({
  handleCloseModal,
}: {
  handleCloseModal: (e: CloseModalType) => void;
}) {
  return (
    <div className="w-[16px] h-[16px]  absolute top-[32px] right-[34px] flex items-center justify-center cursor-pointer">
      <Image
        src={images.cross}
        alt="Close"
        className="h-full w-full"
        onClick={handleCloseModal}
      />
    </div>
  );
}
