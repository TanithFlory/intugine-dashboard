import SelectInput from "@/app/utils/SelectInput";
import TextInput from "@/app/utils/TextInput";
import { Transporter, TripStatus } from "@/types";
import { ChangeEvent } from "react";

type InputFields = {
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errors: { [key: string]: string } | null;
  formData: {
    dateTime: Date;
    transporter?: Transporter;
    tripStatus?: TripStatus;
  };
  setTransporter?: (transporter: Transporter) => void;
  setTripStatus?: (tripStatus: TripStatus) => void;
};

export default function InputFields({
  onChangeHandler,
  setTransporter,
  setTripStatus,
  formData,
}: InputFields) {
  const transporterOptions = [
    "Booked",
    "In Transit",
    "Reached Destination",
    "Delivered",
  ];

  return (
    <div>
      <div className="mb-[24px]">
        <div className="text-fs-12 font-bold mb-2">Transporter</div>
        <SelectInput
          options={transporterOptions}
          setTripStatus={setTripStatus}
          value={formData.tripStatus as string}
        />
      </div>
      <div className="mb-[24px]">
        <div className="text-fs-12 font-bold mb-2">Time</div>
        <TextInput
          type="datetime-local"
          placeholder="Placeholder"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
