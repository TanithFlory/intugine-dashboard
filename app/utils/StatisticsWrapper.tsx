import { Wrapper } from "@/types";

export default function StatisticsWrapper({
  children,
  className,
  ...props
}: Wrapper) {
  return (
    <div
      className={`${className} border-[1px] border-borderColor rounded-[8px] py-[12px] px-[24px] h-[100px]`}
      {...props}
    >
      {children}
    </div>
  );
}
