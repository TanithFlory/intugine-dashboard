import tripStatuses from "@/app/constants/tripStatuses";
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
    dateTime: string;
    transporter?: Transporter;
    tripStatus?: TripStatus;
  };
  setTransporter?: (transporter: Transporter) => void;
  setTripStatus?: (tripStatus: TripStatus) => void;
};

export default function InputFields({
  onChangeHandler,
  setTripStatus,
  formData,
}: InputFields) {
  return (
    <div>
      <div className="mb-[24px]">
        <div className="text-fs-12 font-bold mb-2">Transporter</div>
        <SelectInput
          options={tripStatuses}
          setTripStatus={setTripStatus}
          value={formData.tripStatus as string}
        />
      </div>
      <div className="mb-[24px]">
        <div className="text-fs-12 font-bold mb-2">Time</div>
        <TextInput
          type="datetime-local"
          placeholder="Placeholder"
          name="dateTime"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
