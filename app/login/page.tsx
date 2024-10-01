import { images } from "../constants/constants";
import Image from "next/image";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Page() {
  return (
    <div className="h-screen w-screen flex">
      <div className="flex items-center justify-center relative grow basis-[70%] bg-[#F5F8FF] max-lg:hidden">
        <div className="relative h-full w-full">
          <Image src={images.loginBg} alt="Login Background" layout="fill" />
        </div>
      </div>

      <div className="bg-white flex items-center justify-center grow basis-[30%] max-lg:basis-full">
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
