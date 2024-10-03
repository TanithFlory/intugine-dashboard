import TextInput from "@/app/utils/TextInput";
import SelectInput from "@/app/utils/SelectInput";
import { AddTripForm, Transporter } from "@/types";
import inputFields from "./inputFieldsData";
import { ChangeEvent } from "react";

type InputFields = {
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formData: AddTripForm;
  setTransporter: (transporter: Transporter) => void;
  errors: { [key: string]: string } | null;
};

export default function InputFields({
  onChangeHandler,
  formData,
  setTransporter,
  errors,
}: InputFields) {
  return (
    <div className="mb-8">
      {inputFields.map((row, rowIndex) => (
        <div
          className={`flex items-center gap-[40px] ${
            rowIndex + 1 === inputFields.length ? "" : "mb-[24px]"
          }`}
          key={`row-${rowIndex}`}
        >
          {row.map(
            ({ type, label, options, placeholder, name, maxLength }, index) => (
              <div key={`input-${rowIndex}${index}`}>
                <div className="text-fs-12 font-bold mb-2">{label}</div>
                {type === "dropdown" ? (
                  <SelectInput
                    options={(options || []) as Transporter[]}
                    setTransporter={setTransporter}
                    value={formData.transporter}
                  />
                ) : (
                  <TextInput
                    type={type}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    value={formData[name as keyof AddTripForm]}
                    name={name}
                    maxLength={maxLength}
                    required
                  />
                )}
                {errors?.[name] && (
                  <div className="text-fs-12 text-red-500 my-1">
                    {errors[name] || errors.global}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
