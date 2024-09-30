import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

function PrimaryButton({ text, className, ...props }: PrimaryButtonProps) {
  return (
    <button className={`h-[32px] w-full bg-buttonColor text-white text-fs-12 ${className} rounded-[4px]`} {...props}>
      {text}
    </button>
  );
}

export default PrimaryButton;
