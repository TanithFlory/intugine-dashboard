import { Wrapper } from "@/types";

export default function SectionWrapper({
  children,
  className,
  ...props
}: Wrapper) {
  return (
    <div {...props} className={`${className} max-w-[1232px] mx-auto mt-[24px]`}>
      {children}
    </div>
  );
}
