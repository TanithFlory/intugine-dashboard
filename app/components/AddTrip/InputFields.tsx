import TextInput from "@/app/utils/TextInput";
import SelectInput from "@/app/utils/SelectInput";

export default function InputFields() {
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

  return (
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
                <TextInput type={field.type} placeholder={field.placeholder} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
