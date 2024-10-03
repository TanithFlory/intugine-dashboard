import { ButtonHTMLAttributes } from "react";
import Loader from "./Loader";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

function PrimaryButton({
  text,
  className,
  isLoading,
  isDisabled,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`h-[32px] w-full text-fs-12 ${className} rounded-[4px] ${
        isDisabled ? "cursor-not-allowed" : ""
      }`}
      {...props}
      disabled={isDisabled}
    >
      {!isLoading ? text : <Loader />}
    </button>
  );
}

export default PrimaryButton;
