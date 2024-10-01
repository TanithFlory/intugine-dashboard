import Image from "next/image";
import TextInput from "../utils/TextInput";
import { images } from "../constants/constants";

export default function LoginForm() {
  return (
    <div className="max-w-[320px] px-2">
      <div className="flex items-center gap-2 mb-2 ">
        <div>
          <Image src={images.logo} alt="logo" className="h-[50px] w-[50px]"/>
        </div>
        <h3 className="text-fs-20 text-[#334F97] font-bold">
          Intugine Technologies
        </h3>
      </div>
      <p className="text-fs-12 mb-2 ml-1">Logistics Through Innovation</p>
      <div className="text-fs-12 rounded-[4px] text-buttonColor bg-[#F3F1F3] w-[60px] text-center h-[30px] flex items-center justify-center mb-8">
        Intracity
      </div>

      <form className="w-[320px]">
        <div className="mb-4">
          <label className="text-fs-12 font-bold mb-2">Username</label>
          <TextInput placeholder="username" required type="text" />
        </div>
        <div className="mb-4">
          <label className="text-fs-12 font-bold mb-2">Password</label>
          <TextInput placeholder="password" required type="password" />
        </div>
        <div className="text-fs-12 text-buttonColor mb-4">Forgot Password?</div>

        <button className="w-[280px] bg-buttonColor rounded-[4px] text-fs-12 text-white h-[35px]">
          LOGIN
        </button>
      </form>
    </div>
  );
}
