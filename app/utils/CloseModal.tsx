import { CloseModalType } from "@/types";
import { images } from "../constants/constants";
import Image from "next/image";

export default function CloseModal({
  handleCloseModal,
}: {
  handleCloseModal: (e: CloseModalType) => void;
}) {
  return (
    <div
      className="w-[32px] h-[32px]  absolute top-[20px] right-[32px] flex items-center justify-center cursor-pointer"
      onClick={handleCloseModal}
    >
      <Image src={images.cross} alt="Close" className="h-[16px] w-[16px]" />
    </div>
  );
}
