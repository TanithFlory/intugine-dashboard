import { InputHTMLAttributes } from "react";

function TextInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`${className} text-fs-12 box-border font-sans px-4 py-2 rounded-[4px] placeholder:tracking-[0.4px] h-[35px] outline-none w-[280px] border-borderColor border-[1px] placeholder:text-[#666666] text-[#1A1A1A]`}
    />
  );
}

export default TextInput;
