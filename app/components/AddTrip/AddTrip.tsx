import PrimaryButton from "@/app/utils/PrimaryButton";
import TextInput from "@/app/utils/TextInput";
import SelectInput from "@/app/utils/SelectInput";
import Image from "next/image";
import { images } from "@/app/constants/constants";
const inputFields = [
  [
    { label: "Trip id", type: "text", placeholder: "Placeholder" },
    {
      label: "Transporter",
      type: "dropdown",
      options: ["Bluedart", "DHL", "Delhivery", "DTDC", "Gati", "Safexpress"],
    },
  ],
  [
    { label: "Source", type: "text", placeholder: "Placeholder" },
    { label: "Destination", type: "text", placeholder: "Placeholder" },
  ],
  [{ label: "Phone", type: "tel", placeholder: "Placeholder" }],
];

export default function AddTrip({
  handleCloseModal,
}: {
  handleCloseModal(e: React.MouseEvent<HTMLDivElement>): void;
}) {
  return (
    <form className="bg-white px-[24px] pt-[20px] w-[648px] relative">
      <h3 className="text-fs-20 font-bold mb-[36px]">Add Trip</h3>
      <div>
        {inputFields.map((row, rowIndex) => (
          <div
            className="flex items-center gap-[40px] mb-[24px]"
            key={`row-${rowIndex}`}
          >
            {row.map((field, index) => (
              <div key={`input-${rowIndex}${index}`}>
                <div className="text-fs-12 font-bold mb-2">{field.label}</div>
                {field.type === "dropdown" ? (
                  <SelectInput options={field.options as string[]} />
                ) : (
                  <TextInput
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 py-4 border-t-borderColor border-t-[1px] justify-end">
        <PrimaryButton
          text="Cancel"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[98px] text-black"
          type="reset"
        />
        <PrimaryButton
          text="Add trip"
          className="bg-white border-borderColor border-[1px] text-fs-12 max-w-[77px] text-black"
          type="submit"
        />
      </div>
      <div
        className="w-[32px] h-[32px]  absolute top-[20px] right-[32px] flex items-center justify-center cursor-pointer"
        onClick={handleCloseModal}
      >
        <Image src={images.cross} alt="Close" className="h-[16px] w-[16px]" />
      </div>
    </form>
  );
}
