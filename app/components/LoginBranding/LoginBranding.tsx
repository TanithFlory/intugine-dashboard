import Image from "next/image";
import { images } from "@/app/constants/constants";

export default function LoginBranding() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 ">
        <div>
          <Image src={images.logo} alt="logo" className="h-[50px] w-[50px]" />
        </div>
        <h3 className="text-fs-20 text-[#334F97] font-bold">
          Intugine Technologies
        </h3>
      </div>
      <p className="text-fs-12 mb-2 ml-1">Logistics Through Innovation</p>
      <div className="text-fs-12 rounded-[4px] text-buttonColor bg-[#F3F1F3] w-[60px] text-center h-[30px] flex items-center justify-center mb-8">
        Intracity
      </div>
    </div>
  );
}
