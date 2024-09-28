import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function StatisticsWrapper({
  children,
  className,
  ...props
}: IProps) {
  return (
    <div
      className={`${className} border-[1px] border-borderColor rounded-[8px] py-[12px] px-[24px]`}
      {...props}
    >
      {children}
    </div>
  );
}
