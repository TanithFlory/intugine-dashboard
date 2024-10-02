import { StatusType } from "@/types";

interface IProps {
  status: StatusType;
}

export default function Status({ status }: IProps) {
  return (
    <div
      className={`rounded-[4px] h-[24px] text-center flex items-center justify-center ${
        typeClasses[status] || "bg-tripStatus text-tripStatusText"
      }`}
    >
      {status.replace("_", " ")}
    </div>
  );
}

const typeClasses: Record<StatusType, string> = {
  "On Time": "bg-onTime text-onTimeText",
  Delayed: "bg-delayed text-delayedText",
  Other: "bg-otherStatus text-otherStatusText",
};
